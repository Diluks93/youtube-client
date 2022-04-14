import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  public string$ = new Subject<string>();

  public changeString(string: string): void {
    this.string$.next(string);
    sessionStorage.setItem('inputValue', string);
  }

  private _click: boolean = false;

  public clickChange = new Subject<boolean>();

  public toggleComponent(value: unknown): void {
    this._click = value ? !this._click : (value as boolean);
    this.clickChange.next(this._click);
  }
}
