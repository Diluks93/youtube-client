import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { ResultComponent } from './result/result.component';
import { MaterialModule } from 'src/app/modules/app-material.module';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { MySlicePipe } from 'src/app/pipes/my-slice.pipe';
import { StatusPublicationsDirective } from 'src/app/directives/status-publications.directive';

@NgModule({
  declarations: [
    CardComponent,
    ResultComponent,
    FilterPipe,
    MySlicePipe,
    StatusPublicationsDirective,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [ResultComponent],
})
export class ResultModule {}
