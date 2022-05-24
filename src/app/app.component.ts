import { Component } from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  id = 0;
  constructor(private userService: UserService) {

  }
  getUser(): void {
    this.userService.getUserById(this.id)
      .subscribe(value => console.log(value))
  }
}
