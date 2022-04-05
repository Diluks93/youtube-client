import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  private _valueThatUserTypes: string = '';

  private _toggleFilterComponent: boolean = false;

  private _fetched: boolean = false;

  @Input()
  public get valueThatUserTypes(): string {
    return this._valueThatUserTypes;
  }

  @Input()
  public isClickingCountOfViews: boolean | undefined = undefined;

  @Input()
  public isClickingDate: boolean | undefined = undefined;

  @Output()
  public isClickingDateChange = new EventEmitter<boolean>();

  @Output()
  private valueThatUserTypesChange = new EventEmitter<string>();

  @Output()
  public isClickingCountOfViewsChange = new EventEmitter<boolean>();

  public set valueThatUserTypes(value: string) {
    this.valueThatUserTypesChange.emit((this._valueThatUserTypes = value));
  }

  public toggleClickCountOfViews(value: boolean): void {
    this.isClickingCountOfViewsChange.emit((this.isClickingCountOfViews = value));
  }

  public toggleClickDate(value: boolean): void {
    this.isClickingDateChange.emit((this.isClickingDate = value));
  }

  private subscribeSettingBtn?: Subscription;

  private subscribeFetched?: Subscription;

  constructor(private readonly coreService: CoreService) {}

  ngOnInit(): void {
    this.subscribeSettingBtn = this.coreService.click$.subscribe((value: boolean) => {
      this._toggleFilterComponent = value;
    });
    this.subscribeFetched = this.coreService.fetched$.subscribe((value: boolean) => {
      this._fetched = value;
    });
  }

  public get fetched(): boolean {
    return this._fetched;
  }

  public get toggleFilterComponent(): boolean {
    return this._toggleFilterComponent;
  }

  ngOnDestroy(): void {
    this.subscribeSettingBtn?.unsubscribe();
    this.subscribeFetched?.unsubscribe();
  }
}
