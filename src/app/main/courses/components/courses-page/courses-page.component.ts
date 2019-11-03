import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/domain/interfaces/course.interface';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  public listOfCourses: Array<Course>;

  constructor() {}

  ngOnInit() {
    this.listOfCourses = [
      {
        id: 1,
        title: 'Video Course 1. Name tag',
        creationDate: new Date(),
        minDuration: '1h 30 min',
        description: `Learn about where you can find course descriptions,
          what information they include, how they work, and details about
          various components of a course description.
          Course descriptions report information about a
          university or college's classes.
          They're published both in course catalogs
          that outline degree requirements and in
          course schedules that contain descriptions
          for all courses offered during a particular semester.`
      },
      {
        id: 2,
        title: 'Video Course 1. Name tag',
        creationDate: new Date(),
        minDuration: '1h 30 min',
        description: `Learn about where you can find course descriptions,
          what information they include, how they work, and details about
          various components of a course description.
          Course descriptions report information about a
          university or college's classes.
          They're published both in course catalogs
          that outline degree requirements and in
          course schedules that contain descriptions
          for all courses offered during a particular semester.`
      },
      {
        id: 3,
        title: 'Video Course 1. Name tag',
        creationDate: new Date(),
        minDuration: '1h 30 min',
        description: `Learn about where you can find course descriptions,
          what information they include, how they work, and details about
          various components of a course description.
          Course descriptions report information about a
          university or college's classes.
          They're published both in course catalogs
          that outline degree requirements and in
          course schedules that contain descriptions
          for all courses offered during a particular semester.`
      }
    ];
  }
}
