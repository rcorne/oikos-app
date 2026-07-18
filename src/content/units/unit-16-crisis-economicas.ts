import type { Unit } from '@/content/types';

export const unit16: Unit = {
  id: 'u16',
  index: 16,
  subject: 'macroeconomia',
  title: 'Crisis económicas y el sistema financiero global',
  subtitle: 'Por qué a veces todo se desmorona a la vez',
  description:
    'El sistema financiero conecta ahorro con inversión y reparte riesgos, pero esa misma interconexión lo hace frágil. Esta unidad explica por qué los bancos pueden quebrar por pánico, cómo colapsa un tipo de cambio fijo, y por qué las crisis saltan de un país a otro.',
  icon: 'warning-outline',
  color: '#8A3C28',
  source: 'ambos-macro',
  lessons: [
    {
      id: 'u16-l1',
      title: 'Qué hace el sistema financiero y por qué puede fallar',
      summary: 'Las funciones del sistema financiero y por qué un banco solvente puede quebrar por una corrida de depositantes.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'Qué hace el sistema financiero',
        },
        {
          type: 'paragraph',
          text: 'El sistema financiero —bancos, bolsas de valores, aseguradoras, fondos de inversión— cumple tres funciones que ninguna economía moderna podría prescindir. Primero, canaliza el ahorro de quienes tienen dinero disponible hacia quienes quieren invertirlo en proyectos productivos, sin que ahorristas y emprendedores necesiten conocerse. Segundo, permite repartir el riesgo: en lugar de que una sola persona financie por completo un proyecto incierto, muchos ahorristas asumen una fracción pequeña cada uno. Tercero, ayuda a resolver un problema de información: quien presta dinero rara vez conoce tan bien como el propio deudor si el proyecto es bueno o si el deudor cumplirá sus compromisos, y las instituciones financieras se especializan en evaluar y monitorear ese riesgo.',
        },
        {
          type: 'list',
          items: [
            'Intermediación: conecta el ahorro disponible con la inversión que lo necesita.',
            'Diversificación del riesgo: reparte el riesgo de cada proyecto entre muchos ahorristas en vez de concentrarlo en uno solo.',
            'Gestión de la información: evalúa la solvencia de quien pide prestado y vigila que use bien los fondos, algo que un ahorrista individual no podría hacer por su cuenta.',
          ],
        },
        {
          type: 'heading',
          text: 'Por qué un banco solvente puede quebrar de todas formas',
        },
        {
          type: 'paragraph',
          text: 'Un banco no guarda en una bóveda el dinero de cada depositante esperando a que lo retire. Recibe depósitos, mantiene solo una fracción pequeña en caja (el encaje o reserva) y presta la mayor parte del resto a hogares y empresas, a plazos que suelen ser mucho más largos que el tiempo que un depositante tardaría en pedir su dinero de vuelta. Esto funciona bien mientras solo un porcentaje reducido de depositantes pide efectivo cada día, porque ese es justamente el nivel que el encaje está pensado para cubrir.',
        },
        {
          type: 'example',
          title: 'Ejemplo: cuando todos piden su dinero a la vez',
          text: 'Un banco tiene depósitos por $10.000.000 y mantiene un encaje del 10%, es decir, $1.000.000 en caja; el resto, $9.000.000, está prestado a largo plazo. Un rumor —fundado o no— sobre problemas del banco hace que el 25% de los depositantes, es decir $2.500.000, exija retirar su dinero de inmediato. El banco solo tiene $1.000.000 disponibles en caja: le faltan $1.500.000 para cubrir esa demanda, porque el resto de su dinero sigue prestado y no puede recuperarse de un día para otro.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Solvencia no es lo mismo que liquidez',
          text: 'El banco del ejemplo puede ser perfectamente solvente: si se le diera tiempo para cobrar sus préstamos, sus activos totales superarían con holgura lo que debe a sus depositantes. El problema es de liquidez, no de solvencia: no puede convertir esos activos en efectivo con la velocidad que exige el pánico. Una corrida bancaria es, en ese sentido, una profecía que se cumple a sí misma: si todos los depositantes creen que los demás van a retirar su dinero, a cada uno le conviene retirar el suyo primero, aunque el banco fuera sano.',
        },
      ],
      exercises: [
        {
          id: 'u16-l1-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '¿Cuál de las siguientes describe correctamente una función del sistema financiero?',
          options: [
            { id: 'a', text: 'Canalizar el ahorro de las personas hacia proyectos de inversión que lo necesitan' },
            { id: 'b', text: 'Fijar los precios de todos los bienes de consumo de la economía' },
            { id: 'c', text: 'Garantizar que ninguna empresa pueda quebrar nunca' },
            { id: 'd', text: 'Eliminar por completo el riesgo de cualquier inversión' },
          ],
          correctOptionId: 'a',
          explanation:
            'El sistema financiero conecta a quienes ahorran con quienes quieren invertir, además de repartir riesgo y evaluar información sobre los deudores. No fija precios de bienes, no evita quiebras y no elimina el riesgo por completo: como mucho, lo reparte entre más personas.',
        },
        {
          id: 'u16-l1-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Un banco tiene depósitos por $10.000.000 y mantiene un encaje (reserva) del 10%. Si el 25% de los depositantes exige retirar su dinero de inmediato, ¿cuántos pesos le faltan al banco para cubrir ese retiro usando solo el efectivo que tiene en caja?',
          unitLabel: '$',
          answer: 1500000,
          hint: 'Calcula primero cuánto tiene en caja (el encaje) y cuánto le exigen retirar; la diferencia es lo que le falta.',
          explanation:
            'Encaje en caja = 10% × $10.000.000 = $1.000.000. Retiro exigido = 25% × $10.000.000 = $2.500.000. Faltante = $2.500.000 − $1.000.000 = $1.500.000.',
        },
        {
          id: 'u16-l1-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Un banco tiene una cartera de préstamos sólida: si se le diera tiempo, podría cobrar todos sus créditos y esos activos superarían ampliamente lo que debe a sus depositantes. Sin embargo, un video en redes sociales asegura falsamente que el banco está a punto de quebrar, y esa misma tarde miles de depositantes forman fila para retirar todo su dinero.',
          question: '¿Por qué puede quebrar este banco a pesar de ser solvente?',
          options: [
            {
              id: 'a',
              text: 'Porque solo mantiene en caja una fracción de los depósitos y no puede convertir sus préstamos en efectivo con la rapidez que exige el pánico de los depositantes',
            },
            { id: 'b', text: 'Porque en realidad sus activos valen menos que sus deudas, así que la quiebra es inevitable de todos modos' },
            { id: 'c', text: 'Porque la ley obliga a los bancos a cerrar apenas circula un rumor negativo sobre ellos' },
            { id: 'd', text: 'Porque los depositantes que retiran su dinero pierden automáticamente el derecho a recuperarlo' },
          ],
          correctOptionId: 'a',
          explanation:
            'El banco es solvente (sus activos superan sus pasivos), pero enfrenta un problema de liquidez: la mayor parte de los depósitos está prestada a plazos largos y no puede recuperarse de inmediato. Cuando muchos depositantes retiran a la vez, el banco se queda sin efectivo aunque, en el fondo, valga más de lo que debe.',
        },
        {
          id: 'u16-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 15,
          prompt:
            'Explica por qué un banco puede ser solvente y aun así sufrir una corrida bancaria, y qué papel juega el hecho de que los bancos prestan la mayor parte de los depósitos que reciben.',
          keyPoints: [
            {
              id: 'fractional_lending',
              label: 'Explica que los bancos prestan la mayor parte de los depósitos y solo guardan una fracción en caja',
              synonyms: [
                'prestan la mayoria de los depositos',
                'encaje fraccionario',
                'reserva fraccionaria',
                'solo guardan una fraccion en caja',
                'no tienen todo el dinero disponible',
                'prestan casi todo el deposito',
                'reserva parcial',
              ],
            },
            {
              id: 'solvency_vs_liquidity',
              label: 'Distingue solvencia (activos mayores que pasivos) de liquidez (poder pagar de inmediato)',
              synonyms: [
                'solvente pero iliquido',
                'solvencia distinta de liquidez',
                'los activos superan los pasivos',
                'no puede convertir en efectivo rapido',
                'le falta efectivo aunque valga mas',
                'problema de liquidez no de solvencia',
              ],
            },
            {
              id: 'bank_run_panic',
              label: 'Explica que una corrida bancaria es un pánico que se autocumple: si todos retiran a la vez, el banco no puede pagar aunque sea sano',
              synonyms: [
                'corrida bancaria',
                'panico bancario',
                'todos retiran al mismo tiempo',
                'profecia autocumplida',
                'el panico se retroalimenta',
                'retiro masivo simultaneo',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Un banco solo guarda en caja una fracción pequeña de los depósitos (el encaje) y presta el resto a plazos largos. Mientras pocos depositantes pidan su dinero cada día, eso funciona bien. Pero si un rumor hace que muchos depositantes intenten retirar todo a la vez, el banco no tiene ese efectivo disponible, aunque sea perfectamente solvente: el problema es de liquidez, no de que el banco valga menos de lo que debe. Por eso una corrida bancaria puede ser una profecía autocumplida: si cada depositante cree que los demás van a retirar, le conviene retirar primero.',
          explanation:
            'Se espera que la respuesta mencione que los bancos prestan la mayoría de los depósitos, distinga solvencia de liquidez, y explique el carácter autocumplido del pánico en una corrida bancaria.',
        },
      ],
    },
    {
      id: 'u16-l2',
      title: 'Anatomía de una crisis cambiaria',
      summary: 'Cómo un ataque especulativo agota las reservas de un banco central y por qué la deuda en dólares amplifica el daño de una devaluación.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'Cómo se defiende (y cómo cae) un tipo de cambio fijo',
        },
        {
          type: 'paragraph',
          text: 'Cuando un banco central fija el tipo de cambio de su moneda, se compromete a comprar o vender la moneda local al precio anunciado, todas las veces que sea necesario. Si los inversionistas empiezan a dudar de que ese compromiso sea sostenible —por ejemplo, porque el país gasta más de lo que le entra en dólares— comienzan a vender la moneda local en masa, apostando a que se devaluará. Para sostener la paridad, el banco central debe comprar esa moneda local que todos quieren vender, pagando con sus reservas internacionales (los dólares u otras divisas que tiene guardados).',
        },
        {
          type: 'example',
          title: 'Ejemplo: cuánto duran las reservas bajo ataque',
          text: 'El Banco Central de un país mantiene un tipo de cambio fijo y cuenta con reservas internacionales por USD 18.000 millones. Ante rumores de devaluación, los inversionistas venden la moneda local masivamente y el Banco Central pierde en promedio USD 900 millones de reservas por semana comprando esa moneda para sostener la paridad. A ese ritmo, en 18.000 / 900 = 20 semanas el Banco Central se quedaría sin reservas.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'El desenlace: devaluar o flotar',
          text: 'Ningún banco central tiene reservas infinitas. Cuando estas se acercan a agotarse, ya no puede seguir comprando su propia moneda al precio fijado, y se ve forzado a devaluar (fijar un nuevo tipo de cambio más alto) o a dejarla flotar libremente. En ambos casos, la moneda local termina valiendo menos dólares que antes del ataque.',
        },
        {
          type: 'heading',
          text: 'La trampa de la deuda en dólares',
        },
        {
          type: 'formula',
          label: 'Valor de una deuda externa en moneda local',
          text: 'Deuda en moneda local = Deuda en USD × Tipo de cambio',
        },
        {
          type: 'paragraph',
          text: 'Un país (o una empresa, o un gobierno) que se endeudó en dólares debe seguir pagando esa deuda en dólares, sin importar lo que pase con su propia moneda. El problema es que, medida en moneda local, el tamaño de esa deuda depende directamente del tipo de cambio: si la moneda local se devalúa, la misma deuda en dólares —que no aumentó ni un centavo— pasa a representar muchos más pesos, reales o soles que antes. Por eso los países con mucha deuda externa en moneda extranjera son especialmente vulnerables: justo cuando una devaluación golpea su economía, el peso de esa deuda se dispara medido en su propia moneda.',
        },
        {
          type: 'example',
          title: 'Ejemplo: una devaluación que encarece la deuda',
          text: 'Una empresa debe USD 8 millones a acreedores extranjeros. Con el tipo de cambio fijo en 600 pesos por dólar, esa deuda equivale a 600 × 8.000.000 = $4.800.000.000 en pesos. Tras el colapso del tipo de cambio fijo, la moneda se devalúa y el nuevo tipo de cambio es 900 pesos por dólar. La misma deuda de USD 8 millones —ni un dólar más— ahora vale 900 × 8.000.000 = $7.200.000.000 en pesos: un aumento de $2.400.000.000, es decir, un 50% más, sin que la empresa haya pedido nada adicional prestado.',
        },
      ],
      exercises: [
        {
          id: 'u16-l2-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'Un país mantiene un tipo de cambio fijo. Los inversionistas dudan de que el Banco Central pueda sostenerlo y venden masivamente la moneda local. ¿Qué debe hacer el Banco Central para defender la paridad?',
          options: [
            { id: 'a', text: 'Comprar la moneda local usando sus reservas internacionales (dólares u otras divisas)' },
            { id: 'b', text: 'Imprimir más moneda local para satisfacer toda la demanda de venta' },
            { id: 'c', text: 'Subir los aranceles a las importaciones de bienes de consumo' },
            { id: 'd', text: 'No hacer nada: el tipo de cambio fijo no requiere intervención del Banco Central' },
          ],
          correctOptionId: 'a',
          explanation:
            'Defender un tipo de cambio fijo obliga al Banco Central a comprar la moneda local que los inversionistas venden, pagando con sus reservas internacionales. Si esas reservas se agotan, ya no puede seguir sosteniendo la paridad.',
        },
        {
          id: 'u16-l2-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una empresa debe USD 8 millones. Con el tipo de cambio fijo en 600 pesos por dólar, esa deuda equivale a $4.800.000.000. Tras una devaluación, el tipo de cambio pasa a 900 pesos por dólar. ¿En qué porcentaje aumentó el valor en pesos de la deuda de la empresa?',
          unitLabel: '%',
          answer: 50,
          tolerance: 0,
          hint: 'Calcula el nuevo valor en pesos de la deuda y compáralo con el valor original.',
          explanation:
            'Valor original = 600 × 8.000.000 = $4.800.000.000. Valor nuevo = 900 × 8.000.000 = $7.200.000.000. Aumento = (7.200.000.000 − 4.800.000.000) / 4.800.000.000 × 100 = 50%.',
        },
        {
          id: 'u16-l2-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Tras meses de ataque especulativo, las reservas internacionales del Banco Central de un país caen de USD 20.000 millones a USD 2.000 millones en pocas semanas, mientras sigue intentando sostener el tipo de cambio fijo comprando su propia moneda.',
          question: '¿Qué es lo más probable que ocurra a continuación?',
          options: [
            {
              id: 'a',
              text: 'El Banco Central se ve forzado a devaluar la moneda o dejarla flotar, porque no puede seguir comprando moneda local con reservas que ya casi no tiene',
            },
            { id: 'b', text: 'El tipo de cambio fijo se sostiene indefinidamente sin ningún costo para el Banco Central' },
            { id: 'c', text: 'Los inversionistas dejan de vender la moneda local automáticamente al ver caer las reservas' },
            { id: 'd', text: 'El Banco Central puede imprimir dólares propios para reponer sus reservas internacionales' },
          ],
          correctOptionId: 'a',
          explanation:
            'Las reservas internacionales son finitas. Cuando se acercan a agotarse, el Banco Central ya no puede seguir comprando su propia moneda para defender la paridad, y se ve obligado a devaluar o a dejar que el tipo de cambio flote libremente.',
        },
        {
          id: 'u16-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 20,
          prompt:
            'Explica cómo un ataque especulativo puede agotar las reservas de un Banco Central y forzar el fin de un tipo de cambio fijo, y por qué la deuda externa en dólares hace más vulnerable a un país cuando finalmente se devalúa la moneda.',
          keyPoints: [
            {
              id: 'speculative_attack',
              label: 'Explica que los inversionistas venden la moneda local y el Banco Central debe comprarla con sus reservas para sostener la paridad',
              synonyms: [
                'venden la moneda local en masa',
                'banco central compra con sus reservas',
                'defiende la paridad',
                'ataque especulativo',
                'venta masiva de la moneda',
                'vender la moneda local y comprar dolares',
              ],
            },
            {
              id: 'reserves_exhaustion',
              label: 'Señala que las reservas son limitadas y su agotamiento fuerza la devaluación o la flotación de la moneda',
              synonyms: [
                'las reservas se agotan',
                'sin reservas no puede defender el tipo de cambio',
                'fin del tipo de cambio fijo',
                'devaluar o dejar flotar',
                'se queda sin dolares',
                'reservas internacionales limitadas',
              ],
            },
            {
              id: 'fx_debt_vulnerability',
              label: 'Explica que la deuda en dólares aumenta su valor en moneda local tras una devaluación, encareciendo la carga de la deuda',
              synonyms: [
                'la deuda en dolares se encarece',
                'sube el valor en moneda local de la deuda',
                'aumenta la carga de la deuda',
                'deuda en moneda extranjera',
                'descalce de moneda',
                'vulnerabilidad cambiaria de la deuda externa',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Cuando los inversionistas dudan de un tipo de cambio fijo, venden la moneda local en masa y el Banco Central debe comprarla usando sus reservas internacionales para sostener la paridad. Como esas reservas son limitadas, si el ataque especulativo continúa, el Banco Central termina sin dólares para seguir defendiendo el tipo de cambio y se ve forzado a devaluar o a dejarlo flotar. Esto golpea especialmente fuerte a los países con mucha deuda externa en dólares, porque esa deuda no cambia en dólares, pero medida en moneda local se encarece de golpe apenas la moneda pierde valor.',
          explanation:
            'Una buena respuesta explica el mecanismo del ataque especulativo y el agotamiento de reservas, y conecta la devaluación con el encarecimiento de la deuda externa denominada en moneda extranjera.',
        },
      ],
    },
    {
      id: 'u16-l3',
      title: 'Contagio, globalización y lecciones de política pública',
      summary: 'Por qué las crisis financieras saltan entre países parecidos, y qué defensas reducen la vulnerabilidad de una economía.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'El efecto contagio',
        },
        {
          type: 'paragraph',
          text: 'La globalización financiera conecta a países que comercian entre sí o que reciben capital de los mismos inversionistas internacionales. Esa interconexión trae beneficios en tiempos normales, pero también un riesgo: cuando estalla una crisis en un país, los inversionistas —que muchas veces no tienen tiempo ni información suficiente para evaluar en detalle cada economía— tienden a agrupar a países con características parecidas (deuda externa alta, tipo de cambio bajo presión, sistema bancario frágil) y retiran capital de todos ellos por precaución, aunque algunos no tengan los mismos problemas. A esto se le llama efecto contagio.',
        },
        {
          type: 'example',
          title: 'Ejemplo: por qué un país "parecido" sufre más',
          text: 'El país A tiene reservas internacionales por USD 30.000 millones frente a una deuda externa de corto plazo (la que vence dentro de doce meses) de USD 25.000 millones: sus reservas alcanzan con holgura para cubrir esos vencimientos. El país B, vecino de A y con una estructura exportadora parecida, tiene reservas por solo USD 12.000 millones frente a una deuda externa de corto plazo de USD 18.000 millones: le faltarían USD 6.000 millones para cubrir sus vencimientos inmediatos solo con reservas propias. Cuando estalla una crisis en un tercer país de la región, los inversionistas retiran capital tanto de A como de B por precaución, pero B —por su posición financiera más débil— sufre una fuga de capitales mucho más severa.',
        },
        {
          type: 'formula',
          label: 'Regla básica de cobertura de reservas',
          text: 'Reservas internacionales ≥ Deuda externa de corto plazo',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Una regla práctica',
          text: 'Muchos analistas usan esta comparación —conocida como la regla de Guidotti-Greenspan— como primer chequeo de vulnerabilidad: si un país tiene reservas suficientes para cubrir toda su deuda externa que vence en el próximo año, puede enfrentar una fuga de capitales sin verse forzado a una devaluación desordenada.',
        },
        {
          type: 'heading',
          text: 'Cómo se blindan los países frente al contagio',
        },
        {
          type: 'list',
          items: [
            'Reservas internacionales adecuadas: un colchón de dólares suficiente para cubrir los vencimientos de deuda externa de corto plazo y financiar importaciones esenciales durante varios meses.',
            'Deuda externa manejable: evitar depender excesivamente de deuda en moneda extranjera, sobre todo de corto plazo, que se vuelve mucho más cara si la moneda local se devalúa.',
            'Sistemas bancarios bien regulados y supervisados: bancos con capital suficiente y buena gestión de riesgo son menos propensos a corridas y menos vulnerables a un shock externo.',
            'Tipos de cambio creíbles: un régimen cambiario que el mercado percibe como sostenible en el tiempo reduce los incentivos a un ataque especulativo.',
          ],
        },
      ],
      exercises: [
        {
          id: 'u16-l3-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'Tras una crisis financiera en el país X, los inversionistas retiran capitales también del país Y, que no comparte frontera con X pero sí una estructura económica parecida (alta deuda externa de corto plazo, tipo de cambio bajo presión). ¿Cómo se llama este fenómeno?',
          options: [
            { id: 'a', text: 'Efecto contagio' },
            { id: 'b', text: 'Hiperinflación' },
            { id: 'c', text: 'Estanflación' },
            { id: 'd', text: 'Proteccionismo comercial' },
          ],
          correctOptionId: 'a',
          explanation:
            'El efecto contagio ocurre cuando una crisis en un país lleva a los inversionistas a retirar capital también de otros países con características económicas o financieras parecidas, aunque no compartan frontera ni hayan tenido el mismo problema original.',
        },
        {
          id: 'u16-l3-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'El país B tiene reservas internacionales por USD 12.000 millones y una deuda externa de corto plazo de USD 18.000 millones. Según la regla de que las reservas deberían cubrir al menos la deuda de corto plazo, ¿cuántos millones de dólares le faltan en reservas al país B?',
          unitLabel: 'millones de USD',
          answer: 6000,
          hint: 'Compara las reservas disponibles con la deuda de corto plazo que deberían cubrir.',
          explanation: 'Faltante = Deuda de corto plazo − Reservas = USD 18.000 millones − USD 12.000 millones = USD 6.000 millones.',
        },
        {
          id: 'u16-l3-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'El gobierno de un país emergente evalúa distintas medidas antes de que estalle una crisis en la región, con el objetivo de reducir su vulnerabilidad a un eventual contagio financiero.',
          question: '¿Cuál de las siguientes medidas reduce mejor la vulnerabilidad del país frente a un contagio financiero?',
          options: [
            {
              id: 'a',
              text: 'Acumular reservas internacionales suficientes y mantener la deuda externa de corto plazo en niveles manejables',
            },
            { id: 'b', text: 'Eliminar toda regulación y supervisión bancaria para atraer más capital extranjero' },
            { id: 'c', text: 'Fijar el tipo de cambio sin ningún respaldo de reservas, como señal de confianza' },
            { id: 'd', text: 'Aumentar la deuda externa de corto plazo para financiar más gasto público de inmediato' },
          ],
          correctOptionId: 'a',
          explanation:
            'Reservas adecuadas y deuda externa manejable son dos de las defensas más citadas frente al contagio financiero, junto con un sistema bancario bien regulado y un tipo de cambio creíble. Las otras opciones aumentan, en lugar de reducir, la vulnerabilidad del país.',
        },
        {
          id: 'u16-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 15,
          prompt:
            'Explica por qué las crisis financieras suelen contagiarse entre países con características económicas parecidas, y menciona al menos dos defensas que un país puede usar para reducir su vulnerabilidad frente a ese contagio.',
          keyPoints: [
            {
              id: 'contagion_mechanism',
              label: 'Explica que el contagio ocurre porque los inversionistas agrupan a países con vínculos comerciales, financieros o características similares',
              synonyms: [
                'efecto contagio',
                'paises con caracteristicas parecidas',
                'vinculos comerciales y financieros',
                'proximo domino',
                'agrupan economias similares',
                'el panico se traslada a otros paises',
              ],
            },
            {
              id: 'reserves_and_debt_defense',
              label: 'Menciona reservas internacionales adecuadas y deuda externa manejable como defensas frente al contagio',
              synonyms: [
                'reservas internacionales suficientes',
                'deuda externa manejable',
                'deuda de corto plazo baja',
                'colchon de reservas',
                'reservas para cubrir vencimientos',
                'acumular dolares de reserva',
                'no depender de deuda en moneda extranjera',
              ],
            },
            {
              id: 'institutional_defense',
              label: 'Menciona un sistema bancario bien regulado o un tipo de cambio creíble como defensa adicional',
              synonyms: [
                'sistema bancario bien regulado',
                'supervision bancaria solida',
                'tipo de cambio creible',
                'politica fiscal y monetaria consistente',
                'banco central con credibilidad',
                'bancos bien capitalizados',
                'regulacion financiera adecuada',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Las crisis se contagian porque los inversionistas internacionales, al no poder evaluar en detalle cada economía, agrupan a países con vínculos comerciales o financieros parecidos y retiran capital de todos ellos ante la primera señal de problemas en uno. Para reducir esa vulnerabilidad, un país puede mantener reservas internacionales suficientes para cubrir su deuda externa de corto plazo, evitar depender demasiado de deuda en moneda extranjera, y sostener un sistema bancario bien regulado junto con un tipo de cambio que el mercado perciba como creíble.',
          explanation:
            'Se espera que la respuesta explique el mecanismo del contagio entre economías parecidas y mencione al menos dos defensas concretas: reservas adecuadas, deuda externa manejable, regulación bancaria sólida o un tipo de cambio creíble.',
        },
      ],
    },
  ],
};
