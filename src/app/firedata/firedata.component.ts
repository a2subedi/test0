import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-firedata',
  templateUrl: './firedata.component.html',
  styleUrls: ['./firedata.component.css']
})
export class FiredataComponent implements OnInit {
  users: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.users = this.getUser('/items/registered');
  }
  getUser(dataPath): Observable<any[]> {
    return this.db.list(dataPath).valueChanges();
  }
}