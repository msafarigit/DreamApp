import { Component, OnInit } from '@angular/core';
import { timer, Observable, of, from, BehaviorSubject } from 'rxjs';
import { delay, map, mergeMap, mergeAll, switchAll, switchMap, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  regularMapItems: Array<string>;

  mergeAllItems: Array<string>;
  mergeMapItems: Array<string>;

  switchAllItems: Array<string>;
  switchMapItems: Array<string>;
  otherSwitchMapItems: Array<string>;

  concatMapItems: Array<string>;

  constructor() {
    this.regularMapItems = new Array<string>();

    this.mergeAllItems = new Array<string>();
    this.mergeMapItems = new Array<string>();

    this.switchAllItems = new Array<string>();
    this.switchMapItems = new Array<string>();
    this.otherSwitchMapItems = new Array<string>();

    this.concatMapItems = new Array<string>();
  }

  ngOnInit(): void {
    this.regularMap();

    this.mergeAll();
    this.mergeMap();

    this.switchAll();
    this.switchMap();
    this.otherSwitchMap();

    this.concatMap();
  }

  getData(param) {
    const delayTime = Math.floor(Math.random() * 9000) + 1;
    return of(`retrieved with params: ${param} and delay: ${delayTime}`).pipe(delay(delayTime));
  }

  /******************************* mergeMap *******************************/

  // using a regular map
  regularMap(): void {
    from([1, 2, 3, 4]).pipe(
      map(param => this.getData(param))
    ).subscribe(val => val.subscribe(data => this.regularMapItems.push(data)));
  }

  // using map and mergeAll
  // MergeAll takes care of subscribing to the ‘inner’ Observable so that we no longer have to Subscribe two times
  // as mergeAll merges the value of the ‘inner’ Observable into the ‘outer’ Observable.
  mergeAll() {
    from([1, 2, 3, 4]).pipe(
      map(param => this.getData(param)),
      mergeAll()
    ).subscribe(val => this.mergeAllItems.push(val));
  }

  // using mergeMap
  // MergeMap essentially is a combination of mergeAll and map.
  mergeMap() {
    from([1, 2, 3, 4]).pipe(
      mergeMap(param => this.getData(param))
    ).subscribe(val => this.mergeMapItems.push(val));
  }

  /******************************* switchMap *******************************/

  // using map and switchAll
  // SwitchAll complete previous inner observable, emit values and cancels the previous subscription and subscribes to the new one.
  // For our scenario where we want to do an API call for each item in the array of the ‘outer’ Observable,
  // switchMap does not work well as it will cancel the first 3 subscriptions and only deals with the last one.
  // output: switchAll retrieved new data with param 4
  switchAll() {
    from([1, 2, 3, 4]).pipe(
      map(param => this.getData(param)),
      switchAll()
    ).subscribe(val => this.switchAllItems.push(val));
  }

  // using switchMap
  // url: https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap
  // Map to observable, complete previous inner observable, emit values.
  // The main difference between switchMap and other flattening operators is the cancelling effect.
  // On each emission the previous inner observable (the result of the function you supplied) is cancelled and the new observable is subscribed.
  // You can remember this by the phrase switch to a new observable. However switchMap is a combination of switchAll and map.
  // If you would like more than one inner subscription to be maintained, try mergeMap!
  // switchMap(project: function: Observable, resultSelector: function(outerValue, innerValue, outerIndex, innerIndex): any): Observable
  // output: switchMap retrieved new data with param 4
  switchMap() {
    from([1, 2, 3, 4]).pipe(
      switchMap(param => this.getData(param))
    ).subscribe(val => this.switchMapItems.push(val));
  }

  // It would for example come in handy if you compose a list of filters into a data stream and perform an API call when a filter is changed.
  // If the previous filter changes are still being processed while a new change is already made,
  // it will cancel the previous subscription and start a new subscription on the latest change.
  otherSwitchMap() {
    const filters = ['brand=porsche', 'model=911', 'horsepower=389', 'color=red']
    const activeFilters = new BehaviorSubject('');

    const applyFilters = () => {
      filters.forEach((filter, index) => {
        let newFilters = activeFilters.value;
        if (index === 0) {
          newFilters = `?${filter}`
        } else {
          newFilters = `${newFilters}&${filter}`
        }

        activeFilters.next(newFilters)
      })
    }

    // using switchMap
    activeFilters.pipe(
      switchMap(param => this.getData(param))
    ).subscribe(val => this.otherSwitchMapItems.push(val));

    applyFilters();
  }

  /******************************* concatMap *******************************/

  // using concatMap
  // concatMap also subscribes to the inner Observable for you.
  // But unlike switchMap, that unsubscribes from the current Observable if a new Observable comes in,
  // concatMap will not subscribe to the next Observable until the current one completes.
  // The benefit of this is that the order in which the Observables are emitting is maintained.
  concatMap() {
    from([1, 2, 3, 4]).pipe(
      concatMap(param => this.getData(param))
    ).subscribe(val => this.concatMapItems.push(val));
  }
}

/*
 Conclusion:
 map is for mapping ‘normal’ values to whatever format you need it to be.
 The return value will be wrapped in an Observable again, so you can keep using it in your data stream.
 When you have to deal with an ‘inner’ Observable it’s easier to use mergeMap, switchMap or concatMap.
   1- Use mergeMap if you simply want to flatten the data into one Observable,
   2- use switchMap if you need to flatten the data into one Observable but only need the latest value
   3- and use concatMap if you need to flatten the data into one Observable and the order is important to you.
*/
