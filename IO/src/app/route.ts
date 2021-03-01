import { Routes } from '@angular/router';
import { DefaultComponent } from './default/components/default/default.component';
import { DashboardComponent } from './default/components/dashboard/dashboard.component';

export const appRoutes:Routes = [{
  path: '',
  component:DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent
  }]
}];
