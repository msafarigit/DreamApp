import { FILTER_COURSES, SUCCESS_REQUEST_COURSES } from '../../course.action';
import { Course } from '../../model/course';
import { IAppState } from './IAppState';

const courses = [];

const initiateState: IAppState = {
  courses,
  filteredCourses: courses
};

function filterCourses(state: IAppState, action): IAppState {
  return Object.assign({}, state, {
    filteredCourses: state.courses.filter(c => c.name.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1)
  });
}

function storeCourses(state: IAppState, action): IAppState {
  return Object.assign({}, state, {
    courses: action.courses,
    filteredCourses: action.courses
  });
}

export function reducer(state: IAppState = initiateState, action) {
  switch (action.type) {
    case FILTER_COURSES:
      return filterCourses(state, action);
    case SUCCESS_REQUEST_COURSES:
      return storeCourses(state, action);
    default:
      return state;
  }
}
