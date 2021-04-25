import { IBetValues, IResult } from './../shared/interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BetService {
  private _result = new BehaviorSubject<IResult>({
    won: false,
    total: null,
    winnerNumber: null,
    shouldShowFinalResult: false,
  });

  _betValues: IBetValues[] = [
    {color: 'red', value: 1},
    {color: 'pink', value: 2},
    {color: 'blue', value: 3},
    {color: 'green', value: 4},
    {color: 'beige', value: 5},
    {color: 'yellow', value: 6},
    {color: 'red', value: 7},
    {color: 'pink', value: 8},
    {color: 'blue', value: 9},
    {color: 'green', value: 10},
  ];
  constructor() { }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  get betValues() {
    return this._betValues;
  }

  get result() {
    return this._result.asObservable();
  }

  setResult(value: IResult) {
    this._result.next({...value});
  }

  getBetColor(value: number) {
    return this._betValues.find((item: IBetValues) => item.value === value).color;
  }
}
