import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http : HttpClient) { } 

  getdata(){
    let url ="https://jsonplaceholder.typicode.com/albums";
    return this.http.get(url);
  } 
}
