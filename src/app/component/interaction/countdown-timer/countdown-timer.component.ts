import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  template: `
    <p>{{message}}</p>
  `,
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  intervalId: number;
  message = '';
  seconds = 10;

  constructor() { }

  ngOnInit() {
    this.start();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  start() {
    this.countdown();
  }

  pause() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countdown() {
    this.clearTimer();

    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Class is finished! but wait a second :D';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }

        this.message = `T-${this.seconds} seconds remains and all students are waiting to run!`;
      }
    }, 1000);

  }
}
