import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Account } from './../models/account';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  { //taken from the bootstrap open example library and adapted to my use case
  appUser: Account;
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser=appUser=appUser);
  }

  logout(){
    this.auth.logout();
  }
}
