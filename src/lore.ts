export interface SpeciesLore {
  backstory: string;
  ability: string;
  defect: string;
  trade: string;
}

export const WORLD_LORE = {
  intro:
    'Antes del tiempo, existía una sola entidad: El Origen — una fuerza primordial que mantenía el equilibrio de toda la existencia. Cuando El Origen se fragmentó en La Gran Fragmentación, tres esencias nacieron.',
  realms: {
    seed: {
      name: 'Bosque Eterno',
      essence: 'Semilla (Seed)',
      description:
        'La esencia de la vida y el crecimiento. Su reino es el Bosque Eterno, donde cada planta guarda un fragmento de memoria ancestral.',
    },
    drop: {
      name: 'Océano Profundo',
      essence: 'Gota (Drop)',
      description:
        'La esencia del flujo y la adaptación. Su reino es el Océano Profundo, donde las corrientes conectan todos los mundos.',
    },
    spark: {
      name: 'Cosmos Infinito',
      essence: 'Chispa (Spark)',
      description:
        'La esencia de la energía y la transformación. Su reino es el Cosmos Infinito, donde las estrellas narran historias olvidadas.',
    },
  },
  prophecy:
    'De cada esencia nacieron 9 guardianes — los Regenmons — cada uno con una misión única para restaurar el equilibrio. La profecía dice que cuando los 27 guardianes se reúnan, El Ciclo se completará y El Origen renacerá.',
};

