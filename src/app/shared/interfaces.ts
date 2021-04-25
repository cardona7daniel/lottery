import { BtnColorsType } from './types';

export interface IBetValues {
  color: BtnColorsType;
  value: number;
}

export interface IResult {
  won: boolean;
  total: number;
  winnerNumber: number;
  shouldShowFinalResult: boolean;
}
