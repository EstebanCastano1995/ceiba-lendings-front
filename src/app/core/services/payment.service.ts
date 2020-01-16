import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { environment } from '../../../environments/environment';
import { Payment } from '../../shared/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private api_url: string;
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.api_url = environment.api_url + "/service/payment";
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  public createPayment(payment: Payment) {
    let response = this.http.post(this.api_url, JSON.stringify(payment), this.options);
    return response;
  }
}
