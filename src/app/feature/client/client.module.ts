import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './list-client/client.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: 'list',
    component: ClientComponent,
    data: {
      title: 'cliente'
    }
  },
  {
    path: 'create',
    component: CreateClientComponent,
    data: {
      title: 'cliente'
    }
  }
];

@NgModule({
  declarations: [CreateClientComponent, ClientComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class ClientModule { }
