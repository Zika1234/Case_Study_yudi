import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TableshowComponent } from './tableshow/tableshow.component';
import { AppRoutingModule } from './/app-routing.module';
import { UpdateformComponent } from './updateform/updateform.component';
import { AddElementComponent } from './add-element/add-element.component';


@NgModule({
  declarations: [
    AppComponent,
    TableshowComponent,
    UpdateformComponent,
    AddElementComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, AppRoutingModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
