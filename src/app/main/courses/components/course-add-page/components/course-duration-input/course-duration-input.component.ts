import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-duration-input',
  templateUrl: './course-duration-input.component.html',
  styleUrls: ['./course-duration-input.component.scss']
})
export class CourseDurationInputComponent implements OnInit {

  @Input() minDuration;
  @Output() durationChange: EventEmitter<number> = new EventEmitter<number>();
  duration;

  constructor() { }

  ngOnInit() {
    this.duration = this.minDuration;
  }

  onDurationChange() {
    this.durationChange.emit(this.duration);
  }
}
