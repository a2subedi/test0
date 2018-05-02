/*angular modules*/
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { FormsModule } from '@angular/forms';
  import { environment } from '../environments/environment';
/*firebase modules*/
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

/*components*/
  import { AppComponent } from './app.component';
  import { HomeComponent } from './home/home.component';
  import { AppRoutingModule } from './/app-routing.module';
  import { NotificationsComponent } from './notifications/notifications.component';
  import { RegisterComponent } from './register/register.component';
  import { LoginComponent } from './login/login.component';
  import { MatchesComponent } from './matches/matches.component';
  import { MatchesListService } from './matches/matches-list.service';
  import { GroupsComponent } from './groups/groups.component';
  import { PredictComponent } from './predict/predict.component';
  import { FiredataComponent } from './firedata/firedata.component';
  import { AuthService } from './auth.service';
/*******/


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchesComponent,
    NotificationsComponent,
    GroupsComponent,
    RegisterComponent,
    LoginComponent,
    PredictComponent,
    FiredataComponent,
    
  ],
  imports: [
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase,'angular-auth-firebase'),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [MatchesListService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }