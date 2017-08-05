import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingTableComponent } from './rating-table.component';

describe('RatingTableComponent', () => {
  let component: RatingTableComponent;
  let fixture: ComponentFixture<RatingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
