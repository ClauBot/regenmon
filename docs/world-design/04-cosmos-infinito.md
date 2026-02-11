# COSMOS INFINITO -- Reino de la Chispa (Spark)

> *"La esencia de la energia y la transformacion. Su reino es el Cosmos Infinito, donde las estrellas narran historias olvidadas."*

---

## 1. VISION GENERAL DEL REINO

### Tema

El Cosmos Infinito es el tercero de los tres reinos nacidos de La Gran Fragmentacion. Mientras el Bosque Eterno representa la vida y el Oceano Profundo el flujo, el Cosmos Infinito encarna la **energia pura y la transformacion**. Es un reino suspendido en el vacio del espacio, donde plataformas de roca cosmica flotan entre nebulosas, estrellas agonizantes proyectan sombras colosales, y la gravedad es una sugerencia mas que una ley. Aqui viven los 9 guardianes Spark, cada uno custodiando un fragmento del fuego primordial que encendio el universo.

### Atmosfera

El jugador experimenta una soledad cosmica mezclada con asombro. El silencio del vacio se interrumpe con pulsos de energia, tormentas electricas lejanas y el murmullo grave de estrellas que colapsan. Hay una sensacion constante de inmensidad: el personaje es pequeno frente a la escala del cosmos. Sin embargo, cada zona tiene su propia personalidad -- desde el calor abrumador de la Corona del Sol hasta la quietud plateada del Santuario Lunar.

### Paleta de Colores (Estetica Game Boy / Retro)

La paleta base del Cosmos Infinito utiliza cuatro tonos principales que rotan segun la zona, manteniendo la restriccion Game Boy de 4 colores simultaneos por capa:

| Tono            | Codigo Hex | Uso                                        |
|-----------------|------------|--------------------------------------------|
| Negro vacio     | `#0B0B19`  | Fondo del espacio, sombras profundas       |
| Indigo cosmico  | `#2D1B69`  | Nebulosas, plataformas, estructuras        |
| Ambar estelar   | `#FFC107`  | Energia Spark, destellos, particulas       |
| Blanco estelar  | `#E8E0FF`  | Estrellas, luz, texto, detalles brillantes |

Cada zona introduce variaciones dentro de esta base:
- **Zonas de fuego** (Nucleo Estelar, Corona del Sol): el indigo se reemplaza por rojo profundo `#8B1A1A`.
- **Zonas de electricidad** (Campo de Tormentas): se usa cyan electrico `#00E5FF` en lugar de ambar.
- **Zonas de noche** (Santuario Lunar): se usa plata `#C0C0C0` en lugar de ambar.
- **Zonas de transicion** (Sendero de Cometa): el ambar muta a turquesa `#40E0D0`.

### Estado de Animo Musical

La banda sonora del Cosmos Infinito se inspira en sintetizadores retro (chiptune de 8 bits) con armonias ambientales:

- **Tema principal del reino**: Arpegio lento en sintetizador, notas graves que simulan el "zumbido" del espacio. Canal de pulso con melodia melancolica y esperanzada.
- **Zonas de combate**: Ritmo acelerado con percusion sintetica, onda de sierra agresiva.
- **Santuario Lunar**: Piano digital en tonos menores, notas largas y eco pronunciado.
- **Corona del Sol**: Tempo energico, ondas triangulares calidas, sensacion de poder imparable.
- **Campo de Tormentas**: Glitches ritmicos, ruido blanco como truenos, pulso irregular.
- **La Forja de Estrellas (dungeon)**: Bajo continuo ominoso, golpes metalicos como martillazos cosmicos, crescendo progresivo.

---

## 2. MAPA DE ZONAS

El Cosmos Infinito se divide en **9 zonas** conectadas entre si por puentes de luz, portales gravitacionales y senderos de polvo estelar. El jugador puede moverse libremente entre zonas adyacentes, pero algunas conexiones requieren objetos clave o habilidades especificas.

---

### ZONA 1: CHISPA INICIAL

**"El punto donde todo comenzo. Un destello en la oscuridad infinita."**

#### Estilo Visual
- **Tiles**: Plataformas de roca primordial oscura (`#0B0B19`) con vetas doradas pulsantes. El suelo esta agrietado y de las grietas emana luz ambar.
- **Colores dominantes**: Negro absoluto y ambar dorado. Contraste maximo. Minimalismo total.
- **Puntos de referencia**:
  - **El Punto Cero**: Un crater diminuto en el centro de la zona, rodeado por anillos concentricos de energia. Aqui se produjo la primera chispa de La Gran Fragmentacion. Emite un pulso de luz cada pocos segundos.
  - **Los Fragmentos Flotantes**: Trozos de roca primordial suspendidos en el aire, girando lentamente, formando un halo irregular sobre El Punto Cero.
  - **El Filamento**: Una estructura vertical de energia pura que se eleva desde El Punto Cero hacia el infinito. Funciona como faro visible desde todas las zonas del Cosmos.

#### Guardian Residente
**Chispa** (spark-01) -- El primer destello de energia nacido de La Gran Fragmentacion. Se encuentra cerca de El Punto Cero, parpadeando timidamente. Es el primer guardian que el jugador conoce en el Cosmos Infinito y actua como guia introductoria.

#### Enemigos y Obstaculos
- **Cenizas Errantes**: Restos apagados de energia que vagan sin rumbo. Se mueven en patrones circulares y apagan las fuentes de luz si las tocan. El jugador debe evitarlas o encenderlas con su herramienta Spark para convertirlas temporalmente en aliadas.
- **Grietas Inestables**: Secciones del suelo que se desmoronan si el jugador permanece demasiado tiempo. Parpadean en rojo antes de colapsar.
- **Eco del Vacio**: Un enemigo invisible que solo se revela cuando una fuente de luz cercana parpadea. Ataca con pulsos de oscuridad que reducen la barra de energia.

#### Objetos Clave y Coleccionables
- **Mecha Eterna** (trade de Chispa): Un filamento que arde sin consumirse. Se obtiene al completar la mision de reiluminar las 5 antorchas primordiales dispersas por la zona.
- **Fragmento de Origen (1/9)**: Pieza coleccionable oculta dentro de El Punto Cero. Se accede resolviendo un puzle de secuencia luminosa.
- **Llave de Ignicion**: Objeto necesario para abrir el portal hacia el Campo de Tormentas. Se forja combinando tres brasas dispersas por la zona.

#### Conexiones
- **Norte** -> Campo de Tormentas (a traves del Portal Electrico, requiere Llave de Ignicion).
- **Este** -> Observatorio Celeste (a traves del Puente de Polvo Estelar, siempre accesible).
- **Sur** -> Sendero de Cometa (a traves de la Estela de Cometa, siempre accesible).

#### Mecanicas Espaciales
- **Gravedad Reducida**: Toda la zona tiene gravedad al 50%. Los saltos son mas largos y lentos, los objetos flotan ligeramente. El jugador debe acostumbrarse a la inercia.
- **Mecanica de Luz/Oscuridad**: La zona esta mayormente a oscuras. Solo las grietas, El Punto Cero y las antorchas encendidas proporcionan vision. El jugador debe gestionar su "radio de luz" encendiendo antorchas y evitando que las Cenizas Errantes las apaguen.

