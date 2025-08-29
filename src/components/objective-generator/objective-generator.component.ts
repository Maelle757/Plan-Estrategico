import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GeminiService } from '../../services/gemini.service';
import { StrategicArea, StrategicPlan } from '../../types/strategic-plan';

type GeneratedArea = Omit<StrategicArea, 'id' | 'icon'>;

@Component({
  selector: 'app-objective-generator',
  templateUrl: './objective-generator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ObjectiveGeneratorComponent {
  private geminiService = inject(GeminiService);
  // FIX: Explicitly type `fb` as `FormBuilder` to prevent it from being inferred as `unknown`.
  private fb: FormBuilder = inject(FormBuilder);

  plans = input.required<StrategicPlan[]>();
  areaAdded = output<{ planId: string | null; planTitle: string | null; area: GeneratedArea }>();

  generatorForm: FormGroup;

  loading = signal(false);
  error = signal<string | null>(null);
  success = signal<string | null>(null);

  constructor() {
    this.generatorForm = this.fb.group({
      prompt: ['', [Validators.required, Validators.minLength(15)]],
      planType: ['existing', Validators.required],
      existingPlanId: [''],
      newPlanTitle: [''],
    });

    this.generatorForm.get('planType')?.valueChanges.subscribe(value => {
      const existingPlanIdControl = this.generatorForm.get('existingPlanId');
      const newPlanTitleControl = this.generatorForm.get('newPlanTitle');

      if (value === 'existing') {
        existingPlanIdControl?.setValidators([Validators.required]);
        newPlanTitleControl?.clearValidators();
      } else {
        newPlanTitleControl?.setValidators([Validators.required, Validators.minLength(3)]);
        existingPlanIdControl?.clearValidators();
      }
      existingPlanIdControl?.updateValueAndValidity();
      newPlanTitleControl?.updateValueAndValidity();
    });
  }

  async generateArea(): Promise<void> {
    if (this.generatorForm.invalid) {
      this.generatorForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.error.set(null);
    this.success.set(null);

    try {
      const formValue = this.generatorForm.value;
      const prompt = formValue.prompt ?? '';
      const result = await this.geminiService.generateStrategicArea(prompt);
      
      this.areaAdded.emit({
        planId: formValue.planType === 'existing' ? formValue.existingPlanId : null,
        planTitle: formValue.planType === 'new' ? formValue.newPlanTitle : null,
        area: result
      });

      this.success.set(`¡Nueva área "${result.title}" generada y añadida con éxito!`);
      this.generatorForm.reset({ planType: 'existing', prompt: '' });
      setTimeout(() => this.success.set(null), 5000);

    } catch (err) {
      console.error('Error generating area:', err);
      this.error.set('No se pudo generar el área estratégica. Revisa la consola para más detalles.');
      setTimeout(() => this.error.set(null), 5000);
    } finally {
      this.loading.set(false);
    }
  }

  get planType() { return this.generatorForm.get('planType'); }
  get prompt() { return this.generatorForm.get('prompt'); }
  get existingPlanId() { return this.generatorForm.get('existingPlanId'); }
  get newPlanTitle() { return this.generatorForm.get('newPlanTitle'); }

}
