/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild } from '@angular/core';

import { ChildComponent } from '@component/lifecycle/child/child.component';
import { PERSONS, Person } from '@model/Person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // from session 4
  @ViewChild('lifecycleChild', { static: true })
  private lifecycleChild: ChildComponent;

  callStack: Array<string>;
  selectedPerson: Person;
  master: string;

  constructor() {
    this.callStack = new Array<string>();
    this.callStack.push('constructor');

    this.selectedPerson = PERSONS[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.callStack.push('ngOnChanges: When an input/output binding value changes.');
  }

  ngOnInit(): void {
    this.callStack.push('ngOnInit: Called once, After the first ngOnChanges.');
  }

  ngDoCheck(): void {
    this.callStack.push('ngDoCheck: Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.');
  }

  ngAfterContentInit(): void {
    this.callStack.push('ngAfterContentInit: Called once after the first ngDoCheck().');
  }

  ngAfterContentChecked(): void {
    this.callStack.push('ngAfterContentChecked: Called after ngAfterContentInit() and every subsequent ngDoCheck().');
  }

  ngAfterViewInit(): void {
    this.callStack.push('ngAfterViewInit: Called once after the first ngAfterContentChecked().');
  }

  ngAfterViewChecked(): void {
    this.callStack.push('ngAfterViewChecked: Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy'); // change route
  }
}

/*
 Initializing a component or directive:
 Use the ngOnInit() method to perform the following initialization tasks:
  1- Perform complex initializations outside of the constructor. Components should be cheap and safe to construct.
   You should not, for example, fetch data in a component constructor.
   You shouldn't worry that a new component will try to contact a remote server when created under test or before you decide to display it.
   An ngOnInit() is a good place for a component to fetch its initial data. For an example, see the Tour of Heroes tutorial.

   url:http://misko.hevery.com/code-reviewers-guide/flaw-constructor-does-real-work/
   In Flaw: Constructor does Real Work, Misko Hevery, Angular team lead, explains why you should avoid complex constructor logic.

  2- Set up the component after Angular sets the input properties. Constructors should do no more than set the initial local variables to simple values.
   Keep in mind that a directive's data-bound input properties are not set until after construction.
   If you need to initialize the directive based on those properties, set them when ngOnInit() runs.
   The ngOnChanges() method is your first opportunity to access those properties.
   Angular calls ngOnChanges() before ngOnInit(), but also many times after that. It only calls ngOnInit() once.
*/

/*
 ngOnChanges(): Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.
                Called before ngOnInit() and whenever one or more data-bound input properties change.

 ngOnInit(): Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.
             Called once, after the first ngOnChanges().

 ngDoCheck(): Detect and act upon changes that Angular can't or won't detect on its own.
              Called during every change detection run, immediately after ngOnChanges() and ngOnInit().

 ngAfterContentInit(): Respond after Angular projects external content into the component's view / the view that a directive is in.
                       Called once after the first ngDoCheck().

 ngAfterContentChecked(): Respond after Angular checks the content projected into the directive/component.
                          Called after the ngAfterContentInit() and every subsequent ngDoCheck().

 ngAfterViewInit(): Respond after Angular initializes the component's views and child views / the view that a directive is in.
                    Called once after the first ngAfterContentChecked().

 ngAfterViewChecked(): Respond after Angular checks the component's views and child views / the view that a directive is in.
                       Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().

 ngOnDestroy(): Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
                Called just before Angular destroys the directive/component.
*/
