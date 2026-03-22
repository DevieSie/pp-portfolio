import { Component, computed, input, signal } from '@angular/core';
import { ReportItem } from '../../model/PosReport';

@Component({
  selector: 'app-summary-table',
  imports: [],
  templateUrl: './summary-table.html',
  styleUrl: './summary-table.scss',
})
export class SummaryTable {
 items = input.required<ReportItem[] | undefined>();
  title = input.required<string>();

  sortBy = signal<'name' | 'count'>('count');
  sortAsc = signal(false);

  max = computed(() => Math.max(...(this.items() || []).map(i => i.Count), 1));

  sorted = computed(() => {
    const dir = this.sortAsc() ? 1 : -1;
    return [...(this.items() || [])].sort((a, b) => {
      if (this.sortBy() === 'name') return dir * a.Name.localeCompare(b.Name);
      return dir * (a.Count - b.Count);
    });
  });

  toggleSort(col: 'name' | 'count') {
    if (this.sortBy() === col) this.sortAsc.update(v => !v);
    else { this.sortBy.set(col); this.sortAsc.set(col === 'name'); }
  }

  sortIcon(col: 'name' | 'count') {
    if (this.sortBy() !== col) return '↕';
    return this.sortAsc() ? '↑' : '↓';
  }
}