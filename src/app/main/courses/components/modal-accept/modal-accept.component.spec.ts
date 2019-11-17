import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcceptComponent } from './modal-accept.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ModalAcceptComponent', () => {
  let component: ModalAcceptComponent;
  let fixture: ComponentFixture<ModalAcceptComponent>;

  const mockData = {
      course: {
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
      message: 'Are you sure you want to delete'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAcceptComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockData },
        { provide: MatDialogRef, useValue: {} },
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
