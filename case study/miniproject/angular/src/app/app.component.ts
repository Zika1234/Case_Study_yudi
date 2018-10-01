import { Component,OnInit } from '@angular/core';
import {TableshowComponent} from "./tableshow/tableshow.component"
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';

  constructor(private router:Router){}
  ngOnInit(){

    this.router.navigateByUrl('tables');

  }

}
