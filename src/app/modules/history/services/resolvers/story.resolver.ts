import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IHistory} from "../../interfaces";
import {HistoryService} from "../history.service";

@Injectable({
  providedIn: 'root'
})
export class StoryResolver implements Resolve<IHistory> {
  constructor(private router: Router,
              private historyService: HistoryService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<IHistory> | Promise<IHistory> | IHistory {
    const story = this.router.getCurrentNavigation()?.extras?.state?.['story'] as IHistory;
    if (story) {
      console.log(story)
      return story
    }
    let id = route.params['id']
    return this.historyService.getStory(id)
  }

}
