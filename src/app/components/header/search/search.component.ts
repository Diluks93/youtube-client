import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public value: string = '';

  @Input() fetched = false;

  @Output() fetchedChange = new EventEmitter<boolean>();

  public onSubmit(): void {
    this.fetched = true;
    this.fetchedChange.emit(this.fetched);
  }
}
