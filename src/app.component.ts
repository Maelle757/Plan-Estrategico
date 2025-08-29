
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { STRATEGIC_PLANS_DATA } from './data/strategic-plan.data';
import { StrategicArea, StrategicPlan } from './types/strategic-plan';
import { AreaCardComponent } from './components/area-card/area-card.component';
import { ObjectiveGeneratorComponent } from './components/objective-generator/objective-generator.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';

type GeneratedArea = Omit<StrategicArea, 'id' | 'icon'>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AreaCardComponent, ObjectiveGeneratorComponent, PlanCardComponent],
})
export class AppComponent {
  strategicPlans = signal<StrategicPlan[]>(STRATEGIC_PLANS_DATA);
  selectedPlanId = signal<string | null>(null);

  private defaultIcons = [
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12M3.75 3.75h16.5M3.75 12h16.5m-16.5 4.5h16.5" /></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-4.663M12 10.5h.008v.008H12V10.5Z" /></svg>`,
  ];

  totalTasks = computed(() => {
    return this.strategicPlans().reduce((planAcc, plan) =>
      planAcc + plan.areas.reduce((areaAcc, area) =>
        areaAcc + area.actionPlan.reduce((phaseAcc, phase) => phaseAcc + phase.items.length, 0), 0), 0);
  });

  completedTasks = computed(() => {
    return this.strategicPlans().reduce((planAcc, plan) =>
      planAcc + plan.areas.reduce((areaAcc, area) =>
        areaAcc + area.actionPlan.reduce((phaseAcc, phase) =>
          phaseAcc + phase.items.filter(item => item.completed).length, 0), 0), 0);
  });

  overallProgress = computed(() => {
    const total = this.totalTasks();
    if (total === 0) return 0;
    return Math.round((this.completedTasks() / total) * 100);
  });

  plansWithProgress = computed(() => {
    return this.strategicPlans().map(plan => {
      const totalTasks = plan.areas.reduce((areaAcc, area) =>
        areaAcc + area.actionPlan.reduce((phaseAcc, phase) => phaseAcc + phase.items.length, 0), 0);

      const completedTasks = plan.areas.reduce((areaAcc, area) =>
        areaAcc + area.actionPlan.reduce((phaseAcc, phase) =>
          phaseAcc + phase.items.filter(item => item.completed).length, 0), 0);

      const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

      return { ...plan, progress };
    });
  });

  selectedPlan = computed(() => {
    const selectedId = this.selectedPlanId();
    if (!selectedId) {
      return null;
    }
    return this.plansWithProgress().find(p => p.id === selectedId) ?? null;
  });
  
  selectPlan(planId: string): void {
    this.selectedPlanId.set(planId);
  }

  deselectPlan(): void {
    this.selectedPlanId.set(null);
  }

  handleProgressUpdate(updatedItem: { areaId: string; itemId: string; completed: boolean }): void {
    this.strategicPlans.update(currentPlans => {
      return currentPlans.map(plan => ({
        ...plan,
        areas: plan.areas.map(area => {
          if (area.id === updatedItem.areaId) {
            return {
              ...area,
              actionPlan: area.actionPlan.map(phase => ({
                ...phase,
                items: phase.items.map(item =>
                  item.id === updatedItem.itemId ? { ...item, completed: updatedItem.completed } : item
                ),
              })),
            };
          }
          return area;
        }),
      }));
    });
  }

  handleAreaAdded(event: { planId: string | null; planTitle: string | null; area: GeneratedArea }): void {
    const newArea: StrategicArea = {
      ...event.area,
      id: `${event.area.title.toLowerCase().replace(/\s/g, '-')}-${Date.now()}`,
      icon: this.defaultIcons[Math.floor(Math.random() * this.defaultIcons.length)],
      actionPlan: event.area.actionPlan.map(phase => ({
        ...phase,
        items: phase.items.map((item, index) => ({
          ...item,
          id: `task-${Date.now()}-${index}`,
          completed: false
        }))
      }))
    };

    if (event.planId) { // Add to existing plan
      this.strategicPlans.update(plans =>
        plans.map(plan =>
          plan.id === event.planId ? { ...plan, areas: [...plan.areas, newArea] } : plan
        )
      );
    } else if (event.planTitle) { // Create a new plan
      const newPlan: StrategicPlan = {
        id: `${event.planTitle.toLowerCase().replace(/\s/g, '-')}-${Date.now()}`,
        title: event.planTitle,
        areas: [newArea],
      };
      this.strategicPlans.update(plans => [...plans, newPlan]);
    }
  }

  handleAreaDeleted(event: { planId: string; areaId: string }): void {
    this.strategicPlans.update(plans =>
      plans.map(plan => {
        if (plan.id === event.planId) {
          return { ...plan, areas: plan.areas.filter(area => area.id !== event.areaId) };
        }
        return plan;
      }).filter(plan => plan.areas.length > 0) // Optional: remove empty plans
    );
  }
}
