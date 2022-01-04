import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from "./todo.component";
import {TodoCreateComponent} from "./todo-create/todo-create.component";
import {TodoUpdateComponent} from "./todo-update/todo-update.component";
import {TodoDeleteComponent} from "./todo-delete/todo-delete.component";

const routes: Routes = [
  {path: 'list',
  component: TodoComponent},
  {path: 'create',
  component: TodoCreateComponent},
  {path: 'edit/:id',
  component: TodoUpdateComponent},
  {path: 'delete/:id',
  component:TodoDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
