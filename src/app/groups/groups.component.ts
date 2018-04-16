import { Component, OnInit } from '@angular/core';
import { GROUPS } from '../mock-groups';
import { Group } from '../group';


@Component({
  selector: 'app-group',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

    groups_2018 = GROUPS;
    activeGroup='';
    setGroup(arg){
      this.activeGroup=arg;
    }
  constructor() { }

  ngOnInit() {
  }

}
