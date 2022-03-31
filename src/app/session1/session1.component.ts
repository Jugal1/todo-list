import { FirebaseService } from './../service/firebase.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-session1',
  templateUrl: './session1.component.html',
  styleUrls: ['./session1.component.css'],
})
export class Session1Component implements OnInit {
  deletedTaskId = -1;
  edittaskId = '';
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
  isLoading: boolean = false;
  status: string | undefined;

  availableStatus = {
    new: 'New',
    in_progress: 'In-progress',
    on_hold: 'On-hold',
    completed: 'Completed',
  };
  constructor(
    private toastr: ToastrService,
    public fireBaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.fetchTask();
  }
  fetchTask() {
    const todoListFirebase = this.fireBaseService.getlist();
    this.isLoading = true;

    todoListFirebase.snapshotChanges().subscribe((data) => {
      this.todoList.length = 0;
      data.forEach((item) => {
        const todoListBaseFire: any = item.payload.toJSON();

        if (todoListBaseFire?.title && todoListBaseFire?.description) {
          const todoListFireBase = {
            title: todoListBaseFire.title,
            description: todoListBaseFire.description,
            id: item.key,
            date: todoListBaseFire.createDate,
            status: todoListBaseFire.status,
          };
          this.todoList.push(todoListFireBase);
          this.isLoading = false;
        }
      });
      this.todoList.reverse();
    });
  }

  addTask() {
    const todoObject = {
      title: this.todoTitle.toUpperCase(),
      description: this.todoDescription,
      createDate: new Date().toString(),
      status: this.availableStatus.new,
    };
    if (this.todoTitle.trim() === '' || this.todoDescription.trim() === '') {
      this.toastr.warning('You must write something');
    } else {
      this.isLoading = true;

      this.fireBaseService.addTask(todoObject);
      this.toastr.success('Task added successfully');

      this.todoTitle = '';
      this.todoDescription = '';
    }
  }

  deleteTask(i: any) {
    this.fireBaseService.deleteTask(i);
    this.toastr.success('Task Deleted successfully!!');
  }

  setDeleteId(deletedIndexId: number) {
    this.deletedTaskId = deletedIndexId;
  }

  setEditId(editedIndexId: string, title: string, description: string) {
    this.edittaskId = editedIndexId;
    this.editTitle = title;
    this.editDescription = description;
  }

  editTask() {
    this.fireBaseService.updateList(
      this.edittaskId,
      this.editTitle.toUpperCase(),
      this.editDescription,
      this.status
    );

    this.toastr.success(' Task edited successfully!!');
  }

  onChange(event: any, id: string) {
    this.fireBaseService.updateList(id, '', '', event.target.value);
  }
}
