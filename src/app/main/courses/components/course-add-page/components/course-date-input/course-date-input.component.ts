import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-date-input',
  templateUrl: './course-date-input.component.html',
  styleUrls: ['./course-date-input.component.scss']
})
export class CourseDateInputComponent implements OnInit {

  @Input() creationDate: Date;
  @Output() dateChange: EventEmitter<Date> = new EventEmitter<Date>();
  date;

  constructor() { }

  ngOnInit() {
    if (this.creationDate) {
      const date = this.creationDate;
      const year = date.getFullYear();
      const month = (date.getMonth() + 1 >= 10) ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
      const day = date.getDate();
      this.date = `${year}-${month}-${day}`;
    }
  }

  onDateChange() {
    const date = new Date(this.date);
    this.dateChange.emit(date);
  }
}
