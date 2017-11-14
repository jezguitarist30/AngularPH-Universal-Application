import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevToolsComponent } from './dev-tools/dev-tools.component';

const routes: Routes = [
    {
      path: 'dev-tools', component: DevToolsComponent
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
