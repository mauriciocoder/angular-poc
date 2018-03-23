import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {WelcomeComponent} from './component/welcome.component'

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },

  //Catch all for invalid routes
  {
    path: '**',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
