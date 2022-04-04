import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedComponent } from './components/shared/shared.component';
import { SharedDirective } from './directives/shared.directive';
import { SharedPipe } from './pipes/shared.pipe';

@NgModule({
  declarations: [SharedComponent, SharedDirective, SharedPipe],
  exports: [
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {}
