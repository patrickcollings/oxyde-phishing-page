import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MissingPageComponent } from './missing-page/missing-page.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
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
