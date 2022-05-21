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

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private capsulesService: CapsulesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({capsule_serial}) => {
      const state = this.router
        .getCurrentNavigation()?.extras?.state?.['capsule'] as ICapsules;
      if (state) {
        this.capsule = state;
      }else {
        this.capsulesService.getOneCapsule(capsule_serial)
          .subscribe(value => this.capsule = value)
      }
    })
  }

}
