import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { environment } from '../../../environments/environment';
import { Lending } from '../../shared/Lending';

@Injectable({
  providedIn: 'root'
})
export class LendingService {

  private api_url: string;
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.api_url = environment.api_url + "/service/lending";
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  public createLending(lending: Lending) {
    let response = this.http.post(this.api_url, JSON.stringify(lending), this.options);
    return response;
  }

  public updateLending(lending: Lending) {
    let response = this.http.post(this.api_url + "/update", JSON.stringify(lending), this.options);
    return response;
  }

  public getLendings() {
    let response = this.http.get(this.api_url, this.options);
    return response;
  }
}
