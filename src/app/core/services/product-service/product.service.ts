import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Product } from '../../models/Product';
import { Params } from '@angular/router';
import { CookieHelperService } from '../cookie-helper-service/cookie-helper.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private cookieHelper: CookieHelperService
  ) {}

  getTopTen(): any {
    return this.http.get<Product[]>(this.apiUrl + '/Recommender/GetTopTen');
  }

  getProducts(queryParams: Params): any {
    return this.http.get<Product[]>(this.apiUrl + '/GetProducts', {
      params: queryParams,
    });
  }

  getProductByTitle(body: any): any {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.post<Product[]>(
      this.apiUrl + '/GetProductByName',
      body,
      httpOptions
    );
  }
}
