import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Client } from '../../shared/Client';
import { environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private api_url: string;
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.api_url = environment.api_url + "/service/client";
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  public createClient(client: Client) {
    console.log("CREATING CLIENT");
    console.log(client);
    let response = this.http.post(this.api_url, JSON.stringify(client), this.options);
    return response;
  }

  public deleteClient(client: Client) {
    let response = this.http.post(this.api_url + "/delete", JSON.stringify(client), this.options);
    return response;
  }

  public getClients() {
    let response = this.http.get(this.api_url, this.options);
    return response;
  }
}
