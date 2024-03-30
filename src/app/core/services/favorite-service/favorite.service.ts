import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { AddToFavoritesRequest } from '../../models/AddToFavoritesRequest';
import { CookieHelperService } from '../cookie-helper-service/cookie-helper.service';
import { Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  apiUrl: string = environment.apiUrl;
  private favoritesISBN: string[] = [];
  constructor(
    private http: HttpClient,
    private cookieHelper: CookieHelperService
  ) {}

  getFavoritesArray(): string[] {
    return this.favoritesISBN;
  }
  setFavoritesArray(arr: string[]) {
    this.favoritesISBN = arr;
  }

  addToFavoriteArray(item: string) {
    this.favoritesISBN.push(item);
  }

  removeFromFavoriteArray(item: string) {
    this.favoritesISBN.splice(this.favoritesISBN.indexOf(item), 1);
  }

  getFavoritesInfo(): any {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
    };
    return this.http.get<any>(
      this.apiUrl + '/GetFavoriteProductsInformation',
      httpOptions
    );
  }

  getFavorites(): any {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
    };
    return this.http.get<any>(this.apiUrl + '/GetFavorites', httpOptions);
  }

  addToFavorites(request: AddToFavoritesRequest) {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.cookieHelper.getCookies('jwt'),
    });

    const httpOptions = {
      headers: headers_object,
    };
    return this.http.post<any>(
      this.apiUrl + '/FavoriteHandler',
      request,
      httpOptions
    );
  }
}
