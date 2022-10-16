import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressComponent } from './utils/progress/progress.component';

@NgModule({
  declarations: [
    ProgressComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule
  ]
})
export class ShareModule { }
