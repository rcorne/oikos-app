import type { Unit } from '@/content/types';

export const unit12: Unit = {
  id: 'u12',
  index: 12,
  subject: 'macroeconomia',
  title: 'Crecimiento económico de largo plazo',
  subtitle: 'Por qué unos países son mucho más ricos que otros',
  description:
    'El nivel de vida de un país depende, más que de cualquier otro factor, de su capacidad de producir bienes y servicios en el largo plazo. Esta unidad usa el modelo de Solow para explicar de dónde sale ese crecimiento: la acumulación de capital, el ahorro, la población y, en última instancia, el progreso tecnológico.',
  icon: 'rocket-outline',
  color: '#0A4256',
  source: 'ambos-macro',
  lessons: [
    {
      id: 'u12-l1',
      title: 'El modelo de Solow: acumulación de capital',
      summary: 'Cómo el ahorro, la inversión y la depreciación determinan el capital por trabajador y el estado estacionario.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'La función de producción por trabajador',
        },
        {
          type: 'paragraph',
          text: 'El modelo de Solow explica el crecimiento de largo plazo mirando cuánto capital tiene cada trabajador disponible para producir: máquinas, herramientas, infraestructura. Mientras más capital por trabajador exista, mayor es la producción por trabajador. Pero esa relación no es lineal: cada unidad adicional de capital aumenta la producción en una cantidad cada vez menor. Un primer computador transforma la productividad de una oficina que no tenía ninguno; el vigésimo computador de esa misma oficina agrega mucho menos. A esto se le llama rendimientos decrecientes del capital.',
        },
        {
          type: 'formula',
          label: 'La función de producción por trabajador',
          text: 'Producción por trabajador = f(Capital por trabajador)',
        },
        {
          type: 'heading',
          text: 'El ahorro financia la inversión; la depreciación la desgasta',
        },
        {
          type: 'paragraph',
          text: 'En este modelo, la sociedad ahorra una fracción fija de su producción, y ese ahorro se convierte, sin fricciones, en inversión: la compra de nuevo capital. Al mismo tiempo, el capital existente se desgasta con el uso y el paso del tiempo —las máquinas se rompen, los edificios se deterioran— a una tasa de depreciación constante. La inversión aumenta el stock de capital por trabajador; la depreciación lo reduce. El cambio neto en el capital por trabajador de un año a otro depende de cuál de las dos fuerzas sea mayor.',
        },
        {
          type: 'formula',
          label: 'La regla del ahorro',
          text: 'Inversión = Ahorro = s × Producción por trabajador',
        },
        {
          type: 'example',
          title: 'Ejemplo: cuando inversión y depreciación se igualan',
          text: 'Una economía produce $300.000 millones al año y ahorra el 20% de esa producción, por lo que su inversión es 0,20 × $300.000 millones = $60.000 millones. Si ese mismo año la depreciación total del capital existente también es de $60.000 millones, entonces todo lo que se invierte apenas alcanza para reponer lo que se desgastó: el capital por trabajador no aumenta ni disminuye, y se mantendrá igual el próximo año mientras nada más cambie.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'El estado estacionario',
          text: 'El estado estacionario es el nivel de capital por trabajador en el que la inversión iguala exactamente a la depreciación. Si el capital por trabajador está por debajo de ese nivel, la inversión supera a la depreciación y el capital por trabajador crece; si está por encima, la depreciación supera a la inversión y el capital por trabajador cae. Por eso la economía tiende a converger hacia el estado estacionario y, una vez ahí, se queda quieta.',
        },
      ],
      exercises: [
        {
          id: 'u12-l1-e1',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'Un país tiene un stock de capital de $500.000 millones y una tasa de depreciación anual de 4%. ¿Cuántos millones de dólares se desgastan (deprecian) cada año?',
          unitLabel: 'millones de $',
          answer: 20000,
          hint: 'Multiplica el stock de capital por la tasa de depreciación.',
          explanation: 'Depreciación total = $500.000 millones × 0,04 = $20.000 millones.',
        },
        {
          id: 'u12-l1-e2',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'En una economía, la inversión por trabajador de este año es mayor que la depreciación por trabajador. Según el modelo de Solow, ¿qué debería ocurrir con el capital por trabajador el próximo año?',
          options: [
            { id: 'a', text: 'Debería aumentar, porque se agrega más capital nuevo del que se desgasta' },
            { id: 'b', text: 'Debería disminuir, porque el exceso de inversión acelera la depreciación' },
            { id: 'c', text: 'Debería mantenerse exactamente igual, porque la economía ya está en su estado estacionario' },
            { id: 'd', text: 'Es imposible saberlo sin conocer el nivel de producción total del país' },
          ],
          correctOptionId: 'a',
          explanation:
            'Cuando la inversión supera a la depreciación, el capital neto por trabajador aumenta. El estado estacionario es precisamente el punto en que ambas se igualan y el capital deja de cambiar; mientras la inversión sea mayor, todavía no se ha llegado a ese punto.',
        },
        {
          id: 'u12-l1-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'El país Rioverde tiene actualmente un capital por trabajador bajo. Con su tasa de ahorro actual, la inversión por trabajador que genera supera ampliamente a la depreciación por trabajador de su reducido stock de capital.',
          question: '¿Qué debería suceder con el capital por trabajador de Rioverde en los próximos años, según el modelo de Solow?',
          options: [
            {
              id: 'a',
              text: 'Debería seguir aumentando hasta que la inversión y la depreciación se igualen en un nuevo estado estacionario',
            },
            { id: 'b', text: 'Debería caer de inmediato, porque un país pobre no puede acumular capital' },
            { id: 'c', text: 'Debería quedarse fijo, porque el capital por trabajador nunca cambia en el modelo de Solow' },
            { id: 'd', text: 'Debería aumentar indefinidamente sin ningún límite' },
          ],
          correctOptionId: 'a',
          explanation:
            'Mientras la inversión por trabajador exceda a la depreciación por trabajador, el capital por trabajador sigue creciendo. Ese crecimiento continúa hasta que ambas fuerzas se igualan en el nuevo estado estacionario; no sigue para siempre, porque los rendimientos decrecientes hacen que la inversión (una fracción de la producción) crezca cada vez más lento que la depreciación (proporcional al capital).',
        },
        {
          id: 'u12-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 15,
          prompt:
            'Explica en qué consiste el estado estacionario del modelo de Solow y qué relación existe entre la inversión y la depreciación en ese punto.',
          keyPoints: [
            {
              id: 'steady_state_definition',
              label: 'Define el estado estacionario como el punto en que el capital por trabajador deja de cambiar',
              synonyms: [
                'capital por trabajador constante',
                'deja de cambiar',
                'se estabiliza',
                'nivel de capital fijo',
                'ya no crece ni cae',
                'capital estable',
                'punto de equilibrio del capital',
                'no varia mas',
              ],
            },
            {
              id: 'investment_equals_depreciation',
              label: 'Explica que en el estado estacionario la inversión iguala exactamente a la depreciación',
              synonyms: [
                'inversion igual a depreciacion',
                'se igualan',
                'inversion es igual a la depreciacion',
                'coinciden inversion y depreciacion',
                'se compensan',
                'lo que se invierte cubre el desgaste',
                'inversion cubre exactamente la depreciacion',
              ],
            },
            {
              id: 'convergence_mechanism',
              label: 'Explica que si la inversión supera a la depreciación el capital sube, y si es menor el capital baja, por lo que converge',
              synonyms: [
                'converge al estado estacionario',
                'si invierte mas de lo que se deprecia sube',
                'si se deprecia mas de lo que se invierte baja',
                'tiende hacia ese punto',
                'se ajusta con el tiempo',
                'vuelve al equilibrio',
                'la economia tiende a ese nivel',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'El estado estacionario es el nivel de capital por trabajador en el que la inversión iguala exactamente a la depreciación, por lo que el capital por trabajador deja de cambiar de un año a otro. Si el capital está por debajo de ese nivel, la inversión supera a la depreciación y el capital sube; si está por encima, pasa lo contrario y el capital baja. Por eso la economía converge hacia el estado estacionario con el tiempo.',
          explanation:
            'Una buena respuesta define el estado estacionario, señala que ahí inversión y depreciación se igualan, y explica el mecanismo de convergencia hacia ese punto desde niveles más altos o más bajos de capital.',
        },
        {
          id: 'u12-l1-e5',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          chart: {
            xLabel: 'Capital por trabajador (k)',
            yLabel: 'Producto por trabajador (y)',
            xMax: 9,
            yMax: 80,
            lines: [{ points: [{ x: 0, y: 0 }, { x: 2, y: 40 }, { x: 5, y: 60 }, { x: 8, y: 70 }], color: 'brand', label: 'f(k)' }],
            caption: 'Función de producción por trabajador en el modelo de Solow.',
          },
          question: 'La curva f(k) se va aplanando a medida que aumenta el capital por trabajador. ¿Qué propiedad económica refleja esa forma?',
          options: [
            { id: 'a', text: 'Rendimientos decrecientes del capital: cada unidad adicional de capital aporta cada vez menos producto extra' },
            { id: 'b', text: 'Rendimientos crecientes: más capital rinde cada vez más' },
            { id: 'c', text: 'Que el capital no afecta la producción' },
            { id: 'd', text: 'Que la tecnología empeora con el tiempo' },
          ],
          correctOptionId: 'a',
          explanation:
            'Las pendientes de los tramos son 20, 6,7 y 2,3: cada unidad extra de capital agrega cada vez menos producto. Esos rendimientos decrecientes del capital explican por qué la acumulación de capital, por sí sola, no puede sostener el crecimiento para siempre.',
        },
        {
          id: 'u12-l1-e6',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'En una economía de Solow, la inversión por trabajador es de $12.000 y la depreciación por trabajador es de $9.000. ¿En cuánto aumenta el capital por trabajador este período?',
          unitLabel: '$',
          answer: 3000,
          hint: 'El cambio en el capital es la inversión menos la depreciación.',
          explanation:
            'Δk = inversión − depreciación = $12.000 − $9.000 = $3.000. Mientras la inversión supere a la depreciación, el capital por trabajador sigue creciendo; cuando se igualan, la economía llega a su estado estacionario.',
        },
      ],
    },
    {
      id: 'u12-l2',
      title: 'Ahorro, crecimiento de la población y la regla de oro',
      summary: 'Cómo la tasa de ahorro y el crecimiento poblacional mueven el estado estacionario, y qué es la regla de oro del capital.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'Ahorrar más sube el nivel, no la tasa de crecimiento sostenida',
        },
        {
          type: 'paragraph',
          text: 'Si un país eleva su tasa de ahorro, destina una fracción mayor de su producción a inversión cada año. Eso empuja al alza tanto el capital por trabajador como la producción por trabajador del nuevo estado estacionario: un país que ahorra más termina, en el largo plazo, siendo más rico que si hubiera ahorrado menos. Pero ese es un efecto de nivel, no de velocidad: una vez que la economía llega a su nuevo estado estacionario, vuelve a dejar de crecer, igual que antes de subir el ahorro. Ahorrar más no genera una tasa de crecimiento más alta para siempre, solo un escalón más alto una sola vez.',
        },
        {
          type: 'formula',
          label: 'Efecto de una mayor tasa de ahorro',
          text: '↑ Tasa de ahorro (s) → ↑ Inversión = s × Producción → ↑ Capital y producción por trabajador en el nuevo estado estacionario',
        },
        {
          type: 'example',
          title: 'Ejemplo: dos países, dos tasas de ahorro',
          text: 'Elizal y Altamira parten con el mismo capital por trabajador. Elizal ahorra el 10% de su producción; Altamira ahorra el 24%. Con los años, Altamira acumula más capital por trabajador y termina con un estado estacionario de mayor producción por trabajador que Elizal. Sin embargo, apenas ambos países alcanzan sus respectivos estados estacionarios, su tasa de crecimiento vuelve a ser la misma —cero, si no hay progreso tecnológico— aunque Altamira quede permanentemente más rica que Elizal.',
        },
        {
          type: 'heading',
          text: 'El crecimiento de la población diluye el capital',
        },
        {
          type: 'paragraph',
          text: 'Cuando la población crece, la fuerza laboral también crece: cada año hay más trabajadores entre los que repartir el mismo stock de capital. Si la inversión solo alcanzara para reponer la depreciación, el capital por trabajador caería, porque los trabajadores nuevos entrarían prácticamente sin herramientas. Por eso, para mantener constante el capital por trabajador, la inversión debe cubrir dos cosas a la vez: la depreciación del capital existente y el capital necesario para equipar a los nuevos trabajadores que se suman cada año.',
        },
        {
          type: 'formula',
          label: 'Inversión necesaria para mantener constante el capital por trabajador',
          text: 'Inversión de reposición = (Tasa de depreciación + Tasa de crecimiento poblacional) × Capital por trabajador',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'La regla de oro del ahorro',
          text: 'La regla de oro es el nivel de capital por trabajador que maximiza el consumo de largo plazo. Ahorrar muy poco deja poco capital y poca producción, así que hay poco para consumir. Pero ahorrar demasiado también reduce el consumo posible: un capital por trabajador muy alto exige tanta inversión de reposición (para cubrir depreciación y crecimiento poblacional) que queda poco de la producción para consumo. El punto óptimo no es ahorrar lo máximo posible, sino ahorrar la cantidad que deja el mayor consumo sostenible en el tiempo.',
        },
      ],
      exercises: [
        {
          id: 'u12-l2-e1',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'Una economía tiene un capital por trabajador de $50.000 y su fuerza laboral crece a una tasa de 3% anual. Sin contar la depreciación, ¿cuántos pesos de inversión adicional por trabajador se necesitan solo para mantener el capital por trabajador constante ante el crecimiento poblacional?',
          unitLabel: '$',
          answer: 1500,
          hint: 'Multiplica el capital por trabajador por la tasa de crecimiento poblacional.',
          explanation: 'Inversión adicional por crecimiento poblacional = $50.000 × 0,03 = $1.500.',
        },
        {
          id: 'u12-l2-e2',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Un país sube su tasa de ahorro del 20% al 40% de su producción. Una vez que la economía alcanza su nuevo estado estacionario, ¿qué ocurre con la tasa de crecimiento de largo plazo de la producción por trabajador, según el modelo de Solow?',
          options: [
            {
              id: 'a',
              text: 'Vuelve a ser la misma que antes, aunque el nivel de capital y producción por trabajador quede permanentemente más alto',
            },
            { id: 'b', text: 'Se duplica de manera permanente, igual que se duplicó la tasa de ahorro' },
            { id: 'c', text: 'La producción por trabajador crece para siempre a una tasa cada vez mayor' },
            { id: 'd', text: 'El país entra en una recesión permanente por invertir demasiado' },
          ],
          correctOptionId: 'a',
          explanation:
            'Subir la tasa de ahorro eleva el nivel del estado estacionario (más capital y producción por trabajador), pero no cambia la tasa de crecimiento sostenida de largo plazo, que en el modelo básico de Solow vuelve a estabilizarse una vez alcanzado el nuevo equilibrio.',
        },
        {
          id: 'u12-l2-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'El país Valduna ahorra el 45% de su producción, muy por encima de lo necesario para alcanzar la regla de oro. Su capital por trabajador en el estado estacionario es alto, pero gran parte de la producción se destina cada año a reponer la enorme depreciación de ese capital, dejando relativamente poco disponible para consumo de los hogares.',
          question: '¿Qué sugiere el modelo de Solow respecto a la tasa de ahorro de Valduna?',
          options: [
            {
              id: 'a',
              text: 'Debería reducir su tasa de ahorro, porque está por sobre el nivel de la regla de oro y eso implica menos consumo de largo plazo del que sería posible',
            },
            { id: 'b', text: 'Debería subir aún más su tasa de ahorro, porque más ahorro siempre implica más consumo' },
            { id: 'c', text: 'Debería mantener su tasa de ahorro, porque el nivel de capital no afecta el consumo disponible' },
            { id: 'd', text: 'Debería eliminar el ahorro por completo para maximizar el consumo inmediato' },
          ],
          correctOptionId: 'a',
          explanation:
            'Por sobre la regla de oro, ahorrar más reduce el consumo de largo plazo: el capital adicional exige más inversión de reposición (depreciación y crecimiento poblacional) de la que alcanza a compensar el aumento en producción que genera.',
        },
        {
          id: 'u12-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 20,
          prompt:
            'Explica qué es la regla de oro del capital en el modelo de Solow y por qué tanto ahorrar muy poco como ahorrar demasiado puede dejar a un país con menos consumo del que podría tener.',
          keyPoints: [
            {
              id: 'golden_rule_definition',
              label: 'Define la regla de oro como el nivel de capital por trabajador que maximiza el consumo de largo plazo',
              synonyms: [
                'maximiza el consumo',
                'mayor consumo posible',
                'nivel optimo de capital',
                'consumo sostenible mas alto',
                'punto que maximiza el consumo de largo plazo',
                'mejor nivel de capital para consumir',
              ],
            },
            {
              id: 'too_little_saving',
              label: 'Explica que ahorrar muy poco deja poco capital, poca producción y por lo tanto poco consumo',
              synonyms: [
                'ahorrar poco',
                'poco capital poca produccion',
                'baja inversion',
                'menos produccion menos consumo',
                'capital insuficiente',
                'muy poco ahorro limita el consumo',
              ],
            },
            {
              id: 'too_much_saving',
              label: 'Explica que ahorrar demasiado exige tanta inversión de reposición que también reduce el consumo disponible',
              synonyms: [
                'ahorrar demasiado',
                'exceso de ahorro',
                'demasiada inversion de reposicion',
                'depreciacion muy alta',
                'poco queda para consumir',
                'sobreinversion reduce el consumo',
                'demasiado capital cuesta mantenerlo',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'La regla de oro es el nivel de capital por trabajador que deja el mayor consumo posible en el largo plazo. Si un país ahorra muy poco, acumula poco capital, produce poco y por lo tanto puede consumir poco. Pero si ahorra demasiado, el capital por trabajador queda tan alto que buena parte de la producción se va en reponer la depreciación y equipar a los nuevos trabajadores, dejando también poco disponible para consumo. El óptimo está en un punto intermedio, ni muy bajo ni muy alto.',
          explanation:
            'Se espera que la respuesta defina la regla de oro como el nivel que maximiza el consumo de largo plazo y explique los dos extremos —ahorro insuficiente y ahorro excesivo— que reducen el consumo disponible.',
        },
        {
          id: 'u12-l2-e5',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          chart: {
            xLabel: 'Capital por trabajador (k)',
            yLabel: 'Inversión / Depreciación',
            xMax: 13,
            yMax: 7,
            lines: [
              { points: [{ x: 0, y: 0 }, { x: 3, y: 3 }, { x: 8, y: 4 }, { x: 12, y: 4.4 }], color: 'brand', label: 'sf(k)' },
              { points: [{ x: 0, y: 0 }, { x: 12, y: 6 }], color: 'accent', label: 'δk' },
            ],
            markers: [{ x: 8, y: 4, label: 'k*', guides: true }],
            caption: 'Inversión sf(k) y depreciación δk: el estado estacionario está en su cruce.',
          },
          question: 'Observa el gráfico de Solow. ¿Cuál es el capital por trabajador de estado estacionario (k*)?',
          unitLabel: 'unidades',
          answer: 8,
          hint: 'El estado estacionario es donde la curva de inversión cruza a la recta de depreciación.',
          explanation:
            'En k* la inversión iguala exactamente a la depreciación (ambas valen 4), así que el capital por trabajador deja de cambiar. El gráfico marca ese cruce en k* = 8. Antes de ese punto la inversión supera a la depreciación y k crece; después, la depreciación gana y k caería.',
        },
        {
          id: 'u12-l2-e6',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          chart: {
            xLabel: 'Capital por trabajador (k)',
            yLabel: 'Inversión / Depreciación',
            xMax: 13,
            yMax: 7,
            lines: [
              { points: [{ x: 0, y: 0 }, { x: 2, y: 2.4 }, { x: 6, y: 3 }, { x: 12, y: 3.6 }], color: 'muted', dashed: true, label: 's₁f(k)' },
              { points: [{ x: 0, y: 0 }, { x: 2, y: 3 }, { x: 10, y: 5 }, { x: 12, y: 5.2 }], color: 'brand', label: 's₂f(k)' },
              { points: [{ x: 0, y: 0 }, { x: 12, y: 6 }], color: 'accent', label: 'δk' },
            ],
            caption: 'Un aumento de la tasa de ahorro desplaza la curva de inversión de s₁f(k) a s₂f(k).',
          },
          scenario: 'Un país logra aumentar en forma permanente su tasa de ahorro, y su curva de inversión sube de s₁f(k) a s₂f(k).',
          question: 'Según el gráfico, ¿qué ocurre con el capital por trabajador de estado estacionario?',
          options: [
            { id: 'a', text: 'Aumenta: la nueva curva de inversión cruza a la depreciación en un k* mayor (de 6 a 10)' },
            { id: 'b', text: 'Disminuye, porque ahorrar más deja menos para invertir' },
            { id: 'c', text: 'No cambia: el estado estacionario no depende del ahorro' },
            { id: 'd', text: 'Se vuelve cero' },
          ],
          correctOptionId: 'a',
          explanation:
            'Con más ahorro, a cada nivel de capital se invierte más, así que la curva de inversión se desplaza hacia arriba. El cruce con la recta de depreciación δk ocurre ahora en un capital mayor: k* sube de 6 a 10. El país transita hacia un nuevo estado estacionario con más capital y más producto por trabajador (aunque, a la larga, la tasa de crecimiento vuelve a depender de la tecnología).',
        },
      ],
    },
    {
      id: 'u12-l3',
      title: 'El progreso tecnológico como motor último del crecimiento',
      summary: 'Por qué la acumulación de capital tiene un límite y por qué el progreso tecnológico es la única fuente de crecimiento sostenido.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'Por qué la acumulación de capital, sola, no basta',
        },
        {
          type: 'paragraph',
          text: 'El modelo de Solow muestra que un país puede volverse más rico ahorrando e invirtiendo más, pero ese camino tiene un techo. Debido a los rendimientos decrecientes, cada unidad adicional de capital por trabajador aporta cada vez menos producción extra, mientras que la depreciación que hay que reponer crece de forma proporcional al capital acumulado. Tarde o temprano, ambas fuerzas se igualan en un nuevo estado estacionario y el crecimiento de la producción por trabajador se detiene, sin importar cuánto siga ahorrando el país.',
        },
        {
          type: 'formula',
          label: 'Rendimientos decrecientes del capital',
          text: 'Cada nueva unidad de capital por trabajador aumenta la producción por trabajador, pero en una magnitud cada vez menor',
        },
        {
          type: 'example',
          title: 'Ejemplo: el tamaño de una economía',
          text: 'Un país tiene una producción por trabajador de $12.000 y una fuerza laboral de 5.000.000 de personas. Su producción total es 12.000 × 5.000.000 = $60.000.000.000, es decir, $60.000 millones. Ese total depende tanto de cuánto produce cada trabajador como de cuántos trabajadores hay, pero solo la producción por trabajador —no el simple número de personas— refleja el nivel de vida promedio del país.',
        },
        {
          type: 'heading',
          text: 'El progreso tecnológico desplaza la función de producción',
        },
        {
          type: 'paragraph',
          text: 'El progreso tecnológico —mejores métodos de organización, nuevas máquinas más eficientes, procesos productivos más inteligentes— permite obtener más producción con la misma cantidad de capital y de trabajadores. A diferencia de acumular más capital, que choca contra los rendimientos decrecientes, el progreso tecnológico desplaza hacia arriba toda la función de producción: ahora cada nivel de capital por trabajador rinde más que antes. Por eso el modelo de Solow concluye que, en el muy largo plazo, es la única fuente capaz de sostener mejoras continuas en el nivel de vida, sin toparse con un techo.',
        },
        {
          type: 'formula',
          label: 'El motor último del crecimiento sostenido',
          text: 'Crecimiento sostenido del PIB por trabajador en el muy largo plazo = Tasa de progreso tecnológico',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Por qué importa esta distinción',
          text: 'Las enormes diferencias de riqueza entre países a lo largo de generaciones no se explican solo por cuánto ahorra cada uno, sino sobre todo por su capacidad de innovar, adoptar tecnología y mejorar sus procesos productivos. Un país puede ahorrar mucho y aun así estancarse si no progresa tecnológicamente; otro con un ahorro moderado pero innovación constante puede superarlo en pocas décadas.',
        },
      ],
      exercises: [
        {
          id: 'u12-l3-e1',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'Un país tiene una producción por trabajador de $15.000 y una fuerza laboral de 4.000.000 de personas. ¿Cuál es su producción total, en millones de dólares?',
          unitLabel: 'millones de $',
          answer: 60000,
          hint: 'Multiplica la producción por trabajador por el número de trabajadores, y luego convierte el resultado a millones.',
          explanation: 'Producción total = $15.000 × 4.000.000 = $60.000.000.000 = $60.000 millones.',
        },
        {
          id: 'u12-l3-e2',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Una vez que un país alcanza su estado estacionario de capital, ¿qué es lo único que puede seguir generando crecimiento sostenido en la producción por trabajador, según el modelo de Solow?',
          options: [
            { id: 'a', text: 'El progreso tecnológico, que permite producir más con la misma cantidad de capital y trabajo' },
            { id: 'b', text: 'Ahorrar una fracción todavía mayor de la producción cada año' },
            { id: 'c', text: 'Aumentar el tamaño de la fuerza laboral' },
            { id: 'd', text: 'Nada; una vez en el estado estacionario, la producción por trabajador no puede volver a crecer' },
          ],
          correctOptionId: 'a',
          explanation:
            'En el estado estacionario, ahorrar más solo desplaza al país a otro estado estacionario más alto (un efecto de nivel), y más trabajadores diluyen el capital disponible por persona. Solo el progreso tecnológico desplaza la función de producción y permite un crecimiento sostenido de la producción por trabajador.',
        },
        {
          id: 'u12-l3-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Los países Kelmar y Sureste tenían el mismo nivel de capital y producción por trabajador hace cuatro décadas. Kelmar mantuvo una tasa de ahorro alta, pero prácticamente no adoptó nuevas tecnologías ni mejoró sus procesos productivos. Sureste, con una tasa de ahorro similar a la de Kelmar, invirtió sistemáticamente en investigación, educación técnica y adopción de nuevas tecnologías.',
          question: '¿Qué es más probable que haya ocurrido con la producción por trabajador de ambos países en estas cuatro décadas, según el modelo de Solow?',
          options: [
            {
              id: 'a',
              text: 'Sureste probablemente creció mucho más que Kelmar, porque el progreso tecnológico permite seguir aumentando la producción por trabajador incluso después de alcanzar el estado estacionario del capital',
            },
            { id: 'b', text: 'Ambos países crecieron exactamente igual, porque tenían la misma tasa de ahorro' },
            { id: 'c', text: 'Kelmar creció más, porque ahorrar es lo único que importa para el crecimiento de largo plazo' },
            { id: 'd', text: 'Ninguno de los dos pudo haber crecido, porque el capital por trabajador ya estaba en su estado estacionario' },
          ],
          correctOptionId: 'a',
          explanation:
            'Con una tasa de ahorro similar, ambos países convergerían a un estado estacionario de capital parecido y dejarían de crecer por esa vía. La diferencia decisiva es que Sureste siguió progresando tecnológicamente, lo que le permitió seguir aumentando su producción por trabajador mientras Kelmar se estancaba.',
        },
        {
          id: 'u12-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 15,
          prompt:
            'Explica por qué, según el modelo de Solow, la acumulación de capital por sí sola no puede sostener el crecimiento de la producción por trabajador para siempre, y por qué el progreso tecnológico sí puede.',
          keyPoints: [
            {
              id: 'diminishing_returns_limit',
              label: 'Explica que los rendimientos decrecientes hacen que la acumulación de capital, sola, tenga un límite',
              synonyms: [
                'rendimientos decrecientes',
                'cada vez aporta menos',
                'el capital rinde menos',
                'limite de la acumulacion',
                'la inversion sola no basta',
                'techo del crecimiento por capital',
              ],
            },
            {
              id: 'steady_state_stops_growth',
              label: 'Explica que sin progreso tecnológico la economía converge a un estado estacionario donde el crecimiento por trabajador se detiene',
              synonyms: [
                'converge al estado estacionario',
                'se detiene el crecimiento',
                'deja de crecer',
                'llega a un techo',
                'se estanca sin tecnologia',
                'el crecimiento se frena',
              ],
            },
            {
              id: 'technology_sustains_growth',
              label: 'Explica que el progreso tecnológico desplaza la función de producción y permite crecimiento sostenido sin ese límite',
              synonyms: [
                'progreso tecnologico',
                'desplaza la funcion de produccion',
                'produce mas con lo mismo',
                'innovacion sostiene el crecimiento',
                'nuevas tecnologias rompen el limite',
                'unica fuente de crecimiento sostenido',
                'mejora continua sin techo',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'La acumulación de capital choca con los rendimientos decrecientes: cada unidad adicional de capital por trabajador aporta cada vez menos producción extra, mientras que la depreciación a reponer crece junto con el capital. Por eso, sin cambios tecnológicos, la economía converge a un estado estacionario en el que la producción por trabajador deja de crecer. El progreso tecnológico es distinto porque no depende de acumular más capital: permite producir más con la misma cantidad de capital y trabajo, desplazando hacia arriba toda la función de producción. Por eso es la única fuente capaz de sostener el crecimiento en el muy largo plazo.',
          explanation:
            'Una buena respuesta menciona los rendimientos decrecientes y la convergencia al estado estacionario como límite de la acumulación de capital, y explica que el progreso tecnológico desplaza la función de producción, evitando ese límite.',
        },
        {
          id: 'u12-l3-e5',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question: 'En el modelo de Solow, ¿por qué el progreso tecnológico —y no la acumulación de capital— es el motor último del crecimiento de largo plazo?',
          options: [
            { id: 'a', text: 'Porque el capital sufre rendimientos decrecientes y su acumulación se agota en el estado estacionario, mientras la tecnología desplaza la función de producción y permite crecer indefinidamente' },
            { id: 'b', text: 'Porque el capital se deprecia y la tecnología no cuesta nada' },
            { id: 'c', text: 'Porque la tecnología reduce la tasa de ahorro necesaria a cero' },
            { id: 'd', text: 'Porque sin tecnología no existe depreciación' },
          ],
          correctOptionId: 'a',
          explanation:
            'Acumular capital eleva el nivel de producto, pero por los rendimientos decrecientes el efecto se agota al llegar al estado estacionario. El progreso tecnológico, en cambio, desplaza hacia arriba la función de producción completa: con el mismo capital se produce más, y ese desplazamiento puede repetirse período tras período, sosteniendo el crecimiento del producto por trabajador en el largo plazo.',
        },
        {
          id: 'u12-l3-e6',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'El PIB por persona de un país crece al 2% anual gracias al progreso tecnológico. Usando la regla del 70, ¿en cuántos años aproximadamente se duplicará su PIB por persona?',
          unitLabel: 'años',
          answer: 35,
          hint: 'Regla del 70: años para duplicar ≈ 70 ÷ tasa de crecimiento anual.',
          explanation:
            'La regla del 70 aproxima el tiempo de duplicación: 70 ÷ 2 = 35 años. Pequeñas diferencias sostenidas en la tasa de crecimiento generan enormes diferencias de nivel de vida entre generaciones: a 1% tomaría 70 años; a 4%, solo 17,5.',
        },
      ],
    },
  ],
};
