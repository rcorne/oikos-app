import type { Unit } from '@/content/types';

export const unit09: Unit = {
  id: 'u9',
  index: 9,
  subject: 'macroeconomia',
  title: 'Medición de la macroeconomía',
  subtitle: 'PIB, inflación y desempleo: los tres números que resumen una economía',
  description:
    'Antes de explicar por qué crecen o se contraen las economías, hay que saber medirlas. Esta unidad cubre las tres estadísticas fundamentales de la macroeconomía: el PIB, el IPC y la tasa de desempleo.',
  icon: 'stats-chart-outline',
  color: '#15586E',
  source: 'ambos-macro',
  lessons: [
    {
      id: 'u9-l1',
      title: 'El PIB: cómo medir el tamaño de una economía',
      summary: 'Qué cuenta y qué no cuenta como producción, y por qué distinguimos el PIB nominal del real.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'El producto interno bruto',
        },
        {
          type: 'paragraph',
          text: 'El PIB (producto interno bruto) es el valor de mercado de todos los bienes y servicios finales producidos dentro de un país durante un período determinado. Cada palabra de esa definición importa: "valor de mercado" permite sumar peras con computadores usando sus precios; "finales" evita contar dos veces (el trigo que un panadero compra para hacer pan no se suma aparte, porque su valor ya queda incorporado en el precio del pan); y "dentro de un país" es lo que distingue al PIB de otras medidas como el ingreso nacional.',
        },
        {
          type: 'formula',
          label: 'La identidad del gasto',
          text: 'PIB = C + I + G + XN',
        },
        {
          type: 'paragraph',
          text: 'Esta identidad descompone el PIB en cuatro componentes del gasto: consumo (C) de los hogares, inversión (I) de las empresas (incluida la construcción de viviendas y la variación de inventarios), gasto de gobierno (G) en bienes y servicios, y exportaciones netas (XN), es decir, exportaciones menos importaciones.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Lo que el PIB no cuenta',
          text: 'Las transacciones puramente financieras (comprar acciones, recibir una pensión), los bienes usados (la reventa de un auto de segunda mano) y el trabajo no remunerado (cuidar a un familiar) no se contabilizan directamente en el PIB, aunque generen bienestar real.',
        },
        {
          type: 'heading',
          text: 'PIB nominal vs. PIB real',
        },
        {
          type: 'paragraph',
          text: 'El PIB nominal valora la producción a los precios vigentes en cada año, por lo que puede subir solo porque suben los precios, sin que se produzca ni un bien más. El PIB real, en cambio, valora la producción de distintos años usando los precios de un mismo año base, aislando así el crecimiento genuino de la producción del efecto de la inflación.',
        },
        {
          type: 'example',
          title: 'Ejemplo: separando precio de cantidad',
          text: 'En 2020 (año base), el kilo de manzanas costaba $500 y el kilo de naranjas $300. En 2021 se produjeron 120 kilos de manzanas y 90 kilos de naranjas. El PIB real de 2021, medido en precios de 2020, es 120 × $500 + 90 × $300 = $60.000 + $27.000 = $87.000. Si en 2021 el kilo de manzanas hubiera costado $600, el PIB nominal de 2021 sería mayor a $87.000 aunque se hubiera producido exactamente la misma cantidad de fruta: esa diferencia es pura inflación, no crecimiento real.',
        },
      ],
      exercises: [
        {
          id: 'u9-l1-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '¿Cuál de las siguientes transacciones SÍ se incluye directamente en el cálculo del PIB de este año?',
          options: [
            { id: 'a', text: 'Una fábrica de muebles vende un clóset nuevo a una familia' },
            { id: 'b', text: 'Una persona vende su auto de 5 años a un vecino' },
            { id: 'c', text: 'Un abuelo cuida gratis a sus nietos todas las tardes' },
            { id: 'd', text: 'Un inversionista compra acciones de una empresa en la bolsa' },
          ],
          correctOptionId: 'a',
          explanation:
            'El clóset es un bien final producido este año, así que entra directo al PIB. El auto usado ya se contó el año en que se fabricó; el cuidado no remunerado no pasa por el mercado; y comprar acciones es una transacción financiera, no producción de bienes o servicios.',
        },
        {
          id: 'u9-l1-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Usando los precios del año base 2020 (manzanas $500 el kilo, naranjas $300 el kilo) y las cantidades producidas en 2021 (120 kilos de manzanas, 90 kilos de naranjas), ¿cuál es el PIB real de 2021, en pesos?',
          unitLabel: '$',
          answer: 87000,
          hint: 'Multiplica cada cantidad de 2021 por su precio del año base y suma.',
          explanation: 'PIB real 2021 = 120 × $500 + 90 × $300 = $60.000 + $27.000 = $87.000.',
        },
        {
          id: 'u9-l1-e3',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Una carpintería compra $200.000 en madera durante el año y con ella fabrica y vende muebles por $650.000. Un economista está calculando el PIB del país y debe decidir cómo registrar estas dos transacciones.',
          question: '¿Cómo deben registrarse correctamente estas transacciones en el PIB?',
          options: [
            {
              id: 'a',
              text: 'Solo se suman los $650.000 de los muebles (bien final); la madera es un insumo intermedio y no se cuenta aparte',
            },
            { id: 'b', text: 'Se suman los $200.000 de la madera más los $650.000 de los muebles: $850.000 en total' },
            { id: 'c', text: 'Solo se cuenta la madera, porque es la materia prima original' },
            { id: 'd', text: 'No se cuenta ninguna, porque ambas son transacciones entre privados' },
          ],
          correctOptionId: 'a',
          explanation:
            'Contar la madera por separado sería doble conteo: su valor ya está incorporado en el precio final de los muebles ($650.000). El PIB solo suma el valor de los bienes finales.',
        },
        {
          id: 'u9-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 20,
          prompt:
            'Explica por qué el PIB solo cuenta bienes y servicios finales, y qué problema se evita al no sumar también los bienes intermedios.',
          keyPoints: [
            {
              id: 'final_goods',
              label: 'Identifica que solo se cuentan los bienes finales, no los intermedios',
              synonyms: ['bienes finales', 'bien final', 'no los intermedios', 'insumo', 'materia prima'],
            },
            {
              id: 'double_counting',
              label: 'Explica que sumar también los intermedios generaría doble conteo',
              synonyms: ['doble conteo', 'se cuenta dos veces', 'contar dos veces', 'duplicar', 'ya esta incluido'],
            },
            {
              id: 'value_included',
              label: 'Señala que el valor del insumo ya queda incorporado en el precio del bien final',
              synonyms: ['ya esta incorporado', 'incluido en el precio', 'valor agregado', 'esta dentro del precio final'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'El PIB solo cuenta bienes finales porque el valor de los bienes intermedios (como la madera que compra un mueblista) ya queda incorporado en el precio del bien final (el mueble). Si sumáramos ambos por separado, estaríamos contando el valor de la madera dos veces: una vez como madera y otra vez dentro del precio del mueble. Eso es el problema del doble conteo.',
          explanation:
            'Se espera que la respuesta identifique el concepto de bien final, explique el riesgo de doble conteo, y note que el valor de los insumos ya está incluido en el precio del producto terminado.',
        },
      ],
    },
    {
      id: 'u9-l2',
      title: 'El IPC y la inflación',
      summary: 'Cómo se construye el índice de precios al consumidor y cómo se calcula la tasa de inflación.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'El índice de precios al consumidor',
        },
        {
          type: 'paragraph',
          text: 'El IPC mide el costo de una canasta fija de bienes y servicios que compra un consumidor representativo, comparado con el costo de esa misma canasta en un año base. A diferencia del PIB, que mide producción, el IPC mide el costo de vida: cuánto cuesta mantener el mismo nivel de consumo a lo largo del tiempo.',
        },
        {
          type: 'formula',
          label: 'Tasa de inflación entre dos períodos',
          text: 'Inflación = ((IPC₂ − IPC₁) / IPC₁) × 100',
        },
        {
          type: 'example',
          title: 'Ejemplo: calculando la inflación',
          text: 'Si el IPC de un país fue 120 en 2019 y 126 en 2020, la tasa de inflación de 2020 es ((126 − 120) / 120) × 100 = 5%. Esto significa que, en promedio, la misma canasta de consumo costó un 5% más en 2020 que en 2019.',
        },
        {
          type: 'heading',
          text: 'IPC vs. deflactor del PIB',
        },
        {
          type: 'paragraph',
          text: 'El deflactor del PIB y el IPC suelen moverse juntos, pero difieren en varios detalles: el IPC usa una canasta fija (la de un consumidor típico) mientras que el deflactor usa una canasta que cambia año a año según lo que efectivamente se produjo; y el IPC incluye bienes importados que los consumidores compran, mientras que el deflactor solo incluye bienes producidos dentro del país.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Salarios reales',
          text: 'Un salario nominal que sube menos que la inflación implica una pérdida de poder adquisitivo: el salario real (el salario nominal dividido por el nivel de precios) cae aunque el número en el cheque de pago sea más alto.',
        },
      ],
      exercises: [
        {
          id: 'u9-l2-e1',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question: 'El IPC de un país fue 120 en 2019 y 126 en 2020. ¿Cuál fue la tasa de inflación de 2020, en porcentaje?',
          unitLabel: '%',
          answer: 5,
          explanation: 'Inflación = ((126 − 120) / 120) × 100 = (6 / 120) × 100 = 5%.',
        },
        {
          id: 'u9-l2-e2',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Un país que importa gran parte del petróleo que consume sufre un alza fuerte y sostenida en el precio internacional del petróleo. ¿Qué diferencia debería observarse entre el IPC y el deflactor del PIB de ese país?',
          options: [
            {
              id: 'a',
              text: 'El IPC debería subir más que el deflactor, porque el IPC incluye el precio de los bienes importados que consumen los hogares (como la bencina) y el deflactor no',
            },
            { id: 'b', text: 'El deflactor debería subir más, porque solo él incluye bienes importados' },
            { id: 'c', text: 'Ambos deberían subir exactamente lo mismo, porque miden la misma canasta' },
            { id: 'd', text: 'Ninguno de los dos se ve afectado, porque el petróleo no forma parte de ninguna canasta' },
          ],
          correctOptionId: 'a',
          explanation:
            'El IPC refleja el costo de la canasta de consumo de los hogares, que incluye bienes importados como los derivados del petróleo. El deflactor del PIB solo refleja los precios de lo que se produce dentro del país, por lo que un alza en el precio de un bien puramente importado lo afecta menos.',
        },
        {
          id: 'u9-l2-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'El salario nominal de Rocío subió de $600.000 a $630.000 entre 2022 y 2023 (un alza de 5%). En el mismo período, el IPC subió de 100 a 108.',
          question: '¿Qué le ocurrió al salario real de Rocío entre 2022 y 2023?',
          options: [
            { id: 'a', text: 'Cayó, porque los precios subieron 8% mientras su salario nominal solo subió 5%' },
            { id: 'b', text: 'Subió, porque su salario nominal aumentó en términos absolutos' },
            { id: 'c', text: 'Se mantuvo exactamente igual, porque ambos subieron' },
            { id: 'd', text: 'No es posible saber qué pasó con el salario real sin conocer su gasto total' },
          ],
          correctOptionId: 'a',
          explanation:
            'El salario real depende de cuánto puede comprar el salario nominal. Los precios subieron más (8%) que el salario nominal (5%), así que el poder adquisitivo de Rocío cayó, aunque el número en su cheque de pago sea mayor que antes.',
        },
        {
          id: 'u9-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 20,
          prompt: 'Explica qué es la inflación, cómo se calcula usando el IPC, y por qué afecta el poder adquisitivo de las personas.',
          keyPoints: [
            {
              id: 'inflation_definition',
              label: 'Define la inflación como un aumento sostenido en el nivel general de precios',
              synonyms: ['suben los precios', 'aumento de precios', 'nivel de precios', 'cuesta mas', 'sube el costo de vida'],
            },
            {
              id: 'cpi_calculation',
              label: 'Explica que se calcula comparando el IPC de dos períodos',
              synonyms: ['ipc', 'indice de precios', 'canasta', 'comparar el costo de la canasta', 'variacion porcentual'],
            },
            {
              id: 'purchasing_power',
              label: 'Relaciona la inflación con una pérdida de poder adquisitivo si los ingresos no suben igual',
              synonyms: ['poder adquisitivo', 'alcanza para menos', 'compra menos', 'salario real', 'perdida de poder de compra'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'La inflación es un aumento sostenido en el nivel general de precios de la economía. Se mide comparando el IPC —el costo de una canasta fija de bienes— entre dos períodos: la variación porcentual del IPC es la tasa de inflación. Cuando los precios suben más rápido que los ingresos de las personas, su poder adquisitivo cae: con el mismo sueldo, pueden comprar menos que antes.',
          explanation:
            'Una buena respuesta define la inflación como alza sostenida de precios, explica el cálculo a partir del IPC de dos períodos, y conecta la inflación con la pérdida de poder adquisitivo cuando los ingresos no la acompañan.',
        },
      ],
    },
    {
      id: 'u9-l3',
      title: 'El desempleo: cómo se mide y qué revela',
      summary: 'Quién cuenta como desempleado, cómo se calcula la tasa de desempleo, y sus principales causas.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'Fuerza laboral y tasa de desempleo',
        },
        {
          type: 'paragraph',
          text: 'La fuerza laboral está formada por las personas en edad de trabajar que están ocupadas o que están desempleadas —es decir, sin trabajo pero buscando activamente uno—. Quienes no tienen trabajo y no lo están buscando (por ejemplo, estudiantes de tiempo completo o personas jubiladas) quedan fuera de la fuerza laboral y no se consideran desempleados para efectos de esta medición.',
        },
        {
          type: 'formula',
          label: 'Tasa de desempleo',
          text: 'Tasa de desempleo = (Desempleados / Fuerza laboral) × 100',
        },
        {
          type: 'example',
          title: 'Ejemplo: calculando la tasa de desempleo',
          text: 'En una ciudad hay 1.900 personas ocupadas y 100 personas desempleadas (sin trabajo, buscando activamente). La fuerza laboral es 1.900 + 100 = 2.000 personas. La tasa de desempleo es (100 / 2.000) × 100 = 5%.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'El trabajador desalentado',
          text: 'Alguien que quiere trabajar pero dejó de buscar empleo porque cree que no encontrará nada sale de la fuerza laboral: deja de contar como "desempleado" en las estadísticas, aunque en la práctica siga sin trabajo. Por eso, en recesiones prolongadas, la tasa de desempleo medida a veces subestima el problema real del mercado laboral.',
        },
        {
          type: 'heading',
          text: 'Tipos de desempleo',
        },
        {
          type: 'list',
          items: [
            'Friccional: el tiempo que toma encontrar un empleo adecuado a las propias habilidades (rotación normal del mercado laboral).',
            'Estructural: desajuste entre las habilidades de los trabajadores y las que exigen los empleos disponibles.',
            'Cíclico: el que aumenta durante las recesiones y disminuye durante las expansiones económicas.',
          ],
        },
      ],
      exercises: [
        {
          id: 'u9-l3-e1',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'En una economía hay 1.900 personas ocupadas y 100 personas desempleadas (sin trabajo, buscando activamente). ¿Cuál es la tasa de desempleo, en porcentaje?',
          unitLabel: '%',
          answer: 5,
          hint: 'Primero calcula la fuerza laboral: ocupados + desempleados.',
          explanation: 'Fuerza laboral = 1.900 + 100 = 2.000. Tasa de desempleo = (100 / 2.000) × 100 = 5%.',
        },
        {
          id: 'u9-l3-e2',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Una empresa textil cierra por completo porque la producción se automatizó y los trabajadores despedidos no tienen las habilidades técnicas que exigen los empleos disponibles en la nueva economía digital. ¿Qué tipo de desempleo describe mejor esta situación?',
          options: [
            { id: 'a', text: 'Desempleo estructural: hay un desajuste entre las habilidades de los trabajadores y las que exige el mercado' },
            { id: 'b', text: 'Desempleo friccional: es solo el tiempo normal de búsqueda de un nuevo empleo' },
            { id: 'c', text: 'Desempleo cíclico: se debe a una recesión generalizada' },
            { id: 'd', text: 'No es desempleo, porque los trabajadores eligieron no capacitarse' },
          ],
          correctOptionId: 'a',
          explanation:
            'El desempleo estructural surge cuando las habilidades de los trabajadores no calzan con las que requieren los puestos disponibles, como ocurre aquí tras la automatización. No es simple rotación (friccional) ni está impulsado por una recesión (cíclico).',
        },
        {
          id: 'u9-l3-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Tras dos años sin encontrar trabajo, Ignacio deja de postular a empleos porque está convencido de que nadie lo contratará. Sigue sin trabajar, pero ya no busca activamente.',
          question: '¿Qué le ocurre a la tasa de desempleo medida cuando Ignacio deja de buscar trabajo?',
          options: [
            {
              id: 'a',
              text: 'La tasa de desempleo medida puede incluso bajar, porque Ignacio sale de la fuerza laboral y deja de contar como desempleado',
            },
            { id: 'b', text: 'La tasa de desempleo sube, porque Ignacio sigue sin trabajo' },
            { id: 'c', text: 'La tasa de desempleo no cambia, porque Ignacio nunca dejó de estar sin trabajo' },
            { id: 'd', text: 'Es imposible saber qué pasa con la tasa de desempleo en este caso' },
          ],
          correctOptionId: 'a',
          explanation:
            'Como Ignacio ya no busca trabajo activamente, sale de la fuerza laboral y deja de contarse como desempleado en la estadística oficial, aunque siga sin empleo. Este es el fenómeno del "trabajador desalentado": la tasa de desempleo medida puede subestimar el problema real.',
        },
        {
          id: 'u9-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 20,
          prompt:
            'Explica la diferencia entre estar desempleado y estar fuera de la fuerza laboral, y por qué esa distinción importa para interpretar la tasa de desempleo.',
          keyPoints: [
            {
              id: 'unemployed_definition',
              label: 'Define desempleado como quien no tiene trabajo pero busca activamente',
              synonyms: ['busca activamente', 'sin trabajo buscando', 'desempleado busca', 'postulando a trabajos'],
            },
            {
              id: 'out_of_labor_force',
              label: 'Explica que quien no busca trabajo queda fuera de la fuerza laboral, no cuenta como desempleado',
              synonyms: ['fuera de la fuerza laboral', 'no busca trabajo', 'no cuenta como desempleado', 'sale de la fuerza laboral'],
            },
            {
              id: 'measurement_implication',
              label: 'Señala que esto puede hacer que la tasa de desempleo subestime el problema real',
              synonyms: ['subestima', 'no refleja bien', 'trabajador desalentado', 'oculta el problema', 'no capta todo'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Estar desempleado significa no tener trabajo pero estar buscando uno activamente; en cambio, alguien que no tiene trabajo y tampoco lo está buscando queda fuera de la fuerza laboral y no se cuenta como desempleado en la estadística oficial. Esta distinción importa porque los "trabajadores desalentados" que dejan de buscar trabajo hacen que la tasa de desempleo medida subestime cuánta gente realmente querría trabajar y no tiene empleo.',
          explanation:
            'Se espera que la respuesta distinga claramente ambas categorías y explique la implicación práctica: la tasa de desempleo puede no capturar completamente el problema del mercado laboral.',
        },
      ],
    },
  ],
};
