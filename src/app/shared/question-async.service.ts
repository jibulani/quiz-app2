/**
 * Created by Eugene on 25.04.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

const BASE_URL = 'https://quiz-app-1aa27.firebaseio.com/questions';

import 'rxjs/add/operator/map';
import {Question} from './question';
import {Observable} from 'rxjs';


@Injectable()
export class QuestionsAsyncService {

  time;

  constructor(private http: Http) {
  }

  getQuestions() {
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

  addQuestion(question: Question) {
    // const newQuestion = QuestionAsyncService.createNewTodo(name);

    return this.http.post(`${BASE_URL}.json`, question);
  }

  counter() {
    return Observable
      .interval(5000)
      .flatMap(() => {
        this.time = true;
        return this.time;
      });
  }

}
