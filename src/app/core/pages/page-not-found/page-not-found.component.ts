import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  private height: number = 0;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  private setHeight() {
    const parentNode: ParentNode = this.renderer.parentNode(this.elementRef.nativeElement);
    const windowHigh: number = window.innerHeight;

    this.height = (parentNode.firstChild?.firstChild as Element).clientHeight;
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'height',
      `${windowHigh - this.height}px`,
    );
  }

  ngOnInit(): void {
    this.setHeight();
  }
}
