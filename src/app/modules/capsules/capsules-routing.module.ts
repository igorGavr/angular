import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CapsulesComponent} from "./components/capsules/capsules.component";
import {CapsulesResolver} from "./services/resolvers/capsules.resolver";
import {CapsulesGuard} from "./services/guards/capsules.guard";
import {CapsulesDetailsComponent} from "./components/capsules-details/capsules-details.component";

const routes: Routes = [
  {
    path: '', component: CapsulesComponent,
    resolve: {capsulesData: CapsulesResolver},
    canActivate: [CapsulesGuard],
    canDeactivate: [CapsulesGuard], children: [
      {path: ':capsule_serial', component: CapsulesDetailsComponent}
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
