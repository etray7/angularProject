import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoursesModule } from './main/courses/courses.module';
import { HeaderModule } from './main/header/header.module';

import { AppComponent } from './app.component';
import { FakeLogoComponent } from './main/fake-logo/fake-logo.component';
import { FooterComponent } from './main/footer/footer.component';
import { BreadcrumbsComponent } from './main/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FakeLogoComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
