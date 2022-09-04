import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'login-template-driven',
  templateUrl: './login-template-driven.component.html',
  styleUrls: ['./login-template-driven.component.css']
})
export class LoginTemplateDrivenComponent {

  public val = {
    email: 'test@gmail.com',
    password: '12345678'
  }

  public login(loginForm: NgForm, submit) {
    console.log(loginForm.value, loginForm.valid, submit);
    console.log(this.val);
  }
  //
  // public onEmailChange(change) {
  //   console.log(change);
  // }
}
