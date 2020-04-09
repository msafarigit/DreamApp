import { Directive } from '@angular/core';

@Directive({
  selector: '[appAgeRangeValidator]'
})
export class AgeRangeValidatorDirective {

  constructor() { }

}

/*
Adding to template-driven forms:
In template-driven forms, you don't have direct access to the FormControl instance,
so you can't pass the validator in like you can for reactive forms. Instead, you need to add a directive to the template.
*/
