import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CourseTitleValidator } from '../../validators/course-title.validator';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

interface CourseCategory {
  code: string;
  description: string;
}

@Component({
  selector: 'create-course-step-1',
  templateUrl: './create-course-step-1.component.html',
  styleUrls: ['./create-course-step-1.component.scss']
})
export class CreateCourseStep1Component implements OnInit {
  public form = this.fb.group({
    title: ['', {
      validators: [Validators.required, Validators.minLength(5), Validators.maxLength(60)],
      asyncValidators: [CourseTitleValidator(this.courses)],
      updateOn: 'blur'
    }],
    releasedAt: [new Date(), Validators.required],
    category: ['BEGINNER', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: ['', [Validators.required, Validators.minLength(3)]],
    // address: [null, Validators.required]
  })

  courseCategories$: Observable<CourseCategory[]>;

  constructor(private fb: FormBuilder, private courses: CoursesService) {}

  public ngOnInit(): void {
    this.courseCategories$ = this.courses.findCourseCategories();

    const draft = localStorage.getItem('step_1');

    if (draft) {
      this.form.setValue(JSON.parse(draft));
    }

    this.form.valueChanges
      .pipe(filter(() => this.form.valid))
      .subscribe(val => localStorage.setItem('step_1', JSON.stringify(val)))
  }

  get courseTitle() {
    return this.form.controls.title;
  }
}
