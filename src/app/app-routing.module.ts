import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBookComponent} from "./list-book/list-book.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";
import {UpdateBookComponent} from "./update-book/update-book.component";
import {DetailBookComponent} from "./detail-book/detail-book.component";

const routes: Routes = [
  {
    path:'list',
    component:ListBookComponent
  },
  {
    path:'create',
    component:CreateBookComponent
  },
  {
    path:'book/delete/:id',
    component:DeleteBookComponent
  },
  {
    path:'book/update/:id',
    component:UpdateBookComponent
  },
  {
    path:'book/detail/:id',
    component:DetailBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
