import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uName : string;
  pwd : string;
  pwd2 : string;
  errmsg: string = '';
   
  constructor(private router : Router,public nuser : AuthService,private db: AngularFireDatabase) { }

  register(){
    if(this.pwd==this.pwd2){
      this.nuser.emailSignUp(this.uName,this.pwd).then(success=>{
        this.setUser(this.nuser.getDetails().uid);
      })
      .then((res) => this.router.navigate(['/']));
      alert("registration was successful");
    }
    else{
      this.errmsg='passwords mismatch';
    }
  }
  setUser(id:string) {
    this.db.object('/users/'+id+'/userEmail').set(this.nuser.getDetails().email);
  }

  loadLogin(){
    this.router.navigate(['/login']);
  }

  loginWithGoogle(){
    this.nuser.googleLogin();
  }
  ngOnInit() {
  }
}
