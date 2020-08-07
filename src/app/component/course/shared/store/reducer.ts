import { Course } from '../../model/course';
import { IAppState } from './IAppState';

const initiateState: IAppState = {
  courses: [
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
  ]
};

export function reducer(state: IAppState = initiateState, action) {
  return state;
}
