import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../core/services/client.service';
import { Client } from '../../shared/Client';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-create-lending',
  templateUrl: './create-lending.component.html',
  styleUrls: ['./create-lending.component.scss']
})
export class CreateLendingComponent implements OnInit {

  clientsList: Client[];

  lendingForm: FormGroup;


  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.lendingForm = new FormGroup({
      clientid: new FormControl("clientid", [Validators.required]),
      lendingvalue: new FormControl("lendingvalue", [Validators.required]),
      lendingreturndate: new FormControl("lendingreturndate", [Validators.required])
    });

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
