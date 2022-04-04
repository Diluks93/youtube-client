import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  private _valueThatUserTypes: string = '';

  public toggleFilterComponent = false;

  @Input()
  public get valueThatUserTypes(): string {
    return this._valueThatUserTypes;
  }

  @Input()
  public fetched = false;

  @Input()
  public isClickingCountOfViews: boolean | undefined = undefined;

  @Input()
  public isClickingDate: boolean | undefined = undefined;

  @Output()
  public isClickingDateChange = new EventEmitter<boolean>();

  @Output()
  private valueThatUserTypesChange = new EventEmitter<string>();

  @Output()
  public fetchedChange = new EventEmitter<boolean>();

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
}
