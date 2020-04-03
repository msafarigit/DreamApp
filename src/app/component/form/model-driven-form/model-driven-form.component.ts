import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

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

  constructor(fb: FormBuilder) {
    // this.firstName = new FormControl('Mahdi');
    this.signupForm = fb.group({
      firstName: new FormControl('Mahdi', Validators.compose([Validators.required, Validators.minLength(3)])),
      lastName: new FormControl('Safari', Validators.required),
      // subject: new FormControl(this.subjects[0])
      subject: new FormControl({ value: '', disabled: true }, { validators: Validators.required, asyncValidators: [] })
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
constructor(formState: any = null, validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[], asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[])
const control = new FormControl('', { updateOn: 'blur' });

const control = new FormControl('Nancy');
console.log(control.value); // 'Nancy'
console.log(control.status); // 'VALID'

control.reset({ value: 'Drew', disabled: true });
console.log(control.value); // 'Drew'
console.log(control.status); // 'DISABLED'

Abstract Control States: pristine, dirty, touched, untouched, invalid, valid.
Abstract Control Form States: pristine, dirty, invalid, valid, submitted.

Abstract Control status: string	Read-Only
 The validation status of the control. There are four possible validation status values:
  -VALID: This control has passed all validation checks.
  -INVALID: This control has failed at least one validation check.
  -PENDING: This control is in the midst of conducting a validation check.
  -DISABLED: This control is exempt from validation checks.
These status values are mutually exclusive, so a control cannot be both valid AND invalid or invalid AND disabled.

FormGroup: Manages the value and validity state of a group of AbstractControl instances.
           The group's properties include its child controls.
           The top-level form in your component is FormGroup.

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
FormControl: Manages the value and validity status of an individual form control.
             It corresponds to an HTML form control such as <input> or <select>.

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

const control = new FormControl('', { updateOn: 'blur' });

const control = new FormControl('Nancy');
console.log(control.value); // 'Nancy'
console.log(control.status); // 'VALID'

control.reset({ value: 'Drew', disabled: true });
console.log(control.value); // 'Drew'
console.log(control.status); // 'DISABLED'

status: string	Read-Only
 The validation status of the control. There are four possible validation status values:
  -VALID: This control has passed all validation checks.
  -INVALID: This control has failed at least one validation check.
  -PENDING: This control is in the midst of conducting a validation check.
  -DISABLED: This control is exempt from validation checks.
These status values are mutually exclusive, so a control cannot be both valid AND invalid or invalid AND disabled.
*/

/*
Reactive form validation
In a reactive form, the source of truth is the component class. Instead of adding validators through attributes in the template,
 you add validator functions directly to the form control model in the component class.
 Angular then calls these functions whenever the value of the control changes.

There are two types of validator functions: sync validators and async validators.
  1-Sync validators: functions that take a control instance and immediately return either a set of validation errors or null.
   You can pass these in as the second argument when you instantiate a FormControl.

  2-Async validators: functions that take a control instance and return a Promise or Observable that later emits a set of validation errors or null.
   You can pass these in as the third argument when you instantiate a FormControl.

Note: for performance reasons, Angular only runs async validators if all sync validators pass. Each must complete before errors are set.

ngOnInit(): void {
  this.heroForm = new FormGroup({
    'name': new FormControl(this.hero.name, [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    ]),
    'alterEgo': new FormControl(this.hero.alterEgo),
    'power': new FormControl(this.hero.power, Validators.required)
  });
}

get name() { return this.heroForm.get('name'); }
get power() { return this.heroForm.get('power'); }

<input id="name" class="form-control" formControlName="name" required />

<div *ngIf="name.invalid && (name.dirty || name.touched)" class="alert alert-danger">

  <div *ngIf="name.errors.required">
    Name is required.
  </div>
  <div *ngIf="name.errors.minlength">
    Name must be at least 4 characters long.
  </div>
  <div *ngIf="name.errors.forbiddenName">
    Name cannot be Bob.
  </div>

</div>

The required attribute is still present. While it's not necessary for validation purposes,
 you may want to keep it in your template for CSS styling or accessibility reasons.a

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

The function is actually a factory that takes a regular expression to detect a specific forbidden name and returns a validator function.
The forbiddenNameValidator factory returns the configured validator function.
That function takes an Angular control object and returns either null if the control value is valid or a validation error object.
The validation error object typically has a property whose name is the validation key, 'forbiddenName',
 and whose value is an arbitrary dictionary of values that you could insert into an error message, {name}.
*/
