import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../todo.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.scss']
})
export class TodoUpdateComponent implements OnInit {
  todoForm: any;
  id: any;

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getTodo(this.id);
    })
  }

  ngOnInit(): void {
  }

  getTodo(id: number) {
    return this.todoService.findById(id).subscribe(todo => {
      this.todoForm = new FormGroup({
        content: new FormControl(todo.content),
        complete: new FormControl(todo.complete)
      });
    });
  }

  updateTodo(id: number) {
    const todo = this.todoForm.value;
    this.todoService.updateTodo(id, todo).subscribe(() => {
      alert('Cập nhật thành công')
    }, e => {
      console.log(e)
    });
  }

}
