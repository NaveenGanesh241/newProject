import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http : HttpClient) { } 

  getdata(){
    let url ="https://jsonplaceholder.typicode.com/albums";
    return this.http.get(url);
  } 

  adduser(data:any): Observable <any>{
    return this.http.post('http://localhost:3000/users',data)
  }
  showusers(): Observable <any>{
    return this.http.get('http://localhost:3000/users')
  }

  deleteuser(id:any): Observable<any>
{
  return this.http.delete(`http://localhost:3000/users/${id}`) 
}
 updateuser(id:any,data:any):Observable<any>
 {
  return this.http.put(`http://localhost:3000/users/${id}`,data)
 }
}
