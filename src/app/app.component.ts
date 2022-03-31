import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input()
  public value: string = '';

  @Output() valueChange = new EventEmitter();

  public pipeValueChange(value: string): void {
    this.valueChange.emit((this.value = value));
  }

  @Input()
  public fetched = false;

  @Output() fetchedChange = new EventEmitter();

  public toggleFilterComponent = false;
}
