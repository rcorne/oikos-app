import type { Unit } from '@/content/types';

export const unit01: Unit = {
  id: 'u1',
  index: 1,
  subject: 'microeconomia',
  title: 'Principios y pensamiento económico',
  subtitle: 'Escasez, márgenes y ventaja comparativa',
  description:
    'Las ideas fundacionales de la economía: por qué existen los trade-offs, cómo piensan los economistas en el margen, y por qué el comercio beneficia a todos los que participan en él.',
  icon: 'compass-outline',
  color: '#0F566E',
  source: 'ambos',
  lessons: [
    {
      id: 'u1-l1',
      title: 'Escasez, incentivos y pensar en el margen',
      summary: 'Por qué todo tiene un costo y cómo los economistas toman decisiones "un poco a la vez".',
      estimatedMinutes: 14,
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
        {
          id: 'u1-l1-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Un food truck vende cada sándwich a $2.000. Sus costos marginales son crecientes: los primeros 5 sándwiches cuestan menos de $1.400 cada uno, el sexto cuesta $1.400, el séptimo $1.900 y el octavo $2.300. Si sigue la regla marginal (producir mientras el beneficio marginal sea mayor o igual al costo marginal), ¿cuántos sándwiches en total le conviene producir?',
          unitLabel: 'sándwiches',
          answer: 7,
          hint: 'Compara el ingreso de cada sándwich adicional ($2.000) con su costo marginal, uno por uno.',
          explanation:
            'Cada sándwich extra aporta $2.000 de ingreso. El sexto conviene ($2.000 ≥ $1.400) y el séptimo también ($2.000 ≥ $1.900), pero el octavo no ($2.000 < $2.300). Por lo tanto, la producción óptima es 7 sándwiches.',
        },
        {
          id: 'u1-l1-e6',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'Una municipalidad empieza a cobrar $300 por cada bolsa plástica en los supermercados, y a las pocas semanas la mayoría de la gente lleva bolsas reutilizables. ¿Qué principio económico ilustra mejor este resultado?',
          options: [
            { id: 'a', text: 'Las personas responden a incentivos: el cobro elevó el costo marginal de usar bolsas plásticas' },
            { id: 'b', text: 'Los costos hundidos deben ignorarse al tomar decisiones' },
            { id: 'c', text: 'La ventaja comparativa determina quién debe producir cada bien' },
            { id: 'd', text: 'Los recursos dejan de ser escasos cuando sube su precio' },
          ],
          correctOptionId: 'a',
          explanation:
            'El cobro cambió el incentivo: usar una bolsa plástica ahora tiene un costo marginal explícito de $300, así que muchas personas ajustan su comportamiento y prefieren la alternativa reutilizable. Es un ejemplo directo de que los incentivos importan.',
        },
        {
          id: 'u1-l1-e7',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'Un lavado de autos cobra $8.000 por vehículo. Ya cubrió sus costos fijos del día y lavar un auto adicional le cuesta $3.500 en agua, insumos y tiempo. ¿Cuál es la ganancia marginal, en pesos, de atender un auto más?',
          unitLabel: '$',
          answer: 4500,
          explanation:
            'La decisión de atender un auto más solo depende del margen: ingreso marginal ($8.000) menos costo marginal ($3.500) = $4.500. Los costos fijos ya pagados no entran en el cálculo.',
        },
        {
          id: 'u1-l1-e8',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Una economía produce solo automóviles y computadoras. Sobre su frontera de posibilidades, el punto A corresponde a 600 automóviles y 2.200 computadoras. El punto D, en cambio, corresponde a 300 automóviles y 1.000 computadoras. ¿Qué describe mejor al punto D?',
          options: [
            { id: 'a', text: 'Es un punto ineficiente: queda dentro de la frontera, quizá por desempleo de recursos, y podrían producirse más de ambos bienes' },
            { id: 'b', text: 'Es un punto inalcanzable, porque exige más recursos de los que la economía tiene' },
            { id: 'c', text: 'Es más eficiente que A, porque usa menos recursos para producir' },
            { id: 'd', text: 'Es imposible de comparar con A sin conocer los precios de venta' },
          ],
          correctOptionId: 'a',
          explanation:
            'El punto D produce menos de ambos bienes que un punto sobre la frontera como A, así que queda dentro de ella. Representa un uso ineficiente de los recursos (por ejemplo, por desempleo): eliminando la causa, la economía podría aumentar la producción de autos y de computadoras a la vez.',
        },
        {
          id: 'u1-l1-e9',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Una empresa de reparto empieza a pagar a cada repartidor un bono fijo por cada entrega adicional que complete en el día. A las pocas semanas, el número promedio de entregas por repartidor sube de forma notable, sin que la empresa haya contratado más personal.',
          question: '¿Qué principio económico explica mejor este resultado?',
          options: [
            { id: 'a', text: 'Las personas responden a incentivos: el bono elevó el beneficio marginal de cada entrega extra, así que conviene hacer más' },
            { id: 'b', text: 'La ventaja comparativa: los repartidores se especializaron en entregar' },
            { id: 'c', text: 'Los costos hundidos: el sueldo ya pagado motiva a trabajar más' },
            { id: 'd', text: 'La escasez desapareció al aumentar la cantidad de entregas' },
          ],
          correctOptionId: 'a',
          explanation:
            'El bono cambió el incentivo de cada repartidor: ahora una entrega adicional tiene un beneficio marginal mayor, así que muchos ajustan su comportamiento y completan más entregas. Es un ejemplo directo de que las personas responden a los incentivos.',
        },
        {
          id: 'u1-l1-e10',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'Un taller arma bicicletas y vende cada una a $90.000. Sus costos marginales son crecientes: la 3ª bicicleta del día cuesta $60.000, la 4ª cuesta $85.000, la 5ª cuesta $95.000 y la 6ª cuesta $110.000 (las primeras dos cuestan aún menos). Siguiendo la regla marginal (producir mientras el ingreso marginal sea mayor o igual al costo marginal), ¿cuántas bicicletas en total conviene armar en el día?',
          unitLabel: 'bicicletas',
          answer: 4,
          hint: 'Cada bicicleta aporta $90.000 de ingreso. Compáralo, una por una, con el costo marginal creciente.',
          explanation:
            'El ingreso marginal es $90.000 por bicicleta. La 4ª conviene ($90.000 ≥ $85.000), pero la 5ª ya no ($90.000 < $95.000). Por lo tanto, la producción óptima es 4 bicicletas.',
        },
        {
          id: 'u1-l1-e11',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          chart: {
            xLabel: 'Cantidad (unidades)',
            yLabel: 'Valor ($)',
            xMax: 11,
            yMax: 110,
            lines: [
              { points: [{ x: 0, y: 100 }, { x: 10, y: 20 }], color: 'brand', label: 'BMg' },
              { points: [{ x: 0, y: 20 }, { x: 10, y: 100 }], color: 'accent', label: 'CMg' },
            ],
            markers: [{ x: 5, y: 60, label: 'E', guides: true }],
            caption: 'Beneficio marginal (BMg) decreciente y costo marginal (CMg) creciente.',
          },
          question:
            'Observa el gráfico. Siguiendo la regla marginal (producir mientras el beneficio marginal sea mayor o igual al costo marginal), ¿cuál es la cantidad óptima de unidades?',
          unitLabel: 'unidades',
          answer: 5,
          hint: 'La cantidad óptima está justo donde la curva BMg cruza a la curva CMg; lee su valor en el eje horizontal.',
          explanation:
            'A la izquierda del cruce cada unidad extra aporta más beneficio del que cuesta (BMg > CMg); a la derecha ocurre lo contrario. El punto E marca el cruce: siguiendo la guía hacia el eje horizontal se lee la cantidad óptima, 5 unidades (donde BMg = CMg = $60).',
        },
        {
          id: 'u1-l1-e12',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Un jardín infantil empieza a cobrar una multa pequeña a los padres que llegan tarde a buscar a sus hijos. Para sorpresa de todos, los atrasos aumentan en vez de disminuir. ¿Cuál es la mejor explicación económica de este resultado?',
          options: [
            {
              id: 'a',
              text: 'La multa cambió el incentivo de forma no buscada: llegar tarde pasó a tener un "precio" bajo y conocido, y a muchos padres les resulta más barato pagarlo que esforzarse por llegar a la hora',
            },
            { id: 'b', text: 'Los padres no responden a incentivos, así que ninguna multa puede afectar su conducta' },
            { id: 'c', text: 'La multa es un costo hundido y por eso los padres la ignoran' },
            { id: 'd', text: 'El resultado es imposible: subir el costo de una acción siempre la reduce' },
          ],
          correctOptionId: 'a',
          explanation:
            'Los incentivos importan, pero pueden operar en direcciones no buscadas. Antes, llegar tarde tenía un costo "moral" difuso; la multa lo reemplazó por un precio explícito y bajo, y para muchos padres pagar ese precio salió más barato que el esfuerzo de la puntualidad. Cambiar un incentivo casi nunca afecta una sola variable.',
        },
      ],
    },
    {
      id: 'u1-l2',
      title: 'Costo de oportunidad: el verdadero precio de elegir',
      summary: 'Por qué el costo de una decisión es lo que dejas de hacer, y por qué el pasado no debería importar.',
      estimatedMinutes: 14,
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
        {
          id: 'u1-l2-e5',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Valentina abrió una cafetería en un local que es de su propiedad, así que "no paga arriendo". Al final del año calcula sus ganancias restando solo los gastos en insumos y sueldos, y concluye que el negocio es un éxito. Una vecina le comenta que otro comerciante estaría dispuesto a arrendarle ese mismo local por $600.000 al mes.',
          question: '¿Qué está omitiendo Valentina en su cálculo, según el razonamiento económico?',
          options: [
            {
              id: 'a',
              text: 'El costo de oportunidad del local: los $600.000 mensuales de arriendo a los que renuncia por usarlo ella misma',
            },
            { id: 'b', text: 'Nada: como el local es suyo, usarlo efectivamente no tiene ningún costo' },
            { id: 'c', text: 'El precio que pagó por el local hace años, que debería restar cada mes de sus ganancias' },
            { id: 'd', text: 'Los costos hundidos de los insumos que ya compró durante el año' },
          ],
          correctOptionId: 'a',
          explanation:
            'Aunque no desembolsa arriendo, Valentina renuncia cada mes a los $600.000 que podría obtener arrendando el local. Ese ingreso no percibido es un costo de oportunidad real de su negocio, y un cálculo económico correcto debe incluirlo. El precio pagado por el local en el pasado, en cambio, es un costo hundido.',
        },
        {
          id: 'u1-l2-e6',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Renata pagó $30.000 no reembolsables por un curso online que ya no le entusiasma. Terminarlo le exige dedicar horas en las que podría ganar $40.000 trabajando, y ella estima que el certificado le reportará beneficios de $65.000. Ignorando el costo hundido, ¿cuál es el beneficio neto futuro de terminar el curso, en pesos?',
          unitLabel: '$',
          answer: 25000,
          hint: 'Los $30.000 ya se pagaron y no se recuperan: compara solo beneficios y costos futuros.',
          explanation:
            'Los $30.000 son un costo hundido y quedan fuera del cálculo. El beneficio futuro es $65.000 y el costo futuro es el sueldo al que renuncia: $40.000. Beneficio neto = 65.000 − 40.000 = 25.000, así que sí le conviene terminar.',
        },
        {
          id: 'u1-l2-e7',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'El sábado por la tarde, Sebastián puede dar 2 clases particulares que le pagan $12.000 cada una, o ir a un partido cuya entrada cuesta $9.000. Si elige ir al partido, ¿cuál es su costo de oportunidad total, en pesos?',
          unitLabel: '$',
          answer: 33000,
          hint: 'Suma lo que gasta directamente y el ingreso al que renuncia por no trabajar.',
          explanation:
            'El costo de oportunidad incluye el gasto directo de la entrada ($9.000) más el ingreso al que renuncia: 2 clases × $12.000 = $24.000. En total, $24.000 + $9.000 = $33.000.',
        },
        {
          id: 'u1-l2-e8',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'Andrea compró hace un mes un pase anual de gimnasio de $120.000 no reembolsable. Ahora se mudará lejos y evalúa si vale la pena seguir yendo las pocas semanas que le quedan. ¿Cuál de estos elementos es un costo hundido, irrelevante para esa decisión?',
          options: [
            { id: 'a', text: 'Los $120.000 del pase anual, que ya pagó y no recuperará vaya o no vaya' },
            { id: 'b', text: 'El tiempo de traslado hasta el gimnasio en las semanas que le quedan' },
            { id: 'c', text: 'El beneficio de salud que obtendría si sigue asistiendo' },
            { id: 'd', text: 'El costo de oportunidad de las horas que dedicaría a entrenar' },
          ],
          correctOptionId: 'a',
          explanation:
            'Los $120.000 ya se pagaron y no se recuperan decida Andrea ir o no: son un costo hundido y no deben influir en la decisión. En cambio, el tiempo de traslado, el beneficio de salud y el costo de oportunidad de esas horas son costos y beneficios futuros, que sí son relevantes.',
        },
        {
          id: 'u1-l2-e9',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'A Rodrigo le dicen que reparar su auto viejo costará $400.000, y que una vez reparado el auto le prestaría una utilidad de uso equivalente a unos $300.000 para él. Además, el mes pasado ya gastó $150.000 en otra reparación que no resolvió el problema.',
          question: 'Según la regla costo-beneficio, ¿qué debería hacer Rodrigo y por qué?',
          options: [
            {
              id: 'a',
              text: 'No reparar: el costo futuro ($400.000) supera al beneficio futuro ($300.000), y los $150.000 ya gastados son un costo hundido irrelevante',
            },
            { id: 'b', text: 'Reparar, porque ya invirtió $150.000 y no puede desperdiciar ese dinero' },
            { id: 'c', text: 'Reparar, porque sumando las dos reparaciones el auto le habrá costado menos que uno nuevo' },
            { id: 'd', text: 'No reparar, porque los $150.000 ya gastados hacen que el proyecto deje de ser rentable' },
          ],
          correctOptionId: 'a',
          explanation:
            'La decisión racional compara solo lo que viene hacia adelante: el costo futuro de reparar ($400.000) contra el beneficio futuro ($300.000). Como el costo supera al beneficio, no conviene reparar. Los $150.000 del mes pasado son un costo hundido y no cambian el cálculo (por eso la opción d, aunque acierta la acción, usa un razonamiento equivocado).',
        },
        {
          id: 'u1-l2-e10',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'Una diseñadora freelance puede aceptar un encargo de 6 horas por $75.000 en total, o usar esas mismas horas en otro cliente que le paga $12.500 por hora. ¿Cuál es el costo de oportunidad, en pesos, de aceptar el primer encargo?',
          unitLabel: '$',
          answer: 75000,
          explanation:
            'El costo de oportunidad es el valor de la mejor alternativa a la que renuncia: 6 horas × $12.500 = $75.000 en el otro cliente. Como el encargo aceptado paga exactamente lo mismo ($75.000), ambas opciones tienen igual valor económico, aunque en dinero contante solo una de ellas aparezca como "ingreso".',
        },
        {
          id: 'u1-l2-e11',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Valentina pagó una membresía anual de gimnasio, no reembolsable, y hace tres meses que no quiere ir. ¿Qué le recomienda la economía que haga?',
          options: [
            { id: 'a', text: 'Decidir según si ir al gimnasio de aquí en adelante le trae más beneficio que costo, sin considerar lo ya pagado' },
            { id: 'b', text: 'Seguir yendo obligatoriamente, porque ya pagó la membresía completa' },
            { id: 'c', text: 'Pedir que le devuelvan el dinero, ya que no reembolsable significa que aún puede recuperarlo' },
            { id: 'd', text: 'Calcular cuánto le costó cada visita hasta ahora y decidir en base a ese promedio' },
          ],
          correctOptionId: 'a',
          explanation:
            'El pago de la membresía es un costo hundido: ya se gastó y no se recupera decida lo que decida ahora. La decisión racional hacia adelante solo debe comparar el beneficio futuro de ir al gimnasio contra el costo futuro (tiempo, esfuerzo), ignorando lo ya pagado.',
        },
      ],
    },
    {
      id: 'u1-l3',
      title: 'Ventaja comparativa y las ganancias del comercio',
      summary: 'Por qué comerciar beneficia a ambas partes, incluso cuando una es mejor produciendo todo.',
      estimatedMinutes: 14,
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
        {
          id: 'u1-l3-e5',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'En una hora, Valeria puede producir 8 kg de queso o 16 kg de pan, así que su costo de oportunidad de 1 kg de queso es 2 kg de pan. Andrés puede producir 2 kg de queso u 8 kg de pan, así que su costo de oportunidad de 1 kg de queso es 4 kg de pan. Valeria se especializa en queso, Andrés en pan, y acuerdan intercambiar queso por pan.',
          question: '¿A qué "precio" de intercambio ganan ambos con el comercio?',
          options: [
            { id: 'a', text: '3 kg de pan por cada kg de queso, porque está entre los costos de oportunidad de ambos (2 y 4)' },
            { id: 'b', text: '1 kg de pan por cada kg de queso, porque el precio más bajo siempre beneficia a los dos' },
            { id: 'c', text: '5 kg de pan por cada kg de queso, porque conviene superar el costo de oportunidad más alto' },
            { id: 'd', text: '2 kg de pan por cada kg de queso, porque iguala exactamente el costo de oportunidad de Valeria' },
          ],
          correctOptionId: 'a',
          explanation:
            'Para que ambos ganen, el precio debe quedar entre los dos costos de oportunidad. A 3 kg de pan por kg de queso, Valeria recibe más pan (3) del que le cuesta producir cada queso (2), y Andrés paga menos pan (3) del que le costaría producir su propio queso (4). A 2 kg de pan, Valeria no gana nada, y fuera del rango 2–4 una de las partes pierde.',
        },
        {
          id: 'u1-l3-e6',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'En un día, Pía puede fabricar 6 poleras o 3 gorros, y Tomás puede fabricar 2 poleras o 2 gorros. Si cada uno se especializa por completo en el bien en que tiene ventaja comparativa, ¿cuántas poleras se producen en total por día?',
          unitLabel: 'poleras',
          answer: 6,
          hint: 'Calcula primero el costo de oportunidad de 1 polera para cada uno: gorros a los que renuncia ÷ poleras que gana.',
          explanation:
            'El costo de oportunidad de 1 polera es 3 ÷ 6 = 0,5 gorros para Pía y 2 ÷ 2 = 1 gorro para Tomás. Pía tiene ventaja comparativa en poleras y se especializa en ellas (6 poleras), mientras Tomás se dedica solo a gorros (0 poleras). Total: 6 poleras al día.',
        },
        {
          id: 'u1-l3-e7',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'En un día, Camila puede hornear 12 panes o 4 pasteles. ¿Cuál es su costo de oportunidad de producir 1 pastel, expresado en panes?',
          unitLabel: 'panes',
          answer: 3,
          decimals: 0,
          explanation:
            'Costo de oportunidad = unidades de pan a las que renuncia ÷ unidades de pasteles ganadas = 12 ÷ 4 = 3 panes por cada pastel.',
        },
        {
          id: 'u1-l3-e8',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'En un día, el país X puede producir 40 autos u 80 televisores, y el país Y puede producir 10 autos o 40 televisores. ¿Quién tiene ventaja comparativa en televisores?',
          options: [
            { id: 'a', text: 'El país Y, porque su costo de oportunidad de 1 televisor (0,25 autos) es menor que el de X (0,5 autos)' },
            { id: 'b', text: 'El país X, porque produce más televisores en total y tiene ventaja absoluta' },
            { id: 'c', text: 'Ninguno, porque X es más productivo que Y en ambos bienes' },
            { id: 'd', text: 'El país Y, porque tiene ventaja absoluta en televisores' },
          ],
          correctOptionId: 'a',
          explanation:
            'El costo de oportunidad de 1 televisor para X es 40/80 = 0,5 autos; para Y es 10/40 = 0,25 autos. Como Y renuncia a menos autos por cada televisor, Y tiene ventaja comparativa en televisores, aunque X tenga ventaja absoluta en ambos bienes.',
        },
        {
          id: 'u1-l3-e9',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'En una hora, Marcos puede cosechar 10 kg de tomates o 5 kg de papas. En una hora, Lucía puede cosechar 4 kg de tomates u 8 kg de papas. Quieren repartirse el trabajo para aprovechar las ganancias del comercio.',
          question: '¿Quién debería especializarse en papas y por qué?',
          options: [
            {
              id: 'a',
              text: 'Lucía, porque su costo de oportunidad de 1 kg de papas (0,5 kg de tomate) es menor que el de Marcos (2 kg de tomate)',
            },
            { id: 'b', text: 'Marcos, porque puede cosechar más tomates por hora que Lucía' },
            { id: 'c', text: 'Marcos, porque tiene ventaja absoluta en tomates' },
            { id: 'd', text: 'Ninguno, porque Lucía cosecha menos tomates por hora que Marcos' },
          ],
          correctOptionId: 'a',
          explanation:
            'El costo de oportunidad de 1 kg de papas para Marcos es 10/5 = 2 kg de tomate; para Lucía es 4/8 = 0,5 kg de tomate. Como Lucía renuncia a menos tomate por cada kg de papas, tiene ventaja comparativa en papas y debe especializarse en ellas, mientras Marcos se concentra en tomates.',
        },
        {
          id: 'u1-l3-e10',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          chart: {
            xLabel: 'Pan (unidades)',
            yLabel: 'Queso (kg)',
            xMax: 45,
            yMax: 22,
            lines: [{ points: [{ x: 0, y: 20 }, { x: 40, y: 0 }], color: 'brand', label: 'FPP' }],
            markers: [
              { x: 10, y: 15, label: 'A', guides: true },
              { x: 30, y: 5, label: 'B', guides: true },
            ],
            caption: 'Frontera de posibilidades de producción entre pan y queso.',
          },
          question:
            'Observa la frontera de posibilidades de producción (FPP). Si la economía se mueve del punto A al punto B, ¿cuántos kilos de queso cuesta producir esas unidades adicionales de pan?',
          unitLabel: 'kg',
          answer: 10,
          hint: 'Lee cuánto pan se gana y cuánto queso se pierde al pasar de A a B.',
          explanation:
            'De A (10 panes, 15 kg de queso) a B (30 panes, 5 kg de queso) el pan aumenta en 20 unidades y el queso cae de 15 a 5 kg, es decir, se sacrifican 10 kg de queso. Ese es el costo de oportunidad de esos 20 panes adicionales.',
        },
        {
          id: 'u1-l3-e11',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          chart: {
            xLabel: 'Pan (unidades)',
            yLabel: 'Queso (kg)',
            xMax: 45,
            yMax: 22,
            lines: [{ points: [{ x: 0, y: 20 }, { x: 40, y: 0 }], color: 'brand', label: 'FPP' }],
            markers: [
              { x: 10, y: 5, label: 'A' },
              { x: 20, y: 10, label: 'B' },
              { x: 35, y: 8, label: 'C' },
            ],
            caption: 'Tres combinaciones posibles de producción de pan y queso.',
          },
          question: '¿Cuál de los tres puntos representa una combinación ineficiente, que desperdicia recursos?',
          options: [
            { id: 'a', text: 'El punto A, porque queda por debajo de la frontera' },
            { id: 'b', text: 'El punto B, porque queda exactamente sobre la frontera' },
            { id: 'c', text: 'El punto C, porque queda por fuera de la frontera' },
            { id: 'd', text: 'Ninguno: los tres son igual de eficientes' },
          ],
          correctOptionId: 'a',
          explanation:
            'El punto B está sobre la FPP: es eficiente. El punto C está fuera de la frontera: es inalcanzable con los recursos actuales. El punto A está por debajo de la frontera (con 10 panes, la FPP permite hasta 15 kg de queso, no solo 5): esa combinación es ineficiente, porque la economía podría producir más de ambos bienes sin renunciar a nada.',
        },
      ],
    },
  ],
};
