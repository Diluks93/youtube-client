import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { MaterialModule } from '../../modules/app-material.module';

@NgModule({
  declarations: [ListComponent, InputComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ListComponent, InputComponent],
})
export class FilterModule {}
