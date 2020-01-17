import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../core/services/payment.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Payment } from '../../../shared/Payment';
import { Lending } from '../../../shared/Lending';
import { LendingService } from '../../../core/services/lending.service';
import { Client } from '../../../shared/Client';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public paymentForm: FormGroup;

  lendingsList: Lending[];

  displaymessage: Boolean;

  responsemessage: string;

  resultOperation: Boolean;

  selectedLending: Lending;


  constructor(private paymentService: PaymentService, private lendingsService: LendingService) { }

  ngOnInit() {
    this.selectedLending = new Lending();
    this.selectedLending.clientid = new Client();
    this.paymentForm = new FormGroup({
      lendingid: new FormControl(null, [Validators.required]),
      paymentvalue: new FormControl(null, [Validators.required])
    });

    this.lendingsService.getLendings().subscribe(
      response => {
        let result = response.json();
        if (result) {
          this.lendingsList = result;
        } else {
          console.log('error');
          this.showMessageResponse(false, "Error obteniendo prestamos");
        }
      },
      err => {
        console.log(err);
        this.showMessageResponse(false, JSON.parse(err._body).message);
      }
    );
  }

  createPayment() {
    let controls = this.paymentForm.controls;
    if (this.paymentForm.invalid) {
      Object.keys(controls).forEach(controlName => {
        if (this.paymentForm[controlName].invalid)
          controls[controlName].setValue(null);
      });
      return;
    }

    let payment = new Payment();
    payment.lendingid = new Lending();
    payment.lendingid.id = controls["lendingid"].value;
    payment.paymentvalue = controls["paymentvalue"].value;
    payment.paymentdate = new Date();

    this.lendingsList.forEach(lending => {
      if (lending.id == payment.lendingid.id) {
        payment.lendingid = lending;
      }
    });

    this.paymentService.createPayment(payment).subscribe(data => {
      let result = data;
      if (result) {
        console.log(result);
        this.showMessageResponse(true, "Se ha registrado el pago");
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
    setTimeout(() => { this.displaymessage = false; }, 4000);
  }

  private onLendingChange(lendingId: number) {
    this.lendingsList.forEach(lending => {
      if (lending.id == lendingId) {
        this.selectedLending = lending;
      }
    });
  }

}
