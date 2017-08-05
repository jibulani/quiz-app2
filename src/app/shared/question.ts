/**
 * Created by Eugene on 25.04.2017.
 */
export interface Question {
  questionText: string;
  category: string;
  variants: Array<string>;
  answers: Array<string>;
}
