import { reducer } from './reducer';
import { FILTER_COURSES } from './../../course.action';

describe('Reducer', () => {
  it('should have the correct initiate state', () => {
    const state = reducer(undefined, {});

    expect(state.courses.length).toBe(0);
    expect(state.filteredCourses.length).toBe(0);
  });
});
