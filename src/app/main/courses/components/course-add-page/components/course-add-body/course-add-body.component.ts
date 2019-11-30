import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/course-service/courses.service';
import { tap, map } from 'rxjs/operators';
import { CourseModel } from 'src/app/domain/models/Course.model';
import { Course } from 'src/app/domain/interfaces/course.interface';
@Component({
  selector: 'app-course-add-body',
  templateUrl: './course-add-body.component.html',
  styleUrls: ['./course-add-body.component.scss']
})
export class CourseAddBodyComponent implements OnInit, OnDestroy {

  manageCourse: string;
  newIndex: number;
  mode: string;
  description: string;
  title: string;
  idCourse: number;
  course: Course;
  unsubscribe: any;

  constructor(
    private router: ActivatedRoute,
    public coursesService: CoursesService,
    private route: Router
  ) {
    this.unsubscribe = this.router.params.pipe(tap(data => data)).subscribe(data => {
      if (Number(data.id)) {
        this.idCourse = Number(data.id);
        this.mode = 'Edit';
        this.manageCourse = 'Edit course';
        return;
      }
      this.mode = 'Add';
      this.manageCourse = 'New course';
      return;
    });
  }

  ngOnInit() {
    if (this.mode === 'Edit') {
      this.getCourseItem();
      return;
    }
    this.createNewCourse();
  }

  createNewCourse() {
    this.coursesService.courses.pipe(map(data => data)).subscribe(data => {
      const coursesId = data.map(item => Number(item.id)).sort((a, b) => a - b);
      this.newIndex = coursesId[coursesId.length - 1] + 1;
    });
    this.course = new CourseModel(this.newIndex, '', false, new Date(), 0, '');
    this.title = this.course.title;
    this.description = this.course.description;
    this.coursesService.currentCourse.emit('New course');
  }

  ngOnDestroy() {
    this.coursesService.currentCourse.emit();
    this.coursesService.currentCourse.complete();
    this.unsubscribe.unsubscribe();
  }

  getCourseItem() {
      this.course = {...this.coursesService.getItemById(this.idCourse)[0]};
      this.title = this.course.title;
      this.description = this.course.description;
      this.coursesService.currentCourse.emit(this.title);
  }

  onSave() {
    if (this.mode === 'Edit') {
      this.coursesService.updateItem(this.course);
    } else if (this.mode === 'Add') {
      this.coursesService.addCourse(this.course);
    }
    this.route.navigateByUrl('/courses');
    console.log('Save course');
  }

  onCancel() {
    this.route.navigateByUrl('/courses');
    console.log('Close');
  }

  getNewDate(date) {
    this.course.creationDate = date;
  }

  getNewDuration(duration: number) {
    this.course.minDuration = duration;
  }

  getNewDescription() {
    this.course.description = this.description;
  }

  getNewTitle() {
    this.course.title = this.title;
  }
}
