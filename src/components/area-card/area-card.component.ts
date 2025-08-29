
import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategicArea, PlanItem } from '../../types/strategic-plan';

@Component({
  selector: 'app-area-card',
  templateUrl: './area-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class AreaCardComponent {
  area = input.required<StrategicArea>();
  planId = input.required<string>();
  progressUpdate = output<{areaId: string, itemId: string, completed: boolean}>();
  delete = output<{planId: string, areaId: string}>();

  areaProgress = computed(() => {
    const area = this.area();
    const totalTasks = area.actionPlan.reduce((acc, phase) => acc + phase.items.length, 0);
    if (totalTasks === 0) {
      return 0;
    }
    const completedTasks = area.actionPlan.reduce((acc, phase) => 
      acc + phase.items.filter(item => item.completed).length, 0);
    return Math.round((completedTasks / totalTasks) * 100);
  });

  onTaskChange(item: PlanItem, event: Event): void {
    const input = event.target as HTMLInputElement;
    this.progressUpdate.emit({
      areaId: this.area().id,
      itemId: item.id,
      completed: input.checked
    });
  }

  onDelete(): void {
    if (confirm(`¿Estás seguro de que quieres eliminar el área "${this.area().title}"?`)) {
      this.delete.emit({ planId: this.planId(), areaId: this.area().id });
    }
  }
}