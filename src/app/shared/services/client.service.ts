import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Client } from '../../shared/entities/Client';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private api_url: string;

  constructor(private http: HttpClient) {
    this.api_url = `${environment.api_url}/private/client`;
  }

  public createClient(client: Client) {
    console.log("CREATING CLIENT");
    console.log(client);
    let response = this.http.post(this.api_url, JSON.stringify(client));
    return response;
  }

  public deleteClient(client: Client) {
    let response = this.http.delete(`${this.api_url}/${client.id}`);
    return response;
  }

  public getClients() {
    let response = this.http.get(this.api_url);
    return response;
  }
}
