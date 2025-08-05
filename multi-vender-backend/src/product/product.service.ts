import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ConnectionService } from 'src/db-config/mongoose.service';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument, ProductSchema, ProductStats, ProductStatsDocument } from './entities/product.entity';
import { Model } from 'mongoose';
import { TypesensService } from 'src/typesens/typesens.service';

@Injectable()
export class ProductService {
  private logger = new Logger(ProductService.name);
  constructor( private connectionService: ConnectionService,@InjectModel(Product.name) private productModel:Model<ProductDocument>, @InjectModel(ProductStats.name) private productStatsModel:Model<ProductStatsDocument>, private productTypeSens:TypesensService ) {}
  async create(createProductDto: CreateProductDto) {
   const productModel = await this.connectionService.getConnection<ProductStatsDocument>(createProductDto.category.main,Product.name,ProductSchema)
   
const createNewProduct = await productModel.create(createProductDto);
if(!createNewProduct){
  throw Error('Product not created');
}
return createNewProduct;




  }
  async createRandomProduct(){
    const product = {
  id: "abc123",
  name: "Awesome Product",
  price: 49.99,
  description: "This is an awesome product you will love.",
  thumbnail: "https://example.com/image.jpg",
  offerPrice: 39.99,
  freeShipping: true,
  brand: "BrandName",
  stock: 100,
  soldCount: 25,
  hasOffer: true,
  main: "Electronics",
  subMain: "Computers",
  semiSub: "Laptops",
  category: "Gaming"
};


  const s = await  this.productTypeSens.addProduct(product)
  return s
  }
  async findRandomProduct(){
    const s = await  this.productTypeSens.searchProducts({query:"Awesome"})
    return s
  }

  async findAll() {
  
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
