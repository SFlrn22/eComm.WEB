import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Product } from '../../models/Product';
import { Params } from '@angular/router';
import { CookieHelperService } from '../cookie-helper-service/cookie-helper.service';
import { AddToFavoritesRequest } from '../../models/AddToFavoritesRequest';
import { RateProductRequest } from '../../models/RateProductRequest';
import { AssociationRule } from '../../models/AssociationRule';

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

  getItemBasedRecommendations(queryParams: Params): any {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
      params: queryParams,
    };

    return this.http.get<Product[]>(
      this.apiUrl + '/Recommender/ItemBased/',
      httpOptions
    );
  }

  getContentBasedRecommendations(queryParams: Params): any {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
      params: queryParams,
    };

    return this.http.get<Product[]>(
      this.apiUrl + '/Recommender/ContentBased',
      httpOptions
    );
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

  getProductByVoiceRecord(formdata: FormData): any {
    var headers_object = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.post<Product[]>(
      this.apiUrl + '/GetProductByVoice',
      formdata,
      httpOptions
    );
  }

  getProductByImage(formdata: FormData): any {
    var headers_object = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.post<Product[]>(
      this.apiUrl + '/GetProductByImage',
      formdata,
      httpOptions
    );
  }

  getImageSource(formdata: FormData): any {
    var headers_object = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.post<Product[]>(
      this.apiUrl + '/GetImageSource',
      formdata,
      httpOptions
    );
  }

  rateProduct(request: RateProductRequest) {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
    };
    return this.http.post<any>(
      this.apiUrl + '/RateProduct',
      request,
      httpOptions
    );
  }

  getImageFromText(title: string): any {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.post<any>(
      this.apiUrl + '/GetImageFromProductTitle',
      { title },
      httpOptions
    );
  }

  getAssociationRules(queryParams: Params): any {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
      params: queryParams,
    };

    return this.http.get<AssociationRule[]>(
      this.apiUrl + '/Recommender/AssociationRules',
      httpOptions
    );
  }
}
