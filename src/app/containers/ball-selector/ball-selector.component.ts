import { BetService } from './../../services/bet.service';
import { Component, OnInit } from '@angular/core';
import { BtnColorsType } from '../../shared/types';

@Component({
  selector: 'gr-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {

  selectedValue: number = null;
  selectedColor: BtnColorsType = 'default';
  isWinner: boolean;
  shouldShowFinalResult: boolean;
  totalWon: number;
  winnerNumber: number;

  constructor(public betService: BetService) { }

  ngOnInit(): void {}

  selectedValueChange(value: number) {
    if (value) {
      this.selectedValue = value;
      this.selectedColor = this.betService.getBetColor(value);
    }
  }

  clearSelection() {
    this.selectedValue = null;
    this.selectedColor = 'default';

    this.betService.setResult({
      won: false,
      total: null,
      winnerNumber: null,
      shouldShowFinalResult: false,
    });
  }

  trackByItems(index: number, item: any) {
    return item.value;
  }

}
