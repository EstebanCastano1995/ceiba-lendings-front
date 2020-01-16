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
      }
    }, err => {
      console.log(err);
   
    });
  }

}
