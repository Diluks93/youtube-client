import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck, filter, tap } from 'rxjs/operators';
import { CoreService } from 'src/app/core/services/core.service';

import { PodcastService } from 'src/app/youtube/services/podcast.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchBox') inputElement?: ElementRef;

  constructor(
    public readonly podcastService: PodcastService,
    private readonly coreService: CoreService,
  ) {}

  ngAfterViewInit() {
    // todo: remove any-type
    fromEvent(this.inputElement?.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        distinctUntilChanged<any>(),
        filter((value: string) => value.length > 3),
        tap((value: string) => value),
      )
      .subscribe((value) => this.coreService.changeString(value));
  }
}
