import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Course } from 'src/app/domain/interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courseList: Array<Course> = [
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

  courses = new BehaviorSubject(this.courseList);
  getCourses = this.courses.asObservable();

  constructor() { }

  getList(): Observable<Course[]> {
    return this.getCourses;
  }

  addCourse(item: Course): void {
    this.courseList = [...this.courseList, item];
    this.courses.next(this.courseList);
  }

  getItemById(id: number): Course[] {
    return this.courseList.filter((item: Course) => item.id === id);
  }

  updateItem(item: Course): void {
    this.courseList = this.courseList.map((course: Course) => {
      if (course.id === item.id) {
        course = item;
        return course;
      }
      return course;
    });
    this.courses.next(this.courseList);
  }

  removeItem(id: number): void {
    this.courseList = this.courseList.filter((item: Course) => item.id !== id);
    this.courses.next(this.courseList);
  }

}
