import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ICapsules} from "../../interfaces";
import {CapsulesService} from "../capsules.service";

@Injectable({
  providedIn: 'root'
})
export class CapsulesResolver implements Resolve<ICapsules[]> {

  constructor(private capsulesService: CapsulesService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<ICapsules[]> | Promise<ICapsules[]> | ICapsules[] {
    return this.capsulesService.getAll();
  }

}
