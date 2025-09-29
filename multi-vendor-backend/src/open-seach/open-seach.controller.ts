import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpenSeachService } from './open-seach.service';
import { CreateOpenSeachDto } from './dto/create-open-seach.dto';
import { UpdateOpenSeachDto } from './dto/update-open-seach.dto';

@Controller('open-seach')
export class OpenSeachController {
  constructor(private readonly openSeachService: OpenSeachService) {}

  @Post()
 

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.openSeachService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpenSeachDto: UpdateOpenSeachDto) {
    return this.openSeachService.update(+id, updateOpenSeachDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.openSeachService.remove(+id);
  }
}
