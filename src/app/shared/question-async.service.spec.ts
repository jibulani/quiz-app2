/**
 * Created by Eugene on 26.04.2017.
 */
import { TestBed, inject } from '@angular/core/testing';

import { QuestionsAsyncService } from './question-async.service';

describe('TodosAsyncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsAsyncService]
    });
  });

  it('should ...', inject([QuestionsAsyncService], (service: QuestionsAsyncService) => {
    expect(service).toBeTruthy();
  }));
});
