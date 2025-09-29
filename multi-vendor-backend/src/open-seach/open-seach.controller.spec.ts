import { Test, TestingModule } from '@nestjs/testing';
import { OpenSeachController } from './open-seach.controller';
import { OpenSeachService } from './open-seach.service';

describe('OpenSeachController', () => {
  let controller: OpenSeachController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenSeachController],
      providers: [OpenSeachService],
    }).compile();

    controller = module.get<OpenSeachController>(OpenSeachController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
