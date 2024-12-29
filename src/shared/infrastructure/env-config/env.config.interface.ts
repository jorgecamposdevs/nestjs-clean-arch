export interface EnvConfig {
  /**
   * Retorna a porta na qual a aplicação está rodando.
   * @returns número representando a porta
   */
  getAppPort(): number;

  /**
   * Retorna o ambiente atual da aplicação (ex.: "development", "production").
   * @returns string representando o ambiente
   */
  getModuleEnv(): string;
}
