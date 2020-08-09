import { FILTER_COURSES } from '../../course.action';
import { Course } from '../../model/course';
import { IAppState } from './IAppState';

const courses = [
  {
    id: 1,
    name: 'Building Apps with React',
    topic: 'ReactJS'
  }, {
    id: 2,
    name: 'Building Apps with Angular',
    topic: 'AngularJS'
  }, {
    id: 3,
    name: 'Building Apps with Angular and Redux',
    topic: 'Angular and Redux'
  }
];

const initiateState: IAppState = {
  courses,
  filteredCourses: courses
};

function filterCourses(state: IAppState, action): IAppState {
  return Object.assign({}, state, {
    filteredCourses: state.courses.filter(c => c.name.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1)
  });
}

export function reducer(state: IAppState = initiateState, action) {
  switch (action.type) {
    case FILTER_COURSES:
      return filterCourses(state, action);
    default:
      return state;
  }
}
