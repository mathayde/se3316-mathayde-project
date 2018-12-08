import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: AuthService, router: Router){
    auth.user$.subscribe(user =>{ //this redirects an un-authorized user to log in when they attempt to acces a page that requires authorization 
      if (!user) return;          // it saves the authorized page url in local storage so that upon a successful login (provided the authorized user has the correct clearance)
                                  //the now authorized user can continue right were they left off or at least at the home menu rather than the now unaccessible login page
      userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return; 

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}