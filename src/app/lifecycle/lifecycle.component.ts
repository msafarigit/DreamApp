import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Person, PERSONS } from '../model/Person';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  callStack: Array<string>;
  persons: Person[] = [];
  selectedPerson: Person = null;
  master = '';

  constructor() {
    this.callStack = new Array<string>();
    this.callStack.push('constructor');

    this.persons = PERSONS;
    this.selectedPerson = this.persons[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.callStack.push('ngOnChanges');
  }

  ngOnInit() {
    this.callStack.push('ngOnInit');
  }

  ngDoCheck(): void {
    this.callStack.push('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.callStack.push('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.callStack.push('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.callStack.push('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.callStack.push('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy'); // change route
  }

}

// tslint:disable-next-line: max-line-length
// After creating a component/directive by calling its constructor, Angular calls the lifecycle hook methods in the following sequence at specific moments:

// ngOnChanges(): Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.
//                Called before ngOnInit() and whenever one or more data-bound input properties change.

// ngOnInit(): Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.
//             Called once, after the first ngOnChanges().

// ngDoCheck(): Detect and act upon changes that Angular can't or won't detect on its own.
//              Called during every change detection run, immediately after ngOnChanges() and ngOnInit().

// ngAfterContentInit(): Respond after Angular projects external content into the component's view / the view that a directive is in.
//                       Called once after the first ngDoCheck().

// ngAfterContentChecked(): Respond after Angular checks the content projected into the directive/component.
//                          Called after the ngAfterContentInit() and every subsequent ngDoCheck().

// ngAfterViewInit(): Respond after Angular initializes the component's views and child views / the view that a directive is in.
//                    Called once after the first ngAfterContentChecked().

// ngAfterViewChecked(): Respond after Angular checks the component's views and child views / the view that a directive is in.
//                       Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().

// ngOnDestroy(): Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
//                Called just before Angular destroys the directive/component.