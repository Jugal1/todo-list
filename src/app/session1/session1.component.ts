import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-session1',
  templateUrl: './session1.component.html',
  styleUrls: ['./session1.component.css']
})


export class Session1Component implements OnInit {

  deletedTaskId = -1;
  edittaskId = -1;
  

  form: any;
  dateObj: any;
  isDisabled = true;

  constructor(private toastr: ToastrService) { }

  editedTask: any[] = [];
  deletedTask: any[] = [];
  todoTitle = '';
  todoDescription = '';
  editTitle = '';
  editDescription = '';
  todoList: any[] = [];
  

  ngOnInit(): void {

  }

  addTask() {
    const todoObject = {
      title: this.todoTitle.toUpperCase(),
      description: this.todoDescription,
      date: new Date()
    };
    if (this.todoTitle.trim() == "" && this.todoDescription.trim() == "") {
      this.toastr.warning("You must write somthing");
    }
    else {
      this.todoList.push(todoObject);
      this.todoList.reverse();
      this.todoTitle = "";
      this.todoDescription = "";
      this.toastr.success('Task added successfully');

    }
  }

  deleteTask(i: any) {
    console.log(i);
    this.todoList.splice(i, 1)
    this.toastr.success("Task Deleted successfully!!")
  }

  setDeleteId(deletedIndexId: number) {

    this.deletedTaskId = deletedIndexId;
  }

  editTask(i: any) {
    
    this.todoList.forEach((todoDetail, index) => {
      if (this.edittaskId === index) {
        todoDetail.title = this.editTitle.toUpperCase();
        todoDetail.description = this.editDescription;
        this.toastr.success(" Task edited successfully!!")
        
      }
     
    });
  }

  setEditId(editedIndexId: number, title: string, description: string) {
    this.edittaskId = editedIndexId;
    this.editTitle = title;
    this.editDescription = description;
}
}