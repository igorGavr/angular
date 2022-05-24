import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CapsulesService} from "../../services/capsules.service";
import {ICapsules} from "../../interfaces";

@Component({
  selector: 'app-capsules-details',
  templateUrl: './capsules-details.component.html',
  styleUrls: ['./capsules-details.component.css']
})
export class CapsulesDetailsComponent implements OnInit {
  capsule: ICapsules;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({capsuleData}) => this.capsule = capsuleData)
  }
}
