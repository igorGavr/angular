import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {IHistory} from "../../interfaces";
import {HistoryService} from "../history.service";

@Injectable({
  providedIn: 'root'
})
export class HistoryResolver implements Resolve<IHistory[]> {
  constructor(private historyService: HistoryService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<IHistory[]> | Promise<IHistory[]> | IHistory[] {
    return this.historyService.getAll();
  }

}
