import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { Subscription } from "rxjs/Subscription";
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MemberProfileComponent implements OnInit, OnDestroy {

  pageTitle: string;
  content: string;

  memberSubs: Subscription;
  member: any;

  constructor(
    private meta: Meta,
    private title: Title,
    private teamService: TeamsService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {

    const memberId = this.route.snapshot.paramMap.get('id');

    this.memberSubs = this.teamService.getMemberInfo(memberId)
      .subscribe(data => {
        this.member = data;

        this.pageTitle = 'Members Profile';
        this.content = this.member.name + ' ' + this.member.username + ' ' + this.member.email;

        this.title.setTitle(this.pageTitle);

        this.meta.updateTag({ name: 'description', content: this.content });
        this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
        this.meta.updateTag({ property: 'og:description', content: this.content });
        this.meta.updateTag({ property: 'og:image', content: '../assets/img/members/' + memberId + '.jpg' });

      });

  }

  ngOnDestroy() {
    this.memberSubs.unsubscribe();
  }

}
