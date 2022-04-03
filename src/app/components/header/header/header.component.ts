import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private _fetched: boolean = false;

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
}
