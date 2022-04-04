import { Component } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  private _fetched: boolean = false;

  public onSubmit(value: unknown): void {
    this._fetched = value as boolean;
    this.coreService.isFetched(this._fetched);
  }

  constructor(private readonly coreService: CoreService) {}
}
