import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketsRoutingModule } from './rockets-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {RocketService} from "./services";
import { RocketsComponent } from './components/rockets/rockets.component';
import { RocketComponent } from './components/rocket/rocket.component';
import { RocketDetailsComponent } from './components/rocket-details/rocket-details.component';
import {RocketsResolver} from "./services/resolvers/rockets.resolver";


@NgModule({
  declarations: [
    RocketsComponent,
    RocketComponent,
    RocketDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RocketsRoutingModule
  ],
  providers: [
    RocketService,
    RocketsResolver
  ]
})
export class RocketsModule { }
