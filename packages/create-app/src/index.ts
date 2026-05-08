import chalk from 'chalk';
import { execSync } from 'child_process';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import path from 'path';

const ROOT_DIR = process.cwd();
const TEMPLATES_DIR = path.join(ROOT_DIR, 'templates');
const APPS_DIR = path.join(ROOT_DIR, 'apps');
const HOST_DIR = path.join(APPS_DIR, 'host');

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getTemplates(): string[] {
  return fs
    .readdirSync(TEMPLATES_DIR)
    .filter((dir) => fs.statSync(path.join(TEMPLATES_DIR, dir)).isDirectory());
}

function toEnvKey(appName: string): string {
  return `VITE_${appName.replace(/[\s-]+/g, '_').toUpperCase()}_URL`;
}

function deriveProdUrl(appName: string): string {
  const envProd = fs.readFileSync(path.join(APPS_DIR, '.env.production'), 'utf8');
  const match = envProd.match(/VITE_HOST_URL=https?:\/\/([^.\n]+)\.web\.app/);
  const prefix = match ? match[1] : 'portfolio-kbmin';
  return `https://${prefix}-${appName}.web.app`;
}

// ─── Prompt ───────────────────────────────────────────────────────────────────

async function promptUser(): Promise<{ appName: string; port: number; template: string }> {
  const templates = getTemplates();

  const answers = await inquirer.prompt<{ appName: string; port: string; template: string }>([
    {
      type: 'input',
      name: 'appName',
      message: 'App name (e.g. v5):',
      validate: (input: string) => {
        const name = input.trim();
        if (!name) return 'App name is required';
        if (fs.existsSync(path.join(APPS_DIR, name))) return `"${name}" already exists in apps/`;
        return true;
      },
    },
    {
      type: 'input',
      name: 'port',
      message: 'Dev server port:',
      default: '3000',
      validate: (input: string) => {
        const p = parseInt(input);
        if (isNaN(p) || p < 1 || p > 65535) return 'Enter a valid port (1-65535)';
        return true;
      },
    },
    {
      type: 'list',
      name: 'template',
      message: 'Select a template:',
      choices: templates,
    },
  ]);

  return {
    appName: answers.appName.trim(),
    port: parseInt(answers.port),
    template: answers.template,
  };
}

// ─── Updaters ─────────────────────────────────────────────────────────────────

function updateAppPackageJson(targetDir: string, appName: string): void {
  const pkgPath = path.join(targetDir, 'package.json');
  const pkg = fs.readJsonSync(pkgPath);
  pkg.name = `@apps/${appName}`;
  fs.writeJsonSync(pkgPath, pkg, { spaces: 2 });
}

function updateAppViteConfig(targetDir: string, envName: string, port: number): void {
  const configPath = path.join(targetDir, 'vite.config.ts');
  let content = fs.readFileSync(configPath, 'utf8');
  content = content.replace(/env\.YOUR_APP_URL/, `env.${envName}`);
  content = content.replace(/port:\s*5000/g, `port: ${port}`);
  fs.writeFileSync(configPath, content);
}

function updateAppDtsConfig(targetDir: string, appName: string): void {
  const dtsPath = path.join(targetDir, 'dts.config.json');
  const dts = fs.readJsonSync(dtsPath);
  dts.name = appName;
  fs.writeJsonSync(dtsPath, dts, { spaces: 2 });
}

function updateEnvFiles(appName: string, port: number, prodUrl: string): void {
  const envName = toEnvKey(appName);
  const devPath = path.join(APPS_DIR, '.env.development');
  const prodPath = path.join(APPS_DIR, '.env.production');

  let dev = fs.readFileSync(devPath, 'utf8');
  let prod = fs.readFileSync(prodPath, 'utf8');
  if (!dev.endsWith('\n')) dev += '\n';
  if (!prod.endsWith('\n')) prod += '\n';

  fs.writeFileSync(devPath, `${dev}${envName}=http://localhost:${port}\n`);
  fs.writeFileSync(prodPath, `${prod}${envName}=${prodUrl}\n`);
}

