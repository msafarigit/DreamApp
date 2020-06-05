import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { ageRangeValidator, ageCustomRangeValidator } from '@validator/age-range-validator';
import { AppValidators } from '@validator/app-validators';
import { passwordCheckValidator } from '@validator/password-check-validator';

@Component({
  selector: 'app-model-driven-validator',
  templateUrl: './model-driven-validator.component.html',
  styleUrls: ['./model-driven-validator.component.scss']
})
export class ModelDrivenValidatorComponent implements OnInit {

  validationForm: FormGroup;

  @ViewChild('form', { static: true }) form: NgForm;

  get password() {
    // tslint:disable-next-line: no-string-literal
    return this.validationForm.controls['password'];
  }

  constructor(private fb: FormBuilder) {
    this.validationForm = this.fb.group({
      age: new FormControl('', [Validators.required, ageRangeValidator]),
      customAge: new FormControl('20', ageCustomRangeValidator(20, 30)),
      email: new FormControl('', [Validators.required, Validators.email, AppValidators.emailDomainValidator('gmail.com')]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    }, { validators: passwordCheckValidator }); // Cross-field validation
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

}

/*
https://www.concretepage.com/angular/angular-conditional-validation
handleFormChanges() {
   this.notificationMode.valueChanges.subscribe(
      mode => {
        if (mode==='email') {
           this.email.setValidators([Validators.required, Validators.email]);
           this.mobileNumber.clearValidators();
        } else if (mode === 'mobile') {
           this.mobileNumber.setValidators([Validators.required]);
           this.email.clearValidators();
        } else if (mode==='both') {
          this.email.setValidators([Validators.required, Validators.email]);
          this.mobileNumber.setValidators([Validators.required]);
        }
        this.email.updateValueAndValidity();
        this.mobileNumber.updateValueAndValidity();
      }
   );
}
*/

/*
Cross-field validation
A cross-field validator is a custom validator that compares the values of different fields in a form and accepts or rejects them in combination.
For example, you might have a form that offers mutually incompatible options, so that if the user can choose A or B, but not both.
Some field values might also depend on others; a user might be allowed to choose B only if A is also chosen.

The following cross validation examples show how to do the following:
- Validate reactive or template-based form input based on the values of two sibling controls,
- Show a descriptive error message after the user interacted with the form and the validation failed.
*/
