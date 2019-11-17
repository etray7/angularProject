import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoursesModule } from './main/courses/courses.module';
import { HeaderModule } from './main/header/header.module';
import { FooterComponent } from './main/footer/footer.component';
import { LoginPageModule } from './main/login-page/login-page.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoursesModule,
        HeaderModule,
        LoginPageModule
      ],
      declarations: [
        AppComponent,
        FooterComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
