import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() changeFilterComponent = new EventEmitter();

  public toggleFilterComponent(): void {
    this.changeFilterComponent.emit(true);
  }
}
