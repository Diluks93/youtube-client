import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Podcast } from '../services/podcast.service';

@Directive({
  selector: '[appStatusPublications]',
})
export class StatusPublicationsDirective implements OnInit, AfterViewInit {
  @Input()
  public podcast: Podcast | null = null;

  private palette: ThemePalette = undefined;

  private color: string = '';

  private SEVEN_DAYS = 7;

  private DAYS_PER_MONTH = 30 - this.SEVEN_DAYS;

  private MONTH_DECEMBER = 11;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setColorFooter(this.podcast!);
    this.setColor();
  }

  private setColor(): string {
    return (this.color = `var(--${this.palette})`);
  }

  ngAfterViewInit() {
    this.el.nativeElement.style.backgroundColor = this.color;
    console.log(this.color);
  }

  private setColorFooter(podcast: Podcast): void {
    const today = new Date();
    const publishDate = new Date(podcast.publishedAt);
    const weekAgo = this.setWeekAgo(today);
    const monthAgo = this.setMonthAgo(today);

    if (
      publishDate.getDate() > weekAgo &&
      publishDate.getMonth() === today.getMonth() &&
      publishDate.getFullYear() === today.getFullYear()
    ) {
      this.palette = 'accent';
    } else if (
      publishDate.getMonth() > monthAgo &&
      publishDate.getFullYear() === today.getFullYear()
    ) {
      this.palette = 'warn';
    } else {
      this.palette = 'primary';
    }
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
