import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { BetService } from './../../services/bet.service';
import { BtnColorsType } from '../../shared/types';
import { IResult } from '../../shared/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'gr-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnInit, OnDestroy {

  @Input() optionSelected: number = null;
  @Input() color: BtnColorsType = 'default';
  @Output() isWinner: EventEmitter<IResult> = new EventEmitter();

  private subscription$: Subscription;
  private profitValue = 1.5;
  total: number;
  betForm = new FormGroup({
    bet: new FormControl(null, {
      validators: [Validators.required, Validators.min(5)],
      updateOn: 'blur'
    }),
  });

  constructor(private betService: BetService) { }

  get betField() {
    return this.betForm.get('bet');
  }

  ngOnInit(): void {
    this.subscription$ = this.betField.valueChanges.pipe(
      filter((value: number) => value && value >= 5)
    ).subscribe((value: number) => this.total = value * this.profitValue);
  }

  setValueToBet() {
    if (this.betField.value >= 5){
      this.total = this.betField.value * this.profitValue;
    }
  }

  sentBet() {
    const winnerNumber = this.betService.getRandomInt(1, 10);
    this.betService.setResult({
      won: winnerNumber === this.optionSelected,
      total: this.total,
      winnerNumber,
      shouldShowFinalResult: true,
    });
  }

  ngOnDestroy() {
    this.subscription$ && this.subscription$.unsubscribe();
  }

}
