import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgRedux, select } from '@angular-redux/store';

import { CourseAction } from '../course.action';
import { Course } from '../model/course';
import { IAppState } from '../shared/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // 2-before use NgRedux
  // filteredCourses: Course[];
  // constructor(private courseService: CourseService) {
  //   this.filteredCourses = [];
  // }

  @select('filteredCourses') filteredCourses$: Observable<Course[]>;

  constructor(private ngRedux: NgRedux<IAppState>, private courseAction: CourseAction) { }

  // 1-before use redux
  // getCourses() {
  //   this.courseService.getCourses()
  //      .subscribe(courses => {
  //        this.courses = this.filteredCourses = courses;
  //      });
  // }

  ngOnInit(): void {
    // 1-before use redux
    // this.getCourses();

    // 2-before use NgRedux
    // this.updateFromState();
    // store.subscribe(() => this.updateFromState());

    this.courseAction.getCourses();
  }

  // 2-before use NgRedux
  // updateFromState() {
  //   const allState = store.getState();
  //   this.filteredCourses = allState.filteredCourses;
  // }

  filter(searchText: string) {
    // store.dispatch(filterCourses(searchText));
    this.courseAction.filterCourses(searchText);
  }
}

/*
Use the @select decorator to access your store state, and .dispatch() to dispatch actions
*/


