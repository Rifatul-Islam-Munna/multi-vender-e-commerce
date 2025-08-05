import { Module } from '@nestjs/common';
import { TypesensService } from './typesens.service';
import { TypesensController } from './typesens.controller';

@Module({
  controllers: [TypesensController],
  providers: [TypesensService],
  exports: [TypesensService]
})
export class TypesensModule {}
