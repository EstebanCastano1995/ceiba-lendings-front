import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modules
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpModule } from "@angular/http";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID } from "@angular/core";

import { ClientModule } from '../app/feature/client/client.module';
import { PaymentModule } from '../app/feature/payment/payment.module';
import { LendingModule } from '../app/feature/lending/lending.module';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { LayoutComponent } from './core/components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClientModule,
    PaymentModule,
    LendingModule
  ],
  exports: [LayoutComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "es-ES"
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
