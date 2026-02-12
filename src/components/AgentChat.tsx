import { useState, useRef, useEffect, useMemo } from 'react';
import { SPECIES_LIST, TYPE_CONFIG } from '../constants';
import type { Agent, ChatMessage, ZoneTask } from '../agentTypes';
import { generateResponse } from '../agentPersonalities';
import RegenmonCharacter from './RegenmonCharacter';

interface AgentChatProps {
  agent: Agent;
  chatHistory: ChatMessage[];
  tasks: ZoneTask[];
  onSendChat: (agentId: string, role: 'user' | 'agent', text: string) => void;
  onMoveAgent: (agentId: string, zoneId: string) => void;
  onAssignTask: (agentId: string, taskId: string) => void;
  onRestAgent: (agentId: string) => void;
  onBack: () => void;
}

export default function AgentChat({
  agent,
  chatHistory,
  tasks,
  onSendChat,
  onMoveAgent,
  onAssignTask,
  onRestAgent,
  onBack,
}: AgentChatProps) {
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const species = useMemo(
    () => SPECIES_LIST.find((s) => s.id === agent.speciesId)!,
    [agent.speciesId],
  );
  const config = TYPE_CONFIG[species.type];

  const messages = useMemo(
    () => chatHistory.filter((m) => m.agentId === agent.id).slice(-50),
    [chatHistory, agent.id],
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages.length]);

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    setInput('');
    onSendChat(agent.id, 'user', text);

    // Generate response with keyword parsing
    const response = generateResponse(agent, text, tasks);

    // Execute action
    if (response.action) {
      switch (response.action.type) {
        case 'move':
          onMoveAgent(agent.id, response.action.zoneId);
          break;
        case 'assign':
          onAssignTask(agent.id, response.action.taskId);
          break;
        case 'rest':
          onRestAgent(agent.id);
          break;
      }
    }

    // Send agent response after a small delay
    setTimeout(() => {
      onSendChat(agent.id, 'agent', response.text);
    }, 300);
  }

  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        border: `2px solid ${config.color}44`,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        fontFamily: '"Press Start 2P", cursive',
        overflow: 'hidden',
      }}
    >
      {/* Chat header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          padding: '0.3rem 0.4rem',
          borderBottom: `1px solid ${config.color}33`,
          backgroundColor: '#111',
        }}
      >
        <button
          type="button"
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#888',
            cursor: 'pointer',
            fontSize: '0.8rem',
            padding: '0.1rem',
          }}
        >
          {'\u2190'}
        </button>
        <RegenmonCharacter species={species} size="sm" animate />
        <span style={{ fontSize: '0.75rem', color: '#fff' }}>{agent.name}</span>
        <span style={{ fontSize: '0.55rem', color: config.color }}>{species.speciesName}</span>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '0.3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem',
        }}
      >
        {messages.length === 0 && (
          <div style={{ fontSize: '0.55rem', color: '#555', textAlign: 'center', padding: '1rem 0' }}>
            Escribe un mensaje para hablar con {agent.name}.
            <br /><br />
            Prueba: "hola", "estado", "trabaja", "ve a [zona]", "descansa", "ayuda"
          </div>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%',
            }}
          >
            <div
              style={{
                fontSize: '0.65rem',
                color: msg.role === 'user' ? '#fff' : config.color,
                backgroundColor: msg.role === 'user' ? '#333' : `${config.color}15`,
                padding: '0.2rem 0.3rem',
                borderRadius: msg.role === 'user' ? '6px 6px 0 6px' : '6px 6px 6px 0',
                border: `1px solid ${msg.role === 'user' ? '#444' : config.color + '33'}`,
                lineHeight: 1.8,
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div
        style={{
          display: 'flex',
          gap: '0.2rem',
          padding: '0.3rem',
          borderTop: '1px solid #333',
          backgroundColor: '#111',
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Escribe un mensaje..."
          style={{
            flex: 1,
            fontSize: '0.65rem',
            padding: '0.25rem 0.35rem',
            backgroundColor: '#0a0a0a',
            color: '#fff',
            border: '1px solid #333',
            borderRadius: 4,
            fontFamily: '"Press Start 2P", cursive',
            outline: 'none',
          }}
        />
        <button
          type="button"
          className="nes-btn is-primary"
          style={{ fontSize: '0.55rem', padding: '0.2rem 0.4rem' }}
          onClick={handleSend}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