---

### ZONA 2: CAMPO DE TORMENTAS

**"El cielo ruge sin nubes. La electricidad es el unico idioma que se habla aqui."**

#### Estilo Visual
- **Tiles**: Plataformas metalicas oxidadas flotando en un vacio tormentoso. El fondo muestra nubes de plasma en constante movimiento, iluminadas por relampagos.
- **Colores dominantes**: Negro profundo, cyan electrico (`#00E5FF`), blanco cegador en los relampagos, y gris metalico (`#8A8A8A`) para las plataformas.
- **Puntos de referencia**:
  - **El Ojo de la Tormenta**: Un area circular en calma en el centro de la zona, rodeada por un muro de relampagos. Aqui Rayo descansa entre descargas.
  - **Las Torres Conductoras**: Seis pilares metalicos que atraen los rayos. Si el jugador activa las seis en secuencia correcta, se abre un camino hacia una camara secreta.
  - **El Arco Voltaico**: Un puente de electricidad pura que conecta las plataformas superiores e inferiores. Aparece y desaparece al ritmo de los truenos.

#### Guardian Residente
**Rayo** (spark-02) -- Velocidad pura, pensamiento convertido en accion instantanea. Se mueve erraticamente por toda la zona, apareciendo y desapareciendo. El jugador debe "interceptarlo" en el Ojo de la Tormenta cuando se detiene brevemente entre descargas.

#### Enemigos y Obstaculos
- **Esfera de Plasma**: Bolas de electricidad que rebotan entre las Torres Conductoras en trayectorias predecibles. Causan dano por contacto y electrifican las plataformas metalicas temporalmente.
- **Relampago Dirigido**: Cada pocos segundos, un rayo cae sobre una plataforma aleatoria. Una sombra en el suelo advierte al jugador 1 segundo antes del impacto.
- **Parasitos Estaticos**: Criaturitas que se adhieren al jugador y drenan su energia lentamente. Se eliminan sacudiendose (boton de accion rapida) o pasando por una zona de descarga.
- **Plataformas Conductoras**: Algunas plataformas se electrifican en ciclos. El jugador debe memorizar los patrones para cruzar sin dano.

#### Objetos Clave y Coleccionables
- **Fragmento de Tormenta** (trade de Rayo): Cristal cargado que chisporrotea. Se obtiene al derrotar a la Esfera de Plasma Alfa, un miniboss que patrulla la zona superior.
- **Fragmento de Origen (2/9)**: Oculto dentro de la Torre Conductora central. Requiere activar las seis torres en un orden especifico.
- **Bobina de Tesla**: Objeto que permite al jugador absorber una descarga electrica y redirigirla. Esencial para resolver puzles de circuitos en esta zona y en La Forja de Estrellas.

#### Conexiones
- **Sur** -> Chispa Inicial (portal de retorno, siempre accesible tras la primera visita).
- **Este** -> Nucleo Estelar (a traves del Conducto de Plasma; requiere la Bobina de Tesla para desviar la barrera electrica).
- **Oeste** -> Nebulosa Nova (a traves de la Brecha Tormentosa; se abre tras derrotar al miniboss Esfera de Plasma Alfa).

#### Mecanicas Espaciales
- **Campos Electromagneticos**: Ciertas areas tienen campos que atraen o repelen al jugador si lleva objetos metalicos. Puede usarse estrategicamente para alcanzar plataformas distantes.
- **Cadenas de Electricidad**: El jugador puede crear circuitos entre Torres Conductoras usando la Bobina de Tesla. Completar un circuito activa mecanismos, abre puertas o desactiva barreras.
- **Gravedad Invertida Temporal**: Cuando cae un relampago sobre una plataforma especial marcada con un simbolo, la gravedad se invierte durante 3 segundos en esa area, lanzando al jugador hacia "arriba".

---

### ZONA 3: NUCLEO ESTELAR

**"El corazon de una estrella moribunda. Aqui el calor forja destinos y derrite dudas."**

#### Estilo Visual
- **Tiles**: Superficies de plasma solidificado en tonos rojos y naranjas. El suelo parece latir como un corazon. Las paredes son capas de gas comprimido que ondean lentamente.
- **Colores dominantes**: Rojo profundo (`#8B1A1A`), naranja incandescente (`#FF6B35`), ambar (`#FFC107`) y negro carbonizado.
- **Puntos de referencia**:
  - **La Camara de Fusion**: El centro exacto de la estrella, donde la presion es tan intensa que la realidad se distorsiona. El aire vibra visualmente (efecto de ondas de calor en pixeles).
  - **Los Anillos de Conveccion**: Corrientes circulares de plasma que giran alrededor de la Camara. Funcionan como plataformas moviles.
  - **El Muro de Cenizas**: Una barrera de materia quemada que separa el nucleo externo del interno. Debe derretirse con fuego suficientemente caliente.

#### Guardian Residente
**Llama** (spark-03) -- La voluntad de seguir ardiendo cuando todo parece apagarse. Habita en la Camara de Fusion, rodeada de un perimetro de calor letal. El jugador necesita un objeto especial (el Escudo Termico, obtenido de Sol) para acercarse sin dano.

#### Enemigos y Obstaculos
- **Gusanos de Lava**: Criaturas serpentinas que emergen del plasma. Se mueven en linea recta y dejan un rastro de fuego temporal. Se derrotan golpeandolos cuando levantan la cabeza antes de sumergirse.
- **Erupciones Solares**: Geiseres de plasma que erupcionan del suelo en intervalos regulares. Indicados por burbujas en la superficie 2 segundos antes.
- **Escoria Viviente**: Aglomeraciones de ceniza y roca fundida que ruedan hacia el jugador. Son lentas pero resistentes; requieren multiples golpes o empujarlas hacia las corrientes de conveccion.
- **Olas de Calor**: Zonas donde la temperatura aumenta progresivamente. Un indicador visual (el borde de la pantalla se enrojece) avisa al jugador antes de recibir dano.

#### Objetos Clave y Coleccionables
- **Brasa Inmortal** (trade de Llama): Una brasa que calienta sin quemar. Se obtiene al sobrevivir al Desafio de Resistencia de la Camara de Fusion (oleadas de enemigos con dificultad creciente).
- **Fragmento de Origen (3/9)**: Enterrado bajo la primera capa del nucleo. Se revela al completar el puzle de los Anillos de Conveccion (alinear los tres anillos en la posicion correcta simultaneamente).
- **Corazon de Hierro Estelar**: Material ultra-resistente necesario para forjar la Llave de la Forja de Estrellas.

#### Conexiones
- **Oeste** -> Campo de Tormentas (retorno por el Conducto de Plasma).
- **Sur** -> Corona del Sol (a traves de la Arteria Solar, un tunel de plasma que conecta ambos nucleos; siempre accesible).
- **Este** -> La Forja de Estrellas (entrada principal del dungeon; requiere la Llave de la Forja, forjada con el Corazon de Hierro Estelar y la Bobina de Tesla).

