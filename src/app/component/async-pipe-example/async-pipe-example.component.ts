import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { AuthService } from '@shared/service/auth.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe-example.component.html'
})
export class AsyncPipeExampleComponent implements OnDestroy {

  promise: Promise<{}>;
  observable$: Observable<number>;
  subscription: Subscription = null;
  observableData: number;

  constructor(private authservice: AuthService) {
    this.promise = this.getPromise();
    this.observable$ = this.getObservable();
    this.subscribeObservable();
  }

  getObservable(): Observable<number> {
    return interval(1000).pipe(take(10), map(v => v * v));
  }

  // AsyncPipe subscribes to the observable automatically
  subscribeObservable(): void {
    this.subscription = this.getObservable().subscribe(v => this.observableData = v);
  }

  getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise complete!'), 3000);
    });
  }

  // AsyncPipe unsubscribes from the observable automatically
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

/*
 The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted.
 When a new value is emitted, the async pipe marks the component to be checked for changes.
 When the component gets destroyed, the async pipe unsubscribes automatically to avoid potential memory leaks.
 */
