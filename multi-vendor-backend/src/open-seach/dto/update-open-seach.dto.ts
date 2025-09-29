import { PartialType } from '@nestjs/swagger';
import { CreateOpenSeachDto } from './create-open-seach.dto';

export class UpdateOpenSeachDto extends PartialType(CreateOpenSeachDto) {}
