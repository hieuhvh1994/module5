import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../todo.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {
  todoForm: FormGroup = new FormGroup({
    content: new FormControl(),
    complete: new FormControl()
  })
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  submit() {
    const todo = this.todoForm.value;
    this.todoService.saveTodo(todo).subscribe(() => {
      this.todoForm.reset();
      alert('Tạo thành công')
    }, e => {
      console.log(e);
    })
  }

}
