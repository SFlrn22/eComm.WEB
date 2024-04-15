import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { CookieHelperService } from '../cookie-helper-service/cookie-helper.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private cookieHelper: CookieHelperService
  ) {}

  getActiveCart() {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.get<any>(this.apiUrl + '/GetActiveCart', httpOptions);
  }

  addToCart(bookId: number, count: number) {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
    };
    return this.http.post<any>(
      this.apiUrl + '/AddToCart',
      { bookId: bookId, count: 1 },
      httpOptions
    );
  }

  removeFromCart(bookId: number) {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
    };
    return this.http.post<any>(
      this.apiUrl + '/RemoveFromCart',
      bookId,
      httpOptions
    );
  }
}
