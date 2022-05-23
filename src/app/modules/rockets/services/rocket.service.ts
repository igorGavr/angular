import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

import {IRocket} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<IRocket[]>{
    return this.httpClient
      .get<IRocket[]>(urls.rockets)
      .pipe(
        map(value => value),
        catchError(err => throwError('rockets error'))
      )
  }
  getRocket(rocket_id: string): Observable<IRocket>{
    return this.httpClient
      .get<IRocket>(urls.rockets+'/'+rocket_id)
  }
}
