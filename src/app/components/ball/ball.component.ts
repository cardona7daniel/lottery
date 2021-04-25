import { ChangeDetectionStrategy, Component, Input, Optional } from '@angular/core';
import { BallGroupComponent } from './ball-group.component';
import { BtnColorsType } from '../../shared/types';

@Component({
  selector: 'gr-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BallComponent {

  @Input() value: number = null;
  @Input() disabled = false;
  @Input() color: BtnColorsType = 'default';

  constructor(@Optional() public ballGroup: BallGroupComponent) { }

  onChange() {
    if (!this.disabled) {
      this.ballGroup.value = this.value;
    }
  }
}
