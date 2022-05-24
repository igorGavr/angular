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
export class RocketResolver implements Resolve<IRocket> {
  constructor(private router:Router,
              private rocketService: RocketService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRocket> | Promise<IRocket> | IRocket {
    const rocket = this.router.getCurrentNavigation()?.extras?.state?.['rocket'] as IRocket;
    if (rocket) {
      console.log(rocket)
      return rocket
    }
    let rocket_id = route.params['rocket_id']
    return this.rocketService.getRocket(rocket_id)
  }

}
