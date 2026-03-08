import { Component } from '@angular/core';
import { QuoteComponent } from '../../components/quote/quote';

@Component({
  selector: 'app-main-page',
  imports: [ QuoteComponent ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
