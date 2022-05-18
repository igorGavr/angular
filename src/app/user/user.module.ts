import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users-components/users/users.component';
import {UsersDataService} from "./users-service/users-data.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [UsersDataService]
})
export class UserModule { }
