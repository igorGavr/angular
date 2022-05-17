import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost} from "../../interfaces";
import {PostService} from "../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPost

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      let state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPost;
      if (state) {
        this.post = state
      }else {
        this.postService.getById(id).subscribe(value => this.post = value)
      }
    })
  }

}
