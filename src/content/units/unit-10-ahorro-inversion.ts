import type { Unit } from '@/content/types';

export const unit10: Unit = {
  id: 'u10',
  index: 10,
  subject: 'macroeconomia',
  title: 'Ahorro, inversión y el sistema financiero',
  subtitle: 'De dónde sale el capital que financia el crecimiento',
  description:
    'El crecimiento de una economía depende de que alguien esté dispuesto a postergar consumo hoy para que otros puedan invertir. Esta unidad explica cómo los mercados financieros conectan a ahorradores e inversionistas, y qué determina cuánto se ahorra y cuánto se invierte.',
  icon: 'wallet-outline',
  color: '#0E6E82',
  source: 'ambos-macro',
  lessons: [
    {
      id: 'u10-l1',
      title: 'Los mercados financieros y el ahorro nacional',
      summary:
        'Cómo los mercados financieros conectan a ahorradores e inversionistas, y por qué el ahorro nacional se descompone en ahorro privado y ahorro público.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'Los mercados financieros: bonos, acciones y bancos',
        },
        {
          type: 'paragraph',
          text: 'Cuando una familia ahorra parte de su ingreso y una empresa quiere financiar una nueva planta, alguien tiene que poner en contacto a esos dos grupos. Esa es la función central de los mercados financieros: canalizar los fondos de quienes tienen ingresos que no van a gastar de inmediato hacia quienes quieren usarlos para invertir. Esto puede ocurrir de manera directa, a través del mercado de bonos o de acciones, o de manera indirecta, a través de intermediarios como los bancos.',
        },
        {
          type: 'list',
          items: [
            'Mercado de bonos: las empresas o el gobierno piden dinero prestado emitiendo un bono, un documento que promete devolver el capital más intereses en una fecha futura; quien lo compra se convierte en acreedor.',
            'Mercado de acciones: las empresas venden una porción de su propiedad a cambio de financiamiento; quien compra una acción pasa a ser dueño parcial de la empresa y participa de sus ganancias o pérdidas.',
            'Bancos y otros intermediarios financieros: reciben los depósitos de quienes ahorran y los prestan a hogares o empresas que necesitan financiamiento, cobrando una diferencia entre la tasa que pagan a los depositantes y la que cobran a quienes piden el préstamo.',
          ],
        },
        {
          type: 'heading',
          text: 'La identidad ahorro = inversión',
        },
        {
          type: 'paragraph',
          text: 'En una economía cerrada (sin comercio con el resto del mundo), todo lo que se produce se destina a consumo (C), inversión (I) o gasto de gobierno (G): Y = C + I + G. Si despejamos la inversión, obtenemos I = Y − C − G. Pero Y − C − G es, por definición, lo que le queda a la economía después de consumir y de que el gobierno gaste: eso es exactamente el ahorro nacional. Por eso, en una economía cerrada, el ahorro nacional y la inversión son la misma cantidad vista desde dos ángulos distintos.',
        },
        {
          type: 'paragraph',
          text: 'El ahorro nacional, a su vez, tiene dos fuentes. El ahorro privado es lo que les queda a los hogares y las empresas después de pagar impuestos (T) y de consumir: Y − T − C. El ahorro público es lo que le queda al gobierno después de gastar: T − G. Si el gobierno recauda más de lo que gasta (superávit), el ahorro público es positivo y se suma al ahorro nacional; si gasta más de lo que recauda (déficit), el ahorro público es negativo y resta.',
        },
        {
          type: 'formula',
          label: 'Descomposición del ahorro nacional',
          text: 'Ahorro nacional (S) = Ahorro privado + Ahorro público = (Y − T − C) + (T − G)',
        },
        {
          type: 'example',
          title: 'Ejemplo: separando el ahorro privado del público',
          text: 'En una economía, el PIB (Y) es $1.000.000, los impuestos netos (T) son $200.000, el consumo (C) es $650.000 y el gasto de gobierno (G) es $180.000. El ahorro privado es 1.000.000 − 200.000 − 650.000 = $150.000. El ahorro público es 200.000 − 180.000 = $20.000 (el gobierno tiene superávit). El ahorro nacional es 150.000 + 20.000 = $170.000, y coincide exactamente con la inversión: I = Y − C − G = 1.000.000 − 650.000 − 180.000 = $170.000.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Cuando el gobierno gasta más de lo que recauda',
          text: 'Si el gobierno tiene un déficit fiscal (G > T), el ahorro público (T − G) es negativo. Eso no significa que el ahorro nacional sea negativo automáticamente, pero sí significa que el gobierno está restando al ahorro que generan los hogares y las empresas, en vez de sumar.',
        },
      ],
      exercises: [
        {
          id: 'u10-l1-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            '¿Cuál de las siguientes opciones describe mejor la función que cumplen mercados financieros como el mercado de bonos, el mercado de acciones y los bancos?',
          options: [
            {
              id: 'a',
              text: 'Canalizan los fondos de quienes ahorran hacia quienes quieren invertir, ya sea prestando directamente (bonos, bancos) o vendiendo una parte de la propiedad de una empresa (acciones)',
            },
            { id: 'b', text: 'Sirven principalmente para que el gobierno fije los precios de los bienes de consumo' },
            { id: 'c', text: 'Existen solo para que las empresas paguen impuestos de forma más eficiente' },
            { id: 'd', text: 'Su función es fijar por decreto la tasa de desempleo de la economía' },
          ],
          correctOptionId: 'a',
          explanation:
            'Los mercados financieros y los bancos son intermediarios: reciben los fondos de quienes ahorran y los ponen a disposición de quienes quieren financiar un proyecto de inversión, ya sea mediante deuda (bonos, préstamos bancarios) o propiedad compartida (acciones).',
        },
        {
          id: 'u10-l1-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'En una economía cerrada, el PIB (Y) es $2.000.000, el consumo (C) es $1.300.000, el gasto de gobierno (G) es $350.000 y los impuestos netos (T) son $400.000. ¿Cuál es el ahorro nacional de esta economía, en pesos?',
          unitLabel: '$',
          answer: 350000,
          hint: 'El ahorro nacional también se puede calcular directamente como Y − C − G.',
          explanation: 'Ahorro nacional = Y − C − G = 2.000.000 − 1.300.000 − 350.000 = $350.000.',
        },
        {
          id: 'u10-l1-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Un país tiene ingresos tributarios (T) de $300.000 y gasto de gobierno (G) de $450.000 este año. El ahorro privado de los hogares y las empresas de ese país es $500.000.',
          question: '¿Cuál es el ahorro nacional de este país, y qué relación tiene con lo máximo que podría invertirse en una economía cerrada?',
          options: [
            {
              id: 'a',
              text: 'El ahorro público es T − G = −150.000 (el gobierno tiene déficit); el ahorro nacional es 500.000 + (−150.000) = $350.000, que es lo máximo que esta economía cerrada podría destinar a inversión, menos de lo que permitiría el ahorro privado por sí solo',
            },
            {
              id: 'b',
              text: 'El ahorro nacional es 500.000 + 450.000 = $950.000, porque el gasto de gobierno también se suma directamente al ahorro',
            },
            { id: 'c', text: 'El déficit fiscal no afecta el ahorro nacional total, porque el ahorro privado ya alcanza para financiar toda la inversión' },
            { id: 'd', text: 'El ahorro nacional es igual a T − G = −150.000, sin considerar el ahorro privado' },
          ],
          correctOptionId: 'a',
          explanation:
            'El ahorro nacional es la suma del ahorro privado y el ahorro público. Aquí el gobierno tiene déficit (gasta $450.000 y recauda solo $300.000), así que su ahorro público es −150.000. Sumado al ahorro privado de 500.000, el ahorro nacional queda en $350.000: el déficit fiscal reduce el total disponible para financiar inversión.',
        },
        {
          id: 'u10-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 15,
          prompt:
            'Explica qué significa la identidad ahorro = inversión en una economía cerrada, y cómo se descompone el ahorro nacional en ahorro privado y ahorro público.',
          keyPoints: [
            {
              id: 'saving_investment_identity',
              label: 'Explica que en una economía cerrada el ahorro nacional es igual a la inversión',
              synonyms: ['ahorro es igual a la inversion', 's=i', 'ahorro nacional igual a inversion', 'identidad contable', 'ahorro igual inversion', 'coinciden'],
            },
            {
              id: 'private_saving',
              label: 'Define el ahorro privado como el ingreso menos los impuestos menos el consumo',
              synonyms: ['ahorro privado', 'ingreso menos impuestos menos consumo', 'y menos t menos c', 'lo que le queda a hogares y empresas', 'despues de pagar impuestos y consumir'],
            },
            {
              id: 'public_saving',
              label: 'Define el ahorro público como los impuestos menos el gasto de gobierno, y que puede ser negativo si hay déficit',
              synonyms: ['ahorro publico', 'impuestos menos gasto', 't menos g', 'superavit fiscal', 'deficit fiscal', 'puede ser negativo', 'presupuesto del gobierno'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'En una economía cerrada, todo lo que no se consume ni gasta el gobierno se convierte en inversión, así que el ahorro nacional es igual a la inversión. El ahorro nacional se divide en dos partes: el ahorro privado, que es el ingreso de hogares y empresas menos los impuestos y menos el consumo, y el ahorro público, que es lo que recauda el gobierno menos lo que gasta. Si el gobierno tiene déficit, su ahorro público es negativo y reduce el ahorro nacional total.',
          explanation:
            'Una buena respuesta explica la identidad ahorro = inversión, define correctamente ahorro privado y ahorro público, y entiende que un déficit fiscal hace negativo al ahorro público.',
        },
        {
          id: 'u10-l1-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'En una economía cerrada, el ingreso total (PIB) es $1.000.000 millones, el consumo es $600.000 millones, y el gasto de gobierno es $250.000 millones. ¿Cuál es el ahorro nacional (que en una economía cerrada iguala a la inversión)?',
          unitLabel: '$ millones',
          answer: 150000,
          hint: 'Ahorro nacional = PIB − Consumo − Gasto de gobierno.',
          explanation:
            'El ahorro nacional es lo que queda del PIB después del consumo privado y el gasto público: $1.000.000 − $600.000 − $250.000 = $150.000 millones. En una economía cerrada, ese monto es exactamente igual a la inversión.',
        },
        {
          id: 'u10-l1-e6',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: 'Si el gobierno pasa de un presupuesto equilibrado a un déficit fiscal, manteniendo todo lo demás constante, ¿qué le ocurre al ahorro nacional?',
          options: [
            { id: 'a', text: 'Disminuye, porque el ahorro público se vuelve negativo y arrastra hacia abajo el ahorro nacional total' },
            { id: 'b', text: 'Aumenta, porque el gobierno inyecta más gasto en la economía' },
            { id: 'c', text: 'No cambia, porque el déficit solo afecta al gobierno' },
            { id: 'd', text: 'Se vuelve exactamente cero' },
          ],
          correctOptionId: 'a',
          explanation:
            'El ahorro nacional es la suma del ahorro privado y el público. Un déficit fiscal significa que el gobierno gasta más de lo que recauda, así que su ahorro público (T − G) se vuelve negativo. Manteniendo el ahorro privado constante, eso reduce el ahorro nacional total y, por lo tanto, los fondos disponibles para inversión.',
        },
      ],
    },
    {
      id: 'u10-l2',
      title: 'El mercado de fondos prestables: oferta, demanda y la tasa de interés real',
      summary:
        'Por qué la tasa de interés real es el precio que equilibra el ahorro y la inversión, y cómo un déficit fiscal puede desplazar la inversión privada.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'Ahorro e inversión se encuentran en el mercado de fondos prestables',
        },
        {
          type: 'paragraph',
          text: 'Podemos pensar el ahorro y la inversión como si se encontraran en un mercado, el mercado de fondos prestables. Ahí, el ahorro nacional hace de oferta: es el dinero que hogares, empresas y el gobierno ponen a disposición para ser prestado. La inversión hace de demanda: es el dinero que las empresas quieren pedir prestado para financiar sus proyectos. El precio que equilibra a ambos no es un precio en pesos, sino la tasa de interés real.',
        },
        {
          type: 'paragraph',
          text: 'La oferta de fondos prestables tiene pendiente positiva: mientras más alta es la tasa de interés real, más atractivo resulta ahorrar en vez de consumir, así que más gente ofrece sus fondos. La demanda tiene pendiente negativa: mientras más alta es la tasa de interés real, más caro resulta financiar un proyecto, así que menos proyectos siguen siendo rentables y las empresas piden prestado menos. La tasa de interés real de equilibrio es aquella en la que la cantidad que los ahorradores quieren prestar coincide exactamente con la cantidad que los inversionistas quieren pedir prestado.',
        },
        {
          type: 'formula',
          label: 'Equilibrio en el mercado de fondos prestables',
          text: 'Oferta de fondos prestables (Ahorro) = Demanda de fondos prestables (Inversión)',
        },
        {
          type: 'example',
          title: 'Ejemplo: cómo se ajusta la tasa de interés real',
          text: 'Imagina una economía en la que, a una tasa de interés real de 2% anual, los ahorradores solo están dispuestos a prestar $100.000, mientras que las empresas querrían pedir prestado $140.000 a esa tasa tan baja: hay más demanda que oferta. A una tasa de 6% anual, el ahorro sube a $140.000 porque ahorrar se vuelve más atractivo, pero la inversión cae a $100.000 porque menos proyectos siguen siendo rentables a ese costo: ahora hay más oferta que demanda. En algún punto intermedio, la tasa de interés real deja de moverse porque la cantidad ofrecida y la demandada finalmente coinciden.',
        },
        {
          type: 'heading',
          text: 'El déficit fiscal desplaza el ahorro y sube la tasa de interés',
        },
        {
          type: 'paragraph',
          text: 'Cuando el gobierno aumenta su déficit fiscal (gasta más de lo que recauda) sin que cambie el ahorro privado, el ahorro público se reduce y, con él, el ahorro nacional: la oferta de fondos prestables se desplaza hacia la izquierda. A la tasa de interés real anterior, ahora hay menos fondos disponibles que demanda de inversión, así que la tasa de interés real de equilibrio sube. Esa tasa más alta encarece financiar nuevos proyectos, por lo que algunas empresas dejan de invertir: parte de la inversión privada es "desplazada" por el mayor endeudamiento del gobierno, un efecto que se conoce como crowding out.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Crowding out en una frase',
          text: 'Un mayor déficit fiscal no solo se financia con más deuda pública: al competir por los mismos fondos prestables, también puede subir la tasa de interés real y desplazar inversión privada que, de otro modo, se habría realizado.',
        },
      ],
      exercises: [
        {
          id: 'u10-l2-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: 'Si el ahorro privado de una economía aumenta, manteniendo todo lo demás constante, ¿qué debería ocurrir en el mercado de fondos prestables?',
          options: [
            { id: 'a', text: 'La oferta de fondos prestables se desplaza hacia la derecha, lo que tiende a bajar la tasa de interés real de equilibrio' },
            { id: 'b', text: 'La demanda de fondos prestables se desplaza hacia la derecha, subiendo la tasa de interés real' },
            { id: 'c', text: 'No ocurre ningún cambio, porque la oferta de fondos prestables depende solo del gasto del gobierno' },
            { id: 'd', text: 'La oferta se desplaza hacia la izquierda, subiendo la tasa de interés real' },
          ],
          correctOptionId: 'a',
          explanation:
            'El ahorro nacional es la oferta de fondos prestables. Si el ahorro privado sube, la oferta se desplaza hacia la derecha: a cada tasa de interés hay más fondos disponibles, lo que empuja hacia abajo la tasa de interés real de equilibrio.',
        },
        {
          id: 'u10-l2-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'El ahorro privado de una economía se mantiene constante en $400.000. En el año 1, los impuestos netos (T) son $250.000 y el gasto de gobierno (G) es $200.000. En el año 2, el gobierno aumenta su gasto a $400.000 sin cambiar los impuestos. ¿En cuántos pesos disminuye el ahorro nacional entre el año 1 y el año 2?',
          unitLabel: '$',
          answer: 200000,
          hint: 'Calcula el ahorro público (T − G) y el ahorro nacional en cada año, y luego compara.',
          explanation:
            'Año 1: ahorro público = 250.000 − 200.000 = 50.000; ahorro nacional = 400.000 + 50.000 = $450.000. Año 2: ahorro público = 250.000 − 400.000 = −150.000; ahorro nacional = 400.000 − 150.000 = $250.000. La caída es 450.000 − 250.000 = $200.000.',
        },
        {
          id: 'u10-l2-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'El gobierno de un país aumenta fuertemente su déficit fiscal para financiar nuevo gasto público, sin cambiar los impuestos. El ahorro privado de los hogares y las empresas de ese país no cambia.',
          question: '¿Qué debería ocurrir en el mercado de fondos prestables como consecuencia de este mayor déficit fiscal?',
          options: [
            {
              id: 'a',
              text: 'El ahorro público cae, la oferta de fondos prestables se desplaza hacia la izquierda, sube la tasa de interés real de equilibrio y se reduce parte de la inversión privada (crowding out)',
            },
            { id: 'b', text: 'El ahorro público sube, porque un mayor gasto de gobierno siempre aumenta el ahorro nacional' },
            { id: 'c', text: 'La demanda de fondos prestables se desplaza hacia la izquierda, bajando la tasa de interés real' },
            { id: 'd', text: 'No hay ningún efecto sobre la tasa de interés real, porque el déficit fiscal es independiente del mercado de fondos prestables' },
          ],
          correctOptionId: 'a',
          explanation:
            'Un mayor déficit fiscal reduce el ahorro público y, por lo tanto, la oferta de fondos prestables. Con menos oferta disponible para la misma demanda de inversión, la tasa de interés real de equilibrio sube, encareciendo el financiamiento y desplazando (crowding out) parte de la inversión privada.',
        },
        {
          id: 'u10-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 15,
          prompt:
            'Explica cómo se determina la tasa de interés real de equilibrio en el mercado de fondos prestables, y qué le ocurre a esa tasa cuando aumenta el déficit fiscal.',
          keyPoints: [
            {
              id: 'supply_demand',
              label: 'Identifica que el ahorro es la oferta y la inversión es la demanda de fondos prestables',
              synonyms: ['ahorro es la oferta', 'inversion es la demanda', 'oferta de fondos', 'demanda de fondos', 'oferta y demanda'],
            },
            {
              id: 'equilibrium_rate',
              label: 'Explica que la tasa de interés real se ajusta hasta igualar el ahorro y la inversión',
              synonyms: ['tasa de interes de equilibrio', 'se ajusta', 'iguala oferta y demanda', 'equilibra ahorro e inversion', 'precio de equilibrio'],
            },
            {
              id: 'deficit_effect',
              label: 'Explica que un mayor déficit fiscal reduce el ahorro público, desplaza la oferta y sube la tasa de interés (crowding out)',
              synonyms: ['deficit fiscal', 'reduce el ahorro publico', 'desplaza la oferta', 'sube la tasa de interes', 'crowding out', 'desplazamiento de la inversion privada'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'En el mercado de fondos prestables, el ahorro nacional actúa como oferta y la inversión como demanda, y la tasa de interés real es el precio que las equilibra: sube si hay más demanda que oferta y baja si hay más oferta que demanda. Cuando el gobierno aumenta su déficit fiscal, el ahorro público cae y con él el ahorro nacional, así que la oferta de fondos prestables se desplaza hacia la izquierda. Eso sube la tasa de interés real de equilibrio, lo que encarece financiar proyectos y termina desplazando parte de la inversión privada, un efecto conocido como crowding out.',
          explanation:
            'Se espera que la respuesta identifique el ahorro como oferta y la inversión como demanda, explique el mecanismo de ajuste de la tasa de interés real, y conecte un mayor déficit fiscal con el desplazamiento de la inversión privada.',
        },
        {
          id: 'u10-l2-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          chart: {
            xLabel: 'Fondos prestables ($ billones)',
            yLabel: 'Tasa de interés real (%)',
            xMax: 100,
            yMax: 12,
            lines: [
              { points: [{ x: 20, y: 2 }, { x: 80, y: 11 }], color: 'accent', label: 'Ahorro (O)' },
              { points: [{ x: 20, y: 10 }, { x: 80, y: 1 }], color: 'brand', label: 'Inversión (D)' },
            ],
            markers: [{ x: 50, y: 6.5, label: 'E', guides: true }],
            caption: 'Mercado de fondos prestables: oferta de ahorro y demanda de inversión.',
          },
          question: 'Observa el mercado de fondos prestables. ¿Cuál es la tasa de interés real de equilibrio?',
          unitLabel: '%',
          answer: 6.5,
          decimals: 1,
          tolerance: 0.3,
          hint: 'El equilibrio E está donde la curva de ahorro se cruza con la de inversión; lee la tasa en el eje vertical.',
          explanation:
            'La tasa de interés real de equilibrio se lee en el punto E, donde la cantidad de ahorro ofrecida iguala a la inversión demandada. En el gráfico, ese cruce ocurre a una tasa de 6,5% (con $50 billones de fondos prestables).',
        },
        {
          id: 'u10-l2-e6',
          type: 'multiple_choice',
          difficulty: 'dificil',
          xp: 20,
          chart: {
            xLabel: 'Fondos prestables ($ billones)',
            yLabel: 'Tasa de interés real (%)',
            xMax: 100,
            yMax: 12,
            lines: [
              { points: [{ x: 30, y: 2 }, { x: 90, y: 11 }], color: 'muted', dashed: true, label: 'O₁' },
              { points: [{ x: 10, y: 2 }, { x: 70, y: 11 }], color: 'accent', label: 'O₂' },
              { points: [{ x: 20, y: 10 }, { x: 80, y: 1 }], color: 'brand', label: 'D' },
            ],
            caption: 'Un aumento del déficit fiscal desplaza la oferta de fondos de O₁ a O₂.',
          },
          question: 'El déficit fiscal aumenta y la oferta de fondos prestables se desplaza de O₁ a O₂ (hacia la izquierda). Según el gráfico, ¿qué le ocurre a la tasa de interés real y a la inversión privada?',
          options: [
            { id: 'a', text: 'La tasa de interés real sube y la inversión privada cae: es el efecto crowding out (desplazamiento)' },
            { id: 'b', text: 'La tasa de interés real baja y la inversión privada sube' },
            { id: 'c', text: 'La tasa no cambia, solo cae la cantidad transada' },
            { id: 'd', text: 'La inversión privada sube porque hay más gasto público' },
          ],
          correctOptionId: 'a',
          explanation:
            'Al reducirse el ahorro nacional por el mayor déficit, la oferta de fondos se corre a la izquierda (O₁ → O₂). El nuevo cruce con la demanda de inversión ocurre a una tasa de interés real más alta y con una cantidad de fondos menor. Esa alza de la tasa encarece el financiamiento y desplaza inversión privada: el crowding out.',
        },
      ],
    },
    {
      id: 'u10-l3',
      title: 'Qué determina el ahorro de los hogares y la inversión de las empresas',
      summary:
        'Qué factores explican cuánto ahorran los hogares y por qué las empresas invierten más cuando el costo de financiamiento es menor.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'Qué determina el ahorro de los hogares',
        },
        {
          type: 'paragraph',
          text: 'No todos los hogares ahorran lo mismo, ni el mismo hogar ahorra siempre igual. Varios factores explican esas diferencias: el nivel de ingreso, las expectativas sobre el futuro y la tasa de interés real que se puede obtener por ahorrar en vez de consumir.',
        },
        {
          type: 'list',
          items: [
            'Nivel de ingreso: los hogares con mayor ingreso disponible generalmente pueden destinar una mayor cantidad de dinero al ahorro, incluso si la proporción que ahorran no siempre sube en la misma medida.',
            'Expectativas sobre el futuro: la incertidumbre sobre el empleo, la salud o los ingresos futuros incentiva un ahorro precautorio, mientras que una mayor confianza en el futuro puede reducirlo.',
            'Tasa de interés real: cuanto mayor es la recompensa por postergar el consumo, mayor es el incentivo a ahorrar en lugar de gastar hoy.',
            'Preferencias personales: algunas personas valoran mucho más el consumo presente que el futuro (son más impacientes), lo que también influye en cuánto deciden ahorrar.',
          ],
        },
        {
          type: 'example',
          title: 'Ejemplo: ingreso, expectativas y ahorro',
          text: 'Dos familias reciben, cada una, un aumento de ingreso de $100.000 al mes. La primera, que se siente segura en su trabajo, decide ahorrar un 25% de ese aumento: $25.000. La segunda, que teme perder su empleo en los próximos meses, decide ahorrar un 60%: $60.000. La diferencia de $35.000 entre ambas no se explica por el ingreso, que es idéntico, sino por sus expectativas sobre el futuro.',
        },
        {
          type: 'heading',
          text: 'Qué determina la inversión de las empresas',
        },
        {
          type: 'paragraph',
          text: 'Una empresa invierte en un proyecto (una máquina, una planta, un nuevo local) cuando espera que ese proyecto le genere un retorno mayor que el costo de financiarlo. Ese costo de financiamiento es, precisamente, la tasa de interés real: pedir un préstamo, emitir un bono o usar utilidades retenidas tiene el mismo costo de oportunidad, medido por esa tasa. Cuando la tasa de interés real baja, proyectos que antes no convenían pasan a ser rentables, así que la inversión agregada de la economía tiende a subir; cuando la tasa sube, ocurre lo contrario.',
        },
        {
          type: 'formula',
          label: 'Criterio de decisión de inversión',
          text: 'Conviene invertir si: Retorno esperado del proyecto > Tasa de interés real',
        },
        {
          type: 'example',
          title: 'Ejemplo: una máquina que conviene o no según la tasa',
          text: 'Una empresa evalúa comprar una máquina de $10.000.000 que se espera genere un retorno de 8% anual. Si la tasa de interés real de mercado es 5% anual, conviene invertir, porque el proyecto rinde más de lo que cuesta financiarlo. Si la tasa de interés real sube a 10% anual, el mismo proyecto deja de ser rentable y la empresa preferiría no invertir en la máquina.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'La misma tasa mueve a ambos lados del mercado',
          text: 'La tasa de interés real no solo determina cuánto ahorran los hogares (oferta de fondos prestables); también determina cuánto invierten las empresas (demanda de fondos prestables). Por eso es la variable que termina equilibrando a ambos, como se vio en la lección anterior.',
        },
      ],
      exercises: [
        {
          id: 'u10-l3-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '¿Cuál de los siguientes factores tiende a aumentar el ahorro de los hogares, manteniendo todo lo demás constante?',
          options: [
            { id: 'a', text: 'Una mayor tasa de interés real, que premia más postergar el consumo hacia el futuro' },
            { id: 'b', text: 'Una caída en el ingreso disponible de las familias' },
            { id: 'c', text: 'Una mayor certeza de que el ingreso futuro será estable y alto, sin ninguna necesidad de ahorro precautorio' },
            { id: 'd', text: 'Una reducción en la tasa de interés real, que hace más atractivo consumir todo el ingreso hoy' },
          ],
          correctOptionId: 'a',
          explanation:
            'Una tasa de interés real más alta aumenta la recompensa por ahorrar en vez de consumir hoy, lo que incentiva a los hogares a ahorrar más. Una caída de ingreso, mayor certeza sobre el futuro o una tasa más baja tienden a reducir el ahorro, no a aumentarlo.',
        },
        {
          id: 'u10-l3-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una familia recibe un aumento de ingreso de $80.000 al mes y decide ahorrar el 35% de ese aumento. ¿Cuántos pesos adicionales ahorra cada mes?',
          unitLabel: '$',
          answer: 28000,
          hint: 'Multiplica el aumento de ingreso por el porcentaje que se ahorra.',
          explanation: 'Ahorro adicional = 80.000 × 0,35 = $28.000.',
        },
        {
          id: 'u10-l3-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Una empresa evalúa un proyecto de expansión que cuesta $50.000.000 y que se espera genere un retorno de 7% anual. La tasa de interés real de mercado, que refleja el costo de financiar el proyecto, es actualmente 9% anual.',
          question: 'Según el criterio de decisión de inversión de las empresas, ¿qué debería hacer la empresa con este proyecto?',
          options: [
            { id: 'a', text: 'No debería invertir, porque el retorno esperado del proyecto (7%) es menor que el costo de financiarlo (9% de tasa de interés real)' },
            { id: 'b', text: 'Debería invertir de todas formas, porque cualquier retorno positivo hace rentable un proyecto' },
            { id: 'c', text: 'Debería invertir, porque un retorno de 7% siempre es mejor que no hacer nada, sin importar la tasa de interés' },
            { id: 'd', text: 'La decisión no depende de la tasa de interés real, solo del monto total del proyecto' },
          ],
          correctOptionId: 'a',
          explanation:
            'Un proyecto conviene solo si su retorno esperado supera el costo de financiarlo, medido por la tasa de interés real. Aquí el retorno esperado (7%) es menor que esa tasa (9%), así que el proyecto no es rentable y la empresa debería descartarlo, al menos a esa tasa de interés.',
        },
        {
          id: 'u10-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 15,
          prompt:
            'Explica qué factores influyen en cuánto ahorran los hogares, y por qué una tasa de interés real más baja incentiva a las empresas a invertir más.',
          keyPoints: [
            {
              id: 'household_factors',
              label: 'Menciona factores que afectan el ahorro de los hogares, como el ingreso, las expectativas o la tasa de interés',
              synonyms: ['ingreso', 'expectativas', 'tasa de interes', 'ahorro precautorio', 'preferencias', 'incertidumbre'],
            },
            {
              id: 'interest_reward',
              label: 'Explica que una tasa de interés más alta premia más el ahorro, incentivando postergar el consumo',
              synonyms: ['premia el ahorro', 'postergar el consumo', 'recompensa por ahorrar', 'mayor tasa mas ahorro'],
            },
            {
              id: 'investment_cost',
              label: 'Explica que la tasa de interés real es el costo de financiar un proyecto de inversión, y que una tasa más baja hace rentables más proyectos',
              synonyms: ['costo de financiamiento', 'costo de financiar', 'tasa mas baja mas proyectos rentables', 'mas proyectos son rentables', 'costo del capital'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'El ahorro de los hogares depende de su nivel de ingreso, de sus expectativas sobre el futuro (por ejemplo, si temen quedarse sin empleo ahorran más por precaución) y de la tasa de interés real, que premia postergar el consumo. Del lado de las empresas, la tasa de interés real es el costo de financiar un proyecto de inversión: cuando esa tasa baja, proyectos que antes no eran rentables pasan a serlo, así que las empresas invierten más.',
          explanation:
            'Una buena respuesta menciona al menos dos factores del ahorro de los hogares y explica que una tasa de interés real más baja reduce el costo de financiamiento de las empresas, haciendo rentables más proyectos de inversión.',
        },
        {
          id: 'u10-l3-e5',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'El gobierno introduce un incentivo tributario que hace más atractivo ahorrar para la jubilación. Como resultado, los hogares deciden ahorrar más a cada nivel de tasa de interés.',
          question: 'En el mercado de fondos prestables, ¿qué efecto tiene esta política sobre la tasa de interés real de equilibrio y la inversión?',
          options: [
            { id: 'a', text: 'La oferta de fondos se desplaza a la derecha: la tasa de interés real baja y la inversión aumenta' },
            { id: 'b', text: 'La demanda de fondos se desplaza a la derecha: la tasa sube y la inversión cae' },
            { id: 'c', text: 'No cambia nada, porque el ahorro no afecta la inversión' },
            { id: 'd', text: 'La tasa sube y la inversión también sube' },
          ],
          correctOptionId: 'a',
          explanation:
            'Un incentivo que aumenta el ahorro a cada tasa desplaza la oferta de fondos prestables hacia la derecha. Con más ahorro disponible, la tasa de interés real de equilibrio baja, y esa tasa más baja abarata el financiamiento, lo que estimula una mayor inversión.',
        },
        {
          id: 'u10-l3-e6',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una empresa evalúa un proyecto que rinde un 7% real anual. Si la tasa de interés real a la que puede financiarlo baja de 9% a 5%, ¿el proyecto pasa a ser rentable? Responde con la diferencia, en puntos porcentuales, entre el rendimiento del proyecto y la nueva tasa de financiamiento.',
          unitLabel: 'puntos',
          answer: 2,
          hint: 'Compara el rendimiento del proyecto (7%) con la nueva tasa de financiamiento (5%).',
          explanation:
            'A una tasa de 9%, el proyecto (que rinde 7%) no convenía: costaba más financiarlo de lo que rendía. Al bajar la tasa a 5%, el proyecto rinde 7% − 5% = 2 puntos porcentuales por encima de su costo de financiamiento, así que ahora sí es rentable. Por eso tasas más bajas activan más proyectos de inversión.',
        },
      ],
    },
  ],
};
