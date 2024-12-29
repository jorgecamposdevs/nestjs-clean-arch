import { Test } from '@nestjs/testing/test';
import { TestingModule } from '@nestjs/testing/testing-module';
import { EnvConfigService } from '../../env-config.service';
import { ConfigService } from '@nestjs/config';

describe('EnvConfigService unit tests', () => {
  let sut: EnvConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EnvConfigService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              // Retorne valores mockados baseados na chave
              const mockEnv = {
                NODE_ENV: 'development',
                PORT: 3000,
              };
              return mockEnv[key];
            }),
          },
        },
      ],
    }).compile();

    sut = module.get<EnvConfigService>(EnvConfigService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should return the variable PORT', () => {
    // Verifica se o método retorna a porta mockada corretamente
    expect(sut.getAppPort()).toBe(3000);
  });

  it('should return the variable ENV', () => {
    // Verifica se o método retorna o ambiente mockado corretamente
    expect(sut.getModuleEnv()).toBe('development');
  });
});
