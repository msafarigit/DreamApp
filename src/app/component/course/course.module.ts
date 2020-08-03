import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '@shared/shared.module';

import { InMemoryCourseService } from './service/api/in-memory-course.service';

import { HomeComponent } from '@component/course/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    // isDevMode() ? InMemoryWebApiModule.forRoot(InMemoryCourseService, { delay: 500 }) : undefined,
    InMemoryWebApiModule.forRoot(InMemoryCourseService, { delay: 500 }),
    CourseRoutingModule,
    SharedModule
  ]
})
export class CourseModule { }

/*
 InMemoryWebApiModule.forRoot(InMemoryCourseService, { delay: 500 })
 Register your data store service implementation with the HttpClientInMemoryWebApiModule in your
 root AppModule.imports calling the forRoot static method with this service class and an optional configuration object

Request evaluation order:
  This service can evaluate requests in multiple ways depending upon the configuration. Here's how it reasons:
    1-If it looks like a command, process as a command
    2-If the HTTP method is overridden, try the override.
    3-If the resource name (after the api base path) matches one of the configured collections, process that
    4-If not but the Config.passThruUnknownUrl flag is true, try to pass the request along to a real XHR.
    5-Return a 404.

*/
