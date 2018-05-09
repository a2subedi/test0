import { Component, OnInit, EventEmitter,Output,Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuth } from '@firebase/auth-types';
import { AuthService } from '../auth.service';
import { error } from 'util';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  uName : string;
  pwd : string;
  pwd2 : string;
  errmsg: string = '';
  showLogout;
  
  constructor(
    private db: AngularFireDatabase,
    private nuser:AuthService,
    private router:Router   ){}
  
  setUser(id:string) {
    this.db.object('/users/'+id+'/userEmail').set(this.nuser.getDetails().email);
  }

  loginWithGoogle(){
    this.nuser.googleLogin().then(success=>{
      this.setUser(this.nuser.getDetails().uid);
    });;
  }
  loginWithEmail(){
    this.nuser.emailLogin(this.uName,this.pwd).catch((error) =>{
      this.errmsg = error.code;  
    }).then(success=>{
      this.setUser(this.nuser.getDetails().uid);
    });
  }
  logoutUser(){
    this.nuser.logout();
  }
  
  //load div login or register
    loadRegister(){
      this.router.navigate(['/register']);
    }
  ngOnInit(){
  }
}