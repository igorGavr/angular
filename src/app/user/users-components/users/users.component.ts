import { Component, OnInit } from '@angular/core';
import {UsersDataService} from "../../users-service/users-data.service";
import {IUser} from "../../../models/IUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  constructor(private userDataService: UsersDataService) { }

  ngOnInit(): void {
    this.userDataService.getAll().subscribe(value => this.users = value )
  }

}
