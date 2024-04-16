import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../loader-service/loader.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  private count = 0;

  constructor(private loader: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loader.isLoading.next(true);
    this.count++;
    return next.handle(req).pipe(
      finalize(() => {
        this.count--;
        if (this.count == 0) {
          this.loader.isLoading.next(false);
        }
      })
    );
  }
}
