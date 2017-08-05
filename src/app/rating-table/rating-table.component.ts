import {Component, Input, OnInit} from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-rating-table',
  templateUrl: './rating-table.component.html',
  styleUrls: ['./rating-table.component.css']
})
export class RatingTableComponent implements OnInit {

  @Input() users: User[];

  bestUsers: User[] = [];

  constructor() { }

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {
    const categories = [];
    console.log(this.users);
    for (let index = 0; index < this.users.length; index++) {
      if (categories.indexOf(this.users[index].category) < 0) {
        categories.push(this.users[index].category);
      }
    }
    for (let i = 0; i < categories.length; i++) {
      const bestUser = {
        category: '',
        username: '',
        score: 0
      };
      bestUser.category = categories[i];
      for (let k = 0; k < this.users.length; k++) {
        if ((this.users[k].category === categories[i]) && (this.users[k].score >= bestUser.score)) {
          bestUser.score = this.users[k].score;
          bestUser.username = this.users[k].username;
        }
      }
      this.bestUsers.push(bestUser);
    }
  }
}
