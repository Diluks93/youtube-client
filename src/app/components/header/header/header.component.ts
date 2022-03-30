import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() fetched = false;

  @Output() fetchedChange = new EventEmitter();

  @Output() changeFilterComponent = new EventEmitter();

  public toggleFilterComponent(): void {
    this.changeFilterComponent.emit(true);
  }

  public pipeFetchedChange(fetched: boolean): void {
    this.fetchedChange.emit((this.fetched = fetched));
  }
}
