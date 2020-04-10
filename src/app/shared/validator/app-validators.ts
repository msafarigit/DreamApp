import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export class AppValidators {

  static emailDomainValidator(customDomain: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value)
        return null;

      const email = control.value;
      if (email.indexOf('@') === -1)
        return { emailDomain: false };

      const [_, domain] = email.split('@'); // array destructor
      return domain === customDomain ? null : { emailDomain: false };
    }
  }

}
