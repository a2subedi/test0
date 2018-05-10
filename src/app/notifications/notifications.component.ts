import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../auth.service';
import { Observable } from '@firebase/util';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})


export class NotificationsComponent implements OnInit {

  constructor( private db: AngularFireDatabase,private uUser: AuthService ) { }

  notifsArray : any ;

  getNotifs(){
    return this.db.list('/notifications/'+this.uUser.getDetails().uid).valueChanges();
  }
  rmNotifs(){
    this.db.object('/notifications/'+this.uUser.getDetails().uid).remove();      
  }
  

  ngOnInit() {
   this.notifsArray = this.getNotifs();
  }

}
