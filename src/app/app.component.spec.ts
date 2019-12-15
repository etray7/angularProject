import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoursesModule } from './main/courses/courses.module';
import { HeaderModule } from './main/header/header.module';
import { FooterComponent } from './main/footer/footer.component';
import { LoginPageModule } from './main/login-page/login-page.module';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './main/spinner/spinner.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoursesModule,
        HeaderModule,
        LoginPageModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        FooterComponent,
        SpinnerComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
