import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLoginComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
