import { Component, OnInit } from '@angular/core';
import {IHistory} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: IHistory[];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe(({historyData}) => this.history = historyData)
  }

}
