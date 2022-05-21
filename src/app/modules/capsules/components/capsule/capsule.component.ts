import {Component, Input, OnInit} from '@angular/core';
import {ICapsules} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.css']
})
export class CapsuleComponent implements OnInit {
  @Input()
  capsule: ICapsules;
  constructor() { }

  ngOnInit(): void {
  }

}
