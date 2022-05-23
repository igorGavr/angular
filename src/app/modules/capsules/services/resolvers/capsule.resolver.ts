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
export class CapsuleResolver implements Resolve<ICapsules> {
  constructor(private capsulesService: CapsulesService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICapsules> | Promise<ICapsules> | ICapsules {
    let capsule_serial = route.params['capsule_serial']
    return this.capsulesService.getOneCapsule(capsule_serial);
  }

}
