# Estructura del Sobremundo — Regenmon: El Ciclo de El Origen

> Documento de diseno de mundo. Arquitectura de mapa estilo Zelda top-down.

---

## Indice

1. [Disposicion del Mapa Mundial](#1-disposicion-del-mapa-mundial)
2. [El Nexo — Centro del Mundo](#2-el-nexo--centro-del-mundo)
3. [Puntos de Entrada a los Reinos](#3-puntos-de-entrada-a-los-reinos)
4. [Estructura del Bosque Eterno (Seed)](#4-estructura-del-bosque-eterno-seed)
5. [Estructura del Oceano Profundo (Drop)](#5-estructura-del-oceano-profundo-drop)
6. [Estructura del Cosmos Infinito (Spark)](#6-estructura-del-cosmos-infinito-spark)
7. [La Mecanica de la Profecia](#7-la-mecanica-de-la-profecia)
8. [Conexiones Secretas Entre Reinos](#8-conexiones-secretas-entre-reinos)
9. [Sistema de Cuadricula (Grid)](#9-sistema-de-cuadricula-grid)
10. [Tabla de Guardianes por Zona](#10-tabla-de-guardianes-por-zona)

---

## 1. Disposicion del Mapa Mundial

### Topologia General

El mundo de Regenmon adopta la forma de un **trisquel** — tres brazos en espiral que emanan desde un punto central. Cada brazo es uno de los tres reinos, y en el corazon de la espiral se encuentra **El Nexo**, las ruinas donde El Origen existio antes de La Gran Fragmentacion.

```
                        ░░░░░░░░░░░░░░░░
                    ░░░░  COSMOS INFINITO  ░░░░
                 ░░░░    (Spark - Arriba)     ░░░░
               ░░░░                              ░░░░
             ░░░░          Cielo Nocturno          ░░░░
            ░░░░        Plataformas Estelares        ░░░░
           ░░░░                                       ░░░░
          ░░░░                                         ░░░░
         ░░░░              Observatorio                 ░░░░
         ░░░░                 de Sol                    ░░░░
          ░░░░                                         ░░░░
           ░░░░          Puerta Estelar              ░░░░
            ░░░░              |                    ░░░░
              ░░░░            |                 ░░░░
                ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                              |
                              |
    ░░░░░░░░░░░░░░░      =========      ░░░░░░░░░░░░░░
  ░░ BOSQUE ETERNO ░░   | EL NEXO |   ░░ OCEANO PROFUNDO ░░
 ░░  (Seed - Izq.)  ░░  | (Centro)|  ░░  (Drop - Der.)     ░░
░░                    ░░ =========  ░░                        ░░
░░  Arboleda Antigua   ░░   |   ░░    Playa de Entrada        ░░
░░  Claros de Luz       ░░  |  ░░      Arrecife Exterior       ░░
░░  Raices Profundas     ░░ | ░░        Abismo Abisal          ░░
░░  Frontera de Espinos   ░░|░░          Fosa de Corrientes     ░░
 ░░                        ░░░            Ciudad Sumergida      ░░
  ░░  Corazon del Bosque  ░░              Trono de Marea       ░░
   ░░░░░░░░░░░░░░░░░░░░░░░                ░░░░░░░░░░░░░░░░░░░░
```

### Principios de Conexion

- **El Nexo** ocupa el centro exacto del mapa.
- Cada reino se extiende en una direccion cardinal/diagonal desde El Nexo.
- **Bosque Eterno** se extiende hacia el **suroeste** (terreno denso, organico).
- **Oceano Profundo** se extiende hacia el **sureste** (costas, luego profundidades).
- **Cosmos Infinito** se extiende hacia el **norte** (elevacion ascendente hacia el cielo).
- Los tres reinos NO se tocan directamente entre si en la superficie — solo se conectan a traves de El Nexo y las **Conexiones Secretas**.
- El mapa tiene forma vagamente **triangular**, con El Nexo como centroide.

### Filosofia de Diseno

Inspirado en *A Link to the Past*, el sobremundo funciona como una red interconectada de pantallas. El jugador siempre puede regresar a El Nexo como punto de referencia. La progresion no es estrictamente lineal: el jugador puede explorar los tres reinos en cualquier orden, aunque ciertos guardianes requieren habilidades obtenidas de otros guardianes para ser alcanzados, creando una progresion tipo "metroidvania suave".

---

## 2. El Nexo — Centro del Mundo

### Descripcion Visual

El Nexo es una meseta circular elevada sobre un crater poco profundo — el punto exacto donde El Origen existia antes de fragmentarse. El terreno es de piedra blanca agrietada, con vetas de tres colores que se extienden como arterias desde el centro: **verde** (hacia el Bosque), **azul** (hacia el Oceano) y **dorado** (hacia el Cosmos).

El centro de la meseta contiene los restos de una **estructura imposible**: tres arcos de piedra entrelazados que forman una esfera incompleta — el **Monumento de El Origen**. Faltan fragmentos de cada arco, simbolizando la fragmentacion. Vegetacion silvestre crece entre las grietas. Agua brota de algunas fisuras. Chispas de energia parpadean en el aire sobre las ruinas.

El cielo sobre El Nexo siempre muestra simultaneamente los tres estados: un cuarto es cielo diurno con nubes, otro cuarto es cielo nocturno con estrellas, y la mitad restante es un atardecer perpetuo donde los colores se mezclan. Este cielo imposible es el primer indicio de que este lugar es especial.

### Distribucion del Nexo (4x3 pantallas)

```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│  Mirador    │  Sendero    │  Sendero    │  Mirador    │
│  Oeste      │  al Cosmos  │  al Cosmos  │  Este       │
│  (vistas    │  (camino    │  (camino    │  (vistas    │
│   bosque)   │   norte)    │   norte)    │   oceano)   │
├─────────────┼─────────────┼─────────────┼─────────────┤
│  Sendero    │ ★MONUMENTO★ │ ★PLAZA DE★  │  Sendero    │
│  al Bosque  │ DE EL ORIGEN│ LOS ECOS    │  al Oceano  │
│  (camino    │  (centro)   │ (mercado/   │  (camino    │
│   oeste)    │             │  NPCs)      │   este)     │
├─────────────┼─────────────┼─────────────┼─────────────┤
│  Jardin     │  Fuente de  │  Archivo    │  Jardin     │
│  Marchito   │  las Tres   │  del        │  Marchito   │
│  (sur-oeste)│  Aguas      │  Cronista   │  (sur-este) │
│             │             │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

### Elementos Clave del Nexo

#### El Monumento de El Origen (pantalla central-izquierda)

- Tres arcos de piedra incompletos formando una esfera rota.
- **27 huecos** alrededor de la base, dispuestos en tres anillos concentricos de 9. Cada hueco corresponde a un guardian. Estan vacios al inicio.
- Cuando el jugador forma un vinculo con un guardian, su **Objeto de Intercambio** (trade item) aparece en el hueco correspondiente, emitiendo un brillo suave.
- Al completar un anillo de 9 (un reino completo), el arco correspondiente se restaura y emite un haz de luz hacia el cielo.
- Al completar los 27, los tres arcos se unen, la esfera se completa, y se desbloquea la secuencia final: **El Renacimiento de El Origen**.

#### La Plaza de los Ecos (pantalla central-derecha)

- Una plaza empedrada donde resuenan susurros del pasado.
- **El Cronista** — un NPC anciano y misterioso que parece existir fuera del tiempo. Tiene fragmentos de recuerdos de cuando El Origen era uno solo. Proporciona pistas sobre la ubicacion de los guardianes y cuenta historias sobre cada uno cuando el jugador los descubre.
- **La Tejedora** — una NPC que puede combinar Objetos de Intercambio para crear equipamiento unico. Requiere objetos de distintos reinos para las mejores creaciones.
- **El Espejo de Esencias** — un cristal interactivo donde el jugador puede ver cuantos guardianes ha encontrado, organizados por reino.

#### La Fuente de las Tres Aguas (pantalla sur-centro-izquierda)

- Una fuente natural donde brotan tres manantiales de colores distintos (verde, azul, dorado) que se mezclan en un estanque central.
- Punto de **guardado/curacion** principal del juego.
- Funciona como tutorial interactivo: el agua verde restaura vida, el agua azul restaura energia de movimiento, el agua dorada restaura poder especial.
- Despues de completar cada reino, el manantial correspondiente fluye con mas fuerza y otorga beneficios mejorados.

#### El Archivo del Cronista (pantalla sur-centro-derecha)

- Una estructura semisubterranea llena de estanterias de piedra con tablillas grabadas.
- Aqui el jugador puede releer toda la historia/lore descubierta hasta el momento.
- Contiene el **Bestiario** — entradas sobre cada guardian encontrado, con su historia, habilidad, defecto e item de intercambio.
- Tablets especiales revelan fragmentos de la profecia a medida que el jugador progresa.

#### Los Miradores (pantallas esquina superior)

- **Mirador Oeste**: Una terraza natural desde donde se ve la copa de los arboles del Bosque Eterno extendiendose hasta el horizonte. Pajaros cruzan el cielo. Aqui Bambú (seed-08) ha dejado marcas en la piedra — pistas hacia su ubicacion.
- **Mirador Este**: Un acantilado que da al mar. Las olas rompen abajo. En dias claros se ven las formaciones de coral de la costa. Aqui se escuchan los ecos de Concha (drop-04) resonando desde lejos.

#### Los Jardines Marchitos (pantallas esquina inferior)

- Zonas donde la vegetacion, el agua y la energia intentan existir pero fallan — residuos de La Gran Fragmentacion.
- **Jardin Marchito Suroeste**: Plantas petrificadas, suelo seco. Al progresar en el Bosque Eterno, este jardin lentamente revive.
- **Jardin Marchito Sureste**: Charcos estancados, coral muerto. Al progresar en el Oceano Profundo, el agua comienza a fluir de nuevo.
- Estos jardines funcionan como **indicadores visuales de progreso**.

#### Los Senderos de Salida

- **Sendero al Bosque (oeste)**: Un camino de tierra rodeado de raices y musgo que desciende suavemente. Las vetas verdes en la piedra se intensifican. Al cruzar el borde oeste, la transicion al Bosque Eterno es gradual — los arboles se hacen mas altos y densos pantalla a pantalla.
- **Sendero al Oceano (este)**: Un camino de piedra erosionada por la sal que desciende hacia acantilados costeros. Las vetas azules en la piedra se intensifican. Se escucha el oleaje con mas fuerza. La transicion es un descenso hacia la playa y luego hacia el agua.
- **Sendero al Cosmos (norte)**: Un camino ascendente de piedra pulida con inscripciones luminosas. Las vetas doradas brillan. El camino sube hacia una meseta mas alta donde el cielo se oscurece y las estrellas se hacen visibles incluso de dia. La transicion es una escalinata que sube hacia las nubes.

---

## 3. Puntos de Entrada a los Reinos

### Puerta del Bosque Eterno — "La Raiz Madre"

**Ubicacion**: Borde oeste de El Nexo.

**Descripcion**: El sendero oeste termina ante una pared de raices entrelazadas que forman un arco natural de quince metros de alto. Las raices pertenecen a un arbol colosal cuyo tronco no es visible — se pierde en la niebla. En el centro del arco, las raices dejan un espacio con la silueta de una semilla.

**Mecanica de acceso**: Al inicio del juego, el arco esta abierto y el jugador puede pasar libremente. Las raices se mueven lentamente, como si respiraran. Al pasar a traves del arco, una brisa calida cargada de aroma a tierra humeda envuelve al jugador, y la luz del sol se filtra en tonos esmeralda.

**Transicion visual**: La pantalla se desatura lentamente de los tonos neutros de El Nexo y se satura progresivamente de verdes y marrones. Los sonidos urbanos/de piedra dan paso a cantos de aves, crujidos de madera y el susurro del viento entre hojas.

### Puerta del Oceano Profundo — "La Cascada Invertida"

**Ubicacion**: Borde este de El Nexo.

**Descripcion**: El sendero este termina en un acantilado donde el agua sube en lugar de caer — una cascada invertida que desafia la gravedad, elevandose desde el mar hasta una abertura en la roca. El agua forma un arco liquido que enmarca un pasaje detras de la cortina de agua ascendente.

**Mecanica de acceso**: El jugador debe caminar a traves de la cascada invertida. Al hacerlo, el agua lo envuelve pero no lo moja — lo transporta suavemente hacia abajo, hacia la costa y eventualmente hacia las profundidades.

**Transicion visual**: Los tonos se desplazan hacia azules y turquesas. El sonido del viento se reemplaza por el murmullo del agua, el eco de burbujas y cantos de ballenas lejanas. La luz se vuelve refractada, como si todo estuviera bajo el agua incluso antes de sumergirse.

### Puerta del Cosmos Infinito — "El Primer Escalon"

**Ubicacion**: Borde norte de El Nexo.

**Descripcion**: El sendero norte asciende hasta una escalinata de piedra obsidiana incrustada con fragmentos de meteorito que brillan con luz propia. La escalinata parece continuar hacia el cielo mismo. En el ultimo escalon visible, el suelo desaparece y comienza un puente de luz solidificada que se extiende hacia las nubes.

**Mecanica de acceso**: El jugador sube la escalinata. Con cada escalon, la gravedad se aligera sutilmente. Al pisar el puente de luz, el jugador "flota" ligeramente, indicando que las reglas del mundo estan cambiando. El puente lo lleva a la primera plataforma del Cosmos.

**Transicion visual**: Los tonos cambian a dorados, naranjas y purpuras profundos. El cielo se oscurece para revelar estrellas, nebulosas y auroras. El sonido se vuelve etereo — resonancias cristalinas, el zumbido de energia cosmica y melodias distantes que parecen provenir de las estrellas mismas.

---

## 4. Estructura del Bosque Eterno (Seed)

### Concepto Visual

Un bosque ancestral de proporciones imposibles. Los arboles mas grandes tienen troncos del tamano de edificios y sus copas forman un segundo "suelo" de hojas por encima del jugador. La luz se filtra en haces diagonales creando charcos de luz entre zonas de sombra densa. El suelo esta cubierto de musgo, raices, flores bioluminiscentes y hongos. Hay ruinas overgrown — restos de una civilizacion antigua que veneraba a los guardianes Seed.

### Distribucion de Zonas (suroeste del mapa)

```
BOSQUE ETERNO — Vista de zonas (8x8 pantallas)

┌────────┬────────┬────────┬────────┬────────┬────────┬────────┬────────┐
│~~~~~~~~│~~~~~~~~│  Claro │  Claro │Copa del│Copa del│~~~~~~~~│~~~~~~~~│
│~ Lago ~│~ Lago ~│  de    │  de    │Arbol   │Arbol   │~~~~~~~~│~~~~~~~~│
│~Secret~│~  de ~ │Trebol  │Girasol │Mayor   │Mayor   │        │        │
│~ (6)  ~│~Lluvia~│ (3)    │ (4)    │  (8)   │  (8)   │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│~~~~~~~~│ Prado  │Arboleda│Arboleda│Tronco  │Puente  │Frontera│Frontera│
│~ Lago ~│ de     │ de     │Central │Hueco de│ de     │de      │de      │
│~  de ~ │Hongos  │Roble   │  (2)   │ Bambu  │Raices  │Espino  │Espino  │
│~Lluvia~│  (6)   │  (7)   │        │  (8)   │        │  (5)   │  (5)   │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│ Gruta  │Jardin  │Sendero │Sendero │Sendero │Sendero │Muro de │ Paso   │
│ de     │Subterr.│del     │ del    │ de     │del     │Espinas │ al     │
│ Hongo  │  (6)   │Bosque  │Bosque  │Bosque  │Bosque  │  (5)   │Oceano★ │
│  (6)   │        │        │        │        │        │        │SECRETO │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│Cueva de│ Claro  │Sendero │Sendero │Sendero │Sendero │Desierto│Desierto│
│Raices  │ de     │del     │del     │del     │del     │Limita  │Limite  │
│        │ Flora  │Bosque  │Bosque  │Bosque  │Bosque  │        │        │
│        │  (9)   │        │        │        │        │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│ Raices │Pantano │Sendero │Sendero │Sendero │Claro de│Desierto│        │
│ Prof.  │ de     │ del    │Principal│Princip│ Brote  │        │        │
│        │Musgo   │Bosque  │        │        │  (1)   │        │        │
│        │        │        │        │        │        │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│ Raices │ Raices │Sendero │Sendero │Sendero │Pradera │        │        │
│ Prof.  │ Prof.  │del     │del     │del     │de      │        │        │
│        │        │Bosque  │Bosque  │Bosque  │Hierba  │        │        │
│        │        │        │        │        │  (2)   │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│        │ Ruinas │Sendero │Sendero │Sendero │Linde   │        │        │
│        │Antiguas│ del    │ del    │ del    │del     │        │        │
│        │        │Bosque  │Bosque  │Bosque  │Bosque  │        │        │
│        │        │        │        │        │        │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│        │        │ Raiz   │ Raiz   │Borde   │>>HACIA │        │        │
│        │        │ Madre  │ Madre  │del     │  EL    │        │        │
│        │        │(Puerta)│(Puerta)│Nexo    │NEXO>>  │        │        │
│        │        │        │        │        │        │        │        │
└────────┴────────┴────────┴────────┴────────┴────────┴────────┴────────┘

Numeros entre parentesis = guardian Seed encontrado en esa zona
★ = Conexion secreta inter-reino
```

### Zonas del Bosque Eterno

#### Zona 1 — La Linde (filas 7-8, sur)

- **Ambiente**: Bosque joven y luminoso. Arboles delgados, mucha luz solar, flores silvestres. Zona tutorial del reino Seed.
- **Guardian**: Ninguno (zona de transicion).
- **Elementos**: Camino principal claro, enemigos debiles (insectos sombra, esporas agresivas), cofres con objetos basicos.

#### Zona 2 — Pradera de Hierba y Arboleda Central (filas 5-6, centro)

- **Ambiente**: Prados verdes con hierba alta que se mece con el viento. La arboleda central es un grupo de arboles maduros que forman un circulo natural.
- **Guardianes**:
  - **Hierba (seed-02)** — Se encuentra en la Pradera. Hay una mision donde zonas del prado estan marchitas y contaminadas. El jugador debe limpiar las zonas, y Hierba aparece para agradecer y unirse, ofreciendo su Hoja Perenne.
  - **Brote (seed-01)** — En el Claro de Brote, un pequeno claro con un monticulo de tierra dorada. Brote es el primer guardian que el jugador puede encontrar en el Bosque. Es timido pero curioso, y se acerca si el jugador planta una semilla especial encontrada en la Linde.

#### Zona 3 — Los Claros Altos (fila 1, columnas 3-4)

- **Ambiente**: Claros circulares donde la copa de los arboles se abre al cielo. Luz natural intensa. Mariposas y particulas luminosas en el aire.
- **Guardianes**:
  - **Trebol (seed-03)** — En el Claro de Trebol, un prado de treboles donde todo parece salir bien o terriblemente mal. Hay un puzzle basado en probabilidad — el jugador debe elegir caminos correctos en un laberinto cambiante. Trebol aparece al completarlo, ofreciendo su Hoja de Cuatro.
  - **Girasol (seed-04)** — En el Claro de Girasol, un campo de girasoles que siempre miran hacia un punto especifico. Siguiendo la direccion de los girasoles, el jugador llega a un santuario iluminado donde Girasol vigila. Hay un puzzle de redirigir luz con espejos para abrir el santuario. Girasol otorga su Petalo de Amanecer.

#### Zona 4 — El Subsuelo del Bosque (filas 3-5, columnas 1-2)

- **Ambiente**: La zona bajo las raices. Oscura, humeda, bioluminiscente. Los hongos emiten luz en tonos azules y verdes. Las raices forman tuneles y camaras naturales.
- **Guardianes**:
  - **Hongo (seed-06)** — En la Gruta de Hongo, una camara subterranea conectada por la Red Micelica. El jugador debe navegar un laberinto donde las paredes cambian segun las emociones que proyecta (mecánica especial). Hongo esta en el centro, paralizado por emociones ajenas. El jugador debe calmar las emociones de la zona para liberar a Hongo, quien ofrece su Espora Luminosa.

#### Zona 5 — La Frontera de Espino (filas 2-3, columnas 7-8)

- **Ambiente**: El borde oriental del Bosque, donde la vegetacion se vuelve arida y agresiva. Muros de espinas, suelo arenoso. Transicion visual hacia un mini-desierto.
- **Guardian**:
  - **Espino (seed-05)** — Patrulla la frontera. El jugador debe demostrar que no es un intruso atravesando un laberinto de espinas sin ser tocado (puzzle de precision de movimiento). Al llegar al centro, Espino reconoce al jugador como digno y ofrece su Espina Cristalina. En esta zona se encuentra el **paso secreto al Oceano Profundo** (ver Conexiones Secretas).

#### Zona 6 — La Copa del Arbol Mayor (fila 1, columnas 5-6) y Zona Vertical

- **Ambiente**: El arbol mas grande del Bosque Eterno. Su tronco es tan ancho que ocupa pantallas enteras. La zona se explora verticalmente — el jugador sube por el interior del tronco hueco y por ramas exteriores, cada pantalla representando un nivel de altura diferente.
- **Guardianes**:
  - **Roble (seed-07)** — Dentro del tronco del Arbol Mayor, en una camara donde los anillos del arbol estan grabados en las paredes. Roble es el arbol mismo — o mejor dicho, su espiritu guardian. Habla lentamente. El jugador debe tocar tres anillos especificos en orden cronologico (puzzle de historia/lore). Roble otorga su Bellota de Sabiduria.
  - **Bambu (seed-08)** — En la copa del Arbol Mayor, accesible solo subiendo por un tallo de bambu que crece al lado del tronco. El jugador debe encontrar un item especial (agua del Lago de Lluvia) para hacer crecer el bambu lo suficiente. Bambu espera en la cima, donde conecta el suelo con las estrellas. Ofrece su Flauta de Viento.

#### Zona 7 — El Lago de Lluvia (fila 1-2, columnas 1-2)

- **Ambiente**: Un lago natural alimentado por lluvia perpetua. La lluvia solo cae sobre el lago y su orilla inmediata; un paso mas alla, el cielo esta despejado. El agua es cristalina y en el fondo se ven ruinas sumergidas.
- **Guardian**: El lago esta conectado con **Lluvia (drop-09)** del Oceano Profundo — aqui llueve porque Lluvia llora de felicidad al sentir la vida del bosque. Esto es una pista hacia la conexion entre reinos, pero Lluvia no se encuentra aqui.

#### Zona 8 — El Claro de Flora (fila 4, columna 2)

- **Ambiente**: El claro mas hermoso del Bosque. Flores de todas las especies conocidas y desconocidas. El aire huele a primavera eterna. Una luz suave y calida baña todo.
- **Guardian**:
  - **Flora (seed-09)** — La ultima guardiana del Bosque. Su claro esta rodeado por una barrera de criaturas oscuras atraidas por su belleza. El jugador debe haber formado vinculo con al menos 6 de los otros 8 guardianes Seed para tener las herramientas necesarias (Espina Cristalina para cortar, Espora Luminosa para iluminar, Flauta de Viento para calmar, etc.). Flora es un mini-boss encounter donde el jugador debe protegerla mientras ella florece. Al completarlo, ofrece su Perfume del Eden.

---

## 5. Estructura del Oceano Profundo (Drop)

### Concepto Visual

El reino comienza como una costa rocosa y playas de arena blanca, pero rapidamente desciende hacia aguas cada vez mas profundas. Las zonas superficiales son luminosas y tropicales; las profundas son oscuras, bioluminiscentes e inquietantes. El jugador puede respirar bajo el agua (explicado como efecto de la esencia Drop que impregna el reino). El movimiento bajo el agua es ligeramente mas lento pero permite movimiento en las cuatro direcciones sin restriccion.

### Distribucion de Zonas (sureste del mapa)

```
OCEANO PROFUNDO — Vista de zonas (8x8 pantallas)

┌────────┬────────┬────────┬────────┬────────┬────────┬────────┬────────┐
│        │        │>>HACIA │Borde   │Acanti- │Acanti- │        │        │
│        │        │  EL    │del     │lado    │lado    │        │        │
│        │        │NEXO>>  │Nexo    │Norte   │Norte   │        │        │
│        │        │        │        │        │        │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│        │        │Cascada │Playa de│Playa de│Pozas de│Cueva   │        │
│        │        │Invertid│Entrada │Arena   │Marea   │Costera │        │
│        │        │(Puerta)│        │        │  (1)   │        │        │
│        │        │        │        │        │        │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│ Paso   │Acanti- │Rompient│Aguas   │Aguas   │Arrecife│Arrecife│Isla del│
│ al     │lado    │es      │Poco    │Poco    │Exterior│Exterior│Faro    │
│Bosque★ │Oculto  │        │Profund.│Profund.│  (5)   │  (5)   │  (4)   │
│SECRETO │        │        │        │        │        │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│        │Gruta de│Corrient│Corrient│Bosque  │Arrecife│Arrecife│Faro    │
│        │Burbuja │e Calida│e Calida│de Algas│Interior│Interior│Submar. │
│        │  (8)   │        │        │        │  (5)   │  (5)   │  (4)   │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│        │ Canal  │Canal   │Aguas   │Aguas   │Ciudad  │Ciudad  │Mercado │
│        │ de     │ de     │Medias  │Medias  │Sumergi.│Sumergi.│de      │
│        │ Neon   │ Neon   │        │        │        │        │Coral   │
│        │  (6)   │  (6)   │        │        │        │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│        │Cueva de│Corrient│Corrient│Corrient│Plaza de│Templo  │        │
│        │Hielo   │e Fria  │e Fria  │e Fria  │las     │de      │        │
│        │  (3)   │  (2)   │  (2)   │  (2)   │Perlas  │Marea   │        │
│        │        │        │        │        │        │  (9)   │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│        │Fosa    │Fosa    │Fosa    │Fosa    │Columna │  Paso  │        │
│        │Abisal  │Abisal  │Abisal  │Abisal  │de Agua │  al    │        │
│        │        │  (7)   │        │        │Ascend. │Cosmos★ │        │
│        │        │        │        │        │        │SECRETO │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│        │Fondo   │Fondo   │ Trono  │ Trono  │Fondo   │        │        │
│        │Abisal  │Abisal  │ de     │ de     │Abisal  │        │        │
│        │        │        │ Marea  │ Marea  │        │        │        │
│        │        │        │  (9)   │  (9)   │        │        │        │
└────────┴────────┴────────┴────────┴────────┴────────┴────────┴────────┘

Numeros entre parentesis = guardian Drop encontrado en esa zona
★ = Conexion secreta inter-reino
```

### Zonas del Oceano Profundo

#### Zona 1 — Costa y Aguas Someras (filas 1-3, centro)

- **Ambiente**: Playa de arena blanca con palmeras, rocas cubiertas de percebes, pozas de marea con vida marina pequena. Agua turquesa y cristalina.
- **Guardian**:
  - **Gota (drop-01)** — En las Pozas de Marea. El jugador encuentra multiples copias de Gota repartidas por las pozas (su habilidad Eco de Marea). Debe encontrar a la "original" siguiendo pistas sobre cual no se evapora al sol. Al identificarla, Gota se une y ofrece su Lagrima del Origen.

#### Zona 2 — Las Corrientes (filas 5-6, columnas 3-5)

- **Ambiente**: Zonas de aguas abiertas donde corrientes poderosas mueven al jugador en direcciones especificas. Hay corrientes calidas (hacia arriba/superficie) y frias (hacia abajo/profundidad).
- **Guardian**:
  - **Ola (drop-02)** — En las Corrientes Frias. Ola se desplaza sin parar por un circuito de corrientes. El jugador debe anticipar su ruta y colocarse en el punto exacto donde Ola pasa. Requiere timing preciso. Ola ofrece su Espuma Eterna.

#### Zona 3 — Cueva de Hielo (fila 6, columna 2)

- **Ambiente**: Una gruta submarina donde el agua se congela en formaciones cristalinas imposibles. Estalactitas de hielo, suelo resbaloso, luz refractada en arcoiris.
- **Guardian**:
  - **Cristal (drop-03)** — En el corazon de la cueva, atrapado en un momento congelado en el tiempo (su propia habilidad descontrolada). El jugador debe encontrar una fuente de calor suave (la Brasa Inmortal de Llama si ya la tiene, o una alternativa local) para descongelar el momento sin romper a Cristal. Ofrece su Copo Perpetuo.

#### Zona 4 — Isla del Faro y Faro Submarino (filas 3-4, columna 8)

- **Ambiente**: Una isla rocosa con un faro antiguo en la superficie. Debajo del faro hay una estructura sumergida identica — un faro invertido que apunta hacia el fondo del oceano.
- **Guardian**:
  - **Concha (drop-04)** — Dentro del Faro Submarino. El jugador debe resolver un puzzle sonoro: activar campanas submarinas en una secuencia especifica para hacer una melodia que convenza a Concha de salir de su caparazon. Las pistas de la melodia estan distribuidas por las paredes del faro. Ofrece su Perla de Eco.

#### Zona 5 — El Gran Arrecife (filas 3-4, columnas 6-7)

- **Ambiente**: Un arrecife de coral masivo y colorido. Es una ciudad en miniatura con tuneles, puentes y torres de coral. Peces de colores nadan por todas partes.
- **Guardian**:
  - **Coral (drop-05)** — El arquitecto del Arrecife. El jugador lo encuentra construyendo una nueva seccion. Coral necesita ayuda: tres tipos de minerales submarinos de tres zonas distintas del oceano. Es una mision de recoleccion que obliga al jugador a explorar. Al entregar los minerales, Coral completa su obra maestra y ofrece su Fragmento de Ciudad.

#### Zona 6 — Canal de Neon (fila 5, columnas 2-3)

- **Ambiente**: Un canal estrecho y oscuro iluminado unicamente por la bioluminiscencia. Colores electricos — azul, rosa, verde — pulsan ritmicamente. Criaturas extranas nadan en la penumbra.
- **Guardian**:
  - **Neon (drop-06)** — Nada por el canal emitiendo destellos. El jugador debe seguirlo a traves de un laberinto oscuro donde Neon es la unica fuente de luz. Si el jugador lo pierde de vista, debe volver al inicio. Al completar el laberinto juntos, Neon confie en el jugador y ofrece su Escama Prismatica.

#### Zona 7 — La Fosa Abisal (fila 7, columnas 2-5)

- **Ambiente**: Las profundidades mas oscuras del oceano. Presion aplastante (el jugador se mueve mas lento). Oscuridad casi total salvo por criaturas bioluminiscentes esporadicas. Sonidos inquietantes — crujidos metalicos, ecos distantes.
- **Guardian**:
  - **Aleta (drop-07)** — El guardian mas temido. Patrulla la Fosa Abisal y el jugador lo detecta primero como una sombra que se mueve en la periferia de la pantalla. Hay un encuentro tipo "gato y raton" donde el jugador debe evitarlo primero, luego demostrar valentia quedandose quieto cuando Aleta se acerca. Al hacerlo, Aleta reconoce el coraje y ofrece su Diente de Marea.

#### Zona 8 — La Gruta de Burbuja (fila 4, columna 2)

- **Ambiente**: Una gruta llena de burbujas de todos los tamanos. Algunas contienen objetos, otras contienen recuerdos (imagenes holograficas), otras estan vacias.
- **Guardian**:
  - **Burbuja (drop-08)** — Flotando distraidamente entre sus burbujas. El jugador debe reunir tres "Burbujas de Recuerdo" perdidas por el oceano (estan en zonas aleatorias) y traerlas de vuelta. Burbuja las habia perdido por ser distraida. Al recuperarlas, se emociona y ofrece su Burbuja de Recuerdo (una cuarta, especial).

#### Zona 9 — El Trono de Marea (fila 8, columnas 4-5)

- **Ambiente**: El punto mas profundo del Oceano Profundo. Una camara natural con paredes de coral negro y un trono hecho de conchas, huesos de ballena y cristales marinos. Bioluminiscencia azul tenue.
- **Guardian**:
  - **Lluvia (drop-09)** — La ultima guardiana Drop. Lluvia ha descendido al Trono de Marea porque esta triste — siente que el mundo de arriba se ha olvidado del oceano. El jugador debe haber formado vinculo con al menos 6 de los otros 8 guardianes Drop y traer evidencia de que el oceano es amado (los trade items de otros guardianes). Al ver las pruebas, Lluvia llora de felicidad (lo cual causa una corriente ascendente que abre un nuevo camino) y ofrece su Gota de Nube.

---

## 6. Estructura del Cosmos Infinito (Spark)

### Concepto Visual

Un reino vertical mas que horizontal. Plataformas flotantes de roca, cristal y energia suspendidas en un vacio estrellado. Nebulosas de colores forman el "paisaje de fondo" que cambia de zona a zona. La gravedad es variable — el jugador puede dar saltos mas largos y flotar brevemente. Hay "cintas de gravedad" que lo impulsan en direcciones especificas, similar a las corrientes del Oceano pero en el espacio.

### Distribucion de Zonas (norte del mapa)

```
COSMOS INFINITO — Vista de zonas (8x8 pantallas)

┌────────┬────────┬────────┬────────┬────────┬────────┬────────┬────────┐
│        │Orbita  │Orbita  │★TRONO★ │★TRONO★ │Campo de│Campo de│        │
│        │de      │de      │DEL SOL │DEL SOL │Gravedad│Gravedad│        │
│        │Planeta │Planeta │  (8)   │  (8)   │ (9)    │  (9)   │        │
│        │  (9)   │  (9)   │        │        │        │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│        │Cinturon│Nebulosa│Estacion│Estacion│Puente  │Campo de│        │
│        │de      │de      │Estelar │Estelar │de Luz  │Asteroid│        │
│        │Asteroid│ Nova   │  (4)   │  (4)   │        │        │        │
│        │        │  (5)   │        │        │        │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│  Paso  │Nube    │Vacio   │Constel.│Constel.│Vacio   │Estela  │        │
│  al    │Oscura  │Inter-  │ del    │ del    │Inter-  │de      │        │
│Bosque★ │  (7)   │estelar │Guardian│Guardian│estelar │Cometa  │        │
│SECRETO │        │        │  (3)   │  (2)   │        │  (6)   │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│        │Puente  │Platafor│Platafor│Platafor│Platafor│Ruta de │        │
│        │de      │ma      │ma      │ma      │ma      │Cometa  │        │
│        │Estrell.│Flotante│Central │Central │Flotante│  (6)   │        │
│        │        │        │        │        │        │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│        │        │Sendero │Sendero │Sendero │Sendero │        │        │
│        │        │del     │ del    │del     │del     │        │        │
│        │        │Cosmos  │Cosmos  │Cosmos  │Cosmos  │        │        │
│        │        │        │        │        │        │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│        │        │Primer  │Platafor│Platafor│Mecha   │        │        │
│        │        │Escalon │ma de   │ma de   │Eterna  │        │        │
│        │        │(Puerta)│Chispa  │Rayo    │  (1)   │        │        │
│        │        │        │  (1)   │  (2)   │        │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│        │        │Borde   │Borde   │Borde   │Borde   │        │        │
│        │        │del     │del     │del     │del     │        │        │
│        │        │Nexo    │Nexo    │Nexo    │Nexo    │        │        │
│        │        │        │        │        │        │        │        │
├────────┼────────┼────────┼────────┼────────┼────────┼────────┼────────┤
│        │        │>>HACIA │>>HACIA │        │        │ Paso   │        │
│        │        │  EL    │  EL    │        │        │ al     │        │
│        │        │NEXO>>  │NEXO>>  │        │        │Oceano★ │        │
│        │        │        │        │        │        │SECRETO │        │
└────────┴────────┴────────┴────────┴────────┴────────┴────────┴────────┘

Numeros entre parentesis = guardian Spark encontrado en esa zona
★ = Conexion secreta inter-reino
```

### Zonas del Cosmos Infinito

#### Zona 1 — Plataformas de Entrada (fila 6, columnas 4-6)

- **Ambiente**: Las primeras plataformas flotantes sobre el vacio. Pequenas, estables, con cristales luminosos. El fondo es un cielo crepuscular con estrellas apareciendo. El jugador aprende la mecanica de salto extendido y flotacion aqui.
- **Guardianes**:
  - **Chispa (spark-01)** — En la Plataforma de Chispa. Un pequeno destello que revolotea cerca del jugador desde el primer momento. Es curiosa y juguetona. El jugador debe encender tres antorchas cosmicas apagadas usando a Chispa como guia — ella indica cual encender primero. Al completar la secuencia, Chispa se formaliza como guardiana y ofrece su Mecha Eterna.
  - **Rayo (spark-02)** — En la Plataforma de Rayo, visible como un destello que se mueve a velocidad imposible entre plataformas. El jugador debe colocar "pararrayos" (objetos especiales) en puntos estrategicos para que Rayo aterrice. Es un puzzle de posicionamiento rapido. Rayo ofrece su Fragmento de Tormenta.

#### Zona 2 — Las Constelaciones del Guardian (fila 3, columnas 4-5)

- **Ambiente**: Un area donde las estrellas forman patrones reconocibles — las siluetas de los 27 guardianes dibujadas en el cielo. Es un observatorio natural.
- **Guardian**:
  - **Llama (spark-03)** — En la Constelacion del Guardian, ardiendo en el corazon de una estrella moribunda (una plataforma que pulsa con calor). El jugador debe acercarse resistiendo el calor (requiere la Espuma Eterna de Ola o el Copo Perpetuo de Cristal para proteccion termica). Llama arde con fuerza, pero al ver la determinacion del jugador, reduce su temperatura y ofrece su Brasa Inmortal.

#### Zona 3 — La Estacion Estelar (fila 2, columnas 4-5)

- **Ambiente**: Una estructura artificial antigua — un observatorio cosmico construido por una civilizacion olvidada que estudiaba a El Origen. Telescopios gigantes, mapas estelares en las paredes, mecanismos de relojeria cosmica.
- **Guardian**:
  - **Estrella (spark-04)** — Anclada en el centro del observatorio. No puede moverse, pero puede ver todo el cosmos. El jugador debe usar los telescopios para encontrar tres objetos ocultos en diferentes partes del Cosmos (puzzle de observacion que requiere haber explorado zonas previas). Estrella activa su Mapa Celestial para guiar al jugador y ofrece su Carta Estelar.

#### Zona 4 — La Nebulosa de Nova (fila 2, columna 3)

- **Ambiente**: Los restos de una explosion cosmica. Nubes de gas multicolor, fragmentos de materia brillante, radiacion residual. Es bello y peligroso.
- **Guardian**:
  - **Nova (spark-05)** — En el centro de la nebulosa, agotada despues de su ultima explosion. Esta en estado de reposo y el jugador debe alimentarla con energia recolectada de cristales dispersos por la nebulosa. Cada cristal requiere un mini-puzzle para extraerlo sin detonarlo. Al recuperar su energia, Nova despierta y ofrece su Polvo de Supernova.

#### Zona 5 — La Ruta del Cometa (filas 3-4, columnas 7 y 6)

- **Ambiente**: Un rastro luminoso que cruza el cielo — la estela que Cometa deja en su viaje eterno. Las plataformas aqui se mueven siguiendo la trayectoria del cometa.
- **Guardian**:
  - **Cometa (spark-06)** — No esta en un lugar fijo. Cometa aparece en la Ruta del Cometa cada cierto tiempo (ciclo de juego) y el jugador debe "montar" su estela — saltar a la cola de luz cuando pasa. Si logra viajar con Cometa a traves de su circuito completo (que pasa por los tres reinos brevemente), Cometa se detiene por primera vez y ofrece su Cola de Luz, maravillado por alguien que pudo seguirle el paso.

#### Zona 6 — La Nube Oscura (fila 3, columna 2)

- **Ambiente**: Una zona de oscuridad total. No hay estrellas, no hay luz. Solo el vacio absoluto. El jugador necesita fuentes de luz propias (Mecha Eterna de Chispa, Espora Luminosa de Hongo, etc.) para navegar.
- **Guardian**:
  - **Luna (spark-07)** — Oculta en la oscuridad de la Nube Oscura. Este es su dominio — la noche eterna. El jugador debe encontrarla guiandose solo por la luz plateada de sus ojos. Hay un puzzle donde el jugador debe crear "noche" en una zona normalmente iluminada (usar el Velo Lunar de Luna requiere cooperacion — ella lo activa si el jugador apaga todas las fuentes de luz artificiales de la zona). Al demostrar confianza en la oscuridad, Luna ofrece su Rayo de Luna.

#### Zona 7 — El Trono del Sol (fila 1, columnas 4-5)

- **Ambiente**: El punto mas alto y brillante del Cosmos. Una plataforma solar rodeada de anillos de plasma. La luz es tan intensa que la pantalla se satura de dorado y blanco. El calor distorsiona el aire.
- **Guardian**:
  - **Sol (spark-08)** — El guardian mas poderoso de los Spark, sentado en el Trono del Sol. El jugador debe haber completado un requisito previo: tener al menos la Brasa Inmortal (Llama) y la Mecha Eterna (Chispa) para resistir la proximidad del Sol. Sol no pide una prueba de fuerza sino de **equilibrio** — el jugador debe demostrar que entiende que la luz sin control quema. Puzzle donde el jugador debe dosificar la energia del Sol (activando/desactivando escudos) para iluminar sin destruir. Sol ofrece su Fragmento de Corona.

#### Zona 8 — La Orbita de Planeta (fila 1, columnas 2-3)

- **Ambiente**: El confin del Cosmos. Una plataforma gigante y esferica que orbita solitaria en el borde del vacio. Tiene su propio campo gravitatorio — al acercarse, el jugador es atraido hacia su superficie. En la superficie hay un mini-mundo con biomas propios en miniatura.
- **Guardian**:
  - **Planeta (spark-09)** — El ultimo guardian del Cosmos y el mas misterioso. El jugador debe explorar el mini-mundo sobre la superficie de Planeta, descubriendo que Planeta es solitario por necesidad — su gravedad aleja a todos. El jugador debe encontrar la forma de orbitar a Planeta sin ser atrapado (usando la Cola de Luz de Cometa como propulsor). Al lograr una orbita estable — ni demasiado cerca ni demasiado lejos — Planeta se emociona por primera vez en eones y ofrece su Anillo Orbital.

---

## 7. La Mecanica de la Profecia

### El Ciclo de los 27

La profecia de El Origen establece que **cuando los 27 guardianes se reunan, El Ciclo se completara y El Origen renacera**. Esta es la mecanica central del juego que vertebra toda la exploracion.

### Como se "Reune" un Guardian

1. **Descubrimiento**: El jugador encuentra al guardian en su zona del mundo.
2. **Desafio**: Cada guardian presenta una prueba unica (puzzle, mision, desafio de habilidad).
3. **Vinculo**: Al completar el desafio, el guardian reconoce al jugador y le entrega su **Objeto de Intercambio** (trade item).
4. **Registro**: El guardian aparece en el **Espejo de Esencias** de El Nexo y su trade item se coloca automaticamente en el **Monumento de El Origen**.

### Progresion del Monumento

El Monumento de El Origen en El Nexo cambia visualmente con cada guardian reunido:

| Guardianes Reunidos | Cambio en El Nexo |
|---|---|
| **1-3** | Los primeros huecos se iluminan. Pequenas particulas de energia flotan alrededor del Monumento. El Cronista comenta que "algo se agita". |
| **4-8** | Un zumbido suave emana del Monumento. Los Jardines Marchitos muestran los primeros signos de vida. Las vetas de color en la piedra brillan con mas intensidad. |
| **9 (un reino completo)** | El arco correspondiente se restaura con un evento cinematico. Un haz de luz del color del reino (verde/azul/dorado) se dispara hacia el cielo. El Cronista revela un fragmento nuevo de la profecia. El camino al reino completado se embellece (flores, agua cristalina o estrellas segun el reino). |
| **10-17** | El Monumento vibra ritmicamente, como un latido. Los NPCs de El Nexo tienen dialogos nuevos. La Tejedora desbloquea recetas de creacion avanzadas que combinan esencias de distintos reinos. |
| **18 (dos reinos completos)** | El segundo arco se restaura. Los dos haces de luz se cruzan en el cielo sobre El Nexo, formando un arco luminoso. El cielo imposible de El Nexo se vuelve mas vivo — las estrellas brillan mas, las nubes toman formas de los guardianes, el atardecer pulsa con energia. |
| **19-26** | Temblores de energia recorren todo el mapa. Los guardianes ya reunidos pueden verse como espectros luminosos paseando por El Nexo. Dialogos de NPCs son urgentes y esperanzados. |
| **27 (todos)** | **El Renacimiento** — Secuencia final del juego (ver abajo). |

### El Renacimiento — Evento Final

Al colocar el vigesimoseptimo trade item en el Monumento:

1. Los tres arcos completos se unen formando una **esfera perfecta de luz**.
2. La esfera pulsa tres veces, cada vez mas brillante.
3. Los 27 guardianes se materializan en El Nexo, formando tres circulos concentricos alrededor del Monumento.
4. Cada guardian contribuye su esencia: las Semillas brotan, las Gotas fluyen, las Chispas arden.
5. La esfera se eleva y estalla en una lluvia de luz que cae sobre todo el mapa, restaurando las zonas danadas, revelando los ultimos secretos y transformando El Nexo en **El Origen Renacido** — una version paradisiaca del hub central donde las tres esencias coexisten en armonia.
6. El jugador recibe la **Esencia de El Origen**, un item que le permite acceder a una zona post-game secreta dentro de la esfera restaurada.

### Sistema de Pistas

Para que el jugador no se pierda buscando a los 27 guardianes:

- **El Cronista** da pistas vagas pero utiles sobre la ubicacion de guardianes que el jugador aun no ha encontrado. Las pistas se actualizan segun la progresion.
- **Los trade items** a veces hacen referencia a otros guardianes (por ejemplo, la Flauta de Viento de Bambu suena cuando el jugador esta cerca de la zona de Concha, porque ambos tienen conexion con el sonido).
- **El Mapa Celestial** de Estrella (spark-04), una vez obtenido, marca las zonas generales donde se encuentran los guardianes no descubiertos.
- **La Red Micelica** de Hongo (seed-06), una vez obtenido, permite escuchar "susurros" de guardianes cercanos cuando el jugador esta en su misma zona pero no los ha encontrado aun.

---

## 8. Conexiones Secretas Entre Reinos

### Conexion Secreta 1 — "La Grieta de Espino"
**Conecta**: Bosque Eterno (Frontera de Espino) <-> Oceano Profundo (Acantilado Oculto)

- **Ubicacion Bosque**: En la zona de Espino (fila 3, columna 8), detras del Muro de Espinas mas denso. El jugador necesita la Espina Cristalina (trade item de Espino) para cortar un patron especifico en el muro, revelando una cueva estrecha.
- **Ubicacion Oceano**: En el Acantilado Oculto (fila 3, columna 2), una grieta en la roca costera visible solo durante la marea baja (evento ciclico en el juego).
- **Pasaje**: Una cueva natural donde la tierra se mezcla con el agua. Raices de arboles cuelgan del techo y gotean agua salada. A mitad de camino hay un pequeno santuario olvidado con una tablilla que habla de la conexion entre la vida (Seed) y el flujo (Drop).
- **Requisito**: Haber formado vinculo con Espino (seed-05).

### Conexion Secreta 2 — "La Columna Ascendente"
**Conecta**: Oceano Profundo (Fosa Abisal) <-> Cosmos Infinito (Borde inferior)

- **Ubicacion Oceano**: En la zona este de la Fosa Abisal (fila 7, columna 6), una columna de agua que asciende verticalmente contra toda logica, como la Cascada Invertida pero submarina.
- **Ubicacion Cosmos**: En el borde sureste del Cosmos (fila 8, columna 7), un agujero en la plataforma mas baja del que brota agua que se evapora al contacto con el vacio estelar.
- **Pasaje**: El jugador es transportado por la columna de agua ascendente, que se transforma gradualmente en una columna de energia. El agua se convierte en estrellas. La transicion visual es uno de los momentos mas bellos del juego — el azul profundo del abismo se transforma en el dorado del cosmos.
- **Requisito**: Haber formado vinculo con Burbuja (drop-08) — el jugador necesita la Capsula Eterea para sobrevivir la transicion entre elementos.

### Conexion Secreta 3 — "El Tunel de la Nube Oscura"
**Conecta**: Cosmos Infinito (Nube Oscura) <-> Bosque Eterno (Raices Profundas)

- **Ubicacion Cosmos**: En la Nube Oscura (fila 3, columna 2), al fondo de la zona de oscuridad total, hay una plataforma que desciende si el jugador apaga toda la luz. La plataforma baja lentamente a traves del vacio.
- **Ubicacion Bosque**: En las Raices Profundas (fila 5-6, columna 1), la zona subterranea mas profunda del Bosque. Un techo de raices que parece impenetrable tiene una abertura que da al cielo nocturno... pero ese cielo es la Nube Oscura del Cosmos.
- **Pasaje**: Un descenso vertical a traves de la oscuridad donde las estrellas apagadas se convierten en esporas luminosas y el vacio se llena de raices. Es la conexion entre lo mas alto (cosmos) y lo mas profundo (subsuelo del bosque), recordando que El Origen era todo a la vez.
- **Requisito**: Haber formado vinculo con Luna (spark-07) y Hongo (seed-06) — se necesita el Rayo de Luna para ver en la oscuridad absoluta y la Red Micelica para detectar el camino correcto entre las raices.

### Conexion Secreta 4 — "La Estela Tridimensional" (Bonus)
**Conecta**: Los tres reinos simultaneamente (ruta de Cometa)

- **Condicion**: Solo accesible despues de formar vinculo con Cometa (spark-06).
- **Mecanica**: Al usar la Cola de Luz en cualquiera de las tres zonas de transicion secreta, el jugador puede invocar a Cometa para un viaje express que recorre los tres reinos en un circuito. El jugador aterriza en el hub secreto de Cometa — una pequena plataforma invisible entre los tres reinos llamada **El Punto Ciego**, donde los tres cielos son visibles simultaneamente.
- **El Punto Ciego** contiene un cofre con un item unico que solo existe si los tres reinos han sido parcialmente explorados: la **Lente de El Origen**, que permite ver mensajes ocultos en paredes de los tres reinos, revelando lore adicional sobre La Gran Fragmentacion.

---

## 9. Sistema de Cuadricula (Grid)

### Especificaciones Tecnicas

Siguiendo el modelo de *The Legend of Zelda* (NES) y *A Link to the Past* (SNES), el sobremundo se organiza en pantallas discretas que ocupan la totalidad de la ventana de juego. El jugador transiciona entre pantallas al cruzar los bordes.

### Tamano de Pantalla Individual

- **Resolucion logica**: 256 x 224 pixels (proporcion SNES clasica).
- **Tiles**: 16x14 tiles de 16x16 pixels por pantalla.
- **Viewport**: Cada pantalla es una escena autocontenida con su propio diseno de terreno, enemigos y objetos.

### Mapa Global — Cuadricula Total

```
MAPA GLOBAL — 20 columnas x 20 filas = 400 pantallas totales

         Col: 1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20
             ┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐
 Fila 1      │  │  │  │  │  │  │CC│CC│CC│CC│CC│CC│CC│CC│  │  │  │  │  │  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 2      │  │  │  │  │  │CC│CC│CC│CC│CC│CC│CC│CC│CC│CC│  │  │  │  │  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 3      │  │  │  │  │CC│CC│CC│CC│CC│CC│CC│CC│CC│CC│CC│CC│  │  │  │  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 4      │  │  │  │  │CC│CC│CC│CC│CC│CC│CC│CC│CC│CC│CC│CC│  │  │  │  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 5      │  │  │  │  │  │CC│CC│CC│CC│CC│CC│CC│CC│CC│CC│  │  │  │  │  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 6      │  │  │  │  │  │  │CC│CC│CC│CC│CC│CC│CC│CC│  │  │  │  │  │  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 7      │  │  │  │  │  │  │  │  │NN│NN│NN│NN│  │  │  │  │  │  │  │  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 8      │  │  │  │  │  │  │  │NN│NN│NN│NN│NN│  │  │  │  │  │  │  │  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 9      │  │  │  │  │  │  │NN│NN│NN│NN│NN│NN│NN│  │  │  │  │  │  │  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 10     │  │  │  │  │  │  │  │  │NN│NN│NN│NN│  │  │  │  │  │  │  │  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 11     │  │  │BB│BB│BB│BB│BB│BB│TT│TT│TT│TT│OO│OO│OO│OO│OO│OO│  │  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 12     │  │BB│BB│BB│BB│BB│BB│BB│TT│TT│TT│TT│OO│OO│OO│OO│OO│OO│OO│  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 13     │BB│BB│BB│BB│BB│BB│BB│BB│  │  │  │  │OO│OO│OO│OO│OO│OO│OO│OO│
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 14     │BB│BB│BB│BB│BB│BB│BB│BB│  │  │  │  │OO│OO│OO│OO│OO│OO│OO│OO│
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 15     │BB│BB│BB│BB│BB│BB│BB│BB│  │  │  │  │OO│OO│OO│OO│OO│OO│OO│OO│
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 16     │BB│BB│BB│BB│BB│BB│BB│BB│  │  │  │  │OO│OO│OO│OO│OO│OO│OO│OO│
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 17     │  │BB│BB│BB│BB│BB│BB│  │  │  │  │  │  │OO│OO│OO│OO│OO│OO│  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 18     │  │  │BB│BB│BB│BB│  │  │  │  │  │  │  │  │OO│OO│OO│OO│  │  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 19     │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │
             ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
 Fila 20     │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │
             └──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘

LEYENDA:
  CC = Cosmos Infinito (Spark)        ~48 pantallas usables
  NN = El Nexo (Hub Central)          ~28 pantallas usables (incluye transiciones)
  BB = Bosque Eterno (Seed)           ~64 pantallas usables
  OO = Oceano Profundo (Drop)         ~64 pantallas usables
  TT = Zonas de Transicion            ~8 pantallas (senderos entre Nexo y reinos)
     = Espacio vacio / inaccesible
```

### Desglose de Pantallas por Zona

| Zona | Pantallas (estimadas) | Notas |
|---|---|---|
| **El Nexo (hub)** | 12 pantallas (4x3) | Incluye el monumento, plaza, fuente, archivo, miradores y jardines. |
| **Transiciones Nexo-Reinos** | 16 pantallas (~5 por sendero) | Caminos que conectan el hub con cada puerta de reino. Funcionan como buffer visual/tematico. |
| **Bosque Eterno** | 64 pantallas (8x8) | No todas accesibles al inicio. ~50 pantallas de contenido, ~14 de relleno/bordes. |
| **Oceano Profundo** | 64 pantallas (8x8) | Estructura vertical (superficie a profundidad). ~52 pantallas de contenido, ~12 bordes. |
| **Cosmos Infinito** | 64 pantallas (8x8) | Estructura ascendente. ~48 pantallas accesibles (el resto es vacio estelar decorativo). |
| **Conexiones Secretas** | 12 pantallas (~3 por pasaje + Punto Ciego) | Tuneles lineales de 3-4 pantallas cada uno. |
| **TOTAL** | **~232 pantallas de contenido** | De un grid de 20x20 = 400 posiciones, solo ~232 son jugables. El resto es espacio vacio que define la forma del mapa. |

### Navegacion en el Grid

- **Scroll por pantallas**: Al estilo Zelda NES, el jugador se desplaza al borde de la pantalla y esta se desliza para revelar la siguiente.
- **Mapa del jugador**: Se desbloquea por secciones. Cada pantalla visitada se revela en el mapa. Las zonas no visitadas aparecen como niebla.
- **Marcadores**: El jugador puede colocar hasta 9 marcadores personalizados en el mapa (3 verdes, 3 azules, 3 dorados).
- **Teletransporte**: Despues de completar un reino, el jugador desbloquea un punto de teletransporte a la puerta de ese reino desde El Nexo, reduciendo backtracking.

---

## 10. Tabla de Guardianes por Zona

### Bosque Eterno (Seed) — 9 Guardianes

| ID | Nombre | Zona del Bosque | Pantalla Grid (aprox.) | Requisito de Acceso | Trade Item |
|---|---|---|---|---|---|
| seed-01 | **Brote** | Claro de Brote (pradera sur) | Fila 15, Col 6 | Ninguno (accesible desde el inicio) | Semilla del Primer Dia |
| seed-02 | **Hierba** | Pradera de Hierba (centro-sur) | Fila 16, Col 6 | Ninguno | Hoja Perenne |
| seed-03 | **Trebol** | Claro de Trebol (norte) | Fila 11, Col 4 | Haber llegado a zona norte del bosque | Hoja de Cuatro |
| seed-04 | **Girasol** | Claro de Girasol (norte) | Fila 11, Col 5 | Puzzle de espejos de luz | Petalo de Amanecer |
| seed-05 | **Espino** | Frontera de Espino (este) | Fila 12-13, Col 7-8 | Llegar al borde este | Espina Cristalina |
| seed-06 | **Hongo** | Gruta subterranea (oeste) | Fila 13, Col 1 | Acceso a zona subterranea | Espora Luminosa |
| seed-07 | **Roble** | Arboleda de Roble (centro-norte) | Fila 12, Col 3 | Puzzle de anillos del tiempo | Bellota de Sabiduria |
| seed-08 | **Bambu** | Copa del Arbol Mayor (arriba) | Fila 11, Col 5-6 | Agua del Lago de Lluvia | Flauta de Viento |
| seed-09 | **Flora** | Claro de Flora (oeste) | Fila 14, Col 2 | 6+ guardianes Seed previos | Perfume del Eden |

### Oceano Profundo (Drop) — 9 Guardianes

| ID | Nombre | Zona del Oceano | Pantalla Grid (aprox.) | Requisito de Acceso | Trade Item |
|---|---|---|---|---|---|
| drop-01 | **Gota** | Pozas de Marea (costa) | Fila 12, Col 16 | Ninguno (accesible desde el inicio) | Lagrima del Origen |
| drop-02 | **Ola** | Corrientes Frias (profundidad media) | Fila 16, Col 13-15 | Llegar a aguas profundas | Espuma Eterna |
| drop-03 | **Cristal** | Cueva de Hielo (profundidad media) | Fila 16, Col 12 | Fuente de calor suave | Copo Perpetuo |
| drop-04 | **Concha** | Faro Submarino (costa este) | Fila 13-14, Col 18 | Puzzle sonoro de campanas | Perla de Eco |
| drop-05 | **Coral** | Gran Arrecife (centro) | Fila 13-14, Col 16-17 | Recoleccion de 3 minerales | Fragmento de Ciudad |
| drop-06 | **Neon** | Canal de Neon (profundidad media) | Fila 15, Col 12-13 | Seguir a Neon en laberinto oscuro | Escama Prismatica |
| drop-07 | **Aleta** | Fosa Abisal (profundidad maxima) | Fila 17, Col 13 | Valentia ante el depredador | Diente de Marea |
| drop-08 | **Burbuja** | Gruta de Burbuja (centro-oeste) | Fila 14, Col 12 | Recuperar 3 burbujas perdidas | Burbuja de Recuerdo |
| drop-09 | **Lluvia** | Trono de Marea (fondo abisal) | Fila 18, Col 14-15 | 6+ guardianes Drop previos | Gota de Nube |

### Cosmos Infinito (Spark) — 9 Guardianes

| ID | Nombre | Zona del Cosmos | Pantalla Grid (aprox.) | Requisito de Acceso | Trade Item |
|---|---|---|---|---|---|
| spark-01 | **Chispa** | Plataforma de entrada (sur) | Fila 6, Col 10 | Ninguno (accesible desde el inicio) | Mecha Eterna |
| spark-02 | **Rayo** | Plataforma de Rayo (sur) | Fila 6, Col 11 | Puzzle de pararrayos | Fragmento de Tormenta |
| spark-03 | **Llama** | Constelacion del Guardian (centro) | Fila 3, Col 10 | Proteccion termica (Espuma Eterna o Copo Perpetuo) | Brasa Inmortal |
| spark-04 | **Estrella** | Estacion Estelar (norte) | Fila 2, Col 10-11 | Puzzle de telescopios | Carta Estelar |
| spark-05 | **Nova** | Nebulosa de Nova (norte) | Fila 2, Col 9 | Recoleccion de cristales de energia | Polvo de Supernova |
| spark-06 | **Cometa** | Ruta del Cometa (este) | Fila 3-4, Col 13-14 | Timing de salto sobre estela | Cola de Luz |
| spark-07 | **Luna** | Nube Oscura (oeste) | Fila 3, Col 8 | Fuentes de luz propias + apagar luz | Rayo de Luna |
| spark-08 | **Sol** | Trono del Sol (cima) | Fila 1, Col 10-11 | Brasa Inmortal + Mecha Eterna | Fragmento de Corona |
| spark-09 | **Planeta** | Orbita de Planeta (confin) | Fila 1, Col 8-9 | Cola de Luz (Cometa) | Anillo Orbital |

---

## Apendice A — Resumen de Interconexiones entre Guardianes

Varios guardianes tienen relaciones mecanicas con guardianes de otros reinos, creando incentivos para explorar multiples reinos en paralelo:

| Guardian de Origen | Guardian Relacionado | Conexion |
|---|---|---|
| Espino (seed-05) | Gota (drop-01) | La Grieta de Espino conecta sus zonas |
| Hongo (seed-06) | Luna (spark-07) | Ambos necesarios para el Tunel de Nube Oscura |
| Bambu (seed-08) | Lluvia (drop-09) | Bambu necesita agua del Lago de Lluvia |
| Llama (spark-03) | Ola (drop-02) / Cristal (drop-03) | Necesita proteccion termica de guardianes Drop |
| Cometa (spark-06) | Todos | Su ruta cruza los tres reinos |
| Burbuja (drop-08) | Planeta (spark-09) | La Columna Ascendente requiere la Capsula Eterea |
| Estrella (spark-04) | Hongo (seed-06) | El Mapa Celestial y la Red Micelica son los dos sistemas de pistas del juego |
| Girasol (seed-04) | Sol (spark-08) | Ambos vigias de la luz — sus trade items resuenan cuando estan juntos en el Monumento |
| Concha (drop-04) | Bambu (seed-08) | Ambos conectados al sonido — la Flauta de Viento ayuda en el puzzle de Concha |

---

## Apendice B — Principios de Diseno del Sobremundo

1. **Libertad con estructura**: El jugador puede ir a cualquier reino en cualquier orden, pero las dependencias entre guardianes crean un orden natural suave. El primer guardian de cada reino (Brote, Gota, Chispa) es siempre accesible sin requisitos.

2. **Verticalidad tematica**: Cada reino tiene una progresion vertical tematica. El Bosque va de la superficie a las raices y luego a las copas. El Oceano va de la costa a las profundidades. El Cosmos va del suelo al cielo estrellado. El jugador siempre siente que esta yendo "mas adentro".

3. **El Nexo como ancla emocional**: El hub central cambia con la progresion del jugador, recompensando el regreso frecuente. Nunca se siente estatico. Cada visita revela algo nuevo.

4. **Secretos recompensados**: Las conexiones secretas entre reinos no son obligatorias para completar el juego, pero ofrecen atajos valiosos, lore adicional y la Lente de El Origen. Recompensan la curiosidad y la exploracion exhaustiva.

5. **Los guardianes son personajes, no objetos**: Cada guardian tiene personalidad, historia y un defecto que lo humaniza. El jugador no los "captura" — forma un vinculo con ellos. Los desafios reflejan la personalidad de cada guardian, no son puzzles genericos.

6. **La profecia como barra de progreso viva**: El Monumento de El Origen es la barra de progreso mas elaborada del juego. Cada guardian anade algo visible y tangible. El jugador puede ver fisicamente cuanto le falta y que ha logrado.

---

*Documento de diseno v1.0 — Regenmon: El Ciclo de El Origen*
*Estructura del Sobremundo*
