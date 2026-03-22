import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReportGame } from '../../model/PosReport';

@Component({
  selector: 'app-carousel',
  imports: [DatePipe],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  games = input.required<ReportGame[] | undefined>();
  title = input.required<string>();
  dateField = input<'BoughtOn' | 'CompletedOn'>('BoughtOn');
}
