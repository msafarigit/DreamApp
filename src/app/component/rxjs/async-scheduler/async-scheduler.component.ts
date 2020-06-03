import { Component, OnInit } from '@angular/core';
import { asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-async-scheduler',
  templateUrl: './async-scheduler.component.html',
  styleUrls: ['./async-scheduler.component.scss']
})
export class AsyncSchedulerComponent implements OnInit {

  constructor() {
    this.asyncSchedule();
  }

  ngOnInit(): void {
    function task(state) {
      console.log(state);
      // `this` references currently executing Action,
      // which we reschedule with new state and delay
      this.schedule(state + 1, 1000);
    }

    // asyncScheduler.schedule(task, delay, will be the passed argument for the task);
    asyncScheduler.schedule(task, 3000, 0);

    // Logs:
    // 0 after 3s
    // 1 after 4s
    // 2 after 5s
    // 3 after 6s
  }

  asyncSchedule() {
    const task = () => console.log('it works!');
    asyncScheduler.schedule(task, 2000);

    // After 2 seconds logs:
    // "it works!"
  }
}

/*
Async Scheduler:
const async: any;

Schedule task as if you used setTimeout(task, duration);
async scheduler schedules tasks asynchronously, by putting them on the JavaScript event loop queue.
It is best used to delay tasks in time or to schedule tasks repeating in intervals.

If you just want to "defer" task, that is to perform it right after currently executing synchronous code ends
 (commonly achieved by setTimeout(deferredTask, 0)), better choice will be the asap scheduler.
*/
