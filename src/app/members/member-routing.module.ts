import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard/dashboard.page';
import { DashboardPageModule } from './dashboard/dashboard.module';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: './home/home.module#HomePageModule',
          },
        ],
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren:
              './profile/profile.module#ProfilePageModule',
          },
        ],
      },
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: './menu/menu.module#MenuPageModule',
          },
        ],
      },
      { path: '', loadChildren: './home/home.module#HomePageModule' },
    ],
  },
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  {
    path: 'resources',
    loadChildren: () => import('./resources/resources.module').then( m => m.ResourcesPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), DashboardPageModule],
  exports: [RouterModule],
})
export class MemberRoutingModule {}
