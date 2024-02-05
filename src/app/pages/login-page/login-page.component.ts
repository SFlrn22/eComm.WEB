import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  hide: boolean = true;
  user = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  onSubmit(): void {
    console.log(this.user.value + ' ' + this.password.value);
  }

  getUserErrorMessage() {
    if (this.user.hasError('required')) {
      return 'You must enter an username';
    }
    return '';
  }
  getPassErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
    return '';
  }
}
