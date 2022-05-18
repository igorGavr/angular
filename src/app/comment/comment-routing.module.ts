import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentsComponent} from "./comments-components/comments/comments.component";
import {CommentsDetailsComponent} from "./comments-components/comments-details/comments-details.component";

const routes: Routes = [
  {path: '', component: CommentsComponent, children: [
      {path: ':id', component: CommentsDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
