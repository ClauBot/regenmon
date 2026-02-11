# OCEANO PROFUNDO — Documento de Diseno del Reino

> *"La esencia del flujo y la adaptacion. Su reino es el Oceano Profundo, donde las corrientes conectan todos los mundos."*

---

## 1. Vision General del Reino

### Tema

El Oceano Profundo es un mundo submarino vasto e inexplorado que se extiende desde la superficie iluminada por el sol hasta las fosas abisales donde la oscuridad es absoluta. Es el reino de la esencia Gota: el flujo, la adaptacion y la conexion. Cada corriente lleva informacion, cada burbuja guarda un mensaje, cada ola recuerda el momento en que El Origen derramo su primera lagrima. Los 9 guardianes Drop protegen las aguas sagradas, cada uno custodiando una zona que refleja un aspecto diferente de la naturaleza del agua.

A diferencia del Bosque Eterno, donde la amenaza es la Marchitez (una enfermedad lenta), en el Oceano Profundo la amenaza es **La Desecacion** — una fuerza que absorbe el agua, congela las corrientes y petrifica los arrecifes. Las zonas afectadas por La Desecacion se reconocen por su color gris apagado, la ausencia de movimiento en el agua y el silencio total donde antes habia vida.

### Atmosfera

El Oceano Profundo transmite una sensacion de inmensidad liquida y misterio vertical. El jugador se mueve en un espacio tridimensional comprimido en 2D: puede nadar hacia los lados, ascender y descender. La luz cambia radicalmente segun la profundidad: las zonas superiores estan banadas por rayos de sol filtrados a traves de la superficie; las zonas intermedias tienen una penumbra azul verdosa; las zonas abisales solo se iluminan con bioluminiscencia.

El sonido es acuatico y envolvente. Todo resuena con eco, como si el mundo entero estuviera dentro de una caracola gigante. Se escucha el movimiento del agua, el canto lejano de criaturas marinas, el burbujeo constante y, en las profundidades, un silencio denso que solo rompe el latido del oceano.

Hay una tension constante entre la belleza y el peligro. El agua da vida pero tambien puede ahogar. Las corrientes llevan al jugador a lugares nuevos pero tambien pueden arrastrarlo hacia zonas hostiles. La presion aumenta con la profundidad. El oxigeno es un recurso limitado. El Oceano Profundo es generoso pero exigente.

### Paleta de Colores (Estetica Game Boy)

La paleta base del Oceano Profundo utiliza cuatro tonos principales, respetando la limitacion clasica del Game Boy pero con variaciones por zona:

