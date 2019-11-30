import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/domain/interfaces/course.interface';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { CoursesService } from 'src/app/services/course-service/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [SearchPipe]
})
export class CoursesPageComponent implements OnInit {

  public showCourses: Array<Course>;
  private listOfCourses;

  constructor(private search: SearchPipe,
              private courseService: CoursesService,
  ) {}

  ngOnInit() {
    this.courseService.getList().subscribe(courses => {
      this.listOfCourses = courses;
      this.showCourses = this.listOfCourses;
    });
  }

  addCourse(item: Course) {
    this.courseService.addCourse(item);
  }

  getItemById(id: number) {
    this.courseService.getItemById(id);
  }

  updateCourse(item: Course) {
    this.courseService.updateItem(item);
  }

  removeCourse(id) {
    this.courseService.removeItem(id);
  }

  onFilterCourses(event) {
    const regExp = new RegExp(`${event.toUpperCase()}`);
    this.showCourses = this.search.transform(event, this.listOfCourses, regExp);
  }
}
