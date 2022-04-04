import { AfterViewInit, Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Directive({
  selector: '[appStatusPublications]',
})
export class StatusPublicationsDirective implements OnInit, AfterViewInit {
  @Input('appStatusPublications')
  public datePublished: string | undefined = undefined;

  private palette: ThemePalette = undefined;

  private color: string = '';

  private SEVEN_DAYS = 7;

  private DAYS_PER_MONTH = 30 - this.SEVEN_DAYS;

  private MONTH_DECEMBER = 11;

  constructor(private el: ElementRef, private rerender2: Renderer2) {}

  ngOnInit() {
    this.setColorFooter(this.datePublished || '');
    this.setColor();
  }

  private setColor(): string {
    return (this.color = `var(--${this.palette})`);
  }

  ngAfterViewInit() {
    const divElement = this.rerender2.createElement('div');
    this.rerender2.setStyle(divElement, 'background-color', this.color);
    this.rerender2.addClass(divElement, 'status-publications');

    this.rerender2.appendChild(this.el.nativeElement, divElement);
  }

  private setColorFooter(date: string): void {
    const today = new Date();
    const publishDate = new Date(date);
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
