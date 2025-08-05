import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;
export type ProductStatsDocument = HydratedDocument<ProductStats>;

@Schema()
class ProductImage {
  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  key: string;

  @Prop({ required: true })
  id: string;
}

@Schema({ _id: false })
class ProductCategory {
  @Prop({ required: true })
  main: string;

  @Prop()
  subMain: string;

  @Prop()
  semiSub: string;

  @Prop({ required: true })
  category: string;
}
@Schema()
export class ProductStats {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Product', unique: true })
  productId: string;

  @Prop({ default: 0 })
  soldCount: number;



  
}
@Schema({ timestamps: true ,autoIndex:true})
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: 0 })
  stock: number;

  @Prop({ type: ProductImage, required: true })
  thumbnail: ProductImage;

  @Prop({ type: [ProductImage], default: [] })
  images: ProductImage[];


  @Prop({ type: ProductCategory, required: true })
  category: ProductCategory;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isDeleted: boolean;

 

  @Prop({unique:true,index:true})
  slug: string;
  
  @Prop()
  height: number;

  @Prop()
  width: number;

  @Prop()
  weight: string;

  @Prop()
  size: string;
  @Prop({type:[String],default:[]})
  colors: string[];
   @Prop()
  metaTitle: string;

  @Prop()
  metaDescription: string;
    @Prop()
    warrantyPeriod: string; 

    @Prop()
    returnPolicy: string; 
    @Prop({ default: false })
    isDigital: boolean; 

    @Prop()
    brand: string; 

    @Prop({ default: false })
    hasOffer: boolean;

    @Prop()
    offerPrice: number;

    @Prop()
    offerExpiresAt: Date;


    @Prop({ type: Map, of: String })
    specifications: Map<string, string>; 

    @Prop()
   shippingTime: string; 

    @Prop()
    shippingCost: number;

    @Prop({ default: false })
    freeShipping: boolean;

     @Prop({ type: [String], default: [] })
    certifications: string[]; 
      @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
    createdBy: string;

   @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
   updatedBy: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'ProductStats' })
   stats: string;
 

}

export const ProductSchema = SchemaFactory.createForClass(Product);
export const ProductStatsSchema = SchemaFactory.createForClass(ProductStats);


