import type { Unit } from "@/content/types";

export const unit11: Unit = {
  id: "u11",
  index: 11,
  subject: "macroeconomia",
  title: "Dinero, bancos e inflación",
  subtitle: "Qué es el dinero, cómo se crea, y por qué a veces pierde valor",
  description:
    "El dinero no es solo billetes y monedas: es un sistema que los bancos ayudan a expandir, y cuya cantidad determina, en el largo plazo, si los precios suben poco o mucho. Esta unidad explica cómo se crea el dinero, por qué crece la inflación, y qué costos trae consigo.",
  icon: "cash-outline",
  color: "#D9784A",
  source: "ambos-macro",
  lessons: [
    {
      id: "u11-l1",
      title: "Qué es el dinero y cómo lo crean los bancos",
      summary:
        "Las tres funciones del dinero, el rol de la banca central y comercial, y cómo el sistema bancario crea dinero nuevo a partir de un depósito.",
      estimatedMinutes: 8,
      content: [
        {
          type: "heading",
          text: "Las tres funciones del dinero",
        },
        {
          type: "paragraph",
          text: "Antes de una economía con dinero, las personas debían intercambiar bienes directamente unos por otros: el trueque. El problema del trueque es que exige una 'doble coincidencia de necesidades' — quien tiene pan y quiere zapatos debe encontrar a alguien que tenga zapatos y quiera pan, justo en ese momento. El dinero resuelve ese problema porque casi cualquier persona lo acepta a cambio de casi cualquier cosa, lo que simplifica enormemente el intercambio.",
        },
        {
          type: "list",
          items: [
            "Medio de cambio: se entrega a cambio de bienes y servicios, y todos confían en que otros también lo aceptarán después.",
            "Unidad de cuenta: es la vara con la que se expresan y comparan los precios, sin importar cuán distintos sean los bienes (una consulta médica y un kilo de pan se pueden comparar en pesos).",
            "Depósito de valor: permite trasladar poder de compra desde el presente hacia el futuro, guardando riqueza para gastarla más adelante.",
          ],
        },
        {
          type: "heading",
          text: "Quién crea el dinero: banca central, bancos comerciales y el multiplicador monetario",
        },
        {
          type: "paragraph",
          text: "El banco central es la institución pública que emite la moneda de curso legal de un país y regula cuánto dinero circula en la economía. Los bancos comerciales, en cambio, son entidades que reciben depósitos del público y otorgan préstamos; no imprimen billetes, pero su actividad de prestar también termina generando dinero nuevo dentro del sistema, como se explica a continuación.",
        },
        {
          type: "paragraph",
          text: "Cuando alguien deposita dinero en un banco, este no lo deja completo guardado en una bóveda: por regulación (y por prudencia), mantiene solo una fracción de ese depósito como reserva, y presta el resto a otros clientes. Ese préstamo, al gastarse, casi siempre termina depositado en otra cuenta bancaria, que a su vez vuelve a prestar una fracción de él. Este proceso se repite muchas veces, y en cada ronda se genera un nuevo depósito: así, un solo depósito inicial termina generando mucho más dinero total en el sistema bancario del que originalmente se depositó.",
        },
        {
          type: "formula",
          label: "El multiplicador monetario",
          text: "Multiplicador monetario = 1 / r (donde r es el coeficiente de reserva)",
        },
        {
          type: "example",
          title: "Ejemplo: de un depósito a mucho más dinero",
          text: "Si el coeficiente de reserva es 20% (r = 0,2), el multiplicador monetario es 1 / 0,2 = 5. Así, un depósito inicial de $500.000 puede terminar generando, a través de rondas sucesivas de préstamos y nuevos depósitos, un total de $500.000 × 5 = $2.500.000 circulando en el sistema bancario — cinco veces el depósito original.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "El dinero bancario no es un truco contable",
          text: "Cuando un banco presta parte de un depósito, ese préstamo se convierte en un nuevo depósito en otra cuenta (la de quien recibió el pago), que a su vez puede volver a prestarse. El dinero adicional que aparece en el sistema no es magia: refleja la confianza de que los bancos podrán devolver los depósitos cuando los clientes los pidan, lo que exige mantener siempre una reserva.",
        },
      ],
      exercises: [
        {
          id: "u11-l1-e1",
          type: "numeric",
          difficulty: "media",
          xp: 15,
          question:
            "Si el coeficiente de reserva de un país es 10% (r = 0,1) y un cliente deposita $800.000 en un banco, ¿cuál es el monto TOTAL de dinero (sumando el depósito original y todos los depósitos que se generan a partir de los préstamos sucesivos) que terminará circulando en el sistema bancario, en pesos, si todos los bancos prestan el máximo permitido?",
          unitLabel: "$",
          answer: 8000000,
          hint: "Calcula primero el multiplicador monetario: 1 dividido por el coeficiente de reserva.",
          explanation: "Multiplicador monetario = 1 / 0,1 = 10. Total de dinero en el sistema = $800.000 × 10 = $8.000.000.",
        },
        {
          id: "u11-l1-e2",
          type: "multiple_choice",
          difficulty: "facil",
          xp: 10,
          question:
            "Camila usa pesos para pagarle a su peluquero, guarda parte de su sueldo en una cuenta de ahorro para el próximo año, y compara el precio de una entrada de cine con el de un almuerzo, ambos expresados en pesos. ¿Qué función del dinero está usando cuando compara esos dos precios en la misma unidad?",
          options: [
            { id: "a", text: "Unidad de cuenta" },
            { id: "b", text: "Medio de cambio" },
            { id: "c", text: "Depósito de valor" },
            { id: "d", text: "Multiplicador monetario" },
          ],
          correctOptionId: "a",
          explanation:
            "Comparar precios de bienes muy distintos usando una misma escala (los pesos) es la función de unidad de cuenta. Pagarle al peluquero es medio de cambio, y guardar parte del sueldo para después es depósito de valor; el multiplicador monetario no es una función del dinero, sino un concepto sobre creación de dinero bancario.",
        },
        {
          id: "u11-l1-e3",
          type: "case_study",
          difficulty: "dificil",
          xp: 20,
          scenario:
            "Banco Andino recibe un depósito de $1.000.000. El coeficiente de reserva legal exigido es 25%, pero el gerente, por prudencia, decide mantener 40% del depósito como reserva y prestar únicamente el 60% restante.",
          question:
            "En comparación con un banco que prestara el máximo permitido por ley (75% del depósito), ¿qué efecto tiene la decisión del gerente de Banco Andino sobre la creación de dinero en el conjunto del sistema bancario?",
          options: [
            {
              id: "a",
              text: "Genera menos dinero nuevo en el sistema, porque al prestar una fracción menor del depósito, arranca una cadena más corta de préstamos y redepósitos",
            },
            { id: "b", text: "Genera más dinero nuevo, porque mantener más reservas da más seguridad a los depositantes" },
            { id: "c", text: "No genera ningún cambio, porque el coeficiente de reserva legal es el único que importa" },
            { id: "d", text: "Genera exactamente el mismo dinero, porque el depósito inicial es igual en ambos casos" },
          ],
          correctOptionId: "a",
          explanation:
            "El multiplicador monetario depende de la fracción del depósito que efectivamente se presta: entre menos preste un banco (más reserva mantenga), menor es la cadena de préstamos y redepósitos que se genera en el resto del sistema, y por lo tanto menor el dinero nuevo creado, aunque el depósito inicial sea el mismo.",
        },
        {
          id: "u11-l1-e4",
          type: "open_ended_audio",
          difficulty: "media",
          xp: 15,
          prompt:
            "Explica, usando tus propias palabras, cómo un banco que recibe un depósito puede terminar generando más dinero del que originalmente se depositó, y qué papel juega el coeficiente de reserva en ese proceso.",
          keyPoints: [
            {
              id: "fractional_reserve",
              label: "Identifica que el banco guarda solo una fracción del depósito como reserva y presta el resto",
              synonyms: [
                "reserva fraccionaria",
                "presta el resto",
                "guarda solo una parte",
                "no presta todo el deposito",
                "mantiene una fraccion",
                "no guarda todo el dinero",
              ],
            },
            {
              id: "redeposit_chain",
              label: "Explica que el dinero prestado se vuelve a depositar y a prestar en rondas sucesivas",
              synonyms: [
                "se vuelve a depositar",
                "cadena de prestamos",
                "se repite el proceso",
                "circula por el sistema bancario",
                "prestamos sucesivos",
                "nuevos depositos",
              ],
            },
            {
              id: "multiplier_link",
              label: "Conecta una reserva más baja con un multiplicador monetario más alto y más dinero creado",
              synonyms: [
                "multiplicador monetario",
                "entre menos reserva mas multiplicador",
                "uno dividido la reserva",
                "mas dinero se crea",
                "relacion inversa con la reserva",
                "multiplica el deposito inicial",
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            "Cuando alguien deposita dinero en un banco, el banco no guarda ese dinero completo: mantiene solo una fracción como reserva y presta el resto a otros clientes. Ese préstamo, cuando se gasta, casi siempre termina depositado en otra cuenta bancaria, que a su vez vuelve a prestar una fracción de él, y así sucesivamente. Cada ronda de préstamos y redepósitos genera dinero adicional en el sistema, de modo que un solo depósito inicial termina generando mucho más dinero total del que se depositó originalmente — eso es lo que mide el multiplicador monetario.",
          explanation:
            "Se espera que la respuesta explique la reserva fraccionaria (el banco presta parte del depósito y guarda el resto), la cadena de redepósitos y nuevos préstamos, y la idea de que esto genera dinero adicional en el sistema.",
        },
      ],
    },
    {
      id: "u11-l2",
      title: "La teoría cuantitativa del dinero y la inflación de largo plazo",
      summary:
        "La ecuación cuantitativa del dinero, por qué el exceso de dinero genera inflación de largo plazo, y el efecto Fisher sobre las tasas de interés.",
      estimatedMinutes: 8,
      content: [
        {
          type: "heading",
          text: "La ecuación cuantitativa del dinero",
        },
        {
          type: "paragraph",
          text: "La teoría cuantitativa del dinero conecta la cantidad de dinero que circula en una economía con el nivel general de precios. Para eso usa cuatro variables: la cantidad de dinero (M), su velocidad de circulación (V, es decir, cuántas veces en promedio cada peso cambia de manos para comprar bienes y servicios en un período), el nivel de precios (P) y la producción real (Y).",
        },
        {
          type: "formula",
          label: "La ecuación cuantitativa",
          text: "M × V = P × Y",
        },
        {
          type: "paragraph",
          text: "Si la velocidad del dinero (V) se mantiene relativamente estable en el tiempo, como suele ocurrir salvo en episodios extremos, entonces cualquier cambio en la cantidad de dinero (M) debe verse reflejado, tarde o temprano, en un cambio proporcional en el valor nominal de la producción (P × Y). En el largo plazo, la producción real (Y) depende de factores como la tecnología, el capital y la fuerza de trabajo, no de cuánto dinero exista en la economía; por eso, cuando el dinero crece más rápido que la producción real, el ajuste ocurre principalmente a través de P: los precios suben. A esto se le llama la neutralidad del dinero en el largo plazo.",
        },
        {
          type: "example",
          title: "Ejemplo: de crecimiento del dinero a inflación",
          text: "Si la cantidad de dinero de un país crece 8% al año, su producción real crece 3% al año y la velocidad del dinero se mantiene aproximadamente constante, la teoría cuantitativa predice una inflación de largo plazo cercana a 8% − 3% = 5% anual: el 'exceso' de dinero que no corresponde a más producción termina reflejándose en precios más altos.",
        },
        {
          type: "heading",
          text: "El efecto Fisher",
        },
        {
          type: "paragraph",
          text: "Cuando alguien presta dinero, le importa cuánto podrá comprar con lo que le devuelvan, no solo el número de pesos. Por eso la tasa de interés nominal (la que aparece en el contrato) tiende a ajustarse según la inflación que se espera durante el préstamo: si se anticipa más inflación, prestamistas y bancos exigen una tasa nominal más alta para proteger el poder de compra de lo que recibirán de vuelta. A esta relación se le llama efecto Fisher.",
        },
        {
          type: "formula",
          label: "El efecto Fisher",
          text: "Tasa de interés nominal = Tasa de interés real + Inflación esperada",
        },
        {
          type: "callout",
          tone: "info",
          title: "Neutral en el largo plazo, no en el corto plazo",
          text: "Esta relación entre dinero e inflación es sobre todo una historia de largo plazo. En el corto plazo, un banco central puede inyectar dinero adicional y estimular la producción y el empleo antes de que los precios terminen de ajustarse; por eso la política monetaria de corto plazo es mucho más compleja que la simple ecuación M × V = P × Y.",
        },
      ],
      exercises: [
        {
          id: "u11-l2-e1",
          type: "numeric",
          difficulty: "facil",
          xp: 10,
          question:
            "Un banco quiere obtener una tasa de interés real de 4% anual sobre los préstamos que otorga. Si la inflación esperada para el próximo año es 6%, ¿qué tasa de interés nominal (en %) debería fijar, según el efecto Fisher?",
          unitLabel: "%",
          answer: 10,
          hint: "Tasa nominal = tasa real + inflación esperada.",
          explanation: "Efecto Fisher: tasa nominal = tasa real + inflación esperada = 4% + 6% = 10%.",
        },
        {
          id: "u11-l2-e2",
          type: "multiple_choice",
          difficulty: "media",
          xp: 15,
          question:
            "El Banco Central de un país aumenta la cantidad de dinero en circulación en 15% durante un año. En el mismo período, la producción real crece 2% y la velocidad del dinero se mantiene prácticamente constante. Según la teoría cuantitativa del dinero, ¿qué debería ocurrir con la inflación de ese año?",
          options: [
            {
              id: "a",
              text: "Debería acercarse a 13% (15% − 2%), porque el dinero crece mucho más rápido que la producción real",
            },
            { id: "b", text: "Debería ser 0%, porque más dinero siempre termina generando más producción, no más precios" },
            { id: "c", text: "Debería ser exactamente 15%, porque la producción real no afecta a los precios" },
            { id: "d", text: "No puede predecirse nada sin conocer las tasas de interés" },
          ],
          correctOptionId: "a",
          explanation:
            "Con velocidad estable, el crecimiento del dinero que no es absorbido por un mayor crecimiento de la producción real se traduce en inflación: 15% − 2% ≈ 13%.",
        },
        {
          id: "u11-l2-e3",
          type: "case_study",
          difficulty: "dificil",
          xp: 20,
          scenario:
            "El gobierno de un país enfrenta un déficit fiscal grande y, en lugar de subir impuestos o endeudarse con el público, le pide al banco central que le financie el gasto imprimiendo dinero nuevo. Durante ese año, la cantidad de dinero en circulación crece 40%, mientras la producción real del país crece apenas 2% y la velocidad del dinero se mantiene relativamente estable.",
          question: "Según la teoría cuantitativa del dinero, ¿qué es más probable que ocurra en ese país?",
          options: [
            {
              id: "a",
              text: "Una inflación muy alta, porque el dinero crece muchísimo más rápido que la producción real, y ese exceso se traduce en un aumento fuerte y sostenido de los precios",
            },
            { id: "b", text: "Ningún efecto sobre los precios, porque el gasto público siempre genera más producción en la misma proporción" },
            { id: "c", text: "Una caída de los precios (deflación), porque el gobierno está gastando más" },
            { id: "d", text: "Un aumento de la producción real de 40%, igualando el crecimiento del dinero" },
          ],
          correctOptionId: "a",
          explanation:
            "Financiar un déficit fiscal imprimiendo dinero, cuando ese dinero crece mucho más rápido que la producción real, es la receta clásica para una inflación alta: el exceso de dinero (40% − 2% ≈ 38%) no tiene más bienes y servicios que 'comprar', así que termina presionando los precios al alza.",
        },
        {
          id: "u11-l2-e4",
          type: "open_ended_audio",
          difficulty: "media",
          xp: 15,
          prompt:
            "Explica la relación entre el crecimiento de la cantidad de dinero y la inflación de largo plazo, usando la ecuación cuantitativa del dinero.",
          keyPoints: [
            {
              id: "quantity_equation",
              label: "Identifica la relación M × V = P × Y entre dinero, velocidad, precios y producción",
              synonyms: [
                "ecuacion cuantitativa",
                "dinero por velocidad",
                "M por V igual P por Y",
                "cantidad de dinero por velocidad",
                "MV igual PY",
                "formula cuantitativa",
              ],
            },
            {
              id: "velocity_stable",
              label: "Señala que la velocidad del dinero es relativamente estable en el tiempo",
              synonyms: [
                "velocidad estable",
                "velocidad constante",
                "no cambia mucho la velocidad",
                "velocidad del dinero fija",
                "velocidad relativamente constante",
                "la velocidad no varia tanto",
              ],
            },
            {
              id: "money_growth_inflation",
              label: "Explica que el dinero creciendo más rápido que la producción real genera inflación de largo plazo",
              synonyms: [
                "crecer mas que la produccion",
                "exceso de dinero",
                "inflacion de largo plazo",
                "imprimir de mas genera inflacion",
                "dinero crece mas rapido que la produccion",
                "demasiado dinero en circulacion",
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            "La ecuación cuantitativa dice que la cantidad de dinero multiplicada por su velocidad de circulación (M × V) es igual al nivel de precios multiplicado por la producción real (P × Y). Como la velocidad del dinero tiende a ser relativamente estable, cuando la cantidad de dinero crece mucho más rápido que la producción real, ese exceso de dinero termina reflejándose en un aumento de los precios: eso es la inflación de largo plazo. Por eso se dice que la inflación sostenida es, en el fondo, un fenómeno monetario.",
          explanation:
            "Se espera que la respuesta mencione la ecuación M × V = P × Y (o su idea equivalente), la estabilidad relativa de la velocidad, y la conclusión de que un crecimiento del dinero superior al de la producción real genera inflación de largo plazo.",
        },
      ],
    },
    {
      id: "u11-l3",
      title: "Los costos de la inflación y la hiperinflación",
      summary:
        "El impuesto inflación, los costos de suela de zapato y de menú, y por qué la hiperinflación es, en el fondo, un fenómeno monetario.",
      estimatedMinutes: 8,
      content: [
        {
          type: "heading",
          text: "Los costos de la inflación",
        },
        {
          type: "paragraph",
          text: "Es tentador pensar que la inflación no es un problema grave mientras los sueldos suban al mismo ritmo que los precios: si todo sube por igual, nadie pierde poder de compra, ¿verdad? En la práctica, la inflación —incluso cuando los ingresos se ajustan— impone costos reales sobre las personas y las empresas, simplemente por el hecho de que los precios cambian todo el tiempo.",
        },
        {
          type: "heading",
          text: "El impuesto inflación",
        },
        {
          type: "paragraph",
          text: "Cuando alguien mantiene dinero en efectivo o en una cuenta que no genera intereses, la inflación erosiona silenciosamente el valor de ese dinero: con el mismo número de pesos, se puede comprar menos con el paso del tiempo. Ese efecto se conoce como el 'impuesto inflación', porque funciona igual que un impuesto —quienes mantienen dinero pierden poder de compra a favor de quien se beneficia de la expansión monetaria— aunque nadie firme un formulario ni reciba una boleta.",
        },
        {
          type: "formula",
          label: "El impuesto inflación (aproximado)",
          text: "Impuesto inflación ≈ Dinero mantenido × Tasa de inflación",
        },
        {
          type: "example",
          title: "Ejemplo: el costo silencioso de mantener efectivo",
          text: "Camila mantiene $2.000.000 en efectivo durante todo un año en el que la inflación es 8%. Nadie le quita ese dinero directamente, pero su poder de compra cae en aproximadamente $2.000.000 × 0,08 = $160.000 durante ese año: esa pérdida de valor es, en la práctica, el impuesto inflación que paga por mantener dinero ocioso en vez de bienes o activos que se ajustan con la inflación.",
        },
        {
          type: "list",
          items: [
            "Costo de 'suela de zapato': el tiempo y esfuerzo que las personas gastan en reducir sus tenencias de dinero cuando la inflación es alta —yendo más seguido al banco, moviendo fondos a cuentas que sí generan interés—, en vez de usar ese tiempo en algo productivo.",
            "Costo de 'menú': el gasto en el que incurren las empresas al tener que actualizar precios con más frecuencia —reimprimir cartas de restaurantes, etiquetas, catálogos y sistemas—, algo que apenas se nota cuando la inflación es baja pero que se vuelve costoso cuando es alta.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "La hiperinflación: casi siempre un fenómeno monetario",
          text: "La hiperinflación —una inflación extremadamente alta y acelerada— casi siempre tiene el mismo origen: un gobierno que no logra financiar su gasto con impuestos ni con deuda, y termina pidiéndole al banco central que le imprima el dinero que necesita. Cuando esa expansión monetaria se vuelve descontrolada, el aumento de precios se retroalimenta: la gente anticipa más inflación, gasta el dinero apenas lo recibe (empeorando el problema), y los precios suben todavía más rápido. Por eso se dice que la hiperinflación es, en esencia, un fenómeno monetario: nace de imprimir demasiado dinero, no de fenómenos como sequías o huelgas.",
        },
      ],
      exercises: [
        {
          id: "u11-l3-e1",
          type: "numeric",
          difficulty: "media",
          xp: 15,
          question:
            "Un comerciante mantiene $3.500.000 en efectivo en la caja de su negocio durante un año en el que la inflación es 6%. Aproximadamente, ¿cuál es el impuesto inflación (en pesos) que paga por mantener ese dinero ocioso durante el año?",
          unitLabel: "$",
          answer: 210000,
          hint: "Multiplica el dinero mantenido por la tasa de inflación expresada como decimal.",
          explanation: "Impuesto inflación ≈ $3.500.000 × 0,06 = $210.000.",
        },
        {
          id: "u11-l3-e2",
          type: "multiple_choice",
          difficulty: "facil",
          xp: 10,
          question:
            "Un supermercado debe reimprimir y volver a pegar las etiquetas de precio de miles de productos cada vez que la inflación se acelera, lo que le genera un gasto adicional constante. ¿Qué tipo de costo de la inflación ilustra mejor esta situación?",
          options: [
            { id: "a", text: "Costo de 'menú'" },
            { id: "b", text: "Costo de 'suela de zapato'" },
            { id: "c", text: "Impuesto inflación" },
            { id: "d", text: "Efecto Fisher" },
          ],
          correctOptionId: "a",
          explanation:
            "Reetiquetar precios con frecuencia es el ejemplo clásico del costo de 'menú': el gasto que enfrentan las empresas por actualizar precios más seguido. El costo de 'suela de zapato' es el tiempo que gastan las personas en reducir sus tenencias de dinero; el impuesto inflación es la pérdida de valor del dinero mantenido; y el efecto Fisher relaciona tasas de interés con inflación esperada.",
        },
        {
          id: "u11-l3-e3",
          type: "case_study",
          difficulty: "dificil",
          xp: 20,
          scenario:
            "El banco central de un país financia, año tras año, un enorme déficit fiscal del gobierno imprimiendo el dinero que este necesita para pagar sus gastos. La cantidad de dinero en circulación crece 300% en un solo año, muy por encima del crecimiento de la producción real, y los precios comienzan a duplicarse cada pocos meses.",
          question: "¿Cuál es la causa fundamental de este episodio de hiperinflación, según la teoría cuantitativa del dinero?",
          options: [
            { id: "a", text: "La expansión descontrolada de la oferta de dinero para financiar el déficit fiscal del gobierno" },
            { id: "b", text: "Una caída repentina en la producción real del país" },
            { id: "c", text: "Un exceso de ahorro de los hogares que reduce el consumo" },
            { id: "d", text: "Una baja sostenida en la velocidad de circulación del dinero" },
          ],
          correctOptionId: "a",
          explanation:
            "La hiperinflación casi siempre nace de una expansión monetaria descontrolada, generalmente para financiar un déficit fiscal que el gobierno no logra cubrir con impuestos o deuda. La caída de la producción, el ahorro de los hogares o la velocidad del dinero pueden influir en episodios puntuales, pero no explican una hiperinflación de esta magnitud.",
        },
        {
          id: "u11-l3-e4",
          type: "open_ended_audio",
          difficulty: "media",
          xp: 15,
          prompt: "Explica qué es el impuesto inflación, y por qué se dice que la hiperinflación es, en el fondo, un fenómeno monetario.",
          keyPoints: [
            {
              id: "inflation_tax",
              label: "Define el impuesto inflación como la pérdida de valor del dinero mantenido por la inflación",
              synonyms: [
                "impuesto inflacion",
                "erosiona el valor del dinero",
                "pierde poder de compra el dinero",
                "se devalua el efectivo",
                "es como un impuesto implicito",
                "el dinero vale menos con el tiempo",
              ],
            },
            {
              id: "hyperinflation_monetary",
              label: "Explica que la hiperinflación nace de una expansión descontrolada de la oferta de dinero",
              synonyms: [
                "exceso de dinero",
                "imprimir demasiado dinero",
                "expansion descontrolada",
                "crecimiento explosivo del dinero",
                "demasiada oferta monetaria",
                "se imprime dinero sin control",
              ],
            },
            {
              id: "deficit_financing",
              label: "Conecta esa impresión de dinero con el financiamiento de un déficit fiscal del gobierno",
              synonyms: [
                "financiar el deficit fiscal",
                "el gobierno imprime para pagar gastos",
                "deficit publico",
                "financiar gasto publico con dinero",
                "imprimir para pagar deudas del gobierno",
                "cubrir el gasto estatal imprimiendo",
              ],
            },
          ],
          minPointsToPass: 2,
          sampleAnswer:
            "El impuesto inflación es la pérdida de poder de compra que sufre quien mantiene dinero en efectivo cuando hay inflación: con el mismo número de pesos, se puede comprar cada vez menos, aunque nadie cobre ese 'impuesto' de forma explícita. La hiperinflación, en cambio, es un caso extremo de este mismo problema: casi siempre ocurre porque un gobierno financia un déficit fiscal que no puede cubrir con impuestos ni deuda, y le pide al banco central que imprima el dinero que necesita. Esa expansión descontrolada de la oferta de dinero es la causa de fondo de la hiperinflación, por eso se dice que es, en esencia, un fenómeno monetario.",
          explanation:
            "Se espera que la respuesta defina el impuesto inflación como la pérdida de valor del dinero mantenido por causa de la inflación, y explique que la hiperinflación se origina, fundamentalmente, en una expansión descontrolada de la oferta de dinero, muchas veces para financiar un déficit fiscal.",
        },
      ],
    },
  ],
};
