import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import {TodoComponent} from "./todo.component";
import {TodoCreateComponent} from "./todo-create/todo-create.component";
import {TodoUpdateComponent} from "./todo-update/todo-update.component";
import {TodoDeleteComponent} from "./todo-delete/todo-delete.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [TodoComponent, TodoCreateComponent, TodoUpdateComponent, TodoDeleteComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
