import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { LayoutComponent } from './core/components/layout/layout.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: LayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      {
        path: "payment",
        loadChildren: () => import('./feature/payment/payment.module').then(mod => mod.PaymentModule)
      },
      {
        path: "lending",
        loadChildren: () => import('./feature/lending/lending.module').then(mod => mod.LendingModule)
      },
      {
        path: "client",
        loadChildren: () => import('./feature/client/client.module').then(mod => mod.ClientModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
