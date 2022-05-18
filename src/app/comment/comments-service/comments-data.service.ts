import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../../models/IComment";
import {urls} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class CommentsDataService {

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments)
  }
}
