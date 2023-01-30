import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable, of, throwError } from "rxjs";
import { delay, map } from "rxjs/operators";
import { Answer, AnswerList } from "../models/answer-models";



function randomDelay() {
  return Math.random() * 1000;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() {

  }
  storedAnswers: AnswerList[] = [];
  private storedAnswers$ = new BehaviorSubject<AnswerList[]>([]);
  answers$(): Observable<AnswerList[]> {
    return combineLatest([
      this.storedAnswers$.asObservable(),
    ]).pipe(
      map(([tasks]) => {
        let result: AnswerList[] = tasks || [];
        return result
      }),
      delay(randomDelay())
    )
  }

  newAnswer$(answer: AnswerList): Observable<AnswerList> {
    this.storedAnswers = this.storedAnswers.concat(answer);
    this.storedAnswers$.next(this.storedAnswers);
    return of(answer).pipe(delay(randomDelay()));
  }

}
