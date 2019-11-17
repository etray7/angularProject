import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CoursesService } from 'src/app/services/course-service/courses.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {

  @Input()
  course;
  @Output()
  deleteCourseItem: EventEmitter<number> = new EventEmitter<number>();

  constructor(private coursesService: CoursesService) { }

  public courseDelete(id) {
    this.deleteCourseItem.emit(id);
    this.coursesService.removeItem(id);
    console.log(`Course with ${id} will be deleted`);
  }

}
