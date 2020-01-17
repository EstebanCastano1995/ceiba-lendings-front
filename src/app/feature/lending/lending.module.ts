import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LendingComponent } from './list-lending/lending.component';
import { CreateLendingComponent } from './create-lending/create-lending.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: 'list',
    component: LendingComponent,
    data: {
      title: 'préstamos'
    }
  },
  {
    path: 'create',
    component: CreateLendingComponent,
    data: {
      title: 'préstamos'
    }
  }
];

@NgModule({
  declarations: [CreateLendingComponent, LendingComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule
  ]
})
export class LendingModule { }