function updateFirebaseJson(appName: string): void {
  const firebasePath = path.join(ROOT_DIR, 'firebase.json');
  const firebase = fs.readJsonSync(firebasePath);

  const envProd = fs.readFileSync(path.join(APPS_DIR, '.env.production'), 'utf8');
  const hostMatch = envProd.match(/VITE_HOST_URL=([^\n]+)/);
  const hostProdUrl = hostMatch ? hostMatch[1].trim() : 'https://portfolio-kbmin.web.app';

  firebase.hosting.push({
    target: appName,
    public: `apps/${appName}/dist`,
    ignore: ['firebase.json', '**/.*', '**/node_modules/**'],
    headers: [
      {
        source: '/assets/remoteEntry.js',
        headers: [{ key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' }],
      },
      {
        source: '**',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: hostProdUrl },
          { key: 'Access-Control-Allow-Methods', value: 'GET,PUT,POST,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ],
    redirects: [{ source: '/', destination: `${hostProdUrl}/${appName}`, type: 302 }],
  });

  fs.writeJsonSync(firebasePath, firebase, { spaces: 2 });
}

function updateFirebaseRc(appName: string): void {
  const rcPath = path.join(ROOT_DIR, '.firebaserc');
  const rc = fs.readJsonSync(rcPath);
  const project: string = rc.projects?.default ?? 'portfolio-kbmin';
  if (!rc.targets) rc.targets = {};
  if (!rc.targets[project]) rc.targets[project] = {};
  if (!rc.targets[project].hosting) rc.targets[project].hosting = {};
  rc.targets[project].hosting[appName] = [`${project}-${appName}`];
  fs.writeJsonSync(rcPath, rc, { spaces: 2 });
}

function updateRootPackageJson(appName: string): void {
  const pkgPath = path.join(ROOT_DIR, 'package.json');
  const pkg = fs.readJsonSync(pkgPath);
  pkg.scripts[`dev:${appName}`] = `turbo run @apps/${appName}#dev`;
  pkg.scripts[`deploy:${appName}`] = `turbo run @apps/${appName}#build && firebase deploy --only hosting:${appName}`;
  fs.writeJsonSync(pkgPath, pkg, { spaces: 2 });
}

function updateHostViteConfig(appName: string): void {
  const envName = toEnvKey(appName);
  const configPath = path.join(HOST_DIR, 'vite.config.ts');
  let content = fs.readFileSync(configPath, 'utf8');
  content = content.replace(
    /(remotes:\s*\{)([\s\S]*?)(\s*},)/,
    (_, open, entries, close) =>
      `${open}${entries}          ${appName}: \`\${env.${envName}}/assets/remoteEntry.js\`,\n${close}`,
  );
  fs.writeFileSync(configPath, content);
}

function updateHostAppTsx(appName: string): void {
  const appPath = path.join(HOST_DIR, 'src', 'App.tsx');
  let lines = fs.readFileSync(appPath, 'utf8').split('\n');

  // Add lazy route loader after the last existing LazyRouteLoader line
  const lastLoaderIdx = lines.reduce(
    (acc, line, idx) => (line.includes('LazyRouteLoader(') ? idx : acc),
    -1,
  );
  if (lastLoaderIdx >= 0) {
    lines.splice(
      lastLoaderIdx + 1,
      0,
      `  const ${appName}Routes = LazyRouteLoader(() => import('${appName}/AppRoutes'));`,
    );
  }

  // Add <Route> before the catch-all path='*' route
  const starPathIdx = lines.findIndex((l) => l.includes("path='*'"));
  if (starPathIdx >= 0) {
    const routeStartIdx =
      lines[starPathIdx - 1]?.trim() === '<Route' ? starPathIdx - 1 : starPathIdx;
    lines.splice(
      routeStartIdx,
      0,
      `        <Route path='/${appName}/*' element={${appName}Routes} />`,
    );
  }

  fs.writeFileSync(appPath, lines.join('\n'));
}

function createRemoteTypeStub(appName: string): void {
  const stubPath = path.join(HOST_DIR, 'src', 'remote-types', `${appName}.d.ts`);
  fs.writeFileSync(
    stubPath,
    `// This d.ts file is automatically generated
declare module '${appName}/AppRoutes' {
  export declare const AppRoutes: () => import("react/jsx-runtime").JSX.Element;

  export {
  \tAppRoutes as default,
  };

  export as namespace AppRoutes;

  export {};

}
`,
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function createApp(): Promise<void> {
  let targetDir: string | undefined;
  try {
    const { appName, port, template } = await promptUser();
    targetDir = path.join(APPS_DIR, appName);
    const templateDir = path.join(TEMPLATES_DIR, template);
    const envName = toEnvKey(appName);
    const prodUrl = deriveProdUrl(appName);

    console.log(chalk.blue(`\nCreating "${appName}" from "${template}" template...`));
    console.log(chalk.gray(`  Production URL: ${prodUrl}\n`));

    // 1. Copy template
    await fs.copy(templateDir, targetDir, {
      filter: (src) => !src.includes('node_modules'),
    });

    // 2. Update app package.json
    updateAppPackageJson(targetDir, appName);

    // 3. Update app vite.config.ts
    updateAppViteConfig(targetDir, envName, port);
    console.log(chalk.gray(`  ✓ apps/${appName}/vite.config.ts`));

    // 4. Update app dts.config.json
    updateAppDtsConfig(targetDir, appName);
    console.log(chalk.gray(`  ✓ apps/${appName}/dts.config.json`));

    // 5. Add env vars
    updateEnvFiles(appName, port, prodUrl);
    console.log(chalk.gray(`  ✓ apps/.env.development / .env.production  (${envName})`));

    // 6. Update firebase.json
    updateFirebaseJson(appName);
    console.log(chalk.gray(`  ✓ firebase.json  (target: "${appName}")`));

    // 7. Update .firebaserc
    updateFirebaseRc(appName);
    console.log(chalk.gray(`  ✓ .firebaserc  (hosting: "${appName}" → "${appName.replace(/[\s-]+/g, '')}")`));

    // 8. Update root package.json
    updateRootPackageJson(appName);
    console.log(chalk.gray(`  ✓ package.json  (dev:${appName}, deploy:${appName})`));

    // 9. Update host vite.config.ts
    updateHostViteConfig(appName);
    console.log(chalk.gray(`  ✓ apps/host/vite.config.ts  (remote: "${appName}")`));

    // 10. Update host App.tsx
    updateHostAppTsx(appName);
    console.log(chalk.gray(`  ✓ apps/host/src/App.tsx  (route: /${appName}/*)`));

    // 11. Create remote type stub
    createRemoteTypeStub(appName);
    console.log(chalk.gray(`  ✓ apps/host/src/remote-types/${appName}.d.ts`));

    // 12. Install dependencies
    console.log(chalk.blue('\nInstalling dependencies...'));
    execSync('pnpm install', { cwd: ROOT_DIR, stdio: 'inherit' });

    console.log(chalk.green(`\n✓ App "${appName}" ready!`));
    console.log(chalk.blue('\nNext steps:'));
    console.log(chalk.white(`  pnpm dev:${appName}`));
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(chalk.red('\nError creating app:'), message);
    if (targetDir && fs.existsSync(targetDir)) {
      fs.removeSync(targetDir);
      console.log(chalk.gray(`Cleaned up ${targetDir}`));
    }
    process.exit(1);
  }
}

createApp();
