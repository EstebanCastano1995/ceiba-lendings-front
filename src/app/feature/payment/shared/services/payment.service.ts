import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../../../environments/environment';
import { Payment } from '../../shared/entities/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private api_url: string;

  constructor(private http: HttpClient) {
    this.api_url = `${environment.api_url}/private/payment`;
  }

  public createPayment(payment: Payment) {
    console.log("CREATING PAYMENT");
    console.log(payment);
    let response = this.http.post(this.api_url, JSON.stringify(payment));
    return response;
  }
}
