import { Component, OnInit } from '@angular/core';
import { Podcast, PodcastService } from 'src/app/services/podcast.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  providers: [PodcastService],
})
export class ResultComponent implements OnInit {
  public podcasts: Array<Podcast> = [];

  constructor(private podcastService: PodcastService) {}

  ngOnInit() {
    this.podcasts = this.podcastService.getPodcasts();
  }
}
