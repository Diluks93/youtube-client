import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { Observable } from 'rxjs';

import { ClientItem } from '../../models/response-client.model';
import { Podcast, PodcastService } from '../../services/podcast.service';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
  providers: [PodcastService],
})
export class DetailedInformationPageComponent implements OnInit {
  podcast$?: ClientItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private podcastService: PodcastService,
  ) {}

  ngOnInit(): void {
    const podcastId = this.route.snapshot.paramMap.get('id') || '';
    this.podcast$ = this.podcastService.getPodcastsById(podcastId);
  }

  gotoItems(podcast: Podcast) {
    const podcastId = podcast ? podcast.id : null;
    this.router.navigate(['/podcasts', { id: podcastId }]);
  }
}
