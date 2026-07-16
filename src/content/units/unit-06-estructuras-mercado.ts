import type { Unit } from '@/content/types';

export const unit06: Unit = {
  id: 'u6',
  index: 6,
  title: 'Estructuras de mercado',
  subtitle: 'De la competencia perfecta al monopolio, pasando por la estrategia',
  description:
    'Cómo cambia el comportamiento de una empresa según cuántas rivales tenga y cuánto poder sobre el precio pueda ejercer: desde el productor que solo puede aceptar el precio de mercado hasta el monopolista que fija su propio precio, pasando por la rivalidad estratégica del oligopolio.',
  icon: 'business-outline',
  color: '#158A47',
  source: 'ambos',
  lessons: [
    {
      id: 'u6-l1',
      title: 'Competencia perfecta: muchas empresas, un solo precio',
      summary: 'Por qué ninguna empresa individual puede influir en el precio, y qué implica eso para su producción y sus beneficios.',
      estimatedMinutes: 7,
      content: [
        {
          type: 'heading',
          text: 'Los rasgos de un mercado perfectamente competitivo',
        },
        {
          type: 'paragraph',
          text: 'La competencia perfecta es un caso de referencia: describe qué ocurre cuando ningún vendedor ni comprador, por separado, tiene el tamaño suficiente para mover el precio de mercado. No es la situación más común en la vida real, pero sirve como punto de comparación para evaluar qué tan competitivo es cualquier mercado concreto.',
        },
        {
          type: 'list',
          items: [
            'Hay muchísimos compradores y vendedores, cada uno demasiado pequeño para influir por sí solo en el precio de mercado.',
            'El producto es homogéneo: para quien compra, lo que ofrece una empresa es indistinguible de lo que ofrece cualquier otra.',
            'Existe libre entrada y salida: cualquier empresa puede empezar a producir o abandonar el mercado sin enfrentar barreras relevantes.',
            'El precio de mercado es información pública que todos los participantes conocen y toman como un dato.',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Empresas precio-aceptantes',
          text: 'Estos cuatro rasgos, juntos, implican que ninguna empresa individual tiene poder para fijar su propio precio: si cobrara más que el precio de mercado, perdería a todos sus clientes frente a competidores idénticos; si cobrara menos, renunciaría a ingresos sin ninguna necesidad, porque ya puede vender toda su producción al precio vigente. Por eso se dice que las empresas en competencia perfecta son "precio-aceptantes" (price takers).',
        },
        {
          type: 'heading',
          text: 'La curva de demanda que enfrenta una empresa individual',
        },
        {
          type: 'example',
          title: 'Ejemplo: un productor de trigo entre miles',
          text: 'Un productor de trigo que representa una fracción mínima de la cosecha nacional no puede influir en el precio del trigo. Si intenta cobrar un poco más que el precio de mercado, sus compradores simplemente le comprarán a cualquiera de los miles de productores restantes, que ofrecen un grano idéntico. Si cobrara menos, malgastaría ingresos, porque de todas formas puede vender toda su cosecha al precio vigente. Por eso, la curva de demanda que enfrenta ese productor —a diferencia de la curva de demanda de todo el mercado del trigo, que sí tiene pendiente negativa— es una línea horizontal al nivel del precio de mercado.',
        },
        {
          type: 'formula',
          label: 'Regla de producción óptima',
          text: 'P = CMg',
        },
        {
          type: 'paragraph',
          text: 'Como el precio es fijo para la empresa, cada unidad adicional que produce le aporta un ingreso igual al precio. Le conviene seguir produciendo mientras ese ingreso supere el costo marginal de producir esa unidad, y detenerse exactamente en el punto en que el costo marginal alcanza el precio: ahí maximiza su beneficio. Si a ese precio la empresa obtiene un beneficio económico positivo, esa señal atrae a nuevas empresas —gracias a la libre entrada—, la oferta de mercado crece y el precio cae hasta que, en el largo plazo, el beneficio económico converge a cero.',
        },
      ],
      exercises: [
        {
          id: 'u6-l1-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: 'En un mercado perfectamente competitivo, la curva de demanda que enfrenta una empresa individual es...',
          options: [
            { id: 'a', text: 'Horizontal, al nivel del precio de mercado' },
            { id: 'b', text: 'Igual a la curva de demanda de todo el mercado, con pendiente negativa' },
            { id: 'c', text: 'Vertical, porque la empresa no puede vender más de lo que produce' },
            { id: 'd', text: 'Con pendiente positiva, igual que la curva de oferta' },
          ],
          correctOptionId: 'a',
          explanation:
            'Como la empresa es precio-aceptante, puede vender cualquier cantidad que produzca al precio de mercado sin necesidad de bajarlo, pero no vendería nada a un precio mayor. Eso hace que su curva de demanda individual sea horizontal (perfectamente elástica), distinta de la curva de demanda de todo el mercado, que sí tiene pendiente negativa.',
        },
        {
          id: 'u6-l1-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una empresa en un mercado perfectamente competitivo vende su producto al precio de mercado de $50 por unidad. Produce 200 unidades, con un costo medio total (CMe) de $42 por unidad. ¿Cuál es su beneficio económico total?',
          unitLabel: '$',
          answer: 1600,
          explanation: 'Beneficio = (P − CMe) × Q = (50 − 42) × 200 = 8 × 200 = 1600.',
        },
        {
          id: 'u6-l1-e3',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'En el mercado de la quinua, cientos de pequeños productores venden un grano prácticamente idéntico al mismo precio. Durante dos años seguidos, el precio de mercado se ubica muy por encima del costo medio total de los productores, generando beneficios económicos positivos para todos ellos.',
          question: '¿Qué es lo más probable que ocurra en este mercado durante los siguientes años, según el modelo de competencia perfecta?',
          options: [
            {
              id: 'a',
              text: 'Nuevos productores entran al mercado atraídos por los beneficios, la oferta se desplaza hacia la derecha y el precio cae hasta que el beneficio económico vuelve a cero',
            },
            { id: 'b', text: 'Los productores existentes se coluden para mantener el precio alto indefinidamente' },
            { id: 'c', text: 'El gobierno debe fijar un precio mínimo para evitar que el precio siga subiendo' },
            { id: 'd', text: 'Nada cambia, porque en competencia perfecta el beneficio económico positivo es permanente' },
          ],
          correctOptionId: 'a',
          explanation:
            'La libre entrada es uno de los rasgos definitorios de la competencia perfecta: los beneficios positivos atraen nuevas empresas, la oferta de mercado aumenta y el precio cae hasta que el beneficio económico converge a cero en el largo plazo.',
        },
        {
          id: 'u6-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 20,
          prompt:
            'Explica por qué una empresa en competencia perfecta produce hasta el punto en que el precio iguala su costo marginal, y por qué su beneficio económico tiende a cero en el largo plazo.',
          keyPoints: [
            {
              id: 'price_equals_mc',
              label: 'Explica la regla P = CMg como condición de maximización de beneficios',
              synonyms: [
                'precio igual costo marginal',
                'p igual cmg',
                'produce hasta que el costo marginal alcanza el precio',
                'iguala el precio al costo marginal',
                'regla de produccion optima',
                'maximiza beneficio produciendo donde el precio es igual al costo marginal',
              ],
            },
            {
              id: 'price_taker',
              label: 'Reconoce que la empresa es precio-aceptante y por eso el ingreso marginal es igual al precio',
              synonyms: [
                'precio aceptante',
                'no puede influir en el precio',
                'ingreso marginal igual al precio',
                'toma el precio de mercado',
                'empresa precio aceptante',
              ],
            },
            {
              id: 'entry_exit_zero_profit',
              label: 'Explica que la libre entrada y salida elimina el beneficio económico positivo en el largo plazo',
              synonyms: [
                'libre entrada',
                'entran nuevas empresas',
                'beneficio economico cero',
                'se elimina el beneficio',
                'entrada de competidores',
                'largo plazo beneficio cero',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'La empresa es precio-aceptante, así que su ingreso marginal es igual al precio de mercado. Por eso, le conviene producir cada unidad adicional mientras el ingreso que genera (el precio) sea mayor que su costo marginal, y detenerse justo cuando el costo marginal alcanza el precio: ahí maximiza su beneficio. Si ese beneficio es positivo, la libre entrada atrae nuevas empresas, la oferta total aumenta y el precio baja hasta que, en el largo plazo, el beneficio económico converge a cero.',
          explanation:
            'Se espera que la respuesta conecte la regla P = CMg con la condición de precio-aceptante, y explique el mecanismo de entrada y salida que lleva el beneficio económico a cero en el largo plazo.',
        },
      ],
    },
    {
      id: 'u6-l2',
      title: 'Monopolio y poder de mercado',
      summary: 'Qué significa ser el único vendedor, por qué el ingreso marginal cae más rápido que el precio, y qué costo tiene eso para la eficiencia del mercado.',
      estimatedMinutes: 7,
      content: [
        {
          type: 'heading',
          text: 'El monopolista es todo el mercado',
        },
        {
          type: 'paragraph',
          text: 'Un monopolio es un mercado con un solo vendedor, de un bien sin sustitutos cercanos. A diferencia de la empresa en competencia perfecta, que enfrenta una demanda horizontal porque es una entre miles, el monopolista enfrenta directamente la curva de demanda de todo el mercado, que tiene pendiente negativa: si quiere vender más unidades, tiene que bajar el precio.',
        },
        {
          type: 'heading',
          text: 'Por qué el ingreso marginal cae más rápido que el precio',
        },
        {
          type: 'paragraph',
          text: 'Para vender una unidad adicional, el monopolista no solo cobra un precio menor por esa unidad: como no puede discriminar precios entre compradores, también tiene que bajar el precio de todas las unidades que ya vendía. Por eso, el ingreso que efectivamente suma cada unidad adicional (el ingreso marginal, IMg) es menor que el precio de esa unidad, y la brecha entre ambos crece a medida que aumenta la cantidad vendida.',
        },
        {
          type: 'example',
          title: 'Ejemplo numérico',
          text: 'Supongamos una demanda de mercado P = 20 − Q. Si el monopolista vende 1 unidad, cobra $19 y su ingreso total es $19. Si vende 2, el precio baja a $18 y el ingreso total sube a $36: el ingreso marginal de esa segunda unidad es $17, ya menor que su precio ($18). Si vende 3, el precio cae a $17 y el ingreso total llega a $51: el ingreso marginal de la tercera unidad es solo $15. El precio baja de a $1 por unidad, pero el ingreso marginal baja de a $2: por eso la curva de ingreso marginal siempre queda por debajo de la curva de demanda, y cae más rápido que ella.',
        },
        {
          type: 'formula',
          label: 'Regla de maximización de beneficios del monopolista',
          text: 'IMg = CMg',
        },
        {
          type: 'paragraph',
          text: 'El monopolista maximiza su beneficio produciendo la cantidad en que el ingreso marginal iguala al costo marginal, y cobrando el precio más alto que la curva de demanda permite para esa cantidad —que queda por encima del costo marginal, algo que jamás ocurre en competencia perfecta. El resultado es una cantidad producida menor y un precio más alto que los que resultarían si el mismo mercado fuera perfectamente competitivo.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'La pérdida irrecuperable de eficiencia',
          text: 'Entre la cantidad que produce el monopolista y la cantidad mayor que se produciría en competencia perfecta, existen unidades que los consumidores valoran por encima de lo que cuesta producirlas, pero que nunca se transan. Esa brecha de transacciones mutuamente beneficiosas que no ocurren es la pérdida irrecuperable de eficiencia (deadweight loss) del monopolio.',
        },
      ],
      exercises: [
        {
          id: 'u6-l2-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '¿Por qué el ingreso marginal de un monopolista es menor que el precio al que vende?',
          options: [
            {
              id: 'a',
              text: 'Porque para vender una unidad adicional, debe bajar el precio de todas las unidades que ya vendía, no solo de la última',
            },
            { id: 'b', text: 'Porque el costo marginal siempre supera al precio en un monopolio' },
            { id: 'c', text: 'Porque el gobierno le exige fijar el ingreso marginal por debajo del precio' },
            { id: 'd', text: 'Porque la demanda que enfrenta el monopolista es horizontal' },
          ],
          correctOptionId: 'a',
          explanation:
            'Como el monopolista enfrenta toda la curva de demanda del mercado (con pendiente negativa), vender una unidad más exige bajar el precio para todas las unidades, no solo para la marginal. Por eso el ingreso adicional (IMg) es menor que el precio de esa unidad.',
        },
        {
          id: 'u6-l2-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question: 'Un monopolista vende 100 unidades a un precio de $25 cada una. Su costo medio total (CMe) es de $18 por unidad. ¿Cuál es su beneficio total?',
          unitLabel: '$',
          answer: 700,
          explanation: 'Beneficio = (P − CMe) × Q = (25 − 18) × 100 = 7 × 100 = 700.',
        },
        {
          id: 'u6-l2-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Un laboratorio farmacéutico posee la patente exclusiva de un medicamento sin sustitutos cercanos. Fija un precio muy por encima de su costo marginal de producción y produce una cantidad menor que la que se produciría si el mercado fuera perfectamente competitivo.',
          question: 'Comparado con el resultado de un mercado perfectamente competitivo para el mismo medicamento, ¿qué se puede afirmar sobre el resultado del monopolio?',
          options: [
            {
              id: 'a',
              text: 'Hay una pérdida irrecuperable de eficiencia: existen transacciones mutuamente beneficiosas entre precio y costo marginal que no se realizan porque el monopolista restringe la cantidad',
            },
            { id: 'b', text: 'El resultado es idéntico, porque ambos mercados igualan el ingreso marginal al costo marginal' },
            { id: 'c', text: 'El monopolio siempre produce más cantidad que la competencia perfecta, porque tiene más poder de mercado' },
            { id: 'd', text: 'No hay pérdida de eficiencia mientras el monopolista obtenga beneficios positivos' },
          ],
          correctOptionId: 'a',
          explanation:
            'Al restringir la cantidad para maximizar su beneficio (IMg = CMg en lugar de P = CMg), el monopolista deja sin realizar unidades que los consumidores valoran por encima de su costo de producción. Esa brecha entre la cantidad competitiva y la cantidad monopólica es la pérdida irrecuperable de eficiencia (deadweight loss).',
        },
        {
          id: 'u6-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 25,
          prompt:
            'Explica por qué la regla de maximización de beneficios de un monopolista (IMg = CMg) produce una cantidad menor y un precio mayor que en un mercado perfectamente competitivo, y qué efecto tiene esto sobre la eficiencia del mercado.',
          keyPoints: [
            {
              id: 'mr_below_price',
              label: 'Explica que el ingreso marginal del monopolista es menor que el precio',
              synonyms: [
                'ingreso marginal menor al precio',
                'imgs menor que el precio',
                'baja el precio de todas las unidades',
                'ingreso marginal cae mas rapido',
                'imgs por debajo de la demanda',
              ],
            },
            {
              id: 'mr_equals_mc_rule',
              label: 'Aplica la regla IMg = CMg como condición de maximización del monopolista',
              synonyms: [
                'imgs igual a cmg',
                'ingreso marginal igual al costo marginal',
                'regla de maximizacion del monopolio',
                'produce donde el ingreso marginal es igual al costo marginal',
              ],
            },
            {
              id: 'deadweight_loss',
              label: 'Explica que esto genera menor cantidad, mayor precio y una pérdida de eficiencia (peso muerto) frente a la competencia perfecta',
              synonyms: [
                'perdida de eficiencia',
                'peso muerto',
                'perdida irrecuperable',
                'menos cantidad mas precio',
                'ineficiencia del monopolio',
                'transacciones que no se realizan',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'El monopolista enfrenta la curva de demanda de todo el mercado, así que su ingreso marginal es menor que el precio: para vender una unidad más debe bajar el precio de todas las unidades anteriores. Maximiza su beneficio donde el ingreso marginal iguala al costo marginal, no donde el precio iguala al costo marginal. Como resultado, produce menos cantidad y cobra un precio más alto que en competencia perfecta, dejando sin realizar transacciones que habrían beneficiado a los consumidores y habrían sido rentables: eso es la pérdida irrecuperable de eficiencia del monopolio.',
          explanation:
            'La respuesta debe conectar IMg < P, la regla IMg = CMg, y la consecuencia de menor cantidad y mayor precio con la pérdida de eficiencia frente al óptimo competitivo.',
        },
      ],
    },
    {
      id: 'u6-l3',
      title: 'Oligopolio, competencia monopolística y teoría de juegos',
      summary: 'Qué pasa cuando las empresas se diferencian un poco, y qué pasa cuando son tan pocas que cada decisión depende de lo que haga la rival.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'Competencia monopolística: diferenciarse dentro de un mercado con muchos rivales',
        },
        {
          type: 'paragraph',
          text: 'La competencia monopolística combina rasgos de los dos modelos anteriores: hay muchas empresas y libre entrada y salida, como en competencia perfecta, pero cada una vende un producto ligeramente diferenciado del de sus rivales —por marca, ubicación, calidad percibida o atención al cliente—. Esa diferenciación le da a cada empresa algo de poder de mercado: enfrenta una curva de demanda con pendiente negativa (no horizontal), y por lo tanto puede subir un poco el precio sin perder a todos sus clientes.',
        },
        {
          type: 'example',
          title: 'Ejemplo: cafeterías de un mismo barrio',
          text: 'Varias cafeterías del mismo barrio compiten por los mismos clientes, pero ninguna vende exactamente el mismo café: cambia el tueste, la atención, la decoración o la ubicación. Eso le permite a cada una cobrar un precio algo distinto sin perder toda su clientela de inmediato. Sin embargo, como abrir una cafetería nueva no tiene barreras muy altas, si las cafeterías existentes ganan beneficios económicos positivos, es cuestión de tiempo para que entren nuevas y esos beneficios se erosionen hasta cero.',
        },
        {
          type: 'heading',
          text: 'Oligopolio: pocas empresas que no pueden dejar de mirarse entre sí',
        },
        {
          type: 'paragraph',
          text: 'Un oligopolio es un mercado dominado por un número reducido de empresas, lo bastante grandes como para que la decisión de una —sobre precio, cantidad o publicidad— afecte directamente los resultados de las demás. Esa interdependencia es la marca distintiva del oligopolio: a diferencia de la competencia perfecta o la competencia monopolística, donde cada empresa decide sin preocuparse por la reacción puntual de un rival específico, en el oligopolio cada empresa tiene que anticipar cómo van a responder sus pocos competidores.',
        },
        {
          type: 'heading',
          text: 'El dilema del prisionero: por qué la colusión es difícil de sostener',
        },
        {
          type: 'paragraph',
          text: 'Imaginemos dos únicas empresas, A y B, que compiten vendiendo un producto similar y deciden, cada mes, si mantienen el precio alto o lo bajan. Si ambas mantienen el precio alto (colusión implícita), cada una gana $100 millones. Si una baja el precio mientras la otra lo mantiene alto, la que baja el precio le roba clientela a la otra y gana $130 millones, mientras la que mantuvo el precio alto se queda con apenas $40 millones. Si ambas bajan el precio a la vez, se neutralizan mutuamente y cada una gana solo $70 millones, menos que si hubieran cooperado. El problema es que, sea cual sea la decisión de la otra empresa, a cada una individualmente siempre le conviene bajar su propio precio: gana más bajando el precio tanto si la rival lo mantiene alto (130 en vez de 100) como si la rival también lo baja (70 en vez de 40).',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Por qué los cárteles son frágiles',
          text: 'Como bajar el precio es la mejor respuesta individual sin importar lo que haga el rival, es una estrategia dominante: ambas empresas terminan bajando el precio y ganando $70 millones cada una, un resultado peor para las dos que los $100 millones que habrían obtenido cooperando. Ese es el núcleo del dilema del prisionero aplicado a la colusión, y explica por qué los acuerdos de precios entre competidores —como los cárteles— tienden a ser inestables sin mecanismos que castiguen a quien se desvía.',
        },
      ],
      exercises: [
        {
          id: 'u6-l3-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: 'En competencia monopolística, ¿por qué el beneficio económico de las empresas tiende a cero en el largo plazo, a pesar de que cada una tiene cierto poder de mercado?',
          options: [
            {
              id: 'a',
              text: 'Porque la libre entrada permite que nuevas empresas con productos similares ingresen al mercado mientras existan beneficios positivos, hasta eliminarlos',
            },
            { id: 'b', text: 'Porque el gobierno regula los precios de estas empresas' },
            { id: 'c', text: 'Porque todas las empresas venden exactamente el mismo producto' },
            { id: 'd', text: 'Porque el ingreso marginal siempre es igual al precio en este tipo de mercado' },
          ],
          correctOptionId: 'a',
          explanation:
            'La competencia monopolística comparte con la competencia perfecta la libre entrada y salida: aunque cada empresa diferencia su producto y por eso enfrenta una curva de demanda con pendiente negativa, la entrada de nuevos competidores erosiona el beneficio económico hasta llevarlo a cero en el largo plazo.',
        },
        {
          id: 'u6-l3-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Dos empresas rivales, A y B, compiten en precio. Si ambas mantienen el precio alto, cada una gana $100 millones. Si A mantiene el precio alto mientras B lo baja, A gana solo $40 millones. ¿Cuánto deja de ganar la empresa A en ese escenario, comparado con el caso en que ambas mantienen el precio alto?',
          unitLabel: '$ millones',
          answer: 60,
          explanation: 'La diferencia es $100 millones (ambas mantienen el precio alto) menos $40 millones (A mantiene el precio alto y B lo baja) = $60 millones menos para A.',
        },
        {
          id: 'u6-l3-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Dos únicas aerolíneas cubren la ruta Santiago–Lima. Ambas ganarían más si mantuvieran las tarifas altas de forma coordinada, pero ninguna puede firmar un contrato que obligue a la otra a cumplir el acuerdo, y cada una decide su tarifa del mes sabiendo que la otra podría bajar la suya en cualquier momento.',
          question: 'Usando la lógica del dilema del prisionero, ¿qué es lo más probable que ocurra con las tarifas de estas dos aerolíneas, incluso si a ambas les convendría mantenerlas altas?',
          options: [
            {
              id: 'a',
              text: 'Cada aerolínea tiene un incentivo individual a bajar su tarifa para robarle pasajeros a la otra, así que es probable que ambas terminen bajando el precio, aunque las dos ganarían más manteniéndolo alto',
            },
            { id: 'b', text: 'Ambas mantendrán la tarifa alta de forma automática, porque coludirse siempre es la estrategia dominante' },
            { id: 'c', text: 'Una de las dos aerolíneas debe salir del mercado, porque el oligopolio no permite que sobrevivan dos empresas' },
            { id: 'd', text: 'El resultado es idéntico al de un mercado perfectamente competitivo, porque solo hay dos empresas' },
          ],
          correctOptionId: 'a',
          explanation:
            'En el dilema del prisionero aplicado a la fijación de precios, bajar el precio es la mejor respuesta individual sin importar lo que haga el rival: si el rival mantiene el precio alto, bajar el propio precio da un beneficio aún mayor; si el rival ya bajó el precio, no bajar el propio precio deja a la empresa en la peor posición. Por eso, aun cuando la colusión (precio alto para ambas) sería mejor para las dos, cada una tiene un incentivo individual a desviarse.',
        },
        {
          id: 'u6-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 25,
          prompt:
            'Explica, usando el dilema del prisionero, por qué es difícil para dos empresas de un oligopolio sostener un acuerdo de precios altos aunque ambas ganarían más cooperando.',
          keyPoints: [
            {
              id: 'interdependence',
              label: 'Reconoce que en el oligopolio las decisiones de una empresa dependen de lo que haga la otra',
              synonyms: [
                'pocas empresas',
                'decisiones interdependientes',
                'depende de lo que haga el rival',
                'duopolio',
                'interdependencia entre empresas',
              ],
            },
            {
              id: 'individual_incentive_to_cheat',
              label: 'Explica que cada empresa tiene un incentivo individual a bajar el precio (desviarse) sin importar lo que haga la otra',
              synonyms: [
                'incentivo a bajar el precio',
                'conviene desviarse',
                'hacer trampa',
                'bajar el precio individualmente',
                'estrategia dominante bajar precio',
                'tentacion a desviarse del acuerdo',
              ],
            },
            {
              id: 'worse_joint_outcome',
              label: 'Concluye que el resultado de ambas bajando el precio es peor para las dos que si mantuvieran el precio alto (el dilema)',
              synonyms: [
                'peor para ambas',
                'resultado conjunto peor',
                'ambas pierden por desviarse',
                'la colusion se rompe',
                'dilema del prisionero',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'En un oligopolio, cada empresa sabe que su ganancia depende de la decisión de su rival, no solo de la propia. Aunque a ambas les convendría mantener el precio alto y repartirse un beneficio mayor, cada una tiene un incentivo individual a bajar su precio: si el rival mantiene el precio alto, bajar el propio precio le permite quedarse con más clientes y ganar más; y si el rival ya bajó el precio, conviene bajarlo también para no quedar en la peor posición. Como las dos razonan igual, ambas terminan bajando el precio y ganando menos que si hubieran cooperado: ese es el dilema del prisionero aplicado a la colusión.',
          explanation:
            'Se espera que la respuesta identifique la interdependencia entre las empresas, el incentivo individual a desviarse del acuerdo (bajar el precio) sin importar la acción del rival, y la conclusión de que el resultado no cooperativo es peor para ambas que la colusión.',
        },
      ],
    },
  ],
};
