import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DividerComponent } from './divider/divider.component';

import { TimesDirective } from '@shared/directive/times.directive';
import { ClassDirective } from '@shared/directive/class.directive';

import { AgeRangeValidatorDirective } from '@validator/directive/age-range-validator.directive';
import { EmailDomainValidatorDirective } from '@validator/directive/email-domain-validator.directive';

// Widget feature modules
@NgModule({
  declarations: [
    DividerComponent,
    TimesDirective,
    ClassDirective,
    AgeRangeValidatorDirective,
    EmailDomainValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DividerComponent,
    TimesDirective,
    ClassDirective,
    AgeRangeValidatorDirective,
    EmailDomainValidatorDirective
  ]
})
export class SharedModule { }
