import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLoginComponent } from './header-login.component';
import { Router } from '@angular/router';

describe('HeaderLoginComponent', () => {
  let component: HeaderLoginComponent;
  let fixture: ComponentFixture<HeaderLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLoginComponent ],
      providers: [{ provide: Router, useValue: {} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
