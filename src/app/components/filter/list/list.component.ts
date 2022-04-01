import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input()
  public value: string = '';

  @Output()
  public valueChange = new EventEmitter<string>();

  public pipeValueChange(value: string): void {
    this.valueChange.emit((this.value = value));
  }

  public isClickingCountOfViews: boolean | undefined = undefined;

  @Output()
  public isClickingCountOfViewsChange = new EventEmitter<boolean>();

  public toggleClickCountOfViews(): void {
    this.isClickingCountOfViews = !this.isClickingCountOfViews;
    this.isClickingCountOfViewsChange.emit(this.isClickingCountOfViews);
  }

  public isClickingDate: boolean | undefined = undefined;

  @Output()
  public isClickingDateChange = new EventEmitter<boolean>();

  public toggleClickDate(): void {
    this.isClickingDate = !this.isClickingDate;
    this.isClickingDateChange.emit(this.isClickingDate);
  }
}
