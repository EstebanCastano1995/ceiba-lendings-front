import { Lending } from './Lending';

export class Payment {

  id: number;
  paymentvalue: number;
  paymentdate: Date;
  lendingid: Lending;

  constructor() {

  }
}
