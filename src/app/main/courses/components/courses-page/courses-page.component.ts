import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/domain/interfaces/course.interface';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { CoursesService } from 'src/app/services/course-service/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  // providers: [SearchPipe]
})
export class CoursesPageComponent implements OnInit {

  public showCourses: Array<Course>;
  private listOfCourses;

  constructor(private courseService: CoursesService,
              private router: Router,
    // private search: SearchPipe,
  ) {}

  ngOnInit() {
    this.courseService.getSomeCourses(0, 5)
      .subscribe((courses) => {
        this.listOfCourses = courses;
        this.showCourses = this.listOfCourses;
      });
  }

  loadMoreCourses() {
    this.courseService.getSomeCourses(0, this.listOfCourses.length + 5)
      .subscribe(courses => {
        this.listOfCourses = courses;
        this.showCourses = this.listOfCourses;
      });
  }

  getItemById(id: number) {
    this.courseService.getItemById(id);
  }

  removeCourse(id) {
    this.courseService.removeItem(id).subscribe(item => item);
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
