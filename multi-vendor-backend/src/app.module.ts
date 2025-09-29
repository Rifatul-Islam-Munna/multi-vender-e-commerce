import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';

import { Connection } from 'mongoose';

import { OpenSeachModule } from './open-seach/open-seach.module';


@Module({
  imports: [
     ConfigModule.forRoot({
    isGlobal:true
  }),
    MongooseModule.forRoot(process.env.MONGO_URI_DEFAULT as string,{
  onConnectionCreate: (connection: Connection) => {
    connection.on('connected', () => console.log('connected'));
    connection.on('open', () => console.log('open'));
    connection.on('disconnected', () => console.log('disconnected'));
    connection.on('reconnected', () => console.log('reconnected'));
    connection.on('disconnecting', () => console.log('disconnecting'));

    return connection;
  },
})
    
    ,UserModule, AuthModule, ProductModule,  OpenSeachModule,


],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
