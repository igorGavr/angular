import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RocketsComponent} from "./components/rockets/rockets.component";
import {RocketDetailsComponent} from "./components/rocket-details/rocket-details.component";
import {RocketsResolver} from "./services/resolvers/rockets.resolver";
import {RocketResolver} from "./services/resolvers/rocket.resolver";

const routes: Routes = [
  {
    path: '', component: RocketsComponent,
    resolve: {rocketData: RocketsResolver},
    children: [
      {path: ':rocket_id', component: RocketDetailsComponent, resolve: {rocketSingleData: RocketResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RocketsRoutingModule { }
