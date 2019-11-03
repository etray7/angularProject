import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  const mockCourseItem = {
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
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = mockCourseItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call courseDelete function with course id', () => {
    spyOn(component, 'courseDelete').and.callThrough();
    component.courseDelete(component.course.id);
    expect(component.courseDelete).toHaveBeenCalledWith(1);
  });
});
