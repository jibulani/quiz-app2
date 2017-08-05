import { Component, OnInit } from '@angular/core';
import {Question} from '../shared/question';
import {QuestionsAsyncService} from '../shared/question-async.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: Question[] = [];

  currQuestions: Question[] = [];

  questionCategories = [];

  isTestStarted = false;

  constructor(private questionsAsyncService: QuestionsAsyncService) {

  }

  ngOnInit() {
    this.updateQuestions();
    // this.addAskedQuestion();
  }

  chooseCategory(category) {
    this.currQuestions = [];
    for (let index = 0; index < this.questions.length; index++) {
      if (this.questions[index].category === category) {
        this.currQuestions.push(this.questions[index]);
        // console.log(this.questions[index].category);
      }
    }
    this.isTestStarted = true;
  }

  // areQuestionsReceived() {
  //   if (this.isTestStarted || this.questions.length > 0) {
  //     // this.addAskedQuestion();
  //     this.isTestStarted = true;
  //     return true;
  //   }
  //   return false;
  // }

  areQuestionsReceived() {
    if (this.questions.length > 0) {
      // this.addAskedQuestion();
      for (let index = 0; index < this.questions.length; index++) {
        if (this.questionCategories.indexOf(this.questions[index].category) < 0) {
          this.questionCategories.push(this.questions[index].category);
          // console.log(this.questions[index].category);
        }
      }
      // console.log(this.questionCategories);
      return true;
    }
    return false;
  }

  // addAskedQuestion() {
  //   const index = Math.floor(Math.random() * this.questions.length);
  //   this.askedQuestions.push(this.questions[index]);
  //   this.questions.splice(index, 1);
  // }

  private updateQuestions() {
    this.questionsAsyncService.getQuestions()
      .subscribe((data) => {
        this.questions = data;
      });
      // .then((questions) => {
      //   const index = Math.floor(Math.random() * this.questions.length)
      //   this.askedQuestions.push(questions[index]);
      //   this.questions.splice(index, 1);
      // });

  }

  // getQuestion() {
  //   if (this.questions.length === 0) {
  //     this.quizEnd = true;
  //   } else {
  //     const index = Math.floor(Math.random() * this.questions.length)
  //     this.askedQuestions.push(this.questions[index]);
  //     this.questions.splice(index, 1);
  //   }
  //   if (this.rightChoice) {
  //     this.stats.rightAnswers += 1;
  //   } else {
  //     this.stats.falseAnswers += 1;
  //   }
  //   this.rightChoice = false;
  // }
  //
  // checkChoice(variant, question) {
  //   if (variant === question.answer) {
  //     this.rightChoice = true;
  //   } else {
  //     this.rightChoice = false;
  //   }
  // }
}

