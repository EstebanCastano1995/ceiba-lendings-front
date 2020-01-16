import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ceiba-lendings-front';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang("es");
    translate.use("es");
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
