
import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategicPlan } from '../../types/strategic-plan';

export type PlanWithProgress = StrategicPlan & { progress: number };

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class PlanCardComponent {
  plan = input.required<PlanWithProgress>();
  select = output<string>();

  onSelect(): void {
    this.select.emit(this.plan().id);
  }
}
