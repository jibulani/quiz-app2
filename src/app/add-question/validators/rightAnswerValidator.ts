/**
 * Created by Eugene on 27.04.2017.
 */
import {FormControl, FormGroup} from '@angular/forms';

export function rightAnswerValidator(firstAnswerKey: string, secondAnswerKey: string,
                                     thirdAnswerKey: string, rightAnswerKey: string) {

  return (group: FormGroup): {[key: string]: any} => {
    const firstAnswer = group.controls[firstAnswerKey];
    const secondAnswer = group.controls[secondAnswerKey];
    const thirdAnswer = group.controls[thirdAnswerKey];
    const rightAnswer = group.controls[rightAnswerKey];

    if (firstAnswer.value === secondAnswer.value) {
      if (firstAnswer.value === thirdAnswer.value){
        return {
          secondAnswerCoincidence: true,
          thirdAnswerCoincidence: true
        };
      } else {
        return {
          secondAnswerCoincidence: true
        };
      }
    } else if ((firstAnswer.value === thirdAnswer.value) || (secondAnswer.value === thirdAnswer.value)){
      return {
        thirdAnswerCoincidence: true
      };
    }
    if (firstAnswer.value !== rightAnswer.value) {
      if (secondAnswer.value !== rightAnswer.value) {
        if (thirdAnswer.value) {
          if (thirdAnswer.value !== rightAnswer.value) {
            return {
              mismatchedAnswers: true
            };
          }
        } else {
          return {
            mismatchedAnswers: true
          };
        }
        //     else {
        //       return {
        //         mismatchedAnswers: false
        //       };
        //     }
        //   } else {
        //     return {
        //       mismatchedAnswers: false
        //     };
        //   }
        // } else {
        //   return {
        //     mismatchedAnswers: false
        //   };
        // }
      }
    }
  };
}
