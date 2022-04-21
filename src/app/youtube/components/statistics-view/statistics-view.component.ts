import { Component, Input } from '@angular/core';
import { Podcast } from '../../models/podcast-model';

@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.scss'],
})
export class StatisticsViewComponent {
  @Input()
  public podcast?: Podcast;

  private readonly _nameIcons: string[] = ['visibility', 'star', 'thumb_up_alt', 'question_answer'];

  public get nameIcons(): Array<string> {
    return this._nameIcons;
  }
}
