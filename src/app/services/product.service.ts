import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

product: Product[] = [
  new Product(1,'Product 1','This is the product 1 description. the product is really kool',100),
   new Product(2,'Product 2','This is the product 2 description. the product is really kool',150),
   new Product(3,'Product 3','This is the product 3 description. the product is really kool',891),
   new Product(4,'Product 4','This is the product 4 description. the product is really kool',800),
   new Product(5,'Product 5','This is the product 5 description. the product is really kool',1045),
   new Product(6,'Product 6','This is the product 6 description. the product is really kool',1056),
   new Product(7,'Product 7','This is the product 7 description. the product is really kool',110),
   ]


  constructor() { }
  getProducts(): Product[]{
    return this.product
  }
}
