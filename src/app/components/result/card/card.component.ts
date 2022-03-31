import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Podcast } from '../../../services/podcast.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  public podcast: Podcast | null;

  public podcasts: Array<Podcast> = [];

  @Input()
  public value: string = '';

  @Output()
  public valueChange = new EventEmitter();

  public pipeValueChange(value: string): void {
    this.valueChange.emit((this.value = value));
  }

  public nameIcons = ['visibility', 'thumb_down_alt', 'thumb_up_alt', 'question_answer'];

  constructor() {
    this.podcast = null;
  }
}
