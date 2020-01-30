import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private api_url: string;

  constructor(private http: HttpClient) {
    this.api_url = `${environment.api_url}/private/authenticate`;
  }

  login(username: string, password: string): Observable<any> {
    let api_authenticate = `${this.api_url}?username=${username}&password=${password}`;
    return this.http.post(api_authenticate, { "username": username, "password": password });
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('authorizationToken');
  }

  validateCurrentUser(): Boolean {
    if (localStorage.getItem('authorizationToken') !== undefined && localStorage.getItem('authorizationToken') !== null)
      return true;
    else
      return false;
  }
}
