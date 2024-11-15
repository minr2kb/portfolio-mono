import { existsSync, readFileSync } from 'fs';
import { Exposes } from '../types';
import { Logger } from '../utils/logger';

export function loadExposes(exposesPath: string): Exposes {
  let exposes: Exposes;

  if (!existsSync(exposesPath)) {
    const errorMsg = `Exposes file not found: ${exposesPath}`;
    Logger.errorLog(errorMsg);
    throw new Error(errorMsg);
  }

  const rawExposesData = readFileSync(exposesPath, 'utf8');

  try {
    exposes = JSON.parse(rawExposesData);
  } catch (error) {
    const errorMsg = `Error parsing exposes file: ${error}`;
    Logger.errorLog(errorMsg);
    throw new Error(errorMsg);
  }

  return exposes;
}
