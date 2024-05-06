import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, switchMap, throwError } from 'rxjs';
import { LoaderService } from '../loader-service/loader.service';
import { AuthService } from '../auth-service/auth.service';
import { CookieHelperService } from '../cookie-helper-service/cookie-helper.service';
import { error } from 'console';
import { TokenRefreshRequest } from '../../models/TokenRefreshRequest';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  private count = 0;

  constructor(
    private loader: LoaderService,
    private authService: AuthService,
    private cookieHelper: CookieHelperService,
    private router: Router
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loader.isLoading.next(true);
    this.count++;
    return next.handle(req).pipe(
      catchError((error) => {
        if (error.status === 401) {
          let jwt = this.cookieHelper.getCookies('jwt');
          let refresh = this.cookieHelper.getCookies('refresh');

          let request: TokenRefreshRequest = {
            token: jwt,
            refreshToken: refresh,
          };

          if (jwt != null) {
            this.authService.refresh(request).subscribe((data: any) => {
              if (data.isSuccess == true) {
                this.cookieHelper.removeCookies('jwt');
                this.cookieHelper.setCookies('jwt', data.data.token);
                window.location.reload();
              } else if (data.isSuccess == false) {
                this.router.navigateByUrl('login');
              }
            });
          }
        }
        return next.handle(
          req.clone({
            headers: req.headers.set(
              'Authorization',
              `Bearer ${this.cookieHelper.getCookies('jwt')}`
            ),
          })
        );
      }),
      finalize(() => {
        this.count--;
        if (this.count == 0) {
          this.loader.isLoading.next(false);
        }
      })
    );
  }
}
