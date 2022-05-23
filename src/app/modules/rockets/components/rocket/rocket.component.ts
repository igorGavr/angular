import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IRocket} from "../../interfaces";

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {
  @Input()
  rocket: IRocket;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getDetails() {
    this.router.navigate([this.rocket.rocket_id], {
      relativeTo: this.activatedRoute,
      state: {rocket: this.rocket}
    })
  }
}
