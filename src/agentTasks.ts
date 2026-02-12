import type { ZoneTask, TaskCategory } from './agentTypes';

// Difficulty estimates by category pattern
const DIFFICULTY_MAP: Record<string, number> = {
  'Layout': 2, 'Tileset': 2, 'Puzzle': 3, 'Enemigos': 3, 'Mecánica': 3,
  'Boss': 5, 'Miniboss': 4, 'Piso': 3, 'Sistema': 4, 'Tema musical': 3,
  'Reward': 2, 'Cinemática': 4, 'Tutorial': 2,
};

function getDifficulty(title: string, category: TaskCategory): number {
  for (const [key, val] of Object.entries(DIFFICULTY_MAP)) {
    if (title.includes(key)) return val;
  }
  if (category === 'audio') return 3;
  if (category === 'integration') return 3;
  return 2;
}

let taskId = 0;
function t(zoneId: string, category: TaskCategory, title: string, description: string): ZoneTask {
  const difficulty = getDifficulty(title, category);
  return {
    id: `task-${++taskId}`,
    zoneId,
    category,
    title,
    description,
    status: 'pending',
    assignedAgentId: null,
    progress: 0,
    difficulty,
    estimatedTicks: difficulty * 40, // ~4-20 seconds at 100ms/tick
  };
}

