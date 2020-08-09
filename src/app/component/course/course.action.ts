import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';

import { IAppState } from './shared/store';

export const FILTER_COURSES = 'courses/FILTER';

@Injectable()
export class CourseAction {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  // Action Creators
  filterCourses(searchText: string) {
    this.ngRedux.dispatch({
      type: FILTER_COURSES,
      searchText
    });
  }
}
