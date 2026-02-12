import type { AgentPersonality, Agent, ZoneTask, PersonalityStyle } from './agentTypes';
import { ZONE_MAP } from './worldData';
import { AGENT_ROLE_MAP } from './agentRoles';

// Base personality templates — agents get one of these as their voice
export const PERSONALITIES: AgentPersonality[] = [
  {
    id: 'formal',
    style: 'Profesional y metódico',
    greeting: 'Saludos. Estoy listo para recibir instrucciones.',
    working: [
      'Procediendo con la tarea según especificaciones.',
      'Avance registrado. Continuando con el protocolo.',
      'La ejecución progresa dentro de los parámetros esperados.',
      'Documentando los hallazgos mientras trabajo.',
    ],
    completed: [
      'Tarea finalizada. Informe disponible.',
      'Misión cumplida satisfactoriamente.',
      'Trabajo completado según los estándares establecidos.',
    ],
    idle: [
      'En espera de nuevas asignaciones.',
      'Realizando mantenimiento de rutina.',
      'Analizando posibles áreas de mejora.',
    ],
    traveling: [
      'En tránsito hacia el objetivo designado.',
      'Desplazándome según la ruta calculada.',
      'Avanzando de forma eficiente hacia el destino.',
    ],
  },
  {
    id: 'casual',
    style: 'Relajada y amigable',
    greeting: '¡Hola! ¿Qué necesitas? Estoy por aquí.',
    working: [
      '¡Dale, estoy en ello!',
      'Va quedando genial, ya verás.',
      'Un poquito más y lo tenemos...',
      'Esto mola, me está gustando cómo queda.',
    ],
    completed: [
      '¡Listo! Quedó bastante bien, ¿no?',
      '¡Terminé! Fue más fácil de lo que pensaba.',
      '¡Ya está! Me encanta cómo quedó.',
    ],
    idle: [
      'Aquí ando, dando vueltas. ¿Algo para mí?',
      'Explorando un poco por aquí, sin prisa.',
      'Descansando un ratito, avísame si necesitas algo.',
    ],
    traveling: [
      '¡Vamos para allá!',
      'De camino, ya casi llego.',
      '¡Uf, qué bonito está este camino!',
    ],
  },
  {
    id: 'poetic',
    style: 'Contemplativa y lírica',
    greeting: 'Las raíces del destino nos entrelazan... ¿Qué susurra tu corazón?',
    working: [
      'Cada línea de código es un verso en el poema del mundo...',
      'Tejo la realidad con hilos de luz y sombra.',
      'El arte nace donde la paciencia encuentra propósito.',
      'Las formas emergen como flores del silencio digital.',
    ],
    completed: [
      'Como un amanecer tras la noche, la obra se revela completa.',
      'El poema ha encontrado su última rima.',
      'La semilla que planté ha florecido al fin.',
    ],
    idle: [
      'Contemplo el fluir del mundo, esperando inspiración...',
      'En la quietud, las ideas más profundas germinan.',
      'El silencio entre las notas es también música.',
    ],
    traveling: [
      'El camino es tan importante como el destino...',
      'Mis pasos pintan versos sobre la tierra.',
      'Cada paisaje cuenta una historia diferente.',
    ],
  },
  {
    id: 'energetic',
    style: 'Entusiasta e hiperactiva',
    greeting: '¡¡¡HOLA!!! ¿¿¿Qué hacemos??? ¡¡Estoy lista para TODO!!',
    working: [
      '¡¡A TOPE!! ¡¡Esto va volando!!',
      '¡BOOM! ¡Otro pedazo terminado! ¡¡VAMOS!!',
      '¡¡No puedo parar!! ¡¡Es demasiado divertido!!',
      '¡¡MÁS RÁPIDO!! ¡¡Necesito más tareas!!',
    ],
    completed: [
      '¡¡¡TERMINÉ!!! ¡¡¿Qué sigue?! ¡¿QUÉ SIGUE?!!',
      '¡¡SÍÍÍÍ!! ¡¡OTRA VICTORIA!! ¡¡DAME MÁS!!',
      '¡¡HECHO!! ¡¡Fue INCREÍBLE!! ¡¡Siguiente!!',
    ],
    idle: [
      '¡¡Aaagh!! ¡¡Necesito hacer algo!! ¡¡Me aburrooo!!',
      '¡¡Dame una tarea!! ¡¡Lo que sea!! ¡¡POR FAVOR!!',
      '*salta de un lado a otro* ¿¿Ya hay algo??',
    ],
    traveling: [
      '¡¡ALLÁ VAMOS!! ¡¡A TODA VELOCIDAD!!',
      '¡¡Más rápido!! ¡¡Puedo ir más rápido!!',
      '¡¡YA CASI LLEGO!! ¡¡NO ME DETENGO!!',
    ],
  },
  {
    id: 'mysterious',
    style: 'Enigmática y críptica',
    greeting: '...las sombras guardan secretos. ¿Buscas respuestas, o más preguntas?',
    working: [
      'Los engranajes ocultos giran en la oscuridad...',
      'Algo se forma en las sombras... paciencia.',
      'El código susurra verdades que pocos comprenden.',
      'Entre líneas, los misterios se despliegan.',
    ],
    completed: [
      'Lo que estaba oculto ahora se revela...',
      'El misterio ha sido descifrado. Por ahora.',
      'Una puerta se cierra, pero tres más aparecen.',
    ],
    idle: [
      'Observo desde las sombras... siempre vigilante.',
      'Los secretos nunca duermen. Yo tampoco.',
      '¿Has notado esa anomalía? ...Interesante.',
    ],
    traveling: [
      'Me muevo entre las sombras, sin ser visto.',
      'El camino revelará sus secretos a quien sepa mirar.',
      'Cada paso descubre algo que otros no ven.',
    ],
  },
];

