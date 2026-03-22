import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
})
export class ProgressBar {
  owned = input.required<number>();
  completed = input.required<number>();
  revoked = input.required<number>();
  nes = input.required<number>()
  remaining = input.required<number>();

  completedPercentage = computed(() => this.calculatePercentage(this.completed()));
  revokedPercentage = computed(() => this.calculatePercentage(this.revoked()));
  nesPercentage = computed(() => this.calculatePercentage(this.nes()));
  remainingPercentage = computed(() => this.calculatePercentage(this.remaining()));

  private calculatePercentage(val: number) {
    const total = this.owned() ?? 0;
    return total > 0 ? Math.round((val / total) * 100) : 0;
  }
}