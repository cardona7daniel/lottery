import { ComponentsModule } from './../../components/components.module';
import { BetService } from './../../services/bet.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetSlipComponent } from './bet-slip.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetSlipComponent ],
      imports: [
        ComponentsModule,
        ReactiveFormsModule,
      ],
      providers: [BetService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate min value in the input bet when value is less than 5', () => {
    const field = component.betForm.get('bet');
    field.setValue(4);
    const minerror = field.errors.min;
    expect(minerror).toBeTruthy();
  });

  it('should not validate min value in the input bet when value is greater or equal than 5', () => {
    const field = component.betForm.get('bet');
    field.setValue(6);
    const minerror = field.errors;
    expect(minerror).toBeFalsy();
  });
});