#### Mecanicas Espaciales
- **Presion Gravitacional Extrema**: La gravedad aqui es el 200% de lo normal. El jugador se mueve mas lento, los saltos son cortos y pesados. Los enemigos tambien se ven afectados.
- **Conveccion como Transporte**: Las corrientes de plasma funcionan como "cintas transportadoras" naturales. El jugador puede subirse a un Anillo de Conveccion para viajar entre areas de la zona.
- **Mecanica de Temperatura**: El jugador tiene un medidor de calor. Permanecer demasiado tiempo en zonas rojas lo aumenta. Las "bolsas de frio" (areas azules raras donde una brisa cosmica penetra) lo reducen. Si el medidor se llena, el jugador pierde un corazon de vida.

---

### ZONA 4: OBSERVATORIO CELESTE

**"Desde aqui se ve todo. Cada estrella tiene nombre, cada constelacion una historia."**

#### Estilo Visual
- **Tiles**: Suelos de cristal oscuro que reflejan las estrellas. Las estructuras son instrumentos astronomicos gigantes -- telescopios, astrolabios, esferas armilares -- todos hechos de un metal azulado que brilla tenuemente.
- **Colores dominantes**: Indigo profundo (`#2D1B69`), azul medianoche (`#191970`), ambar para los instrumentos (`#FFC107`) y blanco estelar para las proyecciones.
- **Puntos de referencia**:
  - **La Gran Lente**: Un telescopio colosal que apunta hacia el vacio. Al mirarlo, el jugador puede ver zonas distantes del Cosmos (funcion de mapa/zoom).
  - **El Planetario**: Una habitacion esferica donde las estrellas se proyectan en todas las superficies. Aqui Estrella mantiene su Mapa Celestial actualizado.
  - **La Biblioteca de Constelaciones**: Estanterias de cristal que contienen "libros" de luz -- constelaciones registradas como recuerdos holograficos.

#### Guardian Residente
**Estrella** (spark-04) -- La cartografa del Cosmos Infinito. Esta anclada permanentemente en el centro del Planetario, girando lentamente. No puede moverse, pero sus proyecciones holograficas pueden guiar al jugador a traves de todo el reino. Es una NPC crucial que otorga pistas sobre ubicaciones secretas y conexiones entre zonas.

#### Enemigos y Obstaculos
- **Distorsiones Opticas**: Zonas donde la luz se curva y el espacio parece doblarse. Los caminos no son lo que parecen; las puertas visibles son ilusiones y las paredes pueden ser puertas reales. Solo la luz de Estrella revela la verdad.
- **Constelaciones Corruptas**: Figuras de luz que se han desconfigurado y ahora patrullan la Biblioteca como centinelas hostiles. Se mueven en los patrones de las constelaciones que representan (zig-zag, circulo, cruz).
- **El Velo de Parallax**: Una niebla cosmica que cubre ciertas areas. Dentro del velo, los enemigos son invisibles pero sus sombras se proyectan en el suelo.
- **Puzles de Espejos**: Redirigir haces de luz estelar mediante espejos angulares para iluminar mecanismos, abrir puertas y revelar caminos ocultos.

#### Objetos Clave y Coleccionables
- **Carta Estelar** (trade de Estrella): Fragmento de mapa celestial que siempre apunta al destino deseado. Se obtiene al completar el puzle de las 7 Constelaciones Perdidas (encontrar y restaurar las constelaciones corruptas a su forma original).
- **Fragmento de Origen (4/9)**: Oculto en el punto focal de La Gran Lente. Solo visible cuando la lente apunta a las coordenadas correctas (pista dada por Estrella tras completar su mision).
- **Lente de Verdad**: Objeto equipable que permite ver a traves de ilusiones opticas en todas las zonas del Cosmos.

#### Conexiones
- **Oeste** -> Chispa Inicial (Puente de Polvo Estelar, siempre accesible).
- **Norte** -> Nebulosa Nova (a traves del Arco de Constelaciones; requiere restaurar al menos 3 constelaciones corruptas).
- **Sur** -> Santuario Lunar (a traves del Pasaje Crepuscular; se abre automaticamente al caer la "noche cosmica" -- un ciclo dia/noche especifico de esta zona).

#### Mecanicas Espaciales
- **Gravedad Normal**: Esta zona tiene la gravedad mas estable del Cosmos. Es un refugio seguro donde el jugador puede orientarse.
- **Vision Astral**: Al usar La Gran Lente, el jugador entra en un modo de vision cenital donde puede explorar el mapa completo del Cosmos Infinito, marcando puntos de interes. No puede interactuar con nada en este modo, solo observar.
- **Ciclo Dia/Noche Cosmico**: El Observatorio tiene un ciclo de "luz estelar" y "sombra cosmica" que alterna cada 3 minutos de juego. Algunos caminos y enemigos solo existen en uno de los dos estados.

---

### ZONA 5: NEBULOSA NOVA

**"Los restos de lo que fue. En cada particula de polvo habita la promesa de lo que sera."**

#### Estilo Visual
- **Tiles**: No hay suelo solido convencional. Las plataformas son nubes densas de gas y polvo estelar de colores vibrantes. El fondo es una explosion congelada en el tiempo -- filamentos de gas en expansion.
- **Colores dominantes**: Magenta cosmico (`#FF00FF`), violeta profundo (`#4B0082`), dorado estelar (`#FFC107`) y rosa palido (`#FFB6C1`) para el polvo.
- **Puntos de referencia**:
  - **El Epicentro**: El punto exacto donde la supernova exploto. Un area de caos puro donde la gravedad, la luz y el tiempo fluctuan aleatoriamente. Fragmentos de la estrella original flotan aqui.
  - **Los Filamentos**: Estructuras enormes de gas que se extienden como dedos a traves de la zona. Son "caminos" naturales para moverse entre areas.
  - **El Capullo de Materia**: Una esfera densa de material nuevo que se esta formando en un rincon de la nebulosa. Dentro, algo nuevo esta naciendo.

#### Guardian Residente
**Nova** (spark-05) -- Nacida de la explosion de una supernova, lleva dentro la fuerza de mil soles. El jugador la encuentra en estado de recuperacion tras su ultimo estallido. Esta rodeada por un campo de polvo brillante y habla con voz debil pero determinada. Su mision para el jugador: reunir 5 Fragmentos de Supernova dispersos por la zona para ayudarla a recuperar su energia.

#### Enemigos y Obstaculos
- **Remanentes Estelares**: Nucleos densos de la estrella destruida que orbitan erraticamente. Son extremadamente duros y solo pueden destruirse con ataques de area (usando el Polvo de Supernova como bomba temporal).
- **Ondas de Choque**: Expansiones de energia que barren secciones de la zona periodicamente. El jugador debe protegerse detras de los Filamentos o en "bolsillos" de gas denso.
- **Nubes Toxicas**: Areas de gas ionizado que causan dano continuo. Se disipan temporalmente al lanzar una carga de energia.
- **Inestabilidad de Plataformas**: Las nubes-plataforma se disuelven y reforman. Algunas desaparecen por 2 segundos antes de reaparecer. El jugador debe cronometrar sus saltos.

