import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ClientService } from '../../core/services/client.service';
import { Client } from '../../shared/Client';

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

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientForm = new FormGroup({
      identification: new FormControl("identification", [Validators.required]),
      name: new FormControl("name", [Validators.required]),
      birthdate: new FormControl("birthdate", [Validators.required]),
      phone: new FormControl("phone", [Validators.required]),
      address: new FormControl("address", [Validators.required])
    });
  }

  createClient() {
    let controls = this.clientForm.controls;
    if (this.clientForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    let client = new Client();
    client.id = controls["identification"].value;
    client.name = controls["name"].value;
    client.phone = controls["phone"].value
    client.address = controls["address"].value
    client.birthdate = controls["birthdate"].value

    this.clientService.createClient(client).subscribe(data => {
      let result = data;
      console.log(result);
      if (result) {
        console.log(result);
        this.showMessageResponse(true, "Cliente creado");
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
    setTimeout(() => { this.displaymessage = false; }, 4000);
  }

}
