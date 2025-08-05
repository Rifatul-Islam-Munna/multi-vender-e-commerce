import { Test, TestingModule } from '@nestjs/testing';
import { TypesensService } from './typesens.service';

describe('TypesensService', () => {
  let service: TypesensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypesensService],
    }).compile();

    service = module.get<TypesensService>(TypesensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
