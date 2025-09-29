import { Injectable, BadRequestException, Logger, OnModuleDestroy } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { Model, Schema, Document } from 'mongoose';

@Injectable()
export class ConnectionService implements OnModuleDestroy {
  private readonly logger = new Logger(ConnectionService.name);
  private connections = new Map<string, mongoose.Connection>();

  constructor(private configService: ConfigService) {}

  async getConnection<T extends Document>(
    category: string,
    modelName: string,
    schema: Schema,
  ): Promise<Model<T>> {
    if (!category) {
      throw new BadRequestException('Missing category');
    }

    const key = category.toLowerCase();

   
    let connection = this.connections.get(key);

    if (!connection) {
      const uri =
        key === 'public'
          ? this.configService.get<string>('MONGO_URI_DEFAULT')
          : this.configService.get<string>('MONGO_URI_TEMPLATE')?.replace('{category}', key);

      if (!uri) {
        throw new Error('MongoDB URI is not configured');
      }

      try {
        this.logger.log(`Creating new connection for category: ${key}`);
        connection = await mongoose.createConnection(uri, { autoIndex: true }).asPromise();
        this.connections.set(key, connection);
        this.logger.log(`✅ Connected to database for category: ${key}`);
      } catch (error) {
        this.logger.error(`❌ Failed to connect to database for category: ${key}`, error.stack);
        throw error;
      }
    }

   
    if (connection.models[modelName]) {
      return connection.models[modelName] as Model<T>;
    }

    return connection.model<T>(modelName, schema);
  }


  async onModuleDestroy() {
    for (const [key, connection] of this.connections) {
      this.logger.log(`Closing connection for category: ${key}`);
      await connection.close();
    }
  }
}
