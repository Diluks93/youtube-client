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

  public toggleClick(): void {
    this.isClickingCountOfViews = !this.isClickingCountOfViews;
    this.isClickingCountOfViewsChange.emit(this.isClickingCountOfViews);
  }
}
