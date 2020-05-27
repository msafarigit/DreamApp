import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CountdownTimerComponent } from '@component/interaction/countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-querylist',
  template: `
    <h3>Countdown to Liftoff (via ViewChildren)</h3>
    <button type="button" class="btn btn-success" (click)="start()">Start</button>
    <button type="button" class="btn btn-danger" (click)="pause()">Pause</button>
    <div class="seconds">{{seconds()}}</div>
    <div class="seconds">{{seconds2()}}</div>
    <app-countdown-timer></app-countdown-timer>
    <app-countdown-timer></app-countdown-timer>
  `,
  styleUrls: ['./countdown-querylist-parent.component.scss']
})
export class CountdownQuerylistParentComponent implements AfterViewInit {

  @ViewChildren(CountdownTimerComponent)
  private timerComponents: QueryList<CountdownTimerComponent>;

  constructor() { }

  seconds(): number {
    return 0;
  }

  seconds2(): number {
    return 0;
  }

  ngAfterViewInit(): void {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    // this.seconds = this.timerComponent.seconds;

    setTimeout(() => {
      this.seconds = () => this.timerComponents.first.seconds;
      this.seconds2 = () => this.timerComponents.last.seconds;
    }, 0);
  }

  start(): void {
    this.timerComponents.forEach(timer => timer.start());
  }

  pause(): void {
    this.timerComponents.forEach(timer => timer.pause());
  }

}
