import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../shared/services/payment.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Payment } from '../../../shared/entities/Payment';
import { Lending } from '../../../shared/entities/Lending';
import { LendingService } from '../../../shared/services/lending.service';
import { Client } from '../../../shared/entities/Client';
import { TranslateService } from '@ngx-translate/core';
import { Router} from "@angular/router";

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


  constructor(private router: Router,private translate: TranslateService, private paymentService: PaymentService, private lendingsService: LendingService) { }

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
          this.showMessageResponse(false, this.translate.instant('alerts.get.prestamo'));
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
        this.showMessageResponse(true, this.translate.instant('alerts.create.pago'));
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
    setTimeout(() => { this.router.navigate(["/home/lending/list"]); }, 4000);
  }

  private onLendingChange(lendingId: number) {
    this.lendingsList.forEach(lending => {
      if (lending.id == lendingId) {
        this.selectedLending = lending;
      }
    });
  }

}
