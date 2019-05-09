import {EventEmitter, Injectable, Output} from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {

  private userList: User[]=[];

  @Output() nameEmit: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.userList = [
      new User('nitish@gmail.com', true, 'qwerty12#', "Nitish"),
      new User('Name1@gmail.com', false, 'name1#', "Name1"),
      new User('Name2@gmail.com', false, 'name2#', "Name2"),
      new User('Name3@gmail.com', false, 'name3#', "Name3"),
      new User('Name4@gmail.com', false, 'name4#', "Name4")
    ];
  }

  authenticateUser(user: User) : boolean {
    for(let i=0; i<this.userList.length; i++){
      if(this.userList[i].email === user.email && this.userList[i].password === user.password){
        sessionStorage.setItem("loggedInUser", user.email);
        this.nameEmit.emit(this.userList[i].name);
        return true;
      }
    }
    this.nameEmit.emit("User");
    return false;
  }

  adduser(user: User){
    this.userList.push(user);
  }

  isAdmin(){
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if(loggedInUser!=null) {
      for (let i = 0; i < this.userList.length; i++) {
        if (this.userList[i].email === loggedInUser) {
          return this.userList[i].admin;
        }
      }
    }
    return false;
  }

}
