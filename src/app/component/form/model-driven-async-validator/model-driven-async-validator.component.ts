import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { AuthService } from '@shared/service/auth.service';

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

  constructor(private fb: FormBuilder, authService: AuthService) {
    this.validationForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

}
