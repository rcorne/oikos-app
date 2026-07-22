import type { Unit } from '@/content/types';

export const unit06: Unit = {
  id: 'u6',
  index: 6,
  subject: 'microeconomia',
  title: 'Estructuras de mercado',
  subtitle: 'De la competencia perfecta al monopolio, pasando por la estrategia',
  description:
    'Cómo cambia el comportamiento de una empresa según cuántas rivales tenga y cuánto poder sobre el precio pueda ejercer: desde el productor que solo puede aceptar el precio de mercado hasta el monopolista que fija su propio precio, pasando por la rivalidad estratégica del oligopolio.',
  icon: 'business-outline',
  color: '#2E8AA6',
  source: 'ambos',
  lessons: [
    {
      id: 'u6-l1',
      title: 'Competencia perfecta: muchas empresas, un solo precio',
      summary: 'Por qué ninguna empresa individual puede influir en el precio, y qué implica eso para su producción y sus beneficios.',
      estimatedMinutes: 14,
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
        {
          id: 'u6-l1-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una productora de miel en un mercado perfectamente competitivo puede vender cada frasco al precio de mercado de $22. Su costo marginal por frasco crece con la producción: el primer frasco cuesta $10, el segundo $14, el tercero $18, el cuarto $22 y el quinto $26. ¿Cuántos frascos debe producir para maximizar su beneficio?',
          unitLabel: 'frascos',
          answer: 4,
          hint: 'Le conviene producir cada frasco cuyo costo marginal no supere el precio, y detenerse justo donde el costo marginal alcanza el precio.',
          explanation:
            'La regla es producir hasta el punto en que P = CMg. Los frascos 1 a 3 cuestan menos que el precio ($10, $14 y $18 frente a $22), el cuarto cuesta exactamente $22 (el punto óptimo) y el quinto ya costaría $26, más que el ingreso que aporta. Por eso la cantidad que maximiza el beneficio es 4 frascos.',
        },
        {
          id: 'u6-l1-e6',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'En el largo plazo, las empresas de un mercado perfectamente competitivo obtienen un beneficio económico igual a cero. ¿Qué significa esto para sus dueños?',
          options: [
            { id: 'a', text: 'Que pierden dinero y deberían cerrar el negocio cuanto antes' },
            {
              id: 'b',
              text: 'Que cubren todos sus costos, incluido el costo de oportunidad de su tiempo y su capital, aunque no ganen más de lo que obtendrían en su mejor alternativa',
            },
            { id: 'c', text: 'Que sus ingresos totales son cero porque el precio cayó hasta el nivel del costo marginal' },
            { id: 'd', text: 'Que el gobierno les cobra impuestos equivalentes a todo su beneficio contable' },
          ],
          correctOptionId: 'b',
          explanation:
            'El beneficio económico descuenta los costos de oportunidad: el valor del tiempo del dueño y el rendimiento que su capital obtendría en otro uso. Un beneficio económico de cero significa que la empresa cubre exactamente todos esos costos, así que a sus dueños les va tan bien como en su mejor alternativa. En términos contables, la empresa sigue mostrando una ganancia normal; simplemente no hay un premio extra que atraiga a nuevos competidores.',
        },
        {
          id: 'u6-l1-e7',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una fábrica de tornillos opera en un mercado perfectamente competitivo y vende cada caja al precio de mercado de $35. Produce 150 cajas, con un costo total medio (CTMe) de $28 por caja. ¿Cuál es su beneficio económico total?',
          unitLabel: '$',
          answer: 1050,
          explanation: 'Beneficio = (P − CTMe) × Q = (35 − 28) × 150 = 7 × 150 = 1050.',
        },
        {
          id: 'u6-l1-e8',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'El precio de mercado de un bien sube de $20 a $26. Para una empresa precio-aceptante cuyo costo marginal crece con la producción, ¿qué le conviene hacer?',
          options: [
            {
              id: 'a',
              text: 'Aumentar su producción hasta que su costo marginal vuelva a igualar el nuevo precio de $26',
            },
            { id: 'b', text: 'Mantener la misma cantidad, porque una empresa precio-aceptante no reacciona al precio' },
            { id: 'c', text: 'Reducir su producción para no saturar el mercado y hacer caer el precio' },
            { id: 'd', text: 'Subir su propio precio por encima de $26 para aprovechar el alza' },
          ],
          correctOptionId: 'a',
          explanation:
            'La empresa produce donde P = CMg. Si el precio sube y el costo marginal es creciente, el punto en que CMg iguala al precio se alcanza a una cantidad mayor, así que le conviene expandir la producción hasta que su costo marginal alcance los $26. No puede fijar su propio precio: como precio-aceptante, toma el precio de mercado como un dato.',
        },
        {
          id: 'u6-l1-e9',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'En un puerto pesquero, decenas de botes venden un pescado prácticamente idéntico al mismo precio de mercado. Durante varios meses, ese precio se ubica por debajo del costo total medio de la mayoría de los pescadores, que acumulan pérdidas económicas.',
          question: '¿Qué predice el modelo de competencia perfecta que ocurrirá en este mercado en el largo plazo?',
          options: [
            {
              id: 'a',
              text: 'Algunos pescadores abandonan la actividad, la oferta de mercado se desplaza hacia la izquierda y el precio sube hasta que el beneficio económico de los que quedan vuelve a cero',
            },
            { id: 'b', text: 'Todos los pescadores seguirán operando con pérdidas de forma indefinida, porque en competencia perfecta nadie puede salir del mercado' },
            { id: 'c', text: 'Entrarán aún más pescadores, atraídos por los precios bajos, hasta que las pérdidas desaparezcan' },
            { id: 'd', text: 'El precio seguirá cayendo indefinidamente, porque la salida de empresas no afecta la oferta de mercado' },
          ],
          correctOptionId: 'a',
          explanation:
            'La libre salida es la contracara de la libre entrada. Ante pérdidas económicas sostenidas, algunas empresas abandonan el mercado; eso reduce la oferta total, desplazándola hacia la izquierda, y el precio sube hasta que las empresas que permanecen vuelven a obtener un beneficio económico de cero en el largo plazo.',
        },
        {
          id: 'u6-l1-e10',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'En el largo plazo, el precio de un mercado perfectamente competitivo tiende al mínimo del costo total medio de las empresas. Si ese mínimo del CTMe es de $18 por unidad, ¿a qué precio tenderá el mercado en el largo plazo?',
          unitLabel: '$',
          answer: 18,
          hint: 'En el equilibrio de largo plazo, el beneficio económico es cero, así que el precio iguala al costo total medio en su punto mínimo.',
          explanation:
            'Con libre entrada y salida, el beneficio económico converge a cero en el largo plazo, y eso ocurre cuando el precio iguala al mínimo del costo total medio. Si ese mínimo es $18, el precio de largo plazo tenderá a $18.',
        },
        {
          id: 'u6-l1-e11',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una empresa en competencia perfecta vende a $45 por unidad, produce 300 unidades y su costo total medio es de $38 por unidad. ¿Cuál es su beneficio económico total?',
          unitLabel: '$',
          answer: 2100,
          hint: 'Beneficio total = (Precio − Costo medio total) × Cantidad.',
          explanation: 'Beneficio = ($45 − $38) × 300 = $7 × 300 = $2.100.',
        },
        {
          id: 'u6-l1-e12',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: 'En competencia perfecta, ¿por qué cada empresa individual enfrenta una curva de demanda horizontal (perfectamente elástica)?',
          options: [
            {
              id: 'a',
              text: 'Porque es tan pequeña frente al mercado que puede vender toda su producción al precio vigente, sin poder influir en él',
            },
            { id: 'b', text: 'Porque el gobierno le fija el precio' },
            { id: 'c', text: 'Porque su producto es muy distinto al de sus competidores' },
            { id: 'd', text: 'Porque tiene costos marginales constantes' },
          ],
          correctOptionId: 'a',
          explanation:
            'Cada empresa competitiva es "precio-aceptante": produce una fracción tan pequeña de la oferta total del mercado que no tiene poder para influir en el precio. Puede vender cualquier cantidad que decida producir a ese precio de mercado, por eso su curva de demanda individual es una línea horizontal en ese nivel de precio.',
        },
      ],
    },
    {
      id: 'u6-l2',
      title: 'Monopolio y poder de mercado',
      summary: 'Qué significa ser el único vendedor, por qué el ingreso marginal cae más rápido que el precio, y qué costo tiene eso para la eficiencia del mercado.',
      estimatedMinutes: 14,
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
        {
          id: 'u6-l2-e5',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'Un monopolista vende actualmente 10 unidades a $40 cada una. Para vender una unidad más, debe bajar el precio de todas las unidades a $38. ¿Cuál es el ingreso marginal de esa unidad número 11?',
          unitLabel: '$',
          answer: 18,
          hint: 'Compara el ingreso total vendiendo 10 unidades con el ingreso total vendiendo 11: la diferencia es el ingreso marginal.',
          explanation:
            'Con 10 unidades a $40, el ingreso total es $400. Con 11 unidades a $38, el ingreso total es $418. El ingreso marginal de la unidad 11 es 418 − 400 = $18: mucho menor que su precio de $38, porque vender esa unidad obligó a rebajar en $2 cada una de las 10 unidades anteriores (−$20), lo que se descuenta de los $38 que aporta la unidad nueva.',
        },
        {
          id: 'u6-l2-e6',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Una empresa es la única proveedora de agua embotellada en una isla remota, sin sustitutos cercanos ni competidores a la vista. Su gerenta sabe que, si quiere vender más botellas, tendrá que bajar el precio de todas las que vende, y quiere elegir la cantidad de producción que maximice el beneficio de la empresa.',
          question: '¿Qué regla debería seguir la gerenta para elegir la cantidad de producción, y cómo se determina luego el precio?',
          options: [
            {
              id: 'a',
              text: 'Producir la cantidad donde el ingreso marginal iguala al costo marginal, y cobrar el precio más alto que la curva de demanda permite para esa cantidad',
            },
            { id: 'b', text: 'Producir la cantidad donde el precio iguala al costo marginal, como haría una empresa perfectamente competitiva' },
            { id: 'c', text: 'Producir la mayor cantidad posible, porque a más ventas siempre corresponde más beneficio' },
            { id: 'd', text: 'Producir la cantidad donde el costo medio total es mínimo, sin importar la demanda' },
          ],
          correctOptionId: 'a',
          explanation:
            'Como la empresa es un monopolio, su ingreso marginal es menor que el precio y la regla P = CMg no maximiza su beneficio. La condición correcta es IMg = CMg: elegir la cantidad donde el ingreso marginal iguala al costo marginal, y luego fijar el precio subiendo hasta lo que la curva de demanda del mercado permite para esa cantidad. Producir "lo máximo posible" reduciría el beneficio, porque las últimas unidades aportarían menos ingreso del que cuestan.',
        },
        {
          id: 'u6-l2-e7',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Un monopolista vende 80 unidades a un precio de $60 cada una. Su costo total medio (CTMe) es de $45 por unidad. ¿Cuál es su beneficio total?',
          unitLabel: '$',
          answer: 1200,
          explanation: 'Beneficio = (P − CTMe) × Q = (60 − 45) × 80 = 15 × 80 = 1200.',
        },
        {
          id: 'u6-l2-e8',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Comparado con el resultado que se obtendría si el mismo mercado fuera perfectamente competitivo, un monopolista que maximiza su beneficio tiende a...',
          options: [
            {
              id: 'a',
              text: 'Producir una cantidad menor y cobrar un precio más alto, con un precio que queda por encima del costo marginal',
            },
            { id: 'b', text: 'Producir una cantidad mayor y cobrar un precio más bajo, gracias a su poder de mercado' },
            { id: 'c', text: 'Producir la misma cantidad y cobrar el mismo precio, porque toda empresa iguala ingreso marginal y costo marginal' },
            { id: 'd', text: 'Cobrar un precio exactamente igual al costo marginal, igual que en competencia perfecta' },
          ],
          correctOptionId: 'a',
          explanation:
            'Como el monopolista maximiza donde IMg = CMg y su ingreso marginal es menor que el precio, termina en una cantidad menor y un precio más alto que los del óptimo competitivo (donde sería P = CMg). Además, su precio queda por encima del costo marginal, algo que no ocurre en competencia perfecta; esa brecha es la raíz de la pérdida de eficiencia del monopolio.',
        },
        {
          id: 'u6-l2-e9',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Una empresa de televisión por cable es la única proveedora en una ciudad y ya produce la cantidad en que su ingreso marginal iguala a su costo marginal. Un consultor le propone ampliar la producción un 30% "para capturar más mercado", argumentando que más suscriptores siempre significan más beneficio.',
          question: 'Según la teoría del monopolio, ¿qué debería responder la empresa a esta propuesta?',
          options: [
            {
              id: 'a',
              text: 'No conviene ampliar: sobre esas unidades adicionales el ingreso marginal sería menor que el costo marginal, así que cada nueva unidad restaría beneficio en lugar de sumarlo',
            },
            { id: 'b', text: 'Conviene ampliar siempre, porque en un monopolio más cantidad vendida se traduce automáticamente en más beneficio' },
            { id: 'c', text: 'Conviene ampliar hasta que el precio iguale al costo marginal, como haría una empresa perfectamente competitiva' },
            { id: 'd', text: 'Conviene ampliar solo si el ingreso total deja de crecer, sin mirar el costo de las unidades nuevas' },
          ],
          correctOptionId: 'a',
          explanation:
            'La empresa ya está en su óptimo (IMg = CMg). Producir más la lleva a una zona donde el ingreso marginal de cada unidad adicional cae por debajo de su costo marginal, porque para vender esas unidades tendría que bajar el precio de todas. Vender más no es lo mismo que ganar más: por encima del punto IMg = CMg, cada unidad extra reduce el beneficio.',
        },
        {
          id: 'u6-l2-e10',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          chart: {
            xLabel: 'Cantidad (Q)',
            yLabel: 'Precio ($)',
            xMax: 105,
            yMax: 110,
            lines: [
              { points: [{ x: 0, y: 100 }, { x: 100, y: 0 }], color: 'brand', label: 'D' },
              { points: [{ x: 0, y: 100 }, { x: 50, y: 0 }], color: 'brand', dashed: true, label: 'IMg' },
              { points: [{ x: 0, y: 20 }, { x: 90, y: 20 }], color: 'accent', label: 'CMg' },
            ],
            markers: [
              { x: 40, y: 20, label: 'IMg=CMg' },
              { x: 40, y: 60, label: 'Pm', guides: true },
            ],
            caption: 'Monopolista: demanda (D), ingreso marginal (IMg) y costo marginal (CMg).',
          },
          question:
            'El monopolista produce donde IMg = CMg, en Q = 40. Leyendo el gráfico, ¿a qué precio (sobre la curva de demanda) vende esas unidades?',
          unitLabel: '$',
          answer: 60,
          hint: 'El precio de un monopolio se lee sobre la curva de demanda, en la cantidad que decide producir — no sobre la curva de IMg ni de CMg.',
          explanation:
            'El monopolista elige Q = 40 porque ahí IMg = CMg = 20. Pero el precio que cobra no es 20: se lee sobre la curva de DEMANDA en esa cantidad, D(40) = 100 − 40 = 60. Por eso el precio de monopolio (60) siempre queda por encima del costo marginal (20).',
        },
        {
          id: 'u6-l2-e11',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          chart: {
            xLabel: 'Cantidad (Q)',
            yLabel: 'Precio ($)',
            xMax: 105,
            yMax: 110,
            lines: [
              { points: [{ x: 0, y: 100 }, { x: 100, y: 0 }], color: 'brand', label: 'D' },
              { points: [{ x: 0, y: 100 }, { x: 50, y: 0 }], color: 'brand', dashed: true, label: 'IMg' },
              { points: [{ x: 0, y: 20 }, { x: 90, y: 20 }], color: 'accent', label: 'CMg' },
            ],
            markers: [
              { x: 40, y: 60, label: 'Monopolio' },
              { x: 80, y: 20, label: 'Competencia' },
            ],
            caption: 'Comparación entre el resultado del monopolio y el de competencia perfecta en el mismo mercado.',
          },
          question: 'Comparando los dos puntos marcados en el gráfico, ¿qué diferencia al resultado del monopolio del de competencia perfecta en este mismo mercado?',
          options: [
            { id: 'a', text: 'El monopolio produce menos (40 frente a 80) y cobra un precio más alto (60 frente a 20)' },
            { id: 'b', text: 'El monopolio produce más y cobra menos que la competencia perfecta' },
            { id: 'c', text: 'Ambos producen la misma cantidad, pero a precios distintos' },
            { id: 'd', text: 'Ambos cobran el mismo precio, pero el monopolio produce menos' },
          ],
          correctOptionId: 'a',
          explanation:
            'En competencia perfecta el equilibrio está donde P = CMg (Q = 80, P = 20). El monopolista, en cambio, restringe la producción a Q = 40 —donde IMg = CMg— y cobra un precio mayor, P = 60, leído sobre la demanda. Producir menos y cobrar más es la firma característica del poder de mercado de un monopolio.',
        },
        {
          id: 'u6-l2-e12',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          chart: {
            xLabel: 'Cantidad (Q)',
            yLabel: 'Precio ($)',
            xMax: 105,
            yMax: 110,
            lines: [
              { points: [{ x: 0, y: 100 }, { x: 100, y: 0 }], color: 'brand', label: 'D' },
              { points: [{ x: 0, y: 20 }, { x: 90, y: 20 }], color: 'accent', label: 'CMg' },
            ],
            regions: [
              {
                points: [
                  { x: 40, y: 60 },
                  { x: 40, y: 20 },
                  { x: 80, y: 20 },
                ],
                color: 'danger',
                label: 'PI',
              },
            ],
            caption: 'Región sombreada entre la cantidad de monopolio (40) y la de competencia (80).',
          },
          scenario:
            'Un estudiante señala el triángulo sombreado del gráfico —entre Qm = 40 y Qc = 80— y pregunta qué mide exactamente esa área.',
          question: '¿Qué representa la región sombreada (PI) del gráfico?',
          options: [
            { id: 'a', text: 'La pérdida irrecuperable de eficiencia: el excedente total que se deja de generar porque el monopolio produce menos que el óptimo social' },
            { id: 'b', text: 'El beneficio extra que obtiene el monopolista por cobrar más caro' },
            { id: 'c', text: 'El costo fijo del monopolista' },
            { id: 'd', text: 'El excedente del consumidor que conserva el monopolio' },
          ],
          correctOptionId: 'a',
          explanation:
            'Entre Qm = 40 y Qc = 80 hay unidades cuyo valor para los consumidores (leído en la curva de demanda) supera su costo marginal de producción, pero el monopolio no las produce porque no le conviene bajar el precio a todos los compradores para vender esas unidades extra. Ese excedente que nunca se genera —ni para el consumidor ni para el productor— es la pérdida irrecuperable de eficiencia del monopolio.',
        },
      ],
    },
    {
      id: 'u6-l3',
      title: 'Oligopolio, competencia monopolística y teoría de juegos',
      summary: 'Qué pasa cuando las empresas se diferencian un poco, y qué pasa cuando son tan pocas que cada decisión depende de lo que haga la rival.',
      estimatedMinutes: 14,
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
        {
          id: 'u6-l3-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Dos cadenas de supermercados, A y B, deciden si mantienen sus precios altos o los bajan. Si ambas los mantienen altos, cada una gana $80 millones. Si ambas los bajan, cada una gana $50 millones. Si solo una los baja, la que baja gana $120 millones y la que los mantuvo altos gana apenas $30 millones. Supón que B ya decidió bajar sus precios. ¿Cuántos millones más gana A si también baja sus precios, en lugar de mantenerlos altos?',
          unitLabel: '$ millones',
          answer: 20,
          hint: 'Compara los dos resultados posibles para A dado que B ya bajó sus precios: bajar también, o mantenerlos altos.',
          explanation:
            'Si B baja sus precios, A gana $50 millones bajando también los suyos (ambas bajan) y solo $30 millones si los mantiene altos (queda como la única con precio alto). La diferencia es 50 − 30 = $20 millones a favor de bajar. Como bajar el precio también le conviene a A cuando B mantiene el precio alto (120 frente a 80), bajar es su estrategia dominante: el corazón del dilema del prisionero.',
        },
        {
          id: 'u6-l3-e6',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            '¿Cuál es el rasgo que distingue al oligopolio de las demás estructuras de mercado, como la competencia perfecta o la competencia monopolística?',
          options: [
            { id: 'a', text: 'Que existe un único vendedor de un bien sin sustitutos cercanos' },
            {
              id: 'b',
              text: 'Que las empresas son tan pocas que cada una debe anticipar cómo reaccionarán sus rivales antes de decidir su precio, cantidad o publicidad',
            },
            { id: 'c', text: 'Que todas las empresas venden productos ligeramente diferenciados entre sí' },
            { id: 'd', text: 'Que hay tantas empresas que ninguna puede influir en el precio de mercado' },
          ],
          correctOptionId: 'b',
          explanation:
            'La marca distintiva del oligopolio es la interdependencia estratégica: como los competidores son pocos y grandes, la decisión de cada empresa afecta directamente los resultados de las demás, y por eso cada una debe anticipar la reacción de sus rivales. Un único vendedor describe al monopolio, los productos diferenciados con muchas empresas a la competencia monopolística, y la incapacidad individual de mover el precio a la competencia perfecta.',
        },
        {
          id: 'u6-l3-e7',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Dos empresas rivales, C y D, deciden cada mes si lanzan una campaña de publicidad agresiva. Si ninguna la lanza, cada una gana $90 millones. Si ambas la lanzan, se neutralizan y suben sus costos, así que cada una gana $60 millones. Si solo una la lanza, esa gana $110 millones y la otra $40 millones. Si D decide no hacer publicidad agresiva, ¿cuántos millones más gana C lanzando la campaña en lugar de no lanzarla?',
          unitLabel: '$ millones',
          answer: 20,
          hint: 'Fija la decisión de D (no hacer publicidad) y compara los dos resultados posibles para C: lanzar la campaña o no lanzarla.',
          explanation:
            'Si D no hace publicidad, C gana $110 millones lanzando la campaña (es la única que hace publicidad) frente a $90 millones si no la lanza (ninguna hace publicidad). La diferencia es 110 − 90 = $20 millones a favor de lanzar. Como lanzar la campaña también le conviene a C cuando D sí la lanza (60 frente a 40), hacer publicidad es una estrategia dominante, y ambas terminan gastando en ella y ganando $60 millones en vez de los $90 millones que obtendrían si ninguna lo hiciera: un dilema del prisionero.',
        },
        {
          id: 'u6-l3-e8',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '¿Cuál de las siguientes combinaciones de rasgos describe a un mercado de competencia monopolística?',
          options: [
            {
              id: 'a',
              text: 'Muchas empresas y libre entrada y salida, pero cada una vende un producto ligeramente diferenciado y por eso enfrenta una demanda con pendiente negativa',
            },
            { id: 'b', text: 'Un único vendedor de un bien sin sustitutos cercanos, protegido por barreras de entrada' },
            { id: 'c', text: 'Unas pocas empresas grandes cuyas decisiones son interdependientes entre sí' },
            { id: 'd', text: 'Muchas empresas que venden un producto homogéneo y son todas precio-aceptantes' },
          ],
          correctOptionId: 'a',
          explanation:
            'La competencia monopolística combina la multiplicidad de empresas y la libre entrada y salida de la competencia perfecta con la diferenciación de producto, que le da a cada empresa algo de poder de mercado y una curva de demanda con pendiente negativa. La opción del único vendedor describe al monopolio; la de pocas empresas interdependientes, al oligopolio; y la del producto homogéneo con empresas precio-aceptantes, a la competencia perfecta.',
        },
        {
          id: 'u6-l3-e9',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Una peluquería de barrio cobra por cada corte un precio bastante mayor que el costo de atender a un cliente más (su costo marginal). Aun así, con los años abren varias peluquerías nuevas en la zona y, en el largo plazo, el negocio termina obteniendo un beneficio económico de cero.',
          question: '¿Cómo se explica que el precio quede por encima del costo marginal y, a la vez, el beneficio económico sea cero en el largo plazo?',
          options: [
            {
              id: 'a',
              text: 'La diferenciación le da a la peluquería algo de poder de mercado, así que fija un precio por encima del costo marginal; pero la libre entrada de nuevas peluquerías erosiona la demanda de cada una hasta que el precio solo alcanza a cubrir el costo total medio, dejando el beneficio económico en cero',
            },
            { id: 'b', text: 'Es imposible: si el precio supera al costo marginal, el beneficio económico siempre tiene que ser positivo' },
            { id: 'c', text: 'Ocurre porque la peluquería es un monopolio y no enfrenta ninguna competencia' },
            { id: 'd', text: 'Ocurre porque el precio termina siendo igual al costo marginal, como en competencia perfecta' },
          ],
          correctOptionId: 'a',
          explanation:
            'En competencia monopolística, la diferenciación permite cobrar un precio superior al costo marginal (hay poder de mercado). Pero la libre entrada hace que, mientras haya beneficios positivos, entren nuevos rivales que le restan clientela a cada empresa, hasta que el precio apenas cubre el costo total medio. En ese equilibrio de largo plazo coexisten P > CMg y beneficio económico de cero, con empresas que operan por debajo de su escala de mínimo costo (capacidad ociosa).',
        },
        {
          id: 'u6-l3-e10',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Dos heladerías rivales compiten en precio. Si ambas mantienen el precio alto, cada una gana $60 millones al año. Si una baja el precio mientras la otra no, la que baja gana $90 millones y la otra solo $20 millones. Si ambas bajan, cada una gana $40 millones. ¿Cuánto pierde una heladería si mantiene el precio alto mientras la rival lo baja, comparado con el escenario en que ambas lo mantienen alto?',
          unitLabel: '$ millones',
          answer: 40,
          hint: 'Compara la ganancia de "ambas altas" con la ganancia de quedarse arriba mientras la otra baja.',
          explanation:
            'Si ambas mantienen el precio alto, gana $60 millones. Si se queda con el precio alto mientras la rival lo baja, gana solo $20 millones. La diferencia es $60M − $20M = $40 millones de pérdida: por eso, aunque colusionar (ambas arriba) sería mejor para las dos, cada heladería tiene el incentivo individual de bajar el precio primero — el corazón del dilema del prisionero.',
        },
      ],
    },
  ],
};
