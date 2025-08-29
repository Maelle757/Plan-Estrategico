import { Injectable } from '@angular/core';
import { GoogleGenAI, Type } from '@google/genai';
import { StrategicArea } from '../types/strategic-plan';

type GeneratedArea = Omit<StrategicArea, 'id' | 'icon'>;

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private ai: GoogleGenAI | null = null;
  private readonly MODEL_NAME = 'gemini-2.5-flash';

  constructor() {
    // Safely check for process and environment variable
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      const apiKey = process.env.API_KEY;
      this.ai = new GoogleGenAI({ apiKey });
    } else {
      console.warn('Gemini API key not found. AI features will be disabled.');
    }
  }

  async generateStrategicArea(userPrompt: string): Promise<GeneratedArea> {
    if (!this.ai) {
      console.error('Gemini AI client is not initialized. Please provide an API_KEY in your environment.');
      // Return a mock error response or throw an error to be caught by the component
      throw new Error('El servicio de IA no está configurado. Por favor, revisa la configuración de la clave API.');
    }

    const systemInstruction = `
      Actúa como un consultor de gestión estratégica de élite, especializado en la industria de hidrocarburos para el mercado de habla hispana.
      Tu tarea es tomar la meta de alto nivel del usuario y convertirla en un 'Área Estratégica' completa y detallada.
      Debes generar un plan accionable y profesional que un Gerente General pueda implementar.
      La respuesta DEBE ser un objeto JSON válido que se ajuste al esquema proporcionado. No incluyas comentarios ni texto fuera del JSON.
    `;

    const schema = {
        type: Type.OBJECT,
        properties: {
            title: { type: Type.STRING, description: 'Un título claro y conciso para el área estratégica. Ejemplo: "Optimización de la Cadena de Suministro".' },
            diagnosis: { type: Type.ARRAY, items: { type: Type.STRING }, description: 'Una lista de 3 a 5 puntos clave que diagnostican la situación actual relacionada con el área.' },
            smartObjective: {
                type: Type.OBJECT,
                properties: {
                    title: { type: Type.STRING, description: 'El objetivo general resumido en una frase.'},
                    specific: { type: Type.STRING, description: 'Descripción detallada y específica de lo que se quiere lograr.' },
                    measurable: { type: Type.STRING, description: 'Métricas y números claros para medir el éxito.' },
                    achievable: { type: Type.STRING, description: 'Justificación de por qué el objetivo es realista.' },
                    relevant: { type: Type.STRING, description: 'Cómo el objetivo se alinea con las metas de la empresa.' },
                    timeBound: { type: Type.STRING, description: 'El marco de tiempo para lograr el objetivo.' }
                },
                required: ['title', 'specific', 'measurable', 'achievable', 'relevant', 'timeBound']
            },
            actionPlan: {
                type: Type.ARRAY,
                description: 'Un plan de acción dividido en 3 fases: "Primeros 90 Días", "Próximos 6 Meses", y "Próximo 1 Año".',
                items: {
                    type: Type.OBJECT,
                    properties: {
                        title: { type: Type.STRING },
                        items: { type: Type.ARRAY, items: {
                            type: Type.OBJECT,
                            properties: {
                                text: { type: Type.STRING, description: 'La descripción de la tarea a realizar.' }
                            },
                            required: ['text']
                        } }
                    },
                    required: ['title', 'items']
                }
            },
            kpis: { type: Type.ARRAY, items: { type: Type.STRING }, description: 'Lista de 4 a 6 Indicadores Clave de Rendimiento (KPIs) para monitorear el progreso.' },
            resources: { type: Type.ARRAY, items: { type: Type.STRING }, description: 'Lista de los recursos necesarios para ejecutar el plan.' },
            risks: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        risk: { type: Type.STRING, description: 'Descripción de un riesgo potencial.' },
                        mitigation: { type: Type.STRING, description: 'La estrategia de mitigación para ese riesgo.' }
                    },
                    required: ['risk', 'mitigation']
                }
            }
        },
        required: ['title', 'diagnosis', 'smartObjective', 'actionPlan', 'kpis', 'resources', 'risks']
    };

    try {
      const response = await this.ai.models.generateContent({
        model: this.MODEL_NAME,
        contents: `Genera un área estratégica completa basada en esta meta: "${userPrompt}"`,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.8,
          responseMimeType: "application/json",
          responseSchema: schema,
        },
      });
      
      const jsonText = response.text.trim();
      return JSON.parse(jsonText) as GeneratedArea;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      throw new Error('The request to the AI service failed. See console for more details.');
    }
  }
}