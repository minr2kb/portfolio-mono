export enum LogLevel {
  Normal,
  Warning,
  Error,
}

export class Logger {
  public static normalLog(message: string): void {
    Logger.logMessage(message, LogLevel.Normal);
  }

  public static warnLog(message: string): void {
    Logger.logMessage(message, LogLevel.Warning);
  }

  public static errorLog(message: string): void {
    Logger.logMessage(message, LogLevel.Error);
  }

  private static logMessage(
    message: string,
    level: LogLevel = LogLevel.Normal
  ): void {
    switch (level) {
      case LogLevel.Error:
        // print red
        // eslint-disable-next-line no-console
        console.error(`\x1b[0;31m[Error] ${message}\x1b[0m`);
        break;

      case LogLevel.Warning:
        // eslint-disable-next-line no-console
        console.warn(`\x1b[1;33m[Warn] ${message}\x1b[0m`);
        break;

      case LogLevel.Normal:
        // eslint-disable-next-line no-console
        console.log('[Log]', message);
    }
  }
}
