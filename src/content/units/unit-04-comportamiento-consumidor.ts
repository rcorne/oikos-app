import type { Unit } from '@/content/types';

export const unit04: Unit = {
  id: 'u4',
  index: 4,
  subject: 'microeconomia',
  title: 'Comportamiento del consumidor',
  subtitle: "Cómo elegimos de verdad, y por qué no siempre 'racionalmente'",
  description:
    'Un recorrido por cómo las personas realmente deciden qué consumir: desde la lógica de la utilidad marginal hasta los sesgos de la economía del comportamiento y la trampa de comparar nuestro consumo con el de los demás.',
  icon: 'person-outline',
  color: '#C25A3B',
  source: 'frank',
  lessons: [
    {
      id: 'u4-l1',
      title: 'Utilidad marginal y elección racional',
      summary:
        'Cómo modelamos la satisfacción que entrega consumir, y la regla para repartir un presupuesto limitado entre distintos bienes.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: 'La utilidad: una forma de modelar la satisfacción',
        },
        {
          type: 'paragraph',
          text: 'Cuando alguien elige entre dos películas, dos platos de un menú o cuántas unidades comprar de algo, en el fondo está comparando cuánta satisfacción le entrega cada alternativa. Los economistas llaman utilidad a esa satisfacción, y aunque nadie la mide en una balanza, pensarla como si fuera un número permite predecir y explicar decisiones de consumo de forma ordenada. Lo importante no es el número exacto, sino que unas opciones entreguen más utilidad que otras para una misma persona.',
        },
        {
          type: 'heading',
          text: 'La utilidad marginal decreciente',
        },
        {
          type: 'paragraph',
          text: 'La utilidad marginal es la satisfacción adicional que entrega consumir una unidad más de un bien, manteniendo todo lo demás constante. Una regularidad muy robusta en el comportamiento de las personas es que, a medida que se consumen más unidades de un mismo bien en un período dado, la utilidad marginal de cada unidad adicional tiende a disminuir. La primera unidad suele entregar mucho, la segunda algo menos, y así sucesivamente. Esto no significa que la utilidad total caiga: mientras la utilidad marginal siga siendo positiva, la utilidad total sigue subiendo, solo que a un ritmo cada vez menor.',
        },
        {
          type: 'example',
          title: 'Ejemplo: rebanadas de pizza en el asado familiar',
          text: 'Sofía anota cuánta satisfacción (en una escala inventada de "utils") le da cada rebanada de pizza que come en una junta familiar: la primera rebanada le reporta una utilidad total de 50; con la segunda, la utilidad total sube a 90; con la tercera, a 120; con la cuarta, a 140; con la quinta, a 150. La utilidad marginal de cada rebanada —lo que suma cada una— es 50, 40, 30, 20 y 10 respectivamente: va cayendo rebanada a rebanada. Si Sofía se atreviera a comer una sexta rebanada, es probable que la utilidad total incluso bajara, por ejemplo a 145, porque a esas alturas comer más la hace sentir mal: ahí la utilidad marginal se vuelve negativa.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Total y marginal no son lo mismo',
          text: 'La utilidad total es la satisfacción acumulada de todo lo consumido; la utilidad marginal es la satisfacción que aporta la última unidad. Un consumidor puede seguir aumentando su utilidad total incluso cuando su utilidad marginal ya viene cayendo con fuerza.',
        },
        {
          type: 'heading',
          text: 'Repartir un presupuesto limitado entre dos bienes',
        },
        {
          type: 'paragraph',
          text: 'La mayoría de las decisiones de consumo no son sobre un solo bien, sino sobre cómo repartir un ingreso limitado entre varios. La regla que sigue un consumidor racional es simple de enunciar: conviene seguir comprando más de un bien mientras su utilidad marginal por cada peso gastado en él sea mayor que la de los demás bienes, hasta que esa utilidad marginal por peso se iguale entre todos los bienes que compra. Si un bien entrega más utilidad por peso que otro, conviene mover gasto hacia el primero, aunque eso implique comprar menos del segundo.',
        },
        {
          type: 'formula',
          label: 'Regla de igualación de la utilidad marginal por peso',
          text: 'UMg_bien_A / Precio_A = UMg_bien_B / Precio_B',
        },
        {
          type: 'example',
          title: 'Ejemplo: empanadas y jugos con presupuesto fijo',
          text: 'Javiera tiene $1.750 para gastar en empanadas ($500 cada una) y jugos ($250 cada uno). La utilidad marginal de las empanadas, unidad por unidad, es 100, 80, 60, 40 y 20; dividida por su precio ($500), la utilidad marginal por peso es 0,20, 0,16, 0,12, 0,08 y 0,04. La utilidad marginal de los jugos es 60, 50, 40, 30, 20 y 10; dividida por su precio ($250), la utilidad marginal por peso es 0,24, 0,20, 0,16, 0,12, 0,08 y 0,04. Si Javiera compra 2 empanadas y 3 jugos, gasta exactamente $1.750 (2×$500 + 3×$250) y, además, la utilidad marginal por peso de la última empanada y del último jugo comprados es la misma: 0,16. Comprar una unidad más de cualquiera de los dos bienes (y una menos del otro) le entregaría menos utilidad total que esta combinación.',
        },
      ],
      exercises: [
        {
          id: 'u4-l1-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'La ley de la utilidad marginal decreciente indica que, a medida que una persona consume más unidades de un mismo bien en un período dado...',
          options: [
            {
              id: 'a',
              text: 'la utilidad marginal de cada unidad adicional tiende a ser cada vez menor, aunque la utilidad total pueda seguir aumentando',
            },
            { id: 'b', text: 'la utilidad total del bien disminuye desde la primera unidad' },
            { id: 'c', text: 'el precio del bien sube automáticamente por la mayor demanda' },
            { id: 'd', text: 'la utilidad marginal se mantiene constante en todas las unidades' },
          ],
          correctOptionId: 'a',
          explanation:
            'La utilidad marginal decreciente describe que cada unidad adicional entrega, típicamente, menos satisfacción extra que la anterior. Esto es compatible con que la utilidad total siga creciendo, mientras la utilidad marginal siga siendo positiva.',
        },
        {
          id: 'u4-l1-e2',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'Valentina anota la utilidad total (en utils) que le entrega tomar tazas de café durante una mañana de estudio: 1 taza → 35; 2 tazas → 60; 3 tazas → 78; 4 tazas → 88; 5 tazas → 90. ¿Cuál es la utilidad marginal de pasar de la tercera a la cuarta taza de café?',
          unitLabel: 'utils',
          answer: 10,
          explanation:
            'La utilidad marginal de la cuarta taza es la utilidad total con 4 tazas menos la utilidad total con 3 tazas: 88 − 78 = 10.',
        },
        {
          id: 'u4-l1-e3',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Tomás reparte semana a semana su dinero de colación entre galletas ($400 cada una) y jugos ($200 cada uno), y gasta todo su presupuesto. Actualmente, la utilidad marginal por peso de la última galleta que compra es 0,10, mientras que la utilidad marginal por peso del último jugo que compra es 0,25.',
          question: '¿Qué le convendría hacer a Tomás para aumentar su satisfacción total, sin gastar más dinero en total?',
          options: [
            {
              id: 'a',
              text: 'Comprar una galleta menos y usar ese dinero en más jugos, hasta que la utilidad marginal por peso de ambos bienes se acerque',
            },
            { id: 'b', text: 'Comprar más galletas, porque son el bien que consume hace más tiempo' },
            { id: 'c', text: 'Dejar de comprar jugos por completo y gastar todo en galletas' },
            { id: 'd', text: 'Mantener la combinación actual, porque ya gastó todo su presupuesto y eso es lo único relevante' },
          ],
          correctOptionId: 'a',
          explanation:
            'Como el jugo entrega más utilidad por cada peso gastado que la galleta (0,25 contra 0,10), a Tomás le conviene mover gasto desde las galletas hacia los jugos hasta que la utilidad marginal por peso de ambos bienes se iguale, lo que aumenta su satisfacción total sin gastar más dinero.',
        },
        {
          id: 'u4-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 20,
          prompt:
            'Explica con tus palabras qué es la utilidad marginal decreciente y por qué un consumidor racional reparte su presupuesto igualando la utilidad marginal por peso entre los bienes que compra. Da un ejemplo propio.',
          keyPoints: [
            {
              id: 'diminishing_mu',
              label: 'Explica que la utilidad marginal de unidades sucesivas de un bien tiende a disminuir',
              synonyms: [
                'utilidad marginal decreciente',
                'cada vez menos satisfaccion',
                'disminuye con cada unidad',
                'menos utilidad extra',
                'rendimientos decrecientes',
                'cae unidad a unidad',
              ],
            },
            {
              id: 'equalize_per_peso',
              label: 'Explica la regla de igualar la utilidad marginal por peso entre bienes',
              synonyms: [
                'utilidad marginal por peso',
                'igualar entre bienes',
                'por cada peso gastado',
                'repartir el presupuesto',
                'misma utilidad marginal por peso',
                'mover el gasto',
              ],
            },
            {
              id: 'own_example',
              label: 'Entrega un ejemplo propio distinto a los de la lección',
              synonyms: ['por ejemplo', 'imaginemos', 'supongamos', 'en mi caso', 'un caso'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'La utilidad marginal decreciente significa que cada unidad adicional de un bien entrega, normalmente, menos satisfacción extra que la unidad anterior. Por eso, un consumidor racional con presupuesto limitado no gasta todo en un solo bien: reparte su gasto entre varios bienes hasta que la utilidad marginal por cada peso gastado sea la misma en todos ellos. Por ejemplo, alguien que compra completos y bebidas en una fonda va ajustando cuántos completos y cuántas bebidas lleva hasta que el último peso gastado en cualquiera de los dos le rinde lo mismo en satisfacción.',
          explanation:
            'Una buena respuesta explica que la utilidad marginal cae unidad a unidad, describe la regla de igualar la utilidad marginal por peso entre bienes, y aporta un ejemplo propio distinto al de la lección.',
        },
        {
          id: 'u4-l1-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Diego está decidiendo si comprar una bebida más en el kiosco. La próxima bebida le entregaría una utilidad marginal de 60 utils y cuesta $400. ¿Cuál es la utilidad marginal por peso de esa bebida (utils por cada peso gastado)?',
          unitLabel: 'utils/$',
          answer: 0.15,
          decimals: 2,
          explanation:
            'La utilidad marginal por peso se obtiene dividiendo la utilidad marginal del bien por su precio: 60 ÷ 400 = 0,15 utils por cada peso gastado. Es esta medida —y no la utilidad marginal a secas— la que hay que comparar entre bienes de distinto precio.',
        },
        {
          id: 'u4-l1-e6',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Camila está en una feria de comida con su presupuesto ya casi agotado y le alcanza para una sola compra más. La próxima empanada le entregaría una utilidad marginal de 90 utils y cuesta $600; el próximo jugo le entregaría una utilidad marginal de 40 utils y cuesta $200.',
          question: 'Si Camila quiere sacarle el máximo provecho a su dinero, ¿qué debería considerar y qué le conviene comprar?',
          options: [
            {
              id: 'a',
              text: 'Comparar la utilidad marginal por peso: el jugo rinde 0,20 utils por peso y la empanada solo 0,15, así que le conviene el jugo',
            },
            { id: 'b', text: 'Comprar la empanada, porque su utilidad marginal (90) es mayor que la del jugo (40)' },
            { id: 'c', text: 'Comprar el jugo, porque siempre conviene el bien más barato' },
            { id: 'd', text: 'Es indiferente: ambos bienes entregan utilidad positiva, así que cualquier compra da lo mismo' },
          ],
          correctOptionId: 'a',
          explanation:
            'No basta con comparar utilidades marginales a secas cuando los precios difieren: hay que dividir cada una por su precio. La empanada rinde 90 ÷ 600 = 0,15 utils por peso, mientras que el jugo rinde 40 ÷ 200 = 0,20 utils por peso. Cada peso gastado en jugo entrega más satisfacción, así que a Camila le conviene el jugo, aunque la empanada tenga mayor utilidad marginal total.',
        },
        {
          id: 'u4-l1-e7',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'Ignacio anota la utilidad total (en utils) que le entrega comer porciones de sushi en un almuerzo: 1 porción → 40; 2 porciones → 70; 3 porciones → 90; 4 porciones → 100; 5 porciones → 105. ¿Cuál es la utilidad marginal de la tercera porción de sushi?',
          unitLabel: 'utils',
          answer: 20,
          explanation:
            'La utilidad marginal de la tercera porción es la utilidad total con 3 porciones menos la utilidad total con 2 porciones: 90 − 70 = 20. Nota que las utilidades marginales (30, 20, 10, 5) van cayendo porción a porción: es la utilidad marginal decreciente.',
        },
        {
          id: 'u4-l1-e8',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Un consumidor gasta todo su ingreso mensual de $10.000 en pizzas ($1.000 cada una) y latas de bebida ($200 cada una). Si compra 7 pizzas, ¿cuántas latas de bebida puede comprar con el dinero que le queda?',
          unitLabel: 'latas',
          answer: 15,
          explanation:
            'En 7 pizzas gasta 7 × $1.000 = $7.000, de modo que le quedan $10.000 − $7.000 = $3.000. Con eso compra $3.000 ÷ $200 = 15 latas de bebida. Esa canasta (7 pizzas y 15 latas) es uno de los puntos de su restricción presupuestaria: agota exactamente los $10.000.',
        },
        {
          id: 'u4-l1-e9',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'Con el mismo consumidor del problema anterior (pizza a $1.000, bebida a $200), en el óptimo la utilidad marginal por peso se iguala entre ambos bienes. Si la última pizza que compra le entrega una utilidad marginal de 300 utils, ¿qué utilidad marginal debe tener la última lata de bebida para que el consumidor esté en su óptimo?',
          unitLabel: 'utils',
          answer: 60,
          explanation:
            'En el óptimo se cumple UMg_pizza / Precio_pizza = UMg_bebida / Precio_bebida. La utilidad marginal por peso de la pizza es 300 ÷ 1.000 = 0,3. Para igualarla, la bebida debe rendir 0,3 utils por peso, es decir UMg_bebida = 0,3 × $200 = 60 utils.',
        },
        {
          id: 'u4-l1-e10',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Un consumidor reparte su ingreso entre pizza ($1.000 cada una) y latas de bebida ($200 cada una). ¿Cuál es el costo de oportunidad, medido en latas de bebida, de comprar una pizza adicional?',
          options: [
            { id: 'a', text: '5 latas de bebida, porque una pizza cuesta 5 veces lo que cuesta una lata' },
            { id: 'b', text: '1 lata de bebida, porque cada compra adicional equivale a una unidad' },
            { id: 'c', text: '200 latas de bebida, porque ese es el precio de la bebida' },
            { id: 'd', text: 'No se puede saber sin conocer la utilidad marginal de cada bien' },
          ],
          correctOptionId: 'a',
          explanation:
            'La pendiente de la restricción presupuestaria es igual al precio relativo de los dos bienes. Como la pizza ($1.000) cuesta 5 veces lo que cuesta una lata de bebida ($200), para financiar una pizza más hay que resignar 5 latas: ese es su costo de oportunidad, con independencia de las utilidades marginales.',
        },
      ],
    },
    {
      id: 'u4-l2',
      title: 'Sesgos de decisión: pérdidas, anclas y statu quo',
      summary:
        'Tres patrones sistemáticos que alejan nuestras decisiones del ideal racional: la aversión a la pérdida, el anclaje y el apego al statu quo.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: 'Cuando decidir no es tan racional como parece',
        },
        {
          type: 'paragraph',
          text: 'El modelo del consumidor racional es útil para entender tendencias generales, pero las decisiones reales de las personas se desvían de ese ideal de forma sistemática y predecible. La economía del comportamiento estudia justamente esos patrones: no son errores al azar, sino sesgos que aparecen una y otra vez en contextos muy distintos. Conocerlos ayuda a entender mejor las decisiones ajenas, y también a detectar cuándo uno mismo puede estar cayendo en ellos.',
        },
        {
          type: 'heading',
          text: 'Aversión a la pérdida: perder duele más de lo que alegra ganar lo mismo',
        },
        {
          type: 'paragraph',
          text: 'La aversión a la pérdida describe que, frente a una misma cantidad de dinero (o de cualquier otra cosa de valor), el malestar de perderla suele sentirse más intenso que el placer de ganarla. No es solo que a las personas no les guste perder: le asignan psicológicamente más peso a una pérdida que a una ganancia equivalente, aunque el monto en pesos sea idéntico.',
        },
        {
          type: 'example',
          title: 'Ejemplo: el mismo bono, dos formas de presentarlo',
          text: 'Una empresa quiere que su equipo de ventas entregue los reportes a tiempo. Al primer grupo le ofrece un bono de $30.000 si entrega a tiempo: lo gana si cumple. Al segundo grupo le asigna el bono de $30.000 desde el día uno, pero le advierte que lo perderá si no entrega a tiempo. El resultado económico final es idéntico si cumplen: en ambos casos terminan con $30.000 extra. Aun así, el grupo que puede "perder" el bono suele cumplir el plazo con más frecuencia que el grupo que puede "ganarlo", porque la amenaza de una pérdida motiva más que la promesa de una ganancia del mismo tamaño.',
        },
        {
          type: 'heading',
          text: 'Anclaje: números irrelevantes que igual nos influyen',
        },
        {
          type: 'paragraph',
          text: 'El anclaje ocurre cuando una cifra inicial —aunque no tenga ninguna relación real con lo que se está evaluando— se convierte en un punto de referencia que arrastra hacia sí los cálculos o estimaciones posteriores de una persona. Basta con mencionar un número antes de pedir una estimación para que esa estimación se acerque más al número mencionado que si nunca se hubiera dicho.',
        },
        {
          type: 'example',
          title: 'Ejemplo: negociar un auto usado',
          text: 'Un vendedor de autos usados sabe que el precio de mercado de cierto modelo ronda los $6.000.000. Aun así, publica el aviso en $9.000.000. Un comprador que llega sin investigar mucho tiende a anclarse en esa cifra inicial, y termina viendo un precio final de $7.500.000 como "una buena rebaja", aunque siga estando muy por encima del precio de mercado real. El número de partida —aunque arbitrario— condicionó la percepción de qué precio final parecía razonable.',
        },
        {
          type: 'heading',
          text: 'El sesgo del statu quo: la fuerza de quedarse como se está',
        },
        {
          type: 'paragraph',
          text: 'El sesgo del statu quo es la tendencia a mantener la situación u opción actual, incluso cuando cambiarla convendría más, simplemente porque cambiar exige una decisión activa y la opción por defecto no la exige. Cuando algo ya viene configurado o asignado de cierta forma, muchas personas simplemente no lo tocan.',
        },
        {
          type: 'example',
          title: 'Ejemplo: el plan de ahorro por defecto',
          text: 'En algunas empresas, todo trabajador nuevo queda inscrito automáticamente en un plan de ahorro adicional para el retiro, y quien no quiere participar debe pedir expresamente que lo saquen. En otras empresas ocurre lo contrario: nadie participa a menos que pida expresamente inscribirse. Aunque el plan ofrecido sea exactamente el mismo, la tasa de participación es mucho más alta en el primer esquema. La diferencia no está en el plan, sino en cuál es la opción configurada por defecto.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Sesgos, no errores aleatorios',
          text: 'Aversión a la pérdida, anclaje y statu quo no son fallas ocasionales: son patrones que se repiten en personas muy distintas y en contextos muy distintos, lo que permite anticiparlos —y a veces hasta usarlos, para bien o para mal, en el diseño de políticas, contratos y ofertas comerciales.',
        },
      ],
      exercises: [
        {
          id: 'u4-l2-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'En países donde ser donante de órganos es la opción configurada por defecto (y hay que hacer un trámite para excluirse), la tasa de donantes registrados es mucho mayor que en países donde hay que inscribirse activamente para donar, aunque la disposición real de las personas a donar sea similar. ¿Qué sesgo explica mejor esta diferencia?',
          options: [
            { id: 'a', text: 'El sesgo del statu quo, porque las personas tienden a mantener la opción configurada por defecto' },
            { id: 'b', text: 'La aversión a la pérdida, porque donar implica perder un órgano' },
            { id: 'c', text: 'El anclaje, porque el número de donantes sirve de referencia' },
            { id: 'd', text: 'La ventaja comparativa entre países' },
          ],
          correctOptionId: 'a',
          explanation:
            'La diferencia no está en cuánto quieren donar las personas, sino en qué opción viene configurada por defecto: cambiarla exige un trámite activo, y la mayoría simplemente no lo hace. Eso es el sesgo del statu quo.',
        },
        {
          id: 'u4-l2-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'En una negociación por un auto usado, el vendedor primero menciona, como referencia, un precio de lista de $9.000.000. El precio de mercado real del auto es de $6.000.000. Finalmente, el vendedor ofrece cerrar el trato en $7.500.000. ¿En qué porcentaje es el precio ofrecido ($7.500.000) mayor al precio de mercado real ($6.000.000)?',
          unitLabel: '%',
          answer: 25,
          explanation:
            'La diferencia entre el precio ofrecido y el precio de mercado es $7.500.000 − $6.000.000 = $1.500.000. Como porcentaje del precio de mercado: $1.500.000 / $6.000.000 = 0,25, es decir, 25%.',
        },
        {
          id: 'u4-l2-e3',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Cristóbal se inscribe en un gimnasio. El primer mes le regalan 10 clases grupales "gratis" que expiran a fin de mes si no las usa. En un escenario alternativo, el gimnasio simplemente le cobraría por cada clase que tome, sin regalo previo. Cristóbal termina yendo a muchas más clases cuando siente que "las va a perder" que cuando simplemente podría "ganar" el mismo beneficio pagando por clase.',
          question: '¿Qué concepto de la lección explica mejor por qué Cristóbal reacciona con más fuerza a la posibilidad de perder las clases gratis?',
          options: [
            { id: 'a', text: 'La aversión a la pérdida: perder algo que ya se percibe como propio duele más que no ganar lo mismo' },
            { id: 'b', text: 'El anclaje, porque el número 10 es una cifra redonda' },
            { id: 'c', text: 'El sesgo del statu quo, porque prefiere no cambiar de gimnasio' },
            { id: 'd', text: 'La ventaja comparativa entre pagar por clase o tener clases gratis' },
          ],
          correctOptionId: 'a',
          explanation:
            'Cristóbal percibe las 10 clases como algo que ya es suyo, así que dejarlas vencer se siente como una pérdida, y las pérdidas psicológicamente pesan más que una ganancia equivalente. Eso es aversión a la pérdida, no anclaje ni statu quo.',
        },
        {
          id: 'u4-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 20,
          prompt:
            'Elige uno de los tres sesgos vistos en la lección (aversión a la pérdida, anclaje o sesgo del statu quo), explica en qué consiste con tus palabras, y da un ejemplo de tu propia vida cotidiana (real o inventado) donde ese sesgo podría influir en una decisión.',
          keyPoints: [
            {
              id: 'names_and_defines_bias',
              label: 'Nombra uno de los tres sesgos y lo define correctamente',
              synonyms: [
                'aversion a la perdida',
                'duele mas perder',
                'anclaje',
                'numero de referencia',
                'sesgo del statu quo',
                'opcion por defecto',
                'quedarse igual',
                'no cambiar',
              ],
            },
            {
              id: 'explains_mechanism',
              label: 'Explica por qué ocurre ese sesgo o cómo afecta la decisión',
              synonyms: [
                'pesa mas la perdida',
                'nos anclamos a un numero',
                'cuesta cambiar de opcion',
                'inercia',
                'nos influye sin darnos cuenta',
                'comparamos con una referencia inicial',
              ],
            },
            {
              id: 'own_example',
              label: 'Entrega un ejemplo propio y concreto',
              synonyms: ['por ejemplo', 'me paso que', 'imaginate', 'un caso', 'suponte', 'en mi caso'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'El anclaje es cuando un número inicial, aunque sea arbitrario, termina influyendo en una estimación o negociación posterior. Por ejemplo, cuando veo una polera con el precio original tachado y un precio rebajado al lado, tiendo a pensar que el precio rebajado es una buena oferta solo por comparación con el precio original, aunque ese precio original nunca haya sido realmente el valor de mercado de la polera.',
          explanation:
            'Una buena respuesta identifica correctamente uno de los tres sesgos, explica el mecanismo psicológico detrás de él, y lo ilustra con un ejemplo propio y concreto.',
        },
        {
          id: 'u4-l2-e5',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'Una tienda de ropa exhibe una chaqueta con un precio "antes" de $40.000 tachado y un precio "ahora" de $28.000. Ese precio tachado funciona como ancla para que el descuento parezca atractivo. ¿Qué porcentaje de descuento aparenta la oferta respecto del precio tachado?',
          unitLabel: '%',
          answer: 30,
          explanation:
            'El descuento aparente es la rebaja dividida por el precio de referencia: ($40.000 − $28.000) ÷ $40.000 = $12.000 ÷ $40.000 = 0,30, es decir, 30%. Ojo: si el precio tachado nunca fue el precio real de venta, el ancla hace ver como gran oferta algo que quizás no lo es.',
        },
        {
          id: 'u4-l2-e6',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Marcela contrató hace cinco años un plan de telefonía. Hoy existe otro plan, de la misma compañía, con más gigas y $6.000 más barato al mes, y cambiarse solo requiere llenar un formulario en línea de cinco minutos. Marcela lo sabe, reconoce que el plan nuevo es mejor, pero cada mes lo posterga y sigue pagando el plan antiguo: "después lo veo, total el mío funciona".',
          question: '¿Qué sesgo de la lección describe mejor el comportamiento de Marcela?',
          options: [
            { id: 'a', text: 'El sesgo del statu quo: mantiene su opción actual solo porque cambiarla exige una decisión activa, aunque cambiarse le convenga' },
            { id: 'b', text: 'La aversión a la pérdida, porque cambiarse implicaría perder $6.000 al mes' },
            { id: 'c', text: 'El anclaje, porque el precio de su plan antiguo es su número de referencia' },
            { id: 'd', text: 'La utilidad marginal decreciente, porque los gigas adicionales le entregan cada vez menos satisfacción' },
          ],
          correctOptionId: 'a',
          explanation:
            'Marcela no está confundida ni le falta información: ella misma reconoce que el plan nuevo es mejor. Lo que la frena es que quedarse igual no exige ninguna acción, mientras que cambiarse sí. Esa inercia a favor de la opción vigente es el sesgo del statu quo. Nota que la aversión a la pérdida no calza: quedarse en el plan antiguo es justamente lo que le hace perder $6.000 cada mes.',
        },
        {
          id: 'u4-l2-e7',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Los estudios de economía del comportamiento suelen encontrar que, para muchas personas, el malestar de perder cierta cantidad de dinero se siente tan intenso como el placer de ganar aproximadamente el doble. Si a Rodrigo el dolor de perder $25.000 le pesa lo mismo que la alegría de ganar $50.000, ¿cuántas veces más pesa psicológicamente una pérdida que una ganancia del mismo monto para él?',
          unitLabel: 'veces',
          answer: 2,
          explanation:
            'Una pérdida de $25.000 le duele lo mismo que ganar $50.000. Para igualar el efecto de una pérdida se necesita una ganancia del doble de tamaño: $50.000 ÷ $25.000 = 2. Es decir, la pérdida pesa 2 veces más que una ganancia del mismo monto. Ese peso extra que le damos a las pérdidas es la aversión a la pérdida.',
        },
        {
          id: 'u4-l2-e8',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'Un restaurante incluye en su carta un plato muy caro de $45.000 que casi nadie pide. Su verdadero efecto es que, al lado, un plato de $18.000 empieza a parecer "moderado", y muchos clientes terminan eligiéndolo. ¿Qué sesgo está aprovechando el restaurante?',
          options: [
            { id: 'a', text: 'El anclaje: el precio muy alto funciona como referencia y hace ver los demás precios como razonables' },
            { id: 'b', text: 'La aversión a la pérdida, porque no pedir el plato caro se siente como perder algo' },
            { id: 'c', text: 'El sesgo del statu quo, porque los clientes siempre piden lo mismo' },
            { id: 'd', text: 'La utilidad marginal decreciente del plato caro' },
          ],
          correctOptionId: 'a',
          explanation:
            'El plato de $45.000 casi no se vende, pero cumple otra función: instala un número alto como punto de referencia. Frente a esa ancla, un plato de $18.000 parece moderado, aunque por sí solo no lo pareciera. Eso es anclaje: una cifra inicial que arrastra la percepción de lo que viene después.',
        },
        {
          id: 'u4-l2-e9',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'A Antonia le regalaron una entrada para un concierto muy esperado. Antes del evento, una conocida le ofrece comprarle la entrada en $80.000, bastante más que su valor original. Antonia se niega: no piensa venderla. Sin embargo, cuando le preguntan si ella habría pagado $80.000 por comprar esa misma entrada de no tenerla, reconoce con sinceridad que no, que le habría parecido demasiado cara.',
          question: '¿Qué concepto de la lección explica mejor esta inconsistencia en la valoración de Antonia?',
          options: [
            { id: 'a', text: 'La aversión a la pérdida: desprenderse de algo que ya siente como propio pesa más que la satisfacción de haberlo comprado por ese mismo precio' },
            { id: 'b', text: 'El anclaje, porque los $80.000 son una cifra redonda que sirve de referencia' },
            { id: 'c', text: 'El sesgo del statu quo, porque Antonia prefiere no ir al concierto' },
            { id: 'd', text: 'La utilidad marginal decreciente de las entradas de concierto' },
          ],
          correctOptionId: 'a',
          explanation:
            'Antonia valora más la entrada por el solo hecho de ya tenerla: venderla se siente como una pérdida, y las pérdidas pesan psicológicamente más que las ganancias equivalentes. Por eso exige más para desprenderse de ella de lo que habría estado dispuesta a pagar para adquirirla. Esta brecha entre lo que pedimos por algo que tenemos y lo que pagaríamos por conseguirlo es una manifestación directa de la aversión a la pérdida.',
        },
      ],
    },
    {
      id: 'u4-l3',
      title: 'Bienes posicionales y la carrera de gastos',
      summary:
        'Por qué algunos bienes se valoran por comparación con los demás, y cómo eso puede desatar una competencia de gastos que no deja a nadie mejor.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: 'El valor de compararse: los bienes posicionales',
        },
        {
          type: 'paragraph',
          text: 'La mayoría de los bienes se disfrutan sobre todo por lo que entregan en términos absolutos: una buena noche de sueño descansa igual, tenga el vecino la casa que tenga. Pero hay otro tipo de bienes —llamados bienes posicionales— cuyo valor para una persona depende, en buena parte, de cómo se comparan con lo que tienen los demás, más que de su nivel absoluto.',
        },
        {
          type: 'example',
          title: 'Ejemplo: el tamaño de la casa',
          text: 'Una casa de 150 metros cuadrados puede sentirse amplia y cómoda en un barrio donde las demás casas miden 120 metros cuadrados, pero puede sentirse estrecha en un barrio donde las casas vecinas miden 300 metros cuadrados, aunque en ambos casos la casa tenga exactamente los mismos 150 metros cuadrados y los mismos ambientes. Buena parte de la satisfacción que entrega el tamaño de la vivienda depende de la comparación con el entorno, no solo de los metros cuadrados en sí.',
        },
        {
          type: 'heading',
          text: 'Cascadas de gasto: cuando todos suben la apuesta',
        },
        {
          type: 'paragraph',
          text: 'Cuando lo que importa es la posición relativa y no el nivel absoluto, aparece un incentivo a gastar más solo para no quedar atrás de los demás. Si una familia amplía su casa o gasta más en una celebración, las familias comparables sienten la presión de hacer lo mismo para mantener su posición relativa. El resultado es una escalada de gasto —una cascada de gastos— en la que cada quien responde al aumento de gasto de los demás, sin que nadie termine, en promedio, más satisfecho que al principio.',
        },
        {
          type: 'example',
          title: 'Ejemplo: el gasto en matrimonios',
          text: 'En una ciudad, el gasto promedio en una fiesta de matrimonio sube de forma sostenida década tras década, en parte porque cada nueva pareja compara su celebración con las de familiares y amistades recientes, y no quiere que la propia parezca "menos" en comparación. Si todas las parejas gastan más, la posición relativa de cada matrimonio dentro de ese grupo social termina siendo, en promedio, la misma que antes de que subiera el gasto: nadie gana posición relativa, pero todos gastaron más.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Una competencia sin ganador neto',
          text: 'Las cascadas de gasto se parecen a una carrera armamentista: cada quien gasta más para no perder posición relativa frente a los demás, pero si todos hacen lo mismo, las posiciones relativas no cambian y el gasto total del grupo termina siendo mayor sin que aumente el bienestar promedio.',
        },
        {
          type: 'heading',
          text: 'Bienes no posicionales: lo que no pierde valor porque otros tengan más',
        },
        {
          type: 'paragraph',
          text: 'No todos los bienes funcionan así. Dormir ocho horas de buen sueño, tener tiempo libre para estar con la familia, o gozar de buena salud, entregan satisfacción que depende poco de cuánto tengan los demás de eso mismo. Que un vecino duerma nueve horas no le resta valor a las ocho horas de sueño propio. A estos bienes se los suele llamar no posicionales, y son un contrapeso importante frente a la carrera de gastos: invertir tiempo y recursos en ellos no depende de ganarle la comparación a nadie.',
        },
      ],
      exercises: [
        {
          id: 'u4-l3-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: 'Un bien posicional es aquel cuyo valor para una persona depende, sobre todo, de...',
          options: [
            { id: 'a', text: 'cómo se compara con lo que tienen otras personas, más que de su nivel absoluto' },
            { id: 'b', text: 'su precio de mercado exclusivamente' },
            { id: 'c', text: 'la cantidad de horas de trabajo necesarias para pagarlo' },
            { id: 'd', text: 'su costo de producción marginal' },
          ],
          correctOptionId: 'a',
          explanation:
            'Lo distintivo de un bien posicional es que buena parte de su valor proviene de la comparación relativa con lo que tienen los demás, no solo de su nivel absoluto de consumo.',
        },
        {
          id: 'u4-l3-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'En un mismo barrio, la casa de la familia Fuentes mide 120 metros cuadrados. Para no sentir que "se quedan atrás" frente a sus vecinos, la familia Rivas construye una casa de 300 metros cuadrados. ¿Cuántas veces más grande es la casa de los Rivas en comparación con la de los Fuentes?',
          unitLabel: 'veces',
          answer: 2.5,
          decimals: 1,
          explanation: '300 ÷ 120 = 2,5. La casa de los Rivas es 2,5 veces más grande que la de los Fuentes.',
        },
        {
          id: 'u4-l3-e3',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'En un barrio, cada familia amplía el tamaño de su casa poco después de que un vecino construye una ampliación, para no sentir que su vivienda "queda chica" en la comparación. Después de una década, todas las casas del barrio son considerablemente más grandes que antes, pero las familias reportan un nivel de satisfacción con su vivienda parecido al de una década atrás, porque la comparación relativa entre vecinos no cambió.',
          question: '¿Cómo se llama este patrón de gasto competitivo motivado por la comparación posicional entre vecinos?',
          options: [
            { id: 'a', text: 'Una cascada de gastos (o carrera de gastos posicional)' },
            { id: 'b', text: 'Una ganancia del comercio' },
            { id: 'c', text: 'Una externalidad positiva sobre el vecindario' },
            { id: 'd', text: 'Un aumento de la ventaja comparativa entre vecinos' },
          ],
          correctOptionId: 'a',
          explanation:
            'Este patrón —donde cada quien sube su gasto solo para mantener su posición relativa frente a los demás, sin que la posición de nadie cambie en el agregado— es lo que se conoce como cascada o carrera de gastos posicional.',
        },
        {
          id: 'u4-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 25,
          prompt:
            'Explica la diferencia entre un bien posicional y un bien no posicional, y da un ejemplo propio de cada uno (puede ser real o inventado).',
          keyPoints: [
            {
              id: 'positional_def',
              label: 'Define bien posicional como aquel cuyo valor depende de la comparación relativa con los demás',
              synonyms: [
                'bien posicional',
                'comparacion con los demas',
                'posicion relativa',
                'valor relativo',
                'comparado con otros',
                'quedar atras',
              ],
            },
            {
              id: 'nonpositional_def',
              label: 'Define bien no posicional como aquel cuyo valor no depende de cuánto tengan los demás',
              synonyms: [
                'bien no posicional',
                'no depende de los demas',
                'valor absoluto',
                'tiempo libre',
                'sueno',
                'salud',
                'no importa lo que tengan otros',
              ],
            },
            {
              id: 'own_examples',
              label: 'Entrega un ejemplo propio de cada tipo de bien',
              synonyms: ['por ejemplo', 'un caso de', 'imaginemos', 'en mi caso', 'suponte'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Un bien posicional es aquel que se valora principalmente por comparación con lo que tienen los demás, como el tamaño de una casa o lo lujosa que es una fiesta de matrimonio: si todos los vecinos suben el estándar, la posición relativa de cada uno no cambia aunque todos gasten más. Un bien no posicional, en cambio, entrega satisfacción independiente de cuánto tengan los demás, como dormir bien o tener tiempo libre para descansar: que otra persona duerma más no le resta valor a mi propio descanso.',
          explanation:
            'Una buena respuesta distingue con claridad ambos tipos de bienes —posicional depende de la comparación relativa, no posicional no depende de ella— y entrega un ejemplo propio de cada uno.',
        },
        {
          id: 'u4-l3-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'En una ciudad, el gasto promedio en fiestas de graduación era de $250.000 hace una década. Empujado por una cascada de gastos —cada familia intenta no quedar atrás de las celebraciones recientes—, hoy el gasto promedio llega a $400.000. ¿En qué porcentaje aumentó el gasto promedio en ese período?',
          unitLabel: '%',
          answer: 60,
          explanation:
            'El aumento es $400.000 − $250.000 = $150.000. Como porcentaje del gasto inicial: $150.000 ÷ $250.000 = 0,60, es decir, 60%. Y como todas las familias subieron su gasto a la vez, la posición relativa de cada celebración quedó, en promedio, igual que antes: gastaron 60% más sin ganar posición.',
        },
        {
          id: 'u4-l3-e6',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '¿Cuál de las siguientes alternativas es el mejor ejemplo de un bien no posicional?',
          options: [
            { id: 'a', text: 'Dormir ocho horas de sueño reparador cada noche' },
            { id: 'b', text: 'Tener el auto más caro del estacionamiento de la oficina' },
            { id: 'c', text: 'Que la casa propia sea más grande que las del resto del barrio' },
            { id: 'd', text: 'Organizar la fiesta de cumpleaños más lujosa del grupo de amistades' },
          ],
          correctOptionId: 'a',
          explanation:
            'El descanso de un buen sueño entrega satisfacción por sí mismo: que otra persona duerma más o menos no le quita valor. Las otras tres alternativas dependen explícitamente de la comparación con los demás ("el más caro", "más grande que", "la más lujosa"), que es justamente lo que define a un bien posicional.',
        },
        {
          id: 'u4-l3-e7',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'En un grupo de amistades, el gasto promedio en el regalo de cumpleaños es de $12.000. Para no quedar como "el que regaló menos", Pablo gasta $18.000 en su regalo. ¿En qué porcentaje supera el gasto de Pablo al gasto promedio del grupo?',
          unitLabel: '%',
          answer: 50,
          explanation:
            'La diferencia es $18.000 − $12.000 = $6.000. Como porcentaje del gasto promedio: $6.000 ÷ $12.000 = 0,50, es decir, 50%. Pablo gasta un 50% más que el promedio solo para no perder posición dentro del grupo; si todos hacen lo mismo, el promedio sube y nadie mejora su posición relativa: es el motor de una cascada de gastos.',
        },
        {
          id: 'u4-l3-e8',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '¿Cuál de las siguientes alternativas es el mejor ejemplo de un bien posicional?',
          options: [
            { id: 'a', text: 'Tener el auto más lujoso del estacionamiento de la oficina' },
            { id: 'b', text: 'Beber suficiente agua durante el día' },
            { id: 'c', text: 'Respirar aire limpio en el lugar donde uno vive' },
            { id: 'd', text: 'Dormir las horas necesarias para descansar bien' },
          ],
          correctOptionId: 'a',
          explanation:
            'Tener "el auto más lujoso del estacionamiento" depende por completo de la comparación con los demás: si alguien llega con uno mejor, el propio pierde su gracia aunque sea exactamente el mismo auto. Eso es un bien posicional. Beber agua, respirar aire limpio o dormir bien entregan satisfacción absoluta, independiente de cuánto tengan los demás: son bienes no posicionales.',
        },
        {
          id: 'u4-l3-e9',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'En un grupo de familias que se comparan entre sí, cada una destina cada vez más dinero a cosas muy visibles —autos más caros, ampliaciones de la casa— para no quedar atrás de las demás. Para financiarlo, van recortando cosas menos visibles: vacaciones, tiempo libre y horas de descanso. Al cabo de unos años, todas las familias tienen autos y casas más imponentes, pero su posición relativa dentro del grupo es la misma de antes, y varias reconocen sentirse más cansadas y con menos tiempo para lo que disfrutan.',
          question: '¿Qué idea de la lección describe mejor lo que ocurrió con estas familias?',
          options: [
            {
              id: 'a',
              text: 'Una cascada de gastos: la competencia por la posición relativa las llevó a gastar de más en bienes posicionales y de menos en bienes no posicionales, sin mejorar el bienestar promedio',
            },
            { id: 'b', text: 'Una ganancia mutua del comercio entre las familias del grupo' },
            { id: 'c', text: 'El sesgo del statu quo, porque prefieren no cambiar de barrio' },
            { id: 'd', text: 'La utilidad marginal decreciente de las vacaciones' },
          ],
          correctOptionId: 'a',
          explanation:
            'Como el auto y el tamaño de la casa son bienes posicionales, cuando todas las familias gastan más a la vez, ninguna gana posición relativa: la carrera se anula en el agregado. Peor aún, para financiar esa carrera sacrificaron bienes no posicionales —descanso, tiempo libre, vacaciones— que sí entregaban bienestar real. Esa es la trampa de una cascada de gastos: mucho esfuerzo colectivo que deja a todos, en promedio, igual o peor.',
        },
      ],
    },
  ],
};
