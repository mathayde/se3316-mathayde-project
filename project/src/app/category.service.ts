import { Injectable } from '@angular/core';
import { AngularFireDatabase, } from 'angularfire2/database';

@Injectable()
export class CategoryService { //organizes the products into set categories that are pre-stored in the firebase database

  constructor(private db: AngularFireDatabase ) {}
  
  getAll(){
    return this.db.list('/categories', ref => {return ref.orderByChild('name')}).snapshotChanges();
  }
}
