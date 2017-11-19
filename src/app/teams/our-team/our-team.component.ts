import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from "rxjs/Subscription";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";

import { Member, TeamsService } from '../teams.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OurTeamComponent implements OnInit, OnDestroy {

  memberObserver: Observable<Array<Member>>;

  layout: string = "row";
  layoutAlign: string = "center none";

  watcher: Subscription;
  activeMediaQuery = "";

  constructor(private media: ObservableMedia, private teamService: TeamsService) { }

  ngOnInit() {

    this.watcher = this.media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
      if (change.mqAlias == 'xs' || change.mqAlias == 'sm') {
        this.layout = "column";
        this.layoutAlign = "center center";
      }
      else {
        this.layout = "row";
        this.layoutAlign = "center none";
      }
    });


    this.memberObserver = this.teamService.getAll();

  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}
