import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    emailControl: new FormControl('', [Validators.required, Validators.email]),
    passwordControl: new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  doLogin() {
    console.log(`${this.loginForm.controls.emailControl.value}, ${this.loginForm.controls.passwordControl.value}`);
  }

  showErrors(controlName: string) {
    let control = this.loginForm.get([controlName]);
    return control?.invalid && control?.dirty && control?.touched;
  }
}
