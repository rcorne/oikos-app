import type { Unit } from '@/content/types';

export const unit03: Unit = {
  id: 'u3',
  index: 3,
  subject: 'microeconomia',
  title: 'Elasticidad',
  subtitle: 'Cuánto responden compradores y vendedores a los precios',
  description:
    'La elasticidad mide qué tan sensibles son la cantidad demandada y la cantidad ofrecida ante cambios en el precio, el ingreso o el precio de otros bienes, y por qué esa sensibilidad importa para las decisiones de precio.',
  icon: 'trending-up-outline',
  color: '#E0704F',
  source: 'mankiw',
  lessons: [
    {
      id: 'u3-l1',
      title: 'Elasticidad precio de la demanda',
      summary: 'Cómo medir cuán sensible es la cantidad demandada ante cambios en el precio, y qué la hace más o menos sensible.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: '¿Qué mide la elasticidad precio de la demanda?',
        },
        {
          type: 'paragraph',
          text: 'La ley de la demanda nos dice que, si el precio sube, la cantidad demandada baja. Pero esa relación no es igual de fuerte para todos los bienes: para algunos, un alza de precio hace que la cantidad demandada caiga muchísimo; para otros, casi no cambia. La elasticidad precio de la demanda (Ed) es el número que resume esa sensibilidad: mide el cambio porcentual en la cantidad demandada dividido por el cambio porcentual en el precio.',
        },
        {
          type: 'formula',
          label: 'Fórmula del punto medio para la elasticidad precio de la demanda',
          text: 'Ed = | [ (Q₂ − Q₁) ÷ ((Q₁ + Q₂) / 2) ] ÷ [ (P₂ − P₁) ÷ ((P₁ + P₂) / 2) ] |',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: '¿Por qué dividir por el promedio y no por el valor inicial?',
          text: 'Si calculáramos el cambio porcentual usando siempre el precio inicial como base, subir de $8 a $10 sería un alza de 25%, pero bajar de $10 a $8 sería una caída de 20%: la misma variación tendría dos magnitudes distintas según la dirección. Al usar el promedio entre el valor inicial y el final como base, la fórmula del punto medio entrega el mismo resultado sin importar si el precio sube o baja, lo que la hace más consistente para comparar.',
        },
        {
          type: 'paragraph',
          text: 'Según el valor absoluto que tome Ed, la demanda de un bien se clasifica en tres categorías:',
        },
        {
          type: 'list',
          items: [
            'Demanda elástica (Ed > 1): la cantidad demandada cambia en una proporción mayor que el precio. Un alza de precio golpea fuerte las ventas.',
            'Demanda inelástica (Ed < 1): la cantidad demandada cambia en una proporción menor que el precio. Un alza de precio apenas reduce las ventas.',
            'Demanda de elasticidad unitaria (Ed = 1): la cantidad demandada cambia en la misma proporción que el precio.',
          ],
        },
        {
          type: 'heading',
          text: 'Qué determina que una demanda sea más o menos elástica',
        },
        {
          type: 'list',
          items: [
            'Disponibilidad de sustitutos cercanos: mientras más alternativas tenga un comprador, más fácil es dejar de comprar el bien cuando sube su precio, y más elástica es su demanda.',
            'Si el bien es una necesidad o un lujo: los bienes que consideramos necesarios (como los medicamentos básicos) suelen tener demanda inelástica; los que consideramos prescindibles o de lujo suelen tener demanda más elástica.',
            'Cómo se define el mercado: la demanda de un bien definido de forma amplia (como "alimentos") es más inelástica que la de una variedad específica (como "yogur de vainilla de una marca en particular"), porque esta última tiene muchos más sustitutos cercanos.',
            'El horizonte de tiempo: la demanda de casi cualquier bien es más elástica en el largo plazo que en el corto plazo, porque con más tiempo los consumidores encuentran o desarrollan alternativas.',
          ],
        },
        {
          type: 'example',
          title: 'Ejemplo ilustrativo (cifras inventadas): entradas de cine',
          text: 'Supongamos que una cadena de cines sube el precio de la entrada de $8.000 a $10.000, y la cantidad de entradas vendidas por semana cae de 1.000 a 600. Con la fórmula del punto medio: el cambio porcentual en la cantidad es (600 − 1.000) ÷ 800 = −50%, y el cambio porcentual en el precio es (10.000 − 8.000) ÷ 9.000 ≈ 22,2%. Entonces Ed = 50 ÷ 22,2 ≈ 2,25. Como 2,25 > 1, esta demanda sería elástica: el alza de precio provocó una caída más que proporcional en la cantidad vendida.',
        },
      ],
      exercises: [
        {
          id: 'u3-l1-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'Si el valor absoluto de la elasticidad precio de la demanda de un bien es 1,5, decimos que la demanda es...',
          options: [
            { id: 'a', text: 'Inelástica' },
            { id: 'b', text: 'Elástica' },
            { id: 'c', text: 'Unitaria' },
            { id: 'd', text: 'Perfectamente inelástica' },
          ],
          correctOptionId: 'b',
          explanation:
            'Un valor absoluto de elasticidad mayor a 1 significa que la cantidad demandada responde en una proporción mayor que el precio, lo que define a una demanda como elástica.',
        },
        {
          id: 'u3-l1-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'El precio de un bien sube de $10 a $14, y la cantidad demandada cae de 200 a 120 unidades por semana. Usando la fórmula del punto medio, ¿cuál es la elasticidad precio de la demanda, en valor absoluto?',
          answer: 1.5,
          decimals: 1,
          tolerance: 0.05,
          explanation:
            'Cambio porcentual en la cantidad: (120 − 200) ÷ ((200 + 120) / 2) = −80 ÷ 160 = −50%. Cambio porcentual en el precio: (14 − 10) ÷ ((10 + 14) / 2) = 4 ÷ 12 ≈ 33,3%. Elasticidad = 50 ÷ 33,3 = 1,5.',
        },
        {
          id: 'u3-l1-e3',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'La insulina es un medicamento esencial para las personas con diabetes tipo 1, y en muchos mercados no tiene sustitutos cercanos disponibles.',
          question:
            'Según los determinantes de la elasticidad, ¿qué esperarías sobre la elasticidad precio de la demanda de la insulina?',
          options: [
            { id: 'a', text: 'Sería muy elástica, porque es un bien caro de producir' },
            { id: 'b', text: 'Sería muy inelástica, porque es un bien necesario y sin sustitutos cercanos' },
            { id: 'c', text: 'Sería unitaria, porque los medicamentos siempre tienen Ed = 1' },
            { id: 'd', text: 'No se puede predecir nada sin conocer el precio exacto' },
          ],
          correctOptionId: 'b',
          explanation:
            'Cuando un bien es una necesidad y no tiene sustitutos cercanos, los consumidores siguen comprando cantidades similares aunque el precio suba mucho, porque no tienen una alternativa razonable. Eso se traduce en una demanda inelástica.',
        },
        {
          id: 'u3-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 20,
          prompt:
            'Explica qué es la elasticidad precio de la demanda, por qué usamos la fórmula del punto medio para calcularla, y menciona al menos un factor que la determina.',
          keyPoints: [
            {
              id: 'definition',
              label: 'Define la elasticidad precio de la demanda como la sensibilidad de la cantidad demandada ante cambios en el precio',
              synonyms: [
                'sensibilidad de la cantidad',
                'cuanto cambia la cantidad',
                'variacion porcentual',
                'responde la cantidad al precio',
                'mide la sensibilidad',
                'cuanto reacciona la demanda',
              ],
            },
            {
              id: 'midpoint_reason',
              label: 'Explica que se usa el punto medio para que el resultado no dependa de si el precio sube o baja',
              synonyms: [
                'punto medio',
                'mismo resultado subiendo o bajando',
                'evita la ambiguedad',
                'promedio de los valores',
                'no importa la direccion',
                'no depende de la base',
              ],
            },
            {
              id: 'determinant',
              label:
                'Menciona al menos un determinante de la elasticidad (sustitutos, necesidad vs lujo, definición del mercado, horizonte de tiempo)',
              synonyms: [
                'sustitutos disponibles',
                'bien necesario',
                'bien de lujo',
                'definicion del mercado',
                'largo plazo',
                'corto plazo',
                'tiempo para adaptarse',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'La elasticidad precio de la demanda mide cuánto cambia porcentualmente la cantidad demandada cuando cambia el precio en un porcentaje dado. Usamos la fórmula del punto medio porque así el resultado es el mismo sin importar si el precio sube o baja, ya que se usa el promedio entre el valor inicial y el final como base de comparación. Entre los factores que determinan qué tan elástica es una demanda están la disponibilidad de sustitutos cercanos y si el bien es una necesidad o un lujo: mientras más sustitutos existan, más elástica es la demanda.',
          explanation:
            'Se espera que la respuesta defina correctamente el concepto, justifique el uso del punto medio y mencione al menos uno de los determinantes vistos en la lección.',
        },
        {
          id: 'u3-l1-e5',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'El precio de un pase mensual de gimnasio sube de $20 a $30, y la cantidad de pases vendidos cae de 150 a 90 por mes. Usando la fórmula del punto medio, ¿cuál es la elasticidad precio de la demanda, en valor absoluto?',
          answer: 1.25,
          decimals: 2,
          tolerance: 0.05,
          hint: 'Divide cada cambio por el promedio entre el valor inicial y el final, no por el valor inicial.',
          explanation:
            'Cambio porcentual en la cantidad: (90 − 150) ÷ ((150 + 90) / 2) = −60 ÷ 120 = −50%. Cambio porcentual en el precio: (30 − 20) ÷ ((20 + 30) / 2) = 10 ÷ 25 = 40%. Elasticidad = 50 ÷ 40 = 1,25. Como es mayor a 1, la demanda de estos pases es elástica.',
        },
        {
          id: 'u3-l1-e6',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            '¿Cuál de las siguientes demandas esperarías que fuera la MÁS elástica, según los determinantes vistos en la lección?',
          options: [
            { id: 'a', text: 'La demanda de alimentos en general' },
            { id: 'b', text: 'La demanda de un yogur de frutilla de una marca específica' },
            { id: 'c', text: 'La demanda de medicamentos básicos' },
            { id: 'd', text: 'La demanda de electricidad residencial en el corto plazo' },
          ],
          correctOptionId: 'b',
          explanation:
            'Mientras más específica es la definición del bien, más sustitutos cercanos tiene: si sube el precio del yogur de una marca, es fácil cambiarse a otra marca u otro sabor. Los bienes definidos de forma amplia (alimentos, electricidad) y las necesidades (medicamentos) tienden a tener demandas mucho más inelásticas.',
        },
        {
          id: 'u3-l1-e7',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'El precio de un bien de primera necesidad sube de $90 a $110, y la cantidad demandada cae de 105 a 95 unidades por semana. Usando la fórmula del punto medio, ¿cuál es la elasticidad precio de la demanda, en valor absoluto?',
          answer: 0.5,
          decimals: 1,
          tolerance: 0.05,
          hint: 'Divide cada cambio por el promedio entre el valor inicial y el final. Fíjate si el resultado es mayor o menor a 1.',
          explanation:
            'Cambio porcentual en la cantidad: (95 − 105) ÷ ((105 + 95) / 2) = −10 ÷ 100 = −10%. Cambio porcentual en el precio: (110 − 90) ÷ ((90 + 110) / 2) = 20 ÷ 100 = 20%. Elasticidad = 10 ÷ 20 = 0,5. Como es menor a 1, la demanda es inelástica: típico de un bien de primera necesidad.',
        },
        {
          id: 'u3-l1-e8',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            '¿Por qué la demanda de bencina tiende a ser MÁS elástica en el largo plazo que en el corto plazo?',
          options: [
            { id: 'a', text: 'Porque en el largo plazo el precio de la bencina siempre baja' },
            { id: 'b', text: 'Porque con más tiempo los consumidores encuentran alternativas, como cambiar de auto, mudarse más cerca del trabajo o usar transporte público' },
            { id: 'c', text: 'Porque la bencina deja de ser una necesidad en el largo plazo' },
            { id: 'd', text: 'Porque en el largo plazo desaparecen los sustitutos' },
          ],
          correctOptionId: 'b',
          explanation:
            'El horizonte de tiempo es un determinante clave de la elasticidad: en el corto plazo, ante un alza de precio, el consumidor casi no puede ajustar su consumo de bencina. Con más tiempo puede tomar decisiones que reducen su dependencia (auto más eficiente, otra ubicación, transporte público), así que la cantidad demandada responde más y la demanda se vuelve más elástica.',
        },
        {
          id: 'u3-l1-e9',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'Una tienda sube el precio de un juego de mesa de $22 a $28, y la cantidad vendida cae de 130 a 70 unidades por mes. Usando la fórmula del punto medio, ¿cuál es la elasticidad precio de la demanda, en valor absoluto?',
          answer: 2.5,
          decimals: 1,
          tolerance: 0.05,
          explanation:
            'Cambio porcentual en la cantidad: (70 − 130) ÷ ((130 + 70) / 2) = −60 ÷ 100 = −60%. Cambio porcentual en el precio: (28 − 22) ÷ ((22 + 28) / 2) = 6 ÷ 25 = 24%. Elasticidad = 60 ÷ 24 = 2,5. Como es mucho mayor a 1, la demanda es marcadamente elástica: se trata de un bien prescindible con muchos sustitutos.',
        },
        {
          id: 'u3-l1-e10',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Una agencia vende cruceros de lujo de dos semanas. Son un gasto totalmente prescindible y compiten con muchísimas otras formas de usar ese dinero y ese tiempo libre: otros viajes, remodelar la casa, ahorrar, etc.',
          question:
            'Según los determinantes de la elasticidad, ¿qué esperarías sobre la elasticidad precio de la demanda de estos cruceros?',
          options: [
            { id: 'a', text: 'Sería inelástica, porque los cruceros son caros' },
            { id: 'b', text: 'Sería elástica, porque es un bien de lujo prescindible y con muchos sustitutos' },
            { id: 'c', text: 'Sería unitaria, porque todos los servicios turísticos tienen Ed = 1' },
            { id: 'd', text: 'Sería perfectamente inelástica, porque nadie deja de viajar por el precio' },
          ],
          correctOptionId: 'b',
          explanation:
            'Los bienes de lujo, prescindibles y con muchas alternativas de uso del dinero tienden a tener demanda elástica: si sube el precio, es fácil postergar el crucero o gastar en otra cosa, así que la cantidad demandada cae en una proporción mayor que el alza de precio.',
        },
      ],
    },
    {
      id: 'u3-l2',
      title: 'Elasticidad e ingreso total',
      summary: 'Por qué subir el precio no siempre significa recaudar más plata en total, y cómo lo decide la elasticidad.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: 'Ingreso total: precio por cantidad',
        },
        {
          type: 'formula',
          label: 'Ingreso total',
          text: 'IT = Precio × Cantidad',
        },
        {
          type: 'paragraph',
          text: 'Cuando una empresa cambia el precio de lo que vende, ocurren dos efectos que tiran en direcciones opuestas sobre el ingreso total. Por un lado, cada unidad vendida deja más (o menos) plata: eso es el "efecto precio". Por otro lado, la cantidad vendida cambia en sentido contrario: eso es el "efecto cantidad". Cuál de los dos efectos gana la pulseada depende exactamente de la elasticidad precio de la demanda.',
        },
        {
          type: 'heading',
          text: 'La regla general',
        },
        {
          type: 'list',
          items: [
            'Demanda elástica (Ed > 1): domina el efecto cantidad. Si el precio sube, el ingreso total baja; si el precio baja, el ingreso total sube. Precio e ingreso total se mueven en direcciones opuestas.',
            'Demanda inelástica (Ed < 1): domina el efecto precio. Si el precio sube, el ingreso total sube; si el precio baja, el ingreso total baja. Precio e ingreso total se mueven en la misma dirección.',
            'Demanda de elasticidad unitaria (Ed = 1): los dos efectos se compensan casi exactamente, así que el ingreso total prácticamente no cambia ante una pequeña variación de precio.',
          ],
        },
        {
          type: 'example',
          title: 'Ejemplo ilustrativo (cifras inventadas): demanda elástica',
          text: 'Una productora de conciertos sube el precio de una entrada de $10 a $12, y la cantidad de entradas vendidas cae de 100 a 60 (una caída fuerte, típica de un bien con sustitutos y sin ser esencial). El ingreso total pasa de $10 × 100 = $1.000 a $12 × 60 = $720: subir el precio hizo caer el ingreso total, justamente porque la demanda es elástica.',
        },
        {
          type: 'example',
          title: 'Ejemplo ilustrativo (cifras inventadas): demanda inelástica',
          text: 'Un proveedor de internet residencial, un servicio con pocos sustitutos cercanos, sube el precio de su plan de $10 a $12, y la cantidad de clientes cae apenas de 100 a 90. El ingreso total pasa de $10 × 100 = $1.000 a $12 × 90 = $1.080: subir el precio hizo subir el ingreso total, porque la demanda es inelástica.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Una implicancia para fijar precios',
          text: 'Si una empresa enfrenta una demanda inelástica, subir el precio aumenta su ingreso total. Si enfrenta una demanda elástica, la forma de aumentar el ingreso total suele ser bajar el precio, no subirlo. Por eso conocer la elasticidad del propio producto es clave antes de decidir una estrategia de precios.',
        },
      ],
      exercises: [
        {
          id: 'u3-l2-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'Si la demanda de un bien es elástica (Ed > 1) y la empresa que lo vende decide subir el precio, ¿qué le ocurre al ingreso total?',
          options: [
            { id: 'a', text: 'Sube' },
            { id: 'b', text: 'Baja' },
            { id: 'c', text: 'Se mantiene exactamente igual' },
            { id: 'd', text: 'Depende únicamente del ingreso de los consumidores' },
          ],
          correctOptionId: 'b',
          explanation:
            'Cuando la demanda es elástica, el efecto cantidad domina: la caída porcentual en la cantidad demandada es mayor que el alza porcentual en el precio, así que el ingreso total (precio por cantidad) termina cayendo.',
        },
        {
          id: 'u3-l2-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una heladería vende helados a $4.000 la unidad y vende 100 helados al día (ingreso total = $400.000). Sube el precio a $5.000 y la cantidad demandada cae a 90 helados al día. ¿Cuál es el nuevo ingreso total, en miles de pesos?',
          unitLabel: 'miles de $',
          answer: 450,
          explanation:
            'El nuevo ingreso total es precio por cantidad: $5.000 × 90 = $450.000, es decir, 450 miles de pesos. Como el ingreso total subió a pesar del alza de precio, esta demanda es inelástica en ese tramo.',
        },
        {
          id: 'u3-l2-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Una aerolínea sabe, por estudios de mercado, que la elasticidad precio de la demanda de sus pasajeros de negocios es de aproximadamente 0,4 (inelástica), ya que suelen viajar por trabajo y con poca anticipación, sin muchas alternativas de horario. La aerolínea evalúa subir las tarifas de esos vuelos en temporada alta.',
          question:
            'Según la relación entre elasticidad e ingreso total, ¿qué debería esperar la aerolínea si sube las tarifas para los pasajeros de negocios?',
          options: [
            { id: 'a', text: 'Que el ingreso total por esos pasajes suba' },
            { id: 'b', text: 'Que el ingreso total por esos pasajes baje' },
            { id: 'c', text: 'Que el ingreso total no cambie, porque el ingreso total nunca depende del precio' },
            { id: 'd', text: 'Que sea imposible predecir algo sin conocer el costo del combustible' },
          ],
          correctOptionId: 'a',
          explanation:
            'Con una elasticidad de 0,4 (menor a 1), la demanda es inelástica: la cantidad de pasajes vendidos cae en una proporción menor que lo que sube el precio. Por lo tanto, domina el efecto precio y el ingreso total aumenta.',
        },
        {
          id: 'u3-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 25,
          prompt:
            'Explica por qué, cuando la demanda es elástica, subir el precio reduce el ingreso total de la empresa, y por qué, cuando la demanda es inelástica, subir el precio lo aumenta.',
          keyPoints: [
            {
              id: 'revenue_definition',
              label: 'Relaciona el ingreso total con el producto entre precio y cantidad (IT = P × Q)',
              synonyms: [
                'precio por cantidad',
                'ingreso total es p por q',
                'multiplicar precio y cantidad',
                'ingreso es precio por unidades',
                'precio multiplicado por cantidad',
              ],
            },
            {
              id: 'elastic_case',
              label:
                'Explica que en demanda elástica la cantidad cae proporcionalmente más de lo que sube el precio, y el ingreso total baja',
              synonyms: [
                'cae mas la cantidad',
                'domina el efecto cantidad',
                'elasticidad mayor a uno',
                'baja el ingreso total',
                'se vende mucho menos',
                'cae fuerte la cantidad vendida',
              ],
            },
            {
              id: 'inelastic_case',
              label:
                'Explica que en demanda inelástica la cantidad cae proporcionalmente menos de lo que sube el precio, y el ingreso total sube',
              synonyms: [
                'cae poco la cantidad',
                'domina el efecto precio',
                'elasticidad menor a uno',
                'sube el ingreso total',
                'casi no cambia la cantidad',
                'la cantidad casi no reacciona',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'El ingreso total es precio multiplicado por cantidad. Cuando la demanda es elástica, un alza de precio provoca una caída porcentualmente mayor en la cantidad vendida, así que el efecto cantidad domina y el ingreso total termina bajando. Cuando la demanda es inelástica, la cantidad vendida casi no reacciona al alza de precio, así que domina el efecto precio y el ingreso total sube. Por eso una empresa necesita conocer la elasticidad de su producto antes de decidir si le conviene subir o bajar precios.',
          explanation:
            'Se espera que la respuesta identifique el ingreso total como precio por cantidad y explique correctamente ambos casos (elástico e inelástico) en términos de qué efecto domina.',
        },
        {
          id: 'u3-l2-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Un carrito de completos baja el precio de $5.000 a $4.000 por unidad, y la cantidad vendida sube de 200 a 300 completos al día. ¿Cuál es el nuevo ingreso total diario, en miles de pesos?',
          unitLabel: 'miles de $',
          answer: 1200,
          hint: 'El ingreso total es el precio nuevo multiplicado por la cantidad nueva.',
          explanation:
            'El nuevo ingreso total es $4.000 × 300 = $1.200.000, es decir, 1.200 miles de pesos. Antes era $5.000 × 200 = $1.000.000, así que bajar el precio AUMENTÓ el ingreso total: eso es exactamente lo que ocurre cuando la demanda es elástica en ese tramo.',
        },
        {
          id: 'u3-l2-e6',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Una cafetería de especialidad estima que la elasticidad precio de la demanda de su café es de aproximadamente 1,8: en su barrio hay muchas otras cafeterías y sus clientes comparan precios con facilidad. La dueña quiere aumentar el ingreso total del local y está evaluando qué hacer con el precio del café.',
          question:
            'Según la relación entre elasticidad e ingreso total, ¿cuál de las siguientes estrategias es la más coherente con su objetivo?',
          options: [
            { id: 'a', text: 'Subir el precio, porque un precio mayor siempre aumenta el ingreso total' },
            { id: 'b', text: 'Bajar el precio, porque con demanda elástica la cantidad vendida sube proporcionalmente más de lo que baja el precio' },
            { id: 'c', text: 'Mantener el precio, porque con Ed = 1,8 el ingreso total no puede cambiar' },
            { id: 'd', text: 'Subir el precio, porque la demanda elástica hace que la cantidad vendida no cambie' },
          ],
          correctOptionId: 'b',
          explanation:
            'Con una elasticidad de 1,8 (mayor a 1), la demanda es elástica: domina el efecto cantidad. Al bajar el precio, la cantidad vendida aumenta en una proporción mayor que la caída del precio, así que el ingreso total (P × Q) sube. Subir el precio tendría el efecto contrario.',
        },
        {
          id: 'u3-l2-e7',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una tostaduría vende bolsas de café a $3.000 y vende 500 bolsas al mes (ingreso total = $1.500.000). Sube el precio a $3.600 y la cantidad demandada cae a 450 bolsas al mes. ¿Cuál es el nuevo ingreso total mensual, en miles de pesos?',
          unitLabel: 'miles de $',
          answer: 1620,
          hint: 'El ingreso total es el precio nuevo multiplicado por la cantidad nueva.',
          explanation:
            'El nuevo ingreso total es $3.600 × 450 = $1.620.000, es decir, 1.620 miles de pesos. Como el ingreso total subió (de $1.500.000 a $1.620.000) a pesar del alza de precio, la demanda es inelástica en ese tramo.',
        },
        {
          id: 'u3-l2-e8',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'Si la demanda de un bien es inelástica (Ed < 1) y la empresa que lo vende BAJA el precio, ¿qué le ocurre al ingreso total?',
          options: [
            { id: 'a', text: 'Baja, porque con demanda inelástica el precio y el ingreso total se mueven en la misma dirección' },
            { id: 'b', text: 'Sube, porque bajar el precio siempre aumenta el ingreso total' },
            { id: 'c', text: 'Se mantiene igual, porque la demanda inelástica nunca reacciona' },
            { id: 'd', text: 'Baja, porque la cantidad vendida cae cuando baja el precio' },
          ],
          correctOptionId: 'a',
          explanation:
            'Con demanda inelástica domina el efecto precio: la cantidad vendida sube muy poco al bajar el precio, no lo suficiente para compensar el menor precio por unidad. Por eso precio e ingreso total se mueven en la misma dirección, y bajar el precio hace caer el ingreso total.',
        },
        {
          id: 'u3-l2-e9',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Una editorial estima que la elasticidad precio de la demanda de una de sus revistas es de aproximadamente 1,0 (elasticidad unitaria). Está evaluando un pequeño ajuste al precio de tapa.',
          question:
            'Según la relación entre elasticidad e ingreso total, ¿qué debería esperar la editorial con su ingreso total si hace un pequeño cambio de precio?',
          options: [
            { id: 'a', text: 'Que suba mucho si sube el precio' },
            { id: 'b', text: 'Que el ingreso total se mantenga prácticamente igual, porque los efectos precio y cantidad se compensan' },
            { id: 'c', text: 'Que baje siempre, sin importar la dirección del cambio de precio' },
            { id: 'd', text: 'Que el ingreso total se duplique' },
          ],
          correctOptionId: 'b',
          explanation:
            'Con elasticidad unitaria (Ed = 1), el cambio porcentual en la cantidad es igual al cambio porcentual en el precio, así que el efecto precio y el efecto cantidad se compensan casi exactamente. El ingreso total (P × Q) prácticamente no cambia ante una pequeña variación de precio.',
        },
      ],
    },
    {
      id: 'u3-l3',
      title: 'Elasticidad de la oferta, del ingreso y cruzada',
      summary: 'Cómo responden los vendedores a los precios, y cómo el ingreso de los consumidores y el precio de otros bienes mueven la demanda.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: 'Elasticidad precio de la oferta',
        },
        {
          type: 'paragraph',
          text: 'Así como la demanda tiene su propia elasticidad, la oferta también. La elasticidad precio de la oferta (Es) mide el cambio porcentual en la cantidad ofrecida dividido por el cambio porcentual en el precio, y se calcula con la misma lógica del punto medio que usamos para la demanda, solo que ahora la variable que responde es la cantidad ofrecida.',
        },
        {
          type: 'formula',
          label: 'Elasticidad precio de la oferta (fórmula del punto medio)',
          text: 'Es = | [ (Q₂ − Q₁) ÷ ((Q₁ + Q₂) / 2) ] ÷ [ (P₂ − P₁) ÷ ((P₁ + P₂) / 2) ] |, usando cantidades ofrecidas',
        },
        {
          type: 'list',
          items: [
            'El horizonte de tiempo es, por lejos, el determinante más importante: en el corto plazo los productores suelen tener capacidad instalada fija, así que la oferta es más inelástica; en el largo plazo pueden construir nuevas plantas o entrar al mercado, así que la oferta se vuelve más elástica.',
            'La flexibilidad de los insumos y el proceso productivo: si una empresa puede redirigir fácilmente trabajadores o maquinaria hacia producir más, su oferta es más elástica.',
            'La posibilidad de almacenar el bien: los productos que se pueden guardar sin dañarse permiten ajustar la cantidad ofrecida con más facilidad que los perecibles.',
            'La capacidad ociosa disponible: si los productores ya están produciendo al máximo de su capacidad, aumentar la cantidad ofrecida ante un alza de precio es más difícil, y la oferta es más inelástica.',
          ],
        },
        {
          type: 'heading',
          text: 'Elasticidad ingreso y elasticidad cruzada de la demanda',
        },
        {
          type: 'paragraph',
          text: 'La elasticidad ingreso de la demanda mide cómo responde la cantidad demandada de un bien ante un cambio en el ingreso de los consumidores (cambio porcentual en la cantidad demandada dividido por el cambio porcentual en el ingreso). La elasticidad cruzada de la demanda mide cómo responde la cantidad demandada de un bien ante un cambio en el precio de otro bien (cambio porcentual en la cantidad demandada del primer bien dividido por el cambio porcentual en el precio del segundo bien). En ambos casos, lo primero que hay que mirar no es el tamaño del número, sino su signo.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'La regla de los signos',
          text: 'Elasticidad ingreso positiva: el bien es normal (se compra más al subir el ingreso). Elasticidad ingreso negativa: el bien es inferior (se compra menos al subir el ingreso). Elasticidad cruzada positiva: los dos bienes son sustitutos (subir el precio de uno aumenta la demanda del otro). Elasticidad cruzada negativa: los dos bienes son complementos (subir el precio de uno reduce la demanda del otro).',
        },
        {
          type: 'example',
          title: 'Ejemplo ilustrativo (cifras inventadas): elasticidad ingreso',
          text: 'El ingreso mensual promedio de un grupo de hogares sube de $800.000 a $1.000.000, y la cantidad de comidas en restaurantes que consumen al mes sube de 4 a 6. Cambio porcentual en la cantidad: (6 − 4) ÷ 5 = 40%. Cambio porcentual en el ingreso: (1.000.000 − 800.000) ÷ 900.000 ≈ 22,2%. Elasticidad ingreso = 40 ÷ 22,2 = 1,8. Como el resultado es positivo, comer en restaurantes es un bien normal (y como además es mayor a 1, se comporta como un bien de lujo para este grupo).',
        },
        {
          type: 'example',
          title: 'Ejemplo ilustrativo (cifras inventadas): elasticidad cruzada',
          text: 'El precio de la mantequilla sube de $2.000 a $3.000, y la cantidad demandada de margarina (un sustituto habitual) sube de 100 a 150 unidades por semana. Cambio porcentual en la cantidad de margarina: (150 − 100) ÷ 125 = 40%. Cambio porcentual en el precio de la mantequilla: (3.000 − 2.000) ÷ 2.500 = 40%. Elasticidad cruzada = 40 ÷ 40 = 1,0. Como el resultado es positivo, mantequilla y margarina se comportan como sustitutos.',
        },
      ],
      exercises: [
        {
          id: 'u3-l3-e1',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question: 'Si la elasticidad ingreso de la demanda de un bien es negativa, ese bien es...',
          options: [
            { id: 'a', text: 'Un bien de lujo' },
            { id: 'b', text: 'Un bien inferior' },
            { id: 'c', text: 'Un sustituto de otro bien' },
            { id: 'd', text: 'Un complemento de otro bien' },
          ],
          correctOptionId: 'b',
          explanation:
            'Una elasticidad ingreso negativa significa que la cantidad demandada cae cuando el ingreso de los consumidores sube. Por definición, ese es el comportamiento de un bien inferior.',
        },
        {
          id: 'u3-l3-e2',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'La cantidad ofrecida de trigo sube de 400 a 600 toneladas cuando el precio sube de $20 a $24 la tonelada. Usando la fórmula del punto medio, ¿cuál es la elasticidad precio de la oferta, en valor absoluto?',
          answer: 2.2,
          decimals: 1,
          tolerance: 0.05,
          explanation:
            'Cambio porcentual en la cantidad: (600 − 400) ÷ ((400 + 600) / 2) = 200 ÷ 500 = 40%. Cambio porcentual en el precio: (24 − 20) ÷ ((20 + 24) / 2) = 4 ÷ 22 ≈ 18,2%. Elasticidad de la oferta = 40 ÷ 18,2 = 2,2.',
        },
        {
          id: 'u3-l3-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'En una cadena de comida rápida, el precio de las hamburguesas sube un 15%. Como consecuencia, la cantidad demandada de papas fritas de esa misma cadena (que casi siempre se compran junto con la hamburguesa) cae un 6%.',
          question:
            'Según el signo de la elasticidad cruzada implícita en este caso, ¿cómo describirías la relación entre hamburguesas y papas fritas?',
          options: [
            { id: 'a', text: 'Son sustitutos, porque la elasticidad cruzada es positiva' },
            { id: 'b', text: 'Son complementos, porque la elasticidad cruzada es negativa' },
            { id: 'c', text: 'Ambos son bienes inferiores' },
            { id: 'd', text: 'No están relacionados, porque pertenecen a mercados distintos' },
          ],
          correctOptionId: 'b',
          explanation:
            'Cuando sube el precio de un bien y cae la cantidad demandada de otro, la elasticidad cruzada entre ambos es negativa, lo que indica que son complementos: se consumen juntos, así que encarecer uno reduce la demanda del otro.',
        },
        {
          id: 'u3-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 25,
          prompt:
            'Explica qué significa que la elasticidad cruzada entre dos bienes sea positiva, y qué significa que la elasticidad ingreso de un bien sea negativa. Da un ejemplo de cada caso.',
          keyPoints: [
            {
              id: 'cross_positive',
              label: 'Explica que una elasticidad cruzada positiva indica que los bienes son sustitutos',
              synonyms: [
                'son sustitutos',
                'elasticidad cruzada positiva',
                'sube la demanda del otro bien',
                'se reemplazan entre si',
                'compiten entre ellos',
              ],
            },
            {
              id: 'income_negative',
              label: 'Explica que una elasticidad ingreso negativa indica que el bien es inferior',
              synonyms: [
                'bien inferior',
                'elasticidad ingreso negativa',
                'cae la demanda cuando sube el ingreso',
                'se compra menos con mas ingreso',
                'demanda negativa al ingreso',
              ],
            },
            {
              id: 'concrete_example',
              label: 'Da un ejemplo concreto de bienes sustitutos y/o de un bien inferior',
              synonyms: [
                'ejemplo mantequilla y margarina',
                'ejemplo bus y taxi',
                'fideos instantaneos',
                'ejemplo pan de supermercado',
                'ejemplo cafe y te',
                'ejemplo marca generica',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Que la elasticidad cruzada entre dos bienes sea positiva significa que son sustitutos: si sube el precio de uno, la cantidad demandada del otro aumenta, como pasa entre la mantequilla y la margarina. Que la elasticidad ingreso de un bien sea negativa significa que es un bien inferior: cuando el ingreso de los consumidores sube, compran menos de ese bien, como puede pasar con los fideos instantáneos, que muchas familias reemplazan por otras opciones apenas mejora su ingreso.',
          explanation:
            'Se espera que la respuesta interprete correctamente ambos signos (cruzada positiva como sustitutos, ingreso negativa como bien inferior) y entregue al menos un ejemplo concreto y razonable.',
        },
        {
          id: 'u3-l3-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'El precio del café de grano sube de $8 a $12 por bolsa, y la cantidad demandada de té sube de 90 a 110 cajas por semana. Usando cambios porcentuales de punto medio, ¿cuál es la elasticidad cruzada de la demanda del té respecto al precio del café?',
          answer: 0.5,
          decimals: 1,
          tolerance: 0.05,
          hint: 'Divide el cambio porcentual en la cantidad de té por el cambio porcentual en el precio del café, usando promedios como base.',
          explanation:
            'Cambio porcentual en la cantidad de té: (110 − 90) ÷ ((90 + 110) / 2) = 20 ÷ 100 = 20%. Cambio porcentual en el precio del café: (12 − 8) ÷ ((8 + 12) / 2) = 4 ÷ 10 = 40%. Elasticidad cruzada = 20 ÷ 40 = 0,5. Como es positiva, café y té se comportan como sustitutos.',
        },
        {
          id: 'u3-l3-e6',
          type: 'case_study',
          difficulty: 'facil',
          xp: 10,
          scenario:
            'Una florista vende ramos de flores frescas que se marchitan en pocos días y no pueden almacenarse. Un fabricante de poleras estampadas, en cambio, puede guardar su producto en bodega por meses y contratar más turnos si hace falta.',
          question:
            'En el corto plazo, ¿qué esperarías sobre la elasticidad precio de la oferta de cada uno?',
          options: [
            { id: 'a', text: 'La oferta de flores frescas sería más inelástica, porque no se pueden almacenar y hay poco margen para ajustar la cantidad' },
            { id: 'b', text: 'La oferta de flores frescas sería más elástica, porque las flores son más baratas que las poleras' },
            { id: 'c', text: 'Ambas ofertas serían igual de elásticas, porque la elasticidad de la oferta solo depende del precio' },
            { id: 'd', text: 'La oferta de poleras sería más inelástica, porque la ropa es un bien necesario' },
          ],
          correctOptionId: 'a',
          explanation:
            'La posibilidad de almacenar el bien y la flexibilidad del proceso productivo son determinantes clave de la elasticidad de la oferta. Las flores frescas son perecibles y su producción no se ajusta rápido, así que su oferta es más inelástica; las poleras pueden guardarse y producirse con más turnos, lo que hace su oferta más elástica.',
        },
        {
          id: 'u3-l3-e7',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Cuando el precio de mercado sube de $10 a $14 por unidad, una fábrica con capacidad ociosa aumenta la cantidad ofrecida de 300 a 500 unidades. Usando la fórmula del punto medio, ¿cuál es la elasticidad precio de la oferta, en valor absoluto?',
          answer: 1.5,
          decimals: 1,
          tolerance: 0.05,
          explanation:
            'Cambio porcentual en la cantidad ofrecida: (500 − 300) ÷ ((300 + 500) / 2) = 200 ÷ 400 = 50%. Cambio porcentual en el precio: (14 − 10) ÷ ((10 + 14) / 2) = 4 ÷ 12 ≈ 33,3%. Elasticidad de la oferta = 50 ÷ 33,3 = 1,5. Como es mayor a 1, la oferta es elástica: la capacidad ociosa le permite a la fábrica reaccionar con fuerza al alza de precio.',
        },
        {
          id: 'u3-l3-e8',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Si la elasticidad cruzada de la demanda entre dos bienes es positiva, esos dos bienes son...',
          options: [
            { id: 'a', text: 'Complementos' },
            { id: 'b', text: 'Sustitutos' },
            { id: 'c', text: 'Ambos bienes inferiores' },
            { id: 'd', text: 'Ambos bienes de lujo' },
          ],
          correctOptionId: 'b',
          explanation:
            'Una elasticidad cruzada positiva significa que, al subir el precio de un bien, la cantidad demandada del otro aumenta. Ese es el comportamiento de dos sustitutos: si uno se encarece, la gente se cambia al otro. Si fuera negativa, serían complementos.',
        },
        {
          id: 'u3-l3-e9',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'Cuando el ingreso mensual de un grupo de hogares sube de $500.000 a $700.000, la cantidad de entradas de cine que consumen al mes sube de 40 a 60. Usando cambios porcentuales de punto medio, ¿cuál es la elasticidad ingreso de la demanda? (Considera el signo).',
          answer: 1.2,
          decimals: 1,
          tolerance: 0.05,
          hint: 'Divide el cambio porcentual en la cantidad por el cambio porcentual en el ingreso, usando promedios como base. El signo importa para interpretar el resultado.',
          explanation:
            'Cambio porcentual en la cantidad: (60 − 40) ÷ ((40 + 60) / 2) = 20 ÷ 50 = 40%. Cambio porcentual en el ingreso: (700.000 − 500.000) ÷ ((500.000 + 700.000) / 2) = 200.000 ÷ 600.000 ≈ 33,3%. Elasticidad ingreso = 40 ÷ 33,3 = 1,2. Como es positiva, el cine es un bien normal; y como además es mayor a 1, se comporta como un bien de lujo para este grupo.',
        },
      ],
    },
  ],
};
