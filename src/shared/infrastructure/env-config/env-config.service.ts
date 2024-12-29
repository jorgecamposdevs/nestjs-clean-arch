import { Injectable } from '@nestjs/common';
import { EnvConfig } from './env.config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private configService: ConfigService) {}

  getAppPort(): number {
    const port = this.configService.get<string>('PORT');
    return port ? parseInt(port, 10) : 3000; // Valor padrão como fallback
  }

  getModuleEnv(): string {
    return this.configService.get<string>('NODE_ENV');
  }
}
