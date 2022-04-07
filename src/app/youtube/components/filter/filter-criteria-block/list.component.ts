import { Component, EventEmitter, Input, Output } from '@angular/core';

import { StateListComponent } from 'src/app/youtube/models/state-model';

@Component({
  selector: 'app-filter-criteria-block',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  private state: StateListComponent = {
    valueThatUserTypes: '',
    isClickingCountOfViews: undefined,
    isClickingDate: undefined,
  };

  @Input()
  public get valueThatUserTypes(): string {
    return this.state.valueThatUserTypes;
  }

  @Input()
  public get isClickingCountOfViews(): boolean | undefined {
    return this.state.isClickingCountOfViews;
  }

  @Input()
  public get isClickingDate(): boolean | undefined {
    return this.state.isClickingDate;
  }

  @Output()
  private valueThatUserTypesChange = new EventEmitter<string>();

  @Output()
  private isClickingCountOfViewsChange = new EventEmitter<boolean>();

  @Output()
  private isClickingDateChange = new EventEmitter<boolean>();

  public set valueThatUserTypes(value: string) {
    this.state.valueThatUserTypes = value;
    this.valueThatUserTypesChange.emit(this.state.valueThatUserTypes);
  }

  public toggleClickCountOfViews(): void {
    this.state.isClickingCountOfViews = !this.state.isClickingCountOfViews;
    this.isClickingCountOfViewsChange.emit(this.state.isClickingCountOfViews);
  }

  public toggleClickDate(): void {
    this.state.isClickingDate = !this.state.isClickingDate;
    this.isClickingDateChange.emit(this.state.isClickingDate);
  }
}
