import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  private _isClicked: boolean = false;

  @Input()
  public get isClicked(): boolean {
    return this._isClicked;
  }

  @Output()
  private isClickedChange = new EventEmitter<boolean>();

  @Input()
  public isDisabled?: boolean;

  @Input()
  public nameButton?: string;

  public toggleClick(value: unknown) {
    this._isClicked = value ? !this._isClicked : (value as boolean);
    this.isClickedChange.emit(this._isClicked);
  }
}
