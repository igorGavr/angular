import { Component, OnInit } from '@angular/core';
import {IRocket} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {RocketService} from "../../services";

@Component({
  selector: 'app-rocket-details',
  templateUrl: './rocket-details.component.html',
  styleUrls: ['./rocket-details.component.css']
})
export class RocketDetailsComponent implements OnInit {
  rocket: IRocket;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private rocketService: RocketService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({rocket_id}) => {
      const {state: {data}} = history;
      if (data) {
        this.rocket = data
      }else {
        this.rocketService.getRocket(rocket_id).subscribe(value => this.rocket = value)
      }
    })
  }

}
