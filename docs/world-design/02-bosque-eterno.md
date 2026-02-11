# BOSQUE ETERNO — Documento de Diseno del Reino

> *"La esencia de la vida y el crecimiento. Su reino es el Bosque Eterno, donde cada planta guarda un fragmento de memoria ancestral."*

---

## 1. Vision General del Reino

### Tema

El Bosque Eterno es un bosque antiguo y encantado que existe desde antes de que el tiempo tuviera nombre. Cada arbol, cada raiz, cada hoja guarda un fragmento de la memoria de El Origen. Es un reino vivo que respira, crece y recuerda. Los 9 guardianes Seed son los protectores de esta tierra sagrada, cada uno custodiando una zona que refleja su naturaleza.

### Atmosfera

El Bosque Eterno transmite una sensacion de misterio sereno. La luz se filtra entre las copas de arboles centenarios creando haces dorados que danzan sobre el musgo. El aire huele a tierra mojada, resina y flores silvestres. Se escucha el crujir de ramas, el canto de criaturas ocultas y, si se presta atencion, el murmullo de las plantas comunicandose a traves de la Red Micelica de Hongo.

Hay una tension subyacente: el bosque esta enfermo. Desde La Gran Fragmentacion, zonas de corrupcion llamadas "La Marchitez" avanzan lentamente, convirtiendo la vegetacion viva en madera petrificada y gris. Los guardianes luchan por mantener el equilibrio, pero necesitan ayuda.

### Paleta de Colores (Estetica Game Boy)

La paleta base del Bosque Eterno utiliza cuatro tonos principales, respetando la limitacion clasica del Game Boy pero con variaciones por zona:

