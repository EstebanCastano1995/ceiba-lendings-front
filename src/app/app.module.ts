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

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { ClientComponent } from './feature/client/client.component';
import { PaymentComponent } from './feature/payment/payment.component';
import { LayoutComponent } from './feature/layout/layout.component';
import { LendingComponent } from './feature/lending/lending.component';
import { CreateClientComponent } from './feature/create-client/create-client.component';
import { CreateLendingComponent } from './feature/create-lending/create-lending.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    PaymentComponent,
    LayoutComponent,
    LendingComponent,
    CreateClientComponent,
    CreateLendingComponent
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
