import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'gr-ball-group',
  template: '<ng-content></ng-content>',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BallGroupComponent),
    multi: true
  }]
})
export class BallGroupComponent implements ControlValueAccessor {
  // tslint:disable:variable-name
  private _value?: number;
  private _onChange?: (val: number) => void;

  @Input()
  get value() {
    return this._value || null;
  }
  set value(value: number) {
    this._value = value;
    this.valueChange.emit(value);
    if (this._onChange) {
      this._onChange(value);
    }
  }

  @Output() valueChange = new EventEmitter<number>();

  writeValue(value: number) {
    this.value = value;
  }

  registerOnChange(fn: (val: number) => void) {
    this._onChange = fn;
  }

  registerOnTouched() {}
}
