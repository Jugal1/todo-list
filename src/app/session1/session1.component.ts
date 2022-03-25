import { FirebaseService } from './../service/firebase.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-session1',
  templateUrl: './session1.component.html',
  styleUrls: ['./session1.component.css'],
})
export class Session1Component implements OnInit {
  deletedTaskId = -1;
  edittaskId = -1;
  form: any;
  dateObj: any;
  isDisabled = true;
  FirebaseService: any;
  editedTask: any[] = [];
  deletedTask: any[] = [];
  todoTitle = '';
  todoDescription = '';
  editTitle = '';
  editDescription = '';
  todoList: any[] = [];

  constructor(
    private toastr: ToastrService,
    public fireBaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.fetchTask();
  }
  fetchTask() {
    const todoListFirebase = this.fireBaseService.getlist();
    todoListFirebase.snapshotChanges().subscribe((data) => {
      this.todoList.length = 0;
      data.forEach((item) => {
        const todoListBaseFire: any = item.payload.toJSON();

        if (todoListBaseFire?.title && todoListBaseFire?.description) {
          const todoListFireBase = {
            title: todoListBaseFire.title,
            description: todoListBaseFire.description,
            id: item.key,
          };
          
          this.todoList.push(todoListFireBase);
          console.log(todoListFireBase);
        }
      });
      this.todoList.reverse();
    });
  }

  addTask() {
    const todoObject = {
      title: this.todoTitle.toUpperCase(),
      description: this.todoDescription,
      date: new Date(),
    };
    if (this.todoTitle.trim() == '' && this.todoDescription.trim() == '') {
      this.toastr.warning('You must write somthing');
    } else {
      this.fireBaseService.addTask(todoObject);
      this.toastr.success('Task added successfully');

      this.todoTitle = '';
      this.todoDescription = '';
    }
  }

  deleteTask(i: any) {
    // this.todoList.splice(i, 1);
    this.fireBaseService.deleteTask(i);
    this.toastr.success('Task Deleted successfully!!');
  }

  setDeleteId(deletedIndexId: number) {
    this.deletedTaskId = deletedIndexId;
  }

  editTask(i: any) {
    this.todoList.forEach((todoDetail, index) => {
      if (this.edittaskId === index) {
        todoDetail.title = this.editTitle.toUpperCase();
        todoDetail.description = this.editDescription;
        this.toastr.success(' Task edited successfully!!');
      }
    });
  }

  setEditId(editedIndexId: number, title: string, description: string) {
    this.edittaskId = editedIndexId;
    this.editTitle = title;
    this.editDescription = description;
  }
}
