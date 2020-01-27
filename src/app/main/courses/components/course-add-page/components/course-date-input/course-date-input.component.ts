import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-course-date-input',
  templateUrl: './course-date-input.component.html',
  styleUrls: ['./course-date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDateInputComponent),
      multi: true
    }
  ]
})
export class CourseDateInputComponent implements OnInit, ControlValueAccessor {
  @Input() creationDate: Date;
  @Output() dateChange: EventEmitter<Date> = new EventEmitter<Date>();
  date;
  onChange: (value: any) => void;
  onTouched: () => void;

  constructor() {}

  ngOnInit() {
    if (this.creationDate) {
      const date = this.creationDate;
      const year = date.getFullYear();
      const month =
        date.getMonth() + 1 >= 10
          ? date.getMonth() + 1
          : '0' + (date.getMonth() + 1);
      const day = date.getDate();
      this.date = `${year}-${month}-${day}`;
    }
  }

  onDateChange() {
    const date = new Date(this.date);
    this.dateChange.emit(date);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(outsideValue: Date) {
    const date = outsideValue;
    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 >= 10
        ? date.getMonth() + 1
        : '0' + (date.getMonth() + 1);
    const day = date.getDate();
    this.date = `${year}-${month}-${day}`;
  }
}
