import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypesensService } from './typesens.service';
import { CreateTypesenDto } from './dto/create-typesen.dto';
import { UpdateTypesenDto } from './dto/update-typesen.dto';

@Controller('typesens')
export class TypesensController {
  constructor(private readonly typesensService: TypesensService) {}

  @Post()
  create(@Body() createTypesenDto: CreateTypesenDto) {
    return this.typesensService.create(createTypesenDto);
  }

  @Get()
  findAll() {
    return this.typesensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typesensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypesenDto: UpdateTypesenDto) {
    return this.typesensService.update(+id, updateTypesenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typesensService.remove(+id);
  }
}
