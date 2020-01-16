import { Component, OnInit } from '@angular/core';
import { LendingService } from '../../core/services/lending.service';
import { UtilService } from '../../core/services/util.service';
import { Lending } from '../../shared/Lending';
import { Router } from "@angular/router";

@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.scss']
})
export class LendingComponent implements OnInit {

  lendingsList: Lending[];

  constructor(private utilService: UtilService, private lendingService: LendingService, private router: Router) { }

  ngOnInit() {
    this.lendingService.getLendings().subscribe(
      response => {
        let result = response.json();
        if (result) {
          this.lendingsList = result;
        } else {
          console.log('error');
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  updateLending(lending: Lending) {
    this.utilService.setLendingToUpdate(lending);
    this.router.navigate(["/home/lending/create"]);
  }

}
