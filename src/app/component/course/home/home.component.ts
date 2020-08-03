import { Component, OnInit } from '@angular/core';

import { CourseService } from '../service/course.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses: Course[];
  filteredCourses: Course[];

  constructor(private courseService: CourseService) {
    this.filteredCourses = this.courses;
  }

  getCourses() {
    this.courseService.getCourses()
      .subscribe(courses => {
        this.courses = this.filteredCourses = courses;
      });
  }

  ngOnInit(): void {
    this.getCourses();
  }

}
