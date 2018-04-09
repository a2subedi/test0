import { Injectable } from '@angular/core';
import { Group } from '../group';
import { GROUPS } from '../mock-groups';

@Injectable()
export class MatchesListService {

  tempgrp=GROUPS;

/*getGroup(name:string){
    switch(name){
      case ('A'||'a'):
        return (GROUPS[0]);
      case ('B'||'b'):
        return(GROUPS[1]);
      case ('C'||'c'):
        return(GROUPS[2]);
      case ('D'||'d'):
        return(GROUPS[3]);
      case ('E'||'e'):
        return(GROUPS[4]);
      case ('F'||'f'):
        return(GROUPS[5]);
      case ('G'||'g'):
        return(GROUPS[6]);
      case ('H'||'h'):
        return(GROUPS[7]);
      
    }
  }
*/ 
matches(grp:Group):string[]{
  return [grp.countries[0]+" vs "+grp.countries[1],grp.countries[2]+" vs "+grp.countries[0],grp.countries[1]+" vs "+grp.countries[2],grp.countries[2]+" vs "+grp.countries[3],grp.countries[0]+" vs "+grp.countries[3],grp.countries[3]+" vs "+grp.countries[1]]
}

matchDetails(){
  
}
constructor() { }

}
