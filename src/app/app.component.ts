import { Component, Output, EventEmitter} from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  logged: boolean;
  constructor(){} 

  /*countdown unfinished
    date = new Date("jun 12, 2018 16:00:00").getTime();
    now = new Date().getTime();
    days:number;
    x = setInterval(function() {
      let distance = this.date - this.now;         
      // Find the distance between now an the count down date
          
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
      console.log(distance);
      this.now+=1000;
    
      // Display the result in the element with id="demo"
    
      // If the count down is finished, write some text 
      if (this.distance < 0) {
        clearInterval(this.x);
      }
    }, 1000);
  
  /*countdown*/

}