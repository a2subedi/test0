import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatchesComponent } from './matches/matches.component';
import { MatchesListService } from './matches/matches-list.service';
import { GroupsComponent } from './groups/groups.component';
import { CountdownComponent } from './countdown/countdown.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchesComponent,
    NotificationsComponent,
    GroupsComponent,
    RegisterComponent,
    LoginComponent,
    CountdownComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MatchesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
