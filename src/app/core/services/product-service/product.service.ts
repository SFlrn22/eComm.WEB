import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Product } from '../../models/Product';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTopTen(): any {
    return this.http.get<Product[]>(this.apiUrl + '/Recommender/GetTopTen');
  }

  getProducts(queryParams: Params): any {
    return this.http.get<Product[]>(this.apiUrl + '/GetProducts', {
      params: queryParams,
    });
  }
}
