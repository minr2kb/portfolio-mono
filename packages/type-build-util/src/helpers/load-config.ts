import { Logger } from '../utils/logger';
import { Config } from '../types';
import { existsSync, readFileSync } from 'fs';

function isValidConfig(obj: any): obj is Config {
  return (
    typeof obj === 'object' &&
    typeof obj.name === 'string' &&
    typeof obj.exposesPath === 'string' &&
    typeof obj.outDir === 'string' &&
    typeof obj.tsConfigPath === 'string'
  );
}

// Load and validate config from dts.config.json
export function loadConfig(filePath: string): Config {
  if (!existsSync(filePath)) {
    const errorMsg = `Configuration file not found: ${filePath}`;
    Logger.errorLog(errorMsg);
    throw new Error(errorMsg);
  }

  const rawData = readFileSync(filePath, 'utf8');
  let config: any;

  try {
    config = JSON.parse(rawData);
  } catch (error) {
    const errorMsg = `Error parsing configuration file: ${error}`;
    Logger.errorLog(errorMsg);
    throw new Error(errorMsg);
  }

  // Use custom type guard to validate
  if (!isValidConfig(config)) {
    const errorMsg = 'Invalid configuration structure';
    Logger.errorLog(errorMsg);
    throw new Error(errorMsg);
  }

  // Valid tsconfig path
  if (!existsSync(config.tsConfigPath)) {
    const errorMsg = `tsConfig file not found: ${filePath}`;
    Logger.errorLog(errorMsg);
    throw new Error(errorMsg);
  }

  return config;
}
