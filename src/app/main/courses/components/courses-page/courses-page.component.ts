import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/domain/interfaces/course.interface';
import { SearchPipe } from 'src/app/pipes/search.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [SearchPipe]
})
export class CoursesPageComponent implements OnInit {

  public showCourses: Array<Course>;
  private listOfCourses: Array<Course> = [
    {
      id: 1,
      title: 'Video Course 1. Name tag',
      topRated: true,
      creationDate: new Date(),
      minDuration: 180,
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
      topRated: false,
      creationDate: new Date('12/31/2019'),
      minDuration: 345,
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
      title: 'Video Course 2. Angular course',
      topRated: false,
      creationDate: new Date('01/02/2018'),
      minDuration: 50,
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

  constructor(private search: SearchPipe) {}

  ngOnInit() {
    this.showCourses = this.listOfCourses;
  }

  onFilterCourses(event) {
    const regExp = new RegExp(`${event.toUpperCase()}`);
    this.showCourses = this.search.transform(event, this.listOfCourses, regExp);
  }
}
