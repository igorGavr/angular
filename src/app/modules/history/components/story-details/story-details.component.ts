import { Component, OnInit } from '@angular/core';
import {IHistory} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {HistoryService} from "../../services";

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.css']
})
export class StoryDetailsComponent implements OnInit {
  story: IHistory;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({storyData}) => this.story = storyData)
  }

}
