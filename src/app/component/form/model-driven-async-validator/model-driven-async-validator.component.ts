import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.validationForm = this.fb.group({
      email: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

}
