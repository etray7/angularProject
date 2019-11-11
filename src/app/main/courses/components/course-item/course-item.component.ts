import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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

  constructor() { }

  public courseDelete(id) {
    this.deleteCourseItem.emit(id);
    console.log(`Course with ${id} will be deleted`);
  }

}
