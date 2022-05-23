import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HistoryComponent} from "./components/history/history.component";
import {HistoryResolver} from "./services/resolvers/history.resolver";
import {StoryDetailsComponent} from "./components/story-details/story-details.component";

const routes: Routes = [
  {
    path: '', component: HistoryComponent,
    resolve: {historyData: HistoryResolver},
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
