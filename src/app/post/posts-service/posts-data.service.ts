import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../../models/IPost";
import {urls} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class PostsDataService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts)
  }
}
