import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ConnectionService } from 'src/db-config/mongoose.service';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema, ProductStats, ProductStatsSchema } from './entities/product.entity';
import { TypesensModule } from 'src/typesens/typesens.module';

@Module({
  imports:[MongooseModule.forFeature([{name:Product.name,schema:ProductSchema},{name:ProductStats.name,schema:ProductStatsSchema}]),TypesensModule],
  controllers: [ProductController],
  providers: [ProductService,ConnectionService],
})
export class ProductModule {}
