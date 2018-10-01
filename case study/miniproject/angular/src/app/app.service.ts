import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class AppService {
//   private url : string = "http://localhost:1234/rest/api/read";

//   constructor(private http:HttpClient){}

//   getValues(){
//       return this.http.get(this.url);
//   }

//   postValues(sendName:string,sendAge:number):Observable<object>{
//       console.log(sendName+sendAge);
//      return this.http.post('http://localhost:1234/rest/api/readpost',{
//           name:sendName,
//           age:sendAge
//       })
//   }
constructor(private http: HttpClient) { }

readData():Observable<Object>{
  return this.http.get('http://localhost:1234/rest/api/read')
}

postData(ename:string, eid: number,eprice:number,edescription:string):Observable<Object>{
  return this.http.post('http://localhost:1234/rest/api/write', {
    name: ename,
    id:eid,    
    price:eprice,
    description:edescription
  })
}

 postDataDelete(ename:string):Observable<Object>{
   console.log(ename);
  return this.http.post('http://localhost:1234/rest/api/delete', {
    name:ename
  })
}

 postDataUpdate(pid:number,pname:string,ename:string, eprice: number,edescription:string):Observable<Object>{
 
  console.log("Hertettrrtre");
 
 
  return this.http.post('http://localhost:1234/rest/api/update', {
    id:pid,
    oname:pname,
    name: ename,
    price:eprice,
    description:edescription,
  })
}

postDataDeleteAll():Observable<Object>{
 // console.log(ename);
 return this.http.post('http://localhost:1234/rest/api/deleteall', {
 //  name:ename
 })
}





}
