import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(<string>localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    console.log('calling home component');
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.loadAllUsers();
      });
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.users = users;
      });
  }
}
