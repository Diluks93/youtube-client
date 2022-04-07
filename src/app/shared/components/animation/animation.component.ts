import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

import { slideInAnimation } from './animation';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [slideInAnimation],
})
export class AnimationComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  public getAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
