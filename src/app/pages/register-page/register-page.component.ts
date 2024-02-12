import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from '../../core/services/auth-service/auth.service';
import { SnackbarService } from '../../core/services/snackbar-service/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent implements OnInit {
  hide: boolean = true;
  registerForm: FormGroup | any = null;
  constructor(
    private location: Location,
    private authService: AuthService,
    private snackBarService: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService
        .register(this.registerForm.value)
        .subscribe((data: any) => {
          if (data.isSuccess != false) {
            this.snackBarService.openSnackBar(
              'Inregistrare realizata cu success',
              'Close',
              'success'
            );
            this.router.navigateByUrl('login');
          } else {
            this.snackBarService.openSnackBar(data.message, 'Close', 'error');
          }
        });
    }
  }
  clickBack() {
    this.location.back();
  }
}
