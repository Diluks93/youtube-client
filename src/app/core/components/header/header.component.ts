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
  public isMainPageComponent: boolean = false;

  private event$?: Subscription;

  private readonly nameRoute: string = '/main-page';

  constructor(private router: Router, public readonly coreService: CoreService) {}

  public ngOnInit() {
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.isMainPageComponent = event.url === this.nameRoute ? true : false;
      }
    });
  }

  public ngOnDestroy() {
    this.event$?.unsubscribe();
  }
}
