import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoursesService } from 'src/app/services/course-service/courses.service';
import { of } from 'rxjs';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  const mockCourses = [{
      id: 1,
      name: 'Video Course 1. Name tag',
      isTopRated: true,
      date: new Date(),
      length: 200,
      description: `Learn about where you can find course descriptions,
          what information they include, how they work, and details about
          various components of a course description.
          Course descriptions report information about a
          university or college's classes.
          They're published both in course catalogs
          that outline degree requirements and in
          course schedules that contain descriptions
          for all courses offered during a particular semester.`,
      authors: []
  }];
  const courseServiceObj = jasmine.createSpyObj('CoursesService', ['getAllCourses', 'getSomeCourses']);
  courseServiceObj.getAllCourses.and.returnValue(of(mockCourses));
  courseServiceObj.getSomeCourses.and.returnValue(of(mockCourses));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoursesPageComponent, OrderByPipe ],
      providers: [
        OrderByPipe,
        {
          provide: Router,
          useValue: {}
        },
        {
          provide: CoursesService,
          useValue: courseServiceObj,
        }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show courses', () => {
    const courses = fixture.debugElement.queryAll(By.css('[data-marker="courses"]')).length;
    expect(component.showCourses.length).toEqual(courses);
  });
});
