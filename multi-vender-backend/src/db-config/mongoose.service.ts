import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { Model, Schema, Connection, Document } from 'mongoose';

@Injectable()
export class ConnectionService {
   private readonly logger = new Logger(ConnectionService.name);
  private connections = new Map<string, mongoose.Connection>();

  constructor(private configService: ConfigService) {}

  async getConnection<T extends Document>(category: string, modelName: string,
    schema: Schema) {
    if (!category) {
      throw new BadRequestException('Missing category');
    }

    const key = category.toLowerCase();

   

    const uri =
      key === 'public'
        ? this.configService.get<string>('MONGO_URI_DEFAULT')
        : this.configService
            .get<string>('MONGO_URI_TEMPLATE')
            ?.replace('{category}', key);

    if (!uri) {
      throw new Error('MongoDB URI is not configured');
    }

     try {
      this.logger.log(`Creating new connection for category: ${key} with URI: ${uri}`);
      const connection = await mongoose.createConnection(uri,{autoIndex: true}).asPromise();
      this.connections.set(key, connection);
      this.logger.log(`Successfully connected to database for category: ${key}`);
      const return_model = await connection.model(modelName,schema);
      return return_model;
    } catch (error) {
      this.logger.error(`Failed to connect to database for category: ${key}`, error.stack);
      throw error;
    }
  }
}
