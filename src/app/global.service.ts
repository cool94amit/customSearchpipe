import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GlobalService {

  users:any ;
  Url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  getEmployeeData(){
    return new Promise((resolve,reject) =>{
      this.http.get(this.Url).subscribe(data =>{
        this.users = data;
        this.users = JSON.parse(this.users._body);
        console.log(data);
      })
    })
  }

}
