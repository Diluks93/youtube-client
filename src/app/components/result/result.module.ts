import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

import { CardComponent } from './card/card.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [CardComponent, ResultComponent],
  imports: [CommonModule, MatIconModule, MatCardModule, MatProgressBarModule, MatButtonModule],
  exports: [CardComponent, ResultComponent],
})
export class ResultModule {}
