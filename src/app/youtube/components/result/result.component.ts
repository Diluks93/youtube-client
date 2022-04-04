import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Podcast, PodcastService } from '../../services/podcast.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  providers: [PodcastService],
})
export class ResultComponent implements OnInit {
  public podcasts: Array<Podcast> = [];

  public podcasts$?: Observable<Podcast>;

  protected selectedId?: number;

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

  constructor(private podcastService: PodcastService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.podcasts = this.podcastService.getPodcasts();
    this.podcasts$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = Number(params.get('id'));
        return this.podcastService.getPodcasts();
      }),
    );
  }

  public identify(_: number, item: Podcast): string {
    return item.id;
  }
}
