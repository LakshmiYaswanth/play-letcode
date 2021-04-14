import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  // Sign up
  signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // sign in
  signIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // log out
  logout() {
    return this.auth.signOut();
  }


  // get user details
  getUser() {
    return this.auth.authState;
  }

  forgotPassword(email: string) {
    return this.auth.sendPasswordResetEmail(email);
  }

  getUserName() {
    return this.auth.currentUser;
  }

}
