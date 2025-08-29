import { StrategicPlan } from '../types/strategic-plan';

const STRATEGIC_AREAS = [
  {
    id: 'comercial',
    title: 'Área Comercial',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>`,
    diagnosis: [
      'Revisar informes históricos de ventas y proyecciones.',
      'Auditar el proceso comercial actual y mapear el flujo de venta.',
      'Evaluar el estado y funcionalidad del sistema CRM existente.',
      'Realizar encuestas y entrevistas a clientes clave para identificar necesidades y niveles de satisfacción.',
      'Analizar estrategias de la competencia y posicionamiento de mercado.',
      'Entrevistar al equipo comercial para entender desafíos, fortalezas y oportunidades internas.'
    ],
    smartObjective: {
      title: 'Incrementar la captación de nuevos clientes y fortalecer la retención de clientes actuales.',
      specific: 'Incrementar la captación de nuevos clientes y fortalecer la retención de clientes actuales.',
      measurable: 'Aumentar en un 15% el número de nuevos clientes y reducir la tasa de churn en un 10% (comparado con el año anterior).',
      achievable: 'Es alcanzable mediante la optimización de procesos, capacitación del equipo y mejora en el uso de herramientas CRM.',
      relevant: 'Contribuirá directamente al crecimiento sostenido de ingresos y a la consolidación de la cuota de mercado.',
      timeBound: 'En los próximos 12 meses.'
    },
    actionPlan: [
      {
        title: 'Primeros 90 Días',
        items: [
          { id: 'c1', text: 'Implementar un programa intensivo de capacitación en técnicas de venta y manejo avanzado de CRM.', completed: true },
          { id: 'c2', text: 'Definir, documentar y socializar el nuevo proceso de ventas estandarizado.', completed: true },
          { id: 'c3', text: 'Lanzar una campaña piloto de prospección de clientes con ofertas segmentadas.', completed: false },
          { id: 'c4', text: 'Establecer un sistema de seguimiento proactivo y personalizado con los 20% de clientes clave (Pareto).', completed: false }
        ]
      },
      {
        title: 'Próximos 6 Meses',
        items: [
          { id: 'c5', text: 'Optimizar el sistema CRM con funcionalidades adicionales (automatización de marketing, reportes personalizados).', completed: false },
          { id: 'c6', text: 'Desarrollar y lanzar un programa de fidelización de clientes basado en valor añadido.', completed: false },
          { id: 'c7', text: 'Expandir la prospección hacia nuevos segmentos de mercado identificados en el diagnóstico.', completed: false },
          { id: 'c8', text: 'Analizar los resultados de las campañas iniciales y ajustar las estrategias de captación y retención.', completed: false }
        ]
      },
      {
        title: 'Próximo 1 Año',
        items: [
          { id: 'c9', text: 'Consolidar la base de clientes y asegurar el cumplimiento de la cuota de mercado establecida.', completed: false },
          { id: 'c10', text: 'Evaluar la introducción de nuevos productos o servicios complementarios al portafolio actual.', completed: false },
          { id: 'c11', text: 'Establecer un comité de estrategia comercial para revisión trimestral de resultados y planificación a largo plazo.', completed: false }
        ]
      }
    ],
    kpis: [ 'Número de nuevos clientes adquiridos.', 'Tasa de retención de clientes.', 'Valor de vida del cliente (CLV).', 'Costo de adquisición de cliente (CAC).', 'Volumen de ventas mensuales por producto/segmento.', 'Nivel de uso y adopción del CRM por el equipo.' ],
    resources: [ 'Equipo comercial capacitado.', 'Licencias y funcionalidades avanzadas de CRM.', 'Presupuesto para campañas de marketing y prospección.', 'Analista de datos comerciales para seguimiento de performance.' ],
    risks: [
      { risk: 'Resistencia del equipo comercial a los nuevos procesos y herramientas.', mitigation: 'Comunicación clara de beneficios, capacitación continua, incentivos por adopción y logro de objetivos.' },
      { risk: 'Competencia agresiva en precios en el mercado de hidrocarburos.', mitigation: 'Diferenciación por valor añadido (calidad, servicio, tiempos de entrega), análisis de precios de mercado constante y estrategias de pricing dinámicas.' }
    ]
  },
  {
    id: 'financiera',
    title: 'Administración Financiera',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75" /></svg>`,
    diagnosis: [
      'Auditar los estados financieros de los últimos 2 años.',
      'Revisar las políticas y procedimientos actuales de crédito y cobranza.',
      'Analizar la composición y antigüedad de la cartera vencida.',
      'Identificar los productos/servicios con mayor y menor rentabilidad.',
      'Realizar un análisis detallado de la estructura de costos.',
      'Entrevistar al personal del área financiera y contable.'
    ],
    smartObjective: {
      title: 'Mejorar la rentabilidad operativa y reducir la cartera de clientes con pagos atrasados.',
      specific: 'Mejorar la rentabilidad operativa y reducir significativamente la cartera de clientes con pagos atrasados.',
      measurable: 'Incrementar el margen de utilidad neta en 5% y reducir el valor total de la cartera vencida en un 20%.',
      achievable: 'Es factible mediante la optimización de la gestión de costos, la mejora en los procesos de cobranza y una política crediticia más rigurosa.',
      relevant: 'Es crítico para la sostenibilidad financiera, la capacidad de inversión y el crecimiento a largo plazo de la empresa.',
      timeBound: 'En los próximos 6 meses.'
    },
    actionPlan: [
      {
        title: 'Primeros 90 Días',
        items: [
          { id: 'f1', text: 'Implementar un comité de seguimiento de cartera vencida con reuniones semanales.', completed: true },
          { id: 'f2', text: 'Revisar y ajustar las políticas de crédito para nuevos clientes y aquellos con historial de riesgo.', completed: false },
          { id: 'f3', text: 'Realizar un análisis de costos por centro de beneficio y por producto.', completed: false },
          { id: 'f4', text: 'Negociar mejores condiciones y descuentos con proveedores clave.', completed: false },
          { id: 'f5', text: 'Implementar un sistema de presupuesto y control de gastos más riguroso.', completed: false }
        ]
      },
      {
        title: 'Próximos 6 Meses',
        items: [
          { id: 'f6', text: 'Establecer objetivos de rentabilidad específicos para cada producto/servicio.', completed: false },
          { id: 'f7', text: 'Desarrollar y ejecutar un plan de recuperación de cartera vencida.', completed: false },
          { id: 'f8', text: 'Explorar opciones de financiación o refinanciación para optimizar la estructura de capital.', completed: false },
          { id: 'f9', text: 'Revisar y automatizar procesos contables y de facturación.', completed: false }
        ]
      },
      {
        title: 'Próximo 1 Año',
        items: [
          { id: 'f10', text: 'Evaluar e implementar un sistema de gestión financiera (ERP) integrado.', completed: false },
          { id: 'f11', text: 'Establecer un modelo de proyección financiera a mediano y largo plazo.', completed: false },
          { id: 'f12', text: 'Explorar la diversificación de fuentes de ingresos o estrategias de eficiencias fiscales.', completed: false }
        ]
      }
    ],
    kpis: [ 'Margen de utilidad bruta y neta.', 'Días de Cartera (DSO).', 'Porcentaje de cartera vencida.', 'Rotación de activos.', 'Rentabilidad sobre la Inversión (ROI).', 'Variación presupuestal vs. real.' ],
    resources: [ 'Software de gestión financiera o módulos ERP.', 'Equipo financiero y contable capacitado.', 'Asesoría legal para recuperación de cartera.', 'Presupuesto para capacitación y tecnología.' ],
    risks: [
      { risk: 'Resistencia de clientes a nuevas políticas de crédito y cobranza.', mitigation: 'Comunicación clara y anticipada, ofrecer planes de pago flexibles y analizar casos específicos.' },
      { risk: 'Aumento inesperado de los costos de los hidrocarburos (Diesel y Gasolina).', mitigation: 'Establecer contratos a largo plazo, explorar estrategias de cobertura de precios y diversificar fuentes de suministro.' }
    ]
  },
  {
    id: 'inventarios',
    title: 'Gestión de Inventarios',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`,
    diagnosis: [
        'Realizar un inventario físico exhaustivo para validar la precisión.',
        'Evaluar el sistema actual de control de inventarios.',
        'Analizar el historial de rotación, obsolescencia y mermas.',
        'Calcular los costos asociados al mantenimiento de inventarios.',
        'Mapear el flujo completo de entrada y salida de productos.'
    ],
    smartObjective: {
        title: 'Optimizar los niveles de inventario y reducir costos de almacenamiento.',
        specific: 'Optimizar los niveles de inventario para eliminar excesos y faltantes, y reducir los costos asociados al almacenamiento.',
        measurable: 'Reducir los costos de almacenamiento en un 15% y disminuir la varianza entre el inventario físico y el registrado a menos del 2%.',
        achievable: 'Es alcanzable mediante la implementación de mejores prácticas, tecnología de gestión y capacitación del personal.',
        relevant: 'Aumentará la eficiencia operativa, liberará capital de trabajo y mejorará el flujo de caja.',
        timeBound: 'En los próximos 9 meses.'
    },
    actionPlan: [
        {
            title: 'Primeros 90 Días',
            items: [
                { id: 'i1', text: 'Implementar un sistema de inventario cíclico.', completed: true },
                { id: 'i2', text: 'Clasificar los productos del inventario por método ABC.', completed: true },
                { id: 'i3', text: 'Establecer puntos de reorden y cantidades económicas de pedido (EOQ).', completed: true },
                { id: 'i4', text: 'Capacitar al personal en el uso del sistema y mejores prácticas.', completed: false }
            ]
        },
        {
            title: 'Próximos 6 Meses',
            items: [
                { id: 'i5', text: 'Integrar el sistema de inventarios con compras y ventas.', completed: false },
                { id: 'i6', text: 'Explorar la implementación de tecnologías como RFID o códigos de barras.', completed: false },
                { id: 'i7', text: 'Negociar con proveedores para reducir los tiempos de entrega.', completed: false },
                { id: 'i8', text: 'Optimizar el layout del almacén.', completed: false }
            ]
        },
        {
            title: 'Próximo 1 Año',
            items: [
                { id: 'i9', text: 'Implementar un sistema de pronóstico de demanda avanzado.', completed: false },
                { id: 'i10', text: 'Evaluar la automatización de procesos de almacenamiento y despacho.', completed: false },
                { id: 'i11', text: 'Establecer métricas de rendimiento para proveedores.', completed: false }
            ]
        }
    ],
    kpis: ['Rotación de inventario.', 'Días de inventario.', 'Precisión del inventario.', 'Costo de almacenamiento.', 'Pedidos atrasados por falta de stock.', 'Nivel de servicio al cliente.'],
    resources: ['Sistema WMS o módulo ERP.', 'Equipos de escaneo.', 'Personal capacitado.', 'Presupuesto para mejoras de infraestructura.'],
    risks: [
        { risk: 'Variabilidad inesperada en la demanda de hidrocarburos.', mitigation: 'Mejorar los pronósticos, establecer acuerdos flexibles y mantener un stock de seguridad estratégico.' },
        { risk: 'Obsolescencia o deterioro del producto almacenado.', mitigation: 'Implementar política FIFO/FEFO, monitorear fechas y acelerar la rotación.' }
    ]
  },
  {
      id: 'logistica',
      title: 'Logística y Operaciones',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875M10.5 6h3m-3 0h-3m3 0-3 3m3-3 3 3m-3-3V2.25a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3.75m-7.5 0V2.25a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5v3.75m7.5 0v3.75m-7.5-3.75v3.75" /></svg>`,
      diagnosis: [
          'Mapear y documentar todos los procesos logísticos.',
          'Analizar los tiempos de ciclo de entrega y cuellos de botella.',
          'Realizar auditorías de calidad en el proceso de carga, transporte y descarga.',
          'Evaluar el estado, eficiencia y capacidad de la flota de transporte.',
          'Recopilar feedback de clientes sobre la calidad y puntualidad.',
          'Entrevistar al personal clave de operaciones y logística.'
      ],
      smartObjective: {
          title: 'Mejorar la eficiencia logística y la calidad del servicio de entrega.',
          specific: 'Mejorar la eficiencia general de los procesos logísticos y la calidad del servicio de entrega al cliente.',
          measurable: 'Reducir los tiempos de entrega promedio en un 15% y disminuir las quejas de clientes relacionadas con la logística en un 25%.',
          achievable: 'Es viable mediante la optimización de rutas, el mantenimiento preventivo de la flota y la capacitación del personal.',
          relevant: 'Fortalecerá la satisfacción del cliente, mejorará la reputación y generará eficiencias operativas.',
          timeBound: 'En los próximos 6 meses.'
      },
      actionPlan: [
          {
              title: 'Primeros 90 Días',
              items: [
                  { id: 'l1', text: 'Implementar un sistema de gestión de rutas y optimización (TMS).', completed: false },
                  { id: 'l2', text: 'Establecer un programa riguroso de mantenimiento preventivo para la flota.', completed: false },
                  { id: 'l3', text: 'Capacitar al personal de logística y conductores en seguridad y servicio.', completed: false },
                  { id: 'l4', text: 'Definir y documentar estándares de calidad claros para el proceso de entrega.', completed: false }
              ]
          },
          {
              title: 'Próximos 6 Meses',
              items: [
                  { id: 'l5', text: 'Introducir un sistema de monitoreo GPS en tiempo real para la flota.', completed: false },
                  { id: 'l6', text: 'Evaluar la subcontratación de rutas no rentables o adquisición de nuevas unidades.', completed: false },
                  { id: 'l7', text: 'Implementar un sistema de feedback estructurado post-entrega con clientes.', completed: false },
                  { id: 'l8', text: 'Optimizar los procesos de carga y descarga en la planta.', completed: false }
              ]
          },
          {
              title: 'Próximo 1 Año',
              items: [
                  { id: 'l9', text: 'Explorar la automatización de procesos en el patio de maniobras.', completed: false },
                  { id: 'l10', text: 'Establecer alianzas estratégicas con proveedores de transporte alternativos.', completed: false },
                  { id: 'l11', text: 'Trabajar en la certificación de procesos logísticos bajo normas ISO.', completed: false }
              ]
          }
      ],
      kpis: ['Tiempo promedio de entrega.', 'Porcentaje de entregas a tiempo.', 'Número de quejas de clientes.', 'Costo de transporte por litro/galón.', 'Índice de utilización de la flota.', 'Eficiencia del consumo de combustible.'],
      resources: ['Software TMS y sistemas GPS.', 'Inversión en mantenimiento de flota.', 'Programas de capacitación.', 'Personal dedicado a control de calidad.'],
      risks: [
          { risk: 'Accidentes de transporte o fallas mecánicas imprevistas.', mitigation: 'Mantenimiento preventivo estricto, capacitación en manejo defensivo, seguros adecuados y unidades de respaldo.' },
          { risk: 'Condiciones climáticas adversas o problemas viales.', mitigation: 'Planificación de rutas alternativas, comunicación proactiva con clientes y monitoreo constante.' }
      ]
  }
];

export const STRATEGIC_PLANS_DATA: StrategicPlan[] = [
    {
        id: 'plan-general',
        title: 'Plan General',
        areas: STRATEGIC_AREAS
    }
]
