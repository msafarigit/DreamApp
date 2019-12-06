import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/*
Template-driven forms are useful for adding a simple form to an app,
such as an email list signup form. They're easy to add to an app,
but they don't scale as well as reactive forms.
If you have very basic form requirements and logic that can be managed solely in the template, use template-driven forms.

There are two changes:
  1- You import FormsModule.
  2- You add the FormsModule to the list of imports defined in the @NgModule decorator.
     This gives the application access to all of the template-driven forms features, including ngModel.

The table below summarizes the key differences between reactive and template-driven forms.
                          REACTIVE	                             TEMPLATE-DRIVEN
Setup                   (form model)	              More explicit, created in component class	Less explicit, created by directives
Data model	            Structured	                Unstructured
Predictability	        Synchronous	                Asynchronous
Form validation	        Functions	                  Directives
Mutability	            Immutable	                  Mutable
Scalability	            Low-level API access	      Abstraction on top of APIs

Common foundation:
  1-Both reactive and template-driven forms share underlying building blocks.
  2-FormControl tracks the value and validation status of an individual form control.
  3-FormGroup tracks the same values and status for a collection of form controls.
  4-FormArray tracks the same values and status for an array of form controls.
  5-ControlValueAccessor creates a bridge between Angular FormControl instances and native DOM elements.

The abstraction of the form model promotes simplicity over structure.
The template-driven form directive NgModel is responsible for creating and managing the FormControl instance for a given form element.
It's less explicit, but you no longer have direct control over the form model.

The steps below outline the data flow from view to model when the input value changes from Red to Blue.
  1- The user types Blue into the input element.
  2- The input element emits an "input" event with the value Blue.
  3- The control value accessor attached to the input triggers the setValue() method on the FormControl instance.
  4- The FormControl instance emits the new value through the valueChanges observable.
  5- Any subscribers to the valueChanges observable receive the new value.
  6- The control value accessor also calls the NgModel.viewToModelUpdate() method which emits an ngModelChange event.
  7- Because the component template uses two-way data binding for the favoriteColor property, the favoriteColor property in the component is updated to the value emitted by the ngModelChange event (Blue).

The steps below outline the data flow from model to view when the favoriteColor changes from Blue to Red.
  1- The favoriteColor value is updated in the component.
  2- Change detection begins.
  3- During change detection, the ngOnChanges lifecycle hook is called on the NgModel directive instance because the value of one of its inputs has changed.
  4- The ngOnChanges() method queues an async task to set the value for the internal FormControl instance.
  5- Change detection completes.
  6- On the next tick, the task to set the FormControl instance value is executed.
  7- The FormControl instance emits the latest value through the valueChanges observable.
  8- Any subscribers to the valueChanges observable receive the new value.
  9- The control value accessor updates the form input element in the view with the latest favoriteColor value.

Template-driven validation:
  Template-driven forms are tied to template directives, and must provide custom validator directives that wrap validation functions.
To add validation to a template-driven form, you add the same validation attributes as you would with native HTML form validation.
Angular uses directives to match these attributes with validator functions in the framework.
Every time the value of a form control changes, Angular runs validation and generates either a list of validation errors,
which results in an INVALID status, or null, which results in a VALID status.

native HTML form validation: pattern, min, max, required, step, minlength, maxlength

Mutability:
 The change tracking method plays a role in the efficiency of your application.
 Template-driven forms rely on mutability with two-way data binding to update
 the data model in the component as changes are made in the template.
 Because there are no unique changes to track on the data model when using two-way data binding,
 change detection is less efficient at determining when updates are required.

Scalability:
 If forms are a central part of your application, scalability is very important.
 Being able to reuse form models across components is critical.
 Template-driven forms focus on simple scenarios, are not as reusable,
 abstract away the low-level APIs, and provide asynchronous access to the form model.
 The abstraction with template-driven forms also surfaces in testing,
 where testing reactive forms requires less setup and no dependence on the change detection cycle
 when updating and validating the form and data models during testing.
*/
