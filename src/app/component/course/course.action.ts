import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';

import { IAppState } from './shared/store';
import { CourseService } from './service/course.service';

export const FILTER_COURSES = 'courses/FILTER';
export const SUCCESS_REQUEST_COURSES = 'courses/SUCCESS_REQUEST';

@Injectable()
export class CourseAction {

  constructor(private ngRedux: NgRedux<IAppState>, private courseService: CourseService) { }

  getCourses() {
    this.courseService.getCourses()
      .subscribe(courses => this.ngRedux.dispatch({
        type: SUCCESS_REQUEST_COURSES,
        courses
      }));
  }

  // Action Creators
  filterCourses(searchText: string) {
    this.ngRedux.dispatch({
      type: FILTER_COURSES,
      searchText
    });
  }
}
