import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HistoryComponent} from "./components/history/history.component";
import {HistoryResolver} from "./services/resolvers/history.resolver";
import {StoryDetailsComponent} from "./components/story-details/story-details.component";
import {HistoryGuard} from "./services/guards/history.guard";

const routes: Routes = [
  {
    path: '', component: HistoryComponent,
    resolve: {historyData: HistoryResolver},
    canActivate: [HistoryGuard],
    canDeactivate:[HistoryGuard],
    children: [
      {path: ':id', component: StoryDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
