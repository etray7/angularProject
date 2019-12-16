import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from 'src/app/domain/interfaces/course.interface';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { CoursesService } from 'src/app/services/course-service/courses.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  // providers: [SearchPipe]
})
export class CoursesPageComponent implements OnInit, OnDestroy {

  public showCourses: Array<Course>;
  private listOfCourses;
  subscription: Subscription;

  constructor(private courseService: CoursesService,
              private router: Router,
    // private search: SearchPipe,
  ) {}

  ngOnInit() {
    this.loadCourses();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadCourses(itemsLength = 5) {
    this.subscription = this.courseService.getSomeCourses(0, itemsLength)
      .subscribe((courses) => {
        this.listOfCourses = courses;
        this.showCourses = this.listOfCourses;
      });
  }

  loadMoreCourses() {
    this.subscription = this.courseService.getSomeCourses(0, this.listOfCourses.length + 5)
      .subscribe(courses => {
        this.listOfCourses = courses;
        this.showCourses = this.listOfCourses;
      });
  }

  getItemById(id: number) {
    this.courseService.getItemById(id);
  }

  removeCourse(id) {
    this.courseService.removeItem(id).subscribe(item => {
      this.loadCourses(this.showCourses.length);
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
