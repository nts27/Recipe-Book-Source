import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
  }

  onLogin(loggedInUser: User) {
    if(this.userService.authenticateUser(loggedInUser)) {
      this.route.navigate(['/recipes']);
    }else {
      this.route.navigate(['/login']);
    }
  }

}
