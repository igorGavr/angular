import { Component } from '@angular/core';
import {IUser} from "./models/user.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'angular';
  user: IUser;

  catch(user: IUser) {
    this.user = user;
  }
}
