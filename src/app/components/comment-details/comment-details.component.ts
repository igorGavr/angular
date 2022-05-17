import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../interfaces";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private commentService: CommentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = history.state
      if (!id) {
        this.comment = state.data
      }else {
         this.commentService.getById(id).subscribe(value => this.comment = value)
      }
    })
  }

}
