import { NgModule } from '@angular/core';

import {UpdateformComponent} from "./updateform/updateform.component";
import { RouterModule, Routes } from '@angular/router';
import {TableshowComponent} from "./tableshow/tableshow.component";
import {AddElementComponent} from "./add-element/add-element.component"


const routes: Routes = [
  {path:'update',component: UpdateformComponent},
  {path:'tables',component: TableshowComponent},
  {path:'add',component: AddElementComponent}
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes) 
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
