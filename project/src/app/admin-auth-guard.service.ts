import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuard implements CanActivate { //used to protect link with the tier about standard authorization protection; only admins can access these links

  constructor(private auth: AuthService, private userService: UserService) { }
  
  canActivate():Observable<boolean> {
    return this.auth.appUser$
      .map(appUser => appUser.adminstatus);
  }
}
