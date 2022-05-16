import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postDetailsObj: IPost

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      // @ts-ignore
      console.log(this.router.getCurrentNavigation().extras.state['data'] as IPost)
      // @ts-ignore
      this.postDetailsObj = this.router.getCurrentNavigation()?.extras.state['data'] as IPost;
    })

  }

  ngOnInit(): void {

  }

}
