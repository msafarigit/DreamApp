import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DividerComponent } from './divider/divider.component';

import { TimesDirective } from '@shared/directive/times.directive';
import { ClassDirective } from '@shared/directive/class.directive';

import { AgeRangeValidatorDirective } from '@validator/directive/age-range-validator.directive';
import { EmailDomainValidatorDirective } from '@validator/directive/email-domain-validator.directive';
import { PasswordCheckValidatorDirective } from '@validator/directive/password-check-validator.directive';

// Widget feature modules
@NgModule({
  declarations: [
    DividerComponent,
    TimesDirective,
    ClassDirective,
    AgeRangeValidatorDirective,
    EmailDomainValidatorDirective,
    PasswordCheckValidatorDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    DividerComponent,
    TimesDirective,
    ClassDirective,
    AgeRangeValidatorDirective,
    EmailDomainValidatorDirective,
    PasswordCheckValidatorDirective
  ]
})
export class SharedModule { }
