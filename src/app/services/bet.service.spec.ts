import { TestBed } from '@angular/core/testing';

import { BetService } from './bet.service';

describe('BetService', () => {
  let service: BetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a number between 1 and 10', () => {
    const num = service.getRandomInt(1, 10);
    expect(num).toBeLessThanOrEqual(10);
    expect(num).toBeGreaterThanOrEqual(1);
  });

  it('should return color red when value is 1', () => {
    const color = service.getBetColor(1);
    expect(color).toBe('red');
  });
});
