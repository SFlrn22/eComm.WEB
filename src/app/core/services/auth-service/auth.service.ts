import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AuthRequest } from '../../models/AuthRequest';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getToken(credentials: AuthRequest): any {
    return this.http.post<any>(this.apiUrl + '/Login', credentials);
  }
}
