import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Course } from '../domain/interfaces/course.interface';

@Directive({
  selector: '[appCourseView]'
})

export class CourseViewDirective implements OnInit {

  @Input() public course: Course;

  currentDate: Date = new Date();
  private twoWeeks: number = 24 * 7 * 2 * 60 * 60 * 1000;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.border = this.daysBeetwen();
  }

  private daysBeetwen(): string {
    const specialDate = new Date(Number(this.currentDate) - this.twoWeeks);
    if (this.course.creationDate < new Date() && this.course.creationDate >= specialDate) {
      return 'solid 2px #07ff43';
    } else if (this.course.creationDate > this.currentDate) {
      return 'solid 2px #30b6dd';
    }
    return;
  }
}
