import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service"
import {Router} from "@angular/router";
import{AddElementComponent} from "../add-element/add-element.component"

import {TablestoupdateService} from "../tablestoupdate.service";
@Component({
  selector: 'app-tableshow',
  templateUrl: './tableshow.component.html',
  styleUrls: ['./tableshow.component.css']
})
export class TableshowComponent implements OnInit {

  constructor(private app:AppService,private router:Router,private tablesToUpdate:TablestoupdateService) { }

  showA:any;
  showArr:any[]= [];




  ngOnInit() {
    //location.reload(true);
    this.app.readData().subscribe((d)=>{
      console.log(d);
     let  data = d;
      this.showA = data;
      this.showArr = this.showA;
   


    })
//    console.log(this.showA);


    //console.log(this.showArr);
    
  }


onDelete(name){
  // console.log(id);
  // console.log(this.showArr);
  // let name = this.showArr[id].name;

//   var id = this.showArr.findIndex((sh)=>{
//       return sh.name == name;
//   })
// console.log(id);
//   console.log(name);
//   this.showArr.splice(id,1);
  this.app.postDataDelete(name).subscribe();

  location.reload(true);
  // this.app.readData().subscribe((d)=>{
  //   console.log(d);
  //  let  data = d;
  //   this.showA = data;
  //   this.showArr = this.showA;
   


  // })
  
  this.router.navigateByUrl('tables');

  
}

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

onUpdateShow(name){
  let id:number;
  let allRegister = this.showArr;
  let index = allRegister.findIndex(oneRegister => oneRegister.name === name);
  //allRegister.splice(index,1);
  //this.router.navigateByUrl('update');
   id = index;
  // console.log(id+","+name);
  // this.showForm = true;
  // this.showName = this.showArr[id].name;
  // this.showPrice = this.showArr[id].price;
  // this.showDescription = this.showArr[id].description;
  // this.index = id;
  // this.oName = this.showArr[id].name;

  console.log(this.showArr);


  this.tablesToUpdate.set(this.showArr,id);
  this.router.navigateByUrl('update');
 
}


// onUpdate(){
//   console.log(this.changeName);
//   this.app.postDataUpdate(this.oName,this.changeName,this.changePrice,this.changeDescription).subscribe();

// }

onAdd(){
  this.router.navigateByUrl('add');
}


deleteAll(){
  this.app.postDataDeleteAll().subscribe();
  location.reload(true);
}


}
