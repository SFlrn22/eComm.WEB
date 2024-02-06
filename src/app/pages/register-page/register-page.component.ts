import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  hide: boolean = true;
  user = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);

  onSubmit(): void {
    console.log(this.user.value + ' ' + this.password.value);
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid email address';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
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
