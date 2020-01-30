import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modules
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpModule } from "@angular/http";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID } from "@angular/core";
import { HttpErrorInterceptor } from './core/interceptor/HttpErrorInterceptor';
import { HttpServiceInterceptor } from './core/interceptor/HttpServiceInterceptor';
import { JwtModule } from '@auth0/angular-jwt';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { AlertComponent } from './core/components/alert/alert.component';
import { LoginComponent } from './feature/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    AlertComponent,
    LoginComponent
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
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('authorizationToken');
        },
        whitelistedDomains: ['localhost:8443', 'localhost:4200']
      }
    }),
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [LayoutComponent, AlertComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "es-ES"
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpServiceInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
