import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../core/services/payment.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Payment } from '../../shared/Payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public paymentForm: FormGroup;


  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentForm = new FormGroup({
      lendingid: new FormControl("lendingid", [Validators.required]),
      paymentdate: new FormControl("paymentdate", [Validators.required]),
      paymentvalue: new FormControl("paymentvalue", [Validators.required])
    });
  }

  createPayment() {
    let controls = this.paymentForm.controls;
    if (this.paymentForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    let payment = new Payment();
    payment.id = controls["lendingid"].value;
    payment.paymentvalue = controls["paymentvalue"].value;
    payment.paymentdate = controls["paymentdate"].value;
   

    this.paymentService.createPayment(payment).subscribe(data => {
      let result = data;
      console.log(result);
      if (result) {
        console.log(result);
      }
    }, err => {
      console.log(err);
    });
  }

}
