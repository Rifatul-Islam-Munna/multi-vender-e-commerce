import { Test, TestingModule } from '@nestjs/testing';
import { OpenSeachService } from './open-seach.service';

describe('OpenSeachService', () => {
  let service: OpenSeachService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenSeachService],
    }).compile();

    service = module.get<OpenSeachService>(OpenSeachService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
