import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultComponent } from './result.component';
import { MaterialModule } from 'src/app/modules/app-material.module';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { MySlicePipe } from 'src/app/pipes/my-slice.pipe';
import { StatusPublicationsDirective } from 'src/app/directives/status-publications.directive';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';

@NgModule({
  declarations: [
    ResultComponent,
    FilterPipe,
    MySlicePipe,
    StatusPublicationsDirective,
    OrderByPipe,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [ResultComponent],
})
export class ResultModule {}
