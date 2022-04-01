import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input()
  public value: string = '';

  @Output()
  public valueChange = new EventEmitter<string>();

  public pipeValueChange(value: string): void {
    this.valueChange.emit((this.value = value));
  }

  @Input()
  public fetched = false;

  @Output()
  public fetchedChange = new EventEmitter<boolean>();

  public toggleFilterComponent = false;

  @Input()
  public isClickingCountOfViews: boolean | undefined = undefined;

  @Output()
  public isClickingCountOfViewsChange = new EventEmitter<boolean>();

  public toggleClick(value: boolean): void {
    this.isClickingCountOfViewsChange.emit((this.isClickingCountOfViews = value));
  }
}
