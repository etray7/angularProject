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
  colorView: any;
  currentDate: any = new Date();
  private twoWeeks: number = 24 * 7 * 2 * 60 * 60 * 1000;

  constructor() { }

  ngOnInit() {
    this.daysBeetwen();
  }

  private daysBeetwen(): string {
    const specialDate = new Date(Number(this.currentDate) - this.twoWeeks);
    if (this.course.creationDate < new Date() && this.course.creationDate >= specialDate) {
      return this.colorView = 'green';
    } else if (this.course.creationDate > this.currentDate) {
      return this.colorView = 'blue';
    } else {
      return;
    }
  }
  public courseDelete(id) {
    this.deleteCourseItem.emit(id);
    console.log(`Course with ${id} will be delete`);
  }

}
