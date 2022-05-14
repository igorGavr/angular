import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost
  constructor(private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateMe(post: IPost) {
    this.router.navigate(['post-details', post.id],
      {relativeTo: this.activatedRoute, state: {data: post}})
  }
}
