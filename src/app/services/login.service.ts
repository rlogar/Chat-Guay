import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from "firebase/auth";



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private provider = new GoogleAuthProvider;
  // private auth = getAuth();
  // userData?: firebase.User;
  
  constructor(private auth: AngularFireAuth) {
    
    // this.auth.authState.subscribe((user) => {
    //   this.userData = user || null;
    // })

  }

  inicioPopUP() {
    return this.auth.signInWithPopup(this.provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
    });
  }


  logOut(){
    return this.auth.signOut();
  }

  estaLogueado(){
  }

}
