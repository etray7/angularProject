import { Directive, ElementRef, Input, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appCourseView]'
})

export class CourseViewDirective implements OnInit {

  @Input() public color: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.border = `solid 1px ${this.color}`;
  }

}
