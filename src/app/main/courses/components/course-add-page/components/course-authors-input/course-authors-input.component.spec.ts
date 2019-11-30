import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAuthorsInputComponent } from './course-authors-input.component';
import { FormsModule } from '@angular/forms';

describe('CourseAuthorsInputComponent', () => {
  let component: CourseAuthorsInputComponent;
  let fixture: ComponentFixture<CourseAuthorsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CourseAuthorsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAuthorsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
