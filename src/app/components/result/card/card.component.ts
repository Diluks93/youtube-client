import { Component, Input } from '@angular/core';
import { Podcast } from '../../../services/podcast.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() podcast: Podcast | null;

  constructor() {
    this.podcast = null;
  }
}
