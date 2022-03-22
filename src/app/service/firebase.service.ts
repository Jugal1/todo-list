
import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
  
})

export class FirebaseService {

  listRef!: AngularFireList<any>;
  listsRef!: AngularFireObject<any>;
  FirebaseService: any;

  constructor(private db: AngularFireDatabase) { }


  addTask(todoObject: any) {
    this.listRef = this.db.list('/');
    this.listRef.push({
      ...todoObject
    })
  }

  Getlist(){
    this.listRef = this.db.list('/');
    return this.listRef;
  }

  deleteTask(todoObject: any){
    this.listRef = this.db.list('/');
    this.listRef.remove();
  }
}