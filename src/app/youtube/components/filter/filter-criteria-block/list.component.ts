import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-filter-criteria-block',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  private _valueThatUserTypes: string = '';

  private _isDisabled: boolean = true;

  @Input()
  public get valueThatUserTypes(): string {
    return this._valueThatUserTypes;
  }

  public get isDisabled(): boolean {
    this._isDisabled = sessionStorage.getItem('fetched') ? false : true;
    return this._isDisabled;
  }

  @Output()
  private valueThatUserTypesChange = new EventEmitter<string>();

  @Output()
  private isClickingCountOfViewsChange = new EventEmitter<boolean>();

  @Output()
  private isClickingDateChange = new EventEmitter<boolean>();

  public set valueThatUserTypes(value: string) {
    this._valueThatUserTypes = value;
    this.valueThatUserTypesChange.emit(this._valueThatUserTypes);
  }

  public toggleClick(value: boolean, index: number): void {
    if (index === 0) {
      this.isClickingDateChange.emit(value);
    } else {
      this.isClickingCountOfViewsChange.emit(value);
    }
  }
}
