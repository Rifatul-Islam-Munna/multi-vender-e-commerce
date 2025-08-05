import { Test, TestingModule } from '@nestjs/testing';
import { TypesensController } from './typesens.controller';
import { TypesensService } from './typesens.service';

describe('TypesensController', () => {
  let controller: TypesensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypesensController],
      providers: [TypesensService],
    }).compile();

    controller = module.get<TypesensController>(TypesensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
