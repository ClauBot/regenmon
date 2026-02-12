import type { ZoneTask, TaskCategory } from './agentTypes';

// Difficulty by keyword
const DIFFICULTY_MAP: Record<string, number> = {
  'Boss': 5, 'Diseñar': 3, 'Implementar': 3, 'Configurar': 2, 'Crear': 2,
  'Optimizar': 4, 'Investigar': 2, 'Escribir': 2, 'Migrar': 4, 'Definir': 2,
  'Refactorizar': 4, 'Automatizar': 3, 'Auditar': 3, 'Planificar': 2,
};

function getDifficulty(title: string, category: TaskCategory): number {
  for (const [key, val] of Object.entries(DIFFICULTY_MAP)) {
    if (title.includes(key)) return val;
  }
  if (category === 'infra') return 3;
  if (category === 'codigo') return 3;
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
    estimatedTicks: difficulty * 40,
  };
}

export const INITIAL_TASKS: ZoneTask[] = [
  // ═══════════════════════════════════════
  // HQ — Startup Central (~10 tasks)
  // ═══════════════════════════════════════
  t('hq', 'producto', 'Definir misión y visión de la startup', 'Redactar el propósito fundacional y la visión a 5 años'),
  t('hq', 'producto', 'Crear pitch deck para inversores', 'Deck de 12 slides con problema, solución, mercado, tracción'),
  t('hq', 'producto', 'Definir cultura y valores del equipo', 'Documentar los 5 valores fundamentales de la empresa'),
  t('hq', 'infra', 'Configurar workspace de la startup', 'Slack, Notion, GitHub org, email corporativo'),
  t('hq', 'marketing', 'Registrar dominio y redes sociales', 'Dominio .com, Twitter, LinkedIn, Instagram'),
  t('hq', 'codigo', 'Inicializar monorepo del proyecto', 'Setup con Turborepo, packages, apps, shared configs'),
  t('hq', 'diseno', 'Crear moodboard fundacional', 'Estilo visual, inspiraciones, tono de la marca'),
  t('hq', 'producto', 'Planificar OKRs del primer trimestre', 'Objectives + Key Results para Q1'),
  t('hq', 'infra', 'Definir stack tecnológico', 'Decisión sobre frontend, backend, DB, hosting, CI'),
  t('hq', 'marketing', 'Crear landing page de "coming soon"', 'Landing minimalista con email capture'),

  // ═══════════════════════════════════════
  // PRODUCTO — 5 zonas + dungeon (~60 tasks)
  // ═══════════════════════════════════════

  // Roadmap
  t('roadmap', 'producto', 'Definir OKRs del Q1', 'Establecer objetivos y resultados clave para el primer trimestre'),
  t('roadmap', 'producto', 'Crear backlog inicial del producto', 'Lista priorizada de features para los primeros 3 meses'),
  t('roadmap', 'producto', 'Mapear el journey del usuario', 'Desde descubrimiento hasta retención y referral'),
  t('roadmap', 'producto', 'Priorizar features con RICE scoring', 'Aplicar Reach, Impact, Confidence, Effort a cada feature'),
  t('roadmap', 'producto', 'Planificar sprints del mes 1', 'Sprint planning para las primeras 2 semanas'),
  t('roadmap', 'producto', 'Definir métricas norte-star', 'La métrica principal que define el éxito del producto'),
  t('roadmap', 'producto', 'Crear timeline de milestones', 'Hitos clave: MVP, beta, launch, Series A'),
  t('roadmap', 'producto', 'Documentar product principles', '5 principios que guían todas las decisiones de producto'),
  t('roadmap', 'producto', 'Planificar roadmap público', 'Lo que compartimos con usuarios vs lo interno'),
  t('roadmap', 'producto', 'Definir criterios de éxito del MVP', 'Métricas mínimas para considerar el MVP exitoso'),

  // User Research
  t('research', 'producto', 'Entrevistar 10 usuarios sobre onboarding', 'Sesiones de 30 min con early adopters sobre experiencia inicial'),
  t('research', 'producto', 'Crear persona primaria', 'Demographics, pain points, goals, behaviors del usuario ideal'),
  t('research', 'producto', 'Crear persona secundaria', 'Segundo segmento de usuario con necesidades diferentes'),
  t('research', 'producto', 'Diseñar encuesta de satisfacción', 'NPS + preguntas abiertas sobre experiencia general'),
  t('research', 'producto', 'Análisis competitivo de 5 competidores', 'Features, pricing, UX, market position de cada uno'),
  t('research', 'producto', 'Mapear jobs-to-be-done', 'Los 5 principales jobs que el usuario quiere resolver'),
  t('research', 'producto', 'Crear protocolo de user testing', 'Script estandarizado para sesiones de usability testing'),
  t('research', 'producto', 'Analizar feedback de beta testers', 'Categorizar y priorizar feedback de los primeros 50 usuarios'),
  t('research', 'producto', 'Diseñar diary study de 2 semanas', 'Participantes documentan su experiencia diaria con el producto'),
  t('research', 'producto', 'Realizar card sorting para IA', 'Sesión de card sorting para definir arquitectura de información'),

  // Feature Design
  t('feature', 'producto', 'Escribir PRD del sistema de pagos', 'Product Requirements Document completo para billing'),
  t('feature', 'producto', 'Diseñar flujo de onboarding', 'Wireframes + copy para los primeros 5 pasos del usuario'),
  t('feature', 'producto', 'Escribir PRD del sistema de notificaciones', 'Push, email, in-app; frecuencia y preferencias'),
  t('feature', 'producto', 'Diseñar sistema de permisos y roles', 'Admin, editor, viewer + permisos granulares'),
  t('feature', 'producto', 'Prototipar dashboard principal', 'Mockup interactivo de la vista principal post-login'),
  t('feature', 'producto', 'Diseñar flujo de invitación de equipo', 'Invite por email, link, o dominio corporativo'),
  t('feature', 'producto', 'Escribir PRD de integraciones', 'Slack, Zapier, webhooks, API pública'),
  t('feature', 'producto', 'Diseñar sistema de búsqueda', 'Fuzzy search, filtros, resultados paginados'),
  t('feature', 'diseno', 'Crear wireframes de settings', 'Configuración de cuenta, equipo, billing, integraciones'),
  t('feature', 'producto', 'Definir feature flags para launch', 'Qué features van detrás de flags para gradual rollout'),

  // Specs & Docs
  t('specs', 'producto', 'Escribir especificación de API pública', 'OpenAPI 3.0 spec con todos los endpoints'),
  t('specs', 'producto', 'Documentar data model completo', 'ERD con todas las entidades y relaciones'),
  t('specs', 'producto', 'Crear guía de estilo de copy', 'Tono, voz, terminología, ejemplos de do/don\'t'),
  t('specs', 'producto', 'Escribir changelog del MVP', 'Release notes detalladas de v1.0'),
  t('specs', 'producto', 'Documentar flujos de error', 'Qué pasa cuando falla auth, payment, API, etc.'),
  t('specs', 'producto', 'Crear glosario de dominio', 'Términos técnicos y de negocio unificados'),
  t('specs', 'producto', 'Escribir guía de contribución', 'CONTRIBUTING.md con workflow y estándares'),
  t('specs', 'producto', 'Documentar decisiones de arquitectura', 'ADRs (Architecture Decision Records) de las 10 principales'),
  t('specs', 'codigo', 'Generar documentación de API con Swagger', 'Swagger UI desplegado para developers externos'),
  t('specs', 'producto', 'Crear knowledge base para soporte', 'FAQ y artículos de help center para usuarios'),

  // Analytics
  t('analytics', 'producto', 'Configurar dashboard de Mixpanel', 'Funnels, retention, key events del producto'),
  t('analytics', 'producto', 'Definir eventos de tracking', 'Listado completo de eventos y propiedades a trackear'),
  t('analytics', 'producto', 'Implementar funnel de conversión', 'Sign up → Onboarding → Activation → Retention'),
  t('analytics', 'producto', 'Crear dashboard de retention', 'Cohort analysis semanal y mensual'),
  t('analytics', 'codigo', 'Integrar Segment para data pipeline', 'Single API para enviar datos a múltiples destinos'),
  t('analytics', 'producto', 'Configurar alertas de métricas', 'Alertas cuando métricas clave caen bajo umbral'),
  t('analytics', 'producto', 'Diseñar experimento A/B de pricing', 'Test de 3 planes de pricing con diferentes anchors'),
  t('analytics', 'producto', 'Analizar churn de primer mes', 'Identificar las razones principales de abandono'),
  t('analytics', 'producto', 'Crear reportes semanales automáticos', 'Email semanal con KPIs al equipo de liderazgo'),
  t('analytics', 'producto', 'Implementar health score de usuarios', 'Score compuesto de engagement, usage, satisfaction'),

  // Dungeon: El Pivot
  t('pivot', 'producto', 'Analizar señales de product-market fit', 'Sean Ellis test: ¿qué % estaría "muy decepcionado" sin el producto?'),
  t('pivot', 'producto', 'Evaluar pivotes posibles', 'Documentar 3 direcciones alternativas con pros/contras'),
  t('pivot', 'producto', 'Planificar el pivot mínimo', 'Plan de transición con menor disruption posible'),
  t('pivot', 'producto', 'Boss: La Decisión Imposible', 'Tomar la decisión final: seguir, pivotar, o cerrar'),

  // ═══════════════════════════════════════
  // CÓDIGO — 5 zonas + dungeon (~60 tasks)
  // ═══════════════════════════════════════

  // Frontend
  t('frontend', 'codigo', 'Implementar componente de login con OAuth', 'Google, GitHub OAuth + email/password fallback'),
  t('frontend', 'codigo', 'Crear design system en Storybook', 'Botones, inputs, modals, cards, tooltips'),
  t('frontend', 'codigo', 'Implementar routing con React Router', 'Rutas protegidas, lazy loading, 404'),
  t('frontend', 'codigo', 'Crear formulario de registro multi-step', '3 pasos: email, perfil, workspace setup'),
  t('frontend', 'codigo', 'Implementar dark/light mode', 'Theme provider con CSS variables y persistencia'),
  t('frontend', 'codigo', 'Crear componente de tabla con sorting', 'Columnas ordenables, paginación, filtros'),
  t('frontend', 'codigo', 'Implementar notificaciones toast', 'Sistema de toasts con queue y auto-dismiss'),
  t('frontend', 'diseno', 'Implementar animaciones de transición', 'Page transitions, skeleton loaders, micro-interactions'),
  t('frontend', 'codigo', 'Crear hook de form validation', 'useForm con zod schemas, error messages, dirty tracking'),
  t('frontend', 'codigo', 'Implementar drag & drop de tareas', 'Kanban board con dnd-kit, persistencia de orden'),

  // Backend
  t('backend', 'codigo', 'Diseñar schema de base de datos para usuarios', 'Users, teams, memberships, invitations, sessions'),
  t('backend', 'codigo', 'Implementar autenticación JWT', 'Access + refresh tokens, middleware de auth'),
  t('backend', 'codigo', 'Crear servicio de emails transaccionales', 'Welcome, reset password, invite, con templates'),
  t('backend', 'codigo', 'Implementar rate limiting', 'Redis-based limiter por IP y por usuario'),
  t('backend', 'codigo', 'Crear sistema de webhooks', 'Registro, delivery, retry con exponential backoff'),
  t('backend', 'codigo', 'Implementar file upload a S3', 'Presigned URLs, validación de tipo/tamaño, CDN'),
  t('backend', 'codigo', 'Crear job queue para tareas async', 'Bull/BullMQ con workers, retries, dead letter'),
  t('backend', 'codigo', 'Implementar soft delete en modelos', 'deletedAt field, queries filtradas, restore'),
  t('backend', 'codigo', 'Crear middleware de logging estructurado', 'Request ID, timing, user context en cada log'),
  t('backend', 'codigo', 'Implementar multi-tenancy', 'Aislamiento de datos por workspace/team'),

  // APIs
  t('apis', 'codigo', 'Crear endpoint REST para /api/payments', 'CRUD de payment methods + subscription management'),
  t('apis', 'codigo', 'Implementar GraphQL schema', 'Types, queries, mutations para las entidades principales'),
  t('apis', 'codigo', 'Crear API de búsqueda con Elasticsearch', 'Full-text search con fuzzy matching y facets'),
  t('apis', 'codigo', 'Implementar versionado de API', 'v1/v2 con deprecation headers y migration guide'),
  t('apis', 'codigo', 'Crear endpoint de analytics público', 'API para dashboards embeddables en clientes'),
  t('apis', 'codigo', 'Implementar WebSocket para real-time', 'Conexiones persistentes para updates en vivo'),
  t('apis', 'codigo', 'Crear API de exportación (CSV/PDF)', 'Export async con progress tracking y download link'),
  t('apis', 'codigo', 'Implementar API de integraciones', 'OAuth flow para conectar Slack, Notion, etc.'),
  t('apis', 'codigo', 'Documentar errores con códigos consistentes', 'Error catalog con códigos, messages, y sugerencias'),
  t('apis', 'codigo', 'Crear endpoint de health check', '/health con status de DB, cache, queue, external services'),

  // Base de Datos
  t('database', 'codigo', 'Optimizar query N+1 en listado de productos', 'Eager loading con JOINs o DataLoader'),
  t('database', 'codigo', 'Crear índices para queries frecuentes', 'EXPLAIN ANALYZE + composite indexes'),
  t('database', 'codigo', 'Implementar migraciones con Prisma', 'Schema versioning, seed data, rollback plan'),
  t('database', 'codigo', 'Configurar read replicas', 'Primary para writes, replicas para reads pesados'),
  t('database', 'codigo', 'Implementar cache con Redis', 'Cache de queries costosas con invalidación inteligente'),
  t('database', 'codigo', 'Diseñar schema de audit log', 'Quién hizo qué, cuándo, con diff de cambios'),
  t('database', 'codigo', 'Crear backup automatizado', 'Backups diarios a S3 con retention policy de 30 días'),
  t('database', 'codigo', 'Implementar partitioning de tablas grandes', 'Particionar events table por fecha'),
  t('database', 'codigo', 'Optimizar conexiones con connection pooling', 'PgBouncer config para manejar 1000+ connections'),
  t('database', 'codigo', 'Migrar de JSON columns a tablas normalizadas', 'Refactorizar settings y metadata a tablas propias'),

  // Algoritmos
  t('algorithms', 'codigo', 'Implementar sistema de recomendaciones', 'Collaborative filtering para sugerir contenido'),
  t('algorithms', 'codigo', 'Crear algoritmo de matching', 'Asignar tareas a usuarios basado en skills y carga'),
  t('algorithms', 'codigo', 'Optimizar algoritmo de búsqueda', 'De O(n²) a O(n log n) en search results ranking'),
  t('algorithms', 'codigo', 'Implementar rate limiter con token bucket', 'Algoritmo de token bucket distribuido con Redis'),
  t('algorithms', 'codigo', 'Crear sistema de scoring dinámico', 'Score compuesto con pesos ajustables por contexto'),
  t('algorithms', 'codigo', 'Implementar conflict resolution para CRDT', 'Resolución de conflictos en edición colaborativa'),
  t('algorithms', 'codigo', 'Optimizar serialización de datos', 'Protobuf vs MessagePack vs JSON benchmark'),
  t('algorithms', 'codigo', 'Crear algoritmo de retry inteligente', 'Exponential backoff con jitter y circuit breaker'),
  t('algorithms', 'codigo', 'Implementar pagination con cursores', 'Cursor-based pagination para feeds infinitos'),
  t('algorithms', 'codigo', 'Diseñar sistema de prioridad de colas', 'Priority queue con fairness y starvation prevention'),

  // Dungeon: Legacy Code
  t('legacy', 'codigo', 'Auditar deuda técnica del monolito', 'Identificar las 10 áreas más críticas de tech debt'),
  t('legacy', 'codigo', 'Refactorizar módulo de autenticación', 'De callbacks a async/await, eliminar globals'),
  t('legacy', 'codigo', 'Migrar de JavaScript a TypeScript', 'Migración gradual con strict mode incremental'),
  t('legacy', 'codigo', 'Boss: El Código Heredado', 'Reescribir el módulo core sin romper backwards compat'),

  // ═══════════════════════════════════════
  // DISEÑO — 5 zonas + dungeon (~60 tasks)
  // ═══════════════════════════════════════

  // UI Design
  t('uidesign', 'diseno', 'Diseñar sistema de design tokens', 'Colores, spacing, typography, border-radius, shadows'),
  t('uidesign', 'diseno', 'Crear component library en Figma', 'Botones, inputs, cards, modals, dropdowns, etc.'),
  t('uidesign', 'diseno', 'Diseñar paleta de colores accesible', 'WCAG AA contrast ratios para todos los pares'),
  t('uidesign', 'diseno', 'Crear escala tipográfica', 'Font sizes, line heights, letter spacing consistency'),
  t('uidesign', 'diseno', 'Diseñar iconografía custom', 'Set de 40 iconos en estilo consistente'),
  t('uidesign', 'diseno', 'Crear grid system de 12 columnas', 'Breakpoints, gutters, margins para cada viewport'),
  t('uidesign', 'diseno', 'Diseñar estados de componentes', 'Default, hover, active, disabled, error, loading'),
  t('uidesign', 'diseno', 'Crear library de ilustraciones', 'Empty states, onboarding, error pages, celebrations'),
  t('uidesign', 'diseno', 'Diseñar sistema de elevación', 'Shadow levels: card, dropdown, modal, toast'),
  t('uidesign', 'diseno', 'Documentar design system en Storybook', 'Cada componente con variantes y documentación'),

  // UX Research
  t('uxresearch', 'diseno', 'Crear mapa de experiencia del checkout', 'Touchpoints, emotions, pain points del flujo de pago'),
  t('uxresearch', 'diseno', 'Diseñar user flow del onboarding', 'Diagrama completo desde signup hasta primer valor'),
  t('uxresearch', 'diseno', 'Realizar test de usabilidad remoto', '5 participantes, 3 tareas, think-aloud protocol'),
  t('uxresearch', 'diseno', 'Crear heuristic evaluation', 'Evaluar UI contra las 10 heurísticas de Nielsen'),
  t('uxresearch', 'diseno', 'Diseñar journey map del primer mes', 'Week 1-4 experience con touchpoints y opportunities'),
  t('uxresearch', 'diseno', 'Analizar heatmaps con Hotjar', 'Clicks, scroll depth, rage clicks en páginas clave'),
  t('uxresearch', 'diseno', 'Crear accessibility audit', 'Screen reader testing, keyboard nav, color contrast'),
  t('uxresearch', 'diseno', 'Diseñar test A/B del pricing page', 'Variantes de layout, copy, y CTA para conversion'),
  t('uxresearch', 'diseno', 'Mapear information architecture', 'Sitemap completo con card sorting validation'),
  t('uxresearch', 'diseno', 'Crear report de UX findings', 'Documento ejecutivo con hallazgos y recomendaciones'),

  // Branding
  t('branding', 'diseno', 'Diseñar logo en 3 variantes', 'Full, icono, wordmark — claro y oscuro'),
  t('branding', 'diseno', 'Crear brand guidelines document', 'Logo usage, clear space, colors, typography, tone'),
  t('branding', 'diseno', 'Diseñar business cards', 'Formato estándar + digital vCard'),
  t('branding', 'diseno', 'Crear social media templates', 'Templates para Twitter, LinkedIn, Instagram posts'),
  t('branding', 'diseno', 'Diseñar email signature corporativa', 'HTML signature con logo, nombre, rol, links'),
  t('branding', 'diseno', 'Crear presentación deck template', 'Slides master con estilos de marca aplicados'),
  t('branding', 'diseno', 'Diseñar favicon y app icons', 'Favicon multi-size, iOS, Android, PWA icons'),
  t('branding', 'diseno', 'Crear assets para Product Hunt', 'Thumbnail, gallery screenshots, logo formats'),
  t('branding', 'diseno', 'Diseñar merchandise kit', 'Stickers, t-shirts, tazas con branding'),
  t('branding', 'diseno', 'Crear motion logo animation', 'Logo animado para video intros y loading screens'),

  // Animaciones
  t('animations', 'diseno', 'Implementar transiciones de página con Framer Motion', 'Page enter/exit animations con layout animations'),
  t('animations', 'diseno', 'Crear skeleton loaders', 'Shimmer placeholders para cards, lists, dashboards'),
  t('animations', 'diseno', 'Diseñar loading spinner de marca', 'Spinner custom que refleja la identidad de marca'),
  t('animations', 'diseno', 'Implementar micro-interactions', 'Button clicks, toggle switches, checkbox animations'),
  t('animations', 'diseno', 'Crear animación de onboarding', 'Secuencia animada de bienvenida con confetti'),
  t('animations', 'diseno', 'Diseñar hover states animados', 'Cards con lift, buttons con ripple, links con underline'),
  t('animations', 'diseno', 'Implementar scroll-based animations', 'Parallax suave, fade-in on scroll, sticky headers'),
  t('animations', 'diseno', 'Crear empty state animations', 'Ilustraciones animadas para estados vacíos'),
  t('animations', 'diseno', 'Diseñar notification entrance', 'Slide-in con bounce para toasts y banners'),
  t('animations', 'diseno', 'Implementar gesture animations para mobile', 'Swipe, pull-to-refresh, pinch-to-zoom'),

  // Responsive
  t('responsive', 'diseno', 'Implementar mobile-first layout', 'Refactor de desktop-first a mobile-first CSS'),
  t('responsive', 'diseno', 'Crear breakpoint system', '320, 480, 768, 1024, 1280, 1536 breakpoints'),
  t('responsive', 'diseno', 'Diseñar navegación responsive', 'Desktop: sidebar, tablet: top bar, mobile: bottom nav'),
  t('responsive', 'diseno', 'Optimizar imágenes para multi-DPI', 'srcset con 1x, 2x, 3x + WebP fallback'),
  t('responsive', 'diseno', 'Implementar PWA manifest', 'manifest.json, service worker, installable app'),
  t('responsive', 'diseno', 'Crear layouts fluid con CSS Grid', 'Grid áreas que se reorganizan por viewport'),
  t('responsive', 'diseno', 'Diseñar touch targets accesibles', 'Mínimo 44x44px para todos los elementos tap'),
  t('responsive', 'diseno', 'Implementar lazy loading de imágenes', 'IntersectionObserver + placeholder blur'),
  t('responsive', 'diseno', 'Optimizar fuentes para mobile', 'font-display: swap, subset de caracteres'),
  t('responsive', 'diseno', 'Crear viewport testing suite', 'Screenshots automáticos en 6 viewports'),

  // Dungeon: El Redesign
  t('redesign', 'diseno', 'Catalogar feedback contradictorio del cliente', 'Organizar 50+ piezas de feedback inconsistente'),
  t('redesign', 'diseno', 'Crear 3 propuestas de redesign', 'Tres direcciones radicalmente diferentes'),
  t('redesign', 'diseno', 'Implementar redesign en tiempo récord', 'Sprint de 48h para entregar el nuevo diseño'),
  t('redesign', 'diseno', 'Boss: El Cliente Indeciso', 'Defender el diseño final contra 17 rondas de revisiones'),

  // ═══════════════════════════════════════
  // MARKETING — 5 zonas + dungeon (~60 tasks)
  // ═══════════════════════════════════════

  // SEO
  t('seo', 'marketing', 'Investigar keywords con Ahrefs', 'Top 50 keywords por volumen, dificultad y relevancia'),
  t('seo', 'marketing', 'Crear estrategia de content clusters', '5 pillar pages con 10 cluster articles cada una'),
  t('seo', 'marketing', 'Optimizar meta tags de todas las páginas', 'Title, description, og:image para cada ruta'),
  t('seo', 'marketing', 'Implementar schema markup', 'JSON-LD para FAQ, HowTo, Product, Organization'),
  t('seo', 'marketing', 'Crear sitemap XML dinámico', 'Sitemap auto-generado con prioridades y frecuencias'),
  t('seo', 'marketing', 'Configurar Google Search Console', 'Verificación, sitemap submit, monitoring de errores'),
  t('seo', 'marketing', 'Diseñar link building strategy', 'Guest posts, partnerships, broken link building'),
  t('seo', 'marketing', 'Optimizar Core Web Vitals', 'LCP < 2.5s, FID < 100ms, CLS < 0.1'),
  t('seo', 'marketing', 'Crear landing pages por keyword', '10 landing pages optimizadas para top keywords'),
  t('seo', 'marketing', 'Implementar canonical URLs', 'Evitar duplicate content con canonicals correctos'),

  // Redes Sociales
  t('social', 'marketing', 'Crear calendario editorial mensual', '30 posts planificados con copy, visual, y horario'),
  t('social', 'marketing', 'Diseñar templates para Twitter/X', 'Thread templates, quote cards, poll designs'),
  t('social', 'marketing', 'Planificar estrategia de LinkedIn', 'Personal branding del CEO + company page content'),
  t('social', 'marketing', 'Crear contenido viral para TikTok', '5 videos cortos mostrando el producto en acción'),
  t('social', 'marketing', 'Implementar social listening', 'Monitorear menciones, keywords, competidores'),
  t('social', 'marketing', 'Diseñar engagement strategy', 'Responder comentarios, DMs, mentions en < 2h'),
  t('social', 'marketing', 'Crear programa de embajadores', 'Seleccionar 10 early adopters como brand advocates'),
  t('social', 'marketing', 'Planificar colaboraciones con influencers', 'Outreach a 20 micro-influencers del nicho'),
  t('social', 'marketing', 'Analizar métricas de social media', 'Engagement rate, reach, follower growth semanal'),
  t('social', 'marketing', 'Crear serie de Twitter Spaces', 'Weekly spaces sobre temas relevantes del industria'),

  // Contenido
  t('content', 'marketing', 'Escribir blog post de launch', 'Historia del fundador + visión del producto'),
  t('content', 'marketing', 'Crear video demo de 2 minutos', 'Screencast con voiceover mostrando features clave'),
  t('content', 'marketing', 'Escribir caso de estudio de beta tester', 'Problema → Solución → Resultados con datos'),
  t('content', 'marketing', 'Crear newsletter semanal', 'Template + primeros 4 issues con industry insights'),
  t('content', 'marketing', 'Escribir comparativa "nosotros vs alternativas"', 'Feature matrix honesta contra 3 competidores'),
  t('content', 'marketing', 'Crear playbook de onboarding', 'Guía paso a paso para nuevos usuarios'),
  t('content', 'marketing', 'Producir podcast pilot', 'Episodio 1: "Por qué creamos esto" — 20 min'),
  t('content', 'marketing', 'Diseñar infographic del mercado', 'Visualización del TAM/SAM/SOM con data points'),
  t('content', 'marketing', 'Escribir 10 FAQs del producto', 'Preguntas frecuentes con respuestas claras'),
  t('content', 'marketing', 'Crear templates descargables', 'Lead magnets: checklists, templates, guides'),

  // Growth & Ads
  t('growth', 'marketing', 'Diseñar campaña de launch en Product Hunt', 'Timing, assets, outreach, first-day strategy'),
  t('growth', 'marketing', 'Crear funnel de ads en Google', 'Search + Display ads para top keywords'),
  t('growth', 'marketing', 'Implementar programa de referrals', 'Invita amigo, ambos reciben crédito'),
  t('growth', 'marketing', 'Diseñar A/B test de landing page', '3 variantes: hero, CTA, social proof'),
  t('growth', 'marketing', 'Configurar retargeting en Meta', 'Pixel + audiences + lookalikes para re-engagement'),
  t('growth', 'marketing', 'Crear email drip campaign', '7 emails de onboarding durante 14 días'),
  t('growth', 'marketing', 'Implementar in-app referral widget', 'Share button con link trackeable y rewards'),
  t('growth', 'marketing', 'Optimizar CAC con unit economics', 'Calcular LTV/CAC ratio y optimizar canales'),
  t('growth', 'marketing', 'Diseñar partnership growth strategy', 'Integrations marketplace como canal de adquisición'),
  t('growth', 'marketing', 'Crear viral loop en el producto', 'Feature que incentiva compartir naturalmente'),

  // Comunidad
  t('community', 'marketing', 'Organizar primer meetup de comunidad', 'Evento virtual con demo + Q&A + networking'),
  t('community', 'marketing', 'Crear servidor de Discord', 'Canales: announcements, feedback, help, off-topic'),
  t('community', 'marketing', 'Implementar foro de feature requests', 'Votación y priorización pública de features'),
  t('community', 'marketing', 'Diseñar programa de beta testers', 'Criterios de selección, beneficios, feedback loop'),
  t('community', 'marketing', 'Crear swag pack para top contributors', 'Stickers, t-shirt, early access para superfans'),
  t('community', 'marketing', 'Organizar hackathon de integraciones', 'Hackathon de 48h para crear plugins/integraciones'),
  t('community', 'marketing', 'Crear changelog público', 'Updates semanales con what\'s new y coming soon'),
  t('community', 'marketing', 'Diseñar community guidelines', 'Código de conducta, moderación, escalation'),
  t('community', 'marketing', 'Implementar user-generated content', 'Templates, workflows, guides creados por usuarios'),
  t('community', 'marketing', 'Planificar annual community conference', 'Evento anual con speakers, workshops, networking'),

  // Dungeon: El Algoritmo
  t('algoritmo', 'marketing', 'Analizar caída de reach orgánico', 'De 10K a 500 impresiones. ¿Qué cambió?'),
  t('algoritmo', 'marketing', 'Hackear el algoritmo de LinkedIn', 'Experimentar con formatos, timing, engagement pods'),
  t('algoritmo', 'marketing', 'Crear strategy anti-shadowban', 'Diversificar canales para no depender de uno'),
  t('algoritmo', 'marketing', 'Boss: El Algoritmo', 'Recuperar reach orgánico de 0% a niveles sostenibles'),

  // ═══════════════════════════════════════
  // INFRA — 5 zonas + dungeon (~60 tasks)
  // ═══════════════════════════════════════

  // DevOps
  t('devops', 'infra', 'Configurar GitHub Actions para CI', 'Build, lint, test on every PR + deploy on merge'),
  t('devops', 'infra', 'Crear Dockerfile multi-stage', 'Build stage + slim runtime image < 100MB'),
  t('devops', 'infra', 'Configurar Kubernetes cluster', 'EKS/GKE con autoscaling, namespaces, RBAC'),
  t('devops', 'infra', 'Implementar blue-green deployments', 'Zero-downtime deploys con rollback automático'),
  t('devops', 'infra', 'Crear Infrastructure as Code con Terraform', 'VPC, subnets, RDS, ElastiCache, S3 en código'),
  t('devops', 'infra', 'Configurar staging environment', 'Réplica de prod con data sanitizada'),
  t('devops', 'infra', 'Implementar GitOps con ArgoCD', 'Declarative deployments vía git'),
  t('devops', 'infra', 'Crear runbook de deploys', 'Documentación paso a paso de deployment process'),
  t('devops', 'infra', 'Configurar preview environments', 'Un entorno efímero por cada PR'),
  t('devops', 'infra', 'Automatizar database migrations en deploy', 'Migraciones como step del pipeline de CI/CD'),

  // CI/CD
  t('cicd', 'infra', 'Configurar linting automatizado', 'ESLint + Prettier en pre-commit y CI'),
  t('cicd', 'infra', 'Implementar semantic versioning automático', 'Conventional commits + auto changelog + tag'),
  t('cicd', 'infra', 'Crear pipeline de build y test', 'Parallel jobs: lint, unit test, integration test, build'),
  t('cicd', 'infra', 'Configurar code coverage reports', 'Coverage gates: mínimo 80% en PRs'),
  t('cicd', 'infra', 'Implementar dependency scanning', 'Renovate/Dependabot + security audit automático'),
  t('cicd', 'infra', 'Crear release pipeline', 'Build → test → stage deploy → smoke test → prod deploy'),
  t('cicd', 'infra', 'Configurar branch protection rules', 'Required reviews, status checks, no force push'),
  t('cicd', 'infra', 'Implementar container image scanning', 'Trivy/Snyk scan on every Docker build'),
  t('cicd', 'infra', 'Crear pipeline de E2E en CI', 'Cypress/Playwright tests contra staging environment'),
  t('cicd', 'infra', 'Automatizar release notes', 'Auto-generate from PRs merged since last release'),

  // Seguridad
  t('security', 'infra', 'Implementar HTTPS everywhere', 'TLS 1.3, HSTS headers, certificate auto-renewal'),
  t('security', 'infra', 'Configurar WAF rules', 'Rate limiting, SQL injection, XSS protection'),
  t('security', 'infra', 'Implementar CSP headers', 'Content Security Policy strict para prevenir XSS'),
  t('security', 'infra', 'Crear secret management con Vault', 'HashiCorp Vault para API keys, DB passwords, tokens'),
  t('security', 'infra', 'Auditar dependencias por vulnerabilidades', 'npm audit + Snyk scan + dependency review'),
  t('security', 'infra', 'Implementar 2FA para admin accounts', 'TOTP + backup codes para cuentas privilegiadas'),
  t('security', 'infra', 'Configurar network segmentation', 'VPC con subnets públicas/privadas, security groups'),
  t('security', 'infra', 'Crear incident response plan', 'Playbook para data breach, DDoS, compromised keys'),
  t('security', 'infra', 'Implementar audit logging', 'Log every admin action, API key usage, permission change'),
  t('security', 'infra', 'Configurar CORS correctamente', 'Whitelist de dominios, credentials handling, preflight'),

  // Testing
  t('testing', 'infra', 'Escribir tests E2E con Playwright', 'Happy paths: login, dashboard, settings, billing'),
  t('testing', 'infra', 'Crear suite de unit tests', '95% coverage en business logic modules'),
  t('testing', 'infra', 'Implementar integration tests de API', 'Test cada endpoint con datos reales en test DB'),
  t('testing', 'infra', 'Crear visual regression tests', 'Chromatic/Percy screenshots en cada PR'),
  t('testing', 'infra', 'Implementar load testing con k6', 'Simular 1000 usuarios concurrentes, identificar bottlenecks'),
  t('testing', 'infra', 'Crear smoke test suite para prod', 'Tests mínimos post-deploy para validar prod'),
  t('testing', 'infra', 'Implementar contract testing', 'Pact tests entre frontend y API'),
  t('testing', 'infra', 'Crear test data factories', 'Factories para generar data realista en tests'),
  t('testing', 'infra', 'Implementar chaos testing', 'Simular fallas de red, DB, external services'),
  t('testing', 'infra', 'Crear accessibility tests automatizados', 'axe-core + Lighthouse CI en cada PR'),

  // Monitoreo
  t('monitoring', 'infra', 'Configurar alertas de Datadog', 'APM, logs, infra metrics con alertas inteligentes'),
  t('monitoring', 'infra', 'Implementar distributed tracing', 'OpenTelemetry para trazar requests across services'),
  t('monitoring', 'infra', 'Crear dashboard de SLIs/SLOs', 'Availability, latency, error rate con error budgets'),
  t('monitoring', 'infra', 'Configurar log aggregation', 'ELK/Loki para centralizar logs de todos los servicios'),
  t('monitoring', 'infra', 'Implementar uptime monitoring', 'Checks cada 30s desde múltiples regiones'),
  t('monitoring', 'infra', 'Crear alertas de anomaly detection', 'ML-based alerts para patrones inusuales de tráfico'),
  t('monitoring', 'infra', 'Configurar PagerDuty rotation', 'On-call schedule con escalation policies'),
  t('monitoring', 'infra', 'Implementar error tracking con Sentry', 'Source maps, breadcrumbs, user context en errores'),
  t('monitoring', 'infra', 'Crear status page pública', 'Statuspage con incident history y component status'),
  t('monitoring', 'infra', 'Implementar cost monitoring', 'Alertas de billing cuando cloud costs excedan presupuesto'),

  // Dungeon: El Downtime
  t('downtime', 'infra', 'Crear post-mortem template', 'Timeline, root cause, impact, action items'),
  t('downtime', 'infra', 'Simular outage crítico con game day', 'Práctica de incident response con escenario realista'),
  t('downtime', 'infra', 'Implementar auto-recovery', 'Health checks + auto-restart + auto-scale bajo presión'),
  t('downtime', 'infra', 'Boss: El Outage Crítico', 'Viernes 5pm: prod está caído, 10K usuarios afectados. Go.'),
];
