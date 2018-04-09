import { Component, Output, EventEmitter } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  date=new Date;
  kickoff=new Date(2018,5,14)
  countdown=this.kickoff.getTime()-this.date.getTime();
  daysLeft=Math.floor(this.countdown/(60*60*24*1000)); 
}