import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CapsulesService} from "./services/capsules.service";
import { CapsulesComponent } from './components/capsules/capsules.component';
import {CapsulesRoutingModule} from "./capsules-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CapsulesResolver} from "./services/resolvers/capsules.resolver";
import { CapsuleComponent } from './components/capsule/capsule.component';
import {CapsulesGuard} from "./services/guards/capsules.guard";
import { CapsulesDetailsComponent } from './components/capsules-details/capsules-details.component';



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
    CapsulesGuard
  ]
})
export class CapsulesModule { }
