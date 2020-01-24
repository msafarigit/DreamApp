import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.scss']
})
export class ModelDrivenFormComponent {
  subjects = [
    { name: 'Feedback', id: 1 },
    { name: 'Report a bug', id: 2 },
    { name: 'Feature request', id: 3 }
  ];

  // firstName: AbstractControl;
  // signupForm: AbstractControl;
  signupForm: FormGroup;

  constructor() {
    // this.firstName = new FormControl('Mahdi');
    this.signupForm = new FormGroup({
      firstName: new FormControl('Mahdi', Validators.compose([Validators.required, Validators.minLength(3)])),
      lastName: new FormControl('Safari', Validators.required),
      // subject: new FormControl(this.subjects[0])
      subject: new FormControl('', Validators.required)
    });
  }

  get firstName(): any { return this.signupForm.get('firstName'); }

  onSubmit() {
    alert(JSON.stringify(this.signupForm.value));
  }

  // updateFirstName() {
  //   this.firstName.setValue('Ali');
  // }

  reset() {
    // this.firstName.reset();
    this.signupForm.reset();
  }

  check() {
    // this.firstName.markAsTouched({onlySelf: true});
    this.signupForm.markAllAsTouched();
  }

  partialUpdate() {
    this.signupForm.patchValue({ firstName: 'Hamid' });
  }

  fullUpdate() {
    this.signupForm.setValue({ firstName: 'Hasan', lastName: 'Mohammadi', subject: this.subjects[2].id });
  }
}

/*
Reactive Forms:
 provide a model-driven approach to handling form inputs whose values change over time.
 This guide shows you how to create and update a simple form control,
 progress to using multiple controls in a group, validate form values,
 and implement more advanced forms.

 Reactive forms use an explicit and immutable approach to managing the state of a form at a given point in time.
 Each change to the form state returns a new state, which maintains the integrity of the model between changes.
 Reactive forms are built around observable streams,
 where form inputs and values are provided as streams of input values, which can be accessed synchronously.

 Reactive forms differ from template-driven forms in distinct ways.
 Reactive forms provide more predictability with synchronous access to the data model,
 immutability with observable operators, and change tracking through observable streams.
*/

/*
  Step 1: Registering the reactive forms module
  Step 2: The FormControl class is the basic building block when using reactive forms.
   To register a single form control, import the FormControl class into your component and create a new instance
   of the form control to save as a class property.
  Step 3: Registering the control in the template
*/

/*
Reactive forms API:
Listed below are the base classes and services used to create and manage form controls.

1- Classes:
AbstractControl: The abstract base class for the concrete form control classes FormControl, FormGroup, and FormArray.
                 It provides their common behaviors and properties.

FormControl: Manages the value and validity status of an individual form control.
             It corresponds to an HTML form control such as <input> or <select>.

FormGroup: Manages the value and validity state of a group of AbstractControl instances.
           The group's properties include its child controls. The top-level form in your component is FormGroup.

FormArray: Manages the value and validity state of a numerically indexed array of AbstractControl instances.
FormBuilder: An injectable service that provides factory methods for creating control instances.

2- Directives:
  FormControlDirective: Syncs a standalone FormControl instance to a form control element.
  FormControlName: Syncs FormControl in an existing FormGroup instance to a form control element by name.
  FormGroupDirective: Syncs an existing FormGroup instance to a DOM element.
  FormGroupName: Syncs a nested FormGroup instance to a DOM element.
  FormArrayName: Syncs a nested FormArray instance to a DOM element.
*/

/*
constructor(formState: any = null,
  validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[],
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[])

Parameters:
formState:any - Initializes the control with an initial value, or an object that defines the initial value and disabled state.
Optional. Default is null.

validatorOrOpts:ValidatorFn | AbstractControlOptions | ValidatorFn[]
A synchronous validator function, or an array of such functions, or an AbstractControlOptions object that contains validation functions and a validation trigger.
Optional. Default is undefined.

asyncValidator: AsyncValidatorFn | AsyncValidatorFn[]
A single async validator or array of async validator functions Optional. Default is undefined.
*/
