import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TablestoupdateService} from "../tablestoupdate.service";
import {AppService} from "../app.service";



@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  constructor(private updateToTable:TablestoupdateService,private app:AppService,private router:Router) { }

  showArr:any;

changeId:number;
changeName:string;
changeDescription:string;
changePrice:number;

index:number;
showForm:boolean = false;
showId:number;
showName:string;
showDescription:string;
showPrice:number;
oName = this.showName;

  ngOnInit() {
    console.log(this.updateToTable.getId());
   this.showArr = this.updateToTable.getArr();
   console.log(this.showArr);
  let id = this.updateToTable.getId();
  this.showForm = true;
  this.changeId = this.showArr[id].id;
  this.changeName = this.showArr[id].name;
  this.changePrice = this.showArr[id].price;
  this.changeDescription = this.showArr[id].description;
  this.index = id;
  this.oName = this.showArr[id].name;
  console.log(this.showForm,this.showPrice);

  }

  onUpdate(){ 
    console.log(this.changeId);
    if(this.changeId == null ||(this.changeId < 0 || this.changeId>9999)){
      alert("Please enter correct ID");
      return false;
    }

    var n = this.changeName.charCodeAt(0);
    if(this.changeName == "" || (n < 65 || n > 90)){
      alert("Please enter correct Name");
      return false;
    }


    if(this.changeDescription == ""){
      alert("Olease enter correct description");
      return false;
    }

    if(this.changePrice == null){
      alert("Please enter the correct price");
      return false;
    }
    console.log(this.changeName);
    this.app.postDataUpdate(this.changeId,this.oName,this.changeName,this.changePrice,this.changeDescription).subscribe((data)=> this.router.navigateByUrl('tables'));
  
  }

  onTables(){
    this.router.navigateByUrl('tables');
  }
  

}
