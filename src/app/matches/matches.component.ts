import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../group';
import { GROUPS } from '../mock-groups';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { TiesheetService } from '../tiesheet.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})

export class MatchesComponent implements OnInit {

  constructor(private db: AngularFireDatabase,
    private router : Router,
    private ts: TiesheetService
  ) {  }

  @Input() myGroup;
  total:number=0;

  groups=GROUPS;
  matches(arg){
    return this.ts.games(arg);
  }
  showDetails(){
    // no implementation;
   }
/**pushData(grpid,i,arg){
  * console.log('pushing data');
  * this.db.object('matches/'+grpid+'/'+i).set(arg);
  * }
  *  //grabs match from mock-list and posts it to db
*/

  putPrediction(id,game,index){
    this.router.navigate(['/predict']);
  }

  ngOnInit() {
    
  }

}
