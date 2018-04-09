import { Component, OnInit } from '@angular/core';
import { MatchesListService } from './matches-list.service';
import { Group } from '../group';
import { GROUPS } from '../mock-groups';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})

export class MatchesComponent implements OnInit {

  groups=GROUPS;
  matches(grp:Group):string[]{
    return [grp.countries[0]+" vs "+grp.countries[1],grp.countries[2]+" vs "+grp.countries[0],grp.countries[1]+" vs "+grp.countries[2],grp.countries[2]+" vs "+grp.countries[3],grp.countries[0]+" vs "+grp.countries[3],grp.countries[3]+" vs "+grp.countries[1]]
  }
  showDetails(a:string,b:number,e){
    //console.log(a,b);
    alert("no details available atm.");

  }

  constructor() { }

  ngOnInit() {
  }

}
