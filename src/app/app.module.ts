import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './components/home-page/home-page.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    UserDetailsComponent,
    HomePageComponent,
    PostDetailsComponent,
    CommentDetailsComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
          {path: '', redirectTo: 'home-page', pathMatch: 'full'},
          {path: 'home-page', component: HomePageComponent},
          {
            path: 'users-page', component: UsersComponent, children: [
              {path: 'user-details/:id', component: UserDetailsComponent}
            ]
          },
          {
            path: 'posts-page', component: PostsComponent, children: [
              {path: 'post-details/:id', component: PostDetailsComponent}
            ]
          },
          {path: 'comments-page', component: CommentsComponent, children: [
              {path: 'comment-details/:id', component: CommentDetailsComponent}
            ]}
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
