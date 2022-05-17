import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: IUser

  constructor(private activatedRoute:ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      // const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUser;
      const {state: {data}} = history
      if (data) {
        this.userDetails = data
      } else {
        this.userService.getById(id).subscribe(value => this.userDetails = value)
      }
    })
  }

}
