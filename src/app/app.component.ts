import { Component, Output, EventEmitter, } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  logged: boolean= false;
  currentUser: string = 'guest';

  onLogin(fromchild:string){
    this.currentUser=fromchild;
    return fromchild;
  }

  date=new Date;
  kickoff=new Date(2018,5,12)
  diff=this.kickoff.getTime()-this.date.getTime();
  secsLeft=Math.floor(this.diff/(1000));
  minsLeft=Math.floor(this.secsLeft/60);
  hrsLeft=Math.floor(this.minsLeft/60);
  daysLeft=Math.floor(this.hrsLeft/24);  
}