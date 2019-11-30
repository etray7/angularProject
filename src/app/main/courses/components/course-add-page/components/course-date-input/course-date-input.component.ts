import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-date-input',
  templateUrl: './course-date-input.component.html',
  styleUrls: ['./course-date-input.component.scss']
})
export class CourseDateInputComponent implements OnInit {

  @Input() creationDate;
  @Output() dateChange: EventEmitter<Date> = new EventEmitter<Date>();
  date;

  constructor() { }

  ngOnInit() {
    this.date = `${this.creationDate.getFullYear()}-${this.creationDate.getMonth() + 1}-${this.creationDate.getDate()}`;
  }

  onDateChange() {
    const date = new Date(this.date);
    // const reformDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    // console.log(reformDate);
    this.dateChange.emit(date);
  }
}
