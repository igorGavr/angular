import {Component, Input, OnInit} from '@angular/core';
import {IHistory} from "../../interfaces";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @Input()
  story: IHistory;
  constructor() { }

  ngOnInit(): void {
  }

}
