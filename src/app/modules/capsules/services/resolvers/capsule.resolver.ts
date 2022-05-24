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
  constructor(private capsulesService: CapsulesService,
              private router: Router) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<ICapsules> | Promise<ICapsules> | ICapsules {
    const capsule = this.router.getCurrentNavigation()?.extras?.state?.['capsule'] as ICapsules;
    if (capsule) {
      console.log(capsule)
      return capsule
    }
    let capsule_serial = route.params['capsule_serial']
    return this.capsulesService.getOneCapsule(capsule_serial);
  }

}
