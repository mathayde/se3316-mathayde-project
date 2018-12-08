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
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()); //as seen here, an OAuth (specifically Google's through firebase) is used to provide authentication/login
  }                                                                             // which I believe it was Mr. Pascual who said it was a valid form of user authentication
  logout(){                                                                     //new users who connect for the first time are added into the database automatically when they
    this.afAuth.auth.signOut();                                                 //successfully connect with their google account
  }                                                                             //in addition the hashing, validation and other security issues should be effectively covered by this OAuth
  get appUser$(): Observable<Account>{                                          //although at this time it is only my google account in the database that, as store manager has a valid admin status
    return this.user$
      .switchMap(user => {
        if(user) return this.userService.get(user.uid);
        return of(null);
      });
  }
}
