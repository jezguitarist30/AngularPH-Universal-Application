import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { EventComponent } from './event/event.component';
import { ContactUsComponent } from './contact-us/contact-us.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'mission-vision', component: MissionVisionComponent },
   { path: 'events', component: EventComponent },
   { path: 'contact-us', component: ContactUsComponent },
   { path: 'shared', loadChildren: './shared/shared.module#SharedModule' },
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
