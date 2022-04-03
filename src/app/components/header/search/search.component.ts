import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input()
  public fetched = false;

  @Output()
  public fetchedChange = new EventEmitter<boolean>();

  public onSubmit(): void {
    this.fetched = true;
    this.fetchedChange.emit(this.fetched);
  }
}
