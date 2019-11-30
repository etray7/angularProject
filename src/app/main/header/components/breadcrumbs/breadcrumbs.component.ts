import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/course-service/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  additional: string;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.coursesService.currentCourse.subscribe(data => this.additional = data);
  }

}
