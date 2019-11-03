import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { FakeLogoComponent } from './components/fake-logo/fake-logo.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLoginComponent,
    FakeLogoComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FakeLogoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderModule { }
