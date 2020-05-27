import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  callStack: Array<string>;

  constructor() {
    this.callStack = new Array<string>();
    this.callStack.push('constructor');

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
*/
