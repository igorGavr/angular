import { Component } from '@angular/core';
import {IUser} from "./models/user.interface";
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'angular';
  user: IUser;

  constructor(private dataService: DataService) {
    dataService.storage.subscribe(value => {
      this.user = value
    })
  }

}
