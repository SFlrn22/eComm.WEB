import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { CookieHelperService } from '../../core/services/cookie-helper-service/cookie-helper.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../../core/services/snackbar-service/snackbar.service';
import { AuthService } from '../../core/services/auth-service/auth.service';

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
        if (data.data.token != undefined || null) {
          this.cookieHelper.setCookies('jwt', data.data.token);
          this.cookieHelper.setCookies('refresh', data.data.refreshToken);
          this.snackBarService.openSnackBar(
            'Logare realizata cu success, vei fi redirectat catre pagina de start',
            'Close',
            'success'
          );
          setTimeout(
            () =>
              this.router.navigateByUrl('main').then(() => {
                window.location.reload();
              }),
            1500
          );
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
