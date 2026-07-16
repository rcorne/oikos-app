import type { Unit } from '@/content/types';

export const unit01: Unit = {
  id: 'u1',
  index: 1,
  title: 'Principios y pensamiento económico',
  subtitle: 'Escasez, márgenes y ventaja comparativa',
  description:
    'Las ideas fundacionales de la economía: por qué existen los trade-offs, cómo piensan los economistas en el margen, y por qué el comercio beneficia a todos los que participan en él.',
  icon: 'compass-outline',
  color: '#4F42C4',
  source: 'ambos',
  lessons: [
    {
      id: 'u1-l1',
      title: 'Escasez, incentivos y pensar en el margen',
      summary: 'Por qué todo tiene un costo y cómo los economistas toman decisiones "un poco a la vez".',
      estimatedMinutes: 6,
      content: [
        {
          type: 'heading',
          text: 'La economía empieza con la escasez',
        },
        {
          type: 'paragraph',
          text: 'La economía estudia cómo las personas, empresas y sociedades administran recursos que son escasos: tiempo, dinero, materias primas, atención. Como los recursos no alcanzan para todo lo que querríamos hacer, cada elección implica renunciar a algo más. A eso lo llamamos un trade-off.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'No hay almuerzo gratis',
          text: 'Incluso lo que parece "gratuito" tiene un costo de oportunidad: el tiempo que dedicaste a conseguirlo, o lo que dejaste de hacer mientras tanto.',
        },
        {
          type: 'heading',
          text: 'Pensar en el margen',
        },
        {
          type: 'paragraph',
          text: 'Muchas decisiones no son "todo o nada", sino ajustes pequeños: ¿estudio una hora más?, ¿la fábrica produce una unidad adicional?, ¿el restaurante abre una mesa extra? Un economista compara el beneficio marginal (lo que se gana con esa unidad extra) contra el costo marginal (lo que cuesta producirla o hacerla). Si el beneficio marginal supera al costo marginal, conviene hacerlo.',
        },
        {
          type: 'example',
          title: 'Ejemplo: el último pan del día',
          text: 'Una panadería vende cada pan a $1.200. Ya cubrió todos sus costos fijos del día (arriendo, horno, sueldos). Hornear un pan adicional le cuesta $850 en harina, gas y tiempo extra. Aunque el pan "cuesta" en promedio mucho más si se reparten los costos fijos entre pocas unidades, la decisión de hornear uno más solo depende del costo marginal: $850 contra un ingreso de $1.200. Como el beneficio marginal ($1.200) es mayor al costo marginal ($850), conviene hornear el pan extra.',
        },
        {
          type: 'heading',
          text: 'Los incentivos importan',
        },
        {
          type: 'paragraph',
          text: 'Las personas responden a incentivos: cambios en precios, premios, multas o subsidios modifican el comportamiento porque alteran el beneficio o el costo marginal de una acción. Por eso las políticas públicas —impuestos, subsidios, regulaciones— siempre generan reacciones, a veces distintas a las que el diseñador de la política esperaba.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Efectos no buscados',
          text: 'Un subsidio pensado para bajar el precio de un bien puede terminar incentivando un consumo tan alto que genere escasez o filas. Cambiar un incentivo casi nunca afecta una sola variable.',
        },
      ],
      exercises: [
        {
          id: 'u1-l1-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '"Pensar en el margen" significa principalmente...',
          options: [
            { id: 'a', text: 'Comparar el beneficio y el costo de una unidad adicional de algo' },
            { id: 'b', text: 'Calcular el costo promedio total de producir un bien' },
            { id: 'c', text: 'Elegir siempre la opción más barata disponible' },
            { id: 'd', text: 'Ignorar los costos fijos al fijar el precio de venta' },
          ],
          correctOptionId: 'a',
          explanation:
            'Pensar en el margen es evaluar decisiones incrementales: ¿vale la pena una unidad más, una hora más, un cliente más? Se compara el beneficio marginal con el costo marginal, no con el promedio.',
        },
        {
          id: 'u1-l1-e2',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'Una heladería vende cada helado a $1.500. El costo marginal de preparar un helado adicional (insumos y tiempo) es $980. Si prepara y vende uno más, ¿cuál es la ganancia marginal en pesos?',
          unitLabel: '$',
          answer: 520,
          explanation: 'Ganancia marginal = beneficio marginal − costo marginal = 1.500 − 980 = 520.',
        },
        {
          id: 'u1-l1-e3',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Martina tiene un examen mañana. Puede estudiar una hora más (mejorando su nota esperada en un valor que ella estima) o tomar un turno extra en su trabajo de medio tiempo, pagado por hora. Ya estudió varias horas y ya trabajó su jornada habitual.',
          question: '¿Cómo debería decidir Martina si estudiar la hora extra o tomar el turno de trabajo?',
          options: [
            { id: 'a', text: 'Comparando el beneficio marginal de esa hora de estudio con el costo de oportunidad del sueldo que dejaría de ganar' },
            { id: 'b', text: 'Sumando todas las horas que ya estudió en el semestre para decidir' },
            { id: 'c', text: 'Eligiendo siempre estudiar, porque la educación nunca tiene costo de oportunidad' },
            { id: 'd', text: 'Preguntando cuál actividad es más entretenida' },
          ],
          correctOptionId: 'a',
          explanation:
            'La decisión racional en el margen compara el beneficio marginal de la hora adicional de estudio (por ejemplo, en puntos de nota) contra su costo de oportunidad: el sueldo de esa hora de trabajo que dejaría de percibir.',
        },
        {
          id: 'u1-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 20,
          prompt:
            'Explica con tus palabras qué significa "pensar en el margen" en economía, y da un ejemplo distinto al de la panadería visto en la lección.',
          keyPoints: [
            {
              id: 'marginal_change',
              label: 'Se refiere a una unidad o cambio adicional, no al total o al promedio',
              synonyms: ['unidad adicional', 'una hora mas', 'un poco mas', 'incremento pequeño', 'cambio marginal', 'algo extra', 'uno mas'],
            },
            {
              id: 'compare_benefit_cost',
              label: 'Se compara el beneficio marginal con el costo marginal',
              synonyms: ['beneficio marginal', 'costo marginal', 'comparar beneficio', 'vale la pena', 'conviene o no'],
            },
            {
              id: 'own_example',
              label: 'Entrega un ejemplo propio y distinto al de la lección',
              synonyms: ['por ejemplo', 'imaginemos', 'supongamos', 'en mi caso', 'un caso'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Pensar en el margen es decidir si conviene hacer "una unidad más" de algo, comparando lo que se gana (beneficio marginal) con lo que cuesta (costo marginal) esa unidad extra, en vez de mirar promedios o totales. Por ejemplo, un gimnasio decide si abrir un cupo más en una clase: si el ingreso de ese cupo supera el costo extra de atenderlo, conviene abrirlo.',
          explanation:
            'Una buena respuesta identifica que el análisis marginal mira cambios pequeños (una unidad, una hora) y que la regla de decisión es comparar beneficio marginal contra costo marginal, ilustrado con un ejemplo propio.',
        },
      ],
    },
    {
      id: 'u1-l2',
      title: 'Costo de oportunidad: el verdadero precio de elegir',
      summary: 'Por qué el costo de una decisión es lo que dejas de hacer, y por qué el pasado no debería importar.',
      estimatedMinutes: 6,
      content: [
        {
          type: 'heading',
          text: 'El costo de oportunidad',
        },
        {
          type: 'paragraph',
          text: 'El costo de oportunidad de una decisión es el valor de la mejor alternativa que se deja de lado al elegirla. No es solo el dinero que se desembolsa: también incluye el tiempo, el esfuerzo y cualquier beneficio al que se renuncia.',
        },
        {
          type: 'example',
          title: 'Ejemplo: estudiar en la universidad',
          text: 'El costo de "ir a la universidad" no es solo la matrícula. También incluye el sueldo que la persona habría podido ganar si hubiera trabajado esas horas en vez de estudiar. Ese sueldo no pagado es parte del costo de oportunidad, aunque nunca aparezca en una boleta.',
        },
        {
          type: 'heading',
          text: 'La trampa de los costos hundidos',
        },
        {
          type: 'paragraph',
          text: 'Un costo hundido es un gasto que ya se realizó y que no se puede recuperar decidas lo que decidas ahora. La teoría económica dice que las decisiones racionales deben ignorar los costos hundidos y mirar solo los costos y beneficios futuros. Sin embargo, las personas reales caen a menudo en la "falacia del costo hundido": seguir con algo solo porque ya invirtieron en ello.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Ejemplo de la falacia',
          text: 'Terminar de ver una película aburrida "porque ya pagaste la entrada" no cambia el hecho de que la entrada no se recupera decidas quedarte o irte. Lo único relevante hacia adelante es si disfrutarás el tiempo que falta.',
        },
        {
          type: 'heading',
          text: 'La regla costo-beneficio',
        },
        {
          type: 'paragraph',
          text: 'Una decisión racional se toma comparando el beneficio marginal futuro con el costo marginal futuro de una acción, sin dejar que los costos ya incurridos —y ya irrecuperables— influyan en la comparación.',
        },
      ],
      exercises: [
        {
          id: 'u1-l2-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'Camila puede pasar la tarde trabajando, lo que le paga $20.000, o ir al cine con una entrada de $6.000. Si elige ir al cine, ¿cuál es su costo de oportunidad total?',
          options: [
            { id: 'a', text: '$6.000' },
            { id: 'b', text: '$20.000' },
            { id: 'c', text: '$26.000' },
            { id: 'd', text: '$14.000' },
          ],
          correctOptionId: 'c',
          explanation:
            'El costo de oportunidad incluye el gasto directo ($6.000 de la entrada) más el sueldo al que renuncia por no trabajar ($20.000), es decir, $26.000 en total.',
        },
        {
          id: 'u1-l2-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Joaquín puede trabajar como ayudante y ganar $15.000 en una tarde, o asistir a un taller gratuito de 3 horas. El taller no tiene costo de inscripción. ¿Cuál es el costo de oportunidad de asistir al taller, en pesos?',
          unitLabel: '$',
          answer: 15000,
          explanation:
            'Aunque el taller es "gratis" en dinero, Joaquín renuncia al sueldo de $15.000 que habría ganado trabajando esa tarde. Ese sueldo no percibido es el costo de oportunidad.',
        },
        {
          id: 'u1-l2-e3',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Felipe compró una entrada no reembolsable de $25.000 para un concierto. El día del evento amanece con fiebre y sabe que disfrutará muy poco si va. Un amigo le ofrece, sin costo, una entrada a otro evento que le encantaría mucho más esa misma noche.',
          question: '¿Qué debería considerar Felipe al decidir, según el razonamiento económico sobre costos hundidos?',
          options: [
            {
              id: 'a',
              text: 'Los $25.000 ya están gastados y no se recuperan vaya o no vaya, así que no deberían influir en su decisión',
            },
            { id: 'b', text: 'Debe ir al concierto sí o sí, porque ya pagó la entrada' },
            { id: 'c', text: 'El costo de oportunidad de ir al concierto es cero, porque la otra entrada es gratis' },
            { id: 'd', text: 'Lo más racional es sumar ambos costos y elegir la actividad más cara' },
          ],
          correctOptionId: 'a',
          explanation:
            'Los $25.000 son un costo hundido: ya se gastaron y no cambian según lo que Felipe decida ahora. La decisión racional compara únicamente el disfrute esperado de cada opción hacia adelante, ignorando el dinero ya perdido.',
        },
        {
          id: 'u1-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 20,
          prompt:
            'Explica por qué los costos hundidos no deberían influir en una decisión racional, y describe un ejemplo (real o inventado) en el que alguien caiga en la falacia del costo hundido.',
          keyPoints: [
            {
              id: 'irrecoverable',
              label: 'Explica que el costo hundido ya se pagó y no se puede recuperar',
              synonyms: ['ya se gasto', 'no se recupera', 'irrecuperable', 'ya pague', 'esta perdido', 'no vuelve'],
            },
            {
              id: 'forward_looking',
              label: 'Indica que la decisión racional solo debe mirar costos y beneficios futuros',
              synonyms: ['hacia adelante', 'futuro', 'de ahora en adelante', 'lo que viene', 'no el pasado'],
            },
            {
              id: 'example_given',
              label: 'Entrega un ejemplo concreto de la falacia',
              synonyms: ['por ejemplo', 'como cuando', 'imaginemos', 'un caso', 'suponte'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Los costos hundidos no deberían importar porque ya se gastaron y son irrecuperables sin importar qué decidamos ahora; lo único relevante es comparar los costos y beneficios que vienen hacia adelante. Por ejemplo, alguien que sigue yendo a un curso que no le sirve solo "porque ya lo pagó" está cometiendo la falacia: el dinero del curso no vuelve, decida ir o no ir.',
          explanation:
            'Se espera que la respuesta explique que el costo hundido es irrecuperable, que la decisión racional mira solo el futuro, y que ilustre la falacia con un ejemplo.',
        },
      ],
    },
    {
      id: 'u1-l3',
      title: 'Ventaja comparativa y las ganancias del comercio',
      summary: 'Por qué comerciar beneficia a ambas partes, incluso cuando una es mejor produciendo todo.',
      estimatedMinutes: 7,
      content: [
        {
          type: 'heading',
          text: 'Especialización: por qué comerciamos',
        },
        {
          type: 'paragraph',
          text: 'Tener ventaja absoluta en un bien significa producirlo usando menos recursos que otro productor. Pero lo que determina si conviene comerciar no es la ventaja absoluta, sino la ventaja comparativa: quién tiene el menor costo de oportunidad de producir ese bien.',
        },
        {
          type: 'example',
          title: 'Ejemplo: empanadas y tortas',
          text: 'En una hora, Sofía puede hacer 4 empanadas o 2 tortas. En esa misma hora, Bruno puede hacer 3 empanadas o 3 tortas. El costo de oportunidad de 1 torta para Sofía es 2 empanadas (4/2); para Bruno es 1 empanada (3/3). Bruno tiene menor costo de oportunidad en tortas, así que tiene ventaja comparativa en tortas. El costo de oportunidad de 1 empanada para Sofía es 0,5 tortas (2/4); para Bruno es 1 torta (3/3). Sofía tiene ventaja comparativa en empanadas. Si cada una se especializa en lo que hace comparativamente mejor y luego intercambian, ambas pueden terminar con más de ambos productos que si trabajaran solas.',
        },
        {
          type: 'heading',
          text: 'Cómo calcular el costo de oportunidad de producción',
        },
        {
          type: 'formula',
          label: 'Costo de oportunidad de X en términos de Y',
          text: 'Costo de oportunidad de X = (unidades de Y a las que se renuncia) ÷ (unidades de X que se ganan)',
        },
        {
          type: 'callout',
          tone: 'tip',
          text: 'La ventaja comparativa siempre existe entre dos productores, aunque uno sea mejor en absolutamente todo: lo que importa es en qué bien es relativamente mejor cada uno.',
        },
      ],
      exercises: [
        {
          id: 'u1-l3-e1',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Bruno puede producir 5 sillas o 10 mesas en un día. ¿Cuál es su costo de oportunidad de producir 1 silla, expresado en mesas?',
          unitLabel: 'mesas',
          answer: 2,
          decimals: 0,
          explanation: 'Costo de oportunidad = unidades de mesas a las que renuncia ÷ unidades de sillas ganadas = 10 ÷ 5 = 2 mesas por silla.',
        },
        {
          id: 'u1-l3-e2',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'En un día, el país A produce 100 toneladas de trigo u 50 toneladas de acero. El país B produce 60 toneladas de trigo o 60 toneladas de acero. ¿Quién tiene ventaja comparativa en trigo?',
          options: [
            { id: 'a', text: 'El país A, porque su costo de oportunidad del trigo (0,5 acero) es menor que el de B (1 acero)' },
            { id: 'b', text: 'El país B, porque produce menos trigo en total' },
            { id: 'c', text: 'Ninguno, porque A produce más de ambos bienes' },
            { id: 'd', text: 'El país A, porque tiene ventaja absoluta en trigo' },
          ],
          correctOptionId: 'a',
          explanation:
            'El costo de oportunidad del trigo para A es 50/100 = 0,5 toneladas de acero por tonelada de trigo. Para B es 60/60 = 1 tonelada de acero por tonelada de trigo. Como A renuncia a menos acero por cada trigo que produce, A tiene ventaja comparativa en trigo, independiente de que también sea más productivo en términos absolutos.',
        },
        {
          id: 'u1-l3-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Una abogada es más rápida escribiendo contratos que su asistente, y también escribe más rápido a máquina que su asistente. Aun así, contrata a un asistente para que escriba y archive los documentos mientras ella se dedica solo a los casos legales.',
          question: '¿Por qué tiene sentido económico esta decisión, aunque la abogada sea mejor en ambas tareas?',
          options: [
            {
              id: 'a',
              text: 'Porque el costo de oportunidad de que la abogada escriba documentos (horas de trabajo legal muy bien pagado) es más alto que el del asistente',
            },
            { id: 'b', text: 'Porque contratar siempre reduce los costos totales de una empresa' },
            { id: 'c', text: 'Porque la ventaja absoluta del asistente en escritura es mayor' },
            { id: 'd', text: 'Porque las leyes laborales obligan a delegar tareas administrativas' },
          ],
          correctOptionId: 'a',
          explanation:
            'Aunque la abogada tiene ventaja absoluta en ambas tareas, su costo de oportunidad de escribir documentos es altísimo (deja de generar ingresos legales muy valiosos). El asistente tiene ventaja comparativa en la tarea administrativa porque su costo de oportunidad es menor, así que la especialización maximiza el valor total generado.',
        },
        {
          id: 'u1-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 25,
          prompt:
            'Explica por qué dos países (o dos personas) pueden beneficiarse del comercio aunque uno de ellos sea más eficiente produciendo absolutamente todo.',
          keyPoints: [
            {
              id: 'comparative_advantage',
              label: 'Menciona la ventaja comparativa como concepto distinto de la ventaja absoluta',
              synonyms: ['ventaja comparativa', 'costo de oportunidad relativo', 'quien es relativamente mejor'],
            },
            {
              id: 'opportunity_cost_diff',
              label: 'Explica que lo que importa es la diferencia en costos de oportunidad entre ambos',
              synonyms: ['costo de oportunidad', 'renunciar a menos', 'quien pierde menos', 'costo relativo'],
            },
            {
              id: 'mutual_gains',
              label: 'Señala que la especialización y el intercambio generan más de ambos bienes para los dos',
              synonyms: ['ambos ganan', 'se benefician los dos', 'mas produccion total', 'ganancias del comercio', 'especializarse'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Aunque un país sea más productivo en todo (ventaja absoluta), lo relevante para el comercio es la ventaja comparativa: quién tiene menor costo de oportunidad en cada bien. Si cada país se especializa en el bien donde renuncia a menos del otro bien y luego comercian, la producción total de ambos bienes aumenta y los dos países terminan con más de lo que tendrían produciendo todo por su cuenta.',
          explanation:
            'Una buena respuesta distingue ventaja absoluta de comparativa, explica que la comparativa depende del costo de oportunidad relativo, y concluye que la especialización según esa ventaja genera ganancias mutuas.',
        },
      ],
    },
  ],
};
