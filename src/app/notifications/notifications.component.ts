import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})


export class NotificationsComponent implements OnInit {

  public notifs=['notification 1','notification 2','notification 3'];
  rmNotifs(i){
    this.notifs.splice(i,1);
    console.log(this.notifs)
  }
  constructor() { }

  ngOnInit() {
  }

}