#### Objetos Clave y Coleccionables
- **Polvo de Supernova** (trade de Nova): Polvo brillante que transforma materiales ordinarios en elementos raros. Se obtiene al completar la mision de recuperacion de los 5 Fragmentos.
- **Fragmento de Origen (5/9)**: Dentro del Capullo de Materia. El jugador debe penetrar sus capas resolviendo un puzle de secuencia (desactivar las tres capas de gas comprimido en orden correcto).
- **Catalizador Nova**: Objeto que amplifica los ataques del jugador temporalmente, duplicando el dano durante 10 segundos. Uso limitado (3 cargas recargables en el Epicentro).

#### Conexiones
- **Este** -> Campo de Tormentas (a traves de la Brecha Tormentosa, siempre accesible tras la primera apertura).
- **Sur** -> Observatorio Celeste (Arco de Constelaciones, siempre accesible tras la primera apertura).
- **Oeste** -> Sendero de Cometa (a traves de la Cola de la Nebulosa; un filamento de gas que se extiende hacia el oeste).
- **Norte** -> Corona del Sol (a traves del Puente de Fusion; requiere el Catalizador Nova para sobrevivir la transicion entre zonas).

#### Mecanicas Espaciales
- **Gravedad Cero**: Esta es la unica zona del Cosmos con gravedad cero verdadera. El jugador flota y se impulsa en la direccion que elija. El movimiento es libre en todas las direcciones (estilo top-down puro, sin restriccion de "suelo"). Requiere dominar un control diferente al del resto del juego.
- **Expansion Cosmica**: La zona se "expande" lentamente durante la visita del jugador. Las plataformas se alejan entre si con el tiempo. Si el jugador tarda demasiado, las distancias se vuelven dificiles de cruzar. Regresar al Epicentro "reinicia" la expansion.
- **Transmutacion**: En esta zona, el jugador puede combinar objetos con Polvo de Supernova en el Capullo de Materia para crear versiones mejoradas de sus herramientas.

---

### ZONA 6: SENDERO DE COMETA

**"Un camino de luz que no conoce final. Quien lo recorre toca los tres mundos."**

#### Estilo Visual
- **Tiles**: Un camino luminoso de polvo estelar compactado que serpentea a traves del vacio. Los bordes del sendero brillan con un resplandor turquesa. A ambos lados, la oscuridad del espacio, pero con vistazos ocasionales a los otros reinos (sombras del Bosque Eterno, reflejos del Oceano Profundo).
- **Colores dominantes**: Turquesa (`#40E0D0`), indigo (`#2D1B69`), blanco brillante y destellos multicolor donde el sendero cruza las "fronteras" entre reinos.
- **Puntos de referencia**:
  - **La Bifurcacion Triple**: El punto donde el sendero se divide en tres ramas que apuntan hacia los tres reinos. Tres portales (verde para Bosque Eterno, azul para Oceano Profundo, dorado para Cosmos Infinito) parpadean en la distancia.
  - **Los Ecos del Viajero**: Fragmentos holograficos de Cometa que repiten sus movimientos pasados. Siguiendolos, se descubren atajos y secretos.
  - **El Reloj de Arena Cosmico**: Una estructura en forma de reloj que marca cuanto tiempo puede Cometa permanecer en un lugar antes de desvanecerse. Funciona como temporizador de zona.

#### Guardian Residente
**Cometa** (spark-06) -- El mensajero que conecta los mundos separados. Nunca esta quieto; el jugador debe seguir su estela para alcanzarlo. La interaccion con Cometa es una persecucion a traves del sendero. Una vez alcanzado, ofrece informacion sobre los otros reinos y puede transportar al jugador a la entrada del Bosque Eterno o del Oceano Profundo (acceso a los otros dos reinos del juego).

#### Enemigos y Obstaculos
- **Parasitos de Estela**: Criaturas que se alimentan de la luz del sendero, dejando tramos oscuros donde el jugador puede caer al vacio. Aparecen como manchas negras que avanzan por el camino.
- **Fragmentos de Deriva**: Rocas espaciales que cruzan el sendero perpendicularmente. El jugador debe esquivarlas o destruirlas. Vienen en oleadas con patron ritmico.
- **Espejismo Dimensional**: En los puntos donde el sendero cruza las fronteras entre reinos, aparecen "fantasmas" de criaturas de otros mundos (sombras de Seed y Drop) que confunden y atacan.
- **El Vacio Consumidor**: Si el jugador se sale del sendero, cae lentamente al vacio. Tiene 3 segundos para regresar al camino antes de perder un corazon y reaparecer en el ultimo punto seguro.

#### Objetos Clave y Coleccionables
- **Cola de Luz** (trade de Cometa): Mechon de luz solidificada que guarda memoria de lugares visitados. Se obtiene al completar la Carrera de Cometa (seguir su estela sin perderlo de vista durante todo el sendero).
- **Fragmento de Origen (6/9)**: En la Bifurcacion Triple, oculto en el intersticio entre los tres portales. Solo accesible cuando los tres portales estan activos simultaneamente (requiere haber visitado al menos una zona de cada reino).
- **Pasaporte Interdimensional**: Objeto que permite viajar instantaneamente entre los tres reinos desde cualquier punto de guardado del Cosmos Infinito.

#### Conexiones
- **Norte** -> Chispa Inicial (a traves de la Estela de Cometa, siempre accesible).
- **Este** -> Nebulosa Nova (Cola de la Nebulosa, siempre accesible tras primera apertura).
- **Sur** -> Santuario Lunar (a traves del Arco Crepuscular; la estela de Cometa ilumina un camino hacia la noche).
- **Oeste** -> Orbita Final (a traves del Ultimo Sendero; requiere la Cola de Luz para mantener el camino iluminado en la oscuridad total del borde del cosmos).
- **Portales Interdimensionales** -> Bosque Eterno y Oceano Profundo (requieren el Pasaporte Interdimensional).

#### Mecanicas Espaciales
- **Velocidad de Crucero**: El sendero otorga un bonus de velocidad al jugador. Mientras camina sobre la estela luminosa, se mueve un 50% mas rapido. Fuera de ella, la velocidad cae drasticamente.
- **Inercia Cosmica**: En esta zona, al correr, el jugador mantiene la velocidad aunque deje de presionar la direccion. Debe "frenar" activamente o chocara con obstaculos. Simula el movimiento sin friccion del espacio.
- **Eco Temporal**: Los Ecos del Viajero repiten rutas que Cometa ha tomado en el pasado. Si el jugador "sincroniza" su movimiento con un eco (caminando exactamente sobre el), desbloquea atajos y areas secretas.

---

### ZONA 7: SANTUARIO LUNAR

**"La noche tiene su propio reino. Aqui las sombras protegen y la plata cura."**

#### Estilo Visual
- **Tiles**: Suelo de roca gris palida con textura de crater. Todo esta banado en luz plateada. Las sombras son prominentes y definidas, con bordes nítidos (estetica de alto contraste).
- **Colores dominantes**: Plata (`#C0C0C0`), negro profundo (`#0B0B19`), azul noche (`#1C1C3A`) y blanco lunar para los detalles brillantes.
- **Puntos de referencia**:
  - **El Trono de Plata**: Una formacion natural de cristal lunar donde Luna descansa. Irradia un aura plateada que cura lentamente al jugador dentro de su radio.
  - **El Mar de la Tranquilidad**: Una llanura oscura sin rasgos, imposiblemente plana, que refleja las estrellas como un espejo. Cruzarlo es desorientador porque no hay puntos de referencia.
  - **Las Columnas de Sombra**: Pilares de oscuridad solida (no ausencia de luz, sino sombra materializada) que funcionan como laberinto. Solo se pueden atravesar con luz plateada.

