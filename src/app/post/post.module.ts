import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './posts-components/posts/posts.component';
import {PostsDataService} from "./posts-service/posts-data.service";


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers: [PostsDataService]
})
export class PostModule { }
