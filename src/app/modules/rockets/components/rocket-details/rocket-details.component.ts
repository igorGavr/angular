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
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({rocketSingleData}) => this.rocket = rocketSingleData)
  }
}