#### Guardian Residente
**Luna** (spark-07) -- La guardiana de la noche y los secretos. Sentada en el Trono de Plata, es serena y misteriosa. Solo se comunica durante la "noche cosmica" del ciclo dia/noche de la zona. Durante el "dia", se vuelve translucida e inaccesible. Sus misiones involucran descifrar secretos ocultos en las sombras y proteger suenos materializados.

#### Enemigos y Obstaculos
- **Pesadillas Materializadas**: Sombras con forma de criaturas que emergen del Mar de la Tranquilidad. Cada una adopta la forma de algo que el jugador ha enfrentado antes (recreaciones de enemigos previos en version sombra).
- **Eclipses Locales**: Areas donde la luz lunar se bloquea completamente, creando zonas de oscuridad total. Dentro, el jugador no puede ver nada y se guia solo por sonido (indicadores de proximidad de enemigos mediante vibracion visual del borde de pantalla).
- **Fases Lunares**: La zona cambia segun la "fase" de Luna (llena, menguante, nueva, creciente). Cada fase modifica el mapa: caminos que existen en luna llena desaparecen en luna nueva, y viceversa.
- **Espejos de Sombra**: Superficies que reflejan al jugador como una version invertida que se mueve en direccion opuesta. Si la sombra-reflejo toca al jugador, lo dano.

#### Objetos Clave y Coleccionables
- **Rayo de Luna** (trade de Luna): Haz de luz plateada que revela la verdad oculta. Se obtiene al completar el Desafio de las Cuatro Fases (resolver un puzle diferente en cada fase lunar).
- **Fragmento de Origen (7/9)**: En el centro exacto del Mar de la Tranquilidad. Solo visible durante la fase de luna nueva, cuando la oscuridad total permite ver el debil brillo dorado del fragmento.
- **Velo de Penumbra**: Objeto equipable que permite al jugador volverse invisible durante 5 segundos. Recarga lenta (30 segundos). Util en esta zona y en el dungeon final.

#### Conexiones
- **Norte** -> Observatorio Celeste (Pasaje Crepuscular, accesible durante la noche cosmica).
- **Noroeste** -> Sendero de Cometa (Arco Crepuscular, siempre accesible).
- **Este** -> Corona del Sol (a traves del Horizonte de Eventos; un limite dramatico donde la noche se encuentra con el dia. Requiere el Rayo de Luna para protegerse del resplandor solar al cruzar).
- **Sur** -> Orbita Final (a traves del Pasaje de Sombras; un tunel de oscuridad total que solo Luna puede revelar).

#### Mecanicas Espaciales
- **Gravedad Lunar**: Gravedad al 30%. Los saltos son muy altos y flotantes. Caer toma mucho tiempo, lo que da oportunidades de maniobrar en el aire.
- **Mecanica de Luz/Sombra Avanzada**: Las sombras en esta zona son solidas y pueden usarse como plataformas. Si un objeto proyecta una sombra, esa sombra puede pisarse. El jugador puede crear sombras moviendo objetos frente a fuentes de luz lunar, creando puentes y escaleras de sombra.
- **Suenos Tangibles**: En ciertas areas, el jugador puede "sonar" (activar un estado de meditacion) para ver una capa alternativa de la realidad donde caminos ocultos y NPC fantasmales revelan secretos de la lore.

---

### ZONA 8: CORONA DEL SOL

**"El poder absoluto. La luz que lo alimenta todo puede tambien destruirlo todo."**

#### Estilo Visual
- **Tiles**: Superficies de plasma cristalizado en tonos blancos y dorados cegadores. Protuberancias solares (arcos de fuego) se elevan y caen en el fondo. Particulas de energia flotan constantemente.
- **Colores dominantes**: Blanco cegador (`#FFFDE7`), dorado intenso (`#FFD700`), rojo solar (`#FF4500`) y naranja profundo. El negro solo aparece en las manchas solares.
- **Puntos de referencia**:
  - **El Trono Solar**: Una plataforma elevada en el centro de la zona donde Sol irradia su energia. Es demasiado brillante para mirar directamente (el sprite del jugador parpadea si se acerca demasiado sin proteccion).
  - **Las Protuberancias**: Arcos de plasma que se elevan desde la superficie. Algunos son estables y funcionan como puentes; otros son erraticos y peligrosos.
  - **Las Manchas Solares**: Areas oscuras en la superficie solar que funcionan como refugios del calor extremo. Son frias comparadas con el entorno y contienen secretos.

#### Guardian Residente
**Sol** (spark-08) -- La fuente de energia del Cosmos Infinito y el guardian mas poderoso de los Spark. Es imponente y benevolente, pero su poder descontrolado es peligroso. El jugador debe obtener el Escudo Termico (recompensa de Sol por completar su mision) para poder visitar a Llama en el Nucleo Estelar y resistir la Forja de Estrellas. La mision de Sol consiste en estabilizar tres Protuberancias inestables que amenazan con destruir zonas cercanas.

#### Enemigos y Obstaculos
- **Prominencias Serpentinas**: Tentaculos de plasma que emergen del suelo y barren areas amplias. Se mueven en arcos predecibles pero rapidos.
- **Fotones Hostiles**: Particulas de luz concentrada que se mueven en linea recta a gran velocidad. Son pequenas y dificiles de esquivar, pero fragiles (un golpe las destruye).
- **Viento Solar**: Rachas de particulas cargadas que empujan al jugador hacia atras. Aparecen periodicamente y el jugador debe resguardarse detras de estructuras solidas o en Manchas Solares.
- **Sobrecarga Luminica**: Si el jugador permanece demasiado tiempo en areas de maxima luminosidad, la pantalla se "satura" de blanco y la vision se reduce. Debe buscar Manchas Solares para "reajustar la vista".

#### Objetos Clave y Coleccionables
- **Fragmento de Corona** (trade de Sol): Trozo de plasma solidificado que irradia calor perpetuamente. Se obtiene al estabilizar las tres Protuberancias.
- **Fragmento de Origen (8/9)**: Dentro de la Mancha Solar mas profunda, protegido por un puzle de redirección de luz: el jugador debe usar espejos para canalizar la luz solar hacia un cristal que abre la camara oculta.
- **Escudo Termico**: Recompensa principal de Sol. Reduce el dano por calor en un 75% y permite acceso al Nucleo Estelar y a La Forja de Estrellas.

#### Conexiones
- **Oeste** -> Santuario Lunar (Horizonte de Eventos; requiere Rayo de Luna o Escudo Termico).
- **Norte** -> Nucleo Estelar (Arteria Solar, siempre accesible).
- **Sur** -> Nebulosa Nova (Puente de Fusion; requiere Catalizador Nova).
- **Este** -> Orbita Final (a traves de la Ultima Llamarada; un arco de plasma solidificado que se extiende hasta el borde del cosmos).

