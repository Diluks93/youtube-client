import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Podcast, PodcastService } from 'src/app/services/podcast.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  providers: [PodcastService],
})
export class ResultComponent implements OnInit {
  public podcasts: Array<Podcast> = [];

  @Input()
  public isClickingCountOfViews: boolean | undefined = undefined;

  @Input()
  public value: string = '';

  @Output()
  public valueChange = new EventEmitter<string>();

  public pipeValueChange(value: string): void {
    this.valueChange.emit((this.value = value));
  }

  constructor(private podcastService: PodcastService) {}

  ngOnInit() {
    this.podcasts = this.podcastService.getPodcasts();
  }
}
