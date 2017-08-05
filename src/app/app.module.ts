import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsAsyncService } from './shared/question-async.service';
import { UsersAsyncService } from './shared/users-async.service';
import { CurrQuestionComponent } from './curr-question/curr-question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { RatingComponent } from './rating/rating.component';
import { RatingTableComponent } from './rating-table/rating-table.component';

const appRoutes: Routes = [
  { path: 'test', component: QuestionComponent },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'rating', component: RatingComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    QuestionComponent,
    CurrQuestionComponent,
    AddQuestionComponent,
    RatingComponent,
    RatingTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
  ],
  providers: [
    QuestionsAsyncService,
    UsersAsyncService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
