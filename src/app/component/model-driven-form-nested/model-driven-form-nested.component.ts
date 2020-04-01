import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms'; // PACKAGE

@Component({
  selector: 'app-model-driven-form-nested',
  templateUrl: './model-driven-form-nested.component.html',
  styleUrls: ['./model-driven-form-nested.component.scss']
})
export class ModelDrivenFormNestedComponent implements OnInit {

  packageForm: FormGroup;
  services: FormArray;
  serviceList: Array<any> = [
    { name: 'ADSL', code: 'ADSL', selected: false },
    { name: 'Cable Broad Band', code: 'CBL', selected: false },
    { name: 'Foxtel TV', code: 'FOXTEL', selected: true },
    { name: 'Home Wireless', code: 'HWL', selected: true },
    { name: '4G Network', code: '4G', selected: false }
  ];

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(): void {
  }

}

/*
FormBuilder: CLASS
group(): Construct a new FormGroup instance.
group(controlsConfig: { [key: string]: any; }, options: AbstractControlOptions | { [key: string]: any; } = null): FormGroup

control(): Construct a new FormControl with the given state, validators and options.
control(formState: any, validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[], asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]): FormControl
this.control = fb.control({value: 'my val', disabled: true});

array(): Constructs a new FormArray from the given array of configurations, validators and options.
array(controlsConfig: any[], validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[], asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]): FormArray
*/
