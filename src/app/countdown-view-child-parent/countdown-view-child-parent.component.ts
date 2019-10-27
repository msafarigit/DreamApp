import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-vc',
  template: `
    <h3>Countdown to Liftoff (via ViewChild)</h3>
    <button type="button" class="btn btn-success" (click)="start()">Start</button>
    <button type="button" class="btn btn-danger" (click)="pause()">Pause</button>
    <div class="seconds">{{seconds()}}</div>
    <!-- <app-countdown-timer #timer></app-countdown-timer> -->
    <app-countdown-timer></app-countdown-timer>
  `,
  styleUrls: ['./countdown-view-child-parent.component.scss']
})
export class CountdownViewChildParentComponent implements OnInit, AfterViewInit {

  // @ViewChild('timer', { static: false }) // template reference variable
  // private timer: CountdownTimerComponent;

  @ViewChild(CountdownTimerComponent, { static: true })
  private timerComponent: CountdownTimerComponent;

  constructor() { }

  seconds(): number {
    return 0;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    // this.seconds = this.timerComponent.seconds;

    // setTimeout(() => this.seconds = () => this.timer.seconds, 0);
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() {
    // tslint:disable-next-line: no-debugger
    debugger;
    // this.timer.start();
    this.timerComponent.start();
  }

  pause(): void {
    // this.timer.pause();
    this.timerComponent.pause();
  }
}

// ViewChild DECORATOR:
// Property decorator that configures a view query.
// The change detector looks for the first element or the directive matching the selector in the view DOM.
// If the view DOM changes, and a new child matches the selector, the property is updated.

// View queries are set before the ngAfterViewInit callback is called.
// Properties:
// selector - The directive type or the name used for querying.
// read - True to read a different token from the queried elements.
// static - True to resolve query results before change detection runs
//    When static is not provided, uses query results to determine the timing of query resolution.
//    If any query results are inside a nested view (such as *ngIf), the query is resolved after change detection runs.
//    Otherwise, it is resolved before change detection runs.

// The following selectors are supported.
// 1. Any class with the @Component or @Directive decorator
// 2. A template reference variable as a string (e.g. query <my-component #cmp></my-component> with @ViewChild('cmp'))
// 3. Any provider defined in the child component tree of the current component (e.g. @ViewChild(SomeService) someService: SomeService)
// 4. Any provider defined through a string token (e.g. @ViewChild('someToken') someTokenVal: any)
// 5. A TemplateRef (e.g. query <ng-template></ng-template> with @ViewChild(TemplateRef) template;)
