import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { ageRangeValidator, ageCustomRangeValidator } from '@shared/validator/age-range-validator';

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
      age: new FormControl('', [Validators.required, ageRangeValidator])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

}
