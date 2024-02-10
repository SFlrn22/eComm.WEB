import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from '../../core/services/auth-service/auth.service';
import { AuthResponse } from '../../core/models/AuthResponse';
import { CookieHelperService } from '../../core/services/cookie-helper-service/cookie-helper.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../../core/services/snackbar-service/snackbar.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit {
  hide: boolean = true;
  loginForm: FormGroup | any = null;

  constructor(
    private location: Location,
    private authService: AuthService,
    private cookieHelper: CookieHelperService,
    private router: Router,
    private snackBarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.getToken(this.loginForm.value).subscribe((data: any) => {
        if (data.authToken != undefined || null) {
          this.cookieHelper.setCookies('jwt', data.authToken);
          this.router.navigateByUrl('main').then(() => {
            window.location.reload();
          });
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
