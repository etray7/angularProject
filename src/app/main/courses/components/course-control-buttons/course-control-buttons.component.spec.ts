import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseControlButtonsComponent } from './course-control-buttons.component';
import { By } from '@angular/platform-browser';

describe('CourseControlButtonsComponent', () => {
  let component: CourseControlButtonsComponent;
  let fixture: ComponentFixture<CourseControlButtonsComponent>;

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
      declarations: [ CourseControlButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseControlButtonsComponent);
    component = fixture.componentInstance;
    component.course = mockCourseItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called emitCourseDelete function when click on button', () => {
    spyOn(component.deleteCourse, 'emit').and.callThrough();
    const deleteBtn = fixture.debugElement
      .query(By.css('[data-marker="deleteBtn"]'))
      .nativeElement;
    deleteBtn.click();
    expect(deleteBtn).toBeTruthy();
    expect(component.deleteCourse.emit).toHaveBeenCalled();
  });
});
