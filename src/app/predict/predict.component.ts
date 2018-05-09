import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import { auth } from 'firebase';
import { GROUPS } from '../mock-groups';
import { TiesheetService } from '../tiesheet.service';
import { Group } from '../group';


@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {
  private groups_2018 = GROUPS;
  score;
  selectedGame: string;

  predicts: Observable<any[]> ;
  errmsg: string = 'Not logged in';
  selected: Group;
  gamesArray: string[];

  constructor(private aUser : AuthService,
    private db: AngularFireDatabase,
    private ts: TiesheetService
  ) {
    if(this.aUser.isLoggedIn()){
      this.predicts = this.getPredicts();      
      this.errmsg='';
    }
  }

  onSelectGame(e){
    this.selectedGame = e;
  }
  
  onSelectGroup(e){ 
    this.selected = e;
    switch (e) {      
      case '-':
      this.gamesArray = [];
      this.selected = null;
      break;
      case 'A':
      this.gamesArray = this.ts.games(this.groups_2018[0])
      break;
      case 'B':
      this.gamesArray = this.ts.games(this.groups_2018[1])
      break;
      case 'C':
      this.gamesArray = this.ts.games(this.groups_2018[2])
      break;
      case 'D':
      this.gamesArray = this.ts.games(this.groups_2018[3])
      break;
      case 'E':
      this.gamesArray = this.ts.games(this.groups_2018[4])
      break;
      case 'F':
      this.gamesArray = this.ts.games(this.groups_2018[5])
      break;
      case 'G':
      this.gamesArray = this.ts.games(this.groups_2018[6])
      break;
      case 'H':
      this.gamesArray = this.ts.games(this.groups_2018[7])
      break;    
      default:
        break;//find better implementation
    }
  }
  
  getPredicts(){
    return this.db.list('/predicts/'+this.aUser.getDetails().uid).valueChanges();
  }
  putPredicts(){
   this.db.object('/predicts/'+this.aUser.getDetails().uid+'/'+this.selectedGame).set(this.selectedGame+' : '+this.score);
   this.score='';
   
  }
  removePredicts(){
    this.db.object('/predicts/'+this.aUser.getDetails().uid+'/'+this.selectedGame).remove();
  }

  ngOnInit() {  }
}