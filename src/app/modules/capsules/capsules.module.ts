import {CapsulesService} from "./services/capsules.service";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { CapsulesComponent } from './components/capsules/capsules.component';
import {CapsulesRoutingModule} from "./capsules-routing.module";
import {CapsulesResolver} from "./services/resolvers/capsules.resolver";
import { CapsuleComponent } from './components/capsule/capsule.component';
import {CapsulesGuard} from "./services/guards/capsules.guard";
import { CapsulesDetailsComponent } from './components/capsules-details/capsules-details.component';
import {CapsuleResolver} from "./services/resolvers/capsule.resolver";



@NgModule({
  declarations: [
    CapsulesComponent,
    CapsuleComponent,
    CapsulesDetailsComponent
  ],
  imports: [
    CommonModule,
    CapsulesRoutingModule,
    HttpClientModule
  ],
  providers: [
    CapsulesService,
    CapsulesResolver,
    CapsuleResolver,
    CapsulesGuard
  ]
})
export class CapsulesModule { }
