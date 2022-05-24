import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getUserById(id: number):Observable<IUser>{
    return this.httpClient
      .get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