- **Verde Musgo Oscuro** (#2D5A27) — Sombras, copas densas, vegetacion profunda
- **Verde Hoja** (#4CAF50) — Vegetacion principal, hierba, hojas
- **Verde Claro / Lima** (#8BC34A) — Zonas iluminadas, brotes nuevos, claros
- **Amarillo Amanecer** (#CDDC39) — Luz solar filtrada, flores, destellos

Cada zona tiene su propia variacion de esta paleta. Por ejemplo, la Gruta Micelica usa tonos azul-verdosos bioluminiscentes, y el Desierto de Espinas cambia a tonos ocre y arena.

### Ambiente Musical

La musica del Bosque Eterno es organica y ciclica. Cada zona tiene su propio tema, pero todos comparten un motivo melodico principal: **"El Latido de la Semilla"**, una nota grave y ritmada que suena como el pulso de la tierra.

| Zona | Estilo Musical |
|------|---------------|
| Claro del Amanecer | Arpa suave con pajaros al fondo. Melodia esperanzadora y sencilla. |
| Pradera Salvaje | Flauta de viento alegre con ritmo de pasos sobre hierba. Energia juguetona. |
| Jardin Solar | Acordes calidos de guitarra acustica. Sensacion de mediodía estival. |
| Desierto de Espinas | Percusion seca y rasgueos de cuerdas tensas. Viento silbante. Tension arida. |
| Gruta Micelica | Ecos subterraneos, gotas de agua, tonos graves y sintetizadores etéreos. |
| Arboleda Ancestral | Coro grave y lento como un organo de madera. Tiempo detenido. Solemnidad. |
| Canaval del Cielo | Flauta de bambu con melodia ascendente. Viento entre canas. Verticalidad. |
| Jardin del Eden | Orquesta floral completa. Todos los temas anteriores convergen en armonia. |

---

## 2. Mapa de Zonas

El Bosque Eterno contiene 8 zonas interconectadas, organizadas en un patron que va desde el centro (donde nace la vida) hacia los extremos (donde la vida se adapta y resiste). El portal al Nexo (hub central entre los tres reinos) se encuentra en el Claro del Amanecer.

### Estructura General

```
                    +-----------------------+
                    |  CANAVAL DEL CIELO    |
                    |  (Bambu - seed-08)    |
                    +-----------+-----------+
                                |
                    +-----------+-----------+
                    | ARBOLEDA ANCESTRAL    |
                    |  (Roble - seed-07)    |
                    +-----------+-----------+
                                |
  +-------------------+---------+---------+-------------------+
  | DESIERTO DE       |  CLARO DEL        | JARDIN SOLAR      |
  | ESPINAS           |  AMANECER         | (Girasol-seed-04) |
  | (Espino-seed-05)  |  (Brote-seed-01)  |                   |
  +---------+---------+---------+---------+---------+---------+
                                |
                    +-----------+-----------+
                    |  PRADERA SALVAJE      |
                    | (Hierba-02/Trebol-03) |
                    +-----------+-----------+
                          |           |
            +-------------+--+  +-----+-------------+
            | GRUTA MICELICA |  | JARDIN DEL EDEN   |
            | (Hongo-seed-06)|  | (Flora - seed-09) |
            +----------------+  +-------------------+
```

---

## 3. Diseno Detallado por Zona

---

### 3.1 CLARO DEL AMANECER

**Guardian:** Brote (seed-01) — El primer ser en emerger de la tierra tras La Gran Fragmentacion.

#### Estilo Visual

- **Tiles:** Hierba corta y brillante, caminos de tierra suave con pequenas piedras redondeadas. Un gran claro circular rodeado de arboles jovenes.
- **Colores:** Verde lima (#8BC34A) dominante con toques de amarillo amanecer (#CDDC39). La luz es suave y difusa, como las primeras horas del dia.
- **Landmarks:**
  - **La Piedra del Origen:** Un monolito de roca cubierto de musgo en el centro exacto del claro. Tiene grabados antiguos que brillan al amanecer. Es aqui donde Brote emergio por primera vez.
  - **El Portal al Nexo:** Un arco natural formado por dos arboles entrelazados cuyas raices crean un circulo perfecto. A traves de el se puede viajar al hub central entre los tres reinos.
  - **El Tocón del Consejo:** Un tronco cortado enorme donde los guardianes se reunen. Tiene 9 marcas talladas, una por cada guardian Seed.

#### Guardianes Presentes

- **Brote** reside permanentemente junto a La Piedra del Origen. Es el primer guardian que el jugador conoce y actua como guia introductorio del Bosque Eterno. A pesar de su tamano diminuto, su voz es firme y amable.

#### Enemigos y Obstaculos

- **Marchitas:** Plantas corrompidas por La Marchitez que se arrastran lentamente. Son los enemigos basicos del juego: lentas, predecibles, pero numerosas. Se derritan con un solo golpe y dejan "Savia Pura" al ser purificadas.
- **Espinas Grises:** Zarzas petrificadas que bloquean caminos. No son enemigos activos sino obstaculos estaticos que requieren la habilidad de Tejido Verde (obtenida de Hierba) para ser eliminadas.
- **Niebla de Olvido:** Una bruma gris que cubre ciertas esquinas del claro. Si el jugador entra, pierde la orientacion temporalmente (la pantalla se invierte durante unos segundos).

#### Items y Coleccionables

- **Semilla del Primer Dia** (trade de Brote) — Se obtiene al completar la primera mision de Brote. Es una semilla dorada que brilla con la luz del amanecer original. Funciona como llave para acceder a zonas bloqueadas en otros reinos.
- **Fragmentos de Memoria (x5)** — Cristales verdes escondidos en el claro que, al recolectarse todos, revelan un flashback de La Gran Fragmentacion.
- **Corazon de Savia** — Aumenta la vida maxima del jugador. Esta oculto detras de La Piedra del Origen, accesible solo despues de obtener la Raiz Ancestral.

#### Conexiones

- **Norte:** Arboleda Ancestral (a traves de un sendero de raices elevadas)
- **Este:** Jardin Solar (cruzando un prado de flores doradas)
- **Oeste:** Desierto de Espinas (el bosque se va secando progresivamente)
- **Sur:** Pradera Salvaje (campo abierto de hierba alta)
- **Portal al Nexo:** En el centro del claro

#### Puzzles y Mecanicas

- **Puzzle de la Conexion Raiz:** Brote le ensena al jugador la habilidad "Raiz Ancestral". El jugador debe tocar 3 arboles en el orden correcto (indicado por los grabados de La Piedra del Origen) para que sus raices se conecten subterraneamente y abran un pasaje secreto bajo el claro.
- **Mecanica del Amanecer:** Ciertas areas del claro solo son accesibles durante el "amanecer" del juego (ciclo dia/noche). La luz del amanecer revela plataformas invisibles y activa mecanismos dormidos.

---

### 3.2 PRADERA SALVAJE

**Guardianes:** Hierba (seed-02) y Trebol (seed-03) — La resiliente y el afortunado.

#### Estilo Visual

- **Tiles:** Hierba alta que se mece con el viento (animacion ciclica de 4 frames). Colinas suaves con caminos serpenteantes. Flores silvestres dispersas por toda la zona.
- **Colores:** Verde intenso (#4CAF50) con toques de blanco (margaritas), amarillo (dientes de leon) y morado (lavanda). La paleta mas alegre y luminosa del reino.
- **Landmarks:**
  - **Las Colinas Gemelas:** Dos colinas identicas donde Hierba y Trebol residen respectivamente. En la cima de cada una hay un altar natural donde cada guardian medita.
  - **El Arroyo Cantarin:** Un riachuelo que cruza toda la pradera de este a oeste. Su agua cristalina refleja los colores del cielo y emite una melodia constante.
  - **El Campo de Treboles:** Una explanada inmensa donde crecen miles de treboles. Escondido entre ellos hay un unico Trebol de Cuatro Hojas (coleccionable secreto).

#### Guardianes Presentes

- **Hierba** recorre toda la pradera sin parar, cubriendo con vegetacion las zonas danadas por La Marchitez. Si el jugador la sigue el tiempo suficiente, revela senderos ocultos que solo la hierba nueva puede marcar.
- **Trebol** permanece en el Campo de Treboles, ofreciendo desafios basados en suerte y probabilidad. Es bromista y jugueton, pero sus pruebas son genuinamente utiles.

#### Enemigos y Obstaculos

- **Cortavientos:** Criaturas invisibles que generan rafagas de viento capaces de empujar al jugador hacia trampas o fuera de plataformas. Se revelan cuando la hierba se mueve en patrones antinaturales.
- **Hierbajos Parasitos:** Maleza corrupta que crece rapidamente y drena la energia del jugador al contacto. Se propagan si no se eliminan rapido, cubriendo el terreno en segundos.
- **Trampas de Suerte:** Zonas donde el efecto de la Fortuna Trifolia de Trebol se ha desbordado. Al pisar estos parches de treboles brillantes, puede ocurrir algo bueno (items gratis) o algo malo (enemigos extra). Pura aleatoriedad.

#### Items y Coleccionables

- **Hoja Perenne** (trade de Hierba) — Una hoja que nunca se marchita. Permite al jugador sanar un punto de vida por cada 30 segundos que la porte en el inventario activo.
- **Hoja de Cuatro** (trade de Trebol) — Aumenta la probabilidad de drops raros mientras el jugador la lleve equipada. Se obtiene al encontrar el Trebol secreto en el Campo de Treboles.
- **Bulbos de Pradera (x8)** — Flores sin abrir escondidas por toda la zona. Al recolectar las 8, el Arroyo Cantarin revela un pasaje subterraneo hacia la Gruta Micelica.
- **Flauta de Hierba** — Un item musical escondido bajo una de las Colinas Gemelas. Al tocarla, atrae animales pacificos que revelan secretos del mapa.

#### Conexiones

- **Norte:** Claro del Amanecer (subiendo por un prado de transicion)
- **Suroeste:** Gruta Micelica (a traves de una madriguera oculta bajo la raiz de un arbol caido, o por el pasaje del Arroyo Cantarin)
- **Sureste:** Jardin del Eden (un sendero de flores que se vuelve cada vez mas exuberante)

#### Puzzles y Mecanicas

- **Puzzle del Viento Verde:** Hierba ensena al jugador la habilidad "Tejido Verde", que permite cubrir superficies con vegetacion. El puzzle consiste en crear puentes de hierba sobre vados del Arroyo Cantarin para cruzar a zonas inaccesibles. La hierba solo crece en suelo fertil (marron), no en roca (gris).
- **Minijuego de la Fortuna:** Trebol ofrece un juego de azar. El jugador elige entre 3 cofres; el contenido es aleatorio pero ponderado por la cantidad de Hojas de Cuatro recolectadas. Este minijuego se puede repetir infinitamente y es la principal fuente de items consumibles.
- **Mecanica del Crecimiento Descontrolado:** Si el jugador usa Tejido Verde demasiadas veces seguidas en la misma area, la hierba se descontrola (reflejando el defecto de Hierba) y genera una ola de vegetacion que el jugador debe esquivar.

---

### 3.3 JARDIN SOLAR

**Guardian:** Girasol (seed-04) — El vigia del Bosque Eterno.

#### Estilo Visual

- **Tiles:** Campos de girasoles altos y uniformes que siempre miran hacia la fuente de luz. Suelo arenoso dorado entre las filas. Caminos de baldosas amarillas desgastadas.
- **Colores:** Amarillo dominante (#CDDC39, #FFC107) con tallos de verde oscuro (#2D5A27). El cielo siempre esta despejado en esta zona, con un sol brillante (sprite blanco pulsante).
- **Landmarks:**
  - **La Torre del Vigia:** Una estructura natural formada por girasoles entrelazados que se elevan 20 metros. Girasol reside en su cima y desde alli observa todo el Bosque Eterno. El jugador puede subir para obtener una vista panoramica de las zonas circundantes.
  - **El Reloj Solar:** Un gigantesco reloj de sol natural formado por la sombra de la Torre del Vigia. Las horas estan marcadas por petalos incrustados en el suelo. Activa mecanismos distintos segun la hora del dia.
  - **Los Espejos de Petalo:** Girasoles gigantes con petalos pulidos que reflejan y redirigen la luz solar. Son la mecanica central de los puzzles de esta zona.

#### Guardian Presente

- **Girasol** vive en la cima de la Torre del Vigia. Es sereno pero melancolico cuando las nubes cubren el sol. Otorga al jugador la habilidad "Faro Solar" despues de completar su prueba: un puzzle de luz que requiere iluminar todos los rincones oscuros del jardin.

#### Enemigos y Obstaculos

- **Sombras Rastreras:** Manchas oscuras con forma de charco que se deslizan por el suelo, evitando la luz. Al tocar al jugador le roban energia. Solo se eliminan redirigiendo luz solar hacia ellas.
- **Nubes Parasitas:** Nubecillas grises que flotan sobre el jardin y bloquean la luz solar a zonas especificas. El jugador debe disiparlas con destellos del Faro Solar o esperar a que el viento las mueva.
- **Girasoles Corrompidos:** Girasoles que miran hacia abajo (no hacia el sol) y disparan semillas oscuras al jugador. Se purifican redirigiendo luz hacia ellos con los Espejos de Petalo.

#### Items y Coleccionables

- **Petalo de Amanecer** (trade de Girasol) — Un petalo dorado que emite un suave resplandor calido en la oscuridad. Funciona como linterna perpetua en zonas oscuras del juego.
- **Semillas de Luz (x6)** — Semillas doradas escondidas en zonas que solo se revelan bajo la luz directa del sol a horas especificas del Reloj Solar.
- **Prisma Natural** — Un cristal escondido bajo la Torre del Vigia que permite dividir un rayo de luz en 3 direcciones. Esencial para puzzles avanzados.

#### Conexiones

- **Oeste:** Claro del Amanecer (regresando por el prado de flores doradas)
- **Sur-indirecta:** Jardin del Eden (un tunel de raices iluminado por luz filtrada, solo accesible despues de resolver el puzzle del Reloj Solar)

#### Puzzles y Mecanicas

- **Mecanica de Redireccion de Luz:** El jugador utiliza los Espejos de Petalo para redirigir rayos de sol hacia objetivos especificos: puertas selladas con cerradura de luz, plataformas solares que se elevan al ser iluminadas, y enemigos de sombra.
- **Puzzle del Reloj Solar:** El jugador debe colocar 4 petalos en las posiciones correctas del reloj para crear una alineacion solar que abra la puerta a un deposito subterraneo. La pista esta en los grabados de la Piedra del Origen en el Claro del Amanecer.
- **Mecanica de Carga Solar:** El jugador puede "cargar" energia solar parandose bajo la luz directa. Esta energia se consume al usar el Faro Solar. Si el jugador pasa demasiado tiempo en sombra, pierde la carga gradualmente (reflejando el defecto de Girasol).

---

### 3.4 DESIERTO DE ESPINAS

**Guardian:** Espino (seed-05) — El guardián solitario de la frontera.

#### Estilo Visual

- **Tiles:** Arena ocre con grietas secas. Cactus de multiples formas y tamanos. Rocas rojizas y formaciones de arenisca. La transicion desde el Bosque es gradual: los arboles se van secando, perdiendo hojas, hasta dar paso a tierra arida.
- **Colores:** Ocre (#C49B3F), arena palida (#DDD5B5), verde cactus oscuro (#2D5A27), y rojo espina (#8B4513). La paleta mas calida y seca del reino.
- **Landmarks:**
  - **El Laberinto de Puas:** Un laberinto viviente formado por muros de espinas que Espino genera y reconfigura. Es el desafio principal de la zona. Los muros cambian de posicion cada vez que el jugador entra.
  - **La Frontera Marchita:** El borde extremo del Bosque Eterno. Mas alla se extiende un paramo gris e inerte: la zona de La Marchitez pura. Espino patrulla esta linea para impedir que la corrupcion avance.
  - **El Oasis Oculto:** Un pequeno manantial protegido por un circulo de cactus gigantes. Es el unico lugar donde Espino puede descansar sin herir a nadie con sus espinas. Funciona como punto de guardado y curacion.

#### Guardian Presente

- **Espino** patrulla la frontera oeste del Bosque Eterno en solitario. Es hosco y desconfiado al principio, pero revela un corazon noble. Su soledad es su mayor dolor: sus espinas hieren a cualquiera que se acerque. El jugador debe demostrar valor cruzando el Laberinto de Puas para ganarse su respeto.

#### Enemigos y Obstaculos

- **Escorpiones de Arena:** Criaturas rapidas que se entierran bajo la arena y emergen para atacar. Dejan un rastro sutil en la superficie que el jugador atento puede detectar.
- **Tumbleweeds Corruptos:** Plantas rodadoras que persiguen al jugador y explotan al contacto, dejando esporas toxicas temporales.
- **Muros de Espinas Cambiantes:** Las paredes del Laberinto de Puas que se reorganizan. El jugador recibe dano al tocarlas. Algunas espinas tienen un brillo cristalino, indicando puntos debiles que se pueden cortar.
- **Tormenta de Arena:** Evento periodico que reduce la visibilidad a 3 tiles de distancia y empuja al jugador en la direccion del viento. Hay refugios de roca dispersos por la zona.

#### Items y Coleccionables

- **Espina Cristalina** (trade de Espino) — Una espina transparente que funciona como herramienta de corte. Permite destruir obstaculos de madera y zarza en todo el juego.
- **Agua del Oasis (x3)** — Frascos de agua curativa escondidos en el Oasis Oculto y sus alrededores. Restauran toda la vida del jugador.
- **Mapa del Laberinto** — Un pergamino escondido bajo una roca que muestra la configuracion ACTUAL del laberinto. Cambia cada vez que el laberinto se reconfigura.
- **Corazon de Cactus** — Aumenta la vida maxima. Esta protegido por el cactus mas grande de la zona, al que se accede solo desde un tunel subterraneo.

#### Conexiones

- **Este:** Claro del Amanecer (regresando por el bosque que se va reverdeciendo)
- **Sin conexion directa a otras zonas** — El Desierto de Espinas es deliberadamente un callejon sin salida. Es la frontera. El jugador debe regresar por donde vino, reforzando la sensacion de aislamiento de Espino.

#### Puzzles y Mecanicas

- **Puzzle del Laberinto Vivo:** El Laberinto de Puas se reconfigura cada vez que el jugador entra a una nueva seccion. La clave es seguir el patron de las espinas cristalinas: forman una linea guia que siempre lleva al centro, donde Espino espera.
- **Mecanica de la Barrera de Puas:** Despues de aliarse con Espino, el jugador obtiene la habilidad "Barrera de Puas" que permite crear muros temporales de espinas. Estos muros bloquean enemigos, activan interruptores de presion y protegen de proyectiles. Pero cuidado: los aliados NPC tambien reciben dano al tocarlos (reflejando el defecto de Espino).
- **Desafio de la Frontera:** El jugador puede intentar cruzar La Frontera Marchita, pero la corrupcion drena su vida rapidamente. Solo con la Semilla del Primer Dia (de Brote) y el Petalo de Amanecer (de Girasol) combinados se puede crear una barrera temporal que permite explorar brevemente el paramo y encontrar un fragmento de lore critico sobre La Gran Fragmentacion.

---

### 3.5 GRUTA MICELICA

**Guardian:** Hongo (seed-06) — El que vive entre la vida y la descomposicion.

#### Estilo Visual

- **Tiles:** Roca humeda con musgo bioluminiscente. Hongos de todos los tamanos emitiendo luz azul, verde y purpura. Estalagmitas y estalactitas. Charcos de agua oscura que reflejan la bioluminiscencia.
- **Colores:** Azul profundo (#1A237E) como base, con tonos bioluminiscentes de cyan (#00BCD4), purpura (#7C4DFF) y verde fosforito (#00E676). Es la unica zona del Bosque Eterno con una paleta completamente diferente.
- **Landmarks:**
  - **El Arbol Invertido:** Las raices del arbol mas antiguo del Bosque Eterno penetran el techo de la cueva, creando un arbol al reves que gotea savia luminosa. Es aqui donde nacio Hongo.
  - **La Red Visible:** En el centro de la gruta, la Red Micelica de Hongo se hace visible: hilos brillantes que recorren paredes, suelo y techo como un sistema nervioso vegetal. Pulsan con luz cuando transmiten mensajes.
  - **El Jardin de la Descomposicion:** Una camara donde plantas muertas del bosque superior son recicladas por los hongos, transformandose en nuevo suelo fertil. Es bello y ligeramente perturbador.

#### Guardian Presente

- **Hongo** permanece en el centro de la Red Visible, inmovil, conectado a todo el bosque a traves de sus micelios. Habla sin voz; sus palabras aparecen directamente en la pantalla como texto flotante, emanando de la red. Es empatico hasta el extremo: si el jugador ha perdido muchas vidas, Hongo lo notara y ofrecera ayuda adicional.

#### Enemigos y Obstaculos

- **Esporas Toxicas:** Nubes flotantes de esporas venenosas que se mueven en patrones predecibles. Al contacto, envenenan al jugador (dano gradual durante 10 segundos). Se disipan con corrientes de aire (abanicos naturales en la cueva).
- **Hongos Explosivos:** Setas rojas con puntos blancos que explotan al ser tocadas. Pueden usarse estrategicamente para destruir paredes debiles.
- **Sombras Emocionales:** Manifestaciones del defecto de Hongo. Son ecos de dolor y miedo que la red ha absorbido. Aparecen como siluetas oscuras que persiguen al jugador lentamente. No se pueden destruir, solo esquivar o calmar con la Flauta de Hierba o el Perfume del Eden.
- **Plataformas de Hongo:** Setas gigantes que funcionan como plataformas. Algunas son estables, otras se hunden al pisarlas, y otras rebotan al jugador hacia arriba.

#### Items y Coleccionables

- **Espora Luminosa** (trade de Hongo) — Una espora que brilla en la oscuridad y puede curar envenenamiento. Se convierte en la cura permanente contra las Esporas Toxicas.
- **Cristales de Eco (x7)** — Cristales que contienen fragmentos de conversaciones entre los guardianes, grabadas por la Red Micelica. Revelan lore sobre las relaciones entre los 9 guardianes Seed.
- **Mapa Micelico** — Al conectarse a la Red Visible, el jugador obtiene un mapa completo de la gruta que tambien muestra la posicion de enemigos en tiempo real.
- **Hongos Curativos (x4)** — Setas comestibles dispersas por la gruta que restauran vida. Regeneran lentamente tras ser recolectadas.

#### Conexiones

- **Noreste:** Pradera Salvaje (subiendo por la madriguera o el pasaje del Arroyo Cantarin)
- **Profundidad:** El Corazon del Bosque (la mazmorra principal — una puerta sellada con 9 cerraduras de raiz, una por cada guardian)

#### Puzzles y Mecanicas

- **Mecanica de la Red Micelica:** Hongo otorga al jugador la habilidad "Red Micelica", que permite detectar objetos ocultos y enemigos a traves de las paredes en cualquier zona subterranea del juego. La red pulsa con luz cuando algo esta cerca.
- **Puzzle de las Emociones:** El jugador debe atravesar una camara donde la Red absorbe sus emociones (representadas por el estado de sus stats: vida, energia, items). Segun su estado actual, la camara genera un desafio personalizado. Con vida baja, genera sombras de miedo. Con inventario lleno, genera criaturas de codicia. La solucion siempre es equilibrar los stats antes de entrar.
- **Puzzle de Propagacion:** El jugador debe guiar una espora luminosa a traves de un laberinto de tuneles soplando (usando corrientes de aire) para iluminar una camara completamente oscura. La espora rebota en paredes y se divide al chocar con cristales.

---

### 3.6 ARBOLEDA ANCESTRAL

**Guardian:** Roble (seed-07) — El mas antiguo de todos los guardianes.

#### Estilo Visual

- **Tiles:** Troncos masivos que ocupan multiples tiles. Raices gruesas que forman puentes y escaleras naturales. Suelo cubierto de hojas secas en tonos dorados y marrones. Luz ambiental tenue filtrada por copas enormes.
- **Colores:** Marron corteza (#5D4037), dorado otonal (#FF8F00), verde musgo oscuro (#2D5A27) y ambar (#FFB300). La paleta evoca un otono perpetuo, como si el tiempo se hubiera detenido en esta estacion.
- **Landmarks:**
  - **El Gran Roble:** El arbol mas grande del Bosque Eterno. Su tronco tiene 30 metros de diametro y sus raices se extienden por toda la zona. Los anillos de su interior contienen la historia completa del mundo. Roble ES este arbol; su conciencia habita en el.
  - **Los Anillos del Tiempo:** Secciones del tronco del Gran Roble expuestas donde se pueden ver los anillos de crecimiento. Cada anillo tiene grabada una era. El jugador puede "leer" los anillos para obtener flashbacks jugables de eventos historicos.
  - **El Cementerio de Hojas:** Una explanada cubierta de hojas secas donde descansan los espiritus de arboles caidos. Es un lugar solemne donde el viento no sopla jamas.

#### Guardian Presente

- **Roble** no se mueve. Su voz resuena desde el Gran Roble como un eco profundo y lento. Cada frase tarda varios segundos en completarse. Es sabio, paciente y ligeramente melancolico. Tiene la respuesta a casi cualquier pregunta, pero hay que saber esperar.

#### Enemigos y Obstaculos

- **Termitas del Tiempo:** Insectos que devoran la madera y, con ella, los recuerdos almacenados. Si alcanzan un Anillo del Tiempo, destruyen un fragmento de lore. El jugador debe proteger los anillos.
- **Raices Retorcidas:** Raices corrompidas que se mueven como tentaculos y bloquean pasajes. Se calman al tocar una melodia en la Flauta de Viento (obtenida de Bambu).
- **Espiritus Olvidados:** Fantasmas de arboles antiguos que deambulan por el Cementerio de Hojas. No son agresivos salvo que el jugador perturbe las hojas (corriendo en vez de caminando). Al enfurecerse, son rapidos y hacen mucho dano.
- **La Lentitud de Roble:** El Gran Roble actua como aliado pero con un delay enorme. Si el jugador pide ayuda a Roble (por ejemplo, que mueva una raiz), la accion tarda 30 segundos reales en ejecutarse. El jugador debe planificar con anticipacion.

#### Items y Coleccionables

- **Bellota de Sabiduria** (trade de Roble) — Una bellota petrificada que susurra consejos. Al equiparla, muestra pistas sutiles cuando el jugador esta atascado en un puzzle (el texto aparece lentamente, respetando la naturaleza de Roble).
- **Anillos de Memoria (x5)** — Fragmentos de los Anillos del Tiempo que se pueden recolectar. Cada uno desbloquea un flashback jugable:
  1. La Gran Fragmentacion (como se rompio El Origen)
  2. El nacimiento de Brote (el primer amanecer)
  3. La construccion del Laberinto de Puas (Espino defendiendo la frontera)
  4. La primera flor de Flora (el Jardin del Eden tomando forma)
  5. La profecia de los 27 guardianes
- **Resina Ambar** — Un item que ralentiza a todos los enemigos en pantalla durante 15 segundos. Escondida en una cavidad del Gran Roble.

#### Conexiones

- **Sur:** Claro del Amanecer (descendiendo por el sendero de raices)
- **Norte:** Canaval del Cielo (donde las raices del Roble dan paso a las canas de bambu)

#### Puzzles y Mecanicas

- **Mecanica de Lectura de Anillos:** El jugador toca los anillos expuestos del Gran Roble para entrar en flashbacks jugables. Estos flashbacks son minizonas con mecanicas simplificadas que revelan la historia del mundo. Completar los 5 flashbacks otorga la habilidad "Vision de Eras", que permite ver el estado pasado de cualquier habitacion (util para encontrar objetos enterrados o caminos colapsados).
- **Puzzle del Tiempo Lento:** Una camara donde todo se mueve a velocidad reducida excepto el jugador. Enemigos, plataformas y proyectiles van en camara lenta. El jugador debe usar esta ventaja temporal para cruzar una seccion que en velocidad normal seria imposible.
- **Puzzle de las Raices Conectadas:** El jugador debe convencer a Roble de mover 4 raices enormes en un orden especifico para crear un puente hacia el Canaval del Cielo. Como cada movimiento tarda 30 segundos, el jugador debe dar las 4 instrucciones en el orden correcto desde el principio, o esperar a que Roble "piense" antes de reintentarlo.

---

### 3.7 CANAVAL DEL CIELO

**Guardian:** Bambu (seed-08) — El mensajero vertical.

#### Estilo Visual

- **Tiles:** Canas de bambu de distintos grosores que se elevan hacia arriba. El suelo esta cubierto de hojas de bambu caidas. La zona es predominantemente VERTICAL: el jugador sube por niveles, escalando canas, saltando entre plataformas de bambu.
- **Colores:** Verde bambu claro (#81C784), verde jade (#009688), blanco nube (#ECEFF1) y azul cielo (#90CAF9). A medida que el jugador asciende, el verde da paso al azul y blanco de las nubes.
- **Landmarks:**
  - **La Gran Cana:** Una cana de bambu colosal que atraviesa toda la zona de abajo a arriba. Bambu reside en su interior y la usa como tubo de transporte rapido. El jugador puede entrar y ser lanzado hacia arriba o hacia abajo.
  - **El Nido del Viento:** Una plataforma natural en lo mas alto donde las corrientes de aire convergen. Aqui el viento es tan fuerte que el jugador debe agarrarse a las canas para no ser lanzado al vacio.
  - **Las Flautas Naturales:** Segmentos huecos de bambu cortados a distintas alturas que emiten notas musicales cuando el viento sopla a traves de ellos. Juntos forman un organo natural gigantesco.

#### Guardian Presente

- **Bambu** es nervioso, energetico y extremadamente rapido. Aparece y desaparece constantemente, subiendo y bajando por las canas a velocidad vertiginosa. Habla rapido y con entusiasmo. Es lo opuesto a Roble: todo urgencia y movimiento.

#### Enemigos y Obstaculos

- **Avispas de Bambu:** Insectos agresivos que anidan en canas huecas. Atacan en enjambre cuando el jugador se acerca a sus nidos. Se evitan golpeando la cana desde lejos para alertarlas y esperar a que se dispersen.
- **Canas Quebradizas:** Bambu que se rompen bajo el peso del jugador despues de 2 segundos. Requieren velocidad y precision para usarlas como plataformas.
- **Corrientes Ascendentes y Descendentes:** Columnas de viento invisibles que empujan al jugador hacia arriba o hacia abajo. Pueden ser utiles o peligrosas segun el contexto.
- **El Vacio:** Caer desde las alturas del Canaval es el mayor peligro. Una caida al vacio devuelve al jugador al ultimo punto seguro con perdida de medio corazon.

#### Items y Coleccionables

- **Flauta de Viento** (trade de Bambu) — Un segmento de bambu que produce melodias cuando el viento sopla. Permite al jugador controlar las corrientes de viento en cualquier zona del juego, activando mecanismos eolicos y calmando criaturas.
- **Plumas del Cielo (x6)** — Plumas de aves migratorias atrapadas en canas a distintas alturas. Recolectar las 6 otorga la habilidad de caida lenta (el jugador planea al caer, reduciendo el dano).
- **Nudo de Bambu** — Un item que permite al jugador crear un punto de anclaje temporal en cualquier superficie vertical. Util para escalar zonas sin plataformas.

#### Conexiones

- **Abajo (Sur):** Arboleda Ancestral (descendiendo por la base del canaval donde las canas se mezclan con raices)
- **Arriba (secreto):** Desde el Nido del Viento, con la Flauta de Viento, el jugador puede invocar una corriente que lo lleva a una plataforma secreta sobre las nubes: **El Mirador del Bosque**. Desde aqui se ve todo el Bosque Eterno en una vista cenital (revela la ubicacion de todos los coleccionables no encontrados).

#### Puzzles y Mecanicas

- **Mecanica de Crecimiento Relampago:** Bambu otorga al jugador semillas de bambu que, al plantarlas en suelo fertil, crecen instantaneamente creando plataformas, escaleras o puentes verticales. Las semillas son limitadas (el jugador recoge nuevas semillas de canas maduras) y cada planta dura 60 segundos antes de marchitarse.
- **Puzzle de las Flautas:** El jugador debe escalar hasta 5 Flautas Naturales distintas y soplar a traves de ellas en el orden correcto para tocar la melodia de "El Latido de la Semilla". La melodia correcta esta codificada en los Anillos del Tiempo de Roble (anillo 2). Al completarla, La Gran Cana se abre revelando un deposito secreto.
- **Puzzle de Ascension:** La zona final del Canaval es una torre vertical donde el jugador debe ascender usando una combinacion de todas las mecanicas: semillas de bambu para crear plataformas, Flauta de Viento para activar corrientes, y precision de salto para evitar canas quebradizas. Si Bambu lo acompana, hay secciones donde Bambu crea plataformas temporales a velocidad extrema, requiriendo reflejos rapidos del jugador.

---

### 3.8 JARDIN DEL EDEN

**Guardian:** Flora (seed-09) — La ultima guardiana, nacida de la flor mas bella.

#### Estilo Visual

- **Tiles:** Cada tile es unico. Flores de cientos de variedades, arbustos perfectamente esculpidos, pasto de un verde irreal, senderos de petalos. El agua es cristalina y refleja todo con precision. Es el lugar mas visualmente denso y bello de todo el juego.
- **Colores:** Todos los colores del espectro, pero dominan el rosa (#E91E63), el lila (#CE93D8), el dorado (#FFD54F) y el blanco puro (#FFFFFF). La paleta es la mas amplia del juego, rompiendo deliberadamente la limitacion de 4 colores del Game Boy para enfatizar que este lugar es sobrenatural.
- **Landmarks:**
  - **La Flor Eterna:** En el centro exacto del jardin crece la flor de la que nacio Flora. Es enorme, de petalos iridiscentes que cambian de color con cada frame. Emite una luz calida que llena toda la zona.
  - **Los Senderos del Perfume:** Caminos marcados por aromas visibles (espirales de particulas de colores que flotan en el aire). Cada sendero de color lleva a una seccion distinta del jardin.
  - **La Fuente de la Vida:** Un manantial en el extremo sur del jardin donde el agua brota con petalos de flores. Beber de ella restaura completamente la vida, la energia y cura cualquier estado negativo.
  - **El Muro de Espinas Marchitas:** El borde del jardin esta protegido por una barrera de espinas secas y grises: La Marchitez ha intentado entrar aqui mas que en ningun otro lugar, atraida por la belleza de Flora (reflejando su defecto).

#### Guardiana Presente

- **Flora** habita junto a La Flor Eterna. Es amable, compasiva y tiene una tristeza elegante: sabe que su belleza atrae peligro constantemente. Cuando el jugador llega, Flora ya ha estado defendiendo el jardin sola durante demasiado tiempo. Es la ultima guardiana que el jugador conoce en el Bosque Eterno, y su encuentro es el mas emotivo.

#### Enemigos y Obstaculos

- **Criaturas de la Marchitez:** Los enemigos mas peligrosos del Bosque Eterno. Son versiones corrompidas de las Marchitas basicas, pero mas grandes, rapidas y resistentes. Vienen en oleadas desde el Muro de Espinas Marchitas, atraidas por la luz de Flora.
- **Polillas de Ceniza:** Insectos nocturnos enormes atraidos por la bioluminiscencia de las flores. Consumen la luz de las plantas al posarse sobre ellas, extinguiendolas temporalmente. Si demasiadas flores se apagan, la zona se oscurece y las Criaturas de la Marchitez se fortalecen.
- **Raices Parasitas:** Enredaderas oscuras que brotan del suelo e intentan envolver al jugador. Se cortan con la Espina Cristalina (de Espino) o se queman con el Faro Solar (de Girasol).
- **El Peso de la Belleza:** Mecanica ambiental. Cuanto mas tiempo pasa el jugador en el Jardin del Eden, mas enemigos aparecen. La presencia del jugador, combinada con la de Flora, genera un faro irresistible para la oscuridad. Esto incentiva al jugador a actuar rapido en vez de explorar indefinidamente.

#### Items y Coleccionables

- **Perfume del Eden** (trade de Flora) — Una esencia floral que trae paz y calma. Al usarla, todos los enemigos en pantalla quedan paralizados durante 8 segundos. Tiene 3 usos y se recarga al beber de la Fuente de la Vida.
- **Petalos de Memoria (x9)** — Uno por cada guardian Seed. Estan esparcidos por todo el jardin y cada uno tiene el color representativo de su guardian. Recolectar los 9 forma la **Corona de Guardianes**, un item necesario para abrir la puerta al Corazon del Bosque.
- **Semilla del Eden** — La semilla mas poderosa del juego. Se obtiene al derrotar la oleada final de Criaturas de la Marchitez junto a Flora. Permite al jugador hacer florecer un area completamente corrompida por La Marchitez una unica vez.
- **El Ultimo Petalo** — Un petalo negro escondido detras de la Fuente de la Vida. Al recogerlo, Flora revela la verdad: La Marchitez no es un enemigo externo, sino la sombra de El Origen, su dolor convertido en destruccion. Este fragmento de lore es crucial para entender la historia completa.

#### Conexiones

- **Noroeste:** Pradera Salvaje (regresando por el sendero de flores que se vuelve menos exuberante)
- **Interior (secreto):** Bajo La Flor Eterna hay una entrada oculta al Corazon del Bosque, la mazmorra principal del reino. Solo se abre con la Corona de Guardianes.

#### Puzzles y Mecanicas

- **Mecanica de Floracion Eterna:** Flora otorga al jugador la habilidad "Floracion", que permite hacer florecer plantas muertas y objetos marchitos. Esto revela items ocultos, abre pasajes sellados por la vegetacion muerta y restaura mecanismos naturales desactivados. Es la habilidad final del Bosque Eterno y la mas versatil.
- **Puzzle de los Senderos del Perfume:** El jugador debe seguir los aromas visibles en un orden especifico para llegar a la Flor Eterna. Si toma el camino equivocado, el jardin lo redirige suavemente al inicio (las flores se cierran bloqueando el paso). El orden correcto se deduce del color de los Petalos de Memoria recolectados.
- **Desafio de las Oleadas:** Un evento de combate por oleadas donde el jugador defiende a Flora de 5 olas de Criaturas de la Marchitez. Cada oleada es mas intensa. El jugador puede usar TODAS las habilidades obtenidas de los otros guardianes: Tejido Verde, Faro Solar, Barrera de Puas, Red Micelica, Crecimiento Relampago y Floracion. Este desafio es la prueba final antes de acceder a la mazmorra.

---

## 4. EL CORAZON DEL BOSQUE — Mazmorra Principal

### Informacion General

| Aspecto | Detalle |
|---------|---------|
| **Nombre** | El Corazon del Bosque |
| **Ubicacion** | Bajo La Flor Eterna en el Jardin del Eden, con entrada alternativa desde la Gruta Micelica |
| **Requisito de acceso** | La Corona de Guardianes (9 Petalos de Memoria) |
| **Tema** | El interior vivo del Bosque Eterno: un organismo gigante |
| **Pisos** | 3 niveles descendentes |

### Tema y Atmosfera

El Corazon del Bosque no es una cueva ni una estructura artificial. Es el interior de un ser vivo. Las paredes son de corteza viviente que pulsa con savia luminosa. El suelo es suave y organico, como caminar sobre musgo denso. Las raices de todos los arboles del Bosque Eterno convergen aqui, formando un sistema circulatorio vegetal que alimenta todo el reino.

La musica es un latido profundo y constante — "El Latido de la Semilla" en su forma mas pura. Entre cada latido se escuchan fragmentos de las melodias de todas las zonas del Bosque Eterno, como si este lugar recordara todo.

### Estructura de la Mazmorra

#### Piso 1: Las Venas de Savia

- **Visual:** Tuneles de corteza con rios de savia dorada que fluyen por canales en el suelo y las paredes. La luz proviene enteramente de la savia.
- **Mecanica Central:** El jugador debe redirigir el flujo de savia usando compuertas de raiz para llenar depositos que activan plataformas y abren puertas. Es una expansion del puzzle de luz del Jardin Solar, pero con liquido.
- **Enemigos:** Parasitos de Savia — criaturas que nadan en los canales y saltan para atacar. Garrapatas de Corteza — enemigos blindados pegados a las paredes que disparan esporas.
- **Miniboss:** **La Marchita Mayor** — Una version gigante de las Marchitas basicas. Es un arbol corrompido de 3 pantallas de alto que ataca con ramas-latigo y esporas venenosas. Se derrota redirigiendo tres corrientes de savia hacia sus raices para purificarlo. Al ser purificada, se transforma en un arbol sano que abre el paso al Piso 2.
- **Item:** Llave de Raiz Primaria — necesaria para descender al Piso 2.

#### Piso 2: La Red Central

- **Visual:** Una caverna masiva donde la Red Micelica de Hongo es visible en toda su extension. Miles de hilos luminosos conectan el techo con el suelo, pulsando con informacion. El espacio es abierto y vertiginoso.
- **Mecanica Central:** El jugador debe "conectar" nodos de la Red Micelica tocandolos en secuencias especificas. Cada conexion correcta revela un fragmento de la historia de El Origen y activa secciones del mapa. Las conexiones incorrectas generan descargas de esporas.
- **Enemigos:** Sombras de Memoria — entidades formadas por recuerdos dolorosos atrapados en la Red. Adoptan la forma de versiones oscuras de los 9 guardianes Seed. Son rapidas pero fragiles.
- **Miniboss:** **El Eco Inverso** — Una entidad que imita al jugador en tiempo real pero con un delay de 3 segundos. Copia todos los ataques y movimientos del jugador. La clave es engañarlo: hacer movimientos que en 3 segundos generaran una situacion desfavorable para el eco (por ejemplo, pararse al borde de un precipicio y esquivar justo antes de que el eco caiga).
- **Item:** Llave de Raiz Profunda — necesaria para descender al Piso 3.

#### Piso 3: El Nucleo / Sala del Boss

- **Visual:** Una camara esferica. Las paredes son raices entrelazadas tan densamente que parecen solidas. En el centro hay un enorme cristal verde con forma de semilla: es el **Nucleo del Bosque**, el fragmento de El Origen que da vida a todo el reino.
- **El Nucleo esta agrietado.** De las grietas emana una energia oscura: La Marchitez en su forma mas pura.

### Boss Final: LA SEMILLA ROTA

**Nombre:** La Semilla Rota
**Descripcion:** El Nucleo del Bosque ha sido parcialmente corrompido por La Marchitez. La Semilla Rota es la manifestacion de esa corrupcion: un ser mitad planta, mitad sombra que ha tomado forma alrededor del cristal. Es una criatura tragica, no malvada; es el dolor de El Origen convertido en destruccion ciega.

**Apariencia:** Un coloso vegetal de 4 pantallas de alto formado por raices retorcidas, flores marchitas y savia negra. Su "cabeza" es el cristal del Nucleo, visible a traves de una marana de ramas. Tiene dos "brazos" de raices enormes y un torso cubierto de flores que alternan entre vivas (coloridas) y muertas (grises).

**Fases de combate:**

- **Fase 1 — Furia de Raices:** La Semilla Rota ataca con sus brazos de raices, golpeando el suelo y creando ondas de choque. Tambien lanza proyectiles de savia negra. El jugador debe esquivar y golpear las raices cuando quedan clavadas en el suelo (quedan vulnerables 3 segundos). Despues de 4 golpes en las raices, el cristal queda expuesto brevemente.

- **Fase 2 — Invierno Interior:** La Semilla Rota se envuelve en un capullo de espinas y comienza a drenar la savia de la camara (el suelo se oscurece progresivamente). El jugador debe usar la Flauta de Viento para romper secciones del capullo mientras esquiva esporas toxicas. Cuando el capullo se rompe, la Semilla entra en un estado de furia que acelera todos sus ataques.

- **Fase 3 — Floracion Oscura:** La Semilla Rota hace florecer flores corrompidas por toda la camara que disparan petalos cortantes. El jugador debe usar Floracion Eterna (de Flora) en las flores corrompidas para purificarlas y convertirlas en aliadas que disparan petalos de luz hacia la Semilla. Cuando suficientes flores estan purificadas, la camara se llena de luz y el cristal se expone completamente. El jugador usa la Semilla del Eden (si la tiene) o un golpe final con la Raiz Ancestral (de Brote) para purificar el Nucleo.

**Narrativa del combate:** Durante toda la batalla, la Red Micelica transmite el dolor de la Semilla Rota. Los mensajes de Hongo aparecen en pantalla: "No es maligna. Solo sufre." "Es el dolor de El Origen. Fue abandonado cuando se fragmento." "No la destruyas. Sanala."

El jugador NO mata a la Semilla Rota. La purifica. Es la tematica central del Bosque Eterno: la vida no destruye, transforma y regenera.

### Recompensa

Al purificar la Semilla Rota, el Nucleo del Bosque se restaura completamente. Ocurre lo siguiente:

1. **La Esencia de Semilla** — Un fragmento cristalino verde que el jugador recoge. Es uno de los 3 fragmentos necesarios para completar El Ciclo y restaurar El Origen. Los otros dos se obtienen en el Oceano Profundo (Esencia de Gota) y el Cosmos Infinito (Esencia de Chispa).

2. **Floracion Global** — Todo el Bosque Eterno florece. Las zonas de La Marchitez retroceden visiblemente. Nuevos caminos se abren en todas las zonas (contenido post-dungeon).

3. **La Cancion de la Semilla** — Una melodia completa que combina los temas de las 8 zonas. Al tocarla con la Flauta de Viento en El Nexo, revela una pista sobre la ubicacion de la siguiente mazmorra en otro reino.

4. **Mejora de Habilidad** — Todas las habilidades Seed obtenidas durante la aventura reciben una mejora:
   - Raiz Ancestral alcanza mayor distancia
   - Tejido Verde ya no se descontrola
   - Faro Solar dura el doble
   - Barrera de Puas ya no dana aliados
   - Red Micelica funciona tambien sobre la superficie
   - Crecimiento Relampago crea bambu permanente
   - Floracion Eterna puede usarse a distancia

5. **Escena Final del Reino** — Los 9 guardianes Seed se reunen por primera vez en el Claro del Amanecer. Cada uno ofrece un mensaje al jugador. Brote, el primero que el jugador conocio, dice la ultima frase: *"La semilla mas pequena puede sanar el mundo mas grande. Ahora lleva nuestra esencia a los otros reinos. El Ciclo aun no se completa."*

---

## 5. Mapa de Conexiones entre Zonas

```
=============================================================
         MAPA DEL BOSQUE ETERNO - Conexiones
=============================================================

                          [MIRADOR SECRETO]
                                 ^
                                 | (corriente de viento secreta)
                                 |
                     +=======================+
                     ||  CANAVAL DEL CIELO  ||
                     ||     (Bambu)         ||
                     +===========+===========+
                                 |
                          sendero de canas
                                 |
                     +===========+===========+
                     || ARBOLEDA ANCESTRAL  ||
                     ||     (Roble)         ||
                     +===========+===========+
                                 |
                        raices elevadas
                                 |
+================+   +===========+===========+   +================+
|| DESIERTO DE  ||   ||   CLARO DEL         ||   || JARDIN SOLAR  ||
|| ESPINAS      ++===++ AMANECER            ++===++               ||
|| (Espino)     ||   ||   (Brote)           ||   || (Girasol)     ||
+================+   || [PORTAL AL NEXO]    ||   +=======+========+
  (callejon          +===========+===========+           |
   sin salida)                   |                tunel de raices
                           prado abierto             (secreto)
                                 |                       |
                     +===========+===========+           |
                     ||  PRADERA SALVAJE    ||           |
                     || (Hierba / Trebol)   ||           |
                     +=====+==========+=====+            |
                           |          |                  |
                    madriguera    sendero            +===+===============+
                     oculta     de flores            || JARDIN DEL EDEN ||
                           |          |              ||    (Flora)      ||
              +============+=+  +=====(==============+)                 ||
              || GRUTA       |  |     ||  [Entrada a EL CORAZON        ||
              || MICELICA    |  |     ||   DEL BOSQUE]                  ||
              || (Hongo)     ||  |     +================================+
              +======+=======+  |
                     |          |
                     +----------+
                  (conexion profunda
                   a EL CORAZON DEL BOSQUE)


=============================================================
LEYENDA:
  +====+  Zona principal (doble linea)
  ---     Conexion directa entre zonas
  (   )   Descripcion del tipo de conexion
  [   ]   Punto de interes especial
  ^       Conexion secreta / vertical
=============================================================

RESUMEN DE CONEXIONES:

  Claro del Amanecer <---> Arboleda Ancestral  (Norte)
  Claro del Amanecer <---> Jardin Solar        (Este)
  Claro del Amanecer <---> Desierto de Espinas (Oeste)
  Claro del Amanecer <---> Pradera Salvaje     (Sur)
  Claro del Amanecer  -->  El Nexo             (Portal)

  Arboleda Ancestral <---> Canaval del Cielo   (Norte)

  Pradera Salvaje    <---> Gruta Micelica      (Suroeste)
  Pradera Salvaje    <---> Jardin del Eden     (Sureste)

  Jardin Solar       <---> Jardin del Eden     (Tunel secreto)

  Canaval del Cielo   -->  Mirador del Bosque  (Secreto, arriba)

  Gruta Micelica      -->  El Corazon del Bosque (Profundidad)
  Jardin del Eden     -->  El Corazon del Bosque (Bajo La Flor Eterna)

  Desierto de Espinas: Sin salida adicional (frontera del reino)
=============================================================
```

---

## 6. Ruta Sugerida del Jugador

La estructura del Bosque Eterno permite exploracion no lineal, pero existe un camino optimo que garantiza que el jugador obtenga las habilidades en el orden mas util:

```
1. Claro del Amanecer .... Conocer a Brote, obtener Raiz Ancestral
       |
2. Pradera Salvaje ....... Conocer a Hierba y Trebol, obtener Tejido Verde
       |
3. Jardin Solar .......... Conocer a Girasol, obtener Faro Solar
       |
4. Desierto de Espinas ... Conocer a Espino, obtener Barrera de Puas
       |
5. Gruta Micelica ........ Conocer a Hongo, obtener Red Micelica
       |
6. Arboleda Ancestral .... Conocer a Roble, obtener Vision de Eras
       |
7. Canaval del Cielo ..... Conocer a Bambu, obtener Crecimiento Relampago
       |
8. Jardin del Eden ....... Conocer a Flora, obtener Floracion Eterna
       |
9. El Corazon del Bosque . Mazmorra final, purificar la Semilla Rota
```

Cada guardian ensena una habilidad que facilita la exploracion de las zonas siguientes. Sin embargo, el jugador experimentado puede alterar el orden para encontrar secretos que solo son accesibles con habilidades de zonas posteriores, incentivando la reexploracion.

---

## 7. Notas de Diseno Adicionales

### La Marchitez como Antagonista Ambiental

La Marchitez no es un villano con rostro. Es una fuerza natural: el dolor residual de La Gran Fragmentacion. Esta en todas partes como una enfermedad lenta. Las zonas mas cercanas a la frontera (Desierto de Espinas, Jardin del Eden) estan mas afectadas. Las zonas centrales (Claro del Amanecer) estan relativamente a salvo. Esta gradacion crea una sensacion de urgencia creciente a medida que el jugador se aleja del centro.

### Interacciones entre Guardianes

Los 9 guardianes Seed tienen relaciones entre ellos que el jugador descubre a traves de los Cristales de Eco (Gruta Micelica) y los Anillos de Memoria (Arboleda Ancestral):

- **Brote y Roble:** Maestro y aprendiz. Roble fue quien guio a Brote cuando emergio por primera vez.
- **Hierba y Espino:** Opuestos complementarios. Hierba cubre y sana; Espino corta y protege. Se respetan mutuamente.
- **Trebol y Flora:** Trebol admira la belleza de Flora pero su suerte inestable causa problemas cuando la visita.
- **Girasol y Hongo:** Luz y oscuridad. Girasol ilumina lo que Hongo oculta. Tienen debates filosoficos sobre la naturaleza del conocimiento.
- **Bambu y Roble:** Velocidad y paciencia. Bambu frustra a Roble con su prisa; Roble aburre a Bambu con su lentitud. Pero juntos, Bambu explora y Roble recuerda.

### Ciclo Dia-Noche

El Bosque Eterno tiene un ciclo de dia y noche que afecta a cada zona de manera diferente:

| Zona | Dia | Noche |
|------|-----|-------|
| Claro del Amanecer | Plataformas de amanecer visibles | Niebla de Olvido se expande |
| Pradera Salvaje | Cortavientos menos agresivos | Hierba crece mas rapido (peligro de descontrol) |
| Jardin Solar | Maxima energia solar, todos los puzzles activos | Zona casi a oscuras, Sombras Rastreras dominan |
| Desierto de Espinas | Tormentas de arena mas frecuentes | Oasis Oculto emite luz, enemigos dormidos |
| Gruta Micelica | Sin cambio (siempre oscuro) | Bioluminiscencia mas intensa, nuevos caminos visibles |
| Arboleda Ancestral | Espiritus Olvidados dormidos | Espiritus activos, Anillos del Tiempo mas legibles |
| Canaval del Cielo | Corrientes de viento fuertes | Viento calmo, pero canas se balancean impredeciblemente |
| Jardin del Eden | Criaturas de La Marchitez mas activas | Flora brilla protegiendose, Polillas de Ceniza aparecen |

### Economia de Items

Los 9 objetos trade de los guardianes forman el nucleo del inventario del jugador. Cada uno tiene utilidad tanto en combate como en exploracion:

| Item | Guardian | Uso en Combate | Uso en Exploracion |
|------|----------|----------------|-------------------|
| Semilla del Primer Dia | Brote | Proteccion contra corrupcion | Acceso a zonas corrompidas |
| Hoja Perenne | Hierba | Regeneracion pasiva | Señal de zonas fertiles |
| Hoja de Cuatro | Trebol | Mejora drops | Mejora recompensas de cofres |
| Petalo de Amanecer | Girasol | Destello cegador | Linterna permanente |
| Espina Cristalina | Espino | Arma de corte | Destruir obstaculos |
| Espora Luminosa | Hongo | Cura veneno | Iluminacion en cuevas |
| Bellota de Sabiduria | Roble | Reduce dano recibido | Pistas para puzzles |
| Flauta de Viento | Bambu | Empuja enemigos | Control de corrientes |
| Perfume del Eden | Flora | Paraliza enemigos | Calma criaturas hostiles |

---

*Documento de diseno v1.0 — Bosque Eterno, reino de la esencia Semilla.*
*Regenmon — La profecia de los 27 guardianes.*
