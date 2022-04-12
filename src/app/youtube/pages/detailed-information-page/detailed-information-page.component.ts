import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PodcastService } from '../../services/podcast.service';
import { Podcast } from '../../models/podcast-model';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedInformationPageComponent implements OnInit {
  public podcast$!: Observable<Podcast | undefined>;

  constructor(private route: ActivatedRoute, private podcastService: PodcastService) {}

  public ngOnInit(): void {
    this.getPodcast(sessionStorage.getItem('inputValue') as string);
  }

  public getPodcast(value: string): void {
    this.podcast$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id') as string;
        return this.podcastService.getPodcastsById(id, value);
      }),
    );
  }
}
