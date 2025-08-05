import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'securePassword123' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiPropertyOptional({ enum: ['customer', 'vendor', 'admin'], default: 'customer' })
  @IsEnum(['customer', 'vendor', 'admin'])
  @IsOptional()
  role?: 'customer' | 'vendor' | 'admin';

  @ApiPropertyOptional({ example: 'John Doe' })
  @IsString()
  @IsOptional()
  name?: string;
  @ApiPropertyOptional({ example: 'profile image link' })
  @IsString()
  @IsOptional()
  profileImage?: string;

  @ApiPropertyOptional({ example: '+1234567890' })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional({ example: '123 Market St, City, Country' })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiPropertyOptional({ example: 'Best Store' })
  @IsString()
  @IsOptional()
  storeName?: string;

  @ApiPropertyOptional({ example: 'We sell quality items.' })
  @IsString()
  @IsOptional()
  storeDescription?: string;

  @ApiPropertyOptional({ example: 'https://cdn.example.com/logo.png' })
  @IsString()
  @IsOptional()
  storeLogo?: string;
}



export class LoginDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'securePassword123' })
  @IsString()
  @MinLength(6)
  password: string;
}



