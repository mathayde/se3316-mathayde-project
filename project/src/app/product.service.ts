import { Injectable } from '@angular/core';
import { AngularFireDatabase, } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Product } from './models/product';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService{ //this provides an admin with the tools to manipulate the product information behind the scenes
  
  constructor(private db: AngularFireDatabase){}
  
  create(product){
    this.db.list('/product').push(product);
  }

  getAll(): Observable<Product[]> {
    return this.db.list<Product>('/products')
        .snapshotChanges()
        .pipe(map(changes => changes.map(c => {
            const data = c.payload.val() as Product;
            const id = c.payload.key;
            return { id, ...data };
          })));
  }
  get(productId) { 
    return this.db.object('/products/' + productId);
  }

  update(productId, product) { 
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) { 
    return this.db.object('/products/' + productId).remove();
  }
}