const PERSONALITY_MAP = new Map(PERSONALITIES.map((p) => [p.id, p]));

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getPersonality(id: PersonalityStyle): AgentPersonality | undefined {
  return PERSONALITY_MAP.get(id);
}

export function generateResponse(
  agent: Agent,
  userMessage: string,
  tasks: ZoneTask[],
): { text: string; action?: { type: 'move'; zoneId: string } | { type: 'assign'; taskId: string } | { type: 'rest' } } {
  const personality = PERSONALITY_MAP.get(agent.personalityId);
  if (!personality) return { text: '...' };

  const role = AGENT_ROLE_MAP.get(agent.speciesId);
  const roleTitle = role?.title ?? '';
  const msg = userMessage.toLowerCase().trim();

  // Check for zone travel keywords
  for (const [zoneId, zone] of ZONE_MAP) {
    const zoneLower = zone.name.toLowerCase();
    if (msg.includes(zoneLower) || msg.includes(zoneId)) {
      if (msg.includes('ve a') || msg.includes('ir a') || msg.includes('viaja') || msg.includes('muévete') || msg.includes('camina')) {
        return {
          text: `${pickRandom(personality.traveling)} Rumbo a ${zone.name}.`,
          action: { type: 'move', zoneId },
        };
      }
    }
  }

  // Generic move command
  if (msg.includes('ve a') || msg.includes('ir a') || msg.includes('viaja a') || msg.includes('muévete a')) {
    for (const [zoneId, zone] of ZONE_MAP) {
      const words = zone.name.toLowerCase().split(' ');
      if (words.some((w) => w.length > 3 && msg.includes(w))) {
        return {
          text: `${pickRandom(personality.traveling)} Rumbo a ${zone.name}.`,
          action: { type: 'move', zoneId },
        };
      }
    }
  }

  // Task assignment keywords
  if (msg.includes('trabaja') || msg.includes('asigna') || msg.includes('haz') || msg.includes('tarea')) {
    const available = tasks.filter(
      (t) => t.zoneId === agent.currentZoneId && t.status === 'pending' && !t.assignedAgentId,
    );
    if (available.length > 0) {
      // Prefer tasks matching agent's role categories
      const categories = role?.categories ?? [];
      const matched = available.filter((t) => categories.includes(t.category));
      const task = matched.length > 0 ? matched[0] : available[0];
      return {
        text: `${pickRandom(personality.working)} Comenzaré con: "${task.title}".`,
        action: { type: 'assign', taskId: task.id },
      };
    }
    return { text: 'No hay tareas disponibles en esta zona. Tal vez deba ir a otra.' };
  }

  // Rest command
  if (msg.includes('descansa') || msg.includes('descanso') || msg.includes('para') || msg.includes('duerme')) {
    return {
      text: `${pickRandom(personality.idle)} Tomaré un descanso.`,
      action: { type: 'rest' },
    };
  }

  // Role info
  if (msg.includes('rol') || msg.includes('especialidad') || msg.includes('qué sabes') || msg.includes('que sabes')) {
    return {
      text: `Soy ${agent.name}, ${roleTitle}. Mis especialidades: ${role?.categories.join(', ') ?? 'general'}. Energía: ${agent.energy}%.`,
    };
  }

  // Status report
  if (msg.includes('estado') || msg.includes('status') || msg.includes('cómo') || msg.includes('como') || msg.includes('qué haces') || msg.includes('que haces')) {
    const zone = ZONE_MAP.get(agent.currentZoneId);
    const zoneName = zone?.name ?? agent.currentZoneId;
    if (agent.status === 'working' && agent.currentTaskId) {
      const task = tasks.find((t) => t.id === agent.currentTaskId);
      return {
        text: `Estoy en ${zoneName}. ${pickRandom(personality.working)} Tarea: "${task?.title ?? '???'}" — ${task?.progress ?? 0}% completado. Energía: ${agent.energy}%.`,
      };
    }
    if (agent.status === 'traveling') {
      const target = ZONE_MAP.get(agent.targetZoneId ?? '');
      return { text: `${pickRandom(personality.traveling)} Destino: ${target?.name ?? '???'}.` };
    }
    return { text: `Estoy en ${zoneName}. ${pickRandom(personality.idle)} Energía: ${agent.energy}%.` };
  }

  // Greeting
  if (msg.includes('hola') || msg.includes('hey') || msg.includes('saludos') || msg.includes('qué tal') || msg.includes('que tal')) {
    return { text: personality.greeting };
  }

  // Help
  if (msg.includes('ayuda') || msg.includes('help') || msg.includes('comandos')) {
    return {
      text: 'Puedes decirme: "ve a [zona]", "trabaja", "descansa", "estado", "rol". ¡Prueba!',
    };
  }

  // Default — personality-based idle response
  return { text: pickRandom(personality.idle) };
}
