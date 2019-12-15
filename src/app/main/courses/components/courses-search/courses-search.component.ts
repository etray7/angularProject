import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { debounceTime, filter, tap, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss']
})
export class CoursesSearchComponent implements OnInit, OnDestroy {

  @Output() filterCourseEmit: EventEmitter<any> = new EventEmitter<any>();
  searchForm: FormGroup;
  subscription: Subscription;
  constructor() {
    this.formBuilder();
  }

  ngOnInit() {
    this.subscription = this.searchForm.controls.search.valueChanges.pipe(
      debounceTime(500),
      filter(item => item.length >= 3 || item.length === 0),
    ).subscribe((item) => {
      console.log(true);
      this.filterCourseEmit.emit(item);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get search(): AbstractControl {
    return this.searchForm.controls.search.value;
  }

  formBuilder(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  onFilterCourses() {
    this.filterCourseEmit.emit(this.search);
  }
}
