import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './main/courses/components/courses-page/courses-page.component';
import { CourseAddBodyComponent } from './main/courses/components/course-add-page/components/course-add-body/course-add-body.component';
import { ErrorPageComponent } from './main/error-page/error-page.component';
import { AuthGuard } from './guards/auth-guard/auth.guard';
import { LoginFormComponent } from './main/login-page/components/login-form/login-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'login-page', component: LoginFormComponent },
  {
    path: 'courses',
    component: CoursesPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: 'courses/new', component: CourseAddBodyComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: CourseAddBodyComponent, canActivate: [AuthGuard] },
  { path: '**',  pathMatch: 'full', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
