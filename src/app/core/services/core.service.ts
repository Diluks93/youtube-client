import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  public click$ = new Subject<boolean>();

  public toggleFilterComponent(click: boolean): void {
    this.click$.next(click);
  }

  public fetched$ = new Subject<boolean>();

  public isFetched(fetched: boolean): void {
    this.fetched$.next(fetched);
  }
}
