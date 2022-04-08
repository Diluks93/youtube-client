import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  public submit = new EventEmitter<boolean>();

  public onSubmit(value: boolean): void {
    this.submit.emit(value);
  }

  private _click: boolean = false;

  public clickChange = new EventEmitter<boolean>();

  public toggleComponent(value: boolean): void {
    this._click = value ? !this._click : value;
    this.clickChange.emit(this._click);
  }
}
