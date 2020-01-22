import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../shared/services/client.service';
import { Client } from '../../../shared/entities/Client';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from '../../../core/services/alert.service';

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

  constructor(private alertService:AlertService,private translate: TranslateService,private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  deleteClient(cliente: Client) {
    this.clientService.deleteClient(cliente).subscribe(
      response => {
        if (response) {
          this.alertService.success(this.translate.instant('alerts.delete.cliente'), true);
          this.getClients();
        } else {
          this.alertService.error(this.translate.instant('alerts.delete.cliente.fail'), true);
        }
      },
      err => {
        console.log(err);
        this.alertService.error(JSON.parse(err._body).message, true);
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
          this.alertService.error(this.translate.instant('alerts.get.cliente'), true);
        }
      },
      err => {
        console.log(err);
        this.alertService.error(err, true);
      }
    );
  }
}
