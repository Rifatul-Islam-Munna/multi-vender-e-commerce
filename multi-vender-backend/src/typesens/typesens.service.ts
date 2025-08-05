import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateTypesenDto } from './dto/create-typesen.dto';
import { UpdateTypesenDto } from './dto/update-typesen.dto';
import * as Typesense from 'typesense';
@Injectable()
export class TypesensService  implements OnModuleInit {
  private logger = new Logger(TypesensService.name);
  private client: Typesense.Client;

  constructor(){
    this.client = new Typesense.Client({
      nodes: [
        {
            host: 'localhost', 
          port: 8078,
          protocol: 'http',
        }
      ],
      apiKey: 'xyz',
      connectionTimeoutSeconds: 2,
    })
    this.logger.debug('Typesense client created');
  }


  async onModuleInit() {

       const collections = await this.client.collections().retrieve();
     const exists = collections.some((col) => col.name === 'products');
     if(!exists){
        await this.client.collections().create({
        name: 'products',
        fields: [
          { name: 'id', type: 'string' },
          { name: 'name', type: 'string' },
          { name: 'price', type: 'float' },
          { name: 'description', type: 'string', optional: true },
          { name: 'thumbnail', type: 'string' },
          { name: 'offerPrice', type: 'float', optional: true },
          { name: 'freeShipping', type: 'bool', optional: true, facet: true },
          { name: 'brand', type: 'string', optional: true, facet: true },
          { name: 'stock', type: 'float', optional: true },
          { name: 'soldCount', type: 'float', optional: true },
          { name: 'hasOffer', type: 'bool', optional: true, facet: true },
          { name: 'main', type: 'string', optional: true, facet: true },
          { name: 'subMain', type: 'string', optional: true, facet: true },
          { name: 'semiSub', type: 'string', optional: true, facet: true },
         { name: 'category', type: 'string', optional: true, facet: true },
       ]
      });
      


     }
          this.logger.debug('collections created');
  }
   async addProduct(product: { id: string; name: string; price: number; description?: string ,thumbnail:string,offerPrice?:number,freeShipping?:boolean,brand?:string,stock?:number,soldCount?:number,hasOffer?:boolean,main?:string,subMain?:string,semiSub?:string,category?:string}) {
    try {
  const res = await this.client.collections('products').documents().create(product);
  console.log('Product added:', res);
  return res;
} catch (err) {
  console.error('Failed to add product:', err);
  throw err;
}
  }

 async searchProducts(options: {
  query?: string;                    // search term, optional
  filters?: string;                  // Typesense filter string, optional
                   // comma-separated facet fields like 'brand,freeShipping'
  maxFacetValues?: number;           // how many facet values to return
  sortBy?: string;                   // e.g. 'price:asc'
  page?: number;
  perPage?: number;
}) {
  const {
    query = '*',                    // * means match all if no query
    filters,
   
    maxFacetValues = 20,
    sortBy,
    page = 1,
    perPage = 20,
  } = options;

  return this.client.collections('products').documents().search({
    q: query,
    query_by: 'name,description',
    filter_by: filters,            // e.g. 'price:>=10 && price:<=100 && brand:=Apple && freeShipping:=true'
    facet_by: 'brand,freeShipping,hasOffer,main,subMain,semiSub,category',
    max_facet_values: maxFacetValues,
    sort_by: sortBy,
    page,
    per_page: perPage,
  });
}




  create(createTypesenDto: CreateTypesenDto) {
    return 'This action adds a new typesen';
  }

  findAll() {
    return `This action returns all typesens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typesen`;
  }

  update(id: number, updateTypesenDto: UpdateTypesenDto) {
    return `This action updates a #${id} typesen`;
  }

  remove(id: number) {
    return `This action removes a #${id} typesen`;
  }
}
