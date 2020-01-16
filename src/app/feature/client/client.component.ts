import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../core/services/client.service';
import { Client } from '../../shared/Client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clientsList: Client[];

  displaymessage: Boolean;

  responsemessage: string;

  resultOperation: Boolean;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  deleteClient(cliente: Client) {
    this.clientService.deleteClient(cliente).subscribe(
      response => {
        if (response) {
          this.showMessageResponse(true, "Cliente eliminado");
          this.getClients();
        } else {
          this.showMessageResponse(false, "Errror deleteting client");
        }
      },
      err => {
        console.log(err);
        this.showMessageResponse(false, JSON.parse(err._body).message);
      }
    );
  }

  private getClients() {
    this.clientService.getClients().subscribe(
      response => {
        let result = response.json();
        if (result) {
          this.clientsList = result;
        } else {
          console.log('error');
          this.showMessageResponse(false, "Errror getting clients");
        }
      },
      err => {
        console.log(err);
        this.showMessageResponse(false, err);
      }
    );
  }

  private showMessageResponse(result: boolean, response: string) {
    this.displaymessage = true;
    this.responsemessage = response;
    this.resultOperation = result;
    setTimeout(() => { this.displaymessage = false; }, 4000);
  }

}
