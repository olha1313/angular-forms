import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from './services/course.resolver';
import { LoginTemplateDrivenComponent } from './login-template-driven/login-template-driven.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'courses/:id',
    component: CourseComponent,
    resolve: {
      course: CourseResolver
    }
  },
  {
    path: 'add-new-course',
    component: CreateCourseComponent
  },
  {
    path: 'login-reactive',
    component: LoginReactiveComponent
  },
  {
    path: 'login-template-driven',
    component: LoginTemplateDrivenComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
