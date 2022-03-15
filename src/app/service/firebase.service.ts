
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
  addingTask(todoObject: { title: string; description: string; date: Date; }) {
    throw new Error('Method not implemented.');
  }


  listRef!: AngularFireList<any>;
  listsRef!: AngularFireObject<any>;
  FirebaseService: any;


  constructor(private db: AngularFireDatabase) { }


  addTask(todoObject: any) {
    this.listRef.push({
      ...todoObject
    })


  }
}