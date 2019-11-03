import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeLogoComponent } from './fake-logo.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FakeLogoComponent', () => {
  let component: FakeLogoComponent;
  let fixture: ComponentFixture<FakeLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeLogoComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