#### Mecanicas Espaciales
- **Gravedad Extrema Pulsante**: La gravedad en esta zona pulsa como un latido. Un segundo es normal, el siguiente es el doble, el siguiente es la mitad. El jugador debe sincronizar sus movimientos con el pulso para saltar y esquivar eficientemente.
- **Fotosintesis Cosmica**: Estar bajo la luz directa de Sol recarga lentamente la barra de energia del jugador. Es la unica zona donde la energia se regenera pasivamente, pero a cambio, el calor es letal sin proteccion.
- **Arcos de Protuberancia**: El jugador puede usar las Protuberancias estables como rieles, deslizandose sobre ellas para cruzar grandes distancias rapidamente. Requiere timing para saltar entre arcos conectados.

---

### ZONA 9: ORBITA FINAL

**"El borde del todo. Mas alla de aqui, solo queda lo que aun no existe."**

#### Estilo Visual
- **Tiles**: Roca cosmica oscura y desnuda. Apenas hay color. Las superficies son lisas y yermas, como un planeta sin vida. En el horizonte, la curvatura del borde del cosmos es visible -- una linea tenue donde la luz se dobla y desaparece.
- **Colores dominantes**: Gris ceniza (`#3A3A3A`), negro absoluto (`#000000`), purpura distante (`#2D1B69`) para el borde del cosmos, y un unico punto de luz ambar que es Planeta brillando solitariamente.
- **Puntos de referencia**:
  - **El Perigeo**: El punto de la orbita mas cercano al centro del Cosmos. Aqui la gravedad de Planeta es mas fuerte y los objetos orbitan a su alrededor visiblemente.
  - **El Apogeo**: El punto mas lejano. Aqui la gravedad es casi nula y el silencio es absoluto. El borde del cosmos es visible como una pared de nada.
  - **El Anillo**: Un cinturon de rocas y hielo que orbita alrededor de Planeta. Funciona como plataforma circular que el jugador puede recorrer.

#### Guardian Residente
**Planeta** (spark-09) -- El mas grande y misterioso de todos los guardianes. Orbita silenciosamente, conteniendo un mundo entero en su interior. No habla con palabras; se comunica mediante cambios en la gravedad que el jugador debe interpretar. Acercarse demasiado es peligroso por su campo gravitacional. La mision de Planeta es la mas enigmatica: el jugador debe entrar en su interior a traves de una grieta en su superficie y descubrir el ultimo Fragmento de Origen oculto en el corazon del mundo interior.

#### Enemigos y Obstaculos
- **Asteroides Orbitantes**: Rocas que giran alrededor de Planeta en orbitas elipticas. El jugador debe calcular sus trayectorias para cruzar sin ser golpeado.
- **Pozos Gravitacionales**: Areas invisibles donde la gravedad aumenta drasticamente, atrapando al jugador. Indicados por una distorsion visual sutil (las estrellas del fondo se deforman). Requieren fuerza extra para escapar.
- **El Vacio Absoluto**: Mas alla del borde de la orbita, no hay nada. Si el jugador cruza el limite, es atraido de vuelta por la gravedad de Planeta, pero pierde un corazon. La unica barrera es la nada misma.
- **Satelites Hostiles**: Fragmentos de roca que Planeta ha capturado en su orbita. Algunos tienen "vida" propia -- se mueven hacia el jugador cuando lo detectan, intentando colisionar.

#### Objetos Clave y Coleccionables
- **Anillo Orbital** (trade de Planeta): Anillo de materia cosmica que orbita alrededor de quien lo posee, protegiendolo de impactos. Se obtiene al completar la exploracion del mundo interior de Planeta.
- **Fragmento de Origen (9/9)**: El ultimo fragmento. Esta en el nucleo del mundo interior de Planeta. Al recolectar los 9 fragmentos, se desbloquea un evento especial: los 9 guardianes Spark se reunen en La Forja de Estrellas para el ritual de restauracion.
- **Brujula del Vacio**: Objeto que permite orientarse en la Orbita Final, indicando la distancia y direccion hacia Planeta en todo momento.

#### Conexiones
- **Este** -> Sendero de Cometa (Ultimo Sendero; requiere Cola de Luz).
- **Norte** -> Santuario Lunar (Pasaje de Sombras; requiere revelacion de Luna).
- **Oeste** -> Corona del Sol (Ultima Llamarada, siempre accesible).
- **Interior de Planeta** -> Mundo Interior (zona secreta accesible solo con los 8 Fragmentos de Origen previos).

#### Mecanicas Espaciales
- **Orbita Gravitacional**: La mecanica principal de esta zona. El jugador es atraido constantemente hacia Planeta. Moverse "contra" la gravedad consume energia extra. Moverse "con" la orbita es rapido y eficiente. El jugador debe planificar sus rutas orbitando, no caminando en linea recta.
- **Efecto Slingshot**: Si el jugador se acerca al Perigeo y luego se aleja en el angulo correcto, obtiene un impulso de velocidad masivo que lo lanza hacia areas lejanas (necesario para alcanzar el Apogeo).
- **Soledad Cosmica**: Esta zona tiene un efecto unico: no hay musica ambiental, solo el sonido del movimiento del jugador y, ocasionalmente, el crujido gravitacional de Planeta. Esto refuerza la sensacion de aislamiento.
- **Mundo Interior**: Al entrar en Planeta, las reglas cambian completamente. La gravedad apunta hacia afuera (el jugador camina por el interior de una esfera), el cielo es el nucleo incandescente de Planeta, y las criaturas aqui son pacificas -- un ecosistema completo que Planeta ha protegido en su aislamiento.

---

## 3. LA FORJA DE ESTRELLAS -- Dungeon Principal

### Informacion General

| Campo              | Detalle                                                        |
|--------------------|----------------------------------------------------------------|
| **Nombre**         | La Forja de Estrellas                                          |
| **Ubicacion**      | Conectada al Nucleo Estelar (este)                             |
| **Requisitos**     | Llave de la Forja (Corazon de Hierro Estelar + Bobina de Tesla)|
| **Recomendacion**  | Tener el Escudo Termico, la Lente de Verdad y el Velo de Penumbra |
| **Pisos**          | 5 pisos descendentes + Camara del Jefe                         |

### Tema y Atmosfera

La Forja de Estrellas es una estructura ancestral oculta en el intersticio entre el Nucleo Estelar y el vacio. Fue construida por una civilizacion anterior a La Gran Fragmentacion -- los Arquitectos Estelares -- que la usaban para crear estrellas nuevas. Tras la Fragmentacion, la Forja quedo abandonada y corrupta. Su maquinaria sigue funcionando autonomamente, produciendo "estrellas muertas" -- cuerpos celestes sin luz ni calor que amenazan con apagar el Cosmos Infinito.

El interior es una mezcla de fabrica cosmica y templo sagrado. Las paredes son de metal cosmico oscuro con inscripciones luminosas en un idioma olvidado. Enormes engranajes giran lentamente, cadenas de energia cuelgan del techo, y el sonido constante de martillazos resuena desde las profundidades. El calor aumenta con cada piso.

### Estructura por Pisos

