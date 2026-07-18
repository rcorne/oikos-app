import type { Unit } from '@/content/types';

export const unit14: Unit = {
  id: 'u14',
  index: 14,
  subject: 'macroeconomia',
  title: 'Política monetaria y fiscal',
  subtitle: 'Las herramientas con que el Estado intenta estabilizar la economía',
  description:
    'El banco central y el gobierno cuentan con herramientas distintas para influir en la demanda agregada. Esta unidad revisa cómo funciona cada una, qué es la deuda pública y por qué "afinar" la economía en tiempo real es más difícil de lo que parece.',
  icon: 'settings-outline',
  color: '#1F7A93',
  source: 'ambos-macro',
  lessons: [
    {
      id: 'u14-l1',
      title: 'Política monetaria y demanda agregada en el corto plazo',
      summary: 'Cómo una baja (o alza) en la tasa de interés de política termina afectando el consumo, la inversión y la demanda agregada.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'La tasa de interés de política',
        },
        {
          type: 'paragraph',
          text: 'El banco central fija una tasa de interés de referencia —la tasa de política monetaria— que funciona como ancla para el resto de las tasas de la economía. Los bancos comerciales usan esa tasa como punto de partida para decidir cuánto cobrar por los créditos que otorgan y cuánto pagar por los depósitos que reciben, de modo que un cambio en la tasa de política se traspasa, con algo de rezago, a las tasas que efectivamente enfrentan hogares y empresas.',
        },
        {
          type: 'heading',
          text: 'El mecanismo de transmisión: de la tasa a la demanda agregada',
        },
        {
          type: 'paragraph',
          text: 'Cuando el banco central baja su tasa de política, el crédito se abarata en toda la economía. A las empresas les resulta más rentable endeudarse para comprar maquinaria o ampliar una planta, y a los hogares les resulta más barato financiar una vivienda, un auto u otros bienes durables. Como el consumo y la inversión son dos de los componentes más grandes de la demanda agregada, ambos tienden a subir, y con ellos la producción y el empleo en el corto plazo.',
        },
        {
          type: 'formula',
          label: 'Canal del crédito',
          text: '↓ Tasa de política → ↓ Costo del crédito → ↑ Consumo e inversión → ↑ Demanda agregada',
        },
        {
          type: 'example',
          title: 'Ejemplo: el efecto de un recorte de tasa sobre un crédito',
          text: 'Ana quiere pedir un crédito de $10.000.000 a un año. Con la tasa de referencia anterior, el banco le habría cobrado 10% de interés anual, es decir, $1.000.000 en intereses. El banco central baja su tasa de política y el banco comercial reduce la tasa del crédito a 7%: ahora los intereses de Ana serían $10.000.000 × 7% = $700.000. Ese ahorro de $300.000 hace que pedir el crédito —y con él, comprar o invertir— resulte más atractivo que antes.',
        },
        {
          type: 'heading',
          text: 'La política monetaria contractiva: enfriar una economía sobrecalentada',
        },
        {
          type: 'paragraph',
          text: 'El mecanismo funciona también en sentido inverso. Cuando la economía crece muy por encima de su capacidad y empieza a generar presiones inflacionarias, el banco central sube su tasa de política: el crédito se encarece, el consumo y la inversión se moderan, la demanda agregada se enfría y las presiones sobre los precios tienden a ceder, aunque a costa de un crecimiento más lento en el corto plazo.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'El costo de enfriar la economía',
          text: 'Subir la tasa para controlar la inflación casi siempre desacelera el crecimiento y puede elevar el desempleo en el corto plazo. El banco central enfrenta una disyuntiva entre contener la inflación y sostener la actividad, y no puede lograr ambas cosas al mismo tiempo con una sola herramienta.',
        },
      ],
      exercises: [
        {
          id: 'u14-l1-e1',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'Ana pide un crédito de $10.000.000 a un año. Con la tasa de referencia anterior, el banco le habría cobrado 10% de interés anual. El banco central baja su tasa de política y el banco comercial reduce la tasa del crédito a 7%. ¿Cuántos pesos de interés pagará Ana ahora en el año?',
          unitLabel: '$',
          answer: 700000,
          hint: 'Multiplica el monto del crédito por la nueva tasa de interés.',
          explanation: 'Intereses = $10.000.000 × 7% = $700.000.',
        },
        {
          id: 'u14-l1-e2',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question: '¿Qué ocurre con el consumo y la inversión cuando un banco central baja su tasa de política monetaria?',
          options: [
            { id: 'a', text: 'Ambos tienden a aumentar, porque financiar consumo e inversión se vuelve más barato' },
            { id: 'b', text: 'Ambos tienden a caer, porque los bancos prestan menos cuando la tasa baja' },
            { id: 'c', text: 'El consumo sube, pero la inversión de las empresas no reacciona a la tasa de interés' },
            { id: 'd', text: 'Ninguno cambia, porque hogares y empresas no reaccionan a la tasa de interés en el corto plazo' },
          ],
          correctOptionId: 'a',
          explanation:
            'Una tasa de política más baja abarata el crédito, lo que incentiva tanto a los hogares a pedir préstamos para consumir como a las empresas a endeudarse para invertir. Ambos efectos elevan la demanda agregada.',
        },
        {
          id: 'u14-l1-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'La economía de un país crece muy por encima de su potencial, el desempleo está en mínimos históricos y la inflación anual llegó a 9%, muy por sobre la meta del banco central. El directorio del banco central debe decidir qué hacer con la tasa de política.',
          question: '¿Qué decisión es más consistente con el objetivo de controlar la inflación?',
          options: [
            { id: 'a', text: 'Subir la tasa de política, para encarecer el crédito y moderar el consumo y la inversión' },
            { id: 'b', text: 'Bajar la tasa de política, para estimular aún más la demanda agregada' },
            { id: 'c', text: 'Mantener la tasa sin cambios, porque la política monetaria no afecta la inflación' },
            { id: 'd', text: 'Eliminar la tasa de política y dejar que cada banco fije tasas sin ninguna referencia común' },
          ],
          correctOptionId: 'a',
          explanation:
            'Frente a una economía sobrecalentada con inflación por sobre la meta, subir la tasa de política encarece el crédito, modera el consumo y la inversión, enfría la demanda agregada y ayuda a contener las presiones inflacionarias, aunque a costa de un menor crecimiento en el corto plazo.',
        },
        {
          id: 'u14-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 20,
          prompt:
            'Explica cómo una baja en la tasa de interés de política monetaria termina afectando el consumo y la inversión, y por qué eso mueve la demanda agregada.',
          keyPoints: [
            {
              id: 'cheaper_credit',
              label: 'Identifica que bajar la tasa abarata el crédito para hogares y empresas',
              synonyms: ['credito mas barato', 'abarata el credito', 'tasa mas baja', 'menor costo de endeudarse', 'financiamiento mas barato', 'prestamos mas baratos'],
            },
            {
              id: 'consumption_investment',
              label: 'Explica que esto estimula el consumo de los hogares y la inversión de las empresas',
              synonyms: ['sube el consumo', 'aumenta la inversion', 'compran mas', 'invierten mas', 'se endeudan para invertir', 'compran a credito'],
            },
            {
              id: 'aggregate_demand',
              label: 'Conecta el mayor consumo e inversión con un aumento de la demanda agregada',
              synonyms: ['demanda agregada', 'sube la demanda', 'mas produccion', 'mas actividad economica', 'estimula la economia'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Cuando el banco central baja la tasa de política, el crédito se abarata: a los hogares les resulta más barato financiar una compra y a las empresas les resulta más rentable endeudarse para invertir. Eso estimula tanto el consumo como la inversión, dos de los componentes más grandes del gasto de la economía, y como suben, la demanda agregada aumenta y con ella la producción y el empleo en el corto plazo.',
          explanation:
            'Se espera que la respuesta identifique el abaratamiento del crédito, explique el efecto sobre consumo e inversión, y conecte ambos con el aumento de la demanda agregada.',
        },
      ],
    },
    {
      id: 'u14-l2',
      title: 'Política fiscal, déficit y deuda pública',
      summary: 'La diferencia entre el déficit fiscal (un flujo anual) y la deuda pública (un stock acumulado), y por qué su crecimiento preocupa a los economistas.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'Las herramientas de la política fiscal',
        },
        {
          type: 'paragraph',
          text: 'Además de la política monetaria, el gobierno puede influir en la demanda agregada mediante el gasto público y los impuestos. Aumentar el gasto público o reducir impuestos son medidas fiscales expansivas, porque ponen más recursos a disposición de hogares y empresas; reducir el gasto o subir impuestos son medidas contractivas, porque retiran recursos de la economía.',
        },
        {
          type: 'heading',
          text: 'Déficit fiscal: un flujo',
        },
        {
          type: 'paragraph',
          text: 'El déficit fiscal es la diferencia entre lo que gasta el gobierno y lo que recauda en un año determinado. Es un flujo: se mide período a período. Cuando los ingresos superan al gasto, el resultado se llama superávit fiscal.',
        },
        {
          type: 'formula',
          label: 'Déficit fiscal',
          text: 'Déficit fiscal = Gasto público − Ingresos fiscales',
        },
        {
          type: 'example',
          title: 'Ejemplo: calculando el déficit de un año',
          text: 'En un año, el gobierno gasta $60.000 millones y recauda $52.000 millones en impuestos y otros ingresos. El déficit fiscal es $60.000 millones − $52.000 millones = $8.000 millones. Si el PIB de ese país es $400.000 millones, ese déficit equivale a $8.000 / $400.000 = 2% del PIB.',
        },
        {
          type: 'heading',
          text: 'Deuda pública: un stock que se acumula',
        },
        {
          type: 'paragraph',
          text: 'La deuda pública, en cambio, es un stock: es la acumulación de todos los déficits pasados que el gobierno financió endeudándose (descontando los años en que tuvo superávit). Un país puede tener un déficit relativamente pequeño este año y aun así arrastrar una deuda pública enorme, acumulada durante muchos años de gasto por sobre los ingresos.',
        },
        {
          type: 'example',
          title: 'Ejemplo: cómo se acumula la deuda en tres años',
          text: 'Un país parte con una deuda pública de $100.000 millones. En el año 1 tiene un déficit de $8.000 millones, en el año 2 un déficit de $10.000 millones y en el año 3 un déficit de $6.000 millones, todos financiados con más endeudamiento. Al final del año 3, la deuda pública es $100.000 + $8.000 + $10.000 + $6.000 = $124.000 millones.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: '¿Por qué preocupa una deuda creciente?',
          text: 'Cuando la deuda pública crece más rápido que el PIB, el gobierno debe destinar una porción cada vez mayor de su presupuesto solo a pagar intereses, dejando menos espacio para otras políticas. Además, una deuda muy alta en relación al PIB puede generar dudas sobre la capacidad del país de seguir pagando, lo que eleva el costo al que puede seguir endeudándose.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Deuda como porcentaje del PIB',
          text: 'Por eso los economistas suelen comparar la deuda pública con el tamaño de la economía (deuda/PIB) en vez de mirar solo el monto absoluto: una economía más grande puede sostener, en términos relativos, una deuda mayor sin comprometer su capacidad de pago.',
        },
      ],
      exercises: [
        {
          id: 'u14-l2-e1',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'El gobierno de un país gasta $60.000 millones durante el año y recauda $52.000 millones en impuestos y otros ingresos. ¿Cuál es el déficit fiscal del año, en millones de pesos?',
          unitLabel: 'millones de $',
          answer: 8000,
          hint: 'Déficit fiscal = Gasto público − Ingresos fiscales.',
          explanation: 'Déficit fiscal = $60.000 millones − $52.000 millones = $8.000 millones.',
        },
        {
          id: 'u14-l2-e2',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question: '¿Cuál de las siguientes afirmaciones distingue correctamente el déficit fiscal de la deuda pública?',
          options: [
            {
              id: 'a',
              text: 'El déficit es un flujo que se mide en un año; la deuda es un stock que acumula los déficits (y superávits) de todos los años anteriores',
            },
            { id: 'b', text: 'El déficit y la deuda miden exactamente lo mismo, solo que expresadas en distintas monedas' },
            { id: 'c', text: 'La deuda es un flujo anual y el déficit es la acumulación histórica de deuda' },
            { id: 'd', text: 'El déficit solo puede existir si el gobierno no tiene ninguna deuda pública previa' },
          ],
          correctOptionId: 'a',
          explanation:
            'El déficit fiscal es un flujo (gasto menos ingresos de un año particular), mientras que la deuda pública es un stock: la suma acumulada de los déficits pasados que se financiaron con endeudamiento.',
        },
        {
          id: 'u14-l2-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Un país mantiene déficits fiscales sostenidos durante una década. Su deuda pública pasó de representar 30% del PIB a representar 85% del PIB en ese período, mientras el pago anual de intereses de la deuda casi se triplicó como proporción del presupuesto.',
          question:
            '¿Qué preocupación describe mejor esta situación, considerando lo que sabemos sobre la sostenibilidad de la deuda pública?',
          options: [
            {
              id: 'a',
              text: 'La creciente carga de intereses reduce el espacio del presupuesto para otras políticas y puede generar dudas sobre la capacidad del país de seguir pagando, elevando el costo de financiarse',
            },
            { id: 'b', text: 'No hay ningún problema, porque la deuda pública nunca afecta el presupuesto de un gobierno' },
            { id: 'c', text: 'El único indicador relevante es el monto absoluto de deuda, no su relación con el PIB' },
            { id: 'd', text: 'Un aumento en la deuda/PIB siempre significa que el país entrará en default de inmediato' },
          ],
          correctOptionId: 'a',
          explanation:
            'Una deuda que crece mucho más rápido que el PIB eleva la carga de intereses que el gobierno debe pagar cada año, restando margen para otras políticas y pudiendo encarecer el financiamiento futuro si los acreedores empiezan a dudar de la capacidad de pago del país.',
        },
        {
          id: 'u14-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 20,
          prompt:
            'Explica la diferencia entre déficit fiscal y deuda pública, y por qué una deuda pública creciente en relación al PIB preocupa a los economistas.',
          keyPoints: [
            {
              id: 'deficit_is_flow',
              label: 'Define el déficit fiscal como un flujo anual: gasto menos ingresos de un año',
              synonyms: ['flujo anual', 'gasto menos ingresos', 'diferencia de un ano', 'deficit de un ano', 'gasto supera a los ingresos'],
            },
            {
              id: 'debt_is_stock',
              label: 'Define la deuda pública como un stock que acumula los déficits pasados',
              synonyms: ['stock acumulado', 'acumulacion de deficits', 'suma de deficits pasados', 'deuda acumulada', 'se va sumando cada ano'],
            },
            {
              id: 'sustainability_concern',
              label: 'Explica que preocupa por la carga de intereses y la sostenibilidad de pago',
              synonyms: ['carga de intereses', 'sostenibilidad', 'pagar la deuda', 'capacidad de pago', 'cuesta mas financiarse', 'riesgo de no poder pagar'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'El déficit fiscal es un flujo: la diferencia entre lo que gasta y lo que recauda el gobierno en un año determinado. La deuda pública, en cambio, es un stock: la acumulación de todos los déficits pasados que se financiaron con endeudamiento. Una deuda pública que crece más rápido que el PIB preocupa porque el gobierno debe pagar cada año más intereses, dejando menos espacio para otras políticas, y porque puede generar dudas sobre su capacidad de pago futura, lo que encarece seguir financiándose.',
          explanation:
            'Se espera que la respuesta distinga el déficit (flujo anual) de la deuda (stock acumulado) y explique la preocupación por la carga de intereses y la sostenibilidad del pago.',
        },
      ],
    },
    {
      id: 'u14-l3',
      title: 'Reglas vs. discreción y los rezagos de la política económica',
      summary: 'El debate entre seguir reglas predecibles o dejar margen de discreción, y por qué los rezagos dificultan afinar la economía en tiempo real.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: '¿Reglas fijas o margen de discreción?',
        },
        {
          type: 'paragraph',
          text: 'Existe un debate de larga data sobre cómo deberían actuar el banco central y el gobierno frente al ciclo económico. Una postura defiende seguir reglas fijas y predecibles —por ejemplo, ajustar la tasa de interés según una fórmula conocida de antemano, o comprometerse a un límite de gasto público relacionado con los ingresos de largo plazo—. La postura opuesta defiende la discreción: dejar que las autoridades decidan caso a caso, usando su lectura de la coyuntura en cada momento.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Un ejemplo de regla',
          text: 'Algunos países fijan reglas fiscales explícitas, como comprometerse a mantener el gasto público alineado con los ingresos estructurales de largo plazo en lugar de con los ingresos del año en curso, que pueden estar inflados por un boom de precios de materias primas o deprimidos por una recesión pasajera.',
        },
        {
          type: 'paragraph',
          text: 'Las reglas ofrecen previsibilidad y reducen el riesgo de que las decisiones respondan a presiones de corto plazo —como la tentación de estimular la economía justo antes de una elección, aunque no convenga a largo plazo—. La discreción, en cambio, permite reaccionar ante shocks imprevistos que ninguna regla escrita con anticipación pudo prever.',
        },
        {
          type: 'heading',
          text: 'Los rezagos de la política económica',
        },
        {
          type: 'paragraph',
          text: 'Usar la política monetaria o fiscal para corregir el ciclo económico en tiempo real es más difícil de lo que parece, porque cualquier medida enfrenta varios rezagos. Primero está el rezago de reconocimiento: toma tiempo darse cuenta de que hay un problema, porque las cifras económicas se publican y se revisan con retraso. Luego viene el rezago de decisión: diseñar, discutir y aprobar una respuesta también toma tiempo. Y finalmente está el rezago de impacto: incluso después de decidida, una medida tarda meses en cambiar efectivamente el comportamiento de hogares y empresas.',
        },
        {
          type: 'example',
          title: 'Ejemplo: sumando los rezagos de una recesión',
          text: 'Una recesión comienza en enero. Los datos oficiales que la confirman se publican recién en julio, es decir, 6 meses después (rezago de reconocimiento). El banco central decide bajar la tasa de interés un mes más tarde, en agosto (rezago de decisión de 1 mes). Los efectos de esa baja sobre el consumo y la inversión tardan 9 meses adicionales en manifestarse por completo (rezago de impacto). En total, pasan 6 + 1 + 9 = 16 meses entre el inicio de la recesión y el momento en que la política monetaria surte su efecto pleno.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'El riesgo de "afinar" la economía en tiempo real',
          text: 'Como estos rezagos son largos e inciertos, una política pensada para corregir la economía puede terminar surtiendo efecto cuando la situación ya cambió —por ejemplo, estimulando una economía que para entonces ya se está recuperando por sí sola—, amplificando el ciclo en lugar de suavizarlo.',
        },
        {
          type: 'paragraph',
          text: 'Precisamente porque los rezagos hacen tan riesgoso el intento de afinar la economía en tiempo real, muchos economistas prefieren reglas predecibles que no dependan de calibrar perfectamente el momento exacto del ciclo económico.',
        },
      ],
      exercises: [
        {
          id: 'u14-l3-e1',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una recesión comienza en enero. Los datos oficiales que la confirman se publican recién en julio, es decir, 6 meses después. El banco central decide bajar la tasa de interés un mes más tarde. Los efectos de esa baja sobre el consumo y la inversión tardan 9 meses adicionales en manifestarse por completo. ¿Cuántos meses transcurren en total desde que comienza la recesión hasta que la política monetaria surte su efecto pleno?',
          unitLabel: 'meses',
          answer: 16,
          hint: 'Suma el rezago de reconocimiento, el de decisión y el de impacto.',
          explanation: '6 meses de rezago de reconocimiento + 1 mes de rezago de decisión + 9 meses de rezago de impacto = 16 meses.',
        },
        {
          id: 'u14-l3-e2',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '¿Cuál es la principal ventaja de que un banco central siga una regla fija y predecible en lugar de actuar con total discreción?',
          options: [
            { id: 'a', text: 'Genera previsibilidad y reduce el riesgo de que las decisiones respondan a presiones de corto plazo ajenas a la estabilidad económica' },
            { id: 'b', text: 'Permite reaccionar de forma perfecta a cualquier shock inesperado, sin ninguna limitación' },
            { id: 'c', text: 'Elimina por completo la necesidad de recolectar y revisar datos económicos' },
            { id: 'd', text: 'Garantiza que la economía nunca volverá a entrar en recesión' },
          ],
          correctOptionId: 'a',
          explanation:
            'Una regla conocida de antemano da previsibilidad a los agentes económicos y limita el riesgo de que la política responda a incentivos de corto plazo, como la tentación política de estimular la economía justo antes de una elección.',
        },
        {
          id: 'u14-l3-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Faltando pocos meses para una elección, algunos asesores del gobierno sugieren aprobar un fuerte aumento del gasto público para estimular la economía y mejorar el ánimo de los votantes, aunque los indicadores no muestran ninguna recesión ni holgura relevante en el mercado laboral.',
          question: '¿Qué riesgo de la política discrecional ilustra mejor esta situación?',
          options: [
            {
              id: 'a',
              text: 'El riesgo de que las decisiones de política económica respondan a incentivos políticos de corto plazo en vez de a las condiciones reales de la economía',
            },
            { id: 'b', text: 'El riesgo de que una regla fiscal fija impida cualquier gasto público durante todo el año' },
            { id: 'c', text: 'El riesgo de que el rezago de reconocimiento haga imposible detectar cualquier recesión futura' },
            { id: 'd', text: 'El riesgo de que el banco central pierda formalmente su independencia por ley' },
          ],
          correctOptionId: 'a',
          explanation:
            'Aprobar gasto adicional para influir en el ánimo electoral, sin que los indicadores muestren una necesidad económica real, es precisamente el tipo de decisión de corto plazo que las reglas fijas buscan evitar: la política discrecional queda expuesta a incentivos políticos ajenos a la estabilización de la economía.',
        },
        {
          id: 'u14-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 20,
          prompt:
            'Explica qué son los rezagos de la política económica y por qué dificultan usar la política fiscal o monetaria para "afinar" la economía en tiempo real.',
          keyPoints: [
            {
              id: 'recognition_lag',
              label: 'Explica que existe un rezago de reconocimiento: toma tiempo detectar que hay un problema económico',
              synonyms: ['rezago de reconocimiento', 'tarda en detectarse', 'datos con retraso', 'darse cuenta tarde', 'toma tiempo saber que hay un problema'],
            },
            {
              id: 'decision_implementation_lag',
              label: 'Explica que además hay rezagos en decidir e implementar una respuesta, y en que esa respuesta llegue a impactar',
              synonyms: ['rezago de decision', 'tarda en decidirse', 'rezago de impacto', 'tarda en surtir efecto', 'toma tiempo actuar'],
            },
            {
              id: 'fine_tuning_risk',
              label: 'Concluye que estos rezagos dificultan afinar la economía en tiempo real y pueden amplificar el ciclo',
              synonyms: ['dificil afinar la economia', 'afinar en tiempo real', 'puede llegar tarde', 'amplificar el ciclo', 'actuar a destiempo', 'riesgo de sobrerreaccionar'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Los rezagos son los tiempos que pasan entre que surge un problema económico y que una política logra corregirlo. Primero está el rezago de reconocimiento, porque los datos económicos tardan en publicarse y confirmar que hay un problema. Luego está el rezago de decisión, el tiempo que toma diseñar y aprobar una respuesta, y el rezago de impacto, el tiempo que esa respuesta tarda en cambiar el comportamiento de hogares y empresas. Como estos rezagos son largos e inciertos, una política puede terminar surtiendo efecto cuando la situación ya cambió, amplificando el ciclo económico en vez de suavizarlo.',
          explanation:
            'Una buena respuesta distingue al menos dos de los tres rezagos (reconocimiento, decisión, impacto) y explica por qué su suma hace riesgoso intentar afinar la economía en tiempo real.',
        },
      ],
    },
  ],
};
