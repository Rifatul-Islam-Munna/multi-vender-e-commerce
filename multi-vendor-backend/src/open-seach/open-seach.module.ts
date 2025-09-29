import { Module } from '@nestjs/common';
import { OpenSeachService } from './open-seach.service';
import { OpenSeachController } from './open-seach.controller';
import { Client } from '@opensearch-project/opensearch';
import { OPENSEARCH_CLIENT } from 'src/helper/Constesnt';



@Module({
  controllers: [OpenSeachController],
  providers: [OpenSeachService, {
      provide: OPENSEARCH_CLIENT,
      useFactory: () => {
        return new Client({
          node: process.env.OPENSEARCH_NODE || 'http://localhost:9200',
          auth: {
            username: process.env.OPENSEARCH_USER || 'admin',
            password: process.env.OPENSEARCH_PASS || 'admin',
          },
          ssl: {
            rejectUnauthorized: false, 
          },
        });
      },
    },],
  exports: [OpenSeachService]
})
export class OpenSeachModule {}
