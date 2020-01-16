import { Injectable } from '@angular/core';
import { Lending } from '../../shared/Lending';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private lendingToUpdate: Lending;
  private LendingToPay: Lending;


  constructor() { }

  public setLendingToUpdate(lending: Lending) {
    this.lendingToUpdate = lending;
  }

  public getLendingToUpdate(): any {
    return this.lendingToUpdate;
  }

  public setLendingToPay(lending: Lending) {
    this.LendingToPay = lending;
  }

  public getLendingToPay(): any {
    return this.LendingToPay;
  }
}
