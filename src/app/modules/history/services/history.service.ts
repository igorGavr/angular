import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {IHistory} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IHistory[]>{
    return this.httpClient
      .get<IHistory[]>(urls.history)
      .pipe(
        map(value => value),
        catchError(err => throwError('history error'))
      )
  }
  getStory(id: string): Observable<IHistory>{
    return this.httpClient
      .get<IHistory>(urls.history+'/'+id)
  }
}
