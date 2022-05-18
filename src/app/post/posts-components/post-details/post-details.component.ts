import { Component, OnInit } from '@angular/core';
import {IPost} from "../../../models/IPost";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsDataService} from "../../posts-service/posts-data.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPost
  constructor(private activatedRoute: ActivatedRoute,
              private postsDataService: PostsDataService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const {state: {data}} = history
      if (data) {
        this.post = data
      }else {
        this.postsDataService.getById(+id).subscribe(value => this.post = value)
      }
    })
  }

}
