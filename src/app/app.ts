import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from './components/header/header';
import { BgRotatorComponent } from './components/bg-rotator/bg-rotator';
import { FooterComponent } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BgRotatorComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.html'
})
export class App {
}
