/**
 * Created by Eugene on 03.05.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

const BASE_URL = 'https://quiz-app-1aa27.firebaseio.com/users';

import 'rxjs/add/operator/map';
import {User} from './user';


@Injectable()
export class UsersAsyncService {

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get(`${BASE_URL}.json`)
      .map((res: Response) => res.json())
      .map((data) => {
        const result = Object.keys(data).map(id => {
          return Object.assign({}, data[id], {id: id});
        });
        // console.log('--- result', result);
        return result;
      });
  }

  addUser(user: User) {
    return this.http.post(`${BASE_URL}.json`, user);
  }
}
