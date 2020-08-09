import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '@shared/shared.module';

import { InMemoryCourseService } from './service/api/in-memory-course.service';

import { HomeComponent } from '@component/course/home/home.component';
import { CourseService } from './service/course.service';
import { CourseAction } from './course.action';
import { store, IAppState } from './shared/store';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    // isDevMode() ? InMemoryWebApiModule.forRoot(InMemoryCourseService, { delay: 500 }) : undefined,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryCourseService, { delay: 500 }),
    CourseRoutingModule,
    SharedModule,
    NgReduxModule
  ],
  providers: [InMemoryCourseService, CourseService, CourseAction]
})
export class CourseModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}

/*
 InMemoryWebApiModule.forRoot(InMemoryCourseService, { delay: 500 })
 Register your data store service implementation with the InMemoryWebApiModule in your
 root AppModule.imports calling the forRoot static method with this service class and an optional configuration object

Request evaluation order:
  This service can evaluate requests in multiple ways depending upon the configuration. Here's how it reasons:
    1-If it looks like a command, process as a command
    2-If the HTTP method is overridden, try the override.
    3-If the resource name (after the api base path) matches one of the configured collections, process that
    4-If not but the Config.passThruUnknownUrl flag is true, try to pass the request along to a real XHR.
    5-Return a 404.

*/

/*
 What is @angular-redux?
  Our approach helps you by bridging the gap with some of Angular's advanced features, including:
    - Change processing with RxJS observables.
    - Compile time optimizations with NgModule and Ahead-of-Time compilation.
    - Integration with the Angular change detector.

 Import the NgReduxModule class and add it to your application module as an import.
 Once you've done this, you'll be able to inject NgRedux into your Angular components. In your top-level app module,
 you can configure your Redux store with reducers, initial state, and optionally middlewares and enhancers as you would in Redux directly.

In-Depth Usage:
 @angular-redux/store uses an approach to redux based on RxJS Observables to select and transform data on its way out of the store
 and into your UI or side-effect handlers. Observables are an efficient analogue to reselect for the RxJS-heavy Angular world.
*/
