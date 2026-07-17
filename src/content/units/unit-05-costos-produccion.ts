import type { Unit } from '@/content/types';

export const unit05: Unit = {
  id: 'u5',
  index: 5,
  title: 'Costos de producción',
  subtitle: 'Qué cuesta producir, y cómo cambia según cuánto produces',
  description:
    'Cómo las empresas miden lo que les cuesta fabricar cada unidad adicional, y por qué ese costo por unidad cambia según la escala en la que operan, desde un pequeño taller hasta una fábrica que multiplica su producción.',
  icon: 'construct-outline',
  color: '#0B3B4D',
  source: 'mankiw',
  lessons: [
    {
      id: 'u5-l1',
      title: 'Costos fijos, variables y totales',
      summary: 'Qué gastos se mantienen sin importar cuánto produces, cuáles cambian, y cómo se suman.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: 'Costo fijo y costo variable',
        },
        {
          type: 'paragraph',
          text: 'Cuando una empresa recién está operando, hay decisiones que no puede cambiar de un día para otro: el tamaño de su local, la maquinaria que ya instaló, los contratos que firmó. Mientras esas decisiones sigan fijas —lo que llamamos el corto plazo— conviene dividir los costos de la empresa en dos grupos, según si dependen o no de cuánto produce.',
        },
        {
          type: 'paragraph',
          text: 'El costo fijo (CF) es la parte del gasto que la empresa debe cubrir sin importar cuánto produzca, incluso si un día decide no producir nada. Nace de compromisos que ya están tomados y que no se pueden deshacer de inmediato.',
        },
        {
          type: 'list',
          items: [
            'El arriendo mensual del local o la bodega.',
            'El sueldo fijo de la administración, aunque ese mes se venda poco.',
            'El seguro contra incendios o robos.',
            'La cuota de un crédito pedido para comprar maquinaria.',
          ],
        },
        {
          type: 'paragraph',
          text: 'El costo variable (CV), en cambio, sí depende de la cantidad producida: sube cuando se produce más y baja —incluso hasta cero— cuando se produce menos. Aquí entran los insumos que se consumen unidad por unidad, como la materia prima, la energía usada en la línea de producción, el pago por hora a trabajadores contratados según la demanda, o el empaque de cada producto.',
        },
        {
          type: 'formula',
          label: 'Costo total',
          text: 'CT = CF + CV',
        },
        {
          type: 'example',
          title: 'Ejemplo: un puesto de empanadas',
          text: 'Un puesto de empanadas paga $10.000 diarios de arriendo del local, sin importar cuántas empanadas venda ese día: ese es su costo fijo. El costo variable —la masa, el relleno y el gas— crece con la cantidad producida: 10 empanadas cuestan $8.000 en insumos, 20 cuestan $15.000, 30 cuestan $24.000, 40 cuestan $36.000 y 50 cuestan $50.000. Sumando el arriendo fijo a cada uno de esos costos variables, el costo total del día pasa de $18.000 (con 10 empanadas) a $60.000 (con 50 empanadas).',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Un caso especial: producir cero',
          text: 'Cuando la cantidad producida es cero, el costo variable también es cero, así que el costo total se reduce exactamente al costo fijo. Ese es el costo de simplemente mantener el negocio abierto, aunque no venda nada ese día.',
        },
      ],
      exercises: [
        {
          id: 'u5-l1-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '¿Cuál de los siguientes es un ejemplo de costo fijo para una fábrica de zapatos?',
          options: [
            { id: 'a', text: 'El cuero usado para fabricar cada par de zapatos' },
            { id: 'b', text: 'El arriendo mensual de la planta, que se paga aunque no se fabrique ningún zapato' },
            { id: 'c', text: 'El pago por hora a los operarios contratados solo cuando hay pedidos grandes' },
            { id: 'd', text: 'El pegamento y los cordones de cada par' },
          ],
          correctOptionId: 'b',
          explanation:
            'El arriendo se paga todos los meses independientemente de cuántos zapatos se fabriquen, por lo que es un costo fijo. El cuero, el pegamento y la mano de obra contratada por pedido cambian según la cantidad producida, así que son costos variables.',
        },
        {
          id: 'u5-l1-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Un taller de reparación de bicicletas paga $150.000 al mes de arriendo fijo, sin importar cuántas bicicletas repare. Si el costo variable de repuestos y mano de obra para reparar 8 bicicletas en el mes es $90.000, ¿cuál es el costo total de operar el taller ese mes?',
          unitLabel: '$',
          answer: 240000,
          explanation: 'CT = CF + CV = 150.000 + 90.000 = 240.000.',
        },
        {
          id: 'u5-l1-e3',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Una fábrica de muebles paga $500.000 mensuales de arriendo por su bodega, cifra que no cambia sin importar cuántas mesas fabrique. Además, por cada mesa que produce, compra madera y herrajes.',
          question: 'Si la fábrica decide producir el doble de mesas este mes que el mes pasado, ¿qué debería pasar con sus costos?',
          options: [
            { id: 'a', text: 'El costo fijo se mantiene igual y el costo variable aumenta' },
            { id: 'b', text: 'Tanto el costo fijo como el costo variable se mantienen exactamente iguales' },
            { id: 'c', text: 'El costo fijo también se duplica, porque toda la fábrica produce más' },
            { id: 'd', text: 'El costo variable se mantiene igual y solo sube el costo fijo' },
          ],
          correctOptionId: 'a',
          explanation:
            'El arriendo de la bodega es un compromiso fijo que no depende del nivel de producción, así que se mantiene igual. La madera y los herrajes, en cambio, se compran en proporción a la cantidad de mesas fabricadas, por lo que el costo variable sube.',
        },
        {
          id: 'u5-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 20,
          prompt:
            'Explica la diferencia entre un costo fijo y un costo variable, y da un ejemplo de cada uno usando un negocio que tú elijas.',
          keyPoints: [
            {
              id: 'fixed_definition',
              label: 'Explica que el costo fijo no cambia con la cantidad producida, ni siquiera si la producción es cero',
              synonyms: [
                'costo fijo',
                'no cambia con la produccion',
                'aunque no produzca nada',
                'independiente de cuanto produce',
                'siempre el mismo monto',
                'se paga igual',
              ],
            },
            {
              id: 'variable_definition',
              label: 'Explica que el costo variable cambia según cuánto se produce',
              synonyms: [
                'costo variable',
                'depende de la produccion',
                'cambia con la cantidad',
                'mas insumos si produce mas',
                'sube si produce mas',
              ],
            },
            {
              id: 'concrete_example',
              label: 'Da un ejemplo concreto de un negocio con al menos un costo fijo y un costo variable',
              synonyms: ['arriendo', 'materia prima', 'sueldo fijo', 'pago por unidad', 'ejemplo de un negocio'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'El costo fijo es el que una empresa paga sin importar cuánto produzca, como el arriendo de un local, que se paga igual aunque un mes se venda poco. El costo variable, en cambio, depende de la cantidad producida: en una panadería, por ejemplo, la harina y el gas del horno aumentan si se hornea más pan y bajan si se hornea menos.',
          explanation:
            'Se espera que la respuesta distinga claramente que el costo fijo no depende del nivel de producción mientras que el variable sí, y que ilustre ambos con un ejemplo concreto y coherente.',
        },
        {
          id: 'u5-l1-e5',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'Una pastelería registró un costo total de $320.000 en el mes. Si su costo fijo —el arriendo del local— es de $120.000 mensuales, ¿cuál fue su costo variable ese mes?',
          unitLabel: '$',
          answer: 200000,
          hint: 'Si CT = CF + CV, entonces CV = CT − CF.',
          explanation: 'Despejando de CT = CF + CV: CV = CT − CF = 320.000 − 120.000 = 200.000.',
        },
        {
          id: 'u5-l1-e6',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Un food truck de sándwiches paga $80.000 mensuales por el permiso municipal para estacionar y $20.000 mensuales por el seguro del vehículo, montos que debe cubrir aunque no abra ni un solo día. El pan, los ingredientes y el gas de la plancha, en cambio, solo se gastan cuando cocina. En febrero, el dueño decide cerrar todo el mes por vacaciones y no produce nada.',
          question: '¿Cuál será el costo total del food truck durante febrero?',
          options: [
            { id: 'a', text: '$100.000, porque al no producir nada el costo total queda igual al costo fijo' },
            { id: 'b', text: '$0, porque si no produce nada no tiene ningún costo' },
            { id: 'c', text: '$80.000, porque el seguro deja de pagarse cuando el negocio no opera' },
            { id: 'd', text: 'No se puede calcular sin saber cuántos sándwiches vendía antes' },
          ],
          correctOptionId: 'a',
          explanation:
            'Con producción cero, el costo variable (pan, ingredientes, gas) es cero, pero los compromisos fijos siguen vigentes: CT = CF + CV = (80.000 + 20.000) + 0 = 100.000. Ese es el costo de mantener el negocio, aunque no opere.',
        },
        {
          id: 'u5-l1-e7',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'Una panadería paga $200.000 mensuales de arriendo, sin importar cuánto hornee. En un mes en que produce 500 panes, el costo variable de harina, levadura y gas suma $350.000. ¿Cuál es su costo total ese mes?',
          unitLabel: '$',
          answer: 550000,
          explanation: 'CT = CF + CV = 200.000 + 350.000 = 550.000.',
        },
        {
          id: 'u5-l1-e8',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question: 'En un servicio de reparto a domicilio, ¿cuál de los siguientes es un costo variable?',
          options: [
            { id: 'a', text: 'El seguro anual del vehículo, que se paga igual haya o no repartos' },
            { id: 'b', text: 'La bencina que consume el vehículo según los kilómetros recorridos en cada reparto' },
            { id: 'c', text: 'El arriendo mensual de la bodega donde se guardan los paquetes' },
            { id: 'd', text: 'El sueldo fijo del gerente de operaciones' },
          ],
          correctOptionId: 'b',
          explanation:
            'La bencina depende directamente de cuántos repartos y kilómetros se hagan: sube cuando hay más entregas y baja cuando hay menos, así que es un costo variable. El seguro, el arriendo y el sueldo fijo se pagan igual sin importar el nivel de actividad, por lo que son costos fijos.',
        },
        {
          id: 'u5-l1-e9',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Una fábrica de velas paga $100.000 mensuales de arriendo, que no cambia con la producción. Cuando fabrica 200 velas al mes, su costo variable de cera y mecha es $60.000; cuando fabrica 400 velas, ese costo variable sube a $120.000. El dueño cree que, al duplicar la producción de 200 a 400 velas, su costo total también se duplicará.',
          question: '¿Está en lo correcto el dueño?',
          options: [
            {
              id: 'a',
              text: 'No: el costo total sube de $160.000 a $220.000, pero no se duplica, porque el costo fijo de $100.000 se mantiene igual y solo aumenta el costo variable',
            },
            { id: 'b', text: 'Sí: al duplicar la producción, el costo total siempre se duplica' },
            { id: 'c', text: 'No: el costo total se mantiene igual, porque el costo fijo no cambia' },
            { id: 'd', text: 'Sí, porque tanto el costo fijo como el costo variable se duplican' },
          ],
          correctOptionId: 'a',
          explanation:
            'Con 200 velas, CT = 100.000 + 60.000 = 160.000; con 400 velas, CT = 100.000 + 120.000 = 220.000. El costo total sube, pero no llega al doble ($320.000) porque solo el costo variable se duplicó: el costo fijo de $100.000 sigue igual.',
        },
        {
          id: 'u5-l1-e10',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'Una imprenta tiene un costo fijo de $600.000 mensuales por el arriendo y las cuotas de sus máquinas. Este mes su costo total fue de $1.500.000. Si el próximo mes cierra por completo y no imprime absolutamente nada, ¿cuál será su costo total ese mes?',
          unitLabel: '$',
          answer: 600000,
          hint: 'Cuando la producción es cero, el costo variable es cero, así que CT = CF.',
          explanation:
            'Al no imprimir nada, el costo variable cae a cero, pero los compromisos fijos siguen vigentes: CT = CF + CV = 600.000 + 0 = 600.000. El costo total del mes pasado ($1.500.000) no importa para este cálculo.',
        },
      ],
    },
    {
      id: 'u5-l2',
      title: 'Costo marginal y costo medio',
      summary: 'Cuánto cuesta producir una unidad más, cuánto cuesta cada unidad en promedio, y cómo se relacionan ambos.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: 'Costo marginal: el precio de una unidad más',
        },
        {
          type: 'paragraph',
          text: 'El costo marginal (CMg) mide cuánto aumenta el costo total de una empresa al producir exactamente una unidad adicional. No es el costo promedio de todo lo que ya se produjo, sino el costo específico de esa última unidad extra.',
        },
        {
          type: 'formula',
          label: 'Costo marginal',
          text: 'CMg = ΔCT / ΔQ',
        },
        {
          type: 'heading',
          text: 'Costo medio total: el costo por unidad',
        },
        {
          type: 'paragraph',
          text: 'El costo medio total (CTMe) es el costo total repartido entre todas las unidades producidas: cuánto le cuesta a la empresa, en promedio, cada unidad. Es distinto del costo marginal, que solo mira el costo de la última unidad.',
        },
        {
          type: 'formula',
          label: 'Costo medio total',
          text: 'CTMe = CT / Q',
        },
        {
          type: 'example',
          title: 'Ejemplo: un taller de sillas de madera',
          text: 'Un taller tiene un costo fijo de $100.000 al mes. Su costo total según cuántas sillas produce es: 1 silla, $140.000; 2 sillas, $170.000; 3 sillas, $195.000; 4 sillas, $230.000; 5 sillas, $280.000; 6 sillas, $348.000. El costo marginal de cada silla adicional es, en orden: $40.000, $30.000, $25.000, $35.000, $50.000 y $68.000. El costo medio total, en cambio, baja de $140.000 (con 1 silla) a un mínimo de $56.000 (con 5 sillas), y luego sube a $58.000 (con 6 sillas).',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Por qué el costo marginal cruza al costo medio en su punto mínimo',
          text: 'Mientras el costo marginal sea menor que el costo medio total, cada unidad nueva "tira hacia abajo" el promedio, así que el costo medio sigue cayendo. En el ejemplo, esto ocurre hasta la quinta silla. Cuando el costo marginal supera al costo medio total —como pasa con la sexta silla, cuyo costo marginal de $68.000 es mayor al promedio anterior de $56.000— cada unidad nueva "tira hacia arriba" el promedio, y el costo medio empieza a subir.',
        },
      ],
      exercises: [
        {
          id: 'u5-l2-e1',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Un taller que fabrica sillas de madera tiene un costo total de $280.000 al producir 5 sillas, y de $348.000 al producir 6 sillas. ¿Cuál es el costo marginal de la sexta silla?',
          unitLabel: '$',
          answer: 68000,
          explanation: 'CMg = ΔCT/ΔQ = (348.000 − 280.000) / (6 − 5) = 68.000.',
        },
        {
          id: 'u5-l2-e2',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'Si el costo marginal de producir la siguiente unidad es menor que el costo medio total actual, ¿qué le pasa al costo medio total al producir esa unidad más?',
          options: [
            { id: 'a', text: 'Disminuye' },
            { id: 'b', text: 'Aumenta' },
            { id: 'c', text: 'Se mantiene exactamente igual' },
            { id: 'd', text: 'Se vuelve negativo' },
          ],
          correctOptionId: 'a',
          explanation:
            'Cuando la unidad adicional cuesta menos que el promedio vigente, esa unidad "tira hacia abajo" el promedio, así que el costo medio total disminuye.',
        },
        {
          id: 'u5-l2-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Una fábrica de zapatos calcula que fabricar 100 pares le cuesta en total $1.500.000 (un costo medio de $15.000 por par). El costo marginal del par número 101 es de $12.000.',
          question: '¿Qué debería pasar con el costo medio total de la fábrica si decide fabricar ese par número 101?',
          options: [
            { id: 'a', text: 'Disminuye levemente, porque el costo marginal de esa unidad es menor al costo medio anterior' },
            { id: 'b', text: 'Aumenta, porque cualquier unidad adicional sube el costo medio' },
            { id: 'c', text: 'Se mantiene exactamente en $15.000' },
            { id: 'd', text: 'No se puede saber nada sin conocer el costo fijo' },
          ],
          correctOptionId: 'a',
          explanation:
            'Como el costo marginal ($12.000) es menor que el costo medio total antes de esa unidad ($15.000), producir el par número 101 reduce —aunque sea levemente— el costo medio total de la fábrica.',
        },
        {
          id: 'u5-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 25,
          prompt:
            'Explica por qué la curva de costo marginal cruza a la curva de costo medio total exactamente en el punto mínimo de esta última.',
          keyPoints: [
            {
              id: 'marginal_definition',
              label: 'Explica qué es el costo marginal (el costo de producir una unidad adicional)',
              synonyms: ['costo marginal', 'una unidad mas', 'costo de la ultima unidad', 'producir una unidad adicional'],
            },
            {
              id: 'average_definition',
              label: 'Explica qué es el costo medio total (el costo total dividido por la cantidad producida)',
              synonyms: ['costo medio total', 'costo promedio', 'costo total dividido', 'costo por unidad'],
            },
            {
              id: 'crossing_logic',
              label:
                'Explica que cuando el marginal es menor al medio, el medio baja, y cuando el marginal es mayor, el medio sube, cruzándose en el mínimo',
              synonyms: [
                'marginal menor al medio',
                'el promedio baja',
                'marginal mayor al medio',
                'el promedio sube',
                'se cruzan en el minimo',
                'punto minimo del costo medio',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'El costo marginal es lo que cuesta producir una unidad más, y el costo medio total es el costo total repartido entre todas las unidades. Cuando el costo marginal es menor que el costo medio, cada unidad nueva baja el promedio; cuando el costo marginal es mayor, cada unidad nueva lo sube. Por eso, justo en el punto donde ambas curvas se cruzan, el costo medio total deja de bajar y empieza a subir: ese cruce es su mínimo.',
          explanation:
            'La respuesta debe explicar ambos conceptos y conectar la comparación entre marginal y medio con el punto mínimo del costo medio total.',
        },
        {
          id: 'u5-l2-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una imprenta produce 400 libros en el mes con un costo total de $2.000.000, sumando lo fijo y lo variable. ¿Cuál es su costo medio total por libro?',
          unitLabel: '$',
          answer: 5000,
          hint: 'El costo medio total es el costo total repartido entre todas las unidades: CTMe = CT / Q.',
          explanation: 'CTMe = CT / Q = 2.000.000 / 400 = 5.000 por libro.',
        },
        {
          id: 'u5-l2-e6',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Una fábrica de mermeladas artesanales produce 9 cajas al día con un costo total de $90.000, es decir, un costo medio total de $10.000 por caja. Su dueña calcula que producir una décima caja elevaría el costo total del día a $104.000.',
          question: 'Si la fábrica produce esa décima caja, ¿qué ocurre con su costo medio total y por qué?',
          options: [
            {
              id: 'a',
              text: 'Sube a $10.400 por caja, porque el costo marginal de la décima caja ($14.000) supera al costo medio anterior',
            },
            { id: 'b', text: 'Baja, porque repartir el costo entre más cajas siempre reduce el promedio' },
            { id: 'c', text: 'Se mantiene en $10.000, porque el costo medio no depende del costo marginal' },
            { id: 'd', text: 'Sube a $14.000 por caja, porque el costo medio pasa a ser igual al costo marginal' },
          ],
          correctOptionId: 'a',
          explanation:
            'El costo marginal de la décima caja es CMg = 104.000 − 90.000 = 14.000, mayor que el costo medio anterior de $10.000, así que esa caja "tira hacia arriba" el promedio. El nuevo costo medio total es 104.000 / 10 = 10.400 por caja: sube, pero no salta hasta el valor del marginal.',
        },
        {
          id: 'u5-l2-e7',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una confitería tiene un costo total de $520.000 al producir 40 tortas y de $535.000 al producir 41 tortas. ¿Cuál es el costo marginal de la torta número 41?',
          unitLabel: '$',
          answer: 15000,
          explanation: 'CMg = ΔCT/ΔQ = (535.000 − 520.000) / (41 − 40) = 15.000.',
        },
        {
          id: 'u5-l2-e8',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Un taller que fabrica mochilas produce 10 unidades al día con un costo total de $200.000, es decir, un costo medio total de $20.000 por mochila. El dueño calcula que producir una mochila más (la número 11) elevaría el costo total del día a $220.000.',
          question: 'Si el taller fabrica esa mochila número 11, ¿qué ocurre con su costo medio total?',
          options: [
            {
              id: 'a',
              text: 'Se mantiene en $20.000 por mochila, porque el costo marginal de esa unidad ($20.000) es igual al costo medio total anterior',
            },
            { id: 'b', text: 'Baja, porque repartir el costo entre más unidades siempre reduce el promedio' },
            { id: 'c', text: 'Sube a $22.000 por mochila, porque el costo total aumentó a $220.000' },
            { id: 'd', text: 'No se puede saber sin conocer el costo fijo del taller' },
          ],
          correctOptionId: 'a',
          explanation:
            'El costo marginal de la mochila número 11 es CMg = 220.000 − 200.000 = 20.000, exactamente igual al costo medio total anterior ($20.000). Cuando el marginal iguala al medio, el promedio no se mueve: el nuevo costo medio total es 220.000 / 11 = 20.000. Ese es justamente el punto donde el costo medio deja de bajar, su mínimo.',
        },
        {
          id: 'u5-l2-e9',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una zapatería fabrica 250 pares de zapatos en el mes con un costo total de $3.000.000, sumando lo fijo y lo variable. ¿Cuál es su costo medio total por par?',
          unitLabel: '$',
          answer: 12000,
          hint: 'El costo medio total es el costo total repartido entre todas las unidades: CTMe = CT / Q.',
          explanation: 'CTMe = CT / Q = 3.000.000 / 250 = 12.000 por par.',
        },
      ],
    },
    {
      id: 'u5-l3',
      title: 'Costos en el largo plazo y economías de escala',
      summary: 'Por qué en el largo plazo todo cuesta cambiar, y por qué crecer a veces abarata y a veces encarece cada unidad.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: 'En el largo plazo, ya no hay costos fijos',
        },
        {
          type: 'paragraph',
          text: 'Todo lo que vimos hasta ahora describe el corto plazo: un período en el que la empresa tiene al menos una decisión ya tomada, como el tamaño de su planta. En el largo plazo, en cambio, la empresa tiene tiempo para ajustar absolutamente todo: puede construir una planta más grande, achicarse, cambiar de tecnología o incluso salir del mercado. Por eso, en el largo plazo todos los costos son variables: no queda ningún compromiso fijo que la empresa no pueda modificar.',
        },
        {
          type: 'formula',
          label: 'Costo medio de largo plazo',
          text: 'CMeLP = CTLP / Q',
        },
        {
          type: 'heading',
          text: 'Economías de escala',
        },
        {
          type: 'paragraph',
          text: 'Se dice que una empresa tiene economías de escala cuando su costo medio de largo plazo disminuye a medida que aumenta su nivel de producción. Esto ocurre, por ejemplo, porque una planta más grande permite que los trabajadores se especialicen en tareas específicas, porque comprar insumos en mayor volumen suele traer mejores precios, o porque una maquinaria costosa se reparte entre muchas más unidades producidas.',
        },
        {
          type: 'heading',
          text: 'Deseconomías de escala',
        },
        {
          type: 'paragraph',
          text: 'Pero crecer no siempre abarata el costo por unidad. Se habla de deseconomías de escala cuando el costo medio de largo plazo empieza a subir a medida que la empresa produce más. Esto suele aparecer cuando una organización se vuelve tan grande que coordinar a todos sus equipos se vuelve lento y costoso, cuando se necesitan más niveles de jefaturas intermedias solo para mantener el control, o cuando la comunicación entre áreas se empieza a perder.',
        },
        {
          type: 'example',
          title: 'Ejemplo: eligiendo el tamaño de una planta embotelladora',
          text: 'Una embotelladora evalúa tres tamaños de planta. Una planta pequeña produce 1.000 botellas diarias con un costo total de $500.000, es decir, $500 por botella. Una planta mediana produce 3.000 botellas diarias con un costo total de $1.140.000, o $380 por botella: crecer le permitió aprovechar mejores precios de insumos y especializar a su personal. Pero una planta grande, que produce 6.000 botellas diarias con un costo total de $2.520.000, cuesta $420 por botella: a ese tamaño, coordinar turnos, líneas de producción y logística empieza a ser más caro de lo que ahorra por comprar en mayor volumen.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'La curva de costo medio de largo plazo',
          text: 'Cuando se dibuja el costo medio de largo plazo para distintos tamaños de planta, suele tener forma de U: primero cae por las economías de escala, alcanza un mínimo en lo que se llama la "escala eficiente", y luego sube por las deseconomías de escala.',
        },
      ],
      exercises: [
        {
          id: 'u5-l3-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '¿Qué describe mejor el concepto de "economías de escala"?',
          options: [
            { id: 'a', text: 'El costo medio de largo plazo disminuye a medida que la empresa produce más' },
            { id: 'b', text: 'El costo fijo aumenta junto con la producción' },
            { id: 'c', text: 'El costo marginal siempre es igual al costo medio total' },
            { id: 'd', text: 'El costo total se mantiene constante sin importar cuánto se produzca' },
          ],
          correctOptionId: 'a',
          explanation:
            'Las economías de escala ocurren cuando producir más le permite a la empresa reducir su costo medio de largo plazo, por ejemplo gracias a la especialización o a comprar insumos en mayor volumen.',
        },
        {
          id: 'u5-l3-e2',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Una cadena de restaurantes creció de 5 a 200 locales en pocos años. A medida que se expandió, necesitó cada vez más niveles de gerencia intermedia para supervisar a todos los locales, y empezó a tener problemas para mantener la misma calidad y coordinación en todas partes. Su costo medio de largo plazo, que había bajado al principio, comenzó a subir.',
          question: '¿Qué concepto describe mejor lo que le está ocurriendo a la cadena de restaurantes en esta etapa?',
          options: [
            { id: 'a', text: 'Deseconomías de escala' },
            { id: 'b', text: 'Economías de escala' },
            { id: 'c', text: 'Un aumento del costo fijo de corto plazo' },
            { id: 'd', text: 'Una caída del costo marginal' },
          ],
          correctOptionId: 'a',
          explanation:
            'Cuando crecer más allá de cierto tamaño hace subir el costo medio de largo plazo —por ejemplo, por dificultades de coordinación y más niveles de gerencia— se habla de deseconomías de escala.',
        },
        {
          id: 'u5-l3-e3',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'Una embotelladora tiene dos opciones de planta: una pequeña, que produce 1.000 botellas diarias con un costo total de $500.000, y una mediana, que produce 3.000 botellas diarias con un costo total de $1.140.000. ¿Cuántos pesos menos gasta la planta mediana por cada botella, comparado con la planta pequeña?',
          unitLabel: '$',
          answer: 120,
          explanation:
            'CMe planta pequeña = 500.000 / 1.000 = 500 por botella. CMe planta mediana = 1.140.000 / 3.000 = 380 por botella. La diferencia es 500 − 380 = 120 pesos menos por botella.',
        },
        {
          id: 'u5-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 20,
          prompt:
            'Explica por qué en el largo plazo todos los costos de una empresa son variables, y describe la diferencia entre economías y deseconomías de escala.',
          keyPoints: [
            {
              id: 'all_variable_long_run',
              label: 'Explica que en el largo plazo no quedan costos fijos porque la empresa puede ajustar todo, incluido el tamaño de la planta',
              synonyms: [
                'en el largo plazo todo es variable',
                'no hay costos fijos en el largo plazo',
                'puede cambiar el tamaño de la planta',
                'ajustar todo en el largo plazo',
                'no queda nada fijo',
              ],
            },
            {
              id: 'economies_of_scale',
              label: 'Explica que las economías de escala son cuando el costo medio de largo plazo baja al producir más',
              synonyms: [
                'economias de escala',
                'el costo medio baja',
                'especializacion',
                'comprar en mayor volumen',
                'mejores precios por comprar mas',
              ],
            },
            {
              id: 'diseconomies_of_scale',
              label: 'Explica que las deseconomías de escala son cuando el costo medio de largo plazo sube al producir más',
              synonyms: [
                'deseconomias de escala',
                'el costo medio sube',
                'dificultad para coordinar',
                'problemas de gestion',
                'demasiados niveles de jefatura',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'En el largo plazo la empresa puede cambiar absolutamente todo, incluso el tamaño de su planta, así que ya no existe ningún costo comprometido de antemano: todos los costos pasan a ser variables. Las economías de escala aparecen cuando producir más permite bajar el costo medio de largo plazo, por ejemplo gracias a la especialización o a comprar insumos más baratos por volumen. Las deseconomías de escala son lo contrario: cuando la empresa crece tanto que coordinar todo se vuelve más difícil y el costo medio de largo plazo empieza a subir.',
          explanation:
            'Se espera que la respuesta explique por qué no hay costos fijos en el largo plazo y distinga con claridad economías de deseconomías de escala, idealmente con una razón para cada una.',
        },
        {
          id: 'u5-l3-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una fábrica de jugos evalúa construir una planta que produciría 8.000 litros diarios con un costo total de $3.200.000 al día. ¿Cuál sería el costo medio de largo plazo por litro con esa planta?',
          unitLabel: '$',
          answer: 400,
          hint: 'El costo medio de largo plazo se calcula como CMeLP = CTLP / Q.',
          explanation: 'CMeLP = CTLP / Q = 3.200.000 / 8.000 = 400 por litro.',
        },
        {
          id: 'u5-l3-e6',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '¿Cuál de las siguientes situaciones es una fuente típica de economías de escala para una empresa que crece?',
          options: [
            { id: 'a', text: 'Obtener descuentos por comprar sus insumos en volúmenes mucho mayores' },
            { id: 'b', text: 'Necesitar más niveles de jefaturas intermedias que encarecen la coordinación' },
            { id: 'c', text: 'Pagar el mismo arriendo mensual sin importar cuánto produzca' },
            { id: 'd', text: 'Que el costo marginal de la última unidad sea mayor que el costo medio' },
          ],
          correctOptionId: 'a',
          explanation:
            'Comprar insumos en mayor volumen suele conseguir mejores precios, lo que reduce el costo medio de largo plazo al producir más: una fuente clásica de economías de escala. Los niveles extra de jefatura son una fuente de deseconomías, y las otras dos opciones describen conceptos de corto plazo.',
        },
        {
          id: 'u5-l3-e7',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Una plataforma de streaming pasó de 10.000 a 100.000 usuarios en un año. El costo de sus servidores y del equipo que desarrolla la aplicación se reparte ahora entre muchos más usuarios, de modo que su costo medio de largo plazo por usuario bajó de forma notoria.',
          question: '¿Qué concepto describe mejor lo que le ocurre a la plataforma?',
          options: [
            { id: 'a', text: 'Economías de escala' },
            { id: 'b', text: 'Deseconomías de escala' },
            { id: 'c', text: 'Un aumento del costo fijo de corto plazo' },
            { id: 'd', text: 'Una caída del costo marginal de corto plazo' },
          ],
          correctOptionId: 'a',
          explanation:
            'Al crecer, la plataforma reparte costos como los servidores y el desarrollo entre muchas más unidades, bajando su costo medio de largo plazo. Cuando producir más reduce el costo medio de largo plazo, se habla de economías de escala.',
        },
        {
          id: 'u5-l3-e8',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'Una fábrica de jugos compara dos tamaños de planta. La planta mediana produce 8.000 litros diarios con un costo total de $3.200.000; la planta grande produce 10.000 litros diarios con un costo total de $4.500.000. ¿Cuántos pesos MÁS gasta la planta grande por cada litro, comparada con la planta mediana?',
          unitLabel: '$',
          answer: 50,
          hint: 'Calcula el costo medio (CT / Q) de cada planta y réstalos.',
          explanation:
            'CMe planta mediana = 3.200.000 / 8.000 = 400 por litro. CMe planta grande = 4.500.000 / 10.000 = 450 por litro. La planta grande gasta 450 − 400 = 50 pesos más por litro: a ese tamaño aparecen deseconomías de escala.',
        },
        {
          id: 'u5-l3-e9',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: 'En el largo plazo, ¿por qué se dice que todos los costos de una empresa son variables?',
          options: [
            {
              id: 'a',
              text: 'Porque la empresa tiene tiempo para ajustar todos sus factores, incluido el tamaño de la planta, así que no queda ningún compromiso fijo',
            },
            { id: 'b', text: 'Porque el arriendo del local sube automáticamente todos los meses' },
            { id: 'c', text: 'Porque el costo marginal siempre termina siendo igual al costo medio total' },
            { id: 'd', text: 'Porque en el largo plazo la empresa deja de tener costos variables' },
          ],
          correctOptionId: 'a',
          explanation:
            'En el largo plazo la empresa puede modificar absolutamente todo, incluso construir o cambiar el tamaño de su planta. Como ya no queda ninguna decisión comprometida de antemano, no hay costos fijos: todos los costos pasan a ser variables.',
        },
      ],
    },
  ],
};
