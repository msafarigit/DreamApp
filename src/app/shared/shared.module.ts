import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerComponent } from './divider/divider.component';
import { AgeRangeValidatorDirective } from './directive/age-range-validator.directive';
import { EmailDomainValidatorDirective } from './directive/email-domain-validator.directive';

// Widget feature modules
@NgModule({
  declarations: [
    DividerComponent,
    AgeRangeValidatorDirective,
    EmailDomainValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DividerComponent,
    AgeRangeValidatorDirective,
    EmailDomainValidatorDirective
  ]
})
export class SharedModule { }
