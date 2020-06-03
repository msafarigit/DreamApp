import { Component, OnInit } from '@angular/core';
import { Observable, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {

  observable: Observable<number>;

  finalObserver = {
    next(x) {
      console.log('got value ' + x)
    },
    error(err) {
      console.error('something wrong occurred: ' + err);
    },
    complete() {
      console.log('done');
    }
  };

  /*
   The async Scheduler operates with a setTimeout or setInterval, even if the given delay was zero.
   As usual, in JavaScript, setTimeout(fn, 0) is known to run the function fn earliest on the next event loop iteration.
   This explains why got value 1 is delivered to the finalObserver after just after subscribe happened.

   The schedule() method of a Scheduler takes a delay argument, which refers to a quantity of time relative to the Scheduler's own internal clock.
   A Scheduler's clock need not have any relation to the actual wall-clock time.
   This is how temporal operators like delay operate not on actual time, but on time dictated by the Scheduler's clock. This is specially useful in testing,
   where a virtual time Scheduler may be used to fake wall-clock time while in reality executing scheduled tasks synchronously.
  */
  proxyObserver = {
    next: val => {
      asyncScheduler.schedule(
        (x) => this.finalObserver.next(x),
        0 /* delay */,
        val /* will be the x for the function above */
      );
    },
    error: err => {
      asyncScheduler.schedule(
        (x) => this.finalObserver.error(x),
        0 /* delay */,
        err /* will be the x for the function above */
      );
    },
    complete: () => {
      asyncScheduler.schedule(
        (x) => this.finalObserver.complete(),
        0 /* delay */,
        null /* will be the x for the function above */
      );
    }
  }

  constructor() {
    this.observable = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    }).pipe(observeOn(asyncScheduler));
  }

  ngOnInit(): void {
    console.clear();
    console.log('just before subscribe');
    // this.observable.subscribe(this.finalObserver);
    this.observable.subscribe(this.proxyObserver);
    console.log('just after subscribe');
  }

}

/*
Scheduler (url: https://rxjs-dev.firebaseapp.com/guide/scheduler https://rxjs.dev/api/index/const/asyncScheduler)
What is a Scheduler? A scheduler controls when a subscription starts and when notifications are delivered. It consists of three components.
  1- A Scheduler is a data structure. It knows how to store and queue tasks based on priority or other criteria.
  2- A Scheduler is an execution context. It denotes where and when the task is executed (e.g. immediately, or in another callback mechanism such as setTimeout or process.nextTick, or the animation frame).
  3- A Scheduler has a (virtual) clock. It provides a notion of "time" by a getter method now() on the scheduler. Tasks being scheduled on a particular scheduler will adhere only to the time denoted by that clock.

A Scheduler lets you define in what execution context will an Observable deliver notifications to its Observer.
In the example below, we take the usual simple Observable that emits values 1, 2, 3 synchronously, and use the operator observeOn to specify the async scheduler to use for delivering those values.
*/

/*
Scheduler Types
The async Scheduler is one of the built-in schedulers provided by RxJS. Each of these can be created and returned by using static properties of the Scheduler object.

SCHEDULER	               PURPOSE
null	                   By not passing any scheduler, notifications are delivered synchronously and recursively. Use this for constant-time operations or tail recursive operations.
queueScheduler	         Schedules on a queue in the current event frame (trampoline scheduler). Use this for iteration operations.
asapScheduler	           Schedules on the micro task queue, which is the same queue used for promises. Basically after the current job, but before the next job. Use this for asynchronous conversions.
asyncScheduler	         Schedules work with setInterval. Use this for time-based operations.
animationFrameScheduler	 Schedules task that will happen just before next browser content repaint. Can be used to create smooth browser animations.
*/

/*
Using Schedulers
You may have already used schedulers in your RxJS code without explicitly stating the type of schedulers to be used.
This is because all Observable operators that deal with concurrency have optional schedulers.
If you do not provide the scheduler, RxJS will pick a default scheduler by using the principle of least concurrency.
This means that the scheduler which introduces the least amount of concurrency that satisfies the needs of the operator is chosen.
For example, for operators returning an observable with a finite and small number of messages, RxJS uses no Scheduler, i.e. null or undefined.
For operators returning a potentially large or infinite number of messages, queue Scheduler is used. For operators which use timers, async is used.

Because RxJS uses the least concurrency scheduler, you can pick a different scheduler if you want to introduce concurrency for performance purpose.
To specify a particular scheduler, you can use those operator methods that take a scheduler, e.g., from([10, 20, 30], asyncScheduler).

Static creation operators usually take a Scheduler as argument.
For instance, from(array, scheduler) lets you specify the Scheduler to use when delivering each notification converted from the array.
 It is usually the last argument to the operator. The following static creation operators take a Scheduler argument:
    - bindCallback
    - bindNodeCallback
    - combineLatest
    - concat
    - empty
    - from
    - fromPromise
    - interval
    - merge
    - of
    - range
    - throw
    - timer

 Use subscribeOn to schedule in what context will the subscribe() call happen.
 By default, a subscribe() call on an Observable will happen synchronously and immediately.
 However, you may delay or schedule the actual subscription to happen on a given Scheduler, using the instance operator subscribeOn(scheduler),
 where scheduler is an argument you provide.
*/
