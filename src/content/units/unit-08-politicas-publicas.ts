import type { Unit } from '@/content/types';

export const unit08: Unit = {
  id: 'u8',
  index: 8,
  title: 'Economía y políticas públicas',
  subtitle: 'Excedentes, impuestos y el análisis costo-beneficio de una política',
  description:
    'La unidad que cierra el curso: usa las herramientas de oferta y demanda para medir el bienestar que genera un mercado, entender cómo los impuestos alteran ese bienestar, y aplicar el mismo razonamiento para evaluar políticas públicas reales.',
  icon: 'flag-outline',
  color: '#9E4830',
  source: 'ambos',
  lessons: [
    {
      id: 'u8-l1',
      title: 'Excedente del consumidor y del productor',
      summary: 'Cómo medir las ganancias que compradores y vendedores obtienen al participar en el mercado, y por qué su suma indica eficiencia.',
      estimatedMinutes: 9,
      content: [
        {
          type: 'heading',
          text: '¿Qué ganan compradores y vendedores al intercambiar?',
        },
        {
          type: 'paragraph',
          text: 'Hasta ahora hemos usado la oferta y la demanda para explicar cómo se determinan el precio y la cantidad de equilibrio en un mercado. Pero el equilibrio también esconde una pregunta distinta: ¿cuánto bienestar genera ese mercado para quienes participan en él? Para responderla, los economistas usan dos herramientas complementarias: el excedente del consumidor y el excedente del productor.',
        },
        {
          type: 'heading',
          text: 'El excedente del consumidor',
        },
        {
          type: 'paragraph',
          text: 'El excedente del consumidor mide cuánto más estaban dispuestos a pagar los compradores por un bien, comparado con lo que efectivamente pagaron. Cada punto de la curva de demanda representa la disposición a pagar de un comprador distinto por una unidad adicional; si el precio de mercado es menor que esa disposición a pagar, ese comprador obtiene una ganancia neta. Sumando esa ganancia para todas las unidades compradas, se obtiene el excedente del consumidor, que gráficamente corresponde al área bajo la curva de demanda y sobre el precio de mercado, hasta la cantidad de equilibrio.',
        },
        {
          type: 'heading',
          text: 'El excedente del productor',
        },
        {
          type: 'paragraph',
          text: 'El excedente del productor es el espejo del anterior: mide cuánto más reciben los vendedores por un bien, comparado con el costo mínimo al que estaban dispuestos a venderlo. Cada punto de la curva de oferta representa el costo marginal —o el precio mínimo aceptable— de un vendedor distinto; si el precio de mercado supera ese mínimo, el vendedor obtiene una ganancia neta. Sumando esa ganancia para todas las unidades vendidas, se obtiene el excedente del productor, que corresponde al área sobre la curva de oferta y bajo el precio de mercado, hasta la cantidad de equilibrio.',
        },
        {
          type: 'example',
          title: 'Ejemplo: calculando ambos excedentes',
          text: 'Supongamos que en un mercado la demanda es P = 100 − 2Q y la oferta es P = 10 + Q (P en dólares, Q en unidades). Igualando ambas, el equilibrio ocurre en Q = 30 y P = 40. El excedente del consumidor es el área de un triángulo con base igual a la cantidad de equilibrio (30) y altura igual a la disposición máxima a pagar menos el precio de equilibrio (100 − 40 = 60): 0,5 × 30 × 60 = 900. El excedente del productor es otro triángulo, con la misma base (30) y altura igual al precio de equilibrio menos el costo mínimo de producir la primera unidad (40 − 10 = 30): 0,5 × 30 × 30 = 450. El excedente total del mercado —la suma de ambos— es 900 + 450 = 1.350.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'El equilibrio competitivo maximiza el excedente total',
          text: 'Puede demostrarse que, en un mercado competitivo sin fallas de mercado, la cantidad de equilibrio es exactamente la que maximiza el excedente total (consumidor más productor). Cualquier cantidad menor deja sin realizar transacciones que convenían a ambas partes; cualquier cantidad mayor obliga a realizar transacciones donde el costo supera la disposición a pagar. Por eso el excedente total se usa como medida de referencia de la eficiencia de un mercado, y es la vara con la que mediremos, en las próximas lecciones, el efecto de un impuesto o de una política pública.',
        },
      ],
      exercises: [
        {
          id: 'u8-l1-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: 'El excedente del consumidor en un mercado corresponde a...',
          options: [
            {
              id: 'a',
              text: 'La diferencia entre lo que los compradores estaban dispuestos a pagar y lo que efectivamente pagaron, sumada para todas las unidades compradas',
            },
            { id: 'b', text: 'El ingreso total que reciben las empresas por vender el bien' },
            { id: 'c', text: 'La diferencia entre el precio de mercado y el costo mínimo que aceptarían los vendedores' },
            { id: 'd', text: 'La recaudación que obtiene el gobierno al gravar el bien' },
          ],
          correctOptionId: 'a',
          explanation:
            'El excedente del consumidor mide, para cada unidad comprada, cuánto más estaba dispuesto a pagar el consumidor comparado con el precio que realmente pagó; sumado sobre todas las unidades, corresponde al área bajo la curva de demanda y sobre el precio de mercado. La opción c describe el excedente del productor, no el del consumidor.',
        },
        {
          id: 'u8-l1-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'En un mercado, la curva de demanda es P = 80 − Q (P en dólares, Q en unidades). En el equilibrio, el precio es $20 y la cantidad transada es 60 unidades. ¿Cuál es el excedente del consumidor, en dólares?',
          unitLabel: '$',
          answer: 1800,
          explanation:
            'El excedente del consumidor es el área del triángulo entre la curva de demanda y el precio de equilibrio: la altura es la disposición máxima a pagar menos el precio pagado (80 − 20 = 60), y la base es la cantidad transada (60). Excedente = 0,5 × 60 × 60 = 1.800.',
        },
        {
          id: 'u8-l1-e3',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'En el mercado de bicicletas, el precio de equilibrio es $150.000 y la cantidad transada es 200 unidades. Un fabricante que estaba dispuesto a vender su bicicleta por hasta $90.000 finalmente la vende al precio de mercado.',
          question: '¿Cuánto excedente del productor obtiene este fabricante en particular por esa unidad vendida?',
          options: [
            { id: 'a', text: '$60.000, la diferencia entre el precio de mercado y el mínimo que estaba dispuesto a aceptar' },
            { id: 'b', text: '$150.000, el precio completo de venta' },
            { id: 'c', text: '$90.000, el costo mínimo que estaba dispuesto a aceptar' },
            { id: 'd', text: '$0, porque el excedente del productor solo existe a nivel agregado del mercado, no por unidad' },
          ],
          correctOptionId: 'a',
          explanation:
            'El excedente del productor de una unidad específica es la diferencia entre el precio que efectivamente recibe el vendedor ($150.000) y el precio mínimo al que estaba dispuesto a vender ($90.000): 150.000 − 90.000 = $60.000. El excedente del productor sí puede calcularse unidad por unidad, y luego sumarse para obtener el excedente total del mercado.',
        },
        {
          id: 'u8-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 25,
          prompt:
            'Explica qué mide el excedente del consumidor, qué mide el excedente del productor, y por qué su suma (el excedente total) se usa como medida de la eficiencia de un mercado.',
          keyPoints: [
            {
              id: 'consumer_surplus_def',
              label: 'Define el excedente del consumidor como la diferencia entre disposición a pagar y precio pagado',
              synonyms: [
                'disposicion a pagar',
                'lo que estaban dispuestos a pagar',
                'precio que pagaron',
                'area bajo la demanda',
                'valoracion del comprador',
                'cuanto mas querian pagar',
                'diferencia entre valoracion y precio',
                'beneficio del comprador',
              ],
            },
            {
              id: 'producer_surplus_def',
              label: 'Define el excedente del productor como la diferencia entre el precio recibido y el costo mínimo aceptable',
              synonyms: [
                'costo minimo',
                'precio que reciben',
                'area sobre la oferta',
                'disposicion a vender',
                'costo de producir',
                'precio minimo aceptable',
                'ganancia del vendedor',
                'cuanto mas recibieron',
              ],
            },
            {
              id: 'total_surplus_efficiency',
              label: 'Explica que la suma de ambos excedentes mide el bienestar generado y se maximiza en el equilibrio competitivo',
              synonyms: [
                'excedente total',
                'bienestar total',
                'se maximiza en el equilibrio',
                'eficiencia del mercado',
                'asignacion eficiente',
                'suma de ambos excedentes',
                'maximiza el bienestar',
                'mercado competitivo eficiente',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'El excedente del consumidor es la diferencia entre lo máximo que los compradores estaban dispuestos a pagar y el precio que realmente pagaron, sumada sobre todas las unidades. El excedente del productor es la diferencia entre el precio que reciben los vendedores y el costo mínimo que estaban dispuestos a aceptar. La suma de ambos es el excedente total, y los economistas muestran que este se maximiza exactamente en la cantidad de equilibrio de un mercado competitivo, por lo que se usa como medida de cuán eficientemente se están asignando los recursos.',
          explanation:
            'Se espera que la respuesta defina ambos excedentes por separado y explique la idea de que su suma —el excedente total— es una medida de eficiencia que se maximiza en el equilibrio de mercado.',
        },
        {
          id: 'u8-l1-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'En un mercado, la curva de oferta es P = 20 + 2Q (P en dólares, Q en unidades). En el equilibrio, el precio es $80 y la cantidad transada es 30 unidades. ¿Cuál es el excedente del productor, en dólares?',
          unitLabel: '$',
          answer: 900,
          hint: 'El excedente del productor es un triángulo: su base es la cantidad transada y su altura es el precio de equilibrio menos el costo mínimo de la primera unidad (el intercepto de la oferta).',
          explanation:
            'El excedente del productor es el área del triángulo sobre la curva de oferta y bajo el precio de equilibrio: la base es la cantidad transada (30) y la altura es el precio de equilibrio menos el precio mínimo al que se ofrecería la primera unidad (80 − 20 = 60). Excedente = 0,5 × 30 × 60 = 900.',
        },
        {
          id: 'u8-l1-e6',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'En la feria de una comuna, el mercado de frutas alcanza su equilibrio en 500 kilos vendidos por día. La municipalidad, buscando "dinamizar el comercio", propone un programa que incentive a los feriantes a vender 600 kilos diarios, es decir, 100 kilos más que la cantidad de equilibrio.',
          question: '¿Qué efecto tendría sobre el excedente total del mercado forzar la cantidad transada por encima del equilibrio?',
          options: [
            {
              id: 'a',
              text: 'El excedente total caería, porque en esas unidades adicionales el costo de producirlas supera la disposición a pagar de los compradores',
            },
            { id: 'b', text: 'El excedente total aumentaría, porque más transacciones siempre significan más bienestar' },
            { id: 'c', text: 'El excedente total no cambiaría, porque las ganancias de los feriantes compensan exactamente las pérdidas de los compradores' },
            { id: 'd', text: 'Solo aumentaría el excedente del consumidor, sin ningún efecto sobre el excedente del productor' },
          ],
          correctOptionId: 'a',
          explanation:
            'La cantidad de equilibrio es exactamente la que maximiza el excedente total. Más allá de ella, cada unidad adicional cuesta producirla más de lo que algún comprador está dispuesto a pagar por ella: esas transacciones destruyen excedente en vez de crearlo. Por eso, tanto quedarse corto como pasarse de la cantidad de equilibrio reduce el excedente total del mercado.',
        },
      ],
    },
    {
      id: 'u8-l2',
      title: 'Impuestos, incidencia tributaria y pérdida de eficiencia',
      summary: 'Quién termina pagando realmente un impuesto, y por qué introduce una pérdida de eficiencia en el mercado.',
      estimatedMinutes: 10,
      content: [
        {
          type: 'heading',
          text: 'La incidencia de un impuesto: ¿quién paga realmente?',
        },
        {
          type: 'paragraph',
          text: 'Cuando el gobierno establece un impuesto específico sobre un bien —un monto fijo por unidad transada— es tentador pensar que lo paga quien la ley designa como responsable de remitirlo al fisco: el vendedor, si se cobra en la fábrica, o el comprador, si se cobra en la caja. Pero la incidencia económica de un impuesto —quién realmente termina con menos poder adquisitivo— casi nunca coincide exactamente con la incidencia legal. Lo que importa es cómo reaccionan compradores y vendedores frente al cambio de precios, es decir, sus elasticidades relativas.',
        },
        {
          type: 'heading',
          text: 'La cuña que introduce el impuesto',
        },
        {
          type: 'paragraph',
          text: 'Un impuesto específico de monto t por unidad abre una brecha —una "cuña"— entre el precio que pagan los compradores (Pc) y el precio que efectivamente reciben los vendedores (Pv), de modo que Pc − Pv = t. Como los compradores ahora pagan más y los vendedores reciben menos que en el equilibrio sin impuesto, algunas transacciones que antes convenían a ambas partes dejan de realizarse: la cantidad transada cae por debajo del nivel de equilibrio original.',
        },
        {
          type: 'example',
          title: 'Ejemplo: un impuesto de $10 por unidad',
          text: 'Sea la demanda P = 100 − Q y la oferta P = 10 + Q. Sin impuesto, el equilibrio es Q = 45 y P = 55. Ahora el gobierno cobra un impuesto de $10 por unidad. La nueva cantidad transada Q\' cumple (100 − Q\') − (10 + Q\') = 10, es decir, 90 − 2Q\' = 10, de donde Q\' = 40. A esa cantidad, los compradores pagan Pc = 100 − 40 = $60, y los vendedores reciben Pv = 10 + 40 = $50 (con una brecha de exactamente $10, como debía ser). El gobierno recauda 10 × 40 = $400. Y como la cantidad cayó de 45 a 40 unidades, se pierden 5 transacciones que antes convenían a ambas partes.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: '¿Quién soportó más la carga?',
          text: 'Los compradores pasaron de pagar $55 a pagar $60 ($5 más), y los vendedores pasaron de recibir $55 a recibir $50 ($5 menos): la carga se repartió exactamente por la mitad. Eso ocurrió porque, en este ejemplo, la demanda y la oferta tienen la misma sensibilidad al precio (la misma pendiente en valor absoluto). Si la demanda fuera más inelástica que la oferta —los compradores reaccionan poco al precio—, los compradores absorberían una porción mayor del impuesto, y viceversa. La regla general es: el lado del mercado que puede ajustar menos su comportamiento ante cambios de precio termina asumiendo la mayor parte de la carga tributaria, sin importar sobre quién recaiga legalmente el impuesto.',
        },
        {
          type: 'heading',
          text: 'La pérdida de eficiencia (o pérdida irrecuperable) del impuesto',
        },
        {
          type: 'paragraph',
          text: 'Las 5 unidades que dejaron de transarse en el ejemplo anterior no eran transacciones cualquiera: eran transacciones donde la disposición a pagar de algún comprador superaba el costo de producir de algún vendedor, es decir, transacciones que generaban excedente y que el impuesto eliminó por completo. Ese excedente perdido —que no lo recibe ni el comprador, ni el vendedor, ni el gobierno vía recaudación— se llama pérdida de eficiencia o pérdida irrecuperable del impuesto. Gráficamente, corresponde al triángulo entre las curvas de oferta y demanda, entre la cantidad con impuesto y la cantidad de equilibrio original: su área es 0,5 × (reducción en la cantidad) × (monto del impuesto). En el ejemplo, 0,5 × 5 × 10 = $25.',
        },
      ],
      exercises: [
        {
          id: 'u8-l2-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            '¿De qué depende, en última instancia, quién termina soportando la mayor parte de la carga de un impuesto (compradores o vendedores)?',
          options: [
            { id: 'a', text: 'De quién esté legalmente obligado a remitirle el impuesto al gobierno' },
            {
              id: 'b',
              text: 'De las elasticidades relativas de la oferta y la demanda: el lado más inelástico soporta una mayor parte de la carga',
            },
            { id: 'c', text: 'Siempre se reparte exactamente en partes iguales entre compradores y vendedores' },
            { id: 'd', text: 'De qué tan alto sea el precio del bien antes del impuesto' },
          ],
          correctOptionId: 'b',
          explanation:
            'La incidencia legal (quién le remite el cheque al gobierno) no determina la incidencia económica (quién realmente pierde poder adquisitivo). Lo que importa es la elasticidad relativa: el lado del mercado que puede ajustar menos su cantidad ante cambios de precio —el más inelástico— termina absorbiendo una parte mayor del impuesto.',
        },
        {
          id: 'u8-l2-e2',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'Antes de aplicar un impuesto, la cantidad de equilibrio en un mercado es 200 unidades. El gobierno establece un impuesto específico de $4 por unidad, y como resultado la cantidad transada cae a 180 unidades. ¿Cuál es la pérdida de eficiencia (pérdida irrecuperable) que genera este impuesto, en dólares?',
          unitLabel: '$',
          answer: 40,
          explanation:
            'La pérdida de eficiencia es el área del triángulo entre las curvas de oferta y demanda que ya no se produce: la base es la reducción en la cantidad transada (200 − 180 = 20) y la altura es el monto del impuesto por unidad ($4). Pérdida = 0,5 × 20 × 4 = 40.',
        },
        {
          id: 'u8-l2-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'El gobierno aplica un impuesto específico al tabaco. La demanda de cigarrillos es muy inelástica (los fumadores reducen poco su consumo aunque suba el precio), mientras que la oferta de las tabacaleras es relativamente elástica (pueden ajustar su producción con más facilidad).',
          question:
            '¿Qué se puede esperar sobre la incidencia de este impuesto, independientemente de si la ley obliga a pagarlo a las tabacaleras o a los consumidores en el punto de venta?',
          options: [
            { id: 'a', text: 'Los consumidores absorberán la mayor parte de la carga del impuesto, porque su demanda es más inelástica' },
            { id: 'b', text: 'Las tabacaleras absorberán la mayor parte de la carga, porque la ley las obliga a pagar el impuesto' },
            { id: 'c', text: 'La carga se reparte por igual entre consumidores y tabacaleras, sin importar las elasticidades' },
            { id: 'd', text: 'No hay pérdida de eficiencia porque el tabaco es un bien inelástico' },
          ],
          correctOptionId: 'a',
          explanation:
            'Como la demanda de cigarrillos es mucho más inelástica que la oferta, los consumidores son quienes menos pueden ajustar su comportamiento ante el impuesto, y terminan absorbiendo la mayor parte de su costo mediante precios más altos, sin importar quién lo remita formalmente al fisco. Aunque la demanda inelástica hace que la pérdida de eficiencia sea menor que en un mercado con demanda elástica, sigue existiendo mientras la cantidad transada se reduzca algo.',
        },
        {
          id: 'u8-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 25,
          prompt:
            'Explica qué es la "cuña" que genera un impuesto entre el precio que pagan los compradores y el que reciben los vendedores, y por qué esa cuña reduce la cantidad transada y genera una pérdida de eficiencia.',
          keyPoints: [
            {
              id: 'tax_wedge',
              label: 'Describe la cuña como la diferencia entre el precio que pagan los compradores y el que reciben los vendedores',
              synonyms: [
                'cuña',
                'brecha de precios',
                'precio que pagan los compradores',
                'precio que reciben los vendedores',
                'diferencia de precio',
                'brecha entre precios',
                'separa el precio de compra y venta',
                'monto del impuesto por unidad',
              ],
            },
            {
              id: 'quantity_falls',
              label: 'Explica que esta cuña reduce la cantidad transada por debajo del nivel de equilibrio sin impuesto',
              synonyms: [
                'cae la cantidad',
                'menos unidades transadas',
                'se reduce el volumen',
                'baja la cantidad de equilibrio',
                'disminuye la cantidad',
                'se transan menos unidades',
                'cantidad por debajo del equilibrio original',
              ],
            },
            {
              id: 'deadweight_loss',
              label: 'Identifica que las transacciones que ya no ocurren generan una pérdida de eficiencia para la sociedad',
              synonyms: [
                'perdida de eficiencia',
                'perdida irrecuperable',
                'deadweight loss',
                'se pierde excedente total',
                'transacciones que ya no se hacen',
                'triangulo de perdida',
                'costo social del impuesto',
                'nadie recibe ese excedente',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Un impuesto específico crea una cuña entre el precio que pagan los compradores y el que reciben los vendedores, igual al monto del impuesto por unidad. Como los vendedores reciben menos que antes y los compradores pagan más, algunas transacciones que antes convenían —donde la disposición a pagar superaba el costo de producir— dejan de realizarse, y la cantidad transada cae. Esas transacciones que ya no ocurren representan un excedente que nadie recibe: ni el comprador, ni el vendedor, ni el gobierno vía recaudación, y por eso constituyen una pérdida de eficiencia o pérdida irrecuperable.',
          explanation:
            'La respuesta debe mencionar la cuña de precios, la caída en la cantidad transada y la idea de que las transacciones perdidas generan una pérdida de eficiencia que no beneficia a nadie.',
        },
        {
          id: 'u8-l2-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'El gobierno establece un impuesto específico de $6 por unidad en un mercado. Antes del impuesto se transaban 120 unidades; con el impuesto, la cantidad transada cae a 100 unidades. ¿Cuánto recauda el gobierno con este impuesto, en dólares?',
          unitLabel: '$',
          answer: 600,
          hint: 'La recaudación es el monto del impuesto por unidad multiplicado por la cantidad que efectivamente se transa una vez aplicado el impuesto, no por la cantidad original.',
          explanation:
            'La recaudación del gobierno es el impuesto por unidad multiplicado por la cantidad transada después del impuesto: 6 × 100 = $600. Un error común es usar la cantidad original (120 unidades), pero el gobierno solo recauda sobre las transacciones que efectivamente ocurren con el impuesto vigente.',
        },
        {
          id: 'u8-l2-e6',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'En un mercado con un impuesto específico de $8 por unidad, los compradores pagan un precio de $30 por unidad. ¿Cuánto reciben efectivamente los vendedores por cada unidad?',
          options: [
            { id: 'a', text: '$22, porque el impuesto abre una cuña de $8 entre el precio que pagan los compradores y el que reciben los vendedores' },
            { id: 'b', text: '$30, porque los vendedores siempre reciben el precio completo que pagan los compradores' },
            { id: 'c', text: '$38, porque los vendedores suman el impuesto al precio de venta' },
            { id: 'd', text: '$8, porque los vendedores solo se quedan con el monto del impuesto' },
          ],
          correctOptionId: 'a',
          explanation:
            'El impuesto abre una cuña entre el precio que pagan los compradores (Pc) y el que reciben los vendedores (Pv), de modo que Pc − Pv es igual al monto del impuesto: 30 − 8 = $22. Los $8 restantes por unidad van al gobierno como recaudación.',
        },
      ],
    },
    {
      id: 'u8-l3',
      title: 'Análisis costo-beneficio de una política pública',
      summary: 'Cómo evaluar si una política pública conviene a la sociedad, comparando beneficios y costos, y distinguiendo eficiencia de equidad.',
      estimatedMinutes: 9,
      content: [
        {
          type: 'heading',
          text: 'Evaluar una política pública con la misma lógica',
        },
        {
          type: 'paragraph',
          text: 'Las herramientas de excedente y de análisis de mercado que hemos usado en esta unidad no son solo un ejercicio académico: son la base del análisis costo-beneficio, el método más usado para decidir si conviene o no implementar una política pública. La idea central es simple de enunciar, aunque no siempre simple de aplicar: sumar todos los beneficios sociales que genera una política y compararlos con todos sus costos sociales, incluyendo los costos de oportunidad de los recursos que se usan.',
        },
        {
          type: 'formula',
          label: 'Beneficio social neto',
          text: 'Beneficio social neto = Beneficios sociales totales − Costos sociales totales (incluidos los costos de oportunidad)',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Identificar a todos los grupos afectados por la política: usuarios directos, terceros no involucrados en la transacción original, y quienes financian la política con sus impuestos.',
            'Cuantificar, en una unidad común (normalmente dinero), cada beneficio y cada costo relevante, incluyendo efectos indirectos como externalidades.',
            'Sumar los beneficios totales y los costos totales, y comparar: si el beneficio neto es positivo, la política aumenta el excedente total de la sociedad.',
            'Reportar explícitamente quién gana y quién pierde con la política, no solo si el resultado agregado es positivo.',
          ],
        },
        {
          type: 'example',
          title: 'Ejemplo: subsidio al transporte público',
          text: 'Una ciudad evalúa subsidiar las tarifas de sus buses. Estima que el subsidio le costará al fisco $50.000 al mes (el costo de oportunidad de esos fondos, que podrían usarse en otra cosa). A cambio, calcula tres beneficios: menor congestión para quienes siguen usando auto, valorada en $25.000 al mes; menor contaminación, valorada en $10.000 al mes; y el excedente adicional que obtienen los nuevos usuarios del bus gracias a tarifas más bajas, valorado en $20.000 al mes. Los beneficios sociales totales suman 25.000 + 10.000 + 20.000 = $55.000 al mes, frente a un costo de $50.000: el beneficio social neto es $5.000 al mes. Según este criterio, la política conviene a la sociedad en su conjunto, aunque por un margen ajustado.',
        },
        {
          type: 'heading',
          text: 'Eficiencia versus equidad',
        },
        {
          type: 'paragraph',
          text: 'Que una política tenga un beneficio social neto positivo solo dice que, sumando todas las ganancias y todas las pérdidas, la sociedad queda mejor: es un criterio de eficiencia. No dice nada sobre si esas ganancias y pérdidas están repartidas de manera que consideremos justa. Una política puede aumentar el excedente total y, al mismo tiempo, concentrar casi todo el beneficio en un grupo pequeño mientras impone costos considerables sobre otro grupo —a menudo uno con menos capacidad de organizarse o de influir en la decisión.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Eficiencia no es lo mismo que equidad',
          text: 'En el debate sobre políticas públicas en Chile y América Latina —reformas tributarias, subsidios focalizados, proyectos de infraestructura— buena parte de la controversia no es sobre si el análisis costo-beneficio está bien hecho, sino sobre si el resultado, aunque eficiente, es aceptable en términos de equidad. Un buen análisis de política pública debe presentar ambas caras: el efecto sobre el excedente total y la distribución de esos efectos entre distintos grupos.',
        },
      ],
      exercises: [
        {
          id: 'u8-l3-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: 'La lógica básica de un análisis costo-beneficio para evaluar una política pública consiste en...',
          options: [
            {
              id: 'a',
              text: 'Sumar todos los beneficios sociales de la política y compararlos con todos sus costos sociales, incluyendo costos de oportunidad',
            },
            { id: 'b', text: 'Verificar únicamente si la política genera recaudación para el gobierno' },
            { id: 'c', text: 'Comparar solo los costos directos de implementación, sin considerar los beneficios' },
            { id: 'd', text: 'Determinar si la política es popular según encuestas de opinión' },
          ],
          correctOptionId: 'a',
          explanation:
            'El análisis costo-beneficio compara el valor total de los beneficios sociales que genera una política con el valor total de sus costos sociales —incluyendo los costos de oportunidad de los recursos usados— para estimar si, en términos agregados, la política aumenta el bienestar.',
        },
        {
          id: 'u8-l3-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una política de transporte público subsidiado reduce la congestión y la contaminación, generando un beneficio social estimado de $12 por usuario al mes para 4.000 usuarios que se cambian del auto al bus. El subsidio le cuesta al fisco, en promedio, $3 por usuario subsidiado. ¿Cuál es el beneficio social neto mensual de la política, en dólares?',
          unitLabel: '$',
          answer: 36000,
          explanation:
            'Los beneficios sociales totales son 12 × 4.000 = $48.000 al mes, y los costos para el fisco son 3 × 4.000 = $12.000 al mes. El beneficio social neto es 48.000 − 12.000 = $36.000.',
        },
        {
          id: 'u8-l3-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Una nueva política de eficiencia hídrica libera agua para agricultura de exportación, aumentando el excedente total de la economía en $2.000 millones al año. Sin embargo, casi todo ese beneficio lo capturan un puñado de grandes agroexportadoras, mientras miles de pequeños agricultores de subsistencia, que dependían de esa misma agua para sus cultivos, pierden acceso y ven caer sus ingresos.',
          question:
            'Desde la perspectiva del análisis costo-beneficio y la distinción entre eficiencia y equidad, ¿cuál de las siguientes afirmaciones es más precisa?',
          options: [
            {
              id: 'a',
              text: 'La política es eficiente porque aumenta el excedente total, pero eso no implica que sea deseable en términos de equidad, dado lo desigual de la distribución de sus efectos',
            },
            { id: 'b', text: 'Si el excedente total aumenta, la política necesariamente mejora el bienestar de todos los involucrados' },
            { id: 'c', text: 'Como los pequeños agricultores pierden, la política reduce el excedente total de la economía' },
            { id: 'd', text: 'El análisis costo-beneficio no tiene nada que decir sobre políticas que generan ganadores y perdedores' },
          ],
          correctOptionId: 'a',
          explanation:
            'Un aumento del excedente total es un criterio de eficiencia: en principio, los ganadores podrían compensar a los perdedores y aun así quedar mejor. Pero si esa compensación no ocurre en la práctica, una política eficiente puede ser muy desigual y generar legítimas objeciones de equidad. Eficiencia y equidad son criterios distintos, y un buen análisis de política pública debe reportar ambos, no solo el resultado agregado.',
        },
        {
          id: 'u8-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 25,
          prompt:
            'Explica por qué una política pública puede aumentar el excedente total de la economía (ser eficiente) y, al mismo tiempo, ser vista como injusta o generar fuerte oposición política. Da un ejemplo.',
          keyPoints: [
            {
              id: 'efficiency_def',
              label: 'Explica que un excedente total mayor significa que la política es eficiente en el agregado',
              synonyms: [
                'aumenta el excedente total',
                'mas eficiente',
                'mejora el bienestar agregado',
                'suma de ganancias y perdidas positiva',
                'beneficio neto positivo',
                'mejora la eficiencia',
                'gana mas de lo que pierde',
              ],
            },
            {
              id: 'distribution_matters',
              label: 'Señala que la distribución de las ganancias y pérdidas entre distintos grupos puede ser muy desigual',
              synonyms: [
                'distribucion desigual',
                'ganadores y perdedores',
                'quien gana y quien pierde',
                'no se reparte igual',
                'concentrado en pocos',
                'beneficios concentrados',
                'costos en otro grupo',
                'reparto desigual de los efectos',
              ],
            },
            {
              id: 'equity_efficiency_tradeoff',
              label: 'Distingue eficiencia de equidad como criterios distintos para evaluar una política',
              synonyms: [
                'equidad',
                'justicia distributiva',
                'eficiencia no es lo mismo que equidad',
                'criterio distinto',
                'normativo',
                'compensacion a los perdedores',
                'juicio de valor',
                'distribucion justa',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Una política puede ser eficiente porque, sumando todas las ganancias y pérdidas de todos los agentes, el excedente total de la economía aumenta. Pero esa suma agregada no dice nada sobre quién gana y quién pierde: si los beneficios se concentran en un grupo pequeño y los costos recaen sobre otro grupo —muchas veces más vulnerable— la política puede generar rechazo aunque sea eficiente en el agregado. Por ejemplo, liberalizar el uso de un recurso natural puede aumentar el excedente total del país, pero si eso significa que comunidades locales pierden su acceso al recurso sin ninguna compensación, la política será vista como injusta pese a ser eficiente.',
          explanation:
            'La respuesta debe distinguir el concepto de eficiencia (excedente total) del de equidad (distribución entre grupos), y aplicar esa distinción a un ejemplo concreto de política pública.',
        },
        {
          id: 'u8-l3-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una ciudad evalúa construir una red de ciclovías. El proyecto costaría $80.000 al año (incluido el costo de oportunidad de los fondos). Los beneficios anuales estimados son: mejoras en salud pública por $45.000, menor congestión vehicular por $30.000 y mayor actividad del comercio local por $25.000. ¿Cuál es el beneficio social neto anual del proyecto, en dólares?',
          unitLabel: '$',
          answer: 20000,
          hint: 'Suma primero todos los beneficios sociales y luego réstale el costo total del proyecto.',
          explanation:
            'Los beneficios sociales totales son 45.000 + 30.000 + 25.000 = $100.000 al año. Restando el costo anual del proyecto: 100.000 − 80.000 = $20.000 de beneficio social neto. Como el resultado es positivo, el criterio de eficiencia del análisis costo-beneficio indica que el proyecto conviene a la sociedad en su conjunto.',
        },
        {
          id: 'u8-l3-e6',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Un país implementa un impuesto a las bebidas azucaradas. El análisis costo-beneficio arroja un beneficio social neto positivo: los ahorros en salud pública y la recaudación superan la pérdida de excedente en el mercado. Sin embargo, los hogares de menores ingresos destinan una fracción mayor de su presupuesto a estas bebidas, por lo que el impuesto pesa proporcionalmente más sobre ellos que sobre los hogares de altos ingresos.',
          question: '¿Qué debería incluir un buen informe de evaluación de esta política, según lo visto en la lección?',
          options: [
            {
              id: 'a',
              text: 'Tanto el beneficio social neto agregado como la distribución de los costos entre grupos, señalando que la carga recae proporcionalmente más sobre los hogares de menores ingresos',
            },
            { id: 'b', text: 'Solo el beneficio social neto agregado, porque si es positivo la política es deseable para todos los grupos' },
            { id: 'c', text: 'Recomendar eliminar el impuesto, porque toda política con efectos distributivos desiguales es ineficiente' },
            { id: 'd', text: 'Solo la recaudación esperada, porque el objetivo de todo impuesto es financiar al Estado' },
          ],
          correctOptionId: 'a',
          explanation:
            'Un beneficio social neto positivo indica que la política es eficiente en el agregado, pero no dice cómo se reparten sus costos y beneficios. En este caso el impuesto es regresivo: pesa proporcionalmente más sobre los hogares de menores ingresos. Un buen análisis debe reportar ambas dimensiones —eficiencia y distribución— para que quien decide pueda ponderar el resultado agregado contra sus efectos de equidad. La opción c confunde los criterios: una política con efectos distributivos desiguales puede seguir siendo eficiente.',
        },
      ],
    },
  ],
};
