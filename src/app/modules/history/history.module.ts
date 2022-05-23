import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import {HttpClientModule} from "@angular/common/http";

import { HistoryComponent } from './components/history/history.component';
import { StoryComponent } from './components/story/story.component';
import {HistoryService} from "./services";
import {HistoryResolver} from "./services/resolvers/history.resolver";
import { StoryDetailsComponent } from './components/story-details/story-details.component';


@NgModule({
  declarations: [
    HistoryComponent,
    StoryComponent,
    StoryDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HistoryRoutingModule
  ],
  providers: [
    HistoryService,
    HistoryResolver
  ]
})
export class HistoryModule { }
