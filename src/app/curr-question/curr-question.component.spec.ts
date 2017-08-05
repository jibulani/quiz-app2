import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrQuestionComponent } from './curr-question.component';

describe('CurrQuestionComponent', () => {
  let component: CurrQuestionComponent;
  let fixture: ComponentFixture<CurrQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
