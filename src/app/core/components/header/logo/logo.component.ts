import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-logo',
  template: ` <mat-icon svgIcon="logo" class="logo"></mat-icon> `,
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  private readonly path = 'assets/youtube-logo.svg';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('logo', this.sanitizer.bypassSecurityTrustResourceUrl(this.path));
  }
}
