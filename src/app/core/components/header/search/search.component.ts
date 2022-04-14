import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck, filter, tap } from 'rxjs/operators';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchBox') inputElement?: ElementRef;

  private debounce: number = 500;

  constructor(private readonly coreService: CoreService) {}

  public ngAfterViewInit() {
    fromEvent(this.inputElement?.nativeElement, 'keyup')
      .pipe(
        debounceTime(this.debounce),
        pluck('target', 'value'),
        distinctUntilChanged(),
        filter((value) => `${value}`.trim().length > 3),
        tap((value) => value),
      )
      .subscribe((value) => this.coreService.changeString(`${value}`));
  }
}
