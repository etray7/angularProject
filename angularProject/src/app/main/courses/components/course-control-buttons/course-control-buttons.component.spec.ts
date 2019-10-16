import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseControlButtonsComponent } from './course-control-buttons.component';

describe('CourseControlButtonsComponent', () => {
  let component: CourseControlButtonsComponent;
  let fixture: ComponentFixture<CourseControlButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseControlButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseControlButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
