import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { ResultComponent } from './result/result.component';
import { MaterialModule } from 'src/app/modules/app-material.module';

@NgModule({
  declarations: [CardComponent, ResultComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ResultComponent],
})
export class ResultModule {}
