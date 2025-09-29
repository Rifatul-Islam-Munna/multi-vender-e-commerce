
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
export type UserRole = 'customer' | 'vendor' | 'admin';
@Schema({
    timestamps: true,

})
export class User {
 @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ enum: ['customer', 'vendor', 'admin'], default: 'customer' })
  role: UserRole;

  @Prop()
  name: string;

  @Prop()
  profileImage?: string;
  @Prop()
  phone?: string;

  @Prop()
  address?: string;

  
  @Prop()
  storeName?: string;

  @Prop()
  storeDescription?: string;

  @Prop()
  storeLogo?: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isDeleted: boolean;

  @Prop({ default: false })
  isVerified: boolean;

  @Prop()
  RefreshToken: string;


  @Prop({default: new Date()})
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);