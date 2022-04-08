import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

import { Subscription } from 'rxjs';

import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _isMainPageComponent: boolean = false;

  public get isMainPageComponent(): boolean {
    return this._isMainPageComponent;
  }

  protected _toggleFilterComponent: boolean = false;

  public toggleFilterComponent(value: unknown): void {
    this.coreService.toggleComponent(value as boolean);
  }

  protected event$?: Subscription;

  private readonly nameRoute: string = '/main-page';

  constructor(private router: Router, private readonly coreService: CoreService) {}

  public ngOnInit() {
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this._isMainPageComponent = event.url === this.nameRoute ? true : false;
      }
    });

    this.coreService.clickChange.subscribe((value: boolean) => {
      this._toggleFilterComponent = value;
    });
  }

  public ngOnDestroy() {
    this.event$?.unsubscribe();
  }
}
