import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../shared/services/client.service';
import { Client } from '../../../shared/entities/Client';
import { Lending } from '../../../shared/entities/Lending';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LendingService } from '../../../shared/services/lending.service';
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-lending',
  templateUrl: './create-lending.component.html',
  styleUrls: ['./create-lending.component.scss']
})
export class CreateLendingComponent implements OnInit {

  clientsList: Client[];

  lendingForm: FormGroup;

  navigated: Boolean;

  displaymessage: Boolean;

  responsemessage: string;

  resultOperation: Boolean;

  dataLending: any;

  selectedClient: Client;

  todayDate: any;

  constructor(private translate: TranslateService, private clientService: ClientService,
    private lendingService: LendingService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.todayDate = new Date().toJSON().split('T')[0];
    this.navigated = false;
    this.selectedClient = new Client();

    this.lendingForm = new FormGroup({
      clientid: new FormControl(null, [Validators.required]),
      lendingvalue: new FormControl(null, [Validators.required]),
      lendingreturndate: new FormControl(null, [Validators.required]),
    });

    this.checkParams();

      this.clientService.getClients().subscribe(
        response => {
          let result = response.json();
          if (result) {
            this.clientsList = result;
          } else {
            this.showMessageResponse(false, this.translate.instant('alerts.get.cliente'));
          }
        },
        err => {
          console.log(err);
          this.showMessageResponse(false, JSON.parse(err._body).message);
        }
      );
    
  }

  createLending() {

    let controls = this.lendingForm.controls;
    if (this.lendingForm.invalid) {
      Object.keys(controls).forEach(controlName => {
        if (controls[controlName].invalid)
          controls[controlName].setValue(null);
      });
      return;
    }

    if (this.navigated) {
      this.updateLending();
    }
    else {

      let lending = new Lending();
      lending.clientid = new Client();
      lending.clientid.id = controls["clientid"].value;
      lending.lendingreturndate = this.convertDate(controls["lendingreturndate"].value);
      lending.lendingvalue = controls["lendingvalue"].value;
      lending.lendingdate = new Date();

      lending=this.assignClient(lending);

      this.lendingService.createLending(lending).subscribe(data => {
        let result = data;
        if (result) {
          console.log(result);
          this.showMessageResponse(true, this.translate.instant('alerts.create.prestamo'));
        }
      }, err => {
        console.log(err);
        this.showMessageResponse(false, JSON.parse(err._body).message);
      });
    }
  }

  updateLending() {
    let controls = this.lendingForm.controls;
    let lending = new Lending();
    lending.lendingreturndate = this.convertDate(controls["lendingreturndate"].value);
    lending.lendingvalue = controls["lendingvalue"].value;
    lending.clientid = controls["clientid"].value;

    lending.lendingdate = this.convertDate(this.dataLending.lendingdate);
    lending.id = this.dataLending.id;

    this.lendingService.updateLending(lending).subscribe(data => {
      let result = data;
      console.log(result);
      if (result) {
        this.showMessageResponse(true, this.translate.instant('alerts.update.prestamo'));
      }
    }, err => {
        console.log(err);
        this.showMessageResponse(false, JSON.parse(err._body).message);
    });
  }

  private checkParams() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        let data = null;
        if (params['lendingdata']) {
          this.navigated = true;
          data = JSON.parse(params['lendingdata']);
        }
        else
          this.navigated = false;

        if (this.navigated) {
          this.navigated = true;
          this.lendingForm.controls['lendingvalue'].setValue(data.lendingvalue);
          this.lendingForm.controls['lendingreturndate'].setValue(data.lendingreturndate);
          this.lendingForm.controls['clientid'].setValue(data.clientid);
          this.dataLending = {};
          this.dataLending.id = data.id;
          this.dataLending.lendingdate = data.lendingdate;
          this.selectedClient = data.clientid;

        } else {
          this.selectedClient = new Client();
          this.lendingForm.controls['lendingvalue'].setValue(null);
          this.lendingForm.controls['lendingreturndate'].setValue(null);
          this.lendingForm.controls['clientid'].setValue(null);
        }
      }
    )
  }

  private assignClient(lending: Lending): Lending {
    this.clientsList.forEach(client => {
      if (client.id == lending.clientid.id) {
        lending.clientid = client;
      }
    });
    return lending;
  }


  private showMessageResponse(result: boolean, response: string) {
    this.displaymessage = true;
    this.responsemessage = response;
    this.resultOperation = result;
    setTimeout(() => {
      if (result)
        this.router.navigate(["/home/lending/list"]);
      else
        this.displaymessage = false;
    }, 4000);
  }

  private onClientsChange(idClient:number) {
    this.clientsList.forEach(client => {
      if (client.id == idClient) {
        this.selectedClient = client;
      }
    });
  }

  private convertDate(dateS: String): Date {
    let dateArray = dateS.split("-");
    let year = parseInt(dateArray[0]);
    let month = parseInt(dateArray[1], 10) - 1;
    var day = parseInt(dateArray[2]);
    var _entryDate = new Date(year, month, day);
    return _entryDate;
  }

}
