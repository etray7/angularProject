import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-add-body',
  templateUrl: './course-add-body.component.html',
  styleUrls: ['./course-add-body.component.scss']
})
export class CourseAddBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    console.log('Save course');
  }

  onCancel() {
    console.log('Close');
  }
}
