import { Component, OnInit } from '@angular/core';
import {IComment} from "../../../models/IComment";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentsDataService} from "../../comments-service/comments-data.service";

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css']
})
export class CommentsDetailsComponent implements OnInit {
  comment: IComment;
  constructor(private activatedRoute: ActivatedRoute,
              private commentsDataService: CommentsDataService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const {state: {data}} = history
      if (data) {
        this.comment = data
      }else {
        this.commentsDataService.getById(+id).subscribe(value => this.comment = value)
      }
    })

  }

}