export const INITIAL_TASKS: ZoneTask[] = [
  // ═══════════════════════════════════════
  // EL NEXO — Overworld Hub (~20 tasks)
  // ═══════════════════════════════════════
  t('nexo', 'map', 'Diseñar plaza central del Nexo', 'Layout 4x3 screens del hub central con Monumento de El Origen'),
  t('nexo', 'map', 'Monumento de El Origen', 'Implementar monumento con 27 slots para ítems de guardianes'),
  t('nexo', 'map', 'Plaza de los Ecos', 'Crear área con NPCs: El Cronista, La Tejedora, Espejo de Esencias'),
  t('nexo', 'map', 'Fuente de las Tres Aguas', 'Punto de guardado/curación donde confluyen las tres corrientes'),
  t('nexo', 'map', 'Archivo del Cronista', 'Biblioteca de lore con bestiary y registro de progreso'),
  t('nexo', 'map', 'Miradores del Nexo', 'Puntos de observación hacia los tres reinos'),
  t('nexo', 'map', 'Jardines Marchitos', 'Indicadores visuales de progreso que florecen al completar zonas'),
  t('nexo', 'mechanics', 'Portal al Bosque Eterno', 'Transición La Raíz Madre — arco de raíces entrelazadas'),
  t('nexo', 'mechanics', 'Portal al Océano Profundo', 'Transición La Cascada Invertida — agua que sube'),
  t('nexo', 'mechanics', 'Portal al Cosmos Infinito', 'Transición El Primer Escalón — escalera de obsidiana'),
  t('nexo', 'mechanics', 'Sistema de La Profecía', 'Tracking de 27 guardianes: etapas de progreso del Monumento'),
  t('nexo', 'art', 'Tiles del Nexo', 'Tileset de ruinas ancestrales para el hub central'),
  t('nexo', 'art', 'Animación del Monumento', 'Efectos visuales de iluminación progresiva al añadir guardianes'),
  t('nexo', 'audio', 'Tema musical del Nexo', 'Melodía contemplativa que evoluciona con el progreso'),
  t('nexo', 'integration', 'Sistema de guardado global', 'Save/load con Fuente de las Tres Aguas'),
  t('nexo', 'integration', 'Pasajes secretos inter-reinos', 'Implementar Grieta de Espino, Columna Ascendente, Túnel de Nube Oscura'),
  t('nexo', 'map', 'Estela Tridimensional de Cometa', 'Ruta especial de Cometa que conecta los tres reinos'),
  t('nexo', 'mechanics', 'El Renacimiento', 'Evento final al completar los 27 guardianes'),
  t('nexo', 'art', 'Cinemática de apertura', 'Secuencia de intro mostrando la fragmentación de El Origen'),
  t('nexo', 'integration', 'Mapa global navegable', 'Mini-mapa y mapa completo con fog of war'),

  // ═══════════════════════════════════════
  // BOSQUE ETERNO — 8 zonas + dungeon (~45 tasks)
  // ═══════════════════════════════════════

  // Claro del Amanecer
  t('claro', 'map', 'Layout del Claro del Amanecer', 'Zona tutorial con Piedra del Origen y portal al Nexo'),
  t('claro', 'mechanics', 'Puzzle Raíz Ancestral', 'Conectar 3 árboles en secuencia para despertar a Brote'),
  t('claro', 'art', 'Tileset del claro', 'Pasto iluminado, monolito central, portal de raíces'),
  t('claro', 'mechanics', 'Enemigos del Claro', 'Marchitas, Espinas Grises, Niebla de Olvido'),
  t('claro', 'integration', 'Trade: Semilla del Primer Día', 'Ítem de intercambio de Brote'),

  // Pradera Salvaje
  t('pradera', 'map', 'Layout de la Pradera Salvaje', 'Colinas Gemelas, Arroyo Cantarín, Campo de Tréboles'),
  t('pradera', 'mechanics', 'Puzzle Tejido Verde', 'Puentes de hierba que se tejen al pasar'),
  t('pradera', 'mechanics', 'Minijuego de la Fortuna', 'Juego de suerte con Trébol en el Campo de Tréboles'),
  t('pradera', 'art', 'Tileset de pradera', 'Colinas ondulantes, flores silvestres, arroyos'),
  t('pradera', 'mechanics', 'Enemigos de Pradera', 'Cortavientos, Hierbajos Parásitos, Trampas de Suerte'),

  // Jardín Solar
  t('solar', 'map', 'Layout del Jardín Solar', 'Torre del Vigía, Reloj Solar, Espejos de Pétalo'),
  t('solar', 'mechanics', 'Puzzle de redireccion de luz', 'Espejos de pétalos para dirigir rayos solares'),
  t('solar', 'mechanics', 'Reloj Solar interactivo', 'Alinear sombras para revelar secretos'),
  t('solar', 'art', 'Tileset solar', 'Campos de girasoles, espejos dorados, torre de vigía'),
  t('solar', 'mechanics', 'Enemigos Solares', 'Sombras Rastreras, Nubes Parásitas, Girasoles Corrompidos'),

  // Desierto de Espinas
  t('espinas', 'map', 'Layout del Desierto de Espinas', 'Laberinto de Púas, Frontera Marchita, Oasis Oculto'),
  t('espinas', 'mechanics', 'Laberinto de espinas vivientes', 'Laberinto que se reconfigura con paredes de púas'),
  t('espinas', 'art', 'Tileset del desierto', 'Arena árida, cactus, espinas cristalinas'),
  t('espinas', 'mechanics', 'Enemigos del Desierto', 'Escorpiones de Arena, Tumbleweeds Corruptos, Tormenta'),

  // Gruta Micélica
  t('gruta', 'map', 'Layout de la Gruta Micélica', 'Árbol Invertido, Red Visible, Jardín de la Descomposición'),
  t('gruta', 'mechanics', 'Puzzle emocional de esporas', 'Laberinto donde las esporas reaccionan a emociones'),
  t('gruta', 'mechanics', 'Propagación de esporas', 'Mecánica de esparcir esporas para abrir caminos'),
  t('gruta', 'art', 'Tileset subterráneo', 'Cuevas bioluminiscentes, hongos brillantes, raíces'),
  t('gruta', 'mechanics', 'Enemigos de la Gruta', 'Esporas Tóxicas, Hongos Explosivos, Sombras Emocionales'),

  // Arboleda Ancestral
  t('arboleda', 'map', 'Layout de la Arboleda Ancestral', 'Gran Roble, Anillos del Tiempo, Cementerio de Hojas'),
  t('arboleda', 'mechanics', 'Mecánica de Anillos del Tiempo', '5 flashbacks leyendo anillos de árboles milenarios'),
  t('arboleda', 'mechanics', 'Cámaras de tiempo lento', 'Zonas donde el tiempo avanza más despacio'),
  t('arboleda', 'art', 'Tileset ancestral', 'Robles enormes, hojas caídas, runas temporales'),
  t('arboleda', 'mechanics', 'Enemigos de la Arboleda', 'Termitas del Tiempo, Raíces Retorcidas, Espíritus'),

  // Cañaveral del Cielo
  t('canav', 'map', 'Layout del Cañaveral del Cielo', 'Gran Caña, Nido del Viento, Flautas Naturales'),
  t('canav', 'mechanics', 'Puzzle de flautas musicales', 'Secuencia musical con flautas de bambú'),
  t('canav', 'mechanics', 'Ascenso vertical de torre', 'Mecánica de escalada por bambúes al cielo'),
  t('canav', 'art', 'Tileset del cañaveral', 'Bambúes altísimos, plataformas de viento, nubes'),
  t('canav', 'mechanics', 'Enemigos del Cañaveral', 'Avispas de Bambú, Cañas Quebradizas, Corrientes'),

  // Jardín del Edén
  t('eden', 'map', 'Layout del Jardín del Edén', 'Flor Eterna, Senderos del Perfume, Fuente de la Vida'),
  t('eden', 'mechanics', 'Navegación por senderos de perfume', 'Seguir fragancias invisibles para encontrar caminos'),
  t('eden', 'mechanics', 'Defensa en oleadas (5 waves)', 'Defender el jardín contra 5 oleadas de Marchitez'),
  t('eden', 'art', 'Tileset del Edén', 'Flores exóticas, fuentes cristalinas, muro de espinas'),
  t('eden', 'mechanics', 'Enemigos del Edén', 'Criaturas de Marchitez, Polillas de Ceniza, Raíces Parásitas'),

  // Dungeon: El Corazón del Bosque
  t('corazon', 'map', 'Piso 1: Las Venas de Savia', 'Puzzles de flujo de savia — redirigir corrientes'),
  t('corazon', 'mechanics', 'Miniboss: La Marchita Mayor', 'Árbol corrompido — 2 fases de combate'),
  t('corazon', 'map', 'Piso 2: La Red Central', 'Puzzles de red micélica — conectar nodos'),
  t('corazon', 'mechanics', 'Miniboss: El Eco Inverso', 'Clon espejo con acciones retrasadas'),
  t('corazon', 'map', 'Piso 3: El Núcleo', 'Cámara esférica del corazón del bosque'),
  t('corazon', 'mechanics', 'Boss: La Semilla Rota', 'Fase 1: Raíces Furiosas, Fase 2: Capullo Invernal, Fase 3: Floración Oscura'),
  t('corazon', 'art', 'Tileset del calabozo Bosque', 'Interior orgánico, savia, raíces, bioluminiscencia'),
  t('corazon', 'audio', 'Tema del Corazón del Bosque', 'Música progresiva por piso + tema del boss'),
  t('corazon', 'integration', 'Reward: Esencia de Semilla', 'Otorgar 1/3 de El Origen + upgrades de habilidades Seed'),

  // ═══════════════════════════════════════
  // OCÉANO PROFUNDO — 9 zonas + dungeon (~50 tasks)
  // ═══════════════════════════════════════

  // Manantial Primigenio
  t('manantial', 'map', 'Layout del Manantial Primigenio', 'Fuente Primordial, Portal al Nexo, Pilares de Eco'),
  t('manantial', 'mechanics', 'Tutorial de natación', 'Movimiento 4-direccional acuático + gestión de oxígeno'),
  t('manantial', 'mechanics', 'Puzzle Eco de Marea', 'Clones de agua que replican movimientos'),
  t('manantial', 'art', 'Tileset del manantial', 'Agua cristalina, pilares de eco, fuentes'),
  t('manantial', 'mechanics', 'Enemigos del Manantial', 'Impurezas, Géiseres Inestables, Remolinos Menores'),

  // Rompiente Eterna
  t('rompiente', 'map', 'Layout de la Rompiente Eterna', 'El Rompiente, Pozas de Marea, Arco del Maremoto'),
  t('rompiente', 'mechanics', 'Sincronización con oleaje', 'Timing de olas para avanzar entre plataformas'),
  t('rompiente', 'mechanics', 'Persecución con Ola', 'Carrera de velocidad siguiendo a Ola entre rompientes'),
  t('rompiente', 'art', 'Tileset costero', 'Acantilados, pozas de marea, espuma, arcos de roca'),
  t('rompiente', 'mechanics', 'Enemigos de Rompiente', 'Rompientes Menores, Erizos de Roca, Cangrejos, Resaca'),

  // Caverna de Hielo
  t('hielo', 'map', 'Layout de la Caverna de Hielo', 'Palacio Cristalino, Momentos Congelados, Grieta Termal'),
  t('hielo', 'mechanics', 'Refracción de luz en hielo', 'Redirigir luz a través de prismas de hielo'),
  t('hielo', 'mechanics', 'Secuencias de momentos congelados', 'Resolver puzzles con escenas congeladas en el tiempo'),
  t('hielo', 'art', 'Tileset glacial', 'Cristales de hielo, suelo resbaladizo, grietas termales'),
  t('hielo', 'mechanics', 'Enemigos de Hielo', 'Corrientes Glaciales, Peces de Hielo, Estalactitas'),
  t('hielo', 'mechanics', 'Presión extrema', 'Doble consumo de oxígeno en zona profunda'),

  // Bahía del Silencio
  t('bahia', 'map', 'Layout de la Bahía del Silencio', 'Gran Caracola, Jardines de Eco, Playa Interior'),
  t('bahia', 'mechanics', 'Reconstrucción de melodía perdida', 'Reunir fragmentos de una melodía antigua'),
  t('bahia', 'mechanics', 'Test de paciencia (30s inmóvil)', 'Quedarse quieto 30s para que Concha aparezca'),
  t('bahia', 'art', 'Tileset de la bahía', 'Caracolas gigantes, jardines de eco, arena submarina'),
  t('bahia', 'mechanics', 'Enemigos de Bahía', 'Medusas Susurrantes, Cangrejos Ermitaños, Silencio Absoluto'),

  // Ciudad Coral
  t('coralz', 'map', 'Layout de Ciudad Coral', 'Torre del Arquitecto, Mercado de Corrientes, Arrecife Dormido'),
  t('coralz', 'mechanics', 'Reconstrucción de la ciudad', 'Colocar bloques de coral para restaurar estructuras'),
  t('coralz', 'mechanics', 'Redirección de corrientes', 'Canalizar flujos de agua para activar mecanismos'),
  t('coralz', 'art', 'Tileset coralino', 'Arrecifes coloridos, torres submarinas, mercado'),
  t('coralz', 'mechanics', 'Enemigos de Coral', 'Peces Loro Corrompidos, Morenas, Estructuras Colapsadas'),
  t('coralz', 'integration', 'Escama Presurizada', 'Ítem clave para acceder a zonas de abismo'),

  // Abismo Luminoso
  t('abismo', 'map', 'Layout del Abismo Luminoso', 'Fosa de los Destellos, Bosque Abisal, Cueva de los Espejos'),
  t('abismo', 'mechanics', 'Cueva de espejos con luz', 'Redirigir bioluminiscencia en oscuridad total'),
  t('abismo', 'mechanics', 'Lenguaje de colores', 'Comunicarse con criaturas abisales usando patrones de luz'),
  t('abismo', 'art', 'Tileset abisal', 'Oscuridad total, bioluminiscencia, criaturas de luz'),
  t('abismo', 'mechanics', 'Enemigos del Abismo', 'Anglerfish Corruptos, Calamares de Tinta, Corrientes'),

  // Corriente Fronteriza
  t('corriente', 'map', 'Layout de Corriente Fronteriza', 'Canal Principal, Puestos de Guardia, Zona de Exclusión'),
  t('corriente', 'mechanics', 'Misión de patrulla silenciosa', 'Infiltrarse sin ser detectado por corrientes de guardia'),
  t('corriente', 'mechanics', 'Auto-scroll de corrientes', 'Secciones con desplazamiento automático por corrientes'),
  t('corriente', 'art', 'Tileset de frontera', 'Puestos de guardia, corrientes veloces, barreras'),
  t('corriente', 'mechanics', 'Enemigos de Frontera', 'Intrusos de Agua Turbia, Minas, Remolinos'),

  // Mar de Burbujas
  t('burbujas', 'map', 'Layout del Mar de Burbujas', 'Columna de Burbujas, Salón Esfera, Cementerio de Burbujas'),
  t('burbujas', 'mechanics', 'Transporte vertical en burbujas', 'Montar burbujas para ascender entre niveles'),
  t('burbujas', 'mechanics', 'Escolta de burbuja frágil', 'Proteger una burbuja mientras la transportas'),
  t('burbujas', 'art', 'Tileset de burbujas', 'Esferas iridiscentes, columnas ascendentes, espuma'),
  t('burbujas', 'mechanics', 'Enemigos de Burbujas', 'Peces Aguja, Burbujas Falsas, Corrientes, Espuma Densa'),

  // Cúmulo Lluvioso
  t('cumulo', 'map', 'Layout del Cúmulo Lluvioso', 'Nacimiento de la Lluvia, Nube Madre, Trono de la Tormenta'),
  t('cumulo', 'mechanics', 'Balance emocional', 'Calmar la tormenta equilibrando emociones'),
  t('cumulo', 'mechanics', 'Ciclo del agua completo', 'Completar el ciclo evaporación-condensación-precipitación'),
  t('cumulo', 'art', 'Tileset del cúmulo', 'Nubes sólidas, relámpagos, lluvia, arcoíris'),
  t('cumulo', 'mechanics', 'Enemigos del Cúmulo', 'Relámpagos Errantes, Vientos de Altura, Nubes Tóxicas'),

  // Dungeon: El Templo de las Mareas
  t('templo', 'map', 'Piso 1: El Regulador de Corrientes', 'Redirigir corrientes para abrir compuertas'),
  t('templo', 'mechanics', 'Miniboss: El Regulador', 'Mecanismo corrompido con 4 tentáculos'),
  t('templo', 'map', 'Piso 2: La Cámara de Presión', 'Ciclos de nivel de agua alto/bajo'),
  t('templo', 'mechanics', 'Miniboss: La Prensa Abisal', 'Paredes compresoras con cristales vulnerables'),
  t('templo', 'map', 'Piso 3: El Núcleo del Templo', 'Cámara esférica del corazón del océano'),
  t('templo', 'mechanics', 'Boss: El Gran Maelstrom', 'Fase 1: Vórtice Voraz, Fase 2: Sequía Interior, Fase 3: Purificación'),
  t('templo', 'art', 'Tileset del Templo de Mareas', 'Arquitectura sumergida, compuertas, corrientes'),
  t('templo', 'audio', 'Tema del Templo de Mareas', 'Música submarina progresiva + tema del boss'),
  t('templo', 'integration', 'Reward: Esencia de Gota', 'Otorgar 1/3 de El Origen + upgrades de habilidades Drop'),

  // Mecánicas generales del Océano
  t('manantial', 'mechanics', 'Sistema de oxígeno', 'Barra de oxígeno con recarga en burbujas/superficie'),
  t('coralz', 'mechanics', 'Sistema de mareas', 'Ciclo alto/bajo que cambia accesibilidad de zonas'),

  // ═══════════════════════════════════════
  // COSMOS INFINITO — 9 zonas + dungeon (~45 tasks)
  // ═══════════════════════════════════════

  // Chispa Inicial
  t('chispa', 'map', 'Layout de Chispa Inicial', 'Punto Cero, Fragmentos Flotantes, El Filamento'),
  t('chispa', 'mechanics', 'Reencender 5 antorchas primordiales', 'Secuencia de encendido para despertar la zona'),
  t('chispa', 'mechanics', 'Gravedad reducida 50%', 'Sistema de movimiento con saltos largos y flotación'),
  t('chispa', 'art', 'Tileset de chispa', 'Fragmentos flotantes, filamentos de luz, oscuridad'),
  t('chispa', 'mechanics', 'Enemigos de Chispa', 'Cenizas Errantes, Grietas Inestables, Eco del Vacío'),

  // Campo de Tormentas
  t('tormentas', 'map', 'Layout del Campo de Tormentas', 'Ojo de la Tormenta, Torres Conductoras, Arco Voltaico'),
  t('tormentas', 'mechanics', 'Activación de 6 torres', 'Secuencia de activación para crear circuito eléctrico'),
  t('tormentas', 'mechanics', 'Bobina de Tesla', 'Ítem clave: absorción y redirección de electricidad'),
  t('tormentas', 'art', 'Tileset de tormentas', 'Plataformas eléctricas, rayos, campos electromagnéticos'),
  t('tormentas', 'mechanics', 'Enemigos de Tormentas', 'Esfera de Plasma, Relámpago Dirigido, Parásitos Estáticos'),

  // Núcleo Estelar
  t('nucleo', 'map', 'Layout del Núcleo Estelar', 'Cámara de Fusión, Anillos de Convección, Muro de Cenizas'),
  t('nucleo', 'mechanics', 'Alineación de anillos', 'Rotar anillos de convección para abrir caminos'),
  t('nucleo', 'mechanics', 'Medidor de temperatura', 'Sistema de calor que limita el tiempo en zonas ardientes'),
  t('nucleo', 'art', 'Tileset estelar', 'Lava cósmica, anillos de fuego, ceniza estelar'),
  t('nucleo', 'mechanics', 'Enemigos del Núcleo', 'Gusanos de Lava, Erupciones Solares, Escoria Viviente'),

  // Observatorio Celeste
  t('observ', 'map', 'Layout del Observatorio Celeste', 'Gran Lente, Planetario, Biblioteca de Constelaciones'),
  t('observ', 'mechanics', 'Restaurar 7 constelaciones', 'Reconectar estrellas de constelaciones corruptas'),
  t('observ', 'mechanics', 'Lente de Verdad', 'Ítem clave para ver a través de ilusiones'),
  t('observ', 'art', 'Tileset del observatorio', 'Instrumentos astronómicos, lentes, mapas estelares'),
  t('observ', 'mechanics', 'Enemigos del Observatorio', 'Distorsiones Ópticas, Constelaciones Corruptas, Parallax'),

  // Nebulosa Nova
  t('nebulosa', 'map', 'Layout de Nebulosa Nova', 'Epicentro, Filamentos, Capullo de Materia'),
  t('nebulosa', 'mechanics', 'Gravedad cero (360°)', 'Movimiento libre en todas direcciones'),
  t('nebulosa', 'mechanics', 'Recolectar 5 fragmentos de supernova', 'Buscar restos de explosión estelar en la nebulosa'),
  t('nebulosa', 'art', 'Tileset de nebulosa', 'Gases coloridos, filamentos, polvo estelar'),
  t('nebulosa', 'mechanics', 'Enemigos de Nebulosa', 'Remanentes Estelares, Ondas de Choque, Nubes Tóxicas'),

  // Sendero de Cometa
  t('sendero', 'map', 'Layout del Sendero de Cometa', 'Bifurcación Triple, Ecos del Viajero, Reloj de Arena'),
  t('sendero', 'mechanics', 'Persecución de Cometa', 'Seguir a Cometa por su ruta completa a velocidad'),
  t('sendero', 'mechanics', 'Pasaporte Interdimensional', 'Fast travel entre los tres reinos'),
  t('sendero', 'art', 'Tileset del sendero', 'Estela luminosa, bifurcaciones, ecos temporales'),
  t('sendero', 'mechanics', 'Enemigos del Sendero', 'Parásitos de Estela, Fragmentos de Deriva, Espejismos'),

  // Santuario Lunar
  t('lunar', 'map', 'Layout del Santuario Lunar', 'Trono de Plata, Mar de la Tranquilidad, Columnas de Sombra'),
  t('lunar', 'mechanics', 'Fases lunares (4 challenges)', 'Cuatro desafíos basados en fases de la luna'),
  t('lunar', 'mechanics', 'Sombras sólidas como plataformas', 'Mecánica de plataformeo con sombras'),
  t('lunar', 'art', 'Tileset lunar', 'Plata, sombras sólidas, mar de tranquilidad'),
  t('lunar', 'mechanics', 'Enemigos del Santuario', 'Pesadillas, Eclipses Locales, Espejos de Sombra'),

  // Corona del Sol
  t('corona', 'map', 'Layout de Corona del Sol', 'Trono Solar, Protuberancias, Manchas Solares'),
  t('corona', 'mechanics', 'Estabilizar 3 protuberancias', 'Calmar erupciones solares inestables'),
  t('corona', 'mechanics', 'Escudo Térmico', 'Ítem clave de resistencia al calor'),
  t('corona', 'art', 'Tileset solar cósmico', 'Superficie solar, protuberancias, manchas'),
  t('corona', 'mechanics', 'Enemigos de Corona', 'Prominencias Serpentinas, Fotones Hostiles, Viento Solar'),

  // Órbita Final
  t('orbita', 'map', 'Layout de Órbita Final', 'Perigeo, Apogeo, El Anillo'),
  t('orbita', 'mechanics', 'Mundo interior de Planeta', 'Exploración del interior con gravedad invertida'),
  t('orbita', 'mechanics', 'Mecánica de slingshot orbital', 'Usar gravedad para catapultarse entre puntos'),
  t('orbita', 'art', 'Tileset orbital', 'Anillos planetarios, asteroides, vacío silencioso'),
  t('orbita', 'mechanics', 'Enemigos de Órbita', 'Asteroides Orbitantes, Pozos Gravitacionales, Satélites'),

  // Dungeon: La Forja de Estrellas (5 pisos)
  t('forja', 'map', 'Piso 1: Antecámara de los Arquitectos', 'Decodificar inscripciones luminosas'),
  t('forja', 'map', 'Piso 2: Sala de Engranajes', 'Puzzles de rotación de engranajes y plataformas móviles'),
  t('forja', 'map', 'Piso 3: Cámara de Compresión', 'Cámaras de compresión con presión temporal'),
  t('forja', 'map', 'Piso 4: Laboratorio de Fusiones', 'Puzzles de combinación elemental'),
  t('forja', 'map', 'Piso 5: Corazón de la Forja', 'Desactivar 4 pilares de energía bajo calor máximo'),
  t('forja', 'mechanics', 'Boss: Forjador Oscuro', 'Fase 1: Martillo Cósmico, Fase 2: Fusión Corrupta, Fase 3: Estrella Negra'),
  t('forja', 'art', 'Tileset de la Forja', 'Fragua cósmica, engranajes, metal estelar, fuego'),
  t('forja', 'audio', 'Tema de la Forja de Estrellas', 'Música industrial cósmica + tema del boss'),
  t('forja', 'integration', 'Reward: Llama Primordial', 'Esencia de Chispa + acceso al Ritual de los 9'),

  // Mecánicas generales del Cosmos
  t('chispa', 'mechanics', 'Sistema de gravedad variable', 'Zonas con 0%, 30%, 50%, 100%, 200% gravedad'),
  t('nucleo', 'integration', 'Corazón de Hierro Estelar', 'Componente de llave para acceder a la Forja'),
];
