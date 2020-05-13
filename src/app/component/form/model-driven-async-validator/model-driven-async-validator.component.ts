import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators'

import { AuthService } from '@shared/service/auth.service';
import { AppAsyncValidators } from '@shared/validator/app-async-validators';

@Component({
  selector: 'app-model-driven-async-validator',
  templateUrl: './model-driven-async-validator.component.html',
  styleUrls: ['./model-driven-async-validator.component.scss']
})
export class ModelDrivenAsyncValidatorComponent implements OnInit {

  validationForm: FormGroup;

  @ViewChild('form', { static: true }) form: NgForm;

  get email() {
    return this.validationForm.get('email');
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.validationForm = this.fb.group({
      // email: new FormControl('', [Validators.required, Validators.email], this.validateEmailNotTaken.bind(this))
      email: new FormControl('', [Validators.required, Validators.email], AppAsyncValidators.EmailNotTakenValidator(this.authService))
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

  validateEmailNotTaken(control: AbstractControl) {
     return this.authService.checkEmail(control.value).pipe(map(res => {
       return res ? null : { emailTaken: true };
     }));
  }
}
