import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IRocket} from "../../interfaces";
import {RocketService} from "../rocket.service";

@Injectable({
  providedIn: 'root'
})
export class RocketsResolver implements Resolve<IRocket[]> {
  constructor(private rocketService: RocketService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRocket[]> | Promise<IRocket[]> | IRocket[] {
    return this.rocketService.getAll();
  }

}
