import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { LifecycleRoutingModule } from './lifecycle-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LifecycleRoutingModule,
    // Then finally, in any feature module we can simply import the shared module without the forRoot and
    // we’ll have access to the shared pipes and directives without providing the service again.
    SharedModule
  ]
})
export class LifecycleModule { }

/*
Hooking into the component lifecycle:
 A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views.
 The lifecycle continues with change detection, as Angular checks to see when data-bound properties change,
 and updates both the view and the component instance as needed.
 The lifecycle ends when Angular destroys the component instance and removes its rendered template from the DOM.
 Directives have a similar lifecycle, as Angular creates, updates, and destroys instances in the course of execution.

lifecycle hook:
An interface that allows you to tap into the lifecycle of directives and components as they are created, updated, and destroyed.
Each interface has a single hook method whose name is the interface name prefixed with ng. For example, the OnInit interface has a hook method named ngOnInit.
After your application instantiates a component or directive by calling its constructor,
Angular calls the hook methods you have implemented at the appropriate point in the lifecycle of that instance.
Angular calls these hook methods in the following order:

  1-ngOnChanges: When an input/output binding value changes.
  2-ngOnInit: Called once, After the first ngOnChanges.
  3-ngDoCheck: Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
               Developer's custom change detection.
  4-ngAfterContentInit: Called once after the first ngDoCheck(). After component content initialized.
  5-ngAfterContentChecked: Called after ngAfterContentInit() and every subsequent ngDoCheck(). After every check of component content.
  6-ngAfterViewInit: Called once after the first ngAfterContentChecked(). After a component's views are initialized.
  7-ngAfterViewChecked: Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
  8-ngOnDestroy: Called immediately before Angular destroys the directive or component. (Just before the directive is destroyed.)
*/
