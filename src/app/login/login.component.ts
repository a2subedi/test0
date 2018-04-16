import { Component, OnInit, EventEmitter,Output,Input} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  users:any[]=([
    {id:1,uname:'test1',passwd:'abcd1'},
    {id:2,uname:'test2',passwd:'abcd2'},
    {id:3,uname:'test3',passwd:'abcd3'},
    {id:4,uname:'test4',passwd:'abcd4'},
    {id:5,uname:'test5',passwd:'abcd5'},
    {id:6,uname:'test6',passwd:'abcd6'},
    {id:7,uname:'test7',passwd:'abcd7'},
    {id:8,uname:'test8',passwd:'abcd8'}
  ]);
  
  usrname:string='';
  password:string='';
  legal:boolean=false;
  uid:number;
  showRegister:boolean=false;

  @Output() onLogin = new EventEmitter<string>();


  isUser():boolean{
    for(let i=0;i<this.users.length;++i){
      if(this.usrname==this.users[i].uname && this.password==this.users[i].passwd){
        this.uid=i;
        this.legal=true;
        this.onLogin.emit('this.usrname');
        return true;
      }      
    }
    this.legal=false;
  }

  newUser(){
    this.showRegister=true;
  } 
  
  constructor() { }

  ngOnInit() {
  }

}
