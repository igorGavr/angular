import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { CommonModule } from '@angular/common';
import { CommentRoutingModule } from './comment-routing.module';
import { CommentsComponent } from './comments-components/comments/comments.component';
import { CommentComponent } from './comments-components/comment/comment.component';
import {CommentsDataService} from "./comments-service/comments-data.service";
import { CommentsDetailsComponent } from './comments-components/comments-details/comments-details.component';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentsDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [CommentsDataService]
})
export class CommentModule { }
