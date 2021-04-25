import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { BetService } from './../../services/bet.service';
import { ComponentsModule } from './../../components/components.module';
import { BallSelectorComponent } from './ball-selector.component';
import { BetSlipComponent } from '../bet-slip/bet-slip.component';

describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallSelectorComponent, BetSlipComponent ],
      imports: [ComponentsModule, ReactiveFormsModule],
      providers: [BetService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear all data', () => {
    component.clearSelection();
    expect(component.selectedValue).toBeNull();
    expect(component.selectedColor).toBe('default');
  });
});
