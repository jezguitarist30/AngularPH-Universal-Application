import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module'
//import { CarouselModule } from 'ngx-bootstrap';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BannersComponent } from './banners/banners.component';
import { CommunityPartnersComponent } from './community-partners/community-partners.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    FlexLayoutModule,
    MaterialModule,

    //CarouselModule.forRoot()
  ],
  declarations: [
    MainMenuComponent,
    ButtonsComponent, 
    BannersComponent, 
    CommunityPartnersComponent
  ],
  exports: [
    MainMenuComponent,
    ButtonsComponent, 
    BannersComponent, 
    CommunityPartnersComponent
  ]
})
export class SharedModule { }
