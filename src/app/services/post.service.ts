import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts)
  }
  getById(id:string):Observable<IPost> {
    return this.httpClient.get<IPost>(`${urls.posts}/${id}`)
  }
}
