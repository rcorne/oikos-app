import type { Unit } from '@/content/types';

export const unit07: Unit = {
  id: 'u7',
  index: 7,
  title: 'Fallas de mercado',
  subtitle: 'Cuándo el mercado no llega solo al mejor resultado',
  description:
    'Externalidades, bienes públicos, recursos comunes e información asimétrica: los casos en que dejar que el mercado actúe solo no reparte los recursos de la manera más conveniente para la sociedad, y qué herramientas existen para corregirlo.',
  icon: 'leaf-outline',
  color: '#0E9488',
  source: 'mankiw',
  lessons: [
    {
      id: 'u7-l1',
      title: 'Externalidades: costos y beneficios que el precio no refleja',
      summary: 'Por qué la contaminación tiende a sobreproducirse y la vacunación tiende a subproducirse, y cómo corregirlo con impuestos o subsidios.',
      estimatedMinutes: 7,
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
      ],
    },
    {
      id: 'u7-l2',
      title: 'Bienes públicos y recursos comunes',
      summary: 'Por qué nadie quiere ser el primero en pagar un bien público, y por qué un recurso compartido tiende a sobreexplotarse.',
      estimatedMinutes: 7,
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
      ],
    },
    {
      id: 'u7-l3',
      title: 'Información asimétrica: selección adversa y riesgo moral',
      summary: 'Qué pasa cuando una parte de un trato sabe más que la otra, antes de firmarlo y después de firmarlo.',
      estimatedMinutes: 7,
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
      ],
    },
  ],
};
