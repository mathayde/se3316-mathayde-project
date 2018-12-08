import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import { Account } from './models/account';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs';

@Injectable()
export class AuthService {//used to implement the login and log out functions in a seperatable and unit testable way
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private userService:UserService,private route: ActivatedRoute) { 
    this.user$=afAuth.authState;
  }
  login(){
    let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl')||'/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout(){
    this.afAuth.auth.signOut();
  }
  get appUser$(): Observable<Account>{
    return this.user$
      .switchMap(user => {
        if(user) return this.userService.get(user.uid);
        return of(null);
      });
  }
}
