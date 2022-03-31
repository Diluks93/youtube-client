import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  public inputValue: string = '';

  @Output() valueChange = new EventEmitter();

  @Input()
  public get value() {
    return this.inputValue;
  }

  public set value(val: string) {
    this.inputValue = val;
    this.valueChange.emit(this.inputValue);
  }
}
