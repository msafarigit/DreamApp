import { NgModule, SkipSelf, Optional, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '@shared/service/auth.service';

import { DividerComponent } from './divider/divider.component';

import { TimesDirective } from '@shared/directive/times.directive';
import { ClassDirective } from '@shared/directive/class.directive';
import { HighlightDirective } from '@shared/directive/highlight.directive';

import { AgeRangeValidatorDirective } from '@validator/directive/age-range-validator.directive';
import { EmailDomainValidatorDirective } from '@validator/directive/email-domain-validator.directive';
import { PasswordCheckValidatorDirective } from '@validator/directive/password-check-validator.directive';
import { LoginAsyncValidatorDirective } from '@validator/directive/login-async-validator.directive';

// Widget feature modules
@NgModule({
  declarations: [
    DividerComponent,
    TimesDirective,
    ClassDirective,
    HighlightDirective,
    AgeRangeValidatorDirective,
    EmailDomainValidatorDirective,
    PasswordCheckValidatorDirective,
    LoginAsyncValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DividerComponent,
    TimesDirective,
    ClassDirective,
    HighlightDirective,
    AgeRangeValidatorDirective,
    EmailDomainValidatorDirective,
    PasswordCheckValidatorDirective,
    LoginAsyncValidatorDirective
  ]
})
export class SharedModule {
  // when only has services!!
  // constructor (@Optional() @SkipSelf() parentModule?: SharedModule) {
  //   if (parentModule) {
  //     throw new Error('SharedModule is already loaded. Import it in the AppModule only');
  //   }
  // }

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [AuthService],
    };
  }
 }

/*
The forRoot() pattern
Generally, you'll only need providedIn for providing services and forRoot()/forChild() for routing. However, understanding how forRoot()
 works to make sure a service is a singleton will inform your development at a deeper level.

If a module defines both providers and declarations (components, directives, pipes),
 then loading the module in multiple feature modules would duplicate the registration of the service.
 This could result in multiple service instances and the service would no longer behave as a singleton.

There are multiple ways to prevent this:
  1-Use the providedIn syntax instead of registering the service in the module.
  2-Separate your services into their own module.
  3-Define forRoot() and forChild() methods in the module.
*/
