import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ClientService } from '../../../shared/services/client.service';
import { Client } from '../../../shared/entities/Client';
import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  public clientForm: FormGroup;

  displaymessage: Boolean;

  responsemessage: string;

  resultOperation: Boolean;

  constructor(private translate: TranslateService,private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.clientForm = new FormGroup({
      identification: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      birthdate: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      address_a: new FormControl(null, [Validators.required])
    });
  }

  createClient() {
    let controls = this.clientForm.controls;
    if (this.clientForm.invalid) {
      Object.keys(controls).forEach(controlName => {
        if (controls[controlName].invalid)
          controls[controlName].setValue(null);
      });
      return;
    }

    
    let client = new Client();
    client.id = controls["identification"].value;
    client.name = controls["name"].value;
    client.phone = controls["phone"].value
    client.address = controls["address_a"].value

    client.birthdate = this.convertDate(controls["birthdate"].value);

    this.clientService.createClient(client).subscribe(data => {
      let result = data;
      if (result) {
        console.log(result);
        this.showMessageResponse(true, this.translate.instant('alerts.create.cliente'));
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
    setTimeout(() => { this.router.navigate(["/home/client/list"]);}, 4000);
  }

  private convertDate(dateS:String):Date {
    let dateArray = dateS.split("-");
    let year = parseInt(dateArray[0]);
    let month = parseInt(dateArray[1], 10) - 1;
    var day = parseInt(dateArray[2]);
    var _entryDate = new Date(year, month, day);
    return _entryDate;
  }
}
