import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PodcastService } from '../../services/podcast.service';
import { Podcast } from '../../models/podcast-model';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit {
  public podcast$!: Observable<Podcast | undefined>;

  constructor(private route: ActivatedRoute, private podcastService: PodcastService) {}

  ngOnInit(): void {
    this.podcast$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.podcastService.getPodcastsById(params.get('id')!)),
    );
  }

  public goBack(): void {
    window.history.back();
  }
}
