

import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsMongoId, IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
 @ApiProperty({ example: 'mongoDB id' })
    @IsMongoId()
    @IsNotEmpty()
    id:string
}

