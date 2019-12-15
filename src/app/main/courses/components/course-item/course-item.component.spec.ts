import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { CourseControlButtonsComponent } from '../course-control-buttons/course-control-buttons.component';
import { DurationPipe } from 'src/app/pipes/duration.pipe';
import { CourseViewDirective } from 'src/app/directives/course-view.directive';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  const mockCourseItem = {
    id: 1,
    name: 'Video Course 1. Name tag',
    date: new Date(),
    length: 30,
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
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, CourseControlButtonsComponent, DurationPipe, CourseViewDirective],
      providers: [
        DurationPipe,
        {
          provide: MatDialog,
          useValue: {}
        },
        {
          provide: Router,
          useValue: {}
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
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

  it('should render course', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('.course-title').textContent).toContain(mockCourseItem.name.toUpperCase());
    expect(nativeElement.querySelector('[data-marker="creationDate"]').textContent)
      .toContain(new DatePipe('en-US').transform(mockCourseItem.date, 'd MMM, y'));
    expect(nativeElement.querySelector('[data-marker="minDuration"]').textContent.trim())
      .toEqual(mockCourseItem.length + 'min');
    expect(nativeElement.querySelector('[data-marker="description"]').textContent)
      .toContain(mockCourseItem.description);
    expect(nativeElement.querySelectorAll('[data-marker="controlButtons"]')[0].children[0].children.length)
      .toEqual(2);
    expect(fixture.debugElement.query(By.css('.course'))).toBeTruthy();
  });

  it('should emit delete', () => {
    spyOn(component.deleteCourseItem, 'emit');
    component.courseDelete(mockCourseItem.id);
    expect(component.deleteCourseItem.emit).toHaveBeenCalled();
  });
});
