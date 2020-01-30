import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { Lending } from '../../shared/entities/Lending';

@Injectable({
  providedIn: 'root'
})
export class LendingService {

  private api_url: string;

  constructor(private http: HttpClient) {
    this.api_url = `${environment.api_url}/private/lending`;
  }

  public createLending(lending: Lending) {
    console.log("CREATING LENDING");
    console.log(lending);
    let response = this.http.post(this.api_url, JSON.stringify(lending));
    return response;
  }

  public updateLending(lending: Lending) {
    console.log("UPDATING LENDING");
    console.log(lending);
    let response = this.http.put(`${this.api_url}/${lending.id}`, JSON.stringify(lending));
    return response;
  }

  public getLendings() {
    let response = this.http.get(this.api_url);
    return response;
  }
}
