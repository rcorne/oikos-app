import type { Unit } from '@/content/types';

export const unit07: Unit = {
  id: 'u7',
  index: 7,
  subject: 'microeconomia',
  title: 'Fallas de mercado',
  subtitle: 'Cuándo el mercado no llega solo al mejor resultado',
  description:
    'Externalidades, bienes públicos, recursos comunes e información asimétrica: los casos en que dejar que el mercado actúe solo no reparte los recursos de la manera más conveniente para la sociedad, y qué herramientas existen para corregirlo.',
  icon: 'leaf-outline',
  color: '#0C4759',
  source: 'mankiw',
  lessons: [
    {
      id: 'u7-l1',
      title: 'Externalidades: costos y beneficios que el precio no refleja',
      summary: 'Por qué la contaminación tiende a sobreproducirse y la vacunación tiende a subproducirse, y cómo corregirlo con impuestos o subsidios.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: 'El precio no siempre cuenta toda la historia',
        },
        {
          type: 'paragraph',
          text: 'Una externalidad es un efecto que la producción o el consumo de un bien provoca sobre personas que no participan directamente en esa transacción, y que no queda reflejado en el precio de mercado. Cuando ese efecto es un costo para terceros hablamos de externalidad negativa; cuando es un beneficio, de externalidad positiva. En ambos casos, el precio que ven comprador y vendedor deja fuera algo que le importa al resto de la sociedad.',
        },
        {
          type: 'example',
          title: 'Externalidad negativa: la papelera y el río',
          text: 'Una papelera produce pulpa de papel. Fabricar una tonelada adicional le cuesta $180.000 en insumos, energía y mano de obra: ese es su costo marginal privado. Pero el proceso también vierte residuos al río, lo que impone un costo externo estimado en $45.000 por tonelada a los pescadores y agricultores río abajo, a través de menos peces y agua de riego contaminada. Ese costo de $45.000 nunca aparece en una factura de la papelera. El costo social de esa tonelada —$180.000 más $45.000, es decir $225.000— es mayor que el costo privado que la empresa efectivamente enfrenta, así que la papelera seguirá produciendo mientras el precio de venta supere sus $180.000, aunque ya haya superado largamente el costo social.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Externalidad negativa, en una frase',
          text: 'Costo social = costo privado + costo externo. Como la empresa solo mira su costo privado, produce más de lo que convendría si se contara el daño completo: hay sobreproducción respecto al óptimo social.',
        },
        {
          type: 'example',
          title: 'Externalidad positiva: vacunarse contra la influenza',
          text: 'Vacunarse da un beneficio privado claro: baja el riesgo de enfermarse. Pero también genera un beneficio externo, porque reduce la probabilidad de contagiar a otras personas. Si una persona valora su propia protección en $8.000 —lo máximo que pagaría por la vacuna— pero la menor probabilidad de contagio hacia el resto de su entorno vale, en promedio, $6.000 adicionales, el beneficio social total de esa vacuna es $14.000. Si la vacuna cuesta $10.000, esa persona decidirá no vacunarse comparando solo su beneficio privado ($8.000) con el costo, aunque el beneficio social ($14.000) supere ampliamente ese costo. El resultado es menos vacunación que la cantidad socialmente conveniente.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Externalidad positiva, en una frase',
          text: 'Beneficio social = beneficio privado + beneficio externo. Como cada persona decide mirando solo su beneficio privado, se consume menos de lo que convendría si se contara también el beneficio para terceros: hay subproducción respecto al óptimo social.',
        },
        {
          type: 'heading',
          text: 'Corrigiendo el precio: impuestos y subsidios pigouvianos',
        },
        {
          type: 'paragraph',
          text: 'La solución clásica que proponen los economistas es hacer que el precio "cuente toda la historia". Un impuesto pigouviano sobre una actividad con externalidad negativa, de un monto igual al costo marginal externo, obliga a quien produce el daño a pagar por él, acercando su costo privado al costo social y reduciendo la producción hacia el nivel eficiente. De forma simétrica, un subsidio pigouviano a una actividad con externalidad positiva —como la vacunación o la educación— reduce el costo privado de quien genera ese beneficio externo, acercando la cantidad consumida al óptimo social.',
        },
      ],
      exercises: [
        {
          id: 'u7-l1-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: 'Una externalidad negativa es...',
          options: [
            { id: 'a', text: 'Un costo que la producción o el consumo de un bien impone a terceros que no participan en la transacción, y que no está reflejado en el precio' },
            { id: 'b', text: 'El costo directo que una empresa paga por sus insumos y su mano de obra' },
            { id: 'c', text: 'Un impuesto que el gobierno cobra por vender cualquier bien' },
            { id: 'd', text: 'La diferencia entre el precio de venta y el costo promedio de producción' },
          ],
          correctOptionId: 'a',
          explanation:
            'Una externalidad negativa es un costo que recae sobre personas ajenas a la transacción —por ejemplo, vecinos afectados por contaminación— y que el precio de mercado no incorpora. Por eso el mercado, dejado solo, tiende a producir más de lo socialmente conveniente.',
        },
        {
          id: 'u7-l1-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una fábrica de zapatillas tiene un costo marginal privado de $45.000 por par producido. Estudios ambientales estiman que cada par genera un costo externo de $12.000 a la comunidad cercana por la contaminación del río, costo que no aparece en el precio de mercado. ¿Cuál es el impuesto pigouviano por par, en pesos, que debería cobrar el gobierno para que el costo que enfrenta la fábrica iguale el costo social?',
          unitLabel: '$',
          answer: 12000,
          explanation:
            'El impuesto pigouviano debe ser igual al costo marginal externo no internalizado: $12.000 por par. Con ese impuesto, el costo privado que enfrenta la fábrica pasa a ser $45.000 + $12.000 = $57.000, que coincide con el costo social total de producir ese par, llevando la producción hacia el nivel socialmente eficiente.',
        },
        {
          id: 'u7-l1-e3',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'En una comuna, la tasa de vacunación contra la influenza es baja porque cada persona solo considera el beneficio privado de protegerse a sí misma, sin tomar en cuenta que vacunarse también reduce el riesgo de contagio para sus vecinos y compañeros de trabajo.',
          question:
            '¿Qué recomendaría un economista, pensando en externalidades positivas, para acercar la cantidad de vacunas aplicadas a la cantidad socialmente eficiente?',
          options: [
            { id: 'a', text: 'Subsidiar o entregar gratis la vacuna, para reducir el costo privado de vacunarse y así acercar la cantidad consumida al óptimo social' },
            { id: 'b', text: 'Cobrar un impuesto a quienes se vacunan, para desincentivar un consumo excesivo' },
            { id: 'c', text: 'Prohibir la vacunación voluntaria y dejar que el mercado la regule solo' },
            { id: 'd', text: 'No hacer nada, porque las externalidades positivas no afectan la eficiencia del mercado' },
          ],
          correctOptionId: 'a',
          explanation:
            'La vacunación genera beneficios externos —menor contagio hacia terceros— que la persona no considera al decidir, por lo que el mercado libre produce menos vacunación que la cantidad socialmente eficiente. Un subsidio, o la entrega gratuita, reduce el costo privado de vacunarse y acerca la cantidad consumida al nivel que sí incorpora el beneficio externo.',
        },
        {
          id: 'u7-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 20,
          prompt:
            'Explica qué es una externalidad y por qué el mercado, dejado solo, produce una cantidad distinta a la socialmente eficiente cuando existen externalidades. Da un ejemplo de externalidad negativa o positiva distinto a los vistos en la lección.',
          keyPoints: [
            {
              id: 'external_definition',
              label: 'Define la externalidad como un efecto sobre terceros que no está reflejado en el precio',
              synonyms: ['afecta a terceros', 'no participan en la transaccion', 'no esta en el precio', 'efecto sobre otros', 'costo o beneficio para otros', 'externalidad'],
            },
            {
              id: 'market_inefficiency',
              label: 'Explica que la externalidad genera sobreproducción (negativa) o subproducción (positiva) respecto al óptimo social',
              synonyms: ['sobreproduccion', 'subproduccion', 'no es eficiente', 'cantidad distinta al optimo', 'mas de lo que conviene', 'menos de lo que conviene'],
            },
            {
              id: 'own_example',
              label: 'Entrega un ejemplo propio distinto al de la lección',
              synonyms: ['por ejemplo', 'imaginemos', 'supongamos', 'un caso', 'en mi barrio', 'pensemos en', 'otro ejemplo'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Una externalidad es un efecto que la producción o el consumo de un bien genera sobre personas que no participan en esa transacción y que no queda reflejado en el precio de mercado. Cuando es negativa, como el ruido de una discoteca que molesta a los vecinos, el mercado tiende a producir más de lo socialmente conveniente porque nadie paga por ese costo. Cuando es positiva, como restaurar la fachada de un edificio antiguo y embellecer toda la cuadra, se produce menos de lo óptimo porque el dueño no cobra por ese beneficio a los demás.',
          explanation:
            'Una buena respuesta define la externalidad como un efecto no compensado sobre terceros, explica que esto aleja la cantidad de mercado del óptimo social, y aporta un ejemplo propio.',
        },
        {
          id: 'u7-l1-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Un curso técnico de electricidad entrega a cada estudiante un beneficio privado de $90.000 —mayores ingresos futuros—, pero además genera un beneficio externo de $35.000, porque los técnicos capacitados reducen accidentes eléctricos que afectan a terceros. El curso cuesta $110.000 por estudiante. ¿De cuánto debería ser el subsidio pigouviano por estudiante, en pesos, para que el costo que enfrenta cada uno incorpore el beneficio externo de su capacitación?',
          unitLabel: '$',
          answer: 35000,
          hint: 'El subsidio pigouviano óptimo iguala el beneficio marginal externo, así como el impuesto pigouviano iguala el costo marginal externo.',
          explanation:
            'El subsidio pigouviano debe ser igual al beneficio marginal externo: $35.000 por estudiante. Con ese subsidio, el costo privado del curso baja de $110.000 a $110.000 − $35.000 = $75.000, que es menor que el beneficio privado de $90.000: ahora al estudiante sí le conviene inscribirse, tal como conviene socialmente, ya que el beneficio social ($90.000 + $35.000 = $125.000) supera el costo de $110.000.',
        },
        {
          id: 'u7-l1-e6',
          type: 'multiple_choice',
          difficulty: 'dificil',
          xp: 20,
          question:
            'En un mercado con externalidad negativa en la producción —por ejemplo, una curtiembre que contamina un estero—, ¿cómo se compara la cantidad de equilibrio que produce el mercado por sí solo con la cantidad socialmente óptima, y por qué?',
          options: [
            { id: 'a', text: 'El mercado produce más que el óptimo social, porque los productores deciden mirando solo su costo privado, que es menor que el costo social' },
            { id: 'b', text: 'El mercado produce menos que el óptimo social, porque el costo externo desincentiva la producción' },
            { id: 'c', text: 'El mercado produce exactamente el óptimo social, porque los compradores castigan a las empresas contaminantes' },
            { id: 'd', text: 'No se puede comparar, porque el óptimo social solo existe cuando hay impuestos' },
          ],
          correctOptionId: 'a',
          hint: 'Pregúntate qué costo mira la empresa al decidir cuánto producir: ¿el suyo, o el de toda la sociedad?',
          explanation:
            'Con una externalidad negativa, el costo social de cada unidad —costo privado más costo externo— es mayor que el costo privado que la empresa efectivamente paga. Como la empresa produce mientras el precio cubra su costo privado, sigue produciendo unidades cuyo costo social ya supera lo que valen para los consumidores: hay sobreproducción respecto al óptimo social. Por eso el remedio clásico es un impuesto pigouviano que "sume" el costo externo al costo privado.',
        },
        {
          id: 'u7-l1-e7',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Una planta de asfalto tiene un costo marginal privado de $80.000 por metro cúbico producido. Sumando el daño que su polvo y sus gases imponen a la población cercana, un estudio concluye que el costo marginal social de cada metro cúbico es $110.000. ¿De cuánto debería ser el impuesto pigouviano por metro cúbico, en pesos, para que el costo que enfrenta la planta iguale el costo social?',
          unitLabel: '$',
          answer: 30000,
          hint: 'El impuesto pigouviano llena exactamente la brecha entre el costo marginal social y el costo marginal privado.',
          explanation:
            'El impuesto pigouviano debe igualar el costo marginal externo, que es la diferencia entre el costo social y el privado: $110.000 − $80.000 = $30.000 por metro cúbico. Con ese impuesto, el costo privado sube de $80.000 a $110.000 y coincide con el costo social, llevando la producción al nivel eficiente.',
        },
        {
          id: 'u7-l1-e8',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'La investigación científica básica genera conocimiento que otras empresas y personas pueden aprovechar sin pagar por él, es decir, produce un beneficio externo. Dejado solo al mercado privado, ¿qué cabe esperar de la cantidad de investigación básica?',
          options: [
            { id: 'a', text: 'Se produce menos de la cantidad socialmente óptima, porque quien investiga solo considera su beneficio privado y no el beneficio que derrama sobre los demás' },
            { id: 'b', text: 'Se produce más de la cantidad socialmente óptima, porque el beneficio externo incentiva a investigar de más' },
            { id: 'c', text: 'Se produce exactamente la cantidad óptima, porque los beneficios externos no afectan las decisiones' },
            { id: 'd', text: 'No se produce nada, porque nadie puede lucrar con la investigación' },
          ],
          correctOptionId: 'a',
          explanation:
            'La investigación básica tiene una externalidad positiva: su beneficio social supera el beneficio privado de quien la financia. Como cada agente decide mirando solo lo que gana él, se investiga menos de lo socialmente conveniente. Por eso suele apoyarse con subsidios, fondos concursables o financiamiento público.',
        },
        {
          id: 'u7-l1-e9',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Una central termoeléctrica quema carbón para generar electricidad. Cada MWh que produce le cuesta $40.000 en insumos y operación, pero además emite gases que dañan la salud de la población vecina, con un costo externo estimado en $18.000 por MWh que nadie le cobra. La empresa decide cuánto generar mirando únicamente sus $40.000 de costo privado.',
          question:
            '¿Qué medida propondría un economista para que la central internalice el daño y su producción se acerque al óptimo social?',
          options: [
            { id: 'a', text: 'Aplicar un impuesto de $18.000 por MWh, igual al costo externo, para que el costo que enfrenta la central suba a $58.000 y coincida con el costo social' },
            { id: 'b', text: 'Entregar un subsidio de $18.000 por MWh a la central, para abaratar su producción' },
            { id: 'c', text: 'No intervenir, porque el mercado eléctrico ya alcanza por sí solo el óptimo social' },
            { id: 'd', text: 'Fijar un precio máximo a la electricidad, para que la central produzca más y baje el precio' },
          ],
          correctOptionId: 'a',
          hint: 'El impuesto pigouviano debe igualar el costo externo por unidad, no reducir el costo de contaminar.',
          explanation:
            'La central genera una externalidad negativa: su costo social por MWh ($40.000 + $18.000 = $58.000) supera el costo privado que efectivamente paga. Un impuesto pigouviano igual al costo externo ($18.000) eleva su costo privado hasta el costo social, reduce la sobreproducción y la lleva hacia el nivel eficiente. Un subsidio o un precio máximo agravarían el problema al incentivar más generación contaminante.',
        },
        {
          id: 'u7-l1-e10',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'Una fundición produce 90 toneladas de metal al mes. Un estudio ambiental estima que el costo externo total que sus emisiones imponen a la comunidad es de $6.300.000 al mes. Si el gobierno quiere fijar un impuesto pigouviano por tonelada igual al costo externo marginal, ¿de cuánto debería ser ese impuesto por tonelada, en pesos?',
          unitLabel: '$',
          answer: 70000,
          hint: 'Reparte el costo externo total entre las toneladas producidas para obtener el costo externo por tonelada.',
          explanation:
            'El costo externo por tonelada es el costo externo total dividido por la producción: $6.300.000 ÷ 90 = $70.000. Ese es el impuesto pigouviano por tonelada que iguala el costo privado al costo social de cada tonelada, empujando la producción hacia el nivel socialmente eficiente.',
        },
      ],
    },
    {
      id: 'u7-l2',
      title: 'Bienes públicos y recursos comunes',
      summary: 'Por qué nadie quiere ser el primero en pagar un bien público, y por qué un recurso compartido tiende a sobreexplotarse.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: 'Dos preguntas que definen cualquier bien: ¿se puede excluir? ¿hay rivalidad?',
        },
        {
          type: 'paragraph',
          text: 'Un bien es excluible si es posible impedir que alguien lo consuma sin pagar por él —por ejemplo, cobrando una entrada—. Un bien es rival si el consumo de una persona reduce la cantidad disponible para las demás —si yo me como una empanada, nadie más puede comerse esa misma empanada—. Combinando estas dos propiedades se obtienen cuatro categorías de bienes, y de dos de ellas nace una falla de mercado distinta.',
        },
        {
          type: 'list',
          items: [
            'Bien privado: excluible y rival (una empanada, un par de zapatos)',
            'Bien de club: excluible y no rival dentro de su capacidad (televisión por cable, un gimnasio con cupos)',
            'Recurso común: no excluible y rival (peces en aguas abiertas, tráfico en una calle sin peaje)',
            'Bien público: no excluible y no rival (alumbrado público, defensa nacional, un faro costero)',
          ],
        },
        {
          type: 'heading',
          text: 'Bienes públicos: cuando nadie quiere ser el primero en pagar',
        },
        {
          type: 'example',
          title: 'Las cámaras de seguridad del barrio',
          text: 'Treinta familias de un barrio evalúan instalar cámaras de seguridad comunitarias por un costo total de $9.000.000. Todas se beneficiarían por igual de la disuasión al delito, y no hay forma práctica de excluir del beneficio a quien no aporte dinero: incluso quien no pague seguirá viendo reducido el riesgo de robos en la cuadra. Como cada familia sabe que disfrutará del beneficio la pague o no, muchas prefieren esperar a que otras financien el proyecto. Este comportamiento se llama problema del polizón (free-rider), y explica por qué los bienes públicos tienden a quedar subprovistos si se dejan solo a la iniciativa privada: terminan recaudándose muchos menos de los $9.000.000 necesarios.',
        },
        {
          type: 'heading',
          text: 'Recursos comunes: la tragedia de los comunes',
        },
        {
          type: 'example',
          title: 'El lago compartido por tres caletas',
          text: 'Un lago que rodea tres caletas sostiene, de forma renovable, una captura de hasta 10.000 toneladas de peces al año. Nadie es dueño del lago, así que cualquier pescador puede sacar peces sin pedir permiso (no exclusión), pero cada pez que uno saca ya no está disponible para los demás (rivalidad). Si los 50 pescadores de la zona deciden cuánto pescar pensando solo en maximizar su propia captura, sin coordinarse, la captura conjunta puede llegar a 16.000 toneladas al año: 6.000 toneladas por sobre lo que el lago puede reponer. Ese exceso ocurre porque ningún pescador asume individualmente el costo total de agotar el recurso para todos.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Dos fallas, dos remedios distintos',
          text: 'Los bienes públicos suelen requerir provisión estatal financiada con impuestos, porque el mercado privado los subprovee. Los recursos comunes suelen requerir cuotas, permisos o derechos de propiedad que limiten el uso, porque el mercado privado los sobreexplota.',
        },
      ],
      exercises: [
        {
          id: 'u7-l2-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'El aire limpio de una ciudad —nadie puede ser excluido de respirarlo, y que una persona lo respire no reduce de forma apreciable lo disponible para otra— es un ejemplo de...',
          options: [
            { id: 'a', text: 'Un bien público: no excluible y no rival' },
            { id: 'b', text: 'Un bien de club: excluible y no rival' },
            { id: 'c', text: 'Un recurso común: no excluible y rival' },
            { id: 'd', text: 'Un bien privado: excluible y rival' },
          ],
          correctOptionId: 'a',
          explanation:
            'El aire limpio no puede excluirse y, dentro de rangos razonables, que una persona lo respire no le quita disponibilidad a otra: por eso se clasifica como bien público, igual que la defensa nacional o el alumbrado público.',
        },
        {
          id: 'u7-l2-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Un comité vecinal quiere instalar 4 luminarias LED en la plaza. Cada luminaria, incluyendo instalación, cuesta $150.000. El barrio tiene 25 familias y decide financiarlas dividiendo el costo total en partes iguales entre todas. ¿Cuánto debe aportar cada familia, en pesos?',
          unitLabel: '$',
          answer: 24000,
          explanation:
            'El costo total de las 4 luminarias es 4 × $150.000 = $600.000. Dividido en partes iguales entre las 25 familias, cada una aporta $600.000 ÷ 25 = $24.000. Repartir el costo así es una forma común de financiar un bien público local, ya que difícilmente algún vecino estaría dispuesto a pagarlo completo por su cuenta.',
        },
        {
          id: 'u7-l2-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'En una caleta pesquera, cinco embarcaciones comparten el mismo banco de pesca, que no tiene dueño y al que cualquiera puede acceder libremente. Cada capitán decide cuántos días salir a pescar pensando solo en maximizar su propia captura, sin coordinarse con los demás. Con los años, el banco de peces se ha reducido a la mitad.',
          question:
            '¿Qué solución sugeriría un economista para evitar que el banco de peces siga agotándose, aplicando la idea de la tragedia de los comunes?',
          options: [
            { id: 'a', text: 'Establecer cuotas de captura o derechos de pesca que limiten y asignen el uso del recurso entre los pescadores' },
            { id: 'b', text: 'Dejar que cada capitán pesque libremente, porque el mercado se autorregula solo en los recursos comunes' },
            { id: 'c', text: 'Prohibir la pesca en toda la caleta de forma permanente, sin excepciones' },
            { id: 'd', text: 'Subir el precio del pescado en el mercado final, lo que reduce automáticamente el esfuerzo pesquero' },
          ],
          correctOptionId: 'a',
          explanation:
            'La tragedia de los comunes ocurre porque el recurso es rival pero nadie puede ser excluido de usarlo, así que cada pescador ignora el costo que su propio esfuerzo impone sobre los demás. Cuotas de captura, permisos transferibles o derechos de propiedad sobre el recurso hacen que cada pescador internalice ese efecto sobre el banco total.',
        },
        {
          id: 'u7-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 25,
          prompt:
            'Explica la diferencia entre un bien público y un recurso común, y describe con tus palabras por qué cada uno tiende a generar un problema distinto: el polizón en un caso, la sobreexplotación en el otro.',
          keyPoints: [
            {
              id: 'public_good_def',
              label: 'Define bien público como no excluible y no rival, asociado al problema del polizón',
              synonyms: ['no excluible', 'no rival', 'bien publico', 'polizon', 'free rider', 'nadie paga'],
            },
            {
              id: 'common_resource_def',
              label: 'Define recurso común como rival pero no excluible, asociado a la tragedia de los comunes',
              synonyms: ['recurso comun', 'rival', 'no excluible', 'sobreexplotacion', 'tragedia de los comunes', 'se agota'],
            },
            {
              id: 'distinct_problems',
              label: 'Distingue que el problema resultante es distinto: subproducción en bienes públicos, sobreuso en recursos comunes',
              synonyms: ['subproduccion', 'sobreuso', 'distinto problema', 'uno se subproduce', 'otro se agota', 'problemas diferentes'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'Un bien público es no excluible y no rival —como el alumbrado público—, así que nadie tiene incentivos para pagarlo por su cuenta y termina produciéndose menos de lo socialmente deseable: el problema del polizón. Un recurso común es no excluible pero sí rival —como un banco de peces de acceso libre—, así que cualquiera puede usarlo sin pagar, y como nadie asume el costo total de su propio consumo, el recurso tiende a sobreexplotarse hasta agotarse: la tragedia de los comunes.',
          explanation:
            'Una buena respuesta distingue las dos propiedades (exclusión y rivalidad) para cada tipo de bien, y explica que la falta de exclusión genera problemas distintos según haya o no rivalidad: subproducción en bienes públicos, sobreexplotación en recursos comunes.',
        },
        {
          id: 'u7-l2-e5',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Un pueblo quiere financiar el show de fuegos artificiales de su aniversario, que cuesta $1.200.000 en total. Como nadie puede ser excluido de mirar el cielo, la junta de vecinos pide aportes voluntarios: de las 120 familias del pueblo, solo 40 deciden cooperar —las otras 80 actúan como polizones— y el costo se divide en partes iguales entre las familias que sí aportan. ¿Cuánto paga cada familia cooperadora, en pesos?',
          unitLabel: '$',
          answer: 30000,
          hint: 'Divide el costo total solo entre las familias que efectivamente aportan.',
          explanation:
            'El costo total se reparte solo entre quienes cooperan: $1.200.000 ÷ 40 = $30.000 por familia. Nota que si las 120 familias hubieran aportado, cada una habría pagado apenas $1.200.000 ÷ 120 = $10.000. El problema del polizón triplica la carga de quienes sí pagan, y en muchos casos hace que el bien público directamente no se financie: por eso suele proveerse con impuestos obligatorios.',
        },
        {
          id: 'u7-l2-e6',
          type: 'case_study',
          difficulty: 'media',
          xp: 15,
          scenario:
            'Un pueblo costero necesita construir un muro de contención contra marejadas que protegería por igual a todas las casas del borde costero: una vez construido, es imposible excluir de la protección a quien no haya aportado, y que una casa esté protegida no reduce la protección de las demás. Se abrió una colecta voluntaria, pero tras seis meses solo se ha reunido el 15% del costo, aunque casi todos los vecinos declaran que el muro les parece muy valioso.',
          question:
            '¿Por qué la colecta voluntaria recauda tan poco, y qué solución suele recomendarse para bienes con estas características?',
          options: [
            { id: 'a', text: 'Es el problema del polizón: como nadie puede ser excluido del beneficio, cada vecino prefiere que otros paguen; la solución habitual es financiar el muro con recursos públicos obligatorios, como impuestos o contribuciones' },
            { id: 'b', text: 'Es la tragedia de los comunes: los vecinos están sobreexplotando el muro, y la solución es fijar cuotas de uso' },
            { id: 'c', text: 'Es riesgo moral: los vecinos se volvieron descuidados después de aportar a la colecta' },
            { id: 'd', text: 'Es un problema de precios: basta con subir el monto sugerido de la donación para completar el financiamiento' },
          ],
          correctOptionId: 'a',
          hint: 'El muro es no excluible y no rival: ¿qué incentivo tiene cada vecino para aportar si igual quedará protegido?',
          explanation:
            'El muro es un bien público: no excluible y no rival. Cada vecino sabe que, si el muro se construye, quedará protegido haya aportado o no, así que su mejor jugada individual es esperar que paguen los demás. Cuando muchos razonan igual, la colecta fracasa aunque el bien valga más que su costo. Por eso los bienes públicos suelen financiarse con impuestos u otros aportes obligatorios, que eliminan la opción de viajar gratis.',
        },
        {
          id: 'u7-l2-e7',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'Un banco de pesca de acceso libre puede reponer de forma sostenible hasta 8.000 toneladas de merluza al año. Como nadie es dueño del banco y cada tripulación decide cuánto pescar pensando solo en su propia captura, sin coordinarse, la captura conjunta llega a 12.500 toneladas al año. ¿Cuántas toneladas por sobre el nivel sostenible se están extrayendo cada año?',
          unitLabel: 'toneladas',
          answer: 4500,
          hint: 'Compara la captura efectiva con la que el banco puede reponer sin agotarse.',
          explanation:
            'El exceso es la diferencia entre lo que efectivamente se pesca y lo que el recurso puede reponer: 12.500 − 8.000 = 4.500 toneladas al año. Ese sobreuso es la tragedia de los comunes: como el banco es rival pero no excluible, ninguna tripulación asume el costo total de agotar el recurso para todas, y en conjunto se extrae más de lo sostenible.',
        },
        {
          id: 'u7-l2-e8',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'Una playa pública gratuita se llena tanto en verano que el espacio, la sombra y el estacionamiento escasean: lo que ocupa un bañista deja de estar disponible para otro, y nadie puede ser excluido de entrar. ¿Qué tipo de bien es en esas condiciones?',
          options: [
            { id: 'a', text: 'Un recurso común: no excluible pero rival, porque el uso de cada persona reduce lo disponible para las demás' },
            { id: 'b', text: 'Un bien público puro: no excluible y no rival, sin ningún problema de congestión' },
            { id: 'c', text: 'Un bien de club: excluible y no rival, como un cine con butacas libres' },
            { id: 'd', text: 'Un bien privado: excluible y rival, como una entrada numerada' },
          ],
          correctOptionId: 'a',
          explanation:
            'Al ser gratuita y abierta, la playa no es excluible; pero cuando se congestiona, el espacio se vuelve rival: lo que usa uno se lo quita a otro. Esa combinación —no excluible y rival— es la de un recurso común, propensa a la sobreexplotación por congestión, y suele gestionarse con cupos, reservas o tarifas en temporada alta.',
        },
        {
          id: 'u7-l2-e9',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Una comunidad rural evalúa instalar una red de internet inalámbrico que cubriría a todo el pueblo: una vez encendida la antena, cualquier vecino puede conectarse y que uno lo haga no reduce apreciablemente la señal de los demás. Se propone financiarla con aportes voluntarios, pero muchos vecinos declaran en privado que planean no aportar y conectarse igual cuando esté lista.',
          question:
            '¿Qué problema anticipa esta situación y qué solución suele recomendarse para bienes con estas características?',
          options: [
            { id: 'a', text: 'El problema del polizón: como no se puede excluir a quien no paga, cada vecino prefiere que financien los demás; la solución habitual es financiar la red con un aporte obligatorio, como una cuota municipal o un impuesto local' },
            { id: 'b', text: 'La tragedia de los comunes: la red se agotará por sobreuso, y la solución es fijar cuotas de conexión por persona' },
            { id: 'c', text: 'La selección adversa: solo se conectarán los vecinos de peor calidad, y la solución es cobrar más caro' },
            { id: 'd', text: 'Una externalidad negativa: la antena daña a terceros, y la solución es un impuesto pigouviano a quien la use' },
          ],
          correctOptionId: 'a',
          hint: 'La red es no excluible y no rival: ¿qué incentivo tiene cada vecino para aportar si igual podrá conectarse?',
          explanation:
            'La red de internet comunitaria es un bien público local: no excluible y no rival dentro de su capacidad. Como nadie puede ser dejado sin señal por no pagar, cada vecino tiene incentivos a comportarse como polizón y esperar que otros financien la antena, lo que hace fracasar la colecta voluntaria. La solución típica es un aporte obligatorio —cuota o impuesto local— que elimine la opción de viajar gratis.',
        },
      ],
    },
    {
      id: 'u7-l3',
      title: 'Información asimétrica: selección adversa y riesgo moral',
      summary: 'Qué pasa cuando una parte de un trato sabe más que la otra, antes de firmarlo y después de firmarlo.',
      estimatedMinutes: 12,
      content: [
        {
          type: 'heading',
          text: 'Cuando una parte del trato sabe más que la otra',
        },
        {
          type: 'paragraph',
          text: 'La información asimétrica ocurre cuando una de las partes de una transacción sabe algo relevante —sobre la calidad de lo que se ofrece, el riesgo involucrado, o el esfuerzo que pondrá— que la otra parte no puede observar directamente. Esa brecha de información puede distorsionar el trato de dos maneras distintas, según si ocurre antes o después de cerrarlo.',
        },
        {
          type: 'heading',
          text: 'Selección adversa: el mercado de las bicicletas usadas',
        },
        {
          type: 'paragraph',
          text: 'La selección adversa ocurre antes de cerrar el trato: quien vende conoce la verdadera calidad de lo que ofrece, pero quien compra no puede distinguirla de antemano. El economista George Akerlof mostró esta idea con el ejemplo de los autos usados: si los compradores no pueden diferenciar un auto bueno de un "limón" defectuoso, solo están dispuestos a pagar un precio promedio. Ese precio promedio queda por debajo de lo que valen los autos buenos para sus dueños, así que estos prefieren no vender, y el mercado termina lleno de una proporción cada vez mayor de limones.',
        },
        {
          type: 'example',
          title: 'Bicicletas usadas: buenas y "limones"',
          text: 'En un mercado de bicicletas usadas, la mitad son bicicletas buenas, que valen $150.000 para su dueño, y la otra mitad son "limones" con fallas mecánicas ocultas, que valen $50.000 para su dueño. Un comprador no puede distinguir cuál es cuál antes de comprarla, así que solo está dispuesto a pagar el valor promedio esperado: (150.000 + 50.000) ÷ 2 = $100.000. Ese precio está por debajo de lo que vale una bicicleta buena para quien la tiene, así que los dueños de bicicletas buenas se retiran del mercado, dejando cada vez más limones en oferta.',
        },
        {
          type: 'heading',
          text: 'Riesgo moral: cuando el seguro cambia el comportamiento',
        },
        {
          type: 'example',
          title: 'El seguro contra robo de bicicletas',
          text: 'Una aseguradora ofrece un seguro contra robo de bicicletas. Si cubre el 100% del valor en caso de robo, muchos asegurados dejan de usar candado o de estacionar en lugares seguros, porque ya no asumen la pérdida completa si se la roban: su comportamiento cambió después de firmado el contrato, no antes. Si en cambio el seguro cubre solo el 70% del valor y exige un deducible de $40.000 a cargo del dueño en caso de siniestro, el asegurado conserva un incentivo a cuidar su bicicleta, porque parte del costo de un eventual robo seguiría siendo suyo. Ese diseño —cobertura parcial más deducible— es una forma habitual de reducir el riesgo moral sin eliminar el seguro.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Antes o después: la clave para no confundirlas',
          text: 'La selección adversa ocurre antes de cerrar el trato, por información oculta sobre calidad o riesgo. El riesgo moral ocurre después de cerrado el trato, por un cambio de comportamiento de quien queda protegido de las consecuencias.',
        },
      ],
      exercises: [
        {
          id: 'u7-l3-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'Una persona contrata un seguro contra robo de bicicleta que cubre el 100% del valor. Después de contratarlo, deja de usar candado en la calle porque "total, el seguro cubre todo". Este cambio de comportamiento después de firmado el contrato es un ejemplo de...',
          options: [
            { id: 'a', text: 'Riesgo moral, porque la persona cambia su comportamiento una vez que está protegida de las consecuencias' },
            { id: 'b', text: 'Selección adversa, porque la aseguradora no conocía el riesgo de robo antes de firmar el contrato' },
            { id: 'c', text: 'Ventaja comparativa, porque el asegurado se especializa en no cuidar su bicicleta' },
            { id: 'd', text: 'Un bien público, porque el seguro beneficia a toda la comunidad' },
          ],
          correctOptionId: 'a',
          explanation:
            'El riesgo moral ocurre después de cerrado el trato, cuando una de las partes cambia su comportamiento porque ya no asume completamente las consecuencias de sus actos. Aquí, estar asegurado al 100% reduce el cuidado que la persona pone en evitar el robo.',
        },
        {
          id: 'u7-l3-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'En un mercado de bicicletas usadas, la mitad de las bicicletas en venta son "buenas" y valen $200.000 para su dueño, y la otra mitad son "limones" defectuosos que valen $80.000 para su dueño. Los compradores no pueden distinguir la calidad antes de comprar, así que están dispuestos a pagar el valor promedio esperado de una bicicleta cualquiera. ¿Cuál es ese precio promedio esperado, en pesos?',
          unitLabel: '$',
          answer: 140000,
          explanation:
            'Como el comprador no puede distinguir la calidad, valora cada bicicleta según el promedio ponderado de ambos tipos: (200.000 × 0,5) + (80.000 × 0,5) = 100.000 + 40.000 = $140.000. Ese precio está por debajo de lo que vale una bicicleta buena para su dueño, por lo que los dueños de bicicletas buenas tienden a retirarse del mercado: el problema de selección adversa descrito por George Akerlof.',
        },
        {
          id: 'u7-l3-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Una aseguradora de salud ofrece un mismo plan, al mismo precio, a todas las personas de una ciudad, sin preguntar por su historial médico. Las personas con mala salud, que saben que probablemente usarán mucho el seguro, se inscriben en masa. Las personas sanas, que estiman que rara vez lo necesitarán, encuentran el precio poco conveniente y prefieren no contratarlo.',
          question:
            '¿Qué fenómeno describe mejor esta situación, y qué tiende a pasarle al precio del seguro con el tiempo si la aseguradora no puede distinguir el riesgo de cada cliente?',
          options: [
            { id: 'a', text: 'Selección adversa: se inscriben proporcionalmente más los de alto riesgo, lo que presiona el precio al alza y aleja aún más a los sanos' },
            { id: 'b', text: 'Riesgo moral: los asegurados se cuidan menos después de contratar el seguro' },
            { id: 'c', text: 'Ventaja comparativa: la aseguradora se especializa en asegurar solo a personas sanas' },
            { id: 'd', text: 'Externalidad positiva: la buena salud de unos beneficia a los demás asegurados' },
          ],
          correctOptionId: 'a',
          explanation:
            'Antes de firmar el contrato, cada cliente conoce mejor que la aseguradora su propio riesgo de salud. Si el precio es único para todos, se inscriben proporcionalmente más las personas de alto riesgo —selección adversa—, lo que eleva el costo promedio de los asegurados, obliga a subir el precio, y expulsa a más gente sana del grupo.',
        },
        {
          id: 'u7-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'dificil',
          xp: 25,
          prompt:
            'Explica la diferencia entre selección adversa y riesgo moral en un mercado con información asimétrica, usando un ejemplo para cada uno.',
          keyPoints: [
            {
              id: 'adverse_selection_def',
              label: 'Explica que la selección adversa ocurre antes del trato, por información oculta sobre calidad o riesgo',
              synonyms: ['antes de firmar', 'informacion oculta', 'calidad oculta', 'seleccion adversa', 'antes del contrato', 'no se conoce la calidad'],
            },
            {
              id: 'moral_hazard_def',
              label: 'Explica que el riesgo moral ocurre después del trato, por un cambio de comportamiento al estar protegido',
              synonyms: ['despues de firmar', 'riesgo moral', 'cambia el comportamiento', 'menos cuidado', 'una vez asegurado', 'despues del contrato'],
            },
            {
              id: 'examples_given',
              label: 'Da un ejemplo concreto para cada concepto',
              synonyms: ['por ejemplo', 'como el caso de', 'imaginemos', 'un caso de seguro', 'un caso de auto usado'],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'La selección adversa ocurre antes de cerrar el trato, cuando una parte conoce información que la otra no: por ejemplo, el dueño de un auto usado sabe si tiene fallas ocultas que el comprador no puede ver, lo que puede sacar del mercado a los vendedores de buena calidad. El riesgo moral, en cambio, ocurre después de firmado el contrato: por ejemplo, alguien maneja con menos cuidado una vez que contrata un seguro automotriz, porque ya no asume completo el costo de un choque.',
          explanation:
            'Una buena respuesta distingue el momento en que ocurre cada problema —antes o después del contrato— y da un ejemplo concreto para cada uno: información oculta sobre calidad o riesgo en la selección adversa, cambio de comportamiento por estar protegido en el riesgo moral.',
        },
        {
          id: 'u7-l3-e5',
          type: 'numeric',
          difficulty: 'dificil',
          xp: 20,
          question:
            'En un mercado de celulares usados, el 30% de los equipos en venta son "limones" con fallas ocultas que valen $60.000, y el 70% restante son equipos en buen estado que valen $180.000. Los compradores no pueden distinguir la calidad antes de comprar, así que están dispuestos a pagar el valor esperado de un celular elegido al azar. ¿Cuál es ese valor esperado, en pesos?',
          unitLabel: '$',
          answer: 144000,
          hint: 'Multiplica el valor de cada tipo por su proporción en el mercado y suma los resultados.',
          explanation:
            'El valor esperado pondera cada calidad por su proporción: (60.000 × 0,3) + (180.000 × 0,7) = 18.000 + 126.000 = $144.000. Como $144.000 está por debajo de los $180.000 que vale un equipo bueno para su dueño, los vendedores de celulares buenos tienden a retirarse, la proporción de limones sube, y el valor esperado —y con él el precio— sigue cayendo: la espiral de selección adversa.',
        },
        {
          id: 'u7-l3-e6',
          type: 'multiple_choice',
          difficulty: 'media',
          xp: 15,
          question:
            '¿Cuál de las siguientes medidas apunta a reducir la selección adversa —y no el riesgo moral— en el mercado de autos usados?',
          options: [
            { id: 'a', text: 'Que el vendedor ofrezca una garantía de seis meses y un informe de revisión mecánica, señales creíbles de calidad que el comprador puede ver antes de cerrar el trato' },
            { id: 'b', text: 'Que el seguro automotriz incluya un deducible a cargo del conductor en caso de choque' },
            { id: 'c', text: 'Que la aseguradora exija instalar un GPS en el auto después de firmada la póliza' },
            { id: 'd', text: 'Que el gobierno cobre un impuesto pigouviano por las emisiones contaminantes de cada auto' },
          ],
          correctOptionId: 'a',
          hint: 'La selección adversa es un problema de información oculta antes de cerrar el trato: busca la medida que revela calidad antes de la compra.',
          explanation:
            'La selección adversa nace de que el comprador no puede conocer la calidad antes de comprar. Una garantía y un informe de revisión mecánica son señales que solo un vendedor de un auto bueno puede ofrecer a bajo costo, así que revelan calidad antes del trato. El deducible y el GPS atacan el riesgo moral —comportamiento después del contrato—, y el impuesto pigouviano corrige una externalidad, no un problema de información.',
        },
        {
          id: 'u7-l3-e7',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'En un mercado de notebooks usados, el 40% de los equipos en venta son "limones" con fallas ocultas que valen $70.000 para su dueño, y el 60% restante están en buen estado y valen $170.000 para su dueño. Como los compradores no pueden distinguir la calidad antes de comprar, están dispuestos a pagar el valor esperado de un equipo elegido al azar. ¿Cuál es ese valor esperado, en pesos?',
          unitLabel: '$',
          answer: 130000,
          hint: 'Pondera el valor de cada tipo por su proporción en el mercado y suma.',
          explanation:
            'El valor esperado pondera cada calidad por su probabilidad: (70.000 × 0,4) + (170.000 × 0,6) = 28.000 + 102.000 = $130.000. Como $130.000 queda por debajo de los $170.000 que vale un equipo bueno para su dueño, los vendedores de notebooks buenos tienden a retirarse, sube la proporción de limones y el precio sigue cayendo: la selección adversa de Akerlof.',
        },
        {
          id: 'u7-l3-e8',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question:
            'Un banco no puede observar cómo usará realmente el dinero cada persona a la que le presta. Después de recibir el crédito, algunos clientes lo destinan a proyectos mucho más riesgosos de lo que declararon, porque si el proyecto fracasa buena parte de la pérdida la absorbe el banco. Este cambio de conducta después de firmado el préstamo es un ejemplo de...',
          options: [
            { id: 'a', text: 'Riesgo moral, porque el cliente cambia su comportamiento después de firmar, al no asumir por completo las consecuencias de su riesgo' },
            { id: 'b', text: 'Selección adversa, porque el banco no conocía la calidad del cliente antes de prestar' },
            { id: 'c', text: 'Un bien público, porque el crédito beneficia a toda la economía' },
            { id: 'd', text: 'Una externalidad positiva, porque invertir genera empleo para terceros' },
          ],
          correctOptionId: 'a',
          explanation:
            'El riesgo moral ocurre después de cerrado el trato: una vez con el crédito en la mano, el cliente asume más riesgo porque parte del costo de un fracaso recae sobre el banco. Se combate con garantías, monitoreo o exigiendo que el deudor ponga capital propio en juego, de modo que conserve incentivos a cuidar el resultado.',
        },
        {
          id: 'u7-l3-e9',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Una empresa paga a sus vendedores un sueldo fijo mensual, sin ninguna parte variable ligada a resultados. El gerente no puede observar cuánto esfuerzo pone realmente cada vendedor en la calle: como el sueldo llega igual trabajen mucho o poco, varios reducen sus visitas y su empeño una vez contratados.',
          question:
            '¿Qué fenómeno describe esta situación y qué diseño de contrato ayudaría a corregirlo?',
          options: [
            { id: 'a', text: 'Riesgo moral: el esfuerzo no observable cae tras la contratación; atarlo a una parte variable (comisiones o bonos por resultados) hace que el vendedor asuma parte de las consecuencias de su esfuerzo' },
            { id: 'b', text: 'Selección adversa: la empresa contrató sin conocer la calidad de los vendedores; la solución es subir el sueldo fijo para todos' },
            { id: 'c', text: 'Tragedia de los comunes: los vendedores sobreexplotan a los clientes, y la solución es fijar cuotas de visitas' },
            { id: 'd', text: 'Externalidad positiva: el esfuerzo de un vendedor beneficia a los demás, y la solución es un subsidio' },
          ],
          correctOptionId: 'a',
          hint: 'El problema aparece después de firmar el contrato, cuando la conducta que la empresa no puede observar cambia.',
          explanation:
            'Es riesgo moral: el esfuerzo del vendedor no es observable y, con un sueldo puramente fijo, cae después de la contratación porque el trabajador no asume las consecuencias de esforzarse menos. Ligar parte del pago a resultados —comisiones o bonos— alinea sus incentivos con los de la empresa, ya que ahora parte del costo de rendir poco recae sobre él. La selección adversa, en cambio, sería un problema de calidad oculta antes de contratar.',
        },
      ],
    },
  ],
};
