import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './posts-components/posts/posts.component';
import {PostsDataService} from "./posts-service/posts-data.service";
import { PostComponent } from './posts-components/post/post.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostsDataService]
})
export class PostModule { }
