const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk');
const inquirer = require('inquirer').default;

const TEMPLATES_DIR = path.join(process.cwd(), 'templates');
const APPS_DIR = path.join(process.cwd(), 'apps');

async function getTemplates() {
  const templates = await fs.readdir(TEMPLATES_DIR);
  return templates.filter((dir) => fs.statSync(path.join(TEMPLATES_DIR, dir)).isDirectory());
}

async function promptUser() {
  const templates = await getTemplates();

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'appName',
      message: 'App name:',
      validate: (input) => {
        if (!input.trim()) {
          return 'App name is required';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'port',
      message: 'Dev server port:',
      default: '3000',
      validate: (input) => {
        const port = parseInt(input);
        if (isNaN(port) || port < 1 || port > 65535) {
          return 'Please enter a valid port number (1-65535)';
        }
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

  return answers;
}

async function createApp() {
  try {
    const { appName, template, port } = await promptUser();
    const targetDir = path.join(APPS_DIR, appName);
    const templateDir = path.join(TEMPLATES_DIR, template);

    // Check if directory already exists
    if (fs.existsSync(targetDir)) {
      console.error(chalk.red(`App ${appName} already exists!`));
      process.exit(1);
    }

    console.log(chalk.blue(`Creating new app: ${appName} using ${template} template...`));

    // Copy template, excluding node_modules
    await fs.copy(templateDir, targetDir, {
      filter: (src) => !src.includes('node_modules'),
    });

    // Update package.json
    const packageJson = await fs.readJson(path.join(targetDir, 'package.json'));
    packageJson.name = `@apps/${appName}`;
    await fs.writeJson(path.join(targetDir, 'package.json'), packageJson, { spaces: 2 });

    // Update vite.config.ts base path and port
    const viteConfigPath = path.join(targetDir, 'vite.config.ts');
    let viteConfig = await fs.readFile(viteConfigPath, 'utf8');
    viteConfig = viteConfig.replace(/server:\s*{[^}]*}/, `server: { port: ${port} }`);
    viteConfig = viteConfig.replace(/preview:\s*{[^}]*}/, `preview: { port: ${port} }`);
    await fs.writeFile(viteConfigPath, viteConfig);

    // Update dts.config.json
    const dtsConfigPath = path.join(targetDir, 'dts.config.json');
    let dtsConfig = await fs.readJson(dtsConfigPath);
    dtsConfig.name = appName;
    await fs.writeJson(dtsConfigPath, dtsConfig, { spaces: 2 });

    console.log(chalk.green('Installing dependencies...'));
    execSync('pnpm install', { cwd: targetDir, stdio: 'inherit' });

    console.log(chalk.green(`\nSuccessfully created app: ${appName}`));
    console.log(chalk.blue('\nNext steps:'));
    console.log(chalk.yellow(`  cd apps/${appName}`));
    console.log(chalk.yellow('  pnpm dev'));
  } catch (err) {
    console.error(chalk.red('Error creating app:'), err);
    process.exit(1);
  }
}

createApp();
