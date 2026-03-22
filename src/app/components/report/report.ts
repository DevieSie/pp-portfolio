import { Component, computed, input } from '@angular/core';
import { PosReport } from '../../model/PosReport';
import { ProgressBar } from "../progress-bar/progress-bar";
import { Carousel } from '../carousel/carousel';
import { SummaryTable } from '../summary-table/summary-table';

@Component({
  selector: 'app-report',
  imports: [ProgressBar, Carousel, SummaryTable],
  templateUrl: './report.html',
  styleUrl: './report.scss',
})
export class Report {
  report = input.required<PosReport|null>();
  remaining = computed(() => (this.report()?.TotallyOwned ?? 0) - (this.report()?.Completed ?? 0) - (this.report()?.Revoked ?? 0) - (this.report()?.NES ?? 0));  
}
