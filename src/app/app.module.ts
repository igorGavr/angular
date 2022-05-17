import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Route[] = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'users', component: UsersComponent, children: [
          {path: ':id', component: UserDetailsComponent}
        ]
      },
      {
        path: 'posts', component: PostsComponent, children: [
          {path: ':id', component: PostDetailsComponent}
        ]
      },
      {
        path: 'comments', component: CommentsComponent, children: [
          {path: 'comment-details/:id', component: CommentDetailsComponent}
        ]
      }
    ]
  }
]



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
    CommentDetailsComponent,
    MainLayoutComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
