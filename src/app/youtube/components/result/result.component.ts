import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CoreService } from 'src/app/core/services/core.service';

import { Podcast } from '../../models/podcast-model';
import { PodcastService } from '../../services/podcast.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  public podcasts: Podcast[] = [];

  public loading: boolean = false;

  protected selectedId: string = '';

  @Input()
  public isClickingCountOfViews: boolean | undefined = undefined;

  @Input()
  public isClickingDate: boolean | undefined = undefined;

  @Input()
  public valueThatUserTypes: string = '';

  @Output()
  public valueThatUserTypesChange = new EventEmitter<string>();

  constructor(
    private readonly podcastService: PodcastService,
    private readonly coreService: CoreService,
  ) {}

  public ngOnInit(): void {
    this.coreService.string$.subscribe((value) => {
      this.handleSearch(value);
    });
  }

  private handleSearch(inputValue: string) {
    this.loading = true;
    this.podcastService.getPodcasts(inputValue).subscribe((podcasts) => {
      this.podcasts = podcasts;
      this.loading = false;
    });
  }

  public identify(_: number, item: Podcast): string {
    return item.id;
  }
}
