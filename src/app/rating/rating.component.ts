import { Component, OnInit } from '@angular/core';
import { UsersAsyncService } from '../shared/users-async.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  users: User[] = [];

  constructor(private usersAsyncService: UsersAsyncService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.usersAsyncService.getUsers()
      .subscribe((data) => {
        this.users = data;
      });

  }

  areUsersExists() {
    if (this.users.length !== 0) {
      return true;
    }
    return false;
  }

}
