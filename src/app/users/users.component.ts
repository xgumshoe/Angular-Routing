import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  onSelect(user: User) {
    this.selectedUser = user;
  }

  onChangeState(data) {
    this.selectedUser.active = !data;
  }
}
