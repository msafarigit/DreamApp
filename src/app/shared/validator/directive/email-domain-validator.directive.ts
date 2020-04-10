import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appEmailDomainValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailDomainValidatorDirective, multi: true }]
})
export class EmailDomainValidatorDirective implements Validator {

  @Input('appEmailDomainValidator') domainName: string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if (!control.value || !this.domainName)
      return null;
    if (control.value.indexOf('@') === -1)
      return { emailDomain: control.value };

    const [_, domain] = control.value.split('@');
    return domain === this.domainName ? null : { emailDomain: control.value }
  }


}
