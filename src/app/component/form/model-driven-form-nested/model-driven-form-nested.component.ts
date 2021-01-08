import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms'; // PACKAGE

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
    this.services = this.buildServiceFormArray();
  }

  ngOnInit(): void {
    // The top-level form in your component is FormGroup.
    this.packageForm = this.fb.group({
      name: ['', { validators: Validators.required, asyncValidators: [], updateOn: 'blur' }],
      serviceInfo: this.fb.group({
        deliverDate: '',
        services: this.services
      })
    });
  }

  buildServiceFormArray(): FormArray {
    const serviceFormControls: Array<FormControl> = this.serviceList.map((service, index, serviceList) => this.fb.control(service.selected));

    return this.fb.array(serviceFormControls);
  }

  onSubmit() {
    const formVal = Object.assign(new Object(), this.packageForm.value, {
      selected: this.getSelectedServices()
    });
    alert(JSON.stringify(formVal));
  }

  getSelectedServices(): any[] {
    return this.packageForm.value
      .serviceInfo.services.map((selected, index) => selected && this.serviceList[index])
      .filter(service => service);
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

/*
 interface AbstractControlOptions {
    -- @description
    -- The list of validators applied to a control.
    validators?: ValidatorFn | ValidatorFn[] | null;

    -- @description
    -- The list of async validators applied to control.
    asyncValidators ?: AsyncValidatorFn | AsyncValidatorFn[] | null;

    -- @description
    -- The event name for control to update upon.
    updateOn ?: 'change' | 'blur' | 'submit';
 }
*/
