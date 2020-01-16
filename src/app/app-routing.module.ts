import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { ClientComponent } from './feature/client/client.component';
import { PaymentComponent } from './feature/payment/payment.component';
import { LayoutComponent } from './feature/layout/layout.component';
import { LendingComponent } from './feature/lending/lending.component';
import { CreateClientComponent } from './feature/create-client/create-client.component';
import { CreateLendingComponent } from './feature/create-lending/create-lending.component';


const routes: Routes = [
  { path: "", redirectTo: "home/dashboard", pathMatch: 'full' },
  {
    path: "home",
    component: LayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "client", component: ClientComponent },
      { path: "client/create", component: CreateClientComponent },
      { path: "lending/create", component: CreateLendingComponent },
      { path: "lending", component: LendingComponent },
      { path: "payment", component: PaymentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
