import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { ageRangeValidator, ageCustomRangeValidator } from '@shared/validator/age-range-validator';
import { AppValidators } from '@shared/validator/app-validators';

@Component({
  selector: 'app-model-driven-validator',
  templateUrl: './model-driven-validator.component.html',
  styleUrls: ['./model-driven-validator.component.scss']
})
export class ModelDrivenValidatorComponent implements OnInit {

  validationForm: FormGroup;

  @ViewChild('form', { static: true }) form: NgForm;

  constructor(private fb: FormBuilder) {
    this.validationForm = this.fb.group({
      age: new FormControl('', [Validators.required, ageRangeValidator]),
      customAge: new FormControl('20', ageCustomRangeValidator(20, 30)),
      email: new FormControl('', [Validators.required, Validators.email, AppValidators.emailDomainValidator('gmail.com')])
    });
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
