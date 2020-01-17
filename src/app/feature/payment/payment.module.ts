import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './create-payment/payment.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: 'create',
    component: PaymentComponent,
    data: {
      title: 'pago'
    }
  }
];

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule
  ]
})
export class PaymentModule { }