#### Piso 1: La Antecamara de los Arquitectos
- **Tema**: Introduccion a la Forja. Ruinas de la civilizacion anterior.
- **Puzles**: Descifrar las inscripciones luminosas (el jugador encuentra tablillas de traduccion) para activar los elevadores.
- **Enemigos**: Automatas Estelares -- robots antiguos que aun custodian la entrada. Ataques mecanicos predecibles.
- **Mecanica Clave**: Las puertas se abren con secuencias de luz que el jugador reproduce usando la Bobina de Tesla.

#### Piso 2: La Sala de Engranajes
- **Tema**: Maquinaria activa. Todo se mueve.
- **Puzles**: Redirigir el flujo de energia rotando engranajes gigantes para alimentar mecanismos bloqueados. Los engranajes tienen tres posiciones cada uno y afectan el flujo de otros engranajes adyacentes.
- **Enemigos**: Fragmentos de Maquinaria -- trozos de engranaje que se han desprendido y vuelan como proyectiles vivientes.
- **Mecanica Clave**: El jugador debe usar plataformas moviles (engranajes horizontales) para cruzar fosos de energia incandescente.

#### Piso 3: La Camara de Compresion
- **Tema**: La presion aumenta. Las paredes se estrechan.
- **Puzles**: Salas que se comprimen con el tiempo. El jugador debe encontrar la salida o activar el mecanismo de alivio antes de ser aplastado.
- **Enemigos**: Nucleos de Presion -- esferas densas que explotan en areas comprimidas, generando ondas de choque.
- **Mecanica Clave**: Uso del Velo de Penumbra para atravesar barreras de energia densa que bloquean las salidas.

#### Piso 4: El Laboratorio de Fusiones
- **Tema**: Aqui se combinaban los elementos para crear estrellas. Ahora produce monstruos.
- **Puzles**: Combinar tres "ingredientes estelares" (hidrogeno, helio y polvo cosmico, representados por orbes de colores) en los reactores correctos para abrir la puerta al piso final. El orden importa.
- **Enemigos**: Fusiones Fallidas -- criaturas deformes nacidas de combinaciones incorrectas. Cada una tiene debilidades unicas segun los elementos que la componen.
- **Mecanica Clave**: La Lente de Verdad permite ver la composicion real de cada orbe (sus colores estan distorsionados por la energia del laboratorio).

#### Piso 5: El Corazon de la Forja
- **Tema**: El centro de produccion. Calor maximo.
- **Puzles**: Desactivar los cuatro pilares de energia que alimentan la produccion de estrellas muertas. Cada pilar requiere un metodo diferente (electricidad, frio, luz, oscuridad).
- **Enemigos**: Estrellas Muertas recien creadas -- cuerpos oscuros que absorben la luz a su alrededor, creando zonas de ceguera. El jugador debe atacarlas con energia pura.
- **Mecanica Clave**: El Escudo Termico es esencial; sin el, el calor causa dano constante.

### Jefe Final: FORJADOR OSCURO

**Nombre**: El Forjador Oscuro (Eco del Ultimo Arquitecto)

**Descripcion**: El espiritu corrompido del ultimo Arquitecto Estelar que se fusiono con la maquinaria de la Forja al intentar crear una estrella perfecta. Es un ser mitad mecanico, mitad energia oscura. Su cuerpo es un nucleo de metal cosmico rodeado por brazos articulados de engranajes, y su "rostro" es una estrella muerta que pulsa con luz negativa.

**Patron de Combate (3 fases)**:

- **Fase 1 -- El Martillo Cosmico**: El Forjador usa sus brazos mecanicos para golpear el suelo, creando ondas de choque que el jugador debe saltar. Tambien lanza estrellas muertas que absorben la luz. El jugador debe redirigir los golpes del martillo hacia los pilares debiles de la camara usando el timing correcto (esquivar al lado de un pilar para que el martillo lo golpee).

- **Fase 2 -- La Fusion Corrupta**: El Forjador abre su nucleo y comienza a aspirar toda la energia de la sala. El jugador es atraido hacia el (efecto gravitacional). Debe usar la Bobina de Tesla para crear un cortocircuito en el nucleo expuesto, lanzando descargas electricas. Durante esta fase, Fusiones Fallidas emergen como enemigos adicionales.

- **Fase 3 -- La Estrella Negra**: El Forjador crea una estrella muerta colosal sobre la camara. La gravedad se invierte y el jugador cae hacia "arriba", hacia la estrella. Debe escalar la estrella muerta (que ahora es la plataforma) mientras el Forjador ataca desde abajo con rayos de energia oscura. El jugador debe llegar al nucleo de la estrella muerta y usar el Catalizador Nova (o Polvo de Supernova) para reignitarla, convirtiendola en una estrella viva que destruye al Forjador con su luz.

**Dialogo del Forjador** (al inicio del combate):
> *"Yo construi soles cuando tu especie aun era polvo. La Forja es mia. Las estrellas son mias. Y cuando la ultima luz se apague... yo sere lo unico que quede."*

**Dialogo del Forjador** (al ser derrotado):
> *"La luz... duele. Habia olvidado... como se sentia... crear algo... vivo..."*

### Recompensa del Dungeon

Al derrotar al Forjador Oscuro, el jugador obtiene:

1. **La Llama Primordial**: Un artefacto legendario que combina las propiedades de fuego, electricidad y luz. Permite al jugador encender permanentemente cualquier fuente de luz en el Cosmos Infinito, desbloquear todas las puertas selladas del reino y causar el doble de dano a enemigos de tipo oscuridad.

2. **Acceso al Ritual de los 9**: Si el jugador ha reunido los 9 Fragmentos de Origen, la Forja ahora purificada se convierte en el lugar donde los 9 guardianes Spark se reunen. Se activa una cinemática donde los guardianes combinan sus poderes para restaurar la fraccion Spark de El Origen, completando un tercio de la profecia.

3. **Mejora permanente de energia**: La barra de energia maxima del jugador aumenta en un 25%.

---

## 4. MAPA DE CONEXIONES ENTRE ZONAS

```
                         ┌─────────────────────────────┐
                         │                             │
                    ┌────┴─────┐                 ┌─────┴──────┐
                    │ NEBULOSA │                 │  CAMPO DE  │
                    │   NOVA   │◄═══Brecha══════►│ TORMENTAS  │
                    │ (Nova)   │  Tormentosa     │  (Rayo)    │
                    └┬───┬───┬─┘                 └──┬─────┬───┘
           Puente    │   │   │Cola de              │     │
          de Fusion  │   │   │la Nebulosa     Portal│     │Conducto
                     │   │   │              Electrico│     │de Plasma
                ┌────┴┐  │  ┌┴──────────┐    ┌──────┴┐  ┌┴────────┐
                │CORONA│  │  │ SENDERO   │    │CHISPA │  │ NUCLEO  │
                │ DEL  │  │  │   DE      │    │INICIAL│  │ ESTELAR │
                │ SOL  │  │  │ COMETA    │    │(Chispa│  │ (Llama) │
                │(Sol) │  │  │(Cometa)   │    │  )    │  │         │
                └┬──┬──┘  │  └┬───┬───┬──┘    └──┬───┘  └────┬────┘
                 │  │     │   │   │   │  Estela   │           │
      Arteria    │  │Arco │   │   │   │  Cometa   │  Puente   │
       Solar     │  │Cre- │   │   │   └───────────┘  Polvo    │
                 │  │pus- │   │   │                  Estelar  │
                 │  │cular│   │   │Ultimo                     │
     Horizonte   │  │     │   │   │Sendero         ┌─────────┘
    de Eventos   │  │     │   │   │           Entrada Forja
                 │  │  ┌──┴───┴┐  │                │
                 │  └─►│SANTUA-│  │         ┌──────┴───────┐
                 │     │ RIO   │  │         │  LA FORJA DE │
                 │     │LUNAR  │  │         │  ESTRELLAS   │
                 │     │(Luna) │  │         │  (Dungeon)   │
                 │     └──┬────┘  │         └──────────────┘
                 │Ultima  │Pasaje │
                 │Llama-  │de     │
                 │rada    │Sombras│
                 │     ┌──┴───┐   │
                 └────►│ORBITA│◄──┘
                       │FINAL │
                       │(Pla- │
                       │neta) │
                       └──┬───┘
                          │
                    ┌─────┴──────┐
                    │  MUNDO     │
                    │ INTERIOR   │
                    │ (Secreto)  │
                    └────────────┘


    ════  Conexion que requiere objeto/condicion
    ────  Conexion siempre accesible (tras primera apertura)
    ►◄    Direccion de acceso

    PORTALES INTERDIMENSIONALES (desde Sendero de Cometa):
    ............> Bosque Eterno (Reino Seed)
    ............> Oceano Profundo (Reino Drop)
```

