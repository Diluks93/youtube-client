import { AfterViewInit, Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

import { MyThemePalette } from '../models/theme-palette';

@Directive({
  selector: '[appStatusPublications]',
})
export class StatusPublicationsDirective implements OnInit, AfterViewInit {
  @Input('appStatusPublications')
  public datePublished?: string;

  private color?: MyThemePalette;

  private SEVEN_DAYS = 7;

  private NUMBER_OF_DAYS_IN_MONTH: number = 30;

  private NUMBER_OF_DAYS_IN_HALF_PAST_YEAR = 183;

  constructor(private element: ElementRef, private rerender2: Renderer2) {}

  /**
   * @description Set the color of the footer in depending of the date of publication podcast
   * @param(string) date of publication
   */
  private setColorBorderBottom(date: string | undefined): void {
    if (!date) {
      this.color = 'bg';
    }

    const datePublished = new Date(date as string);
    const today = new Date();
    const diff = Math.abs(today.getTime() - datePublished.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    if (diffDays <= this.SEVEN_DAYS) {
      this.color = 'fg';
    } else if (diffDays > this.SEVEN_DAYS && diffDays <= this.NUMBER_OF_DAYS_IN_MONTH) {
      this.color = 'warn';
    } else if (
      diffDays > this.NUMBER_OF_DAYS_IN_MONTH &&
      diffDays <= this.NUMBER_OF_DAYS_IN_HALF_PAST_YEAR
    ) {
      this.color = 'primary';
    } else {
      this.color = 'accent';
    }
  }

  ngOnInit() {
    this.setColorBorderBottom(this.datePublished);
  }

  ngAfterViewInit() {
    this.rerender2.setStyle(
      this.element.nativeElement,
      'border-bottom',
      `0.5em solid var(--${this.color})`,
    );
  }
}
