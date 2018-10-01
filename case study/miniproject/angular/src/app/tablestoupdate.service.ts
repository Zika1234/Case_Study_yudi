import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablestoupdateService {

  constructor() { }

  tempArr:any;
  tempId:any;

  set(arr,id){
    console.log(arr+","+id);
    this.tempArr = arr;
    this.tempId = id;

  }

  getArr(){
    return(this.tempArr);
  }

  getId(){
    return(this.tempId);
  }
}
