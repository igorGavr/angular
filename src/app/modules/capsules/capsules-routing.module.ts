import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {CapsulesComponent} from "./components/capsules/capsules.component";
import {CapsulesResolver} from "./services/resolvers/capsules.resolver";
import {CapsulesGuard} from "./services/guards/capsules.guard";
import {CapsulesDetailsComponent} from "./components/capsules-details/capsules-details.component";
import {CapsuleResolver} from "./services/resolvers/capsule.resolver";

const routes: Routes = [
  {
    path: '', component: CapsulesComponent,
    resolve: {capsulesData: CapsulesResolver},
    canActivate: [CapsulesGuard],
    canDeactivate: [CapsulesGuard], children: [
      {path: ':capsule_serial', component: CapsulesDetailsComponent, resolve: {capsuleData: CapsuleResolver}}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CapsulesRoutingModule { }
