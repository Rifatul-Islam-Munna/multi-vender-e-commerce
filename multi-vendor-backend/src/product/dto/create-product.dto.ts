import { 
  IsString, IsNumber, IsOptional, IsBoolean, IsArray, IsDateString, IsMongoId, ValidateNested, IsObject, 
  IsNotEmpty
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProductImageDto {
  @ApiProperty({ description: 'URL of the product image' })
  @IsString()
  url: string;

  @ApiProperty({ description: 'Storage key of the product image' })
  @IsString()
  key: string;

  @ApiProperty({ description: 'ID of the product image' })
  @IsString()
  id: string;
}

class ProductCategoryDto {
  @ApiProperty({ description: 'Main category' })
  @IsString()
  main: string;

  @ApiPropertyOptional({ description: 'Sub main category' })
  @IsOptional()
  @IsString()
  subMain?: string;

  @ApiPropertyOptional({ description: 'Semi sub category' })
  @IsOptional()
  @IsString()
  semiSub?: string;

  @ApiProperty({ description: 'Category name' })
  @IsString()
  category: string;
}
export class ColorImageDto {
  @ApiProperty({ description: 'Color name', example: 'Black' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ 
    description: 'Array of image URLs for this color',
    type: [String] 
  })
  @IsArray()
  @IsString({ each: true })
  images: string[];
}
export class FeatureDto {
  @ApiProperty({ 
    description: 'Feature name',
    example: 'Active Noise Cancellation' 
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ 
    description: 'Feature description',
    example: 'Advanced ANC technology' 
  })
  @IsString()
  @IsOptional()
  description?: string;
}



export class CreateProductDto {
  @ApiProperty({ description: 'Product name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Product description' })
  @IsOptional()
  @IsString()
  description?: string;
   @ApiPropertyOptional({ description: 'Product description',type:[ColorImageDto] })

  colorsImage: ColorImageDto[]
   @ApiPropertyOptional({ description: 'Product description',type:[FeatureDto] })

  features: FeatureDto[]



  @ApiProperty({ description: 'Product price' })
  @Transform(({ value }) => Number(value))
  @IsNumber()
  price: number;

  @ApiPropertyOptional({ description: 'Stock quantity', default: 0 })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  stock?: number;

  @ApiProperty({ type: ProductImageDto, description: 'Thumbnail image' })
  @ValidateNested()
  @Type(() => ProductImageDto)
  thumbnail: ProductImageDto;

  @ApiProperty({ type: [ProductImageDto], description: 'Additional images', default: [] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductImageDto)
  images: ProductImageDto[];

  @ApiProperty({ type: ProductCategoryDto, description: 'Product category' })
  @ValidateNested()
  @Type(() => ProductCategoryDto)
  category: ProductCategoryDto;

  @ApiPropertyOptional({ description: 'Is the product active?', default: true })
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Is the product deleted?', default: false })
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  isDeleted?: boolean;

  @ApiPropertyOptional({ description: 'Number of products sold', default: 0 })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  soldCount?: number;

  @ApiProperty({ description: 'Unique slug for the product' })
  @IsString()
  slug: string;

  @ApiPropertyOptional({ description: 'Product height' })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  height?: number;

  @ApiPropertyOptional({ description: 'Product width' })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  width?: number;

  @ApiPropertyOptional({ description: 'Product weight' })
  @IsOptional()
  @IsString()
  weight?: string;

  @ApiPropertyOptional({ description: 'Product size' })
  @IsOptional()
  @IsString()
  size?: string;

  @ApiPropertyOptional({ description: 'Available colors', type: [String], default: [] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  colors?: string[];

  @ApiPropertyOptional({ description: 'Meta title for SEO' })
  @IsOptional()
  @IsString()
  metaTitle?: string;

  @ApiPropertyOptional({ description: 'Meta description for SEO' })
  @IsOptional()
  @IsString()
  metaDescription?: string;

  @ApiPropertyOptional({ description: 'Warranty period' })
  @IsOptional()
  @IsString()
  warrantyPeriod?: string;

  @ApiPropertyOptional({ description: 'Return policy' })
  @IsOptional()
  @IsString()
  returnPolicy?: string;

  @ApiPropertyOptional({ description: 'Is this a digital product?', default: false })
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  isDigital?: boolean;

  @ApiPropertyOptional({ description: 'Brand name' })
  @IsOptional()
  @IsString()
  brand?: string;

  @ApiPropertyOptional({ description: 'Does the product have an offer?', default: false })
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  hasOffer?: boolean;

  @ApiPropertyOptional({ description: 'Offer price' })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  offerPrice?: number;

  @ApiPropertyOptional({ description: 'Offer expiry date' })
  @IsOptional()
  @IsDateString()
  offerExpiresAt?: Date;

  @ApiPropertyOptional({ description: 'Product specifications as key-value pairs', type: 'object', additionalProperties: { type: 'string' } })
  @IsOptional()
  @IsObject()
  specifications?: Record<string, string>;

  @ApiPropertyOptional({ description: 'Shipping time' })
  @IsOptional()
  @IsString()
  shippingTime?: string;

  @ApiPropertyOptional({ description: 'Shipping cost' })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  shippingCost?: number;

  @ApiPropertyOptional({ description: 'Is free shipping available?', default: false })
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  freeShipping?: boolean;

  @ApiPropertyOptional({ description: 'Certifications', type: [String], default: [] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  certifications?: string[];

  @ApiPropertyOptional({ description: 'ID of the user who created the product' })
  @IsOptional()
  @IsMongoId()
  createdBy?: string;

  @ApiPropertyOptional({ description: 'ID of the user who last updated the product' })
  @IsOptional()
  @IsMongoId()
  updatedBy?: string;
  @ApiPropertyOptional({ description: 'ID of the user who last updated the product' })
  @IsOptional()
  @IsMongoId()
  stats?: string;


}
