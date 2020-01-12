import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoursesModule } from './main/courses/courses.module';
import { HeaderModule } from './main/header/header.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './main/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginPageModule } from './main/login-page/login-page.module';
import { ErrorPageComponent } from './main/error-page/error-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/auth.interceptor';
import { SpinnerComponent } from './main/spinner/spinner.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffect } from './state/courses/courses.effects';
import { UserEffect } from './state/user/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ErrorPageComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    LoginPageModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([
      CoursesEffect,
      UserEffect,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
