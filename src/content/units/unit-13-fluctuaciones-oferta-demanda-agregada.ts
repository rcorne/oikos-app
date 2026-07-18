import type { Unit } from '@/content/types';

export const unit13: Unit = {
  id: 'u13',
  index: 13,
  subject: 'macroeconomia',
  title: 'Fluctuaciones de corto plazo: oferta y demanda agregada',
  subtitle: 'Por qué la economía tiene auges y recesiones',
  description:
    'La producción de un país no crece a un ritmo parejo todos los años: hay trimestres de expansión y otros de recesión. Esta unidad presenta el modelo de oferta y demanda agregada, el efecto multiplicador del gasto, y la disyuntiva de corto plazo entre inflación y desempleo.',
  icon: 'pulse-outline',
  color: '#B14E33',
  source: 'ambos-macro',
  lessons: [
    {
      id: 'u13-l1',
      title: 'El modelo de oferta y demanda agregada',
      summary:
        'Por qué la demanda agregada tiene pendiente negativa, por qué la oferta agregada de corto plazo tiene pendiente positiva, y qué distingue el equilibrio de corto y de largo plazo.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'Un modelo para explicar los vaivenes de la economía',
        },
        {
          type: 'paragraph',
          text: 'El producto de un país no crece a un ritmo constante: hay años de expansión, en que el empleo y el consumo suben con fuerza, y años de recesión, en que la producción se estanca o incluso cae y el desempleo aumenta. El modelo de oferta y demanda agregada sirve para entender esas fluctuaciones de corto plazo —trimestre a trimestre, año a año— sin perder de vista que, a largo plazo, lo que determina cuánto puede producir una economía es su capacidad productiva, no el nivel de precios.',
        },
        {
          type: 'heading',
          text: 'La demanda agregada: pendiente negativa',
        },
        {
          type: 'paragraph',
          text: 'La demanda agregada representa la cantidad total de bienes y servicios que hogares, empresas, gobierno y el resto del mundo desean comprar a cada nivel de precios de la economía en su conjunto. No hay que confundirla con la demanda de un solo bien: aquí lo que varía en el eje horizontal es el producto total, y en el eje vertical, el nivel de precios general. La curva tiene pendiente negativa porque un nivel de precios más bajo pone en marcha, al mismo tiempo, tres mecanismos que empujan la cantidad demandada hacia arriba.',
        },
        {
          type: 'list',
          items: [
            'Efecto riqueza real: cuando el nivel de precios baja, el mismo monto de dinero que las personas tienen guardado alcanza para comprar más bienes y servicios; esa mayor riqueza real las anima a consumir más.',
            'Efecto tasa de interés: con precios más bajos, se necesita menos dinero para realizar las mismas compras, lo que reduce la demanda de dinero y empuja hacia abajo la tasa de interés; con una tasa de interés menor, familias y empresas piden más préstamos para consumir e invertir.',
            'Efecto exportaciones netas: si los precios domésticos bajan en relación con los precios del resto del mundo, los bienes producidos en el país se vuelven más baratos para los extranjeros y los bienes importados relativamente más caros para los locales, lo que aumenta las exportaciones y reduce las importaciones.',
          ],
        },
        {
          type: 'example',
          title: 'Ejemplo: un descenso del nivel de precios',
          text: 'Supongamos que el nivel de precios de un país cae de forma generalizada. Una familia que tenía $2.000.000 ahorrados descubre que ese monto le rinde para comprar más que antes, así que consume un poco más (efecto riqueza). Al mismo tiempo, los bancos necesitan prestar menos dinero para financiar las mismas compras, así que bajan la tasa de interés, y una empresa que dudaba en construir una nueva bodega decide hacerlo (efecto tasa de interés). Y como los productos locales quedaron más baratos frente a los extranjeros, un comprador en otro país decide importar más desde este país (efecto exportaciones netas). Los tres canales apuntan en la misma dirección: menor nivel de precios, mayor cantidad demandada de bienes y servicios.',
        },
        {
          type: 'heading',
          text: 'La oferta agregada de corto plazo y la diferencia con el largo plazo',
        },
        {
          type: 'paragraph',
          text: 'La curva de oferta agregada de corto plazo tiene pendiente positiva porque, durante un tiempo, muchos precios y salarios de la economía quedan fijados por contratos, catálogos impresos o acuerdos que no se renegocian de un día para otro. Si el nivel de precios sube de forma inesperada mientras los costos de las empresas (muchos de ellos fijados por contratos previos) todavía no se ajustan del todo, producir más se vuelve más rentable, y las empresas amplían la producción. Con el paso del tiempo, sin embargo, salarios y precios terminan por ajustarse a las nuevas condiciones, y el producto vuelve a su nivel potencial —el que la economía puede sostener usando plenamente su fuerza de trabajo, capital y tecnología— sin importar cuál sea el nivel de precios. Por eso decimos que, en el largo plazo, la oferta agregada es vertical en el nivel de producto potencial: el nivel de precios ya no puede alterar cuánto se produce, solo determina cuánto cuesta lo que se produce.',
        },
      ],
      exercises: [
        {
          id: 'u13-l1-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '¿Cuál de las siguientes explica correctamente por qué la curva de demanda agregada tiene pendiente negativa?',
          options: [
            {
              id: 'a',
              text: 'Cuando el nivel de precios baja, el valor real del dinero que tienen las personas aumenta, la tasa de interés tiende a bajar y los bienes locales se vuelven más baratos para el resto del mundo, por lo que la cantidad demandada de bienes y servicios sube',
            },
            {
              id: 'b',
              text: 'Cuando el nivel de precios baja, las empresas ganan menos por cada unidad vendida y por eso producen menos',
            },
            {
              id: 'c',
              text: 'Cuando el nivel de precios baja, el gobierno reduce automáticamente su gasto público para compensar',
            },
            {
              id: 'd',
              text: 'Cuando el nivel de precios baja, los salarios nominales suben de inmediato en toda la economía, encareciendo la producción',
            },
          ],
          correctOptionId: 'a',
          explanation:
            'Una baja del nivel de precios activa tres mecanismos que aumentan la cantidad demandada: el efecto riqueza real (el dinero ahorrado rinde más), el efecto tasa de interés (se necesita menos dinero para las mismas compras, lo que empuja la tasa hacia abajo) y el efecto exportaciones netas (los bienes locales quedan más baratos frente a los del resto del mundo). Las otras opciones describen razonamientos de oferta, no de demanda agregada.',
        },
        {
          id: 'u13-l1-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'El producto potencial de una economía es $500 mil millones. En un trimestre de debilidad económica, el producto de equilibrio de corto plazo cae a $460 mil millones. ¿Cuál es la magnitud de la brecha del producto (producto potencial menos producto efectivo), en miles de millones de pesos?',
          unitLabel: 'miles de millones de $',
          answer: 40,
          hint: 'Resta el producto efectivo del producto potencial.',
          explanation:
            'Brecha del producto = $500 mil millones − $460 mil millones = $40 mil millones. Como el producto efectivo está por debajo del potencial, la economía se encuentra en una recesión de corto plazo.',
        },
        {
          id: 'u13-l1-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Un país sufre un alza inesperada y sostenida en el precio internacional del petróleo, uno de sus principales insumos importados. Los costos de producción de casi todas las empresas del país suben de golpe.',
          question:
            'Según el modelo de oferta y demanda agregada, ¿qué le ocurre a la curva de oferta agregada de corto plazo, y qué combinación de efectos debería esperarse en el corto plazo?',
          options: [
            {
              id: 'a',
              text: 'La oferta agregada de corto plazo se desplaza hacia la izquierda, porque a cada nivel de precios las empresas ahora enfrentan mayores costos; el resultado esperado es una caída del producto junto con un alza del nivel de precios',
            },
            {
              id: 'b',
              text: 'La oferta agregada de corto plazo se desplaza hacia la derecha, lo que aumenta el producto y baja el nivel de precios',
            },
            {
              id: 'c',
              text: 'Solo se ve afectada la demanda agregada, porque un alza de costos de producción es un problema exclusivo de los consumidores',
            },
            {
              id: 'd',
              text: 'No hay ningún efecto de corto plazo, porque los precios y salarios de la economía se ajustan de inmediato ante cualquier shock',
            },
          ],
          correctOptionId: 'a',
          explanation:
            'Un shock negativo de oferta —como un alza fuerte en el costo de un insumo clave— desplaza la curva de oferta agregada de corto plazo hacia la izquierda: a cada nivel de precios, las empresas están dispuestas a producir menos porque producir les cuesta más. El resultado de corto plazo es la combinación menos deseable: menor producto y mayor nivel de precios al mismo tiempo.',
        },
        {
          id: 'u13-l1-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 15,
          prompt:
            'Explica por qué la curva de demanda agregada tiene pendiente negativa y qué distingue el equilibrio de corto plazo del equilibrio de largo plazo en el modelo de oferta y demanda agregada.',
          keyPoints: [
            {
              id: 'ad_negative_slope',
              label: 'Explica que una baja en el nivel de precios aumenta la cantidad demandada de bienes y servicios',
              synonyms: [
                'precios bajan cantidad demandada sube',
                'relacion negativa',
                'pendiente negativa',
                'a menor precio mayor demanda',
                'baja de precios aumenta la demanda',
                'mas cantidad demandada',
              ],
            },
            {
              id: 'transmission_channel',
              label: 'Menciona al menos uno de los mecanismos: riqueza real, tasa de interés o exportaciones netas',
              synonyms: [
                'saldos reales',
                'riqueza real',
                'tasa de interes',
                'exportaciones netas',
                'efecto riqueza',
                'valor real del dinero',
                'baja la tasa de interes',
              ],
            },
            {
              id: 'short_vs_long_run',
              label:
                'Distingue que en el corto plazo el producto puede desviarse del potencial, mientras que en el largo plazo vuelve a su nivel potencial',
              synonyms: [
                'producto potencial',
                'largo plazo vertical',
                'vuelve al potencial',
                'corto plazo se desvia',
                'equilibrio de largo plazo',
                'oferta de largo plazo vertical',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'La demanda agregada tiene pendiente negativa porque una baja en el nivel de precios aumenta el valor real del dinero que tienen las personas, reduce la tasa de interés al necesitarse menos dinero para las mismas compras, y abarata los bienes locales frente a los del resto del mundo; los tres efectos aumentan la cantidad demandada. En el corto plazo, el producto puede quedar por encima o por debajo de su nivel potencial porque precios y salarios están fijos temporalmente, pero en el largo plazo esos precios se ajustan y el producto vuelve a su nivel potencial, sin importar cuál sea el nivel de precios.',
          explanation:
            'Una buena respuesta explica la relación negativa entre nivel de precios y cantidad demandada, identifica al menos uno de los tres mecanismos de transmisión, y distingue el equilibrio de corto plazo (donde el producto puede desviarse del potencial) del de largo plazo (donde vuelve a él).',
        },
      ],
    },
    {
      id: 'u13-l2',
      title: 'Qué desplaza la demanda agregada: el gasto autónomo y el efecto multiplicador',
      summary:
        'Cómo un cambio en el gasto de gobierno, la inversión o el consumo autónomo se traduce en un cambio mayor en el producto de equilibrio, debido al efecto multiplicador.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'Qué mueve la demanda agregada',
        },
        {
          type: 'paragraph',
          text: 'La curva de demanda agregada no solo puede recorrerse por cambios en el nivel de precios: también puede desplazarse entera, hacia la derecha o hacia la izquierda, cuando cambia el gasto autónomo, es decir, aquella parte del consumo, la inversión o el gasto de gobierno que no depende del ingreso corriente de la economía. Un aumento del gasto público en infraestructura, una ola de nuevas inversiones de las empresas o un salto en el consumo de los hogares desplazan la demanda agregada hacia la derecha a cada nivel de precios.',
        },
        {
          type: 'heading',
          text: 'El efecto multiplicador',
        },
        {
          type: 'paragraph',
          text: 'Cuando el gasto autónomo aumenta, el efecto sobre el producto de equilibrio termina siendo mayor que el aumento inicial del gasto. La razón es que el gasto de una persona se convierte en el ingreso de otra: si el gobierno paga $100 a una constructora, esos $100 son ingreso para la constructora y sus trabajadores, quienes gastan una parte de ese ingreso adicional —según su propensión marginal a consumir (PMC), la fracción de cada peso extra de ingreso que se destina a consumo— en otros bienes y servicios. Ese nuevo gasto es, a su vez, ingreso para alguien más, que también gasta una parte. La suma de todas esas rondas sucesivas de gasto e ingreso es mayor que el gasto inicial que las puso en marcha.',
        },
        {
          type: 'formula',
          label: 'Multiplicador del gasto',
          text: 'Multiplicador = 1 / (1 − PMC), donde PMC es la propensión marginal a consumir',
        },
        {
          type: 'formula',
          label: 'Efecto total sobre el producto',
          text: 'ΔProducto = Multiplicador × ΔGasto autónomo',
        },
        {
          type: 'example',
          title: 'Ejemplo: las rondas sucesivas de gasto',
          text: 'Si la PMC de una economía es 0,75, el multiplicador es 1 / (1 − 0,75) = 1 / 0,25 = 4. Ante un aumento del gasto autónomo de $100, la primera ronda agrega $100 al producto; esos $100 se convierten en ingreso para otros, que gastan el 75%, es decir $75, en una segunda ronda; ese gasto se convierte en ingreso para un tercer grupo, que gasta 75% de $75, o sea $56,25, y así sucesivamente. Sumando esta serie decreciente de rondas (100 + 75 + 56,25 + …), el efecto total converge a $400: exactamente el multiplicador (4) por el gasto inicial ($100).',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Cuanto más alta la PMC, mayor el multiplicador',
          text: 'Si las personas gastan una fracción mayor de cada peso adicional de ingreso (una PMC más alta), cada ronda de gasto es más grande y el multiplicador crece. Lo que no se gasta en cada ronda —la parte que se ahorra— es lo que va frenando la cadena hasta que el efecto converge.',
        },
      ],
      exercises: [
        {
          id: 'u13-l2-e1',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'La propensión marginal a consumir (PMC) de una economía es 0,8. Si el gasto de gobierno aumenta en $200 mil millones, ¿en cuánto aumenta el producto de equilibrio, en miles de millones de pesos, según el efecto multiplicador?',
          unitLabel: 'miles de millones de $',
          answer: 1000,
          hint: 'Primero calcula el multiplicador con 1 / (1 − PMC), luego multiplícalo por el cambio en el gasto.',
          explanation:
            'Multiplicador = 1 / (1 − 0,8) = 1 / 0,2 = 5. ΔProducto = 5 × $200 mil millones = $1.000 mil millones.',
        },
        {
          id: 'u13-l2-e2',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: '¿Por qué un aumento de $100 en el gasto de gobierno termina generando un aumento del producto mayor a $100?',
          options: [
            {
              id: 'a',
              text: 'Porque ese gasto se convierte en ingreso de otras personas, que a su vez gastan una parte de ese ingreso adicional, generando nuevas rondas sucesivas de gasto e ingreso',
            },
            { id: 'b', text: 'Porque el gobierno gasta literalmente el mismo dinero varias veces' },
            { id: 'c', text: 'Porque el nivel de precios sube automáticamente en cuanto el gobierno gasta más' },
            { id: 'd', text: 'Porque los $100 se depositan en el banco central y se multiplican por ley' },
          ],
          correctOptionId: 'a',
          explanation:
            'El efecto multiplicador surge porque el gasto de unos se convierte en ingreso de otros, quienes gastan una parte de ese ingreso adicional (según la PMC) en una nueva ronda, y así sucesivamente. La suma de todas esas rondas supera al gasto inicial.',
        },
        {
          id: 'u13-l2-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Un municipio destina $50 millones a la construcción de una plaza. Los trabajadores contratados y los proveedores de materiales reciben ese dinero como ingreso. La propensión marginal a consumir de la economía local es 0,6.',
          question: 'Aplicando el efecto multiplicador, ¿qué se puede afirmar sobre el efecto total de esta obra sobre el producto de la economía local?',
          options: [
            {
              id: 'a',
              text: 'El efecto total sobre el producto será mayor a $50 millones, porque el multiplicador —1 / (1 − 0,6) = 2,5— amplifica el gasto inicial a medida que el dinero circula en rondas sucesivas de gasto e ingreso',
            },
            { id: 'b', text: 'El efecto total será exactamente $50 millones, porque el multiplicador solo se aplica a la inversión privada, no al gasto público' },
            { id: 'c', text: 'El efecto total será menor a $50 millones, porque parte del dinero se pierde cada vez que cambia de manos' },
            { id: 'd', text: 'El efecto no puede calcularse sin conocer el nivel de precios de la economía local' },
          ],
          correctOptionId: 'a',
          explanation:
            'El multiplicador es 1 / (1 − 0,6) = 1 / 0,4 = 2,5. El efecto total sobre el producto sería 2,5 × $50 millones = $125 millones, superior al gasto inicial, porque cada ronda de gasto genera ingreso adicional que se vuelve a gastar en parte.',
        },
        {
          id: 'u13-l2-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 15,
          prompt:
            'Explica en qué consiste el efecto multiplicador del gasto y por qué un aumento del gasto autónomo genera un aumento del producto mayor al gasto inicial.',
          keyPoints: [
            {
              id: 'income_becomes_spending',
              label: 'Explica que el gasto de una persona se convierte en ingreso de otra',
              synonyms: [
                'gasto es ingreso de otro',
                'se convierte en ingreso',
                'ingreso de otra persona',
                'circula el dinero',
                'una persona gasta y otra recibe ingreso',
              ],
            },
            {
              id: 'pmc_role',
              label: 'Menciona que las personas gastan una parte de ese ingreso adicional según la propensión marginal a consumir',
              synonyms: [
                'propension marginal a consumir',
                'pmc',
                'gastan una parte',
                'fraccion del ingreso',
                'gastan un porcentaje del ingreso extra',
              ],
            },
            {
              id: 'total_effect_larger',
              label: 'Concluye que el efecto total sobre el producto es mayor que el gasto autónomo inicial',
              synonyms: [
                'efecto mayor',
                'se amplifica',
                'multiplica el gasto',
                'el total supera el gasto inicial',
                'aumento mayor al gasto original',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'El efecto multiplicador ocurre porque el gasto de una persona o entidad se convierte en ingreso para otra, y esa otra persona gasta una parte de ese ingreso adicional según su propensión marginal a consumir, generando una nueva ronda de gasto que a su vez es ingreso para alguien más. Como estas rondas se van sumando, el efecto total sobre el producto termina siendo mayor que el gasto autónomo que las originó: por eso el multiplicador siempre es mayor a uno.',
          explanation:
            'Se espera que la respuesta explique la cadena de gasto que se convierte en ingreso, mencione el rol de la propensión marginal a consumir en cuánto se gasta en cada ronda, y concluya que el efecto total sobre el producto supera al gasto inicial.',
        },
      ],
    },
    {
      id: 'u13-l3',
      title: 'La curva de Phillips: la disyuntiva de corto plazo entre inflación y desempleo',
      summary:
        'La relación negativa observada en el corto plazo entre inflación y desempleo, y por qué esa disyuntiva no es estable en el largo plazo.',
      estimatedMinutes: 8,
      content: [
        {
          type: 'heading',
          text: 'La curva de Phillips: inflación versus desempleo',
        },
        {
          type: 'paragraph',
          text: 'Al observar datos de distintos países y períodos, los economistas notaron un patrón: en el corto plazo, los años con menor desempleo tienden a coincidir con una inflación más alta, y los años con mayor desempleo tienden a coincidir con una inflación más baja. Esa relación negativa de corto plazo entre inflación y desempleo se conoce como curva de Phillips, y puede entenderse como la otra cara del modelo de oferta y demanda agregada: cuando la demanda agregada aumenta, el producto sube y el desempleo baja, pero al mismo tiempo el nivel de precios tiende a subir más rápido.',
        },
        {
          type: 'heading',
          text: 'La disyuntiva de corto plazo',
        },
        {
          type: 'paragraph',
          text: 'Un shock de demanda agregada mueve la economía a lo largo de la curva de Phillips de corto plazo. Si el gasto agregado aumenta —por ejemplo, porque el gobierno gasta más o porque las tasas de interés bajan y estimulan la inversión— el producto crece, las empresas contratan más y el desempleo cae; pero, al mismo tiempo, la mayor demanda presiona los precios al alza y la inflación sube. Si, en cambio, el gasto agregado se enfría, ocurre lo contrario: el desempleo sube y la inflación tiende a bajar. En ambos casos, la economía se desliza a lo largo de la misma curva, sin que esta cambie de posición.',
        },
        {
          type: 'example',
          title: 'Ejemplo: un auge impulsado por la demanda',
          text: 'Un país atraviesa un período de fuerte expansión del gasto agregado. En dos años, el desempleo baja de 7% a 5%, mientras que la inflación anual sube de 2% a 6%. Los responsables de política económica enfrentan la disyuntiva clásica de corto plazo: ganar menos desempleo cuesta más inflación.',
        },
        {
          type: 'heading',
          text: 'Por qué la disyuntiva no es estable en el largo plazo',
        },
        {
          type: 'paragraph',
          text: 'Si un país intenta mantener el desempleo bajo la tasa que su economía puede sostener de forma duradera valiéndose de estímulos de demanda persistentes, la inflación no se queda quieta: trabajadores y empresas empiezan a anticipar una inflación más alta y la incorporan en sus decisiones de salarios y precios futuros. A medida que esas expectativas de inflación se ajustan al alza, la curva de Phillips de corto plazo se desplaza, y se necesita cada vez más inflación para sostener el mismo nivel de desempleo. Por eso, en el largo plazo, el desempleo tiende a converger a su tasa natural —determinada por factores estructurales del mercado laboral, no por la inflación— y la disyuntiva de corto plazo entre inflación y desempleo deja de cumplirse de forma estable.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Cuando ambas suben juntas: la estanflación',
          text: 'Un shock negativo de oferta agregada —como un alza fuerte del precio de un insumo clave— puede desplazar la curva de Phillips de corto plazo de forma desfavorable, haciendo que inflación y desempleo suban al mismo tiempo. Ese fenómeno, llamado estanflación, no se explica como un simple movimiento a lo largo de la curva, sino como un desplazamiento de la curva misma.',
        },
      ],
      exercises: [
        {
          id: 'u13-l3-e1',
          type: 'multiple_choice',
          difficulty: 'facil',
          xp: 10,
          question: 'Según la curva de Phillips de corto plazo, ¿qué relación existe entre inflación y desempleo?',
          options: [
            { id: 'a', text: 'Una relación negativa: cuando el desempleo baja, la inflación tiende a subir, y viceversa' },
            { id: 'b', text: 'Una relación positiva: cuando el desempleo baja, la inflación también tiende a bajar' },
            { id: 'c', text: 'No existe ninguna relación observable entre ambas variables en el corto plazo' },
            { id: 'd', text: 'La inflación determina de forma permanente y automática la tasa natural de desempleo' },
          ],
          correctOptionId: 'a',
          explanation:
            'La curva de Phillips de corto plazo describe una relación negativa: períodos de menor desempleo tienden a coincidir con mayor inflación, y períodos de mayor desempleo con menor inflación, reflejando el mismo mecanismo que conecta la demanda agregada con el producto y los precios.',
        },
        {
          id: 'u13-l3-e2',
          type: 'numeric',
          difficulty: 'media',
          xp: 15,
          question:
            'En un país, un aumento del gasto agregado hace que el desempleo caiga de 7% a 5% (una baja de 2 puntos porcentuales). Si la curva de Phillips de corto plazo de ese país indica que cada punto porcentual de baja en el desempleo se asocia a un aumento de 1,5 puntos porcentuales en la inflación, ¿cuál es el aumento esperado en la inflación, en puntos porcentuales?',
          unitLabel: 'puntos porcentuales',
          answer: 3,
          hint: 'Multiplica la baja en el desempleo (en puntos porcentuales) por la relación indicada.',
          explanation:
            'Baja en el desempleo = 7% − 5% = 2 puntos porcentuales. Aumento esperado en la inflación = 2 × 1,5 = 3 puntos porcentuales.',
        },
        {
          id: 'u13-l3-e3',
          type: 'case_study',
          difficulty: 'dificil',
          xp: 20,
          scenario:
            'Durante varios años, un país experimentó un período en que el desempleo y la inflación subieron al mismo tiempo, después de sucesivos shocks negativos de oferta (como alzas del precio del petróleo) y de que las expectativas de inflación de trabajadores y empresas se ajustaran al alza.',
          question: '¿Qué explica mejor que la disyuntiva de corto plazo entre inflación y desempleo haya dejado de cumplirse de esa forma en ese período?',
          options: [
            {
              id: 'a',
              text: 'Las expectativas de inflación se ajustaron al alza y los shocks de oferta desplazaron la curva de Phillips de corto plazo de forma desfavorable, por lo que ya no bastaba con moverse a lo largo de la misma curva para explicar lo ocurrido',
            },
            { id: 'b', text: 'La curva de Phillips es siempre completamente estable y estos episodios fueron simples errores de medición estadística' },
            { id: 'c', text: 'El desempleo y la inflación nunca pueden subir juntos bajo ninguna circunstancia, según la teoría' },
            { id: 'd', text: 'Los bancos centrales dejaron de influir en la economía durante ese período' },
          ],
          correctOptionId: 'a',
          explanation:
            'Cuando las expectativas de inflación se ajustan al alza y, además, ocurren shocks negativos de oferta, la curva de Phillips de corto plazo se desplaza de forma desfavorable: inflación y desempleo pueden subir juntos, algo que un simple movimiento a lo largo de una curva fija no explica.',
        },
        {
          id: 'u13-l3-e4',
          type: 'open_ended_audio',
          difficulty: 'media',
          xp: 15,
          prompt:
            'Explica en qué consiste la disyuntiva de corto plazo entre inflación y desempleo que describe la curva de Phillips, y por qué esa disyuntiva no se mantiene estable en el largo plazo.',
          keyPoints: [
            {
              id: 'short_run_tradeoff',
              label: 'Explica que en el corto plazo hay una relación negativa entre inflación y desempleo',
              synonyms: [
                'relacion negativa',
                'disyuntiva de corto plazo',
                'baja desempleo sube inflacion',
                'curva de phillips',
                'menos desempleo mas inflacion',
              ],
            },
            {
              id: 'expectations_adjust',
              label: 'Explica que las expectativas de inflación de trabajadores y empresas se ajustan con el tiempo',
              synonyms: [
                'expectativas de inflacion',
                'se ajustan las expectativas',
                'expectativas se incorporan',
                'ajuste de expectativas',
                'la gente anticipa la inflacion',
              ],
            },
            {
              id: 'long_run_no_tradeoff',
              label: 'Concluye que en el largo plazo la disyuntiva desaparece y el desempleo vuelve a su tasa natural',
              synonyms: [
                'tasa natural de desempleo',
                'no hay disyuntiva de largo plazo',
                'largo plazo vertical',
                'desaparece la disyuntiva',
                'el desempleo vuelve a su nivel natural',
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            'En el corto plazo existe una relación negativa entre inflación y desempleo: cuando la demanda agregada empuja el desempleo hacia abajo, la inflación tiende a subir. Pero esa disyuntiva no se mantiene en el largo plazo porque trabajadores y empresas ajustan sus expectativas de inflación con el tiempo, incorporándolas en salarios y precios futuros; cuando eso ocurre, se necesita cada vez más inflación para sostener el mismo nivel de desempleo, y a la larga el desempleo converge a su tasa natural, determinada por factores estructurales y no por la inflación.',
          explanation:
            'Una buena respuesta describe la relación negativa de corto plazo, explica el rol del ajuste de expectativas de inflación, y concluye que en el largo plazo el desempleo converge a su tasa natural, independiente de la inflación.',
        },
      ],
    },
  ],
};
