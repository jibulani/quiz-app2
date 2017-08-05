import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  counterValue = 10;
  newTest = false;
  addQuestion = false;

  startNewTest() {
    this.newTest = true;
    this.addQuestion = false;
  }

  addNewQuestion() {
    this.newTest = false;
    this.addQuestion = true;
  }

  changeCounterValue() {
    this.counterValue = 15;
  }

  changeCounter(newValue) {
    this.counterValue = newValue;
  }
}
