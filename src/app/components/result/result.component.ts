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

  private _nameIcons = ['visibility', 'thumb_down_alt', 'thumb_up_alt', 'question_answer'];

  public get nameIcons(): Array<string> {
    return this._nameIcons;
  }

  @Input()
  public isClickingCountOfViews: boolean | undefined = undefined;

  @Input()
  public isClickingDate: boolean | undefined = undefined;

  @Input()
  public valueThatUserTypes: string = '';

  @Output()
  public valueThatUserTypesChange = new EventEmitter<string>();

  constructor(private podcastService: PodcastService) {}

  ngOnInit() {
    this.podcasts = this.podcastService.getPodcasts();
  }

  public identify(_: number, item: Podcast): string {
    return item.id;
  }
}
