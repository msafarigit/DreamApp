import { Component, OnInit } from '@angular/core';

import { CourseService } from '../service/course.service';
import { Course } from '../model/course';
import { store } from '../shared/store/store';
import { filterCourses } from '../shared/store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filteredCourses: Course[];

  constructor(private courseService: CourseService) {
    this.filteredCourses = [];
  }

  // before use redux
  // getCourses() {
  //   this.courseService.getCourses()
  //     .subscribe(courses => {
  //       this.courses = this.filteredCourses = courses;
  //     });
  // }

  ngOnInit(): void {
    // before use redux
    // this.getCourses();
    this.updateFromState();

    store.subscribe(() => this.updateFromState());
  }

  updateFromState() {
    const allState = store.getState();
    this.filteredCourses = allState.filteredCourses;
  }

  filter(searchText: string) {
    store.dispatch(filterCourses(searchText));
  }
}
