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

/*
Cross-field validation
A cross-field validator is a custom validator that compares the values of different fields in a form and accepts or rejects them in combination.
For example, you might have a form that offers mutually incompatible options, so that if the user can choose A or B, but not both.
Some field values might also depend on others; a user might be allowed to choose B only if A is also chosen.

The following cross validation examples show how to do the following:
- Validate reactive or template-based form input based on the values of two sibling controls,
- Show a descriptive error message after the user interacted with the form and the validation failed.
*/
