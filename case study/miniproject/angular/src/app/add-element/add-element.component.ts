import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms"

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {

  constructor(private app:AppService,private router:Router) { }
  changeId:number;
  changeName:string="";
  changeDescription:string="";
  changePrice:number;
  ngOnInit() {
  }
  onAdd(addForm: NgForm){
    this.changeId = addForm.controls['tid'].value;
    this.changeName = addForm.controls['tname'].value;
    this.changeDescription = addForm.controls['tdes'].value;
    this.changePrice = addForm.controls['tprice'].value;
  //  this.showAdd = true;
    // console.log(this.changeId);

    // if(this.changeId == null||(this.changeId < 0 || this.changeId>9999)){
    //   alert("Please enter correct ID");
    //   return false;
    // }

    // var n = this.changeName.charCodeAt(0);
    // if(this.changeName == "" || (n < 65 || n > 90)){
    //   alert("Please enter correct Name");
    //   return false;
    // }


    // if(this.changeDescription == ""){
    //   alert("Olease enter correct description");
    //   return false;
    // }

    // if(this.changePrice == null){
    //   alert("Please enter the correct price");
    //   return false;
    // }
    // // var inpObj = document.getElementById("iname");
    // // if (!inpObj.checkValidity()) {
    // //    // document.getElementById("demo").innerHTML = inpObj.validationMessage;
    // //    alert("please enter the name");
    // //    return false;
    // // } else {
    // //    // document.getElementById("demo").innerHTML = "Input OK";
    // // } 



    // // if(isNaN(this.changeId)){
    // //   alert("Please enter ");
    // //   return false;
    // // }

    // // if(isNaN(this.changeId)){
    // //   alert("Please enter ID");
    // //   return false;
    // // }

    // // if(isNaN(this.changeId)){
    // //   alert("Please enter ID");
    // //   return false;
    // // }
    // console.log(this.changeName);
    this.app.postData(this.changeName,this.changeId,this.changePrice,this.changeDescription).subscribe((data)=>{
      this.router.navigateByUrl('tables');
    });
  //  this.router.navigateByUrl('tables');
  console.log(this.changeId+""+this.changeName+""+this.changeDescription+""+this.changePrice)
  }

  onAddToTable(){
    this.router.navigateByUrl('tables');
  }
}