export const SPECIES_LORE: Record<string, SpeciesLore> = {
  // ─── SEED (Bosque Eterno) ───
  'seed-01': {
    backstory:
      'Brote fue el primer ser en emerger de la tierra tras La Gran Fragmentación. Pequeño pero tenaz, guarda en su interior la memoria del primer amanecer del Bosque Eterno.',
    ability:
      'Raíz Ancestral — Puede conectarse con cualquier planta del bosque y acceder a sus recuerdos, desenterrando secretos olvidados por el tiempo.',
    defect:
      'Es extremadamente frágil ante el frío. Una sola helada puede dejarlo en estado de hibernación durante días enteros.',
    trade: 'Semilla del Primer Día — una semilla dorada que brilla con la luz del amanecer original.',
  },
  'seed-02': {
    backstory:
      'Hierba crece donde otros no pueden. Nació de las grietas del suelo quebrado durante La Fragmentación, demostrando que la vida siempre encuentra un camino.',
    ability:
      'Tejido Verde — Puede cubrir cualquier superficie con vegetación en segundos, sanando la tierra dañada y purificando el aire corrupto.',
    defect:
      'No puede dejar de crecer. Si no se le poda regularmente, pierde el control y consume toda la energía a su alrededor.',
    trade: 'Hoja Perenne — una hoja que nunca se marchita ni pierde su color esmeralda.',
  },
  'seed-03': {
    backstory:
      'Trébol nació en un claro donde tres rayos de luz convergieron simultáneamente. Cada una de sus hojas representa una de las tres esencias originales de El Origen.',
    ability:
      'Fortuna Trifolia — Puede alterar las probabilidades a su favor, haciendo que eventos improbables ocurran. Cuantas más hojas tenga, mayor su poder.',
    defect:
      'Su suerte es inestable. A veces la fortuna se invierte y todo le sale mal, causando caos involuntario a su alrededor.',
    trade: 'Hoja de Cuatro — un trébol de cuatro hojas que otorga una pizca de suerte a quien lo porte.',
  },
  'seed-04': {
    backstory:
      'Girasol es el vigía del Bosque Eterno. Siempre orientado hacia la luz, fue designado para recordar la dirección del sol incluso en los días más oscuros.',
    ability:
      'Faro Solar — Puede almacenar luz solar y liberarla como un destello cegador, iluminando hasta las sombras más densas del bosque.',
    defect:
      'Depende completamente de la luz solar. En la oscuridad prolongada se vuelve melancólico y pierde toda su energía vital.',
    trade: 'Pétalo de Amanecer — un pétalo dorado que emite un suave resplandor cálido en la oscuridad.',
  },
  'seed-05': {
    backstory:
      'Espino creció en el borde del desierto que limita con el Bosque Eterno. Es el guardián de las fronteras, protegiendo el reino de intrusos con sus afiladas espinas.',
    ability:
      'Barrera de Púas — Puede crear muros de espinas impenetrables que crecen instantáneamente, formando laberintos defensivos.',
    defect:
      'Sus espinas también hieren a sus aliados. Le resulta imposible el contacto físico sin causar daño, lo que lo convierte en un guardián solitario.',
    trade: 'Espina Cristalina — una espina transparente que puede cortar casi cualquier material.',
  },
  'seed-06': {
    backstory:
      'Hongo nació en la oscuridad bajo las raíces del árbol más antiguo del Bosque Eterno. Vive entre la vida y la descomposición, reciclando lo viejo para dar paso a lo nuevo.',
    ability:
      'Red Micélica — Puede extender una red subterránea invisible que conecta a todos los seres del bosque, permitiéndoles comunicarse sin palabras.',
    defect:
      'Absorbe las emociones de quienes están conectados a su red. Si hay demasiado dolor o miedo cerca, se paraliza completamente.',
    trade: 'Espora Luminosa — una espora que brilla en la oscuridad y puede curar infecciones menores.',
  },
  'seed-07': {
    backstory:
      'Roble es el más antiguo de los guardianes Seed. Su tronco contiene los anillos del tiempo, y en cada anillo está grabada una era del Bosque Eterno.',
    ability:
      'Anillos del Tiempo — Puede leer la historia de cualquier lugar tocando el suelo con sus raíces, viendo siglos de eventos en segundos.',
    defect:
      'Es increíblemente lento. Su velocidad de movimiento y reacción es la más baja de todos los guardianes, confiando siempre en su resistencia.',
    trade: 'Bellota de Sabiduría — una bellota petrificada que susurra consejos ancestrales a quien la escucha.',
  },
  'seed-08': {
    backstory:
      'Bambú creció en un solo día hasta alcanzar las nubes. Es el mensajero vertical del Bosque Eterno, conectando el suelo con el cielo y las raíces con las estrellas.',
    ability:
      'Crecimiento Relámpago — Puede crecer a velocidades absurdas, alcanzando cualquier altura en instantes para explorar o rescatar.',
    defect:
      'Es hueco por dentro. Aunque parece fuerte, un golpe preciso puede quebrarlo fácilmente, revelando su fragilidad interior.',
    trade: 'Flauta de Viento — un segmento de bambú que produce melodías cuando el viento sopla a través de él.',
  },
  'seed-09': {
    backstory:
      'Flora es la última guardiana del Bosque Eterno, nacida de la flor más bella que jamás existió. Su misión es preservar la belleza del mundo incluso cuando todo parezca perdido.',
    ability:
      'Floración Eterna — Puede hacer florecer cualquier cosa, desde plantas muertas hasta corazones rotos, restaurando la esperanza y la vitalidad.',
    defect:
      'Su belleza atrae peligro constantemente. Criaturas oscuras son atraídas por su resplandor, lo que la pone en riesgo perpetuo.',
    trade: 'Perfume del Edén — una esencia floral que trae paz y calma a quien la inhale.',
  },

  // ─── DROP (Océano Profundo) ───
  'drop-01': {
    backstory:
      'Gota fue la primera lágrima de El Origen al fragmentarse. Pequeña y pura, contiene en su interior la esencia concentrada de todos los océanos del mundo.',
    ability:
      'Eco de Marea — Puede multiplicarse infinitamente, creando clones de agua que actúan en perfecta sincronía.',
    defect:
      'Se evapora bajo calor intenso. Las temperaturas altas la debilitan rápidamente y debe buscar refugio en zonas húmedas.',
    trade: 'Lágrima del Origen — una gota de agua perfecta que nunca se seca ni se contamina.',
  },
  'drop-02': {
    backstory:
      'Ola nació del primer choque entre las corrientes del Océano Profundo. Es pura fuerza en movimiento, incapaz de quedarse quieta, siempre avanzando hacia nuevos horizontes.',
    ability:
      'Maremoto Interior — Puede generar olas masivas desde su cuerpo, barriendo obstáculos y creando caminos donde antes no existían.',
    defect:
      'No puede detenerse. Si deja de moverse, comienza a desintegrarse. Debe estar en constante flujo para sobrevivir.',
    trade: 'Espuma Eterna — una espuma marina que nunca se disuelve y puede amortiguar cualquier impacto.',
  },
  'drop-03': {
    backstory:
      'Cristal se formó en las profundidades más frías del Océano Profundo, donde el agua se congela en formas imposibles. Es la memoria congelada del mar.',
    ability:
      'Prisma Glacial — Puede congelar el tiempo en un área pequeña, atrapando momentos en cristales de hielo que preservan todo exactamente como estaba.',
    defect:
      'Es extremadamente frágil. A pesar de su belleza cristalina, un golpe fuerte puede hacerlo añicos, y reconstruirse toma mucho tiempo.',
    trade: 'Copo Perpetuo — un cristal de hielo que nunca se derrite y refracta la luz en arcoíris.',
  },
  'drop-04': {
    backstory:
      'Concha guarda en su interior los sonidos de todas las eras del Océano Profundo. Cada vez que alguien la acerca al oído, escucha una historia diferente del pasado.',
    ability:
      'Resonancia Abisal — Puede emitir frecuencias sonoras que calman a cualquier criatura, incluso a las más feroces, induciéndolas en un trance pacífico.',
    defect:
      'Es extremadamente tímida. Ante el menor peligro se encierra en su caparazón y puede tardar horas en volver a abrirse.',
    trade: 'Perla de Eco — una perla que reproduce el último sonido que escuchó cuando se la presiona.',
  },
  'drop-05': {
    backstory:
      'Coral es el arquitecto del Océano Profundo. Durante eones ha construido ciudades submarinas donde las corrientes se cruzan, creando refugios para toda la vida marina.',
    ability:
      'Arrecife Viviente — Puede construir estructuras de coral a voluntad, creando fortalezas, puentes y laberintos submarinos en minutos.',
    defect:
      'Crece demasiado lento fuera del agua. En tierra firme pierde casi todo su poder constructivo y se vuelve vulnerable.',
    trade: 'Fragmento de Ciudad — un trozo de coral que lentamente construye pequeñas estructuras a su alrededor.',
  },
  'drop-06': {
    backstory:
      'Neón fue creado por las corrientes bioluminiscentes del Océano Profundo. Es un explorador nato que ilumina las zonas más oscuras de las profundidades con su brillo eléctrico.',
    ability:
      'Destello Abisal — Puede emitir pulsos de luz de cualquier color, comunicándose a grandes distancias y cegando temporalmente a depredadores.',
    defect:
      'Su brillo lo delata constantemente. Es incapaz de ocultarse o pasar desapercibido, lo que lo convierte en un blanco fácil en territorios hostiles.',
    trade: 'Escama Prismática — una escama que cambia de color según el ánimo de quien la sostiene.',
  },
  'drop-07': {
    backstory:
      'Aleta es el guardián más temido del Océano Profundo. Patrulla las corrientes fronterizas asegurándose de que ninguna amenaza exterior perturbe la paz del reino.',
    ability:
      'Emboscada Silenciosa — Puede moverse sin producir ninguna vibración en el agua, apareciendo y desapareciendo como un fantasma acuático.',
    defect:
      'Tiene un apetito insaciable. Debe alimentarse constantemente para mantener su velocidad y fuerza, lo que lo distrae de sus deberes.',
    trade: 'Diente de Marea — un diente afilado que puede cortar corrientes de agua, separándolas temporalmente.',
  },
  'drop-08': {
    backstory:
      'Burbuja nació de un suspiro del Océano Profundo. Ligera y efímera, viaja entre la superficie y las profundidades llevando mensajes de un mundo al otro.',
    ability:
      'Cápsula Etérea — Puede encapsular objetos o criaturas dentro de burbujas irrompibles, protegiéndolos del entorno o transportándolos a salvo.',
    defect:
      'Es increíblemente distraída. Se deja llevar por cualquier corriente y pierde la concentración fácilmente, olvidando sus misiones.',
    trade: 'Burbuja de Recuerdo — una burbuja que contiene un momento feliz y lo reproduce cuando estalla.',
  },
  'drop-09': {
    backstory:
      'Lluvia es el puente entre el cielo y el Océano Profundo. Nació cuando la primera nube lloró al ver la belleza del mar, y desde entonces conecta ambos reinos.',
    ability:
      'Diluvio Sanador — Puede invocar lluvias que curan heridas, purifican la tierra contaminada y restauran la energía de los seres vivos.',
    defect:
      'No puede controlar sus emociones. Cuando está triste causa inundaciones, y cuando está feliz provoca tormentas de alegría descontrolada.',
    trade: 'Gota de Nube — una gota de agua que flota en el aire y nunca toca el suelo.',
  },

  // ─── SPARK (Cosmos Infinito) ───
  'spark-01': {
    backstory:
      'Chispa fue el primer destello de energía que nació de La Gran Fragmentación. Pequeña pero poderosa, es el recordatorio de que todo gran cambio comienza con una sola chispa.',
    ability:
      'Ignición Primordial — Puede encender cualquier cosa, desde una fogata hasta la inspiración en el corazón de otros guardianes, catalizando transformaciones.',
    defect:
      'Se apaga fácilmente con agua o viento fuerte. Es la más vulnerable de los guardianes Spark ante los elementos contrarios.',
    trade: 'Mecha Eterna — un filamento que arde sin consumirse, proporcionando luz perpetua.',
  },
  'spark-02': {
    backstory:
      'Rayo cayó del cielo durante la tormenta eléctrica más grande que el Cosmos Infinito jamás presenció. Es velocidad pura, pensamiento convertido en acción instantánea.',
    ability:
      'Descarga Absoluta — Puede moverse a la velocidad de la luz por fracciones de segundo, apareciendo simultáneamente en múltiples puntos del espacio.',
    defect:
      'Es completamente impaciente. No puede esperar ni planificar; actúa por impulso, lo que frecuentemente lo mete en problemas evitables.',
    trade: 'Fragmento de Tormenta — un cristal cargado que chisporrotea con electricidad contenida.',
  },
  'spark-03': {
    backstory:
      'Llama nació en el corazón de una estrella moribunda. Es la voluntad de seguir ardiendo cuando todo parece apagarse, la resistencia convertida en fuego.',
    ability:
      'Corazón Estelar — Puede aumentar su temperatura hasta igualar la de una estrella, derritiendo cualquier barrera y forjando nuevos materiales imposibles.',
    defect:
      'Consume todo a su alrededor sin querer. Su calor es tan intenso que quema aliados y entorno, necesitando aislarse constantemente.',
    trade: 'Brasa Inmortal — una brasa que calienta sin quemar y nunca se extingue.',
  },
  'spark-04': {
    backstory:
      'Estrella es la cartógrafa del Cosmos Infinito. Desde su posición fija en el firmamento, ha mapeado cada rincón del universo y guía a los viajeros perdidos.',
    ability:
      'Mapa Celestial — Puede proyectar un mapa holográfico del universo completo, revelando caminos ocultos y conexiones entre mundos distantes.',
    defect:
      'No puede moverse de su posición. Está anclada a un punto fijo del cosmos, dependiendo de otros guardianes para explorar los lugares que mapea.',
    trade: 'Carta Estelar — un fragmento de mapa celestial que siempre apunta al destino deseado.',
  },
  'spark-05': {
    backstory:
      'Nova nació de la explosión de una supernova, el evento más poderoso del Cosmos Infinito. Lleva dentro de sí la fuerza de mil soles y la responsabilidad de no destruir lo que protege.',
    ability:
      'Explosión Nova — Puede liberar toda su energía en un estallido masivo que ilumina galaxias enteras y reinicia el ciclo de la materia.',
    defect:
      'Después de usar su poder, queda completamente agotada durante largos períodos. Su recuperación es la más lenta de todos los guardianes.',
    trade: 'Polvo de Supernova — un polvo brillante que puede transformar materiales ordinarios en elementos raros.',
  },
  'spark-06': {
    backstory:
      'Cometa viaja eternamente entre los tres reinos, cruzando el Bosque Eterno, el Océano Profundo y el Cosmos Infinito. Es el mensajero que conecta los mundos separados.',
    ability:
      'Estela Dimensional — Deja tras de sí un rastro luminoso que funciona como portal temporal entre los tres reinos, permitiendo el paso entre mundos.',
    defect:
      'No puede quedarse en un lugar. Si permanece quieto más de unas horas, comienza a perder su brillo y eventualmente se desvanece.',
    trade: 'Cola de Luz — un mechón de luz solidificada que guarda la memoria de los lugares que ha visitado.',
  },
  'spark-07': {
    backstory:
      'Luna es la guardiana de la noche y los secretos. Desde su trono plateado observa todo lo que ocurre en la oscuridad, protegiendo los sueños de los seres del mundo.',
    ability:
      'Velo Lunar — Puede envolver cualquier zona en una noche artificial, ocultando a sus aliados y creando un santuario de sombras protectoras.',
    defect:
      'Solo tiene poder durante la noche. Con la llegada del alba pierde casi todas sus habilidades y debe descansar hasta el siguiente anochecer.',
    trade: 'Rayo de Luna — un haz de luz plateada que revela la verdad oculta en cualquier cosa que ilumine.',
  },
  'spark-08': {
    backstory:
      'Sol es la fuente de energía del Cosmos Infinito y el guardián más poderoso de los Spark. Su misión es mantener encendida la llama que alimenta a todos los mundos.',
    ability:
      'Corona Solar — Puede expandir su energía en una onda expansiva de calor y luz que revitaliza a todos los seres en un radio enorme.',
    defect:
      'Su poder es tan inmenso que le cuesta controlarlo. A veces libera más energía de la necesaria, causando sequías y sobrecalentamiento.',
    trade: 'Fragmento de Corona — un trozo de plasma solidificado que irradia calor reconfortante perpetuamente.',
  },
  'spark-09': {
    backstory:
      'Planeta es el más grande y misterioso de todos los guardianes. Orbita silenciosamente los confines del Cosmos Infinito, conteniendo en su interior un mundo entero por descubrir.',
    ability:
      'Gravedad Soberana — Puede manipular la gravedad a su alrededor, atrayendo o repeliendo objetos y criaturas, creando campos de fuerza gravitacionales.',
    defect:
      'Su enorme masa lo hace increíblemente solitario. Otros guardianes no pueden acercarse demasiado sin ser atrapados por su gravedad.',
    trade: 'Anillo Orbital — un anillo de materia cósmica que orbita alrededor de quien lo posee, protegiéndolo de impactos.',
  },
};