### Flujo de Progresion Sugerido

```
  1. Chispa Inicial ──► Obtener Llave de Ignicion
                    │
  2. Campo de Tormentas ──► Obtener Bobina de Tesla
                        │
  3. Observatorio Celeste ──► Obtener Lente de Verdad
                          │
  4. Nebulosa Nova ──► Obtener Catalizador Nova
                   │
  5. Sendero de Cometa ──► Obtener Cola de Luz / Pasaporte
                       │
  6. Santuario Lunar ──► Obtener Velo de Penumbra / Rayo de Luna
                     │
  7. Corona del Sol ──► Obtener Escudo Termico
                    │
  8. Nucleo Estelar ──► Obtener Corazon de Hierro Estelar
                    │        + Forjar Llave de la Forja
                    │
  9. La Forja de Estrellas ──► Derrotar al Forjador Oscuro
                           │        + Obtener Llama Primordial
                           │
  10. Orbita Final ──► Explorar Mundo Interior de Planeta
                   │        + Obtener ultimo Fragmento de Origen
                   │
  11. Ritual de los 9 ──► Restaurar la fraccion Spark de El Origen
```

---

## 5. TABLA RESUMEN DE GUARDIANES Y ZONAS

| Zona                | Guardian   | ID        | Habilidad Clave       | Trade                   | Fragmento |
|---------------------|------------|-----------|----------------------|-------------------------|-----------|
| Chispa Inicial      | Chispa     | spark-01  | Ignicion Primordial  | Mecha Eterna            | 1/9       |
| Campo de Tormentas  | Rayo       | spark-02  | Descarga Absoluta    | Fragmento de Tormenta   | 2/9       |
| Nucleo Estelar      | Llama      | spark-03  | Corazon Estelar      | Brasa Inmortal          | 3/9       |
| Observatorio Celeste| Estrella   | spark-04  | Mapa Celestial       | Carta Estelar           | 4/9       |
| Nebulosa Nova       | Nova       | spark-05  | Explosion Nova       | Polvo de Supernova      | 5/9       |
| Sendero de Cometa   | Cometa     | spark-06  | Estela Dimensional   | Cola de Luz             | 6/9       |
| Santuario Lunar     | Luna       | spark-07  | Velo Lunar           | Rayo de Luna            | 7/9       |
| Corona del Sol      | Sol        | spark-08  | Corona Solar         | Fragmento de Corona     | 8/9       |
| Orbita Final        | Planeta    | spark-09  | Gravedad Soberana    | Anillo Orbital          | 9/9       |

---

## 6. NOTAS DE DISENO ADICIONALES

### Coherencia con la Lore

- La profecia establece que los 27 guardianes deben reunirse para completar El Ciclo. El Cosmos Infinito contiene 9 de esos 27. La Forja de Estrellas purificada funciona como punto de reunion Spark.
- Cometa es el unico guardian que conecta los tres reinos (Bosque Eterno, Oceano Profundo, Cosmos Infinito), reflejando su lore de "viajero entre mundos". Su zona (Sendero de Cometa) es el nexo interdimensional del juego.
- Las debilidades de cada guardian se reflejan en el diseno de sus zonas: la oscuridad de Chispa Inicial (Chispa se apaga con agua o viento), la urgencia de Sendero de Cometa (Cometa no puede quedarse quieto), la soledad de Orbita Final (Planeta no puede tener companeros cerca).
- El Forjador Oscuro representa lo que ocurre cuando la energia de transformacion (esencia Spark) se corrompe: en lugar de crear, destruye. Es una advertencia directa de por que los guardianes deben restaurar El Origen.

### Estetica Game Boy

- Todas las zonas respetan la restriccion de 4 colores simultaneos por capa de tiles, con variaciones por zona.
- Las animaciones son minimas: 2-4 frames para personajes, 2 frames para tiles animados (agua/lava/energia).
- Los efectos de luz se logran con dithering (patron de puntos alternados) en lugar de gradientes suaves.
- La camara es top-down fija con scroll en las 4 direcciones. Sin rotacion ni zoom.
- Los sprites de los guardianes son de 16x16 pixeles, los del jugador de 16x16, y los jefes de 32x32 o 48x48 (Forjador Oscuro).

### Mecanica Central del Reino: Los Fragmentos de Origen

Los 9 Fragmentos de Origen son la meta coleccionable principal del Cosmos Infinito. Cada uno esta oculto en su zona correspondiente y requiere completar un puzle o desafio especifico. Reunir los 9 desbloquea:

1. La cinematica del Ritual de los 9 en La Forja de Estrellas.
2. El acceso al Mundo Interior de Planeta (zona secreta final).
3. Un tercio de la condicion para el final verdadero del juego (se necesitan los coleccionables equivalentes de Bosque Eterno y Oceano Profundo).

### Musica y Sonido por Zona (Resumen)

| Zona                | Tempo  | Instrumento Principal | Emocion            |
|---------------------|--------|-----------------------|--------------------|
| Chispa Inicial      | Lento  | Pulso suave           | Soledad, esperanza |
| Campo de Tormentas  | Rapido | Ruido + onda sierra   | Tension, urgencia  |
| Nucleo Estelar      | Medio  | Bajo continuo         | Presion, calor     |
| Observatorio Celeste| Lento  | Arpegio triangular    | Asombro, calma     |
| Nebulosa Nova       | Medio  | Pads sinteticos       | Melancolia, belleza|
| Sendero de Cometa   | Rapido | Melodia aguda rapida  | Movimiento, alegria|
| Santuario Lunar     | Lento  | Piano digital + eco   | Misterio, paz      |
| Corona del Sol      | Rapido | Onda triangular calida| Poder, energia     |
| Orbita Final        | --     | Silencio ambiental    | Soledad, grandeza  |
| La Forja (Dungeon)  | Medio  | Golpes metalicos+bajo | Peligro, grandeza  |
