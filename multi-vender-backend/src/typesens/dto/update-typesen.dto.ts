import { PartialType } from '@nestjs/swagger';
import { CreateTypesenDto } from './create-typesen.dto';

export class UpdateTypesenDto extends PartialType(CreateTypesenDto) {}
