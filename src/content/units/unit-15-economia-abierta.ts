import type { Unit } from '@/content/types';

export const unit15: Unit = {
  id: 'u15',
  index: 15,
  subject: 'macroeconomia',
  title: 'Economía abierta: tipo de cambio y balanza de pagos',
  subtitle: 'Cómo se conecta un país con el resto del mundo',
  description:
    'Ningún país produce ni consume aislado del resto del mundo. Esta unidad explica cómo se mide esa conexión a través de la cuenta corriente, cómo funciona el mercado de divisas, y por qué el régimen cambiario cambia el efecto de la política monetaria y fiscal.',
  icon: 'globe-outline',
  color: '#0D5266',
  source: 'ambos-macro',
  lessons: [
    {
      id: 'u15-l1',
      title: 'La balanza de pagos y la cuenta corriente',
      summary: 'Qué mide la cuenta corriente, cómo se vincula al ahorro y la inversión, y qué significa ser deudor o acreedor neto.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: '¿Qué mide la cuenta corriente?',
        },
        {
          type: 'paragraph',
          text: 'La cuenta corriente registra las transacciones de un país con el resto del mundo que no implican compromisos futuros de pago o cobro: principalmente las exportaciones netas de bienes y servicios (lo que se vende afuera menos lo que se compra afuera), pero también otros flujos como los intereses y utilidades que se pagan o reciben por inversiones previas, y transferencias como las remesas que envían los migrantes a sus países de origen.',
        },
        {
          type: 'heading',
          text: 'La balanza de pagos: cuenta corriente y cuenta financiera',
        },
        {
          type: 'paragraph',
          text: 'La balanza de pagos es el registro completo de todas las transacciones entre un país y el resto del mundo, y se organiza en dos grandes cuentas que se compensan entre sí: la cuenta corriente, ya descrita, y la cuenta financiera, que registra la compra y venta de activos (acciones, bonos, propiedades, préstamos). Si un país gasta más de lo que recibe por su cuenta corriente, esa diferencia se cubre necesariamente con una entrada neta de capital por la cuenta financiera: ambas cuentas son dos caras de la misma moneda.',
        },
        {
          type: 'formula',
          label: 'La identidad ahorro-inversión-cuenta corriente',
          text: 'Cuenta corriente = Ahorro nacional − Inversión',
        },
        {
          type: 'paragraph',
          text: 'Esta identidad viene directamente de las cuentas nacionales: si un país invierte más de lo que ahorra internamente, esa brecha solo puede cerrarse importando ahorro desde el resto del mundo, lo que equivale exactamente a tener un déficit de cuenta corriente. Al revés, un país cuyo ahorro nacional supera a su inversión doméstica está, en los hechos, prestando ese ahorro sobrante al resto del mundo, y su cuenta corriente muestra superávit.',
        },
        {
          type: 'example',
          title: 'Ejemplo: calculando el saldo de cuenta corriente',
          text: 'Supongamos que Perú registra, en un año, un ahorro nacional de US$ 46.000 millones y una inversión total de US$ 52.000 millones. Aplicando la identidad, la cuenta corriente es 46.000 − 52.000 = −6.000: un déficit de cuenta corriente de US$ 6.000 millones, que el país financia atrayendo ahorro desde el resto del mundo, por ejemplo mediante inversión extranjera directa o préstamos internacionales.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Deudor neto versus acreedor neto',
          text: 'Un déficit de cuenta corriente en un solo año no es alarmante por sí mismo, pero si un país acumula déficits año tras año, va sumando pasivos frente al resto del mundo y se convierte en deudor neto: debe, en conjunto, más de lo que le deben. Un país con superávits sostenidos ocurre lo contrario y se convierte en acreedor neto, como algunas economías exportadoras que ahorran sistemáticamente más de lo que invierten en casa.',
        },
      ],
      exercises: [
        {
          id: 'u15-l1-e1',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'Un país tiene un ahorro nacional de US$ 70.000 millones y una inversión total de US$ 95.000 millones durante el año. ¿A cuántos millones de dólares asciende el déficit de cuenta corriente?',
          unitLabel: 'US$ millones',
          answer: 25000,
          hint: 'El déficit es la diferencia entre la inversión y el ahorro nacional.',
          explanation:
            'Déficit = Inversión − Ahorro nacional = 95.000 − 70.000 = 25.000 millones de dólares (equivalente a una cuenta corriente de −25.000 según la identidad Cuenta corriente = Ahorro nacional − Inversión).',
        },
        {
          id: 'u15-l1-e2',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Un país mantiene, durante varios años consecutivos, una inversión total mayor que su ahorro nacional. ¿Qué implica esto sobre su cuenta corriente y su posición frente al resto del mundo?',
          options: [
            {
              id: 'a',
              text: 'Tiene déficit de cuenta corriente porque invierte más de lo que ahorra, y debe financiar la diferencia con ahorro externo, acumulando deuda con el resto del mundo',
            },
            { id: 'b', text: 'Tiene superávit de cuenta corriente, porque una mayor inversión siempre genera más ingresos externos' },
            { id: 'c', text: 'La cuenta corriente no tiene relación con el ahorro y la inversión, sino solo con el tipo de cambio' },
            { id: 'd', text: 'El país se convierte automáticamente en acreedor neto del resto del mundo' },
          ],
          correctOptionId: 'a',
          explanation:
            'Por la identidad Cuenta corriente = Ahorro nacional − Inversión, cuando la inversión supera al ahorro nacional la cuenta corriente es negativa (déficit). Ese déficit se financia con ahorro externo, y si se repite en el tiempo el país acumula deuda frente al resto del mundo.',
        },
        {
          id: 'u15-l1-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Durante una década, el país Z mantiene una inversión promedio de 24% del PIB y un ahorro nacional promedio de 19% del PIB, año tras año.',
          question: '¿Qué le ocurre, con mayor probabilidad, a la posición del país Z frente al resto del mundo a lo largo de esa década?',
          options: [
            {
              id: 'a',
              text: 'Acumula déficits de cuenta corriente sostenidos (cercanos a 5% del PIB anual), lo que lo va convirtiendo gradualmente en un mayor deudor neto frente al resto del mundo',
            },
            {
              id: 'b',
              text: 'Como la inversión es alta, el país se convierte en acreedor neto, porque invertir siempre mejora la posición externa',
            },
            { id: 'c', text: 'El ahorro y la inversión no determinan la cuenta corriente, así que no se puede saber qué ocurre con su deuda externa' },
            { id: 'd', text: 'La brecha entre ahorro e inversión se cierra automáticamente, sin que se necesite ningún financiamiento externo' },
          ],
          correctOptionId: 'a',
          explanation:
            'Con inversión sistemáticamente mayor que el ahorro nacional, el país necesita financiamiento externo todos los años. Esos déficits de cuenta corriente sostenidos se van acumulando como deuda externa, aumentando su posición de deudor neto frente al resto del mundo.',
        },
        {
          id: 'u15-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 15,
          prompt:
            'Explica qué significa que un país tenga déficit de cuenta corriente, cómo se relaciona esto con su ahorro y su inversión nacional, y qué implica para su posición como deudor o acreedor frente al resto del mundo.',
          keyPoints: [
            {
              id: 'deficit_savings_investment',
              label: 'Explica que el déficit de cuenta corriente ocurre cuando la inversión nacional supera al ahorro nacional',
              synonyms: [
                'inversion mayor que el ahorro',
                'invierte mas de lo que ahorra',
                'ahorro insuficiente',
                'brecha entre ahorro e inversion',
                'el pais ahorra menos de lo que invierte',
                'falta de ahorro domestico',
                'inversion supera al ahorro',
              ],
            },
            {
              id: 'external_financing',
              label: 'Señala que esa diferencia se financia atrayendo ahorro o capital desde el resto del mundo',
              synonyms: [
                'ahorro externo',
                'capital extranjero',
                'financiamiento externo',
                'entra capital del exterior',
                'inversion extranjera',
                'prestamos del exterior',
                'flujos de capital desde afuera',
                'se endeuda con el resto del mundo',
              ],
            },
            {
              id: 'net_debtor_position',
              label: 'Relaciona los déficits sostenidos en el tiempo con volverse un deudor neto frente al resto del mundo',
              synonyms: [
                'deudor neto',
                'acumula deuda externa',
                'debe mas al resto del mundo',
                'posicion deudora',
                'aumenta su deuda externa',
                'pasivos externos',
                'se vuelve mas deudor con el tiempo',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Un país tiene déficit de cuenta corriente cuando su inversión total supera a su ahorro nacional: como no genera ahorro suficiente para financiar toda la inversión que realiza, necesita atraer ahorro externo, por ejemplo a través de inversión extranjera o préstamos desde el resto del mundo. Si esto se repite año tras año, el país va acumulando deuda externa y se convierte gradualmente en un deudor neto frente al resto del mundo, a diferencia de un país con superávits sostenidos, que se convierte en acreedor neto.',
          explanation:
            'Se espera que la respuesta explique la relación entre déficit de cuenta corriente e inversión mayor que ahorro nacional, mencione que la brecha se cubre con financiamiento externo, y conecte los déficits sostenidos con la acumulación de deuda externa y la posición de deudor neto.',
        },
        {
          id: 'u15-l1-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          chart: {
            xLabel: 'Cantidad de dólares',
            yLabel: 'Tipo de cambio ($/US$)',
            xMax: 90,
            yMax: 1200,
            lines: [
              { points: [{ x: 10, y: 1000 }, { x: 70, y: 200 } ], color: 'brand', label: 'D US$' },
              { points: [{ x: 10, y: 200 }, { x: 70, y: 1000 }], color: 'accent', label: 'O US$' },
            ],
            markers: [{ x: 40, y: 600, label: 'E', guides: true }],
            caption: 'Mercado cambiario: oferta y demanda de dólares.',
          },
          question: 'Observa el mercado cambiario. ¿Cuál es el tipo de cambio de equilibrio, en pesos por dólar?',
          unitLabel: '$/US$',
          answer: 600,
          hint: 'El tipo de cambio de equilibrio está donde se cruzan la oferta y la demanda de dólares.',
          explanation:
            'El cruce de ambas curvas (punto E) determina el tipo de cambio de equilibrio: $600 por dólar, con 40 unidades de divisas transadas, como muestran las guías punteadas.',
        },
        {
          id: 'u15-l1-e6',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Un país exporta $80.000 millones e importa $95.000 millones en bienes y servicios. ¿Cuál es su saldo de exportaciones netas, en millones? (usa signo negativo si hay déficit)',
          unitLabel: 'millones',
          answer: -15000,
          hint: 'Exportaciones netas = exportaciones − importaciones.',
          explanation: 'XN = 80.000 − 95.000 = −15.000 millones: el país tiene un déficit en su cuenta comercial.',
        },
      ],
    },
    {
      id: 'u15-l2',
      title: 'El mercado de divisas: tipo de cambio nominal y real, regímenes fijos y flotantes',
      summary: 'La diferencia entre tipo de cambio nominal y real, y entre un régimen cambiario flotante y uno fijo.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'El tipo de cambio nominal',
        },
        {
          type: 'paragraph',
          text: 'El tipo de cambio nominal es el precio de una moneda en términos de otra: por ejemplo, cuántos pesos chilenos cuesta un dólar. Cuando se necesitan más pesos para comprar el mismo dólar, decimos que el peso se depreció; cuando se necesitan menos pesos, el peso se apreció. Estos movimientos ocurren todos los días en el mercado de divisas, donde se compran y venden monedas de distintos países.',
        },
        {
          type: 'heading',
          text: 'El tipo de cambio real: ajustando por precios',
        },
        {
          type: 'paragraph',
          text: 'El tipo de cambio nominal por sí solo no dice si los productos de un país son baratos o caros comparados con los del resto del mundo, porque no considera cómo evolucionan los precios en cada país. El tipo de cambio real corrige eso: ajusta el tipo de cambio nominal por la diferencia entre el nivel de precios doméstico y el nivel de precios extranjero, y por eso es el indicador relevante para saber qué tan competitivas son las exportaciones de un país.',
        },
        {
          type: 'formula',
          label: 'Tipo de cambio real',
          text: 'Tipo de cambio real = Tipo de cambio nominal × (Nivel de precios doméstico / Nivel de precios extranjero)',
        },
        {
          type: 'example',
          title: 'Ejemplo: calculando el tipo de cambio real',
          text: 'En Chile, el tipo de cambio nominal es de $900 pesos chilenos por dólar. Si el índice de precios domésticos es 110 y el índice de precios en Estados Unidos es 100 (ambos con el mismo año base), el tipo de cambio real es 900 × (110/100) = 990. Ese número más alto refleja que, ajustando por la diferencia de precios entre ambos países, los bienes chilenos se volvieron relativamente más caros que los estadounidenses, lo que resta competitividad a las exportaciones chilenas.',
        },
        {
          type: 'heading',
          text: 'Regímenes cambiarios: flotante y fijo',
        },
        {
          type: 'paragraph',
          text: 'En un régimen de tipo de cambio flotante, el valor de la moneda lo determina libremente la oferta y demanda en el mercado de divisas, y el banco central no se compromete a defender ningún nivel en particular. En un régimen de tipo de cambio fijo, en cambio, el banco central se compromete a mantener la moneda a un valor determinado frente a otra (por ejemplo, el dólar), y para sostener ese compromiso debe comprar o vender su moneda usando sus reservas internacionales cada vez que el mercado presiona el tipo de cambio en otra dirección; si las reservas se agotan, el régimen fijo puede volverse insostenible.',
        },
      ],
      exercises: [
        {
          id: 'u15-l2-e1',
          type: 'numeric',
          difficulty: 'facil',
          xp: 10,
          question:
            'El tipo de cambio nominal entre el peso chileno y el dólar es de $900 por dólar. El índice de precios domésticos es 110 y el índice de precios en Estados Unidos es 100, ambos con el mismo año base. Usando la fórmula del tipo de cambio real, ¿cuál es su valor?',
          unitLabel: '$',
          answer: 990,
          hint: 'Tipo de cambio real = Tipo de cambio nominal × (precios domésticos / precios extranjeros).',
          explanation: 'Tipo de cambio real = 900 × (110 / 100) = 900 × 1,1 = 990.',
        },
        {
          id: 'u15-l2-e2',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            'Los precios en el país doméstico suben más rápido que los precios en el resto del mundo, mientras el tipo de cambio nominal se mantiene sin cambios. ¿Qué le ocurre al tipo de cambio real y a la competitividad de las exportaciones?',
          options: [
            {
              id: 'a',
              text: 'El tipo de cambio real se aprecia y las exportaciones pierden competitividad, porque los bienes domésticos se vuelven relativamente más caros aunque el tipo de cambio nominal no se haya movido',
            },
            { id: 'b', text: 'El tipo de cambio real no cambia, porque solo depende del tipo de cambio nominal' },
            { id: 'c', text: 'Las exportaciones ganan competitividad, porque precios domésticos más altos generan más ingresos' },
            { id: 'd', text: 'El tipo de cambio real se deprecia automáticamente para compensar la inflación doméstica' },
          ],
          correctOptionId: 'a',
          explanation:
            'Como el tipo de cambio real ajusta por precios relativos, un alza de precios domésticos más rápida que la externa lo hace subir (apreciarse) aunque el nominal no se mueva, encareciendo los bienes del país frente a los del resto del mundo y restando competitividad exportadora.',
        },
        {
          id: 'u15-l2-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'El banco central del país W mantiene un tipo de cambio fijo de 10 unidades monetarias por dólar. Ante una fuerte salida de capitales, vende dólares de sus reservas internacionales, mes tras mes, para sostener esa paridad. Después de varios meses, las reservas internacionales están casi agotadas.',
          question: '¿Qué es lo más probable que ocurra a continuación?',
          options: [
            {
              id: 'a',
              text: 'El banco central se ve forzado a abandonar el tipo de cambio fijo y dejar que la moneda se deprecie, porque ya no tiene reservas suficientes para seguir defendiendo la paridad',
            },
            { id: 'b', text: 'El tipo de cambio real deja de tener sentido y no se puede seguir calculando' },
            { id: 'c', text: 'El país pasa automáticamente a tener superávit de cuenta corriente' },
            { id: 'd', text: 'La inflación en el resto del mundo sube como consecuencia directa' },
          ],
          correctOptionId: 'a',
          explanation:
            'Un régimen de tipo de cambio fijo solo se sostiene mientras el banco central tenga reservas internacionales suficientes para comprar o vender su moneda en la magnitud que exige el mercado. Cuando las reservas se agotan, ya no puede seguir defendiendo la paridad y se ve forzado a devaluar o dejar flotar la moneda.',
        },
        {
          id: 'u15-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 15,
          prompt:
            'Explica la diferencia entre el tipo de cambio nominal y el tipo de cambio real, y por qué esta distinción importa para la competitividad de las exportaciones de un país.',
          keyPoints: [
            {
              id: 'nominal_definition',
              label: 'Define el tipo de cambio nominal como el precio de una moneda en términos de otra',
              synonyms: [
                'precio de una moneda en otra',
                'pesos por dolar',
                'cuantos pesos vale un dolar',
                'conversion entre monedas',
                'tasa de conversion',
                'precio relativo de las monedas',
              ],
            },
            {
              id: 'real_definition',
              label: 'Explica que el tipo de cambio real ajusta el nominal por la diferencia entre los niveles de precios de ambos países',
              synonyms: [
                'ajusta por los precios',
                'nivel de precios relativo',
                'inflacion relativa',
                'poder de compra entre paises',
                'compara precios domesticos y extranjeros',
                'ajustado por inflacion',
              ],
            },
            {
              id: 'competitiveness_link',
              label: 'Relaciona una apreciación del tipo de cambio real con una pérdida de competitividad de las exportaciones',
              synonyms: [
                'pierde competitividad',
                'exportaciones mas caras',
                'se aprecia el tipo de cambio real',
                'productos nacionales mas caros afuera',
                'menos competitivo',
                'encarece las exportaciones',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'El tipo de cambio nominal es simplemente el precio de una moneda en términos de otra, por ejemplo cuántos pesos cuesta un dólar. El tipo de cambio real, en cambio, ajusta ese número por la diferencia entre el nivel de precios doméstico y el extranjero, y por eso refleja mejor el poder de compra real entre países. Esta distinción importa porque, si los precios domésticos suben más rápido que los externos, el tipo de cambio real se aprecia y los productos nacionales se vuelven relativamente más caros para el resto del mundo, aunque el tipo de cambio nominal no se haya movido, lo que resta competitividad a las exportaciones.',
          explanation:
            'Una buena respuesta distingue claramente el tipo de cambio nominal (precio de una moneda en otra) del real (ajustado por precios relativos), y explica que un tipo de cambio real más apreciado implica menor competitividad exportadora.',
        },
        {
          id: 'u15-l2-e5',
          type: 'multiple_choice',
          difficulty: 'dificil',
          xp: 20,
          chart: {
            xLabel: 'Cantidad de dólares',
            yLabel: 'Tipo de cambio ($/US$)',
            xMax: 90,
            yMax: 1200,
            lines: [
              { points: [{ x: 10, y: 1000 }, { x: 70, y: 200 }], color: 'muted', dashed: true, label: 'D₁' },
              { points: [{ x: 10, y: 1200 }, { x: 70, y: 400 }], color: 'brand', label: 'D₂' },
              { points: [{ x: 10, y: 200 }, { x: 70, y: 1000 }], color: 'accent', label: 'O US$' },
            ],
            markers: [
              { x: 40, y: 600, label: 'E₁' },
              { x: 50, y: 733, label: 'E₂' },
            ],
            caption: 'Un aumento de la demanda de dólares desplaza la curva de D₁ a D₂.',
          },
          question: 'La demanda de dólares aumenta (de D₁ a D₂) porque los inversionistas locales quieren comprar más activos en el extranjero. ¿Qué le ocurre a la moneda local?',
          options: [
            { id: 'a', text: 'Se deprecia: se necesitan más pesos para comprar un dólar (el tipo de cambio sube)' },
            { id: 'b', text: 'Se aprecia: se necesitan menos pesos por dólar' },
            { id: 'c', text: 'No cambia, porque la oferta de dólares es fija' },
            { id: 'd', text: 'Se aprecia y además caen las importaciones' },
          ],
          correctOptionId: 'a',
          explanation:
            'Al aumentar la demanda de dólares, su precio en pesos sube: el tipo de cambio pasa de $600 a más de $700 por dólar. Que se necesiten más pesos por cada dólar significa que el peso perdió valor relativo, es decir, se depreció. Una depreciación abarata las exportaciones del país y encarece sus importaciones.',
        },
        {
          id: 'u15-l2-e6',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '¿Qué diferencia al tipo de cambio REAL del tipo de cambio nominal?',
          options: [
            { id: 'a', text: 'El real ajusta por los precios relativos de ambos países: mide cuántos bienes extranjeros se obtienen por un bien local' },
            { id: 'b', text: 'El real es el que publican los bancos cada mañana' },
            { id: 'c', text: 'El real siempre es mayor que el nominal' },
            { id: 'd', text: 'No hay diferencia: son dos nombres para lo mismo' },
          ],
          correctOptionId: 'a',
          explanation:
            'El tipo de cambio nominal es simplemente el precio de una moneda en términos de otra. El real incorpora además los niveles de precios de ambos países, respondiendo a la pregunta económicamente relevante: cuántos bienes del extranjero puedo obtener a cambio de un bien producido localmente. Es el que determina la competitividad de las exportaciones.',
        },
      ],
    },
    {
      id: 'u15-l3',
      title: 'Cómo funciona la política económica en una economía abierta',
      summary:
        'Por qué la política monetaria es más potente con tipo de cambio flotante y la fiscal pierde fuerza, y por qué ocurre lo contrario con tipo de cambio fijo.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'Un canal adicional: el tipo de cambio',
        },
        {
          type: 'paragraph',
          text: 'En una economía cerrada, la política monetaria y la política fiscal afectan al producto principalmente a través de la tasa de interés y su efecto sobre el consumo y la inversión. En una economía abierta aparece un canal adicional: cualquier cambio en la tasa de interés doméstica también mueve el tipo de cambio, y el tipo de cambio afecta a las exportaciones netas. Ese canal cambiario es justamente lo que hace que la potencia relativa de la política monetaria y la fiscal dependa del régimen cambiario que tenga el país.',
        },
        {
          type: 'heading',
          text: 'Con tipo de cambio flotante',
        },
        {
          type: 'paragraph',
          text: 'Cuando el banco central baja su tasa de interés de referencia, los capitales tienden a salir buscando mejores retornos en otros países, lo que deprecia la moneda local; esa depreciación abarata las exportaciones y encarece las importaciones, así que las exportaciones netas suben y refuerzan el impulso inicial sobre el producto. La política fiscal, en cambio, pierde fuerza: un mayor gasto público financiado con deuda tiende a subir las tasas de interés domésticas, lo que atrae capitales del exterior, aprecia la moneda, y reduce las exportaciones netas, contrarrestando parte del estímulo fiscal original.',
        },
        {
          type: 'example',
          title: 'Ejemplo: el canal cambiario en acción',
          text: 'Si el banco central de un país con tipo de cambio flotante baja su tasa de interés en 1 punto porcentual y, como consecuencia, la moneda se deprecia un 5%, las exportaciones se vuelven más baratas para los compradores extranjeros y las importaciones más caras para los consumidores locales. Ese movimiento del tipo de cambio suma un impulso adicional sobre el producto, por encima del efecto que ya tenía la tasa de interés más baja sobre el consumo y la inversión.',
        },
        {
          type: 'heading',
          text: 'Con tipo de cambio fijo',
        },
        {
          type: 'paragraph',
          text: 'Bajo un régimen de tipo de cambio fijo ocurre básicamente lo contrario. La política monetaria pierde su autonomía: si el banco central intentara bajar la tasa de interés, generaría salida de capitales y presión para depreciar la moneda, y para defender la paridad tendría que vender reservas o revertir la baja de tasas, por lo que en la práctica no puede usar la tasa de interés como herramienta independiente. La política fiscal, en cambio, gana potencia: como el banco central se compromete a evitar que el tipo de cambio se mueva, una expansión fiscal que sube la tasa de interés no llega a apreciar la moneda ni a reducir las exportaciones netas, así que el estímulo fiscal se transmite al producto sin ese freno cambiario.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'El trilema de la economía abierta',
          text: 'Este resultado refleja un dilema conocido como el "trilema" de la macroeconomía abierta: un país no puede tener simultáneamente libre movilidad de capitales, un tipo de cambio fijo y una política monetaria totalmente independiente. Debe renunciar a al menos una de las tres, y esa elección determina qué tan potente es cada herramienta de política económica.',
        },
      ],
      exercises: [
        {
          id: 'u15-l3-e1',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Tras una política monetaria expansiva, el tipo de cambio pasa de $850 a $900 pesos chilenos por dólar (el peso se deprecia). Un exportador de fruta vende un cargamento por US$ 40.000. ¿Cuántos pesos chilenos adicionales recibe por esa venta, comparado con el tipo de cambio anterior?',
          unitLabel: '$',
          answer: 2000000,
          hint: 'Calcula el valor en pesos con cada tipo de cambio y resta.',
          explanation:
            'Con el tipo de cambio anterior recibía 850 × 40.000 = $34.000.000. Con el nuevo tipo de cambio recibe 900 × 40.000 = $36.000.000. La diferencia es $36.000.000 − $34.000.000 = $2.000.000 adicionales.',
        },
        {
          id: 'u15-l3-e2',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'En una economía con tipo de cambio flotante, el banco central baja su tasa de interés de referencia. ¿Por qué el canal cambiario tiende a amplificar el efecto expansivo sobre el producto?',
          options: [
            {
              id: 'a',
              text: 'Porque la tasa más baja genera salida de capitales, el peso se deprecia, y las exportaciones netas aumentan, sumándose al estímulo inicial',
            },
            { id: 'b', text: 'Porque la tasa más baja atrae capitales, aprecia la moneda, y encarece las importaciones' },
            { id: 'c', text: 'Porque el tipo de cambio flotante mantiene siempre el mismo valor sin importar la tasa de interés' },
            { id: 'd', text: 'Porque bajar la tasa de interés no tiene ningún efecto sobre el tipo de cambio' },
          ],
          correctOptionId: 'a',
          explanation:
            'Una tasa de interés más baja hace menos atractivo mantener capital en el país, lo que provoca salida de capitales y depreciación de la moneda. Esa depreciación abarata las exportaciones y encarece las importaciones, aumentando las exportaciones netas y reforzando el efecto expansivo original.',
        },
        {
          id: 'u15-l3-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'El gobierno del país V, que opera con tipo de cambio flotante, aprueba un fuerte aumento del gasto público financiado con deuda. Como consecuencia, las tasas de interés domésticas suben, lo que atrae capitales del exterior.',
          question: '¿Qué es lo más probable que ocurra con el tipo de cambio y con el efecto final del gasto público sobre el producto?',
          options: [
            {
              id: 'a',
              text: 'La moneda se aprecia, las exportaciones netas caen, y el estímulo fiscal sobre el producto se ve parcialmente contrarrestado por ese canal cambiario',
            },
            { id: 'b', text: 'La moneda se deprecia, lo que amplifica todavía más el estímulo fiscal sobre el producto' },
            { id: 'c', text: 'El tipo de cambio no reacciona porque el país tiene un régimen flotante' },
            { id: 'd', text: 'El aumento del gasto público reduce automáticamente las tasas de interés domésticas' },
          ],
          correctOptionId: 'a',
          explanation:
            'El mayor gasto público sube las tasas de interés domésticas, lo que atrae capital extranjero y aprecia la moneda. Esa apreciación encarece las exportaciones y abarata las importaciones, reduciendo las exportaciones netas y contrarrestando parte del impulso fiscal inicial: por eso la política fiscal es menos potente bajo tipo de cambio flotante.',
        },
        {
          id: 'u15-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 15,
          prompt:
            'Explica por qué, en una economía con tipo de cambio flotante, la política monetaria tiende a ser más potente para mover el producto que la política fiscal.',
          keyPoints: [
            {
              id: 'monetary_amplification',
              label:
                'Explica que una política monetaria expansiva deprecia la moneda y aumenta las exportaciones netas, amplificando el efecto sobre el producto',
              synonyms: [
                'deprecia la moneda',
                'aumentan las exportaciones netas',
                'el tipo de cambio amplifica el efecto',
                'baja la tasa y se deprecia el peso',
                'exportaciones mas competitivas',
                'refuerza el estimulo monetario',
              ],
            },
            {
              id: 'fiscal_crowding',
              label:
                'Explica que una política fiscal expansiva sube las tasas de interés, aprecia la moneda y reduce las exportaciones netas, contrarrestando parte del estímulo',
              synonyms: [
                'sube la tasa de interes',
                'aprecia la moneda',
                'caen las exportaciones netas',
                'efecto contrario al estimulo fiscal',
                'se contrarresta el gasto publico',
                'desplazamiento por el tipo de cambio',
              ],
            },
            {
              id: 'floating_regime_condition',
              label:
                'Señala que este resultado depende de que el tipo de cambio sea flotante, ya que con tipo de cambio fijo el efecto se invierte',
              synonyms: [
                'solo ocurre con tipo de cambio flotante',
                'con tipo de cambio fijo pasa lo contrario',
                'depende del regimen cambiario',
                'en un regimen fijo cambia el resultado',
                'condicionado al tipo de cambio flotante',
                'no pasa lo mismo con un tipo de cambio fijo',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Con tipo de cambio flotante, cuando el banco central baja la tasa de interés, el capital tiende a salir del país buscando mejores retornos afuera, lo que deprecia la moneda y hace más competitivas las exportaciones netas: ese canal cambiario se suma al estímulo inicial, amplificando el efecto sobre el producto. La política fiscal, en cambio, pierde fuerza: un mayor gasto público financiado con deuda tiende a subir las tasas de interés domésticas, lo que atrae capitales, aprecia la moneda y reduce las exportaciones netas, contrarrestando parte del estímulo fiscal inicial. Este resultado depende de que el tipo de cambio sea flotante; con tipo de cambio fijo, el banco central debe intervenir para sostener la paridad y el resultado se invierte.',
          explanation:
            'Se espera que la respuesta explique el canal cambiario que amplifica la política monetaria bajo flotación, el mecanismo que debilita la política fiscal por la apreciación de la moneda, y que reconozca que esto es específico del régimen de tipo de cambio flotante.',
        },
        {
          id: 'u15-l3-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          chart: {
            xLabel: 'Exportaciones netas',
            yLabel: 'Tipo de cambio real',
            xMax: 90,
            yMax: 110,
            lines: [{ points: [{ x: 10, y: 90 }, { x: 70, y: 30 }], color: 'brand', label: 'XN' }],
            markers: [{ x: 40, y: 60, guides: true }],
            caption: 'Relación entre el tipo de cambio real y las exportaciones netas.',
          },
          question: 'Según el gráfico, ¿cuál es el nivel de exportaciones netas cuando el tipo de cambio real es 60?',
          unitLabel: 'XN',
          answer: 40,
          hint: 'Sigue la línea horizontal desde 60 en el eje vertical hasta cruzar la recta de XN, y baja al eje horizontal.',
          explanation:
            'La curva de exportaciones netas es decreciente en el tipo de cambio real: cuando la moneda local se aprecia (tipo de cambio real más alto), los productos nacionales se encarecen frente a los extranjeros y las exportaciones netas caen. En un tipo de cambio real de 60, las XN son 40, según muestran las guías.',
        },
        {
          id: 'u15-l3-e6',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          chart: {
            xLabel: 'Exportaciones netas',
            yLabel: 'Tipo de cambio real',
            xMax: 90,
            yMax: 110,
            lines: [{ points: [{ x: 10, y: 90 }, { x: 70, y: 30 }], color: 'brand', label: 'XN' }],
            markers: [
              { x: 40, y: 60, label: 'A' },
              { x: 20, y: 80, label: 'B' },
            ],
            caption: 'La economía se mueve del punto A al punto B sobre la curva de exportaciones netas.',
          },
          scenario:
            'Una fuerte entrada de capitales aprecia la moneda local en términos reales, y la economía se mueve del punto A al punto B del gráfico.',
          question: '¿Qué consecuencia tiene esta apreciación real para el sector exportador?',
          options: [
            { id: 'a', text: 'Las exportaciones netas caen de 40 a 20: los productos locales se encarecen frente a los extranjeros y el sector exportador pierde competitividad' },
            { id: 'b', text: 'Las exportaciones netas suben, porque una moneda fuerte atrae más compradores' },
            { id: 'c', text: 'Las exportaciones netas no cambian, porque dependen solo del ingreso externo' },
            { id: 'd', text: 'Las importaciones caen y las exportaciones suben simultáneamente' },
          ],
          correctOptionId: 'a',
          explanation:
            'Una apreciación real encarece los bienes nacionales medidos en bienes extranjeros: los compradores externos demandan menos exportaciones y los locales prefieren más importaciones. En el gráfico, el movimiento de A a B a lo largo de la curva muestra la caída de las exportaciones netas de 40 a 20. Ese es el costo típico que enfrenta el sector exportador cuando entran capitales masivamente.',
        },
      ],
    },
  ],
};
