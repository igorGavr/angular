import { Component, OnInit } from '@angular/core';
import {IRocket} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {
  rockets: IRocket[];
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe(({rocketData}) => this.rockets = rocketData)
  }

}
