import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {ICapsules} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class CapsulesService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ICapsules[]>{
    return this.httpClient
      .get<ICapsules[]>(urls.capsules)
      .pipe(
        map(value => value),
        catchError(err => throwError('error capsules'))
      )
  }


}
