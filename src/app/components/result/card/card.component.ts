import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Podcast } from '../../../services/podcast.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() podcast: Podcast | null;

  public color: ThemePalette;

  public nameIcons = ['visibility', 'thumb_down_alt', 'thumb_up_alt', 'question_answer'];

  private SEVEN_DAYS = 7;

  private DAYS_PER_MONTH = 30 - this.SEVEN_DAYS;

  private MONTH_DECEMBER = 11;

  constructor() {
    this.podcast = null;
  }

  public setColorFooter(podcast: Podcast): ThemePalette {
    const today = new Date();
    const publishDate = new Date(podcast.publishedAt);
    const weekAgo = this.setWeekAgo(today);
    const monthAgo = this.setMonthAgo(today);

    if (
      publishDate.getDate() < weekAgo &&
      publishDate.getMonth() === today.getMonth() &&
      publishDate.getFullYear() === today.getFullYear()
    ) {
      this.color = 'primary';
    } else if (
      publishDate.getMonth() < monthAgo &&
      publishDate.getFullYear() === today.getFullYear()
    ) {
      this.color = 'accent';
    } else {
      this.color = 'warn';
    }

    return this.color;
  }

  private setWeekAgo(today: Date): number {
    return today.getDate() > this.SEVEN_DAYS
      ? today.getDate() - this.SEVEN_DAYS
      : today.getDate() + this.DAYS_PER_MONTH;
  }

  private setMonthAgo(today: Date): number {
    return today.getMonth() > 1 ? today.getMonth() - 1 : this.MONTH_DECEMBER;
  }
}
