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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl(this.path));
  }
}
