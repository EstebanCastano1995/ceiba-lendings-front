import { Lending } from './../../../../shared/entities/Lending';

export class Payment {

  id: number;
  paymentvalue: number;
  paymentdate: Date;
  lendingid: Lending;

  constructor() {

  }
}
