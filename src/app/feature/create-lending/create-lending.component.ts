import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../core/services/client.service';
import { Client } from '../../shared/Client';
import { Lending } from '../../shared/Lending';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LendingService } from '../../core/services/lending.service';
import { UtilService } from '../../core/services/util.service';
import { Router } from "@angular/router";


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

  constructor(private utilService: UtilService, private clientService: ClientService,
    private lendingService: LendingService, private router: Router) { }

  ngOnInit() {

    this.navigated = false;

    this.lendingForm = new FormGroup({
      clientid: new FormControl("clientid", [Validators.required]),
      lendingvalue: new FormControl("lendingvalue", [Validators.required]),
      lendingreturndate: new FormControl("lendingreturndate", [Validators.required])
    });


    let data = this.utilService.getLendingToUpdate();
    if (data != null && data != undefined && data.id) {
      this.navigated = true;
      let data = this.utilService.getLendingToUpdate();
      this.lendingForm.controls['lendingvalue'].setValue(data.lendingvalue);
      this.lendingForm.controls['lendingreturndate'].setValue(data.lendingreturndate);
      this.lendingForm.controls['clientid'].setValue(data.clientid);
      this.clientsList = [];
      this.clientsList.push(data.clientid);
    }

    if (!this.navigated) {
      this.clientService.getClients().subscribe(
        response => {
          let result = response.json();
          if (result) {
            this.clientsList = result;
          } else {
            console.log('error');
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  createLending() {

    let controls = this.lendingForm.controls;
    if (this.lendingForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    if (this.navigated) {
      this.updateLending();
    }

    let lending = new Lending();
    lending.clientid = new Client();
    lending.clientid.id = controls["clientid"].value;
    lending.lendingreturndate = controls["lendingreturndate"].value;
    lending.lendingvalue = controls["lendingvalue"].value;
    lending.lendingdate = new Date();
    

    this.clientsList.forEach(client => {
      if (client.id == lending.clientid.id) {
        lending.clientid = client;
      }
    });

    this.lendingService.createLending(lending).subscribe(data => {
      let result = data;
      console.log(result);
      if (result) {
        console.log(result);
        this.utilService.setLendingToUpdate(null);
        this.showMessageResponse(true, "Préstamo creado");
      }
    }, err => {
        console.log(err);
        this.showMessageResponse(false, JSON.parse(err._body).message);
    });

  }

  updateLending() {
    let controls = this.lendingForm.controls;
    let lending = new Lending();
    lending = this.utilService.getLendingToUpdate();
    lending.lendingreturndate = controls["lendingreturndate"].value;
    lending.lendingvalue = controls["lendingvalue"].value;

    this.lendingService.updateLending(lending).subscribe(data => {
      let result = data;
      console.log(result);
      if (result) {
        this.utilService.setLendingToUpdate(null);
        this.showMessageResponse(true,"Prestamo actualizado");
      }
    }, err => {
        console.log(err);
        this.showMessageResponse(false, JSON.parse(err._body).message);
    });
  }


  private showMessageResponse(result: boolean, response: string) {
    this.displaymessage = true;
    this.responsemessage = response;
    this.resultOperation = result;
    setTimeout(() => { this.router.navigate(["/home/lending"]) }, 3000);
    
  }

  private closeMessageResponse() {
    this.displaymessage = false;
  }

}
