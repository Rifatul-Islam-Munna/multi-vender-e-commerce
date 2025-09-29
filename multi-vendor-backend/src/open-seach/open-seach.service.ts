import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateOpenSeachDto } from './dto/create-open-seach.dto';
import { UpdateOpenSeachDto } from './dto/update-open-seach.dto';
import { OPENSEARCH_CLIENT, Product_Index } from 'src/helper/Constesnt';
import { Client } from '@opensearch-project/opensearch';
import { pipeline } from '@xenova/transformers';

@Injectable()
export class OpenSeachService implements OnModuleInit {
    private readonly logger = new Logger(OpenSeachService.name);
      private embeddingPipelinePromise: ReturnType<typeof pipeline> | null = null;
  constructor(@Inject(OPENSEARCH_CLIENT) private readonly client: Client,) {}
  private async getEmbeddingPipeline() {
    if (!this.embeddingPipelinePromise) {
      this.logger.log('Loading local embedding model...');
    
      this.embeddingPipelinePromise = pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    }
    return this.embeddingPipelinePromise;
  }
  async onModuleInit() {
    await this.createIndex();
    
  }
  async createIndex() {
    const exists = await this.client.indices.exists({ index: Product_Index});
    if (!exists.body) {
      await this.client.indices.create({
        index: Product_Index,
      
        body: {
               settings: {
      index: {
        knn: true   // << this is mandatory
      }
    },
          mappings: {
            properties: {
              id: { type: 'keyword' },
              name: { type: 'text' },
              price: { type: 'float' },
              description: { type: 'text' },
              thumbnail: { type: 'keyword' },
              offerPrice: { type: 'float' },
              freeShipping: { type: 'boolean' },
              brand: { type: 'keyword' },
              stock: { type: 'float' },
              soldCount: { type: 'float' },
              hasOffer: { type: 'boolean' },
              main: { type: 'keyword' },
              subMain: { type: 'keyword' },
              semiSub: { type: 'keyword' },
              category: { type: 'keyword' },
            
          vector_embedding: {
            type: 'knn_vector',
            dimension: 384, // all-MiniLM-L6-v2 outputs 384 dimensions
            method: {
              name: 'hnsw',
              space_type: 'cosinesimil',
              engine: 'lucene',
              parameters: { ef_construction: 128, m: 24 },
            },
          },
        }
          
        },
      }
      });
      this.logger.log(`Index "${Product_Index}" created`);
    } else {
      this.logger.log(`Index "${Product_Index}" already exists`);
    }
  }
    private async generateVector(text: string): Promise<number[]> {
    try {
      const extractor = await this.getEmbeddingPipeline();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const output = await extractor(text, { pooling: 'mean', normalize: true });

  
      return Array.from(output.data);
    } catch (err) {
      this.logger.error('Embedding failed, using random vector', err);
      return Array.from({ length: 384 }, () => Math.random());
    }
  }

  async addProduct(Product: { id: string; name: string; price: number; description?: string ,thumbnail:string,offerPrice?:number,freeShipping?:boolean,brand?:string,stock?:number,soldCount?:number,hasOffer?:boolean,main?:string,subMain?:string,semiSub?:string,category?:string}) {
       const textToEmbed = `${Product.name ?? ''} ${Product.description ?? ''} ${Product.price ?? ''} ${Product.offerPrice ?? ''} ${Product.offerPrice ?? ''} ${Product.category ?? ''} ${Product.main ?? ''} ${Product.subMain ?? ''} ${Product.semiSub ?? ''} ${Product.brand ?? ''} ${Product.stock ?? ''} ${Product.soldCount ?? ''} ${Product.hasOffer ?? ''} ${Product.freeShipping ?? ''} ${Product.thumbnail ?? ''}`;
    const vector = await this.generateVector(textToEmbed);
    this.logger.log(`Adding product "${Product.name}" to index`);
 

    return await this.client.index({
      index: Product_Index,
      id: Product.id,
      body: {
        ...Product,
        vector_embedding: vector,
      },
      refresh: true,
    });
  }

async searchProducts({
  query = '*',
  filters = {},
  facetFields = ['brand','freeShipping','hasOffer','main','subMain','semiSub','category'],
  sortBy,
  page = 1,
  perPage = 20,
}: {
  query?: string;
  filters?: Record<string, any>;
  facetFields?: string[];
  sortBy?: string;
  page?: number;
  perPage?: number;
}) {
  const filterClauses = Object.entries(filters).map(([k,v]) =>
    Array.isArray(v) ? { terms: { [k]: v } } : { term: { [k]: v } }
  );

  const sortClause = sortBy ? [{ [sortBy.split(':')[0]]: { order: sortBy.split(':')[1] || 'asc' } }] : [];

  const aggs = facetFields.reduce((a, f) => ({ ...a, [f]: { terms: { field: f, size: 50 } } }), {});

  const body = {
    from: (page - 1) * perPage,
    size: perPage,
     _source: {
    excludes: ['vector_embedding']  // <-- exclude vector field from results
  },
    query: { bool: { must: query === '*' ? { match_all: {} } : { multi_match: { query, fields: ['name^2','description','brand','category'], fuzziness: 'AUTO' } }, filter: filterClauses } },
    aggs,
    sort: sortClause,
  };

  const res = await this.client.search({ index: 'products', body }) ;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const hits = (res.body as any).hits.hits.map((h: any) => h._source);
const total = (res.body as any).hits.total.value;
const aggregations = (res.body as any).aggregations || {};

  return {
    hits: hits,
    total: total,
    page,
    perPage,
    facets: Object.fromEntries(
  Object.entries(aggregations || {}).map(([k, v]) => [
    k,
    (v as any).buckets.map((b: any) => ({ value: b.key, count: b.doc_count }))
  ])
),
  };
}


  findOne(id: number) {
    return `This action returns a #${id} openSeach`;
  }

  update(id: number, updateOpenSeachDto: UpdateOpenSeachDto) {
    return `This action updates a #${id} openSeach`;
  }

  remove(id: number) {
    return `This action removes a #${id} openSeach`;
  }
}
