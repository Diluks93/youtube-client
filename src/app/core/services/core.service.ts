import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private _inputValue$ = new BehaviorSubject<{ text: string } | null>(null);

  public sendInputValue(value: string): void {
    this._inputValue$.next({ text: value });
    sessionStorage.setItem('inputValue', value);
  }

  public clearInputValue() {
    this._inputValue$.next(null);
  }

  public changeInputValue(): Observable<{ text: string } | null> {
    return this._inputValue$.asObservable();
  }

  private _click: boolean = false;

  public clickChange = new Subject<boolean>();

  public toggleComponent(value: unknown): void {
    this._click = value ? !this._click : (value as boolean);
    this.clickChange.next(this._click);
  }
}
