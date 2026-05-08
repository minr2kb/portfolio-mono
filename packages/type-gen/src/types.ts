export interface Config {
  /**
   * 모듈 이름
   */
  name: string;
  /**
   * exposes.json 위치
   * @description exposes.json의 형태는 key(모듈 내 타입 위치) - value(파일 상대 위치)
   * ex) {'./Button':'./src/Button'}
   */
  exposesPath: string;
  /**
   * 생성된 모듈 타입을 넣어줄 타겟
   * @example ../host
   */
  outDir: string;
  /**
   * 생성할 타켓 관련 tsConfig의 위치
   * @example ./tsconfig.json
   */
  tsConfigPath: string;
}

export interface Exposes {
  [key: string]: string;
}
