import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-validator',
  templateUrl: './template-driven-validator.component.html',
  styleUrls: ['./template-driven-validator.component.scss']
})
export class TemplateDrivenValidatorComponent implements OnInit {

  age: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    console.log(event);
  }

}

/*
https://www.concretepage.com/angular/angular-conditional-validation
handleFormChanges() {
   this.notificationMode.valueChanges.subscribe(mode => {
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
