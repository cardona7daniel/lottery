import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BetService } from './../../services/bet.service';
import { BtnColorsType } from './../../shared/types';

@Component({
  selector: 'gr-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {
  @Input() selectedColor: BtnColorsType;
  @Input() selectedValue: number;

  private subscription$: Subscription;
  shouldShowFinalResult: boolean;
  isWinner: boolean;
  totalWon: number;
  winnerNumber: number;
  winnerColor: BtnColorsType;

  constructor(private betService: BetService) { }

  ngOnInit() {
    this.betService.result.subscribe(({ shouldShowFinalResult, won, total, winnerNumber }) => {
      this.shouldShowFinalResult = shouldShowFinalResult;
      this.isWinner = won;
      this.totalWon = total;
      this.winnerNumber = winnerNumber;
      winnerNumber && (this.winnerColor = this.betService.getBetColor(winnerNumber));
    });
  }

  ngOnDestroy() {
    this.subscription$ && this.subscription$.unsubscribe();
  }

}
