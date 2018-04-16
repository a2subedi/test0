import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { NotificationsComponent }      from './notifications/notifications.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PredictComponent } from './predict/predict.component';
import { GroupsComponent } from './groups/groups.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'predict', component: PredictComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'groups' , component: GroupsComponent },
  { path: 'register' , component: RegisterComponent },
  { path: 'login' , component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}