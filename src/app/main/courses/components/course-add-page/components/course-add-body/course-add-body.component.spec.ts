import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddBodyComponent } from './course-add-body.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('CourseAddBodyComponent', () => {
  let component: CourseAddBodyComponent;
  let fixture: ComponentFixture<CourseAddBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CourseAddBodyComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: { params: of({}) } },
        {provide: Router, useValue: {} },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
