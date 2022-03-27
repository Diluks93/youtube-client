import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [TabsComponent, InputComponent],
  imports: [CommonModule],
  exports: [TabsComponent, InputComponent],
})
export class FilterModule {}
