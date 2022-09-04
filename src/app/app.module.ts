import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { CourseComponent } from './course/course.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoursesService } from './services/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { CourseResolver } from './services/course.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginTemplateDrivenComponent } from './login-template-driven/login-template-driven.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { CreateCourseStep1Component } from './create-course/create-course-step-1/create-course-step-1.component';
import { CreateCourseStep2Component } from './create-course/create-course-step-2/create-course-step-2.component';
import { CreateCourseStep3Component } from './create-course/create-course-step-3/create-course-step-3.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { PasswordStrengthDirective } from './directives/password-strength.directive';
import { OnlyOneErrorPipe } from './pipes/only-one-error.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CourseComponent,
        CoursesCardListComponent,
        LoginTemplateDrivenComponent,
        CreateCourseComponent,
        CreateCourseStep1Component,
        CreateCourseStep2Component,
        CreateCourseStep3Component,
        FileUploadComponent,
        LoginReactiveComponent,
        PasswordStrengthDirective,
        OnlyOneErrorPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        AppRoutingModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatCheckboxModule,
        MatStepperModule,
        MatProgressBarModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        CoursesService,
        CourseResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
