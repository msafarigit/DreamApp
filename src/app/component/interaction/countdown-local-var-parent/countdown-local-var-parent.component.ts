import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-local-var-parent',
  template: `
    <h3>Countdown to end of this class!</h3>
    <button type="button" class="btn btn-primary" (click)="timer.start()">Start</button>
    <button type="button" class="btn btn-danger" (click)="timer.pause()">Pause</button>
    <div class="seconds">{{timer.seconds}}</div>
    <app-countdown-timer #timer></app-countdown-timer>
  `,
  styleUrls: ['./countdown-local-var-parent.component.scss']
})
export class CountdownLocalVarParentComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
