import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FirebaseAuth } from '@firebase/auth-types';
import * as firebase from 'firebase/app';
import { User } from 'firebase';

@Injectable()
export class AuthService {

  private user : Observable<any>;
  private userDetails;

  constructor(public af: AngularFireAuth, private router: Router) { 
    this.userDetails = af.auth.currentUser;
    this.user = this.af.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }
  getDetails(){
    return this.userDetails;
  }

  googleLogin(){
      this.af.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }
  emailLogin(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password)
  }
  emailSignUp(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password)
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }
  logout() {
      this.af.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}
