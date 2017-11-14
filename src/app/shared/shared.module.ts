import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module'
import { SharedRoutingModule } from './shared.routing.module';

import { ButtonsComponent } from './dev-tools/buttons/buttons.component';
import { DevToolsComponent } from './dev-tools/dev-tools.component';

@NgModule({
  imports: [
    CommonModule,
   // MaterialModule,
    SharedRoutingModule
  ],
  declarations: [ButtonsComponent, DevToolsComponent]
})
export class SharedModule { }
