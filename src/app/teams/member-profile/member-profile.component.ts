import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MemberProfileComponent implements OnInit, OnDestroy {

  memberSubs: Subscription;
  member: any;

  constructor(
    private teamService: TeamsService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

    const memberId = this.route.snapshot.paramMap.get('id');

    this.memberSubs = this.teamService.getMemberInfo(memberId)
      .subscribe(data => {
        this.member = data;
      });

  }

  ngOnDestroy() {
    this.memberSubs.unsubscribe();
  }

}
