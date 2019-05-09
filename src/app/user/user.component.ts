import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSignup(user: User){
    this.userService.adduser(user);
    sessionStorage.setItem("loggedInUser", user.email);
    this.userService.nameEmit.emit(user.name);
    this.router.navigate(['/recipes']);
  }

  isAdmin(){
    return this.userService.isAdmin();
  }

}
