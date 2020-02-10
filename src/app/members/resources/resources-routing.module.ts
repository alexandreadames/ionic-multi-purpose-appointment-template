import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourcesPage } from './resources.page';

const routes: Routes = [
  {
    path: '',
    component: ResourcesPage,
  },
  {
    path: 'schedules/:id_resource',
    loadChildren: () =>
      import('./schedules/schedules.module').then(
        m => m.SchedulesPageModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesPageRoutingModule {}
