import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appAgeRangeValidator]',
  // The following example registers a custom validator directive.
  // Adding the validator to the existing collection of validators requires the multi: true option.
  providers: [{ provide: NG_VALIDATORS, useExisting: AgeRangeValidatorDirective, multi: true }]
})
export class AgeRangeValidatorDirective implements Validator {

  @Input('appAgeRangeValidator') ageModel;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if (!control.value || !this.ageModel)
      {return null;}
    const isValid = control.value >= this.ageModel.min && control.value < this.ageModel.max;
    return isValid ? null : { ageRange: control.value };
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

/*
NG_VALIDATORS CONST:
An InjectionToken for registering additional synchronous validators used with AbstractControls.
const NG_VALIDATORS: InjectionToken<(Function | Validator)[]>;

InjectionToken CLASS:
Creates a token that can be used in a DI Provider.
Use an InjectionToken whenever the type you are injecting is not reified (does not have a runtime representation) such as when injecting an interface, callable type, array or parameterized type.
*/
