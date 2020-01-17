import { Component, OnInit } from '@angular/core';
import { LendingService } from '../../../core/services/lending.service';
import { Lending } from '../../../shared/Lending';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.scss']
})
export class LendingComponent implements OnInit {

  lendingsList: Lending[];

  constructor(private lendingService: LendingService, private router: Router) { }

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
    this.router.navigate(["/home/lending/create"], { queryParams: { lendingdata: JSON.stringify(lending) } });
  }

}
