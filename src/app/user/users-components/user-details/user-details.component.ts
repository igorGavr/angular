import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../models/IUser";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersDataService} from "../../users-service/users-data.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: IUser

  constructor(private activatedRoute: ActivatedRoute,
              private userDataService: UsersDataService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      // const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;
      const {state: {data}} = history
      if (data) {
        this.user = data
      }else {
        this.userDataService.getById(id).subscribe(value => this.user = value)
      }
    })
  }

}
