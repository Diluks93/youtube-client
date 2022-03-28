import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() isShowFilterComponent = new EventEmitter();

  public showFilterComponent(): void {
    this.isShowFilterComponent.emit(true);
  }
}
