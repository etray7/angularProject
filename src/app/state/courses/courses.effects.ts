import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/course-service/courses.service';
import { Store } from '@ngrx/store';
import { State } from '..';
import { getSomeCourses, getCoursesSuccess, currentCourse, editCourse } from './courses.actions';

@Injectable()
export class CoursesEffect {
  getCourses = createEffect(() =>
    this.actions$.pipe(
      ofType('Get Courses'),
      withLatestFrom(this.store, (action, state) => ({ action, state })),
      exhaustMap((data: any) => {
        return this.coursesService.getSomeCourses(0, 5).pipe(
          map((courses: any) => {
            return getSomeCourses({ courses });
          })
        );
      })
    )
  );

  editCourse = createEffect(() =>
    this.actions$.pipe(
      ofType(editCourse),
      withLatestFrom(this.store, (action, state) => ({ action, state })),
      exhaustMap((data: any) => {
        console.log(data);
        const id = data.action.currentId;
        return this.coursesService.getItemById(id).pipe(
          map((course: any) => {
            return currentCourse({ currentCourse: course });
          })
        );
      })
    )
  );

  loadMoreCourse = createEffect(() =>
    this.actions$.pipe(
      ofType('More Courses'),
      withLatestFrom(this.store, (action, state) => ({ action, state })),
      exhaustMap((data: any) => {
        return this.coursesService
          .getSomeCourses(0, data.state.courses.courses.length + 5)
          .pipe(
            map((courses: any) => {
              return getSomeCourses({ courses });
            })
          );
      })
    )
  );

  removeCourse = createEffect(() =>
    this.actions$.pipe(
      ofType('Remove Courses'),
      withLatestFrom(this.store, (action, state) => ({ action, state })),
      exhaustMap((data: any) => {
        return this.coursesService
          .getSomeCourses(0, data.state.courses.courses.length)
          .pipe(
            map((courses: any) => {
              return getSomeCourses({ courses });
            })
          );
      })
    )
  );

  getAllCourses = createEffect(() =>
    this.actions$.pipe(
      ofType('Get All Courses'),
      withLatestFrom(this.store, (action, state) => ({ action, state })),
      exhaustMap((data: any) => {
        return this.coursesService.getAllCourses().pipe(
          map((courses: any) => {
            return getCoursesSuccess({ courses });
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store<State>
  ) {}
}
