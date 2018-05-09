import { Injectable } from '@angular/core';
import { Group } from './group';
import { GROUPS } from './mock-groups';

@Injectable()
export class TiesheetService {
  games(grp:Group):string[]{
    return [grp.countries[0]+" vs "+grp.countries[1],
    grp.countries[2]+" vs "+grp.countries[0],
    grp.countries[1]+" vs "+grp.countries[2],
    grp.countries[2]+" vs "+grp.countries[3],
    grp.countries[0]+" vs "+grp.countries[3],
    grp.countries[3]+" vs "+grp.countries[1]];
  }

  constructor() { }

}
