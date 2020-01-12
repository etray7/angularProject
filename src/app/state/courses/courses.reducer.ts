import { createReducer, on, Action } from '@ngrx/store';
import { getCoursesSuccess, getSomeCourses, getCourses, getAllCourses, editCourse, currentCourse } from './courses.actions';

export const initialState = {
  courses: [],
  allCourses: [],
  currentCourse: null,
  currentId: null,
};

const reducer = createReducer(
  initialState,
  on(getCoursesSuccess, (state, { courses }) => {
    return {
      ...state,
      allCourses: courses,
    };
  }),
  on(getSomeCourses, (state, { courses }) => {
    return {
      ...state,
      courses,
    };
  }),
  on(currentCourse, (state, { currentCourse }) => {
    return {
      ...state,
      currentCourse,
    }
  }),
  on(editCourse, (state, { currentId }) => {
    return {
      ...state,
      currentId,
    }
  }),
);

export function coursesReducer(state: any, action: Action): any {
  return reducer(state, action);
}
