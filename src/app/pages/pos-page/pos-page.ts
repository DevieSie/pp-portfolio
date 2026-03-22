import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { PosReport } from '../../model/PosReport';
import { Spinner } from "../../components/spinner/spinner";
import { Report } from "../../components/report/report";

@Component({
  selector: 'app-pos-page',
  imports: [Spinner, Report],
  templateUrl: './pos-page.html',
  styleUrl: './pos-page.scss',
})
export class PosPage {
  httpClient: HttpClient = inject(HttpClient);
  isLoading = signal(false);
  reportData = signal<PosReport | null>(null);

  ngOnInit(): void {
    this.isLoading.set(true);
    this.httpClient.get('/report.json').subscribe((data) => {
      this.reportData.set(data as PosReport);
      this.isLoading.set(false);
    });
  }
}
