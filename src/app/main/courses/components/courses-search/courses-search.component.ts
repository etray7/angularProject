import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss']
})
export class CoursesSearchComponent {

  @Output() filterCourseEmit: EventEmitter<any> = new EventEmitter<any>();
  searchForm: FormGroup;
  constructor() {
    this.formBuilder();
  }

  get search(): AbstractControl {
    return this.searchForm.controls.search.value;
  }

  formBuilder() {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  onFilterCourses() {
    console.log(this.search)
    this.filterCourseEmit.emit(this.search);
  }
}