- **Azul Abisal** (#0D1B3E) — Profundidades, sombras, fondos lejanos
- **Azul Oceano** (#1565C0) — Agua en movimiento, corrientes, cuerpo principal
- **Cyan Luminoso** (#00BCD4) — Bioluminiscencia, reflejos, vida marina activa
- **Blanco Espuma** (#E0F7FA) — Superficie, burbujas, destellos de luz

Cada zona tiene su propia variacion de esta paleta. Por ejemplo, la Caverna de Hielo usa tonos blancos y celestes glaciales, y el Abismo Luminoso cambia a purpuras y magentas neon contra negro absoluto.

### Ambiente Musical

La musica del Oceano Profundo es fluida, ciclica y envolvente. Cada zona tiene su propio tema, pero todos comparten un motivo melodico principal: **"El Pulso de la Marea"**, un sonido grave y ondulante que suena como el latido del oceano, subiendo y bajando como las olas.

| Zona | Estilo Musical |
|------|---------------|
| Manantial Primigenio | Arpa de agua cristalina con gotas percusivas. Melodia pura y sencilla, casi una nana. |
| Rompiente Eterna | Percusion de olas ritmicas, viento marino y cuerdas tensas. Energia constante e imparable. |
| Caverna de Hielo | Notas de cristal reverberantes, silencio entre acordes, ecos glaciales. Quietud solemne. |
| Bahia del Silencio | Eco de caracola, notas sostenidas de flauta marina. Paz profunda con melancolía sutil. |
| Ciudad Coral | Melodia alegre con ritmo de burbujas, xilofono de coral y bajo vibrante. Ciudad viva. |
| Abismo Luminoso | Sintetizadores oscuros con destellos agudos de luz. Tension exploratoria y asombro. |
| Corriente Fronteriza | Ritmo rapido de corriente, percusion urgente. Melodia tensa como una persecucion. |
| Mar de Burbujas | Notas redondas y flotantes, arpegio ascendente ciclico. Levedad y ensoniacion. |
| Cumulo Lluvioso | Gotas de lluvia como percusion, truenos lejanos, melodia que asciende al cielo. Transicion. |

---

## 2. Mapa de Zonas

El Oceano Profundo contiene 9 zonas interconectadas, organizadas en un patron vertical y horizontal que va desde el punto de origen central (donde nace el agua) hacia las fronteras del reino en todas las direcciones: la superficie, las profundidades, las costas y el cielo. El portal al Nexo (hub central entre los tres reinos) se encuentra en el Manantial Primigenio.

### Estructura General

```
                        +==========================+
                        ||  CUMULO LLUVIOSO       ||
                        ||  (Lluvia - drop-09)    ||
                        +============+=============+
                                     |
                              lluvia descendente
                                     |
+==================+    +============+=============+    +==================+
|| ROMPIENTE      ||    ||  MAR DE BURBUJAS       ||    || CORRIENTE       ||
|| ETERNA         ++====++  (Burbuja - drop-08)   ++====++ FRONTERIZA     ||
|| (Ola-drop-02)  ||    +============+=============+    || (Aleta-drop-07) ||
+==================+                 |                   +==================+
                              ascenso / descenso
                                     |
+==================+    +============+=============+    +==================+
|| BAHIA DEL      ||    ||  MANANTIAL PRIMIGENIO  ||    || CIUDAD CORAL    ||
|| SILENCIO       ++====++  (Gota - drop-01)      ++====++                ||
|| (Concha-drop04)||    || [PORTAL AL NEXO]       ||    || (Coral-drop-05) ||
+==================+    +============+=============+    +==================+
                                     |
                            descenso profundo
                                     |
                        +============+=============+
                        ||  ABISMO LUMINOSO       ||
                        ||  (Neon - drop-06)      ||
                        +============+=============+
                                     |
                           fosa submarina
                                     |
                        +============+=============+
                        ||  CAVERNA DE HIELO      ||
                        ||  (Cristal - drop-03)   ||
                        +=========================+
```

---

## 3. Mecanica Central del Reino: El Agua como Medio

Antes de describir cada zona, es necesario establecer la mecanica que diferencia al Oceano Profundo de los otros reinos: **el jugador se mueve dentro del agua**.

### Sistema de Natacion

- **Movimiento:** El jugador nada libremente en las 4 direcciones (arriba, abajo, izquierda, derecha). El movimiento es mas lento que caminar en tierra pero mas fluido. La animacion del personaje cambia: brazadas suaves con un rastro de burbujas.
- **Corrientes:** Muchas zonas tienen corrientes de agua visibles (lineas de particulas azules en movimiento). Las corrientes empujan al jugador en una direccion. Algunas son utiles (transporte rapido), otras son peligrosas (arrastran hacia enemigos o zonas de alta presion).
- **Barra de Oxigeno:** El jugador tiene una barra de oxigeno que se agota lentamente. Se recarga al encontrar burbujas de aire (dispersas por las zonas), al alcanzar bolsas de aire en cuevas submarinas, o al usar la habilidad Capsula Eterea de Burbuja. Si el oxigeno llega a cero, el jugador pierde vida gradualmente.
- **Presion:** Las zonas mas profundas tienen mayor presion. En el Abismo Luminoso y la Caverna de Hielo, la barra de oxigeno se consume al doble de velocidad. El jugador necesita el item "Escama Presurizada" (obtenido en Ciudad Coral) para resistir la presion.
- **Interaccion con el entorno:** El jugador puede empujar objetos flotantes, activar mecanismos con corrientes de agua, y usar burbujas como plataformas de ascenso.

---

## 4. Diseno Detallado por Zona

---

### 4.1 MANANTIAL PRIMIGENIO

**Guardian:** Gota (drop-01) — La primera lagrima de El Origen.

#### Estilo Visual

- **Tiles:** Roca submarina suave cubierta de algas cortas y luminosas. El agua aqui es de una claridad absoluta: se puede ver el fondo a kilómetros. Columnas de agua cristalina brotan de fisuras en el suelo, creando geiseres suaves que ascienden como cortinas transparentes.
- **Colores:** Cyan cristalino (#B2EBF2) dominante con toques de blanco puro (#FFFFFF). El azul oceano (#1565C0) solo aparece en los bordes donde el Manantial se conecta con otras zonas. Es la zona mas luminosa del reino.
- **Landmarks:**
  - **La Fuente Primordial:** Un manantial en el centro exacto de la zona donde el agua brota directamente del suelo en un chorro vertical perfecto. Es el punto de origen de toda el agua del Oceano Profundo. Gota reside aqui, flotando dentro del chorro, multiplicandose y reunificandose constantemente.
  - **El Portal al Nexo:** Un arco formado por dos columnas de agua solidificada (hielo transparente) que enmarca un vortice suave. A traves de el se puede viajar al hub central entre los tres reinos.
  - **Los Pilares de Eco:** Ocho columnas de roca pulida por el agua dispuestas en circulo alrededor de la Fuente. Cada una tiene grabada la silueta de uno de los otros 8 guardianes Drop. Cuando el jugador toca un pilar, escucha la voz lejana del guardian correspondiente.

#### Guardian Presente

- **Gota** reside permanentemente en la Fuente Primordial. Es el primer guardian que el jugador conoce en el Oceano Profundo. Pequeña, translucida y de voz suave como el murmullo del agua, Gota se presenta multiplicandose en docenas de copias identicas que rodean al jugador en un saludo circular. A pesar de su apariencia fragil, su presencia llena toda la zona de una calma profunda.

#### Enemigos y Obstaculos

- **Impurezas:** Manchas oscuras de agua contaminada que flotan como medusas amorfas. Son los enemigos basicos del Oceano Profundo: lentos, predecibles, pero numerosos. Al tocar al jugador le roban oxigeno. Se purifican con un solo golpe y dejan "Gota Pura" al ser eliminados.
- **Geiseres Inestables:** Chorros de agua que brotan del suelo a intervalos irregulares. Si el jugador es alcanzado, es lanzado hacia arriba descontroladamente. No causan dano pero pueden empujarlo hacia zonas peligrosas.
- **Remolinos Menores:** Pequenos vortices en el suelo que atrapan al jugador brevemente si pasa sobre ellos. Rotan durante 3 segundos antes de liberarlo en una direccion aleatoria.

#### Items y Coleccionables

- **Lagrima del Origen** (trade de Gota) — Una gota de agua perfecta que nunca se seca ni se contamina. Al equiparla, purifica lentamente el agua contaminada alrededor del jugador, creando un campo seguro de 2 tiles de radio.
- **Fragmentos de Corriente (x5)** — Cristales azules escondidos en la zona que, al recolectarse todos, revelan un flashback de como Gota fue la primera lagrima de El Origen al fragmentarse.
- **Corazon de Marea** — Aumenta la barra de oxigeno del jugador. Esta oculto bajo la Fuente Primordial, accesible solo despues de obtener la habilidad Eco de Marea.
- **Brujula de Corrientes** — Un item pasivo que muestra la direccion de las corrientes en el minimapa. Escondido detras del Pilar de Eco de Concha.

#### Conexiones

- **Este:** Ciudad Coral (a traves de un tunel de algas luminosas)
- **Oeste:** Bahia del Silencio (siguiendo una corriente suave y silenciosa)
- **Arriba:** Mar de Burbujas (ascendiendo por la columna de la Fuente Primordial)
- **Abajo:** Abismo Luminoso (descendiendo por una fosa oscura al norte de la zona)
- **Portal al Nexo:** En el centro de la zona

#### Puzzles y Mecanicas

- **Puzzle de la Purificacion:** Gota ensena al jugador la habilidad "Eco de Marea", que permite crear clones de agua temporales. El jugador debe posicionar 3 clones en los Pilares de Eco correctos simultaneamente para activar un mecanismo que drena el agua contaminada de una seccion bloqueada, revelando un pasaje secreto bajo la Fuente.
- **Mecanica de Multiplicacion:** Los clones de Eco de Marea replican las acciones del jugador con un delay de 1 segundo. Se pueden usar para activar multiples interruptores a la vez, distraer enemigos y alcanzar zonas que requieren presencia simultanea en varios puntos.
- **Tutorial de Natacion:** El Manantial Primigenio funciona como zona de tutorial para las mecanicas acuaticas. Gota guia al jugador a traves de ejercicios de natacion, control de corrientes y gestion de oxigeno en un entorno seguro.

---

### 4.2 ROMPIENTE ETERNA

**Guardian:** Ola (drop-02) — Pura fuerza en movimiento.

#### Estilo Visual

- **Tiles:** Rocas costeras golpeadas por el mar, pozas de marea llenas de vida, espuma perpetua que cubre las superficies. La zona esta dividida entre secciones submarinas y secciones de superficie donde las olas rompen contra acantilados. Todo se mueve: el agua sube y baja, la espuma aparece y desaparece, las algas se mecen violentamente.
- **Colores:** Azul intenso (#1565C0) y blanco espuma (#E0F7FA) en las zonas de oleaje; verde oceano (#00796B) en las pozas de marea; gris roca (#546E7A) en los acantilados. La paleta mas dinamica y contrastada del reino.
- **Landmarks:**
  - **El Rompiente:** Un acantilado masivo contra el cual las olas chocan sin cesar. Es visible desde toda la zona como una pared vertical de roca cubierta de espuma. Ola reside aqui, cabalgando las olas en un ciclo eterno de impacto y retroceso.
  - **Las Pozas de Marea:** Depresiones en la roca llenas de agua tranquila donde la vida marina se refugia del oleaje. Cada poza es un microecosistema con sus propios items y secretos.
  - **El Arco del Maremoto:** Un arco natural de roca esculpido por millones de anos de oleaje. Cuando una ola gigante pasa a traves de el, crea un sonido grave que resuena por toda la zona.

#### Guardian Presente

- **Ola** nunca se detiene. El jugador la ve constantemente pasando como una ola masiva de izquierda a derecha de la pantalla, chocando contra el Rompiente y regresando. Para hablar con ella, el jugador debe nadar a su velocidad y mantener el ritmo. Sus palabras son rapidas y entrecortadas, como si cada frase fuera una ola diferente.

#### Enemigos y Obstaculos

- **Rompientes Menores:** Olas pequenas pero violentas que barren secciones enteras de la zona horizontalmente. El jugador debe refugiarse detras de rocas o en Pozas de Marea para no ser arrastrado.
- **Erizos de Roca:** Criaturas espinosas ancladas a las superficies rocosas. Inmoviles pero letales al contacto. Bloquean caminos estrechos y el jugador debe nadar con precision para evitarlos.
- **Cangrejos de Marea:** Enemigos rapidos que se mueven lateralmente por el fondo. Atacan con pinzas cuando el jugador pasa sobre ellos. Se esconden bajo la arena entre ataques.
- **La Resaca:** Mecanica ambiental. Periodicamente, el agua se retira violentamente (como una resaca real) arrastrando al jugador hacia el mar abierto. Si no se agarra a una roca o entra en una Poza de Marea, es llevado a la seccion de aguas profundas donde los enemigos son mas fuertes.

#### Items y Coleccionables

- **Espuma Eterna** (trade de Ola) — Una espuma marina que nunca se disuelve. Al equiparla, el jugador puede amortiguar un golpe completamente cada 30 segundos (funciona como escudo automatico de un uso con recarga).
- **Conchas de Rompiente (x6)** — Conchas de colores escondidas en las Pozas de Marea. Al recolectar las 6, el Arco del Maremoto emite una resonancia que revela un pasaje submarino secreto hacia la Bahia del Silencio.
- **Alga Resistente** — Un item equipable que reduce a la mitad el efecto de las corrientes sobre el jugador. Escondida en la poza mas profunda, protegida por un cangrejo gigante.
- **Fragmento de Roca Viva** — Un trozo de acantilado que pulsa con la energia de las olas. Aumenta el dano del jugador mientras este en movimiento (cuanto mas rapido se mueve, mas dano hace).

#### Conexiones

- **Este:** Mar de Burbujas (ascendiendo por corrientes de espuma)
- **Sur (subterraneo):** Bahia del Silencio (a traves del pasaje del Arco del Maremoto, secreto)
- **Oeste:** Manantial Primigenio (indirecto, a traves del Mar de Burbujas)

#### Puzzles y Mecanicas

- **Mecanica de Maremoto Interior:** Ola otorga al jugador la habilidad "Maremoto Interior", que permite generar una ola direccional desde el cuerpo del jugador. La ola empuja enemigos, activa mecanismos de presion acuatica y limpia escombros de los caminos. La potencia depende del tiempo de carga: tocar el boton genera una ola pequena; mantenerlo 3 segundos genera una ola que barre toda la pantalla.
- **Puzzle de la Sincronizacion:** El jugador debe nadar a traves de una serie de arcos de roca mientras las olas pasan ciclicamente. Cada arco tiene un patron de oleaje diferente. La clave es memorizar los ritmos y moverse entre los intervalos de calma. Errores envian al jugador al inicio de la seccion.
- **Desafio de Velocidad:** Ola propone una carrera a traves de la zona de corrientes. El jugador debe mantener el ritmo de Ola (que nunca se detiene) mientras recoge 5 marcadores. Es el unico modo de ganarse su respeto, ya que Ola solo respeta a quienes pueden seguir su velocidad.

---

### 4.3 CAVERNA DE HIELO

**Guardian:** Cristal (drop-03) — La memoria congelada del mar.

#### Estilo Visual

- **Tiles:** Hielo transparente en todas las superficies: suelo, techo y paredes. Formaciones de cristales de hielo que refractan la poca luz existente creando arcoiris submarinos. Agua parcialmente congelada que se mueve con extrema lentitud. Estalagmitas y estalactitas de hielo azul.
- **Colores:** Blanco hielo (#E3F2FD) dominante con azul glacial (#42A5F5), azul profundo (#0D1B3E) en las sombras y destellos prismaticos multicolor donde la luz golpea los cristales. Es la zona mas fria y luminosa a la vez.
- **Landmarks:**
  - **El Palacio Cristalino:** Una formacion natural de cristales de hielo gigantes que forman una estructura parecida a un palacio con camaras, pasadizos y bovedas. Cristal reside en su camara central, inmovil, refractando la luz que entra.
  - **Los Momentos Congelados:** Secciones del hielo donde se pueden ver escenas del pasado atrapadas: peces nadando, corrientes fluyendo, incluso guardianes en poses antiguas. Son la manifestacion del poder de Cristal: momentos de tiempo congelados en hielo.
  - **La Grieta Termal:** Una fisura en el fondo de la caverna donde brota agua caliente. Es el unico punto donde el hielo no se forma y la temperatura es soportable. Funciona como punto de guardado y curacion.

#### Guardian Presente

- **Cristal** permanece inmovil en el centro del Palacio Cristalino, suspendido en una columna de hielo transparente. Es silencioso y contemplativo. Sus palabras aparecen grabadas en el hielo que lo rodea, como si el frio mismo hablara. Cada frase se forma lentamente, cristal por cristal. Es bello y fragil: una grieta recorre su costado, recordando que un solo golpe fuerte podria destrozarlo.

#### Enemigos y Obstaculos

- **Corrientes Glaciales:** Flujos de agua extremadamente fria que congelan temporalmente al jugador si lo tocan (queda inmovil durante 3 segundos). Se identifican por su brillo azul palido y el rastro de cristales que dejan.
- **Peces de Hielo:** Criaturas pequenas y rapidas hechas enteramente de hielo. Atacan en cardumenes que se dispersan al golpear a uno, pero se reagrupan rapidamente. Son fragiles individualmente pero peligrosos en grupo.
- **Estalactitas Inestables:** Formaciones de hielo en el techo que caen cuando el jugador pasa debajo. Se identifican por un leve temblor antes de caer. Pueden usarse como arma si se cronometra para que caigan sobre enemigos.
- **Suelo Resbaladizo:** El hielo del suelo hace que el jugador se deslice al moverse, dificultando el control. La inercia es mayor que en cualquier otra zona. El item Alga Resistente (de Rompiente Eterna) reduce este efecto.
- **La Presion Abisal:** Al estar en las profundidades mas bajas del reino, la presion es maxima. La barra de oxigeno se consume al doble de velocidad. Sin la Escama Presurizada, esta zona es extremadamente peligrosa.

#### Items y Coleccionables

- **Copo Perpetuo** (trade de Cristal) — Un cristal de hielo que nunca se derrite y refracta la luz en arcoiris. Al equiparlo, el jugador puede congelar enemigos durante 5 segundos al golpearlos (efecto con 20 segundos de recarga).
- **Memorias Descongeladas (x5)** — Fragmentos de los Momentos Congelados que se pueden extraer del hielo con la habilidad Prisma Glacial. Cada uno contiene un flashback de la historia del Oceano Profundo:
  1. La primera lagrima de El Origen cayendo al vacio
  2. Las corrientes formandose por primera vez
  3. Coral construyendo la primera estructura submarina
  4. Aleta enfrentando a la primera amenaza externa
  5. La profecia de la Desecacion
- **Lente de Hielo** — Un cristal que permite ver a traves de paredes de hielo, revelando pasadizos y camaras ocultas. Escondido en la camara mas profunda del Palacio Cristalino.
- **Nucleo Termal** — Un item que genera calor alrededor del jugador, evitando la congelacion de las Corrientes Glaciales durante 15 segundos. Se recarga en la Grieta Termal.

#### Conexiones

- **Arriba:** Abismo Luminoso (ascendiendo por una chimenea vertical de roca)
- **Sin mas conexiones directas** — La Caverna de Hielo es el punto mas profundo del Oceano Profundo. Es deliberadamente un callejon sin salida, el extremo inferior del reino. El jugador debe regresar por donde vino, reforzando la sensacion de aislamiento y profundidad. Solo el camino ascendente hacia el Abismo lleva de vuelta.

#### Puzzles y Mecanicas

- **Mecanica de Prisma Glacial:** Cristal otorga al jugador la habilidad "Prisma Glacial", que permite congelar pequenas secciones de agua creando plataformas solidas temporales y bloques de hielo movibles. Tambien puede usarse para congelar enemigos y mecanismos de agua, deteniendo corrientes y creando represas.
- **Puzzle de la Refraccion:** El jugador debe redirigir un rayo de luz a traves de multiples cristales de hielo para iluminar una cerradura oculta en el Palacio Cristalino. Cada cristal puede rotarse para cambiar el angulo de refraccion. Es similar al puzzle de luz del Jardin Solar del Bosque Eterno pero con la complejidad anadida del medio acuatico y la fisica del hielo.
- **Puzzle del Momento Congelado:** El jugador encuentra una escena congelada donde un guardian del pasado senala una secuencia de simbolos. El jugador debe replicar esa secuencia en los cristales interactivos de la camara. Pero la escena esta parcialmente danada: algunos simbolos son ilegibles, y el jugador debe deducirlos por contexto o buscar pistas en otros Momentos Congelados.
- **Desafio de la Fragilidad:** Una seccion donde el jugador debe cruzar un puente de hielo que se agrieta con cada paso. No puede detenerse (el hielo se rompe bajo peso estatico) ni moverse demasiado rapido (la vibracion fractura el puente). Es una mecanica de velocidad constante y precision.

---

### 4.4 BAHIA DEL SILENCIO

**Guardian:** Concha (drop-04) — La guardiana de los sonidos de todas las eras.

#### Estilo Visual

- **Tiles:** Arena blanca y suave con conchas de todos los tamanos esparcidas. Agua turquesa increiblemente calma, casi sin movimiento. Formaciones de roca suave con huecos y cavidades que amplifican los sonidos. Algas largas y ondulantes que se mecen con una lentitud hipnotica.
- **Colores:** Turquesa suave (#80DEEA) dominante con arena palida (#FFF8E1), rosa concha (#F8BBD0) y azul calma (#4FC3F7). Es la paleta mas suave y calida del reino, evocando una playa tropical sumergida.
- **Landmarks:**
  - **La Gran Caracola:** Una caracola marina del tamano de una casa, parcialmente enterrada en la arena. Su interior es un laberinto de camaras acusticas donde cada sala amplifica un sonido diferente. Concha reside en la camara central, la mas silenciosa de todas.
  - **Los Jardines de Eco:** Formaciones de coral muerto y conchas gigantes que actuan como amplificadores naturales. Cuando el jugador nada entre ellas, escucha fragmentos de conversaciones del pasado: los guardianes hablando entre si, criaturas marinas cantando, incluso el eco de La Gran Fragmentacion.
  - **La Playa Interior:** Una bolsa de aire subterranea con una playa de arena blanca iluminada por bioluminiscencia. Es el lugar mas tranquilo de todo el juego. Funciona como area de descanso donde la barra de oxigeno no se consume.

#### Guardiana Presente

- **Concha** es extremadamente timida. Al acercarse el jugador, se encierra en su caparazon y no sale durante varios segundos. El jugador debe demostrar paciencia: permanecer quieto, no hacer movimientos bruscos, y eventualmente Concha emerge lentamente. Su voz es un susurro que solo se escucha si el jugador esta completamente inmovil. Es la interaccion mas sutil y delicada de todo el juego.

#### Enemigos y Obstaculos

- **Medusas Susurrantes:** Medusas translucidas que emiten un zumbido hipnotico. Si el jugador permanece demasiado cerca durante 5 segundos, entra en un trance que lo atrae hacia la medusa (se mueve automaticamente hacia ella). Se rompe el trance recibiendo dano o usando Maremoto Interior.
- **Cangrejos Ermitanos:** Criaturas que habitan conchas vacias y se camuflan como parte del entorno. Atacan solo cuando el jugador intenta recoger la concha que habitan. Se revelan al usar Resonancia Abisal cerca de ellos (emiten una vibracion distintiva).
- **Zonas de Silencio Absoluto:** Areas donde La Desecacion ha eliminado todo sonido. En estas zonas, el jugador no puede escuchar la musica, los efectos de sonido desaparecen y, lo mas importante, no puede usar habilidades basadas en sonido. Debe purificarlas con Resonancia Abisal para restaurar el sonido.
- **Corrientes de Arena:** Flujos de arena en el fondo que entierran lentamente al jugador si se detiene demasiado tiempo. Debe mantenerse nadando o posarse sobre formaciones de roca.

#### Items y Coleccionables

- **Perla de Eco** (trade de Concha) — Una perla que reproduce el ultimo sonido que escucho. En el juego, permite al jugador grabar un sonido ambiental y reproducirlo en otro lugar. Es clave para puzzles sonoros en todo el reino.
- **Conchas Armonicas (x8)** — Conchas de diferentes tonos esparcidas por la zona. Al recolectar las 8, el jugador puede tocarlas como un instrumento, formando la melodia de "El Pulso de la Marea". Esto desbloquea una camara secreta en la Gran Caracola.
- **Perla Negra** — Un item raro escondido en el fondo de la Gran Caracola que duplica la duracion de todos los efectos sonoros del jugador. Protegida por el Cangrejo Ermitano mas grande de la zona.
- **Velo de Silencio** — Un item equipable que vuelve al jugador invisible para enemigos que detectan por sonido. Escondido en una Zona de Silencio Absoluto purificada.

#### Conexiones

- **Este:** Manantial Primigenio (siguiendo la corriente suave de vuelta)
- **Norte (secreto):** Rompiente Eterna (a traves del pasaje del Arco del Maremoto, accesible despues de recolectar las Conchas de Rompiente)
- **Sureste (profundo):** Abismo Luminoso (descendiendo por un sifon oscuro al fondo de la Gran Caracola)

#### Puzzles y Mecanicas

- **Mecanica de Resonancia Abisal:** Concha otorga al jugador la habilidad "Resonancia Abisal", que emite una onda sonora que calma enemigos en un radio de 4 tiles durante 8 segundos, revela objetos ocultos vibrando en respuesta al sonido, y purifica Zonas de Silencio Absoluto. Es la habilidad mas versatil del Oceano Profundo para exploracion.
- **Puzzle de la Melodia Perdida:** El jugador debe reconstruir una melodia antigua usando las Conchas Armonicas. La melodia esta fragmentada: el jugador escucha partes en los Jardines de Eco y debe reproducirla en orden correcto usando la Perla de Eco para recordar cada fragmento. La melodia completa abre la camara mas profunda de la Gran Caracola.
- **Puzzle de la Paciencia:** Una camara donde el jugador debe permanecer completamente inmovil durante 30 segundos reales mientras enemigos pasan a su alrededor. Cualquier movimiento reinicia el contador. Al completarlo, Concha sale de su caparazon y revela un pasaje secreto. Es un anti-puzzle que premia la calma sobre la accion.
- **Mecanica del Eco Retardado:** En ciertas camaras de la Gran Caracola, los sonidos que el jugador produce rebotan con delays. Un golpe contra una pared puede regresar como una onda sonora danina 5 segundos despues. El jugador debe tener cuidado con las acciones que realiza, ya que sus propios ecos pueden herirlo.

---

### 4.5 CIUDAD CORAL

**Guardian:** Coral (drop-05) — El arquitecto del Oceano Profundo.

#### Estilo Visual

- **Tiles:** Estructuras de coral de todos los colores y formas: puentes, torres, arcos, casas, plazas. Es una metropolis submarina con calles de arena, farolas de medusas luminosas y letreros de algas. Los edificios son organicos pero claramente disenados con proposito. La zona tiene la mayor densidad de detalle visual de todo el reino.
- **Colores:** Coral naranja (#FF7043) como color principal de las estructuras; rosa vivo (#EC407A) para los corales decorativos; verde mar (#26A69A) para la vegetacion marina; y amarillo calido (#FFD54F) para la iluminacion de las medusas-farola. La paleta mas colorida del Oceano Profundo.
- **Landmarks:**
  - **La Torre del Arquitecto:** La estructura mas alta de la ciudad, una espiral de coral que se eleva desde el fondo hasta casi la superficie. Coral reside en su cima, disenando constantemente nuevas adiciones a la ciudad. Desde arriba se ve toda Ciudad Coral en vista panoramica.
  - **El Mercado de Corrientes:** Una plaza central donde las corrientes de diferentes zonas convergen, trayendo objetos y criaturas de todo el Oceano Profundo. Es el centro economico del reino: aqui el jugador puede intercambiar items y obtener informacion de criaturas viajeras.
  - **El Arrecife Dormido:** Una seccion de la ciudad donde los corales han dejado de crecer. La Desecacion ha petrificado las estructuras, convirtiendolas en roca gris e inerte. Es una zona de alto riesgo con enemigos poderosos, pero contiene items valiosos.

#### Guardian Presente

- **Coral** es meticuloso, orgulloso de su obra y ligeramente obsesivo. Nunca deja de construir: mientras habla con el jugador, sus manos de coral siguen anadiendo detalles a las paredes de su torre. Es generoso pero exigente: ofrece su ayuda solo si el jugador demuestra que valora la estructura y la planificacion. Le pide al jugador que repare una seccion danada del Arrecife Dormido como prueba de competencia.

#### Enemigos y Obstaculos

- **Peces Loro Corrompidos:** Peces grandes que muerden las estructuras de coral, destruyendolas. Si no se les detiene, abren brechas en los edificios que liberan corrientes peligrosas. Se les aleja con Maremoto Interior o se les calma con Resonancia Abisal.
- **Morenas de las Grietas:** Depredadores que habitan en las grietas de los corales. Atacan con una mordida rapida cuando el jugador pasa cerca. Se revelan con Resonancia Abisal (vibran de forma distintiva) y se eliminan con Eco de Marea (los clones los atraen fuera de sus escondites).
- **Estructuras Colapsadas:** Secciones de la ciudad danadas por La Desecacion que bloquean caminos. Algunas pueden repararse con la habilidad de Coral; otras deben rodearse.
- **Corrientes Urbanas:** Las corrientes que fluyen por las "calles" de la ciudad. Algunas llevan al jugador rapidamente a destinos utiles; otras lo arrastran hacia callejones sin salida o zonas peligrosas. El Mercado de Corrientes tiene un mapa que indica la direccion de cada corriente.

#### Items y Coleccionables

- **Fragmento de Ciudad** (trade de Coral) — Un trozo de coral que lentamente construye pequenas estructuras a su alrededor. En el juego, permite al jugador crear un bloque de coral solido en cualquier lugar, util para bloquear corrientes, crear plataformas y sellar grietas.
- **Planos del Arquitecto (x7)** — Pergaminos de alga enrollados escondidos en la ciudad que contienen los disenos originales de Coral para cada seccion. Recolectar los 7 permite al jugador "leer" la ciudad y encontrar todos los pasajes secretos disenados intencionalmente por Coral.
- **Escama Presurizada** — Un item ESENCIAL que permite al jugador resistir la presion en las zonas abisales (Abismo Luminoso y Caverna de Hielo). Sin ella, la barra de oxigeno se consume al doble de velocidad en esas zonas. Se obtiene al completar la mision de reparacion del Arrecife Dormido.
- **Medusa-Farola** — Un item consumible que ilumina un area de 5 tiles durante 60 segundos. Se pueden comprar en el Mercado de Corrientes con Gotas Puras (la moneda del Oceano Profundo).

#### Conexiones

- **Oeste:** Manantial Primigenio (a traves del tunel de algas luminosas)
- **Norte:** Corriente Fronteriza (saliendo de la ciudad por la corriente mas rapida)
- **Abajo:** Abismo Luminoso (descendiendo por el Arrecife Dormido, donde los corales muertos dan paso a la oscuridad)

#### Puzzles y Mecanicas

- **Mecanica de Arrecife Viviente:** Coral otorga al jugador la habilidad "Arrecife Viviente", que permite construir estructuras de coral a voluntad. Bloques de coral solidos de 1 tile que se pueden apilar, usar como puentes, como represas para redirigir corrientes, y como escudos contra proyectiles. Cada bloque requiere 5 segundos para crecer y es permanente en la zona donde se construye.
- **Puzzle de la Ciudad Planificada:** Coral pide al jugador que reconstruya una seccion del Arrecife Dormido. El jugador debe colocar bloques de coral siguiendo un patron especifico indicado en los Planos del Arquitecto. Es un puzzle de construccion espacial donde cada bloque debe estar en la posicion exacta. Al completarlo, la seccion revive y revela una camara secreta.
- **Puzzle de las Corrientes Urbanas:** El jugador debe redirigir las corrientes de la ciudad construyendo represas de coral para crear un camino hasta una zona inaccesible. Cada represa cambia la direccion de una corriente, que a su vez afecta a otras corrientes aguas abajo. Es un puzzle de logica en cadena.
- **Desafio del Mercado:** En el Mercado de Corrientes, el jugador participa en un sistema de trueque donde debe intercambiar items en una cadena (dar objeto A para obtener B, dar B para obtener C, etc.) hasta conseguir un item unico. Las ofertas cambian cada vez que el jugador visita el mercado.

---

### 4.6 ABISMO LUMINOSO

**Guardian:** Neon (drop-06) — El explorador bioluminiscente de las profundidades.

#### Estilo Visual

- **Tiles:** Oscuridad absoluta como base. El fondo es negro total (#000000). La unica fuente de luz es la bioluminiscencia: criaturas, plantas y minerales que brillan en colores electricos. El jugador ve un radio limitado alrededor de si mismo (4 tiles), y el resto del mapa se revela solo con destellos momentaneos.
- **Colores:** Negro total (#0D1B3E) como base, con magenta neon (#E040FB), cyan electrico (#00E5FF), verde fosforito (#76FF03) y naranja bioluminiscente (#FF6D00) como acentos que brillan y pulsan contra la oscuridad. Es la zona mas visualmente impactante del reino.
- **Landmarks:**
  - **La Fosa de los Destellos:** Un abismo vertical que desciende desde la entrada de la zona hasta la Caverna de Hielo. Sus paredes estan salpicadas de criaturas bioluminiscentes que crean un espectaculo de luces cambiante. Neon navega esta fosa verticalmente, iluminando secciones como un faro viviente.
  - **El Bosque Abisal:** Una explanada de gusanos tubulares gigantes que brillan en rojo y blanco, creando un "bosque" subacuatico luminoso. Es la zona mas densa de vida del Abismo, y donde se concentran los items coleccionables.
  - **La Cueva de los Espejos:** Una camara con paredes de mineral reflectante donde la luz de Neon se multiplica infinitamente, creando un efecto caleidoscopico. Dentro hay un puzzle critico.

#### Guardian Presente

- **Neon** es extrovertido, incansable y brillante (literal y figurativamente). Su cuerpo cambia de color constantemente segun su estado emocional: cyan cuando esta tranquilo, magenta cuando esta emocionado, naranja cuando esta nervioso. Ilumina un radio de 6 tiles a su alrededor, convirtiendose en una luz movil que el jugador puede seguir. Es el unico guardian del Oceano Profundo que se mueve activamente con el jugador como companero temporal.

#### Enemigos y Obstaculos

- **Anglerfish Corruptos:** Depredadores con su propia luz bioluminiscente que usan para atraer al jugador. Parecen items o caminos seguros desde la distancia, pero al acercarse revelan unas fauces enormes. Se distinguen de las luces reales porque su brillo parpadea irregularmente.
- **Calamares de Tinta:** Criaturas que atacan soltando nubes de tinta oscura que anulan completamente la bioluminiscencia en un area de 8 tiles durante 10 segundos, dejando al jugador a ciegas. Se eliminan con Destello Abisal.
- **Corrientes Abisales:** Flujos de agua helada extremadamente rapidos en la oscuridad que no se ven hasta que es demasiado tarde. Solo son detectables con Resonancia Abisal (el sonido revela su posicion).
- **La Oscuridad Misma:** Sin fuente de luz, el jugador solo ve 2 tiles a su alrededor. Los enemigos pueden atacar desde la oscuridad sin previo aviso. La gestion de la luz es la mecanica de supervivencia principal del Abismo.

#### Items y Coleccionables

- **Escama Prismatica** (trade de Neon) — Una escama que cambia de color segun el animo de quien la sostiene. En el juego, emite luz permanente de 3 tiles de radio y revela enemigos ocultos en la oscuridad con un brillo de advertencia rojo.
- **Luces Abisales (x9)** — Orbes de luz escondidos en la oscuridad mas profunda. Cada uno, al recolectarse, ilumina permanentemente una seccion del mapa del Abismo. Recolectar los 9 ilumina toda la zona, eliminando la oscuridad como obstaculo permanentemente.
- **Ojo Abisal** — Un item que permite ver en la oscuridad total durante 20 segundos (todo el mapa se revela). Se recarga al estar cerca de fuentes de bioluminiscencia durante 10 segundos. Escondido en la Cueva de los Espejos.
- **Mineral Luminoso** — Un recurso recolectable (aparece en varios puntos de la zona) que se puede usar para crear puntos de luz permanentes en cualquier lugar del Abismo. El jugador puede marcar caminos seguros con el.

#### Conexiones

- **Arriba:** Manantial Primigenio (ascendiendo por la fosa norte)
- **Abajo:** Caverna de Hielo (descendiendo por la Fosa de los Destellos)
- **Oeste (profundo):** Bahia del Silencio (a traves del sifon oscuro)
- **Este (profundo):** Ciudad Coral (ascendiendo por el Arrecife Dormido)
- **Interior (secreto):** El Templo de las Mareas (entrada principal de la mazmorra, oculta en la Cueva de los Espejos)

#### Puzzles y Mecanicas

- **Mecanica de Destello Abisal:** Neon otorga al jugador la habilidad "Destello Abisal", que emite un pulso de luz potente que ilumina toda la pantalla durante 3 segundos, ciega temporalmente a todos los enemigos y revela el mapa completo en un radio de 10 tiles. Tiene un cooldown de 15 segundos. Es la herramienta principal para navegar el Abismo.
- **Puzzle de la Cueva de los Espejos:** El jugador debe guiar un rayo de luz a traves de una serie de espejos reflectantes en la oscuridad. Solo puede ver un espejo a la vez (el que esta iluminado actualmente). Debe memorizar las posiciones y angulos para redirigir la luz hasta un cristal central que, al iluminarse, revela la entrada al Templo de las Mareas.
- **Puzzle de Comunicacion Luminosa:** Neon ensena al jugador un "lenguaje de colores" bioluminiscente. En ciertas secciones, el jugador debe emitir secuencias de colores especificas (usando Destello Abisal con modificadores) para comunicarse con criaturas abisales que bloquean el paso. Cada criatura responde a un patron diferente.
- **Desafio de la Oscuridad Total:** Una seccion donde TODA la luz se apaga, incluyendo la del jugador. Debe navegar unicamente por sonido (usando Resonancia Abisal para "ver" con ondas sonoras). Los enemigos estan quietos pero letales al contacto. Es la seccion mas tensa de todo el Oceano Profundo.

---

### 4.7 CORRIENTE FRONTERIZA

**Guardian:** Aleta (drop-07) — El guardian mas temido del Oceano Profundo.

#### Estilo Visual

- **Tiles:** Agua en movimiento rapido constante. Lineas de velocidad (sprites de particulas horizontales) llenan la pantalla. El fondo cambia rapidamente, dando la sensacion de que el jugador es arrastrado. Formaciones rocosas aerodinamicas esculpidas por la corriente. Todo es horizontal y estrecho, como un tunel de agua.
- **Colores:** Azul oscuro (#1A237E) y azul velocidad (#2979FF) dominantes con blanco espuma (#E0F7FA) en las estelas y gris acero (#455A64) en las rocas. La paleta mas monocromatica del reino, reforzando la sensacion de velocidad y enfoque.
- **Landmarks:**
  - **El Canal Principal:** Una corriente de agua masiva que fluye a velocidad extrema de norte a sur, marcando la frontera del Oceano Profundo con las aguas exteriores. Aleta patrulla este canal incansablemente, ida y vuelta, como un centinela silencioso.
  - **Los Puestos de Guardia:** Formaciones de roca reforzadas con coral (construidas por Coral a pedido de Aleta) que actuan como puntos de vigilancia a lo largo de la frontera. Cada puesto tiene un telescopio de agua que permite ver a grandes distancias.
  - **La Zona de Exclusion:** El borde extremo de la Corriente Fronteriza. Mas alla, el agua se vuelve turbia y hostil: territorio no perteneciente al Oceano Profundo. Aleta impide que cualquier criatura o fuerza cruce esta linea.

#### Guardian Presente

- **Aleta** es frio, profesional y desconfiado. Se acerca al jugador sin producir ninguna vibracion en el agua: aparece de la nada, como un fantasma. Habla con frases cortas y directas. No ofrece su confianza facilmente: el jugador debe completar una mision de patrullaje con Aleta, demostrando su capacidad de sigilo y velocidad, antes de ser aceptado como aliado.

#### Enemigos y Obstaculos

- **Intrusos de Agua Turbia:** Criaturas oscuras del exterior que intentan cruzar la frontera. Son los enemigos mas agresivos del Oceano Profundo: rapidos, resistentes y con patron de ataque impredecible. Aleta los elimina con facilidad, pero si el jugador esta solo, son desafios serios.
- **Minas de Corriente:** Esferas espinosas fijadas a las rocas del canal que explotan al ser tocadas por la corriente. El jugador debe navegar entre ellas con precision milimetrica mientras la corriente lo arrastra.
- **Remolinos de Frontera:** Vortices potentes en las intersecciones de corrientes que atrapan al jugador y lo giran durante 5 segundos antes de expulsarlo en una direccion aleatoria. Son impredecibles y pueden enviar al jugador hacia la Zona de Exclusion.
- **La Corriente Misma:** El obstaculo principal es la velocidad del agua. El jugador se mueve automaticamente en la direccion de la corriente; solo puede controlar su posicion vertical y breves impulsos laterales. Es una seccion de scroll automatico horizontal.

#### Items y Coleccionables

- **Diente de Marea** (trade de Aleta) — Un diente afilado que puede cortar corrientes de agua. En el juego, permite al jugador crear "brechas" en las corrientes, deteniendo temporalmente su flujo en un punto especifico. Esencial para acceder a zonas bloqueadas por corrientes en todo el reino.
- **Insignias de Patrulla (x6)** — Marcas metalicas escondidas en los Puestos de Guardia. Recolectar las 6 otorga acceso a la Armeria de Aleta, una camara secreta con equipo de combate superior.
- **Aleta de Velocidad** — Un item equipable que duplica la velocidad de natacion del jugador. Se obtiene al completar la mision de patrullaje con Aleta.
- **Sello de Frontera** — Un item que permite al jugador sellar grietas en la frontera del Oceano Profundo. Es necesario para una mision secundaria de reparacion de la frontera que, al completarse, reduce la aparicion de Intrusos de Agua Turbia en todo el reino.

#### Conexiones

- **Sur:** Ciudad Coral (regresando por la corriente menos rapida)
- **Oeste:** Mar de Burbujas (a traves de una corriente ascendente lateral)
- **Noroeste (peligroso):** Cumulo Lluvioso (siguiendo la corriente vertical mas extrema hacia la superficie)

#### Puzzles y Mecanicas

- **Mecanica de Emboscada Silenciosa:** Aleta otorga al jugador la habilidad "Emboscada Silenciosa", que elimina toda vibracion del movimiento del jugador en el agua, haciendolo invisible para enemigos que detectan por vibracion. El jugador puede moverse sin ser detectado durante 10 segundos (cooldown de 20 segundos). Es la herramienta de sigilo del Oceano Profundo.
- **Puzzle de Patrullaje:** Aleta asigna al jugador una ruta de patrulla por el Canal Principal. Debe navegar la corriente a alta velocidad, identificar Intrusos (se distinguen por su color oscuro) y eliminarlos sin alertar a otros. Si un Intruso escapa, la mision falla y debe reiniciarse. Es un desafio de reflejos y observacion.
- **Puzzle de Corrientes Cruzadas:** El jugador debe cruzar una seccion donde multiples corrientes se cruzan en diferentes direcciones. Usando Diente de Marea, puede cortar ciertas corrientes para crear un camino seguro. Pero cortar una corriente redirige su flujo, afectando las corrientes adyacentes. Es un puzzle de logica fluida.
- **Desafio del Depredador Silencioso:** Aleta reta al jugador a alcanzarlo en una carrera por la Corriente Fronteriza. Aleta es extremadamente rapido y se vuelve invisible periodicamente. El jugador debe usar Resonancia Abisal para detectar su posicion y Emboscada Silenciosa para acercarse sin ser detectado. Es un desafio de caza que invierte la dinamica habitual: el jugador es el perseguidor.

---

### 4.8 MAR DE BURBUJAS

**Guardian:** Burbuja (drop-08) — La mensajera entre la superficie y las profundidades.

#### Estilo Visual

- **Tiles:** Agua de tonalidad clara llena de burbujas de todos los tamanos: desde microburbujas que forman cortinas plateadas hasta burbujas gigantes del tamano de habitaciones. Algunas burbujas contienen objetos, criaturas o incluso pequenos ecosistemas en su interior. El movimiento es vertical: todo asciende.
- **Colores:** Plata translucida (#CFD8DC) para las burbujas, azul cielo (#64B5F6) para el agua, blanco reflejante (#FFFFFF) para los destellos y verde agua (#80CBC4) para las algas flotantes. La paleta mas luminosa y aerea del Oceano Profundo, como si la zona estuviera a medio camino entre el mar y el cielo.
- **Landmarks:**
  - **La Columna de Burbujas:** Un chorro vertical de burbujas que asciende desde las profundidades hasta la superficie sin detenerse. Burbuja lo utiliza como via de transporte. El jugador puede entrar en una burbuja grande y ser llevado arriba o abajo.
  - **El Salon Esfera:** Una burbuja colosal, del tamano de una sala, que flota permanentemente en el centro de la zona. Su interior tiene una atmosfera respirable y gravedad propia. Es la residencia de Burbuja y funciona como punto de guardado y curacion.
  - **El Cementerio de Burbujas:** Una zona inferior donde las burbujas que no logran alcanzar la superficie se acumulan y fusionan, creando estructuras espumosas inestables. Contiene items olvidados atrapados en burbujas antiguas.

#### Guardiana Presente

- **Burbuja** es distraida, juguetona y genuinamente dulce. Flota de un lado a otro sin rumbo aparente, persiguiendo corrientes, observando criaturas y olvidando constantemente lo que estaba haciendo. Para hablar con ella, el jugador debe atrapar su atencion con algo brillante o musical (Escama Prismatica de Neon o Perla de Eco de Concha funcionan). Sus frases son interrumpidas constantemente por exclamaciones aleatorias: "Oh, mira esa corriente..." "Espera, que estaba diciendo..."

#### Enemigos y Obstaculos

- **Peces Aguja:** Peces largos y afilados que revientan burbujas al atravesarlas. Si el jugador esta dentro de una burbuja, un Pez Aguja la destruira, haciendolo caer. Se eliminan antes de que se acerquen o se esquivan saliendo de la burbuja a tiempo.
- **Burbujas Falsas:** Burbujas que parecen seguras pero contienen gas toxico. Al entrar, el jugador pierde oxigeno rapidamente. Se distinguen por un leve tono verdoso en su superficie.
- **Corrientes Ascendentes Incontrolables:** Flujos verticales que empujan al jugador hacia arriba sin parar. Si no se sujeta a algo, es lanzado hasta la superficie y de vuelta, perdiendo tiempo y orientacion.
- **Espuma Densa:** Acumulaciones de burbujas diminutas que forman masas opacas. El jugador no puede ver a traves de ellas y moverse dentro es extremadamente lento. Se disipan con Maremoto Interior.

#### Items y Coleccionables

- **Burbuja de Recuerdo** (trade de Burbuja) — Una burbuja que contiene un momento feliz y lo reproduce cuando estalla. En el juego, funciona como un "continue" extra: si el jugador muere, la burbuja estalla y lo revive con media vida en el punto donde murio, en vez de regresar al ultimo punto de guardado. Un solo uso, pero se puede obtener otra de Burbuja despues de completar una mision secundaria.
- **Mensajes en Botella (x8)** — Botellas selladas atrapadas dentro de burbujas flotantes. Cada una contiene un mensaje de un guardian de otro reino (Bosque Eterno o Cosmos Infinito) dirigido a los guardianes Drop. Revelan conexiones entre los tres reinos y pistas sobre El Ciclo.
- **Jabon Eterno** — Un item que permite al jugador crear burbujas a voluntad fuera de la zona. Las burbujas creadas son pequenas pero pueden usarse como plataformas flotantes temporales en cualquier zona del Oceano Profundo.
- **Burbuja Comprimida** — Un item que atrapa un enemigo dentro de una burbuja durante 15 segundos, neutralizandolo temporalmente. Se obtiene al rescatar a Burbuja de un Pez Aguja particularmente grande.

#### Conexiones

- **Abajo:** Manantial Primigenio (descendiendo por la Columna de Burbujas)
- **Oeste:** Rompiente Eterna (a traves de corrientes de espuma)
- **Este:** Corriente Fronteriza (a traves de una corriente ascendente lateral)
- **Arriba:** Cumulo Lluvioso (ascendiendo por la Columna de Burbujas hasta la superficie y mas alla)

#### Puzzles y Mecanicas

- **Mecanica de Capsula Eterea:** Burbuja otorga al jugador la habilidad "Capsula Eterea", que permite encapsular objetos o criaturas dentro de burbujas irrompibles. Los objetos encapsulados flotan y pueden ser transportados, los enemigos encapsulados quedan neutralizados temporalmente, y el jugador puede encapsularse a si mismo para protegerse de la presion, corrientes y ataques durante 5 segundos (cooldown de 20 segundos).
- **Puzzle de Transporte de Burbujas:** El jugador debe transportar un objeto fragil desde el fondo de la zona hasta la cima usando burbujas como vehiculos. Las burbujas ascienden automaticamente, pero los Peces Aguja las revientan. El jugador debe escoltar la burbuja, eliminando amenazas y cambiando de burbuja cuando la actual se acerca a obstaculos.
- **Puzzle de Burbujas Encadenadas:** El jugador debe crear una cadena de burbujas de tamano especifico para activar un mecanismo. Burbujas demasiado grandes o pequenas no encajan. Usando Capsula Eterea con diferentes tiempos de carga, el jugador crea burbujas de tamanos variados y las posiciona en los soportes correctos.
- **Desafio del Mensajero:** Burbuja le pide al jugador que entregue un mensaje (una burbuja con un sonido grabado) a cada uno de los otros 8 guardianes Drop. Es una mision de recorrido completo del Oceano Profundo que premia con la segunda Burbuja de Recuerdo y un fragmento de lore critico sobre la conexion entre los tres reinos.

---

### 4.9 CUMULO LLUVIOSO

**Guardian:** Lluvia (drop-09) — El puente entre el cielo y el Oceano Profundo.

#### Estilo Visual

- **Tiles:** La transicion entre el agua y el cielo. La mitad inferior de la zona es oceano superficial con olas y espuma; la mitad superior es cielo nublado con nubes densas, relámpagos lejanos y gotas de lluvia que caen constantemente. El jugador puede nadar en el agua y "nadar" en las nubes (que son lo suficientemente densas para sostenerlo). Las gotas de lluvia son sprites individuales que caen en lineas verticales.
- **Colores:** Gris nube (#78909C) dominante con azul tormenta (#37474F), blanco lluvia (#ECEFF1) y plateado (#B0BEC5) para los relampagos. Es la paleta mas melancolica del Oceano Profundo, como un cielo a punto de llorar.
- **Landmarks:**
  - **El Nacimiento de la Lluvia:** El punto exacto donde las gotas de agua del oceano ascienden, se convierten en vapor, forman nubes y vuelven a caer como lluvia. Es un ciclo visible y perpetuo que Lluvia supervisa. Un arco de agua y nubes marca el lugar.
  - **La Nube Madre:** Una nube masiva en la que Lluvia reside. Su interior es suave y humedo, como una caverna de algodon mojado. Tiene camaras formadas por densidades diferentes de vapor.
  - **El Trono de la Tormenta:** Una plataforma de nubes comprimidas donde las tormentas mas poderosas del mundo se originan. Esta normalmente inactiva, pero cuando las emociones de Lluvia se desbordan (su defecto), genera tormentas que afectan a todo el Oceano Profundo.

#### Guardiana Presente

- **Lluvia** es emocional, compasiva y volátil. Llora con facilidad (lo que genera lluvia literal), rie con estruendo (lo que genera truenos) y se preocupa por todo y todos. Su estado emocional afecta directamente el clima de la zona: si esta feliz, las nubes se abren y cae una lluvia suave y calida; si esta triste, la tormenta arrecia y los relampagos son frecuentes. El jugador aprende a leer el clima para entender el humor de Lluvia y actuar en consecuencia.

#### Enemigos y Obstaculos

- **Relampagos Errantes:** Descargas electricas que caen del cielo en puntos semi-aleatorios. Se anuncian con un destello breve y un trueno. El jugador tiene 1.5 segundos para moverse del punto de impacto. En el agua, el relampago se propaga y afecta un area mayor.
- **Vientos de Altura:** Rafagas laterales extremadamente fuertes en la seccion de nubes que empujan al jugador horizontalmente. Son mas intensos que cualquier corriente del reino. Se contrarrestan con Diente de Marea (cortando el viento como una corriente).
- **Nubes Toxicas:** Nubes de color amarillento que contienen gases sulfurosos. Al entrar, el jugador pierde vida gradualmente. Se disipan con Maremoto Interior o se evitan navegando por debajo de ellas.
- **El Ciclo del Agua:** Mecanica ambiental. El agua de la superficie asciende constantemente como vapor, y las nubes descargan lluvia constantemente. Si el jugador se queda quieto en la superficie, el vapor lo empuja hacia arriba. Si se queda quieto en las nubes, la lluvia lo empuja hacia abajo. Debe mantenerse en movimiento constante.

#### Items y Coleccionables

- **Gota de Nube** (trade de Lluvia) — Una gota de agua que flota en el aire y nunca toca el suelo. En el juego, permite al jugador levitar durante 5 segundos, elevandose verticalmente sin necesidad de nadar o usar corrientes. Cooldown de 15 segundos.
- **Fragmentos de Tormenta (x7)** — Cristales electricos atrapados dentro de nubes. Cada uno contiene un recuerdo emocional de Lluvia:
  1. La primera vez que vio el oceano desde el cielo
  2. El dia que lloro tan fuerte que causo la primera inundacion
  3. Su amistad con Burbuja (la unica que sube hasta las nubes)
  4. Su nostalgia por El Origen, a quien nunca conocio
  5. Su miedo a la Desecacion (sin agua, no hay lluvia)
  6. Su alegria al descubrir que la lluvia sana la tierra
  7. La profecia del Ciclo: cuando cielo y mar se reencuentren
- **Paraguas de Coral** — Un item construido por Coral y dejado aqui para Lluvia. Protege al jugador de los Relampagos Errantes mientras lo equipa. Escondido en una nube accesible solo con Gota de Nube.
- **Botella de Tormenta** — Un item que permite al jugador invocar una tormenta localizada en cualquier zona, generando corrientes de agua y electricidad durante 10 segundos. Se obtiene al calmar al Trono de la Tormenta.

#### Conexiones

- **Abajo:** Mar de Burbujas (descendiendo por la Columna de Burbujas)
- **Sureste (extremo):** Corriente Fronteriza (siguiendo la corriente vertical extrema)
- **Sin mas conexiones directas** — El Cumulo Lluvioso es el techo del Oceano Profundo. Mas arriba solo hay cielo abierto, territorio del Cosmos Infinito. Es la frontera superior del reino, el opuesto simetrico de la Caverna de Hielo.

#### Puzzles y Mecanicas

- **Mecanica de Diluvio Sanador:** Lluvia otorga al jugador la habilidad "Diluvio Sanador", que invoca una lluvia localizada que cura al jugador (1 corazon por segundo durante 5 segundos), purifica zonas contaminadas por La Desecacion y restaura la barra de oxigeno completamente. Cooldown de 45 segundos. Es la habilidad de curacion mas poderosa del Oceano Profundo.
- **Puzzle del Equilibrio Emocional:** El jugador debe estabilizar las emociones de Lluvia para detener una tormenta que amenaza con destruir la zona. Debe presentarle objetos que evoquen emociones especificas: la Perla de Eco con un sonido calmante (de Concha), la Burbuja de Recuerdo con un momento feliz (de Burbuja) y la Lagrima del Origen como recordatorio de su proposito (de Gota). El orden importa: presentar un objeto que intensifique la emocion equivocada empeora la tormenta.
- **Puzzle del Ciclo del Agua:** El jugador debe completar un circuito de agua: guiar una gota desde el oceano hasta una nube (usando vapor ascendente), condensarla en una gota de lluvia (usando Prisma Glacial para enfriarla) y guiarla de vuelta al oceano. El circuito completo activa la Nube Madre y revela la ultima pieza de lore antes de la mazmorra.
- **Desafio de la Tormenta:** Una seccion de supervivencia donde el jugador debe resistir 3 minutos dentro de una tormenta activa en el Trono de la Tormenta. Relampagos, vientos y lluvia torrencial atacan simultaneamente. Usar todas las habilidades es necesario: Capsula Eterea para protegerse, Emboscada Silenciosa para evitar deteccion de los rayos, Destello Abisal para ver a traves de la lluvia. Al completar el desafio, el Trono se calma y Lluvia otorga al jugador su bendicion final.

---

## 5. EL TEMPLO DE LAS MAREAS — Mazmorra Principal

### Informacion General

| Aspecto | Detalle |
|---------|---------|
| **Nombre** | El Templo de las Mareas |
| **Ubicacion** | Bajo la Cueva de los Espejos en el Abismo Luminoso, con entrada alternativa desde la Caverna de Hielo |
| **Requisito de acceso** | La Corona de Corrientes (9 Gotas de Guardian, una por cada guardian Drop) |
| **Tema** | Un templo antiguo donde las mareas son controladas: el corazon mecanico del Oceano Profundo |
| **Pisos** | 3 niveles con mecanicas de nivel de agua |

### Las Gotas de Guardian

Para acceder al Templo de las Mareas, el jugador necesita la **Corona de Corrientes**, formada por 9 **Gotas de Guardian**. Cada guardian Drop otorga su Gota al jugador despues de completar su mision principal:

| Guardian | Gota | Como se obtiene |
|----------|------|----------------|
| Gota (drop-01) | Gota de Pureza | Completar el tutorial de natacion y el Puzzle de la Purificacion |
| Ola (drop-02) | Gota de Fuerza | Ganar el Desafio de Velocidad |
| Cristal (drop-03) | Gota de Memoria | Completar el Puzzle de la Refraccion |
| Concha (drop-04) | Gota de Silencio | Completar el Puzzle de la Melodia Perdida |
| Coral (drop-05) | Gota de Estructura | Completar la reconstruccion del Arrecife Dormido |
| Neon (drop-06) | Gota de Luz | Completar el Desafio de la Oscuridad Total |
| Aleta (drop-07) | Gota de Vigilancia | Completar la mision de Patrullaje |
| Burbuja (drop-08) | Gota de Viaje | Completar el Desafio del Mensajero |
| Lluvia (drop-09) | Gota de Sanacion | Completar el Desafio de la Tormenta |

### Tema y Atmosfera

El Templo de las Mareas no es una construccion de criaturas marinas. Es una estructura anterior a la vida: fue creada por El Origen antes de La Gran Fragmentacion como el mecanismo que regula todas las mareas, corrientes y ciclos del agua en el mundo. Sus paredes son de roca lisa y antigua con grabados de olas estilizadas. Los pasillos estan parcialmente inundados, y el nivel del agua sube y baja con un ritmo lento y predecible: el "pulso" del templo.

La musica es "El Pulso de la Marea" en su forma mas profunda y antigua. Cada latido del templo mueve el agua: sube durante el "latido" y baja durante el "silencio". Este ritmo es la mecanica central de toda la mazmorra.

### Estructura de la Mazmorra

#### Piso 1: El Regulador de Corrientes

- **Visual:** Camaras amplias con canales de agua que fluyen en patrones complejos. Las paredes tienen compuertas de piedra que controlan la direccion del flujo. El techo tiene grabados de los 9 guardianes Drop en un mural circular. La iluminacion proviene de cristales de bioluminiscencia incrustados en la roca.
- **Mecanica Central:** El jugador debe abrir y cerrar compuertas para redirigir las corrientes de agua. Cada compuerta tiene una palanca que solo se activa cuando el nivel del agua esta en un punto especifico (alto o bajo, segun el ritmo del templo). El jugador debe sincronizar sus acciones con el pulso de la marea.
- **Enemigos:** Guardianes del Templo — golems de roca marina que patrullan los pasillos. Son lentos pero extremadamente resistentes. Solo se destruyen redirigiendolos hacia las corrientes mas fuertes, que los erosionan rapidamente. Medusas de Piedra — criaturas fosilizadas que se activan cuando el agua sube y se desactivan cuando baja. Atacan con tentaculos electrificados.
- **Miniboss:** **El Regulador** — Un mecanismo gigante en el centro del piso: una esfera de roca con tentaculos de metal que controla las compuertas automaticamente. Ha sido corrompido por La Desecacion y abre y cierra las compuertas de forma caotica, creando corrientes peligrosas e impredecibles. El jugador debe destruir sus 4 tentaculos redirigiendo corrientes de alta presion hacia ellos usando las compuertas manuales. Cada tentaculo destruido estabiliza una seccion del piso. Al destruir los 4, la esfera se desactiva y las corrientes se calman, revelando la escalera al Piso 2.
- **Item:** Llave de Marea Alta — necesaria para descender al Piso 2. Se obtiene del nucleo del Regulador.

#### Piso 2: La Camara de Presion

- **Visual:** Un espacio vertical dividido en secciones horizontales por plataformas de piedra perforadas. El agua llena todo el espacio y su nivel sube y baja dramaticamente (desde el fondo hasta casi el techo) siguiendo el ritmo del templo pero a velocidad acelerada. Las paredes estan cubiertas de corales fosilizados y conchas petrificadas.
- **Mecanica Central:** El nivel del agua es la mecanica principal. Cuando el agua sube, ciertas plataformas quedan sumergidas y el jugador puede nadar sobre ellas; cuando baja, quedan expuestas y el jugador puede caminar sobre ellas. Algunas puertas solo se abren cuando estan sumergidas; otras solo cuando estan expuestas. El jugador debe planificar su ruta segun el ciclo de marea, actuando rapido durante las transiciones.
- **Enemigos:** Anguilas del Templo — criaturas electricas largas que nadan entre las plataformas durante la marea alta, electrificando el agua en un radio de 2 tiles. Se evitan subiendo a plataformas expuestas cuando el agua baja. Cangrejos de Presion — criaturas que solo aparecen cuando el agua esta baja, caminando sobre las plataformas expuestas. Son rapidas y agresivas pero desaparecen al subir el agua.
- **Miniboss:** **La Prensa Abisal** — Dos enormes losas de piedra en el techo y suelo de una camara que se acercan ciclicamente, comprimiendo el espacio disponible. El agua entre ellas se presuriza y genera corrientes horizontales violentas. El jugador debe encontrar y destruir 3 cristales de control incrustados en las losas mientras evita ser aplastado y arrastrado. Cada cristal destruido reduce la presion y la velocidad de las losas. Al destruir los 3, las losas se detienen permanentemente y revelan la entrada al Piso 3.
- **Item:** Llave de Marea Baja — necesaria para descender al Piso 3.

#### Piso 3: El Nucleo / Sala del Boss

- **Visual:** Una camara esferica inmensa. Las paredes son de una roca oscura y lisa como obsidiana marina, con venas de agua luminosa que las recorren como un sistema circulatorio. En el centro flota un enorme cristal azul con forma de gota: es el **Nucleo de las Mareas**, el fragmento de El Origen que regula toda el agua del mundo. El cristal gira lentamente, y con cada rotacion el nivel del agua en la camara cambia.
- **El Nucleo esta agrietado.** De las grietas emana una energia seca y gris: La Desecacion en su forma mas concentrada. El agua alrededor de las grietas se evapora, dejando vacio donde deberia haber corriente.

### Boss Final: EL GRAN MAELSTROM

**Nombre:** El Gran Maelstrom
**Descripcion:** La Desecacion ha tomado forma alrededor del Nucleo de las Mareas. El Gran Maelstrom es un vortice inverso: en lugar de girar agua, la absorbe. Es un remolino de vacio que succiona el agua, las corrientes y la vida del Oceano Profundo. Como la Semilla Rota del Bosque Eterno, no es un ser malvado sino la manifestacion del dolor de El Origen convertido en sequía y aislamiento.

**Apariencia:** Un remolino de 4 pantallas de diametro formado por agua, roca y escombros que giran alrededor del Nucleo agrietado. Su "cuerpo" es el vortice mismo: capas concentricas de agua que giran a velocidades crecientes hacia el centro. En el borde exterior, el agua es oscura y lenta; en el interior, es un tornado de fragmentos cristalinos a velocidad devastadora. Tiene "brazos" de corriente que se extienden y retraen ciclicamente.

**Fases de combate:**

- **Fase 1 — El Vortice Voraz:** El Gran Maelstrom succiona todo hacia su centro. El jugador es arrastrado constantemente hacia el nucleo y debe nadar contra la corriente para mantenerse en la zona segura exterior. Los brazos de corriente barren secciones del campo de batalla. El jugador debe usar Diente de Marea para cortar los brazos cuando pasan cerca, debilitando la succion. Despues de cortar 4 brazos, el vortice se debilita momentaneamente y el Nucleo queda expuesto. El jugador debe alcanzarlo y golpearlo antes de que el vortice se regenere.

- **Fase 2 — La Sequia Interior:** El Gran Maelstrom cambia de estrategia: en lugar de succionar agua, la expulsa. El nivel del agua en la camara desciende rapidamente, dejando al jugador en seco en un suelo de roca. Sin agua, no puede nadar. El Maelstrom ataca con proyectiles de roca seca y rafagas de viento desertico. El jugador debe usar Diluvio Sanador (de Lluvia) para crear charcos de agua temporal donde puede nadar brevemente, y Arrecife Viviente (de Coral) para construir barreras contra los proyectiles. El objetivo es alcanzar 3 fuentes de agua seladas en las paredes de la camara y abrirlas con Prisma Glacial (derritiendo los sellos de hielo), restaurando parcialmente el nivel del agua.

- **Fase 3 — La Purificacion:** El nivel del agua se estabiliza a la mitad de la camara. El Gran Maelstrom gira descontroladamente, alternando entre succion y expulsion. El jugador debe usar Eco de Marea (de Gota) para crear clones que naden hacia el Nucleo desde multiples direcciones simultaneamente, confundiendo al Maelstrom. Mientras los clones distraen al vortice, el jugador usa Capsula Eterea (de Burbuja) para encapsularse y atravesar las capas del remolino sin dano. Al alcanzar el Nucleo, usa Resonancia Abisal (de Concha) para calmar las corrientes descontroladas y finalmente aplica Diluvio Sanador directamente sobre las grietas del cristal para purificarlo.

**Narrativa del combate:** Durante toda la batalla, los ecos del templo transmiten las voces de los 9 guardianes Drop. Gota: "El agua no se destruye. Se transforma." Ola: "Incluso la corriente mas fuerte se calma." Cristal: "Los momentos rotos pueden restaurarse." Concha: "Escucha su dolor. Es lo que queda de El Origen." Coral: "Lo que se ha derrumbado se puede reconstruir." Neon: "La luz siempre encuentra un camino en la oscuridad." Aleta: "Proteger no es destruir al enemigo. Es sanar lo que esta herido." Burbuja: "Hasta la cosa mas fragil puede contener un mundo." Lluvia: "Deja que la lluvia lave su sufrimiento."

El jugador NO destruye al Gran Maelstrom. Lo calma. Lo sana. Es la tematica central del Oceano Profundo: el agua fluye, se adapta y restaura. No se impone, no destruye; encuentra el camino.

### Recompensa

Al purificar el Gran Maelstrom, el Nucleo de las Mareas se restaura completamente. Ocurre lo siguiente:

1. **La Esencia de Gota** — Un fragmento cristalino azul que el jugador recoge. Es uno de los 3 fragmentos necesarios para completar El Ciclo y restaurar El Origen. Los otros dos se obtienen en el Bosque Eterno (Esencia de Semilla) y el Cosmos Infinito (Esencia de Chispa).

2. **Restauracion de Corrientes** — Todas las corrientes del Oceano Profundo se normalizan. Las zonas de La Desecacion retroceden visiblemente. Nuevos caminos se abren en todas las zonas (contenido post-mazmorra).

3. **La Cancion de la Marea** — Una melodia completa que combina los temas de las 9 zonas. Al reproducirla con la Perla de Eco en El Nexo, revela una pista sobre la ubicacion de la siguiente mazmorra en otro reino.

4. **Mejora de Habilidad** — Todas las habilidades Drop obtenidas durante la aventura reciben una mejora:
   - Eco de Marea crea clones permanentes (duran hasta ser destruidos)
   - Maremoto Interior tiene doble alcance
   - Prisma Glacial congela areas el doble de grandes
   - Resonancia Abisal afecta a toda la pantalla
   - Arrecife Viviente construye al doble de velocidad
   - Destello Abisal no tiene cooldown
   - Emboscada Silenciosa dura el doble de tiempo
   - Capsula Eterea es permanente hasta recibir dano
   - Diluvio Sanador cura a todos los aliados en la zona

5. **Escena Final del Reino** — Los 9 guardianes Drop se reunen por primera vez en el Manantial Primigenio. Cada uno ofrece un mensaje al jugador. Gota, la primera que el jugador conocio, dice la ultima frase: *"Toda el agua del mundo fue una sola lagrima. Ahora lleva nuestra esencia a los otros reinos. Las corrientes te guiarán. El Ciclo aun no se completa."*

---

## 6. Mapa de Conexiones entre Zonas

```
=============================================================
        MAPA DEL OCEANO PROFUNDO - Conexiones
=============================================================

                          [CIELO - Frontera Superior]
                                    ^
                                    | (limite del reino)
                                    |
                        +=======================+
                        ||  CUMULO LLUVIOSO    ||
                        ||     (Lluvia)        ||
                        +===========+===========+
                                    |
                              descendente
                                    |
                          corriente | vertical
                         extrema    |
                            |       |
+================+  +======+========+==========+  +=====================+
|| ROMPIENTE    ||  ||     MAR DE BURBUJAS    ||  ||  CORRIENTE         ||
|| ETERNA       ++==++     (Burbuja)          ++==++  FRONTERIZA        ||
|| (Ola)        ||  +============+=============+  ||  (Aleta)           ||
+=======+========+               |                 +==========+==========+
        |                 Columna de                           |
     pasaje del         Burbujas (vertical)                corriente
     Arco del                    |                          rapida
     Maremoto            +============+=============+          |
     (secreto)           ||  MANANTIAL PRIMIGENIO  ||          |
        |                ||  (Gota)                ||          |
        |           +====++ [PORTAL AL NEXO]       ++====+     |
        |           |    +============+=============+    |     |
        |      corriente              |              tunel de  |
        |       suave            descenso           algas      |
        |           |             profundo       luminosas     |
+=======(===========+=====+       |                  +==(======+=========+
|| BAHIA DEL SILENCIO    ||       |                  || CIUDAD CORAL    ||
|| (Concha)              ||       |                  || (Coral)         ||
+=============+==========+       |                  +==========+========+
              |                   |                             |
           sifon            +=====(=====+=======+         Arrecife
           oscuro           || ABISMO LUMINOSO ||         Dormido
              |             || (Neon)          ||         (descendente)
              +=============++ [Entrada a EL   ++==========+
                            || TEMPLO DE LAS   ||
                            || MAREAS]         ||
                            +=========+========+
                                      |
                                Fosa de los
                                 Destellos
                                      |
                            +=========+========+
                            || CAVERNA DE      ||
                            || HIELO           ||
                            || (Cristal)       ||
                            +=================+
                                      |
                              (callejon sin
                               salida — fondo
                               del reino)

=============================================================
LEYENDA:
  +====+  Zona principal (doble linea)
  ---     Conexion directa entre zonas
  (   )   Descripcion del tipo de conexion
  [   ]   Punto de interes especial
  ^       Frontera del reino
=============================================================

RESUMEN DE CONEXIONES:

  Manantial Primigenio <---> Bahia del Silencio    (Oeste, corriente suave)
  Manantial Primigenio <---> Ciudad Coral           (Este, tunel de algas)
  Manantial Primigenio <---> Mar de Burbujas        (Arriba, Columna de Burbujas)
  Manantial Primigenio <---> Abismo Luminoso        (Abajo, descenso profundo)
  Manantial Primigenio  -->  El Nexo                (Portal)

  Mar de Burbujas      <---> Rompiente Eterna       (Oeste, corrientes de espuma)
  Mar de Burbujas      <---> Corriente Fronteriza   (Este, corriente ascendente)
  Mar de Burbujas      <---> Cumulo Lluvioso        (Arriba, Columna de Burbujas)

  Rompiente Eterna     <---> Bahia del Silencio     (Secreto, pasaje del Arco)
  Corriente Fronteriza <---> Cumulo Lluvioso        (Noroeste, corriente extrema)
  Corriente Fronteriza <---> Ciudad Coral            (Sur, corriente rapida)

  Bahia del Silencio   <---> Abismo Luminoso        (Profundo, sifon oscuro)
  Ciudad Coral         <---> Abismo Luminoso        (Abajo, Arrecife Dormido)

  Abismo Luminoso      <---> Caverna de Hielo       (Abajo, Fosa de los Destellos)
  Abismo Luminoso       -->  El Templo de las Mareas (Secreto, Cueva de los Espejos)

  Caverna de Hielo: Sin salida adicional (fondo del reino)
  Cumulo Lluvioso: Sin salida superior (techo del reino)
=============================================================
```

---

## 7. Ruta Sugerida del Jugador

La estructura del Oceano Profundo permite exploracion no lineal, pero existe un camino optimo que garantiza que el jugador obtenga las habilidades en el orden mas util:

```
1. Manantial Primigenio ...... Conocer a Gota, obtener Eco de Marea
       |                       Aprender mecanicas de natacion y oxigeno
       |
2. Bahia del Silencio ........ Conocer a Concha, obtener Resonancia Abisal
       |                       Herramienta de exploracion para todo el reino
       |
3. Ciudad Coral .............. Conocer a Coral, obtener Arrecife Viviente
       |                       Obtener Escama Presurizada (ESENCIAL para zonas profundas)
       |
4. Rompiente Eterna .......... Conocer a Ola, obtener Maremoto Interior
       |                       Herramienta de combate y limpieza de obstaculos
       |
5. Mar de Burbujas ........... Conocer a Burbuja, obtener Capsula Eterea
       |                       Herramienta de transporte y proteccion
       |
6. Corriente Fronteriza ...... Conocer a Aleta, obtener Emboscada Silenciosa
       |                       Obtener Diente de Marea y Aleta de Velocidad
       |
7. Abismo Luminoso ........... Conocer a Neon, obtener Destello Abisal
       |                       Explorar las profundidades oscuras
       |
8. Caverna de Hielo .......... Conocer a Cristal, obtener Prisma Glacial
       |                       La zona mas profunda y desafiante
       |
9. Cumulo Lluvioso ........... Conocer a Lluvia, obtener Diluvio Sanador
       |                       La habilidad final de curacion
       |
10. El Templo de las Mareas .. Mazmorra final, purificar el Gran Maelstrom
```

Cada guardian ensena una habilidad que facilita la exploracion de las zonas siguientes. La Escama Presurizada (de Ciudad Coral) es el item mas critico: sin ella, las zonas profundas son extremadamente peligrosas. Por esto se recomienda visitar Ciudad Coral temprano.

---

## 8. Notas de Diseno Adicionales

### La Desecacion como Antagonista Ambiental

La Desecacion es el equivalente de La Marchitez del Bosque Eterno, pero adaptada al medio acuatico. No es un villano con rostro. Es una fuerza de agotamiento: el dolor residual de La Gran Fragmentacion manifestado como la ausencia de agua. Donde la Marchitez petrifica, la Desecacion evapora. Las zonas afectadas se reconocen por:

- Agua que se vuelve gris y deja de moverse
- Criaturas marinas petrificadas en sal
- Corrientes que se detienen formando "agua muerta"
- Sonido amortiguado y musica distorsionada
- Burbujas que dejan de ascender

Las zonas mas cercanas a las fronteras del reino (Corriente Fronteriza, Cumulo Lluvioso) estan mas afectadas. El centro (Manantial Primigenio) esta relativamente a salvo gracias a la presencia de Gota. La Caverna de Hielo resiste naturalmente (el hielo preserva lo que contiene). El Abismo Luminoso es donde la Desecacion ha avanzado mas, al estar lejos de la Fuente Primordial.

### Interacciones entre Guardianes

Los 9 guardianes Drop tienen relaciones entre ellos que el jugador descubre a traves de los Mensajes en Botella (Mar de Burbujas), las Memorias Descongeladas (Caverna de Hielo) y los ecos de los Jardines de Eco (Bahia del Silencio):

- **Gota y Lluvia:** Madre e hija espiritual. Gota es el origen; Lluvia es su extension en el cielo. Lluvia busca constantemente la aprobacion de Gota, quien le responde con paciencia infinita.
- **Ola y Aleta:** Rivales respetuosos. Ola es fuerza bruta en movimiento; Aleta es precision silenciosa. Compiten constantemente por ver quien protege mejor el reino, pero se cubren mutuamente en momentos criticos.
- **Cristal y Neon:** Opuestos complementarios. Cristal congela los momentos; Neon los ilumina. Cristal es silencio y preservacion; Neon es ruido y exploracion. Juntos, pueden congelar un destello de luz creando "recuerdos iluminados".
- **Concha y Burbuja:** Mejores amigas. Concha es timida y Burbuja es social. Burbuja saca a Concha de su caparazon; Concha calma a Burbuja cuando se distrae demasiado. Son inseparables cuando no estan en sus zonas.
- **Coral y Aleta:** Aliados profesionales. Coral construye los Puestos de Guardia de Aleta. Aleta protege las construcciones de Coral de los Intrusos. Su relacion es funcional pero existe un respeto profundo.
- **Lluvia y Burbuja:** Burbuja es la unica que visita a Lluvia en las nubes. Lluvia llora de alegria cada vez que Burbuja sube, y Burbuja le lleva noticias de las profundidades.

### Ciclo de Mareas

El Oceano Profundo tiene un ciclo de mareas que afecta a cada zona de manera diferente. A diferencia del ciclo dia/noche del Bosque Eterno, este es un ciclo vertical: marea alta (el agua sube) y marea baja (el agua baja).

| Zona | Marea Alta | Marea Baja |
|------|-----------|------------|
| Manantial Primigenio | Fuente Primordial mas activa, Geiseres mas frecuentes | Pilares de Eco parcialmente expuestos, nuevas areas accesibles |
| Rompiente Eterna | Olas mas grandes y peligrosas, dificultad maxima | Pozas de Marea con mas items, Erizos expuestos y evitables |
| Caverna de Hielo | Sin cambio (profundidad constante) | Sin cambio (profundidad constante) |
| Bahia del Silencio | Gran Caracola completamente sumergida, acceso a todas las camaras | Playa Interior se expande, mas area de descanso |
| Ciudad Coral | Corrientes Urbanas mas rapidas, Mercado mas activo | Estructuras superiores expuestas, nuevos pisos accesibles |
| Abismo Luminoso | Sin cambio (profundidad constante) | Sin cambio (profundidad constante) |
| Corriente Fronteriza | Canal Principal a maxima velocidad, patrullaje imposible | Corrientes reducidas, momento ideal para explorar |
| Mar de Burbujas | Columna de Burbujas mas activa, ascenso rapido | Burbujas menos frecuentes, zona del Cementerio accesible |
| Cumulo Lluvioso | Nivel del mar sube, nubes mas cercanas al agua | Nivel del mar baja, distancia mayor entre mar y nubes |

### Peligros Ambientales del Oceano Profundo

| Peligro | Zona(s) Afectada(s) | Efecto | Contramedida |
|---------|---------------------|--------|-------------|
| Falta de oxigeno | Todas | Dano gradual al agotar la barra | Burbujas de aire, Capsula Eterea, superficie |
| Alta presion | Abismo Luminoso, Caverna de Hielo | Oxigeno se consume al doble | Escama Presurizada (de Coral) |
| Corrientes | Rompiente Eterna, Corriente Fronteriza | Arrastre involuntario | Diente de Marea, Alga Resistente |
| Congelacion | Caverna de Hielo | Inmovilizacion 3 segundos | Nucleo Termal, movimiento constante |
| Oscuridad | Abismo Luminoso | Vision reducida a 2 tiles | Escama Prismatica, Destello Abisal, Medusa-Farola |
| Electricidad | Cumulo Lluvioso | Dano instantaneo alto | Paraguas de Coral, Capsula Eterea |
| Silencio absoluto | Bahia del Silencio | Habilidades sonoras desactivadas | Resonancia Abisal para purificar |
| Resaca | Rompiente Eterna | Arrastre hacia aguas profundas | Agarrarse a rocas, Poza de Marea |
| Vientos de altura | Cumulo Lluvioso | Empuje lateral violento | Diente de Marea, Arrecife Viviente |
| Desecacion | Todas (zonas afectadas) | Agua gris, corrientes muertas | Diluvio Sanador, Lagrima del Origen |

### Economia de Items

Los 9 objetos trade de los guardianes forman el nucleo del inventario del jugador. Cada uno tiene utilidad tanto en combate como en exploracion:

| Item | Guardian | Uso en Combate | Uso en Exploracion |
|------|----------|----------------|-------------------|
| Lagrima del Origen | Gota | Campo de purificacion (2 tiles) | Limpia agua contaminada |
| Espuma Eterna | Ola | Escudo automatico (1 golpe / 30s) | Amortiguacion de caidas e impactos |
| Copo Perpetuo | Cristal | Congela enemigos al golpe (5s) | Crea plataformas de hielo temporal |
| Perla de Eco | Concha | Graba y reproduce ataques sonoros | Graba y reproduce sonidos para puzzles |
| Fragmento de Ciudad | Coral | Bloque solido como escudo | Crea plataformas y represas |
| Escama Prismatica | Neon | Revela enemigos ocultos | Luz permanente (3 tiles) |
| Diente de Marea | Aleta | Corta proyectiles acuaticos | Corta corrientes y vientos |
| Burbuja de Recuerdo | Burbuja | Revive al morir (1 uso) | Continue extra |
| Gota de Nube | Lluvia | Evasion vertical rapida (5s) | Levitacion para alcanzar zonas altas |

### Moneda del Reino

La moneda del Oceano Profundo son las **Gotas Puras**, que se obtienen al purificar Impurezas (enemigos basicos) y al completar desafios. Se utilizan en el Mercado de Corrientes de Ciudad Coral para comprar items consumibles:

| Item | Precio | Efecto |
|------|--------|--------|
| Medusa-Farola | 10 Gotas Puras | Ilumina 5 tiles durante 60 segundos |
| Burbuja de Aire | 5 Gotas Puras | Recarga 25% de la barra de oxigeno |
| Alga Curativa | 15 Gotas Puras | Restaura 2 corazones de vida |
| Tinta de Calamar | 20 Gotas Puras | Vuelve invisible al jugador 8 segundos |
| Sal Marina | 8 Gotas Puras | Repele enemigos en un radio de 3 tiles por 10 segundos |
| Perla Menor | 30 Gotas Puras | Aumenta dano un 50% durante 30 segundos |

### Conexion con los Otros Reinos

El Oceano Profundo tiene conexiones tematicas y narrativas con el Bosque Eterno y el Cosmos Infinito:

- **Bosque Eterno:** El agua del Oceano Profundo alimenta las raices del Bosque Eterno a traves de corrientes subterraneas. La Red Micelica de Hongo (Bosque Eterno) se extiende hasta las costas, donde Concha (Oceano Profundo) escucha sus mensajes. Lluvia (Oceano Profundo) riega el Bosque desde las nubes.
- **Cosmos Infinito:** Las mareas del Oceano Profundo estan regidas por la gravedad de Planeta (Cosmos Infinito). Los relampagos de Lluvia (Oceano Profundo) son chispas de Rayo (Cosmos Infinito) que caen al mar. Las estrellas que Neon (Oceano Profundo) ve en la Fosa de los Destellos son reflejos de Estrella (Cosmos Infinito).
- **El Nexo:** El Portal al Nexo en el Manantial Primigenio conecta con los portales del Claro del Amanecer (Bosque Eterno) y la ubicacion equivalente del Cosmos Infinito. Los tres portales forman un triangulo que, cuando las tres esencias se reunan, revelara el camino hacia El Origen.

---

*Documento de diseno v1.0 — Oceano Profundo, reino de la esencia Gota.*
*Regenmon — La profecia de los 27 guardianes.*
