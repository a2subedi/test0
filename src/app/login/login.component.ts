import { Component, OnInit, EventEmitter,Output,Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuth } from '@firebase/auth-types';
import { AuthService } from '../auth.service';
import { error } from 'util';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  showLogin : boolean =true;
  showRegister : boolean =false;
  showLogout : boolean = this.nuser.isLoggedIn();
  uName : string;
  pwd : string;
  pwd2 : string;
  errmsg: string = '';
  
  users: Observable<any[]>;
  constructor(private db: AngularFireDatabase,private nuser:AuthService) { }
  
  getUserData(dataPath): Observable<any[]> {
    return this.db.list(dataPath).valueChanges();
  }

  loginWithGoogle(){
    this.nuser.googleLogin();
    this.showLogout = true;
  }
  loginWithEmail(){
    this.nuser.emailLogin(this.uName,this.pwd).catch((error) =>{
      this.errmsg = error.code;      
    });
    this.showStatus();
  }

  register(){
    if(this.pwd==this.pwd2){
      this.nuser.emailSignUp(this.uName,this.pwd);
    }
    else{
      this.errmsg='passwords mismatch';
    }
  }
  logout(){
    this.nuser.logout();
    this.showLogout = false;
  }

  showStatus(){
    console.log(this.nuser.isLoggedIn());
    if(this.nuser.isLoggedIn()){this.errmsg=''}
 }

  //load div login or register
    loadLogin(){
      this.showLogin = true;
      this.showRegister = false;
    }
    loadRegister(){
      this.showRegister = true;
      this.showLogin = false;
    }

  ngOnInit(){
  }
}