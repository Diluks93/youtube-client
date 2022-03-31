import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input()
  public value: string = '';

  @Output() valueChange = new EventEmitter();

  public pipeValueChange(value: string): void {
    this.valueChange.emit((this.value = value));
  }
}
