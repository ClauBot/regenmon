export type TaskCategory = 'map' | 'mechanics' | 'art' | 'audio' | 'integration';
export type TaskStatus = 'pending' | 'in_progress' | 'completed';
export type AgentStatus = 'idle' | 'traveling' | 'working' | 'resting';
export type DashboardMode = 'observe' | 'direct' | 'explore';
export type PersonalityStyle = 'formal' | 'casual' | 'poetic' | 'energetic' | 'mysterious';

export interface AgentRole {
  agentName: string;
  title: string;
  categories: TaskCategory[];
  workSpeed: number; // multiplier: 0.8-1.5
}

export interface ZoneTask {
  id: string;
  zoneId: string;
  category: TaskCategory;
  title: string;
  description: string;
  status: TaskStatus;
  assignedAgentId: string | null;
  progress: number; // 0-100
  difficulty: number; // 1-5
  estimatedTicks: number;
}

export interface Agent {
  id: string;
  name: string;
  speciesId: string;
  personalityId: PersonalityStyle;
  currentZoneId: string;
  targetZoneId: string | null;
  travelPath: string[];
  travelProgress: number; // 0-1 between current path step
  travelStepIndex: number;
  status: AgentStatus;
  currentTaskId: string | null;
  energy: number; // 0-100
  autoMode: boolean;
  energyWarning?: boolean;
}

export interface AgentPersonality {
  id: string;
  style: string;
  greeting: string;
  working: string[];
  completed: string[];
  idle: string[];
  traveling: string[];
}

export interface ChatMessage {
  id: string;
  agentId: string;
  role: 'user' | 'agent';
  text: string;
  timestamp: number;
}

export interface PlayerState {
  speciesId: string | null;
  currentZoneId: string;
  facing: 'up' | 'down' | 'left' | 'right';
}

export interface AgentDashboardState {
  agents: Agent[];
  tasks: ZoneTask[];
  chatHistory: ChatMessage[];
  dashboardMode: DashboardMode;
  playerState: PlayerState;
}
