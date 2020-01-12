import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User } from '../domain/interfaces/user.interface';
import { coursesReducer } from './courses/courses.reducer';
import { userReducer } from './user/user.reducer';
import { Course } from '../domain/interfaces/course.interface';

export interface State {
  user: UserState;
  courses: CourseState;
}

export const reducers: ActionReducerMap<State> = {
  courses: coursesReducer,
  user: userReducer,
};

export interface UserState {
  user: User;
  token: string;
}

export interface CourseState {
  courses: Course[];
  allCourses: Course[];
  currentCourse: Course;
  currentId: number;
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
