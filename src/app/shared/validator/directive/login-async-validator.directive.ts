import { Directive, forwardRef, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors, AsyncValidator } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { AuthService } from '@shared/service/auth.service';

@Directive({
  selector: '[appLoginAsyncValidator][formControlName], [appLoginAsyncValidator][ngModel]',
  // The following example registers a custom validator directive.
  // Adding the validator to the existing collection of validators requires the multi: true option.
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => LoginAsyncValidatorDirective),
      multi: true
    }
  ]
})
export class LoginAsyncValidatorDirective implements AsyncValidator {

  @Input() time = 500;

  constructor(private authService: AuthService) { }

  /*
  That function takes an Angular control object and returns either null if the control value is valid or a validation error object.
  The validation error object typically has a property whose name is the validation key, 'ageRange',
   and whose value is an arbitrary dictionary of values that you could insert into an error message, {name}.
  */
  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return timer(this.time).pipe(
      switchMap(() => this.authService.checkLogin(control.value)),
      map(res => res.isLoginAvailable ? null : { loginExist: true })
    );
  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}

/*
NG_ASYNC_VALIDATORS: An InjectionToken for registering additional asynchronous validators used with AbstractControls.
const NG_ASYNC_VALIDATORS: InjectionToken<(Function | Validator)[]>;

InjectionToken CLASS:
Creates a token that can be used in a DI Provider.
Use an InjectionToken whenever the type you are injecting is not reified (does not have a runtime representation) such as when injecting an interface, callable type, array or parameterized type.
*/

/*
forwardRef FUNCTION:
Allows to refer to references which are not yet defined.
For instance, forwardRef is used when the token which we need to refer to for the purposes of DI is declared, but not yet defined.
It is also used when the token which we use when creating a query is not yet defined.

ECMASCRIPT2015 classes are not hoisted to the top, so at this point (inside the metadata definition), the class is not yet defined.
*/
