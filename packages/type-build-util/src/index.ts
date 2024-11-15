#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from 'fs';
import path from 'path';
import {
  CompilationOptions,
  generateDtsBundle,
  type EntryPointConfig,
} from 'dts-bundle-generator';
import { Logger } from './utils/logger';
import { Config, Exposes } from './types';
import { loadConfig } from './helpers/load-config';
import { loadExposes } from './helpers/load-exposes';

function main() {
  Logger.normalLog('Running type generation scripts...');

  const curPath = process.cwd();

  // Load configs from dts.config.json
  const configs: Config = loadConfig(path.resolve(curPath, 'dts.config.json'));

  // Load exposes from exposes.json
  const exposes: Exposes = loadExposes(configs.exposesPath);

  // Gernerate dts
  const entries: EntryPointConfig[] = Object.entries(exposes).map(
    ([moduleName, modulePath]) => {
      const umdModuleName = moduleName.replace(/^\.\//, '');
      return {
        filePath: modulePath,
        output: {
          umdModuleName,
          noBanner: true,
          inlineDeclareGlobals: true,
          inlineDeclareExternals: true,
        },
      };
    }
  );
  const compilationOptions: CompilationOptions = {
    preferredConfigPath: configs.tsConfigPath,
  };

  const dtsList = generateDtsBundle(entries, compilationOptions);

  // Wrapping dts
  const moduleDts = Object.keys(exposes).reduce((acc, moduleName, i) => {
    const name = path.join(configs.name, moduleName);
    const content = dtsList[i]
      .split('\n')
      .map((line) => `  ${line}`)
      .join('\n');
    return (acc += `declare module '${name}' {\n${content}\n}\n\n`);
  }, `// This d.ts file is automatically generated\n`);

  // Write into target file
  const outputFilePath = path.resolve(configs.outDir, `${configs.name}.d.ts`);
  const dir = path.dirname(outputFilePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(outputFilePath, moduleDts, 'utf8');

  Logger.normalLog(`Contents updates on ${outputFilePath}`);
  Logger.normalLog('Type generation complete.');
}

main();
