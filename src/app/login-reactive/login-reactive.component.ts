import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';

@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent {
//   public email = new FormControl('',
// {
//                 validators: [Validators.required, Validators.email],
//                 updateOn: 'blur'
//               }
//   );
//   public password = new FormControl('',
// { validators: [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()] }
//   );

  // public form = new FormGroup({
  //   email: this.email,
  //   password: this.password,
  // })

  form = this.fb.group({
   // email: this.fb.nonNullable.control('', {
   //   validators: [Validators.required, Validators.email],
   //   updateOn: 'blur'
   // }),
    email: ['', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur'
    }],
    password: ['', [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()]]
  })

  // constructor(private fb: NonNullableFormBuilder) {}
  constructor(private fb: FormBuilder) {}

  get email() {
    return this.form.controls['email'];
  }


  get password() {
    return this.form.controls['password'];
  }

  public login() {
    const formValue = this.form.value;
  }
}
