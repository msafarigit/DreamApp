import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.scss']
})
export class ModelDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
