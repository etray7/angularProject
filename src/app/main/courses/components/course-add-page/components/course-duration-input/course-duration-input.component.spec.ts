import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDurationInputComponent } from './course-duration-input.component';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from 'src/app/pipes/duration.pipe';

describe('CourseDurationInputComponent', () => {
  let component: CourseDurationInputComponent;
  let fixture: ComponentFixture<CourseDurationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CourseDurationInputComponent, DurationPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDurationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
