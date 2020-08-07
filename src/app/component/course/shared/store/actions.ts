export const FILTER_COURSES = 'courses/FILTER';

// Action Creators
export function filterCourses(searchText: string) {
  return {
    type: FILTER_COURSES,
    searchText
  };
}
