import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPasswordCheckValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordCheckValidatorDirective, multi: true }]
})
export class PasswordCheckValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if (!control)
      return null;

    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword)
      return null;
    return password.value === confirmPassword.value ? null : { passwordCheck: true };
  }

}
