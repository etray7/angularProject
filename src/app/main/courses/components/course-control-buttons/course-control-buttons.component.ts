import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Course } from 'src/app/domain/interfaces/course.interface';

@Component({
  selector: 'app-course-control-buttons',
  templateUrl: './course-control-buttons.component.html',
  styleUrls: ['./course-control-buttons.component.scss']
})
export class CourseControlButtonsComponent implements OnInit {

  @Input()
  course: Course;
  @Output()
  deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  public emitCourseDelete(item) {
    this.deleteCourse.emit(item);
  }
}
