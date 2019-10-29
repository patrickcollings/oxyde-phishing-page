import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MissingPageComponent } from './missing-page/missing-page.component';
import { OutlookResetComponent } from './outlook-reset/outlook-reset.component';
import { GoogleResetComponent } from './google-reset/google-reset.component';


const routes: Routes = [
  {
    path: '',
    component: OutlookResetComponent
  },
  {
    path: 'outlook',
    component: OutlookResetComponent
  },
  {
    path: 'google',
    component: GoogleResetComponent
  },
  {
    path: '**',
    component: MissingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
