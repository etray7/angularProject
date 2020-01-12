import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/domain/interfaces/course.interface';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { State } from 'src/app/state';
import { Store } from '@ngrx/store';
import { getCoursesSuccess } from 'src/app/state/courses/courses.actions';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  currentCourse: EventEmitter<any> = new EventEmitter<any>();
  private courseUrl = 'http://localhost:3004/courses';

  constructor(private http: HttpClient, private store: Store<State>) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.courseUrl).pipe(tap((courses: Course[]) => {
      this.store.dispatch(getCoursesSuccess({courses}));
      return courses;
    }));
  }

  getSomeCourses(start, count) {
    return this.http.get(this.courseUrl, {
      params: {
        start,
        count,
      }
    });
  }

  addCourse(item: Course) {
    return this.http.post<Course>(this.courseUrl, item);
  }

  getItemById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.courseUrl}/${id}`);
  }

  updateItem(id: number, item: Course) {
    return this.http.patch<Course>(`${this.courseUrl}/${id}`, item);
  }

  removeItem(id: number) {
    return this.http.delete<Course>(`${this.courseUrl}/${id}`);
  }

  searchItems(query: string) {
    return this.http.get<Course[]>(this.courseUrl, {
      params: {
        textFragment: query,
      }
    });
  }

}
