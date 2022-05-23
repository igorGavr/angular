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
  constructor(private activatedRoute: ActivatedRoute,
              private historyService: HistoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const {state: {data}} = history
      if (data) {
        this.story = data
      }else {
        this.historyService.getStory(id).subscribe(value => this.story = value)
      }
    })
  }

}
