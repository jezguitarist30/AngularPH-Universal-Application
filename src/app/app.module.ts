// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';


import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app.routing.module';

// Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { EventComponent } from './event/event.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurTeamComponent } from './teams/our-team/our-team.component';
import { MemberProfileComponent } from './teams/member-profile/member-profile.component';

// Services
import { TeamsService } from './teams/teams.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    MissionVisionComponent,
    EventComponent,
    ContactUsComponent,
    OurTeamComponent,
    MemberProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    BrowserAnimationsModule,

    FlexLayoutModule,
    MaterialModule,
    SharedModule,

    AppRoutingModule
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
