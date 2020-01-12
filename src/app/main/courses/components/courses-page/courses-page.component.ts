import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from 'src/app/domain/interfaces/course.interface';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { CoursesService } from 'src/app/services/course-service/courses.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/state';
import { getCourses, removeCourse, loadMoreCourses } from 'src/app/state/courses/courses.actions';
import { selectCourses } from 'src/app/state/courses/courses.selector';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  // providers: [SearchPipe]
})
export class CoursesPageComponent implements OnInit, OnDestroy {

  public showCourses: Array<Course>;
  private listOfCourses;
  unsubscribe: Subscription;

  constructor(private courseService: CoursesService,
              private router: Router,
              private store: Store<State>,
    // private search: SearchPipe,
  ) {}

  ngOnInit() {
    this.loadCourses();
  }

  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

  loadCourses() {
    this.store.dispatch(getCourses());
    this.unsubscribe = this.store.pipe(select(selectCourses)).subscribe((courses) => {
      this.listOfCourses = [...courses.courses];
      this.showCourses = this.listOfCourses;
    });
  }

  loadMoreCourses() {
    this.store.dispatch(loadMoreCourses());
  }

  getItemById(id: number) {
    this.courseService.getItemById(id);
  }

  removeCourse(id) {
    this.courseService.removeItem(id).subscribe(item => {
      this.store.dispatch(removeCourse());
      return item;
    });
  }

  openAddCourse() {
    this.router.navigateByUrl('/courses/new');
  }

  onFilterCourses(event) {
    // previous method
    // const regExp = new RegExp(`${event.toUpperCase()}`);
    // this.showCourses = this.search.transform(event, this.listOfCourses, regExp);
    if (event.length > 0) {
      this.courseService.searchItems(event).subscribe(courses => this.showCourses = courses);
      return;
    }
    this.showCourses = this.listOfCourses;
  }
}
