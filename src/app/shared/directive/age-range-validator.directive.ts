import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appAgeRangeValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AgeRangeValidatorDirective, multi: true }]
})
export class AgeRangeValidatorDirective implements Validator {

  @Input('appAgeRangeValidator') ageModel;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if (!control.value || !this.ageModel)
      return null;
    const isValid = control.value >= this.ageModel.min && control.value < this.ageModel.max;
    return isValid ? null : { ageRange: control.value }
  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}

/*
Adding to template-driven forms:
In template-driven forms, you don't have direct access to the FormControl instance,
so you can't pass the validator in like you can for reactive forms. Instead, you need to add a directive to the template.

Angular recognizes the directive's role in the validation process because the directive registers itself with the NG_VALIDATORS provider,
 a provider with an extensible collection of validators.

The directive class then implements the Validator interface, so that it can easily integrate with Angular forms.
*/
