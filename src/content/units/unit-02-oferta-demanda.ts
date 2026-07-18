import type { Unit } from '@/content/types';

export const unit02: Unit = {
  id: 'u2',
  index: 2,
  subject: 'microeconomia',
  title: 'Oferta y demanda',
  subtitle: 'El motor que fija precios y cantidades en un mercado',
  description:
    'Cómo compradores y vendedores interactúan a través de los precios: la ley de la demanda, la ley de la oferta, y cómo ambas fuerzas determinan el equilibrio de mercado.',
  icon: 'swap-horizontal-outline',
  color: '#128099',
  source: 'mankiw',
  lessons: [
    {
      id: 'u2-l1',
      title: 'La demanda: la ley y sus determinantes',
      summary: 'Qué hace que compremos más o menos de algo, y qué mueve la curva completa.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: 'La ley de la demanda',
        },
        {
          type: 'paragraph',
          text: 'La ley de la demanda establece que, manteniendo todo lo demás constante (ceteris paribus), cuando el precio de un bien sube, la cantidad demandada de ese bien baja. Esta relación negativa entre precio y cantidad demandada se representa con una curva de demanda que desciende de izquierda a derecha.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Dos movimientos distintos',
          text: 'Un cambio en el precio del bien mismo produce un movimiento a lo largo de la curva de demanda ("cambio en la cantidad demandada"). Un cambio en cualquier otro determinante desplaza la curva completa ("cambio en la demanda").',
        },
        {
          type: 'heading',
          text: 'Qué desplaza la curva de demanda',
        },
        {
          type: 'list',
          items: [
            'Ingreso de los consumidores: para un bien normal, más ingreso desplaza la demanda a la derecha; para un bien inferior, la desplaza a la izquierda.',
            'Precio de bienes relacionados: si sube el precio de un sustituto, la demanda del bien original aumenta; si sube el precio de un complemento, la demanda del bien original disminuye.',
            'Gustos y preferencias.',
            'Expectativas sobre precios o ingresos futuros.',
            'Número de compradores en el mercado.',
          ],
        },
        {
          type: 'example',
          title: 'Ejemplo: café y leche de avena',
          text: 'Si el precio del café baja, se compra más café: eso es un movimiento a lo largo de la curva de demanda del café. Pero si sube el precio de la leche de avena (un complemento habitual del café con leche), la demanda de café podría desplazarse hacia la izquierda a cualquier precio del café: eso es un desplazamiento de la curva completa.',
        },
      ],
      exercises: [
        {
          id: 'u2-l1-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: 'Si el precio de las entradas al cine baja y, por eso, las personas compran más entradas, esto es...',
          options: [
            { id: 'a', text: 'Un desplazamiento de la curva de demanda hacia la derecha' },
            { id: 'b', text: 'Un movimiento a lo largo de la curva de demanda (cambio en la cantidad demandada)' },
            { id: 'c', text: 'Un desplazamiento de la curva de oferta' },
            { id: 'd', text: 'Un cambio en los gustos de los consumidores' },
          ],
          correctOptionId: 'b',
          explanation:
            'Cuando el cambio se origina en el propio precio del bien, la respuesta es un movimiento a lo largo de la misma curva de demanda, no un desplazamiento de la curva.',
        },
        {
          id: 'u2-l1-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'La demanda de un bien está dada por Qd = 100 − 2P. ¿Cuál es la cantidad demandada cuando el precio es P = 20?',
          unitLabel: 'unidades',
          answer: 60,
          explanation: 'Qd = 100 − 2(20) = 100 − 40 = 60 unidades.',
        },
        {
          id: 'u2-l1-e3',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Un fideo instantáneo es considerado un bien inferior para muchos consumidores. Durante una recesión económica, el ingreso promedio de los hogares cae de forma generalizada.',
          question: '¿Qué debería pasar con la curva de demanda de fideos instantáneos durante la recesión?',
          options: [
            { id: 'a', text: 'Se desplaza hacia la derecha, porque al caer el ingreso se demanda más de un bien inferior' },
            { id: 'b', text: 'Se desplaza hacia la izquierda, porque todos los bienes reducen su demanda en una recesión' },
            { id: 'c', text: 'No cambia, porque el ingreso no es un determinante de la demanda' },
            { id: 'd', text: 'Se mueve a lo largo de la curva, sin desplazarse' },
          ],
          correctOptionId: 'a',
          explanation:
            'Por definición, un bien inferior es aquel cuya demanda aumenta cuando el ingreso cae. Como el ingreso es un determinante (no el precio del bien), el efecto es un desplazamiento completo de la curva de demanda hacia la derecha.',
        },
        {
          id: 'u2-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 20,
          prompt:
            'Explica la diferencia entre un "cambio en la cantidad demandada" y un "cambio en la demanda", y da un ejemplo de cada uno.',
          keyPoints: [
            {
              id: 'movement_vs_shift',
              label: 'Distingue movimiento a lo largo de la curva vs desplazamiento de la curva',
              synonyms: ['movimiento a lo largo', 'se desplaza toda la curva', 'lo mismo curva', 'distinta curva', 'cambia la curva completa'],
            },
            {
              id: 'price_driver',
              label: 'Indica que el precio del propio bien causa el movimiento a lo largo de la curva',
              synonyms: ['precio del bien', 'sube o baja el precio', 'precio propio'],
            },
            {
              id: 'other_determinant',
              label: 'Indica que otro determinante (ingreso, gustos, bienes relacionados) causa el desplazamiento',
              synonyms: ['ingreso', 'gustos', 'bienes sustitutos', 'bienes complementarios', 'otro factor', 'expectativas'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Un cambio en la cantidad demandada ocurre cuando cambia el precio del propio bien y nos movemos a lo largo de la misma curva de demanda. Un cambio en la demanda ocurre cuando cambia otro determinante —como el ingreso, los gustos o el precio de un bien relacionado— y toda la curva se desplaza. Por ejemplo, si baja el precio del pan, compramos más pan (movimiento); si sube nuestro ingreso y el pan es un bien normal, compramos más pan a cualquier precio (desplazamiento).',
          explanation:
            'Se espera que la respuesta distinga claramente ambos conceptos y asocie cada uno a su causa correcta (precio propio vs. otros determinantes).',
        },
        {
          id: 'u2-l1-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'La demanda de un bien está dada por Qd = 80 − 4P. ¿A qué precio P la cantidad demandada es exactamente 20 unidades?',
          unitLabel: '$',
          answer: 15,
          hint: 'Iguala la ecuación de demanda a 20 y despeja P.',
          explanation: 'Planteamos 20 = 80 − 4P → 4P = 80 − 20 = 60 → P = 15. Verificación: Qd = 80 − 4(15) = 80 − 60 = 20 unidades.',
        },
        {
          id: 'u2-l1-e6',
          type: 'case_study',
          difficulty: 'facil',
          xp: 10,
          scenario:
            'Los videojuegos físicos de una consola solo funcionan con esa consola: son bienes complementarios. El fabricante anuncia un alza importante en el precio de la consola.',
          question: '¿Qué debería ocurrir con la curva de demanda de los videojuegos de esa consola?',
          options: [
            { id: 'a', text: 'Se desplaza hacia la derecha, porque los videojuegos ahora parecen más baratos en comparación' },
            { id: 'b', text: 'Se desplaza hacia la izquierda, porque al encarecerse el complemento se demandan menos videojuegos a cualquier precio' },
            { id: 'c', text: 'No cambia, porque el precio que subió es el de la consola, no el de los videojuegos' },
            { id: 'd', text: 'Solo hay un movimiento a lo largo de la curva de demanda de videojuegos' },
          ],
          correctOptionId: 'b',
          explanation:
            'Consola y videojuegos son complementos: cuando sube el precio de uno, cae la demanda del otro. Como el cambio no proviene del precio de los propios videojuegos sino de un bien relacionado, la curva de demanda de videojuegos se desplaza completa hacia la izquierda.',
        },
        {
          id: 'u2-l1-e7',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'La demanda del mercado es la suma horizontal de las demandas individuales. A un precio de $1.50 por vaso, Ana demanda 6 vasos de helado y Beto demanda 4. ¿Cuál es la cantidad demandada del mercado a ese precio?',
          unitLabel: 'vasos',
          answer: 10,
          explanation:
            'La cantidad demandada del mercado a cada precio es la suma de las cantidades individuales: 6 + 4 = 10 vasos a $1.50.',
        },
        {
          id: 'u2-l1-e8',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'El té y el café son sustitutos para muchas personas. Si sube fuertemente el precio del té, ¿qué le ocurre a la curva de demanda de café?',
          options: [
            { id: 'a', text: 'Se desplaza hacia la derecha: al encarecerse el sustituto, se demanda más café a cualquier precio' },
            { id: 'b', text: 'Se desplaza hacia la izquierda: el café se vuelve menos atractivo' },
            { id: 'c', text: 'No cambia: el precio del té no afecta al mercado del café' },
            { id: 'd', text: 'Solo hay un movimiento a lo largo de la curva de demanda de café' },
          ],
          correctOptionId: 'a',
          explanation:
            'Cuando dos bienes son sustitutos, un alza en el precio de uno aumenta la demanda del otro. Al encarecerse el té, algunos compradores lo reemplazan por café, así que a cualquier precio del café se demanda más: la curva de demanda de café se desplaza hacia la derecha.',
        },
        {
          id: 'u2-l1-e9',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Para la mayoría de los hogares, la carne de res es un bien normal. Tras varios años de crecimiento económico, el ingreso promedio de las familias de una ciudad aumenta de forma sostenida.',
          question: '¿Qué debería ocurrir con la curva de demanda de carne de res en esa ciudad?',
          options: [
            { id: 'a', text: 'Se desplaza hacia la derecha, porque en un bien normal un mayor ingreso eleva la demanda a cada precio' },
            { id: 'b', text: 'Se desplaza hacia la izquierda, porque la gente ahora ahorra en lugar de consumir' },
            { id: 'c', text: 'No se desplaza; solo hay un movimiento a lo largo de la curva' },
            { id: 'd', text: 'No cambia, porque el ingreso no influye en la demanda de alimentos' },
          ],
          correctOptionId: 'a',
          explanation:
            'Un bien normal es aquel cuya demanda aumenta cuando sube el ingreso. Como el cambio proviene del ingreso —un determinante distinto del precio del propio bien— toda la curva de demanda se desplaza hacia la derecha.',
        },
        {
          id: 'u2-l1-e10',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'La demanda de un bien está dada por Qd = 120 − 5P. ¿A qué precio P la cantidad demandada es exactamente 45 unidades?',
          unitLabel: '$',
          answer: 15,
          hint: 'Iguala la ecuación de demanda a 45 y despeja P.',
          explanation:
            'Planteamos 45 = 120 − 5P → 5P = 120 − 45 = 75 → P = 15. Verificación: Qd = 120 − 5(15) = 120 − 75 = 45 unidades.',
        },
      ],
    },
    {
      id: 'u2-l2',
      title: 'La oferta: qué mueve a los productores',
      summary: 'Qué hace que las empresas produzcan más o menos, y qué desplaza la curva completa.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: 'La ley de la oferta',
        },
        {
          type: 'paragraph',
          text: 'La ley de la oferta establece que, ceteris paribus, cuando el precio de un bien sube, la cantidad ofrecida de ese bien también sube. Los productores están dispuestos a vender más cuando reciben un mejor precio por cada unidad, porque eso hace rentable cubrir costos marginales más altos.',
        },
        {
          type: 'heading',
          text: 'Qué desplaza la curva de oferta',
        },
        {
          type: 'list',
          items: [
            'Precio de los insumos: si sube el costo de las materias primas o de la mano de obra, la oferta se desplaza a la izquierda.',
            'Tecnología: una mejora tecnológica reduce costos y desplaza la oferta a la derecha.',
            'Expectativas de precios futuros.',
            'Número de vendedores en el mercado.',
            'Impuestos y subsidios a la producción.',
          ],
        },
        {
          type: 'example',
          title: 'Ejemplo: el costo de la harina',
          text: 'Si el precio del trigo sube fuertemente, el costo marginal de producir pan aumenta para todas las panaderías. A cualquier precio de venta del pan, ahora conviene ofrecer menos unidades que antes: la curva de oferta de pan se desplaza hacia la izquierda, no se mueve a lo largo de ella.',
        },
        {
          type: 'callout',
          tone: 'info',
          text: 'Igual que con la demanda: un cambio en el precio del bien mismo mueve la cantidad ofrecida a lo largo de la curva; un cambio en cualquier otro determinante desplaza la curva completa.',
        },
      ],
      exercises: [
        {
          id: 'u2-l2-e1',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'La oferta de un bien está dada por Qs = −20 + 3P. ¿Cuál es la cantidad ofrecida cuando el precio es P = 15?',
          unitLabel: 'unidades',
          answer: 25,
          explanation: 'Qs = −20 + 3(15) = −20 + 45 = 25 unidades.',
        },
        {
          id: 'u2-l2-e2',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'Una nueva maquinaria permite producir el mismo bien a menor costo. ¿Qué le ocurre a la curva de oferta?',
          options: [
            { id: 'a', text: 'Se desplaza hacia la derecha: a cada precio, se ofrece más cantidad' },
            { id: 'b', text: 'Se desplaza hacia la izquierda: a cada precio, se ofrece menos cantidad' },
            { id: 'c', text: 'No cambia, porque la tecnología no afecta la oferta' },
            { id: 'd', text: 'Se mueve a lo largo de la misma curva' },
          ],
          correctOptionId: 'a',
          explanation:
            'Una mejora tecnológica reduce el costo marginal de producir, así que a cualquier precio los productores están dispuestos a ofrecer más: la curva de oferta se desplaza hacia la derecha.',
        },
        {
          id: 'u2-l2-e3',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'El gobierno impone un nuevo impuesto específico a la producción de bebidas azucaradas, que las embotelladoras deben pagar por cada litro producido.',
          question: '¿Qué efecto tiene este impuesto sobre la curva de oferta de bebidas azucaradas?',
          options: [
            { id: 'a', text: 'Se desplaza hacia la izquierda, porque el impuesto aumenta el costo marginal de producir' },
            { id: 'b', text: 'Se desplaza hacia la derecha, porque el gobierno recauda más' },
            { id: 'c', text: 'No cambia, solo cambia la demanda' },
            { id: 'd', text: 'Se mueve a lo largo de la curva de oferta existente' },
          ],
          correctOptionId: 'a',
          explanation:
            'Un impuesto a la producción funciona como un mayor costo marginal para el productor: a cualquier precio de venta, ahora está dispuesto a ofrecer menos cantidad, por lo que la curva de oferta se desplaza hacia la izquierda.',
        },
        {
          id: 'u2-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 20,
          prompt:
            'Explica por qué un aumento en el precio de un insumo clave desplaza la curva de oferta hacia la izquierda, en vez de simplemente mover la cantidad ofrecida a lo largo de la curva.',
          keyPoints: [
            {
              id: 'input_cost',
              label: 'Identifica que el precio del insumo es un determinante distinto del precio del bien',
              synonyms: ['precio del insumo', 'costo de produccion', 'materia prima', 'costo marginal mas alto'],
            },
            {
              id: 'shift_not_movement',
              label: 'Explica que por eso ocurre un desplazamiento de toda la curva, no un movimiento a lo largo de ella',
              synonyms: ['desplaza toda la curva', 'se corre la curva', 'cambia la curva completa', 'no es lo mismo que moverse en la curva'],
            },
            {
              id: 'less_quantity_same_price',
              label: 'Señala que a cualquier precio de venta ahora se ofrece menos',
              synonyms: ['a cualquier precio ofrecen menos', 'menos cantidad al mismo precio', 'menos rentable producir'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'El precio del insumo es un determinante de la oferta, no el precio del bien mismo. Cuando sube el costo de un insumo clave, producir cada unidad se vuelve más caro, así que a cualquier precio de venta los productores están dispuestos a ofrecer menos cantidad que antes. Eso desplaza toda la curva de oferta hacia la izquierda, en vez de simplemente mover la cantidad ofrecida sobre la misma curva.',
          explanation:
            'La respuesta debe distinguir el precio del insumo (determinante) del precio del bien, y concluir que esto desplaza la curva completa porque cambia la cantidad ofrecida a cada nivel de precio.',
        },
        {
          id: 'u2-l2-e5',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'La oferta de un bien está dada por Qs = −12 + 4P. ¿Cuál es la cantidad ofrecida cuando el precio es P = 10?',
          unitLabel: 'unidades',
          answer: 28,
          explanation: 'Qs = −12 + 4(10) = −12 + 40 = 28 unidades.',
        },
        {
          id: 'u2-l2-e6',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Para fomentar la energía limpia, el gobierno entrega a los fabricantes de paneles solares un subsidio fijo por cada panel producido. Al mismo tiempo, el precio de venta de los paneles en el mercado no ha cambiado todavía.',
          question: 'Según los determinantes de la oferta, ¿cuál es el efecto directo del subsidio sobre la curva de oferta de paneles solares?',
          options: [
            { id: 'a', text: 'Se desplaza hacia la derecha, porque el subsidio reduce el costo efectivo de producir cada panel' },
            { id: 'b', text: 'Se desplaza hacia la izquierda, porque el subsidio distorsiona el mercado' },
            { id: 'c', text: 'Hay un movimiento a lo largo de la curva, porque cambia la rentabilidad' },
            { id: 'd', text: 'No cambia la oferta: los subsidios solo afectan la demanda de los consumidores' },
          ],
          correctOptionId: 'a',
          explanation:
            'Un subsidio a la producción actúa como lo contrario de un impuesto: reduce el costo marginal efectivo de cada unidad. A cualquier precio de venta, ahora es rentable ofrecer más paneles, así que la curva de oferta completa se desplaza hacia la derecha. Como el precio del propio bien no cambió, no se trata de un movimiento a lo largo de la curva.',
        },
        {
          id: 'u2-l2-e7',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'La oferta del mercado es la suma horizontal de las ofertas individuales. A un precio de $2.50 por vaso, Ben ofrece 4 vasos de helado y Jerry ofrece 6. ¿Cuál es la cantidad ofrecida del mercado a ese precio?',
          unitLabel: 'vasos',
          answer: 10,
          explanation:
            'La cantidad ofrecida del mercado a cada precio es la suma de las cantidades individuales: 4 + 6 = 10 vasos a $2.50.',
        },
        {
          id: 'u2-l2-e8',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Una fábrica de conservas espera que el precio de venta de su producto suba con fuerza el próximo mes. ¿Cómo afecta esa expectativa a la cantidad que ofrece hoy?',
          options: [
            { id: 'a', text: 'Reduce lo que ofrece hoy y almacena inventario: la curva de oferta actual se desplaza a la izquierda' },
            { id: 'b', text: 'Aumenta lo que ofrece hoy para vender antes de la subida' },
            { id: 'c', text: 'No cambia nada, porque el precio de hoy no ha cambiado' },
            { id: 'd', text: 'Solo se mueve a lo largo de la curva de oferta actual' },
          ],
          correctOptionId: 'a',
          explanation:
            'Si una empresa espera un precio más alto en el futuro, le conviene guardar parte de su producción para venderla luego. Eso reduce la cantidad que ofrece hoy a cada precio y desplaza la curva de oferta actual hacia la izquierda; las expectativas son un determinante, no el precio vigente.',
        },
        {
          id: 'u2-l2-e9',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'El mercado de helado artesanal de una ciudad se vuelve muy rentable y, atraídas por ello, numerosas heladerías nuevas abren durante el verano. El precio de mercado del helado aún no se ha ajustado.',
          question: '¿Cuál es el efecto directo de la entrada de nuevos vendedores sobre la curva de oferta del mercado?',
          options: [
            { id: 'a', text: 'Se desplaza hacia la derecha, porque con más vendedores se ofrece mayor cantidad a cada precio' },
            { id: 'b', text: 'Se desplaza hacia la izquierda, porque hay más competencia por los insumos' },
            { id: 'c', text: 'No cambia; solo hay un movimiento a lo largo de la curva existente' },
            { id: 'd', text: 'Cambia la demanda, no la oferta' },
          ],
          correctOptionId: 'a',
          explanation:
            'El número de vendedores es un determinante de la oferta del mercado. Al sumar la oferta de más empresas, la cantidad total ofrecida a cada precio aumenta, de modo que la curva de oferta del mercado se desplaza hacia la derecha. Como el precio del bien no ha cambiado, no es un movimiento a lo largo de la curva.',
        },
      ],
    },
    {
      id: 'u2-l3',
      title: 'Equilibrio de mercado y estática comparativa',
      summary: 'Cómo se encuentran oferta y demanda, y cómo predecir el efecto de un evento sobre precio y cantidad.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: 'El equilibrio de mercado',
        },
        {
          type: 'paragraph',
          text: 'El equilibrio de mercado es el precio y la cantidad en que la cantidad demandada es exactamente igual a la cantidad ofrecida. A ese precio de equilibrio, no hay escasez ni excedente: todos los que quieren comprar al precio vigente encuentran vendedores dispuestos a venderles, y viceversa.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Fuera del equilibrio',
          text: 'Si el precio está por encima del equilibrio, la cantidad ofrecida supera a la demandada: hay excedente, y la competencia entre vendedores empuja el precio hacia abajo. Si el precio está por debajo, hay escasez, y la competencia entre compradores empuja el precio hacia arriba.',
        },
        {
          type: 'example',
          title: 'Ejemplo: resolviendo el equilibrio',
          text: 'Si Qd = 100 − 2P y Qs = −20 + 3P, el equilibrio ocurre donde Qd = Qs: 100 − 2P = −20 + 3P → 120 = 5P → P = 24. Reemplazando, Qd = 100 − 48 = 52, que coincide con Qs = −20 + 72 = 52. El equilibrio es P = 24, Q = 52.',
        },
        {
          type: 'heading',
          text: 'El método de cuatro pasos para la estática comparativa',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Determinar si el evento desplaza la curva de oferta, la de demanda, o ambas.',
            'Determinar la dirección del desplazamiento (izquierda o derecha).',
            'Usar el diagrama de oferta y demanda para hallar el nuevo equilibrio.',
            'Comparar el nuevo precio y cantidad de equilibrio con los originales.',
          ],
        },
      ],
      exercises: [
        {
          id: 'u2-l3-e1',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'Dado Qd = 80 − 2P y Qs = −10 + 4P, ¿cuál es el precio de equilibrio P?',
          unitLabel: '$',
          answer: 15,
          explanation: 'Igualando: 80 − 2P = −10 + 4P → 90 = 6P → P = 15.',
        },
        {
          id: 'u2-l3-e2',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Un nuevo estudio muestra que el chocolate reduce el riesgo de una enfermedad, y su demanda aumenta (la curva de demanda se desplaza a la derecha). Manteniendo la oferta igual, ¿qué pasa con el precio y la cantidad de equilibrio?',
          options: [
            { id: 'a', text: 'Ambos suben' },
            { id: 'b', text: 'Ambos bajan' },
            { id: 'c', text: 'El precio sube y la cantidad baja' },
            { id: 'd', text: 'El precio baja y la cantidad sube' },
          ],
          correctOptionId: 'a',
          explanation:
            'Un desplazamiento de la demanda hacia la derecha, con la oferta constante, mueve el equilibrio a un precio más alto y una cantidad mayor, siguiendo la curva de oferta.',
        },
        {
          id: 'u2-l3-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'En el mercado del aguacate ocurren dos eventos al mismo tiempo: una sequía reduce fuertemente la cosecha (la oferta se desplaza a la izquierda) y, simultáneamente, se vuelve viral una dieta que recomienda comer aguacate a diario (la demanda se desplaza a la derecha).',
          question: '¿Qué se puede afirmar con certeza sobre el nuevo equilibrio, usando el método de cuatro pasos?',
          options: [
            {
              id: 'a',
              text: 'El precio de equilibrio sube con certeza; el efecto sobre la cantidad de equilibrio es ambiguo sin más datos',
            },
            { id: 'b', text: 'La cantidad de equilibrio sube con certeza; el precio no cambia' },
            { id: 'c', text: 'Ambos, precio y cantidad, bajan con certeza' },
            { id: 'd', text: 'No es posible saber nada sobre el nuevo equilibrio' },
          ],
          correctOptionId: 'a',
          explanation:
            'Cuando oferta y demanda se desplazan en direcciones que ambas empujan el precio hacia arriba (menos oferta, más demanda), el precio de equilibrio sube con certeza. Pero como una fuerza empuja la cantidad hacia abajo (menor oferta) y la otra hacia arriba (mayor demanda), el efecto neto sobre la cantidad depende de cuál desplazamiento es más grande, y no se puede determinar sin conocer las magnitudes exactas.',
        },
        {
          id: 'u2-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 25,
          prompt:
            'Describe el método de cuatro pasos para analizar cómo un evento afecta el equilibrio de un mercado, aplicándolo a un ejemplo de tu elección.',
          keyPoints: [
            {
              id: 'identify_curve',
              label: 'Identifica qué curva (oferta, demanda o ambas) se desplaza',
              synonyms: ['se desplaza la oferta', 'se desplaza la demanda', 'cual curva cambia', 'afecta la oferta o la demanda'],
            },
            {
              id: 'direction',
              label: 'Determina la dirección del desplazamiento',
              synonyms: ['hacia la derecha', 'hacia la izquierda', 'aumenta o disminuye', 'direccion del desplazamiento'],
            },
            {
              id: 'new_equilibrium',
              label: 'Encuentra y compara el nuevo equilibrio de precio y cantidad con el original',
              synonyms: ['nuevo equilibrio', 'comparar precio y cantidad', 'nuevo precio', 'nueva cantidad'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Primero identifico si el evento mueve la oferta, la demanda o ambas. Segundo, determino la dirección del desplazamiento. Tercero, dibujo el nuevo cruce de curvas para hallar el nuevo equilibrio. Cuarto, comparo el nuevo precio y cantidad con los originales. Por ejemplo, si baja el precio de un insumo clave, la oferta se desplaza a la derecha, y el nuevo equilibrio tiene un precio menor y una cantidad mayor que antes.',
          explanation:
            'Se espera que la respuesta mencione los cuatro pasos —identificar la curva afectada, la dirección, el nuevo cruce y la comparación— aplicados a un caso concreto.',
        },
        {
          id: 'u2-l3-e5',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'Dado Qd = 60 − 3P y Qs = −20 + 5P, ¿cuál es la cantidad de equilibrio Q?',
          unitLabel: 'unidades',
          answer: 30,
          hint: 'Primero encuentra el precio de equilibrio igualando Qd = Qs, y luego reemplázalo en cualquiera de las dos ecuaciones.',
          explanation:
            'Igualando: 60 − 3P = −20 + 5P → 80 = 8P → P = 10. Reemplazando: Qd = 60 − 3(10) = 30, que coincide con Qs = −20 + 5(10) = 30. La cantidad de equilibrio es 30 unidades.',
        },
        {
          id: 'u2-l3-e6',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'En un mercado, el precio vigente está por debajo del precio de equilibrio. ¿Qué situación se genera y hacia dónde tiende a moverse el precio?',
          options: [
            { id: 'a', text: 'Hay excedente, y el precio tiende a bajar por la competencia entre vendedores' },
            { id: 'b', text: 'Hay escasez, y el precio tiende a subir por la competencia entre compradores' },
            { id: 'c', text: 'Hay escasez, pero el precio tiende a bajar hasta eliminar la escasez' },
            { id: 'd', text: 'El mercado ya está en equilibrio, así que el precio no se mueve' },
          ],
          correctOptionId: 'b',
          explanation:
            'A un precio menor que el de equilibrio, la cantidad demandada supera a la ofrecida: hay escasez. Los compradores que se quedan sin el bien están dispuestos a pagar más, y esa competencia entre compradores empuja el precio hacia arriba, hasta llegar al equilibrio donde la escasez desaparece.',
        },
        {
          id: 'u2-l3-e7',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'Dado Qd = 90 − 3P y Qs = −30 + 3P, ¿cuál es el precio de equilibrio P?',
          unitLabel: '$',
          answer: 20,
          hint: 'Iguala Qd = Qs y despeja P.',
          explanation:
            'Igualando: 90 − 3P = −30 + 3P → 120 = 6P → P = 20. Verificación: Qd = 90 − 3(20) = 30 y Qs = −30 + 3(20) = 30 coinciden, así que el equilibrio es P = 20, Q = 30.',
        },
        {
          id: 'u2-l3-e8',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'En un mercado con Qd = 80 − 2P y Qs = −40 + 4P, el equilibrio está en P = 20. Si por un control de precios el precio se fija en P = 15 (por debajo del equilibrio), ¿de qué tamaño es la escasez resultante?',
          unitLabel: 'unidades',
          answer: 30,
          hint: 'La escasez es la cantidad demandada menos la cantidad ofrecida al precio fijado.',
          explanation:
            'A P = 15: Qd = 80 − 2(15) = 50 y Qs = −40 + 4(15) = 20. Como Qd > Qs, hay escasez = 50 − 20 = 30 unidades.',
        },
        {
          id: 'u2-l3-e9',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Sube el precio de un insumo clave, lo que desplaza la curva de oferta hacia la izquierda. La demanda no cambia. Según el método de estática comparativa, ¿qué ocurre con el precio y la cantidad de equilibrio?',
          options: [
            { id: 'a', text: 'El precio sube y la cantidad baja' },
            { id: 'b', text: 'El precio baja y la cantidad sube' },
            { id: 'c', text: 'Ambos suben' },
            { id: 'd', text: 'Ambos bajan' },
          ],
          correctOptionId: 'a',
          explanation:
            'Con la demanda constante, un desplazamiento de la oferta hacia la izquierda genera un exceso de demanda al precio anterior: el precio de equilibrio sube y, a lo largo de la curva de demanda, la cantidad de equilibrio baja.',
        },
      ],
    },
  ],
};
