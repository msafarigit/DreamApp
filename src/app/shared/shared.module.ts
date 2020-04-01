import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerComponent } from './divider/divider.component';

// Widget feature modules
@NgModule({
  declarations: [DividerComponent],
  imports: [
    CommonModule
  ],
  exports:[DividerComponent]
})
export class SharedModule { }