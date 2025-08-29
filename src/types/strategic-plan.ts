
export interface PlanItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface PlanPhase {
  title: string;
  items: PlanItem[];
}

export interface StrategicArea {
  id: string;
  title: string;
  icon: string;
  diagnosis: string[];
  smartObjective: {
    title: string;
    specific: string;
    measurable: string;
    achievable: string;
    relevant: string;
    timeBound: string;
  };
  actionPlan: PlanPhase[];
  kpis: string[];
  resources: string[];
  risks: {
    risk: string;
    mitigation: string;
  }[];
}

export interface StrategicPlan {
  id: string;
  title: string;
  areas: StrategicArea[];
}