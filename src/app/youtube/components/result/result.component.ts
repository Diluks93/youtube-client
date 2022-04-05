import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Podcast } from '../../models/podcast-model';
import { PodcastService } from '../../services/podcast.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  public podcasts$!: Observable<Podcast[]>;

  protected selectedId: string = '';

  private readonly _nameIcons: string[] = [
    'visibility',
    'thumb_down_alt',
    'thumb_up_alt',
    'question_answer',
  ];

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

  ngOnInit(): void {
    this.podcasts$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = params.get('id') as string;

        return this.podcastService.getPodcasts();
      }),
    );
  }

  public identify(_: number, item: Podcast): string {
    return item.id;
  }
}
