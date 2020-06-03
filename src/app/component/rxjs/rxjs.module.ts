import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { SharedModule } from '@shared/shared.module';

import { MapComponent } from '@component/rxjs/map/map.component';
import { SchedulerComponent } from '@component/rxjs/scheduler/scheduler.component';
import { AsyncSchedulerComponent } from '@component/rxjs/async-scheduler/async-scheduler.component';

@NgModule({
  declarations: [
    MapComponent,
    SchedulerComponent,
    AsyncSchedulerComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    SharedModule
  ]
})
export class RxjsModule { }

/*
RxJS: Reactive Extensions Library for JavaScript
from: FUNCTION
 Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.
 from<T>(input: any, scheduler?: SchedulerLike): Observable<T>
 from converts various other objects and data types into Observables. It also converts a Promise,
 an array-like, or an iterable object into an Observable that emits the items in that promise, array, or iterable.
 A String, in this context, is treated as an array of characters.
 Observable-like objects (contains a function named with the ES2015 Symbol for Observable) can also be converted through this operator.
*/
