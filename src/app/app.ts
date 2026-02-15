import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Header } from './components/header/header';
import { BgRotator } from './components/bg-rotator/bg-rotator';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, BgRotator, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
