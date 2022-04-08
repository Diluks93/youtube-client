import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  private _valueThatUserTypes: string = '';

  @Output()
  private valueThatUserTypesChange = new EventEmitter<string>();

  @Input()
  public get valueThatUserTypes(): string {
    return this._valueThatUserTypes;
  }

  public set valueThatUserTypes(value: string) {
    this._valueThatUserTypes = value;
    this.valueThatUserTypesChange.emit(this._valueThatUserTypes);
  }
}
