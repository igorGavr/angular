import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICapsules} from "../../interfaces";

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.css']
})
export class CapsulesComponent implements OnInit {
  capsules: ICapsules[];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe(({capsulesData}) => this.capsules = capsulesData)
  }

}
