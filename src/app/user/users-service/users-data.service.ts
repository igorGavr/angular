import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor( private httpClient: HttpClient) { }


}
