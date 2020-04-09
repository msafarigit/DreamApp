import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerComponent } from './divider/divider.component';
import { AgeRangeValidatorDirective } from './directive/age-range-validator.directive';

// Widget feature modules
@NgModule({
  declarations: [
    DividerComponent,
    AgeRangeValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DividerComponent,
    AgeRangeValidatorDirective
  ]
})
export class SharedModule { }
