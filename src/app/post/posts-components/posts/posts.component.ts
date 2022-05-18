import { Component, OnInit } from '@angular/core';
import {PostsDataService} from "../../posts-service/posts-data.service";
import {IPost} from "../../../models/IPost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];
  constructor(private postsDataService: PostsDataService) { }

  ngOnInit(): void {
    this.postsDataService.getAll().subscribe(value => this.posts = value)
  }

}
