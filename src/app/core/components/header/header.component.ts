import { Component, OnInit, EventEmitter, Input, Output, OnDestroy } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _fetched: boolean = false;

  private _isMainPageComponent: boolean = false;

  public get isMainPageComponent(): boolean {
    return this._isMainPageComponent;
  }

  @Input()
  public get fetched() {
    return this._fetched;
  }

  @Output()
  private fetchedChange = new EventEmitter<boolean>();

  public set fetched(value: boolean) {
    this._fetched = value;
    this.fetchedChange.emit(this._fetched);
  }

  @Output()
  private changeFilterComponent = new EventEmitter<boolean>();

  public toggleFilterComponent(): void {
    this.changeFilterComponent.emit(true);
  }

  protected event$?: Subscription;

  private readonly nameRoute: string = '/main-page';

  constructor(private router: Router) {}

  ngOnInit() {
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this._isMainPageComponent =
          event.url === this.nameRoute || event.url === '/' ? true : false;
      }
    });
  }

  ngOnDestroy() {
    this.event$?.unsubscribe();
  }
}
