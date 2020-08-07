import { Course } from '../../model/course';

export interface IAppState {
  courses: Course[];
  filteredCourses: Course[];
}
