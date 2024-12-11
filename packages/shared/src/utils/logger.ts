import { logEvent } from './firebase';

export enum LogLevel {
  Debug = 'debug',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}

export class Logger {
  private static instance: Logger;
  private isProduction: boolean;

  private constructor() {
    this.isProduction = import.meta.env.NODE_ENV === 'production';
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public debug(message: string, params?: Record<string, any>): void {
    if (!this.isProduction) {
      console.debug(`[DEBUG] ${message}`, params);
    }
  }

  public info(message: string, params?: Record<string, any>): void {
    console.info(`[INFO] ${message}`, params);
    if (this.isProduction) {
      logEvent('info_log', { message, ...params });
    }
  }

  public warn(message: string, params?: Record<string, any>): void {
    console.warn(`[WARN] ${message}`, params);
    if (this.isProduction) {
      logEvent('warning_log', { message, ...params });
    }
  }

  public error(message: string, error?: Error, params?: Record<string, any>): void {
    console.error(`[ERROR] ${message}`, error, params);
    if (this.isProduction) {
      logEvent('error_log', {
        message,
        error: error?.message,
        stack: error?.stack,
        ...params,
      });
    }
  }
}

export const logger = Logger.getInstance();
