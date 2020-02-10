import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulesPage } from './schedules.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulesPageRoutingModule {}
