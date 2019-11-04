import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input()
  course;
  @Output()
  deleteCourseItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public courseDelete(id) {
    this.deleteCourseItem.emit(id);
    console.log(`Course with ${id} will be delete`);
  }

}
