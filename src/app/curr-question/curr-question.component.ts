import { Component, OnInit, Input } from '@angular/core';
import {Question} from '../shared/question';
import {QuestionsAsyncService} from '../shared/question-async.service';
// import {Observable} from 'rxjs';
import {Answer} from '../shared/answer';
import {User} from '../shared/user';
import {UsersAsyncService} from '../shared/users-async.service';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-curr-question',
  templateUrl: './curr-question.component.html',
  styleUrls: ['./curr-question.component.css']
})
export class CurrQuestionComponent implements OnInit {

  @Input() questions: Question[];

  askedQuestions: Question[] = [];

  checkedAnswers: String[] = [];

  quizEnd = false;

  multipleChoiceChecked = false;

  resultAdded = false;

  currUser: User = {
    username: '',
    category: '',
    score: 0
  };

  seeAnswer = false;

  answers: Answer [] = [];

  currAnswer: Answer = {
    questionText: '',
    userAnswer: '',
    rightAnswer: ''
  };

  userForm: FormGroup;

  rightChoice;

  time;

  stats = {
    rightAnswers: 0,
    falseAnswers: 0
  };

  public pieChartLabels: string [] = ['Верные ответы', 'Неверные ответы'];
  pieChartData: number [] = [];
  public pieChartType = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private questionsAsyncService: QuestionsAsyncService,
              private usersAsyncService: UsersAsyncService,
              private formBuilder: FormBuilder, ) {

  }

  ngOnInit() {
    this.addQuestion();
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    });
  }

  addQuestion() {
    if (this.questions.length === 0) {
      this.quizEnd = true;
    } else {
      const index = Math.floor(Math.random() * this.questions.length);
      this.askedQuestions.push(this.questions[index]);
      this.currAnswer.questionText = this.questions[index].questionText;
      this.currAnswer.rightAnswer = this.questions[index].answers.sort().join();
      this.questions.splice(index, 1);
    }
  }

  getQuestion() {
    this.checkedAnswers = [];
    this.multipleChoiceChecked = false;
    this.answers.push(this.currAnswer);
    this.currAnswer = {
      questionText: '',
      userAnswer: '',
      rightAnswer: ''
    };
    this.addQuestion();
    if (this.rightChoice) {
      this.stats.rightAnswers += 1;
    } else {
      this.stats.falseAnswers += 1;
    }
    this.rightChoice = false;
  }

  checkChoice(variant, question) {
    this.currAnswer.userAnswer = variant;
    if (variant === question.answers.sort().join()) {
      this.rightChoice = true;
    } else {
      this.rightChoice = false;
    }
  }

  checkMultipleChoice(variant, question) {
    const answer = variant.sort().join();
    this.currAnswer.userAnswer = answer;
    if (answer === question.answers.sort().join()) {
      this.rightChoice = true;
    } else {
      this.rightChoice = false;
    }
    this.multipleChoiceChecked = true;
  }

  addOrRemoveCheckedAnswer(variant) {
    let isRemoved = false;
    for (let i = 0; i < this.checkedAnswers.length; i++) {
      if (variant === this.checkedAnswers[i]) {
        this.checkedAnswers.splice(i, 1);
        isRemoved = true;
      }
    }
    if (!isRemoved) {
      this.checkedAnswers.push(variant);
    }
  }

  seeAnswers() {
    this.seeAnswer = true;
  }

  addUser(username: string) {
    this.currUser.username = username;
    this.currUser.score = this.stats.rightAnswers;
    const question = this.askedQuestions.pop();
    this.currUser.category = question.category;
    this.usersAsyncService.addUser(this.currUser)
      .subscribe(res => {
        console.log(res);
        this.resultAdded = true;
        // this.updateUsers();
      });
  }
}
