import { useState, useCallback } from 'react';
import { useRegenmon } from './hooks/useRegenmon';
import { useChiptuneMusic } from './hooks/useChiptuneMusic';
import CreateScreen from './components/CreateScreen';
import RegenmonDisplay from './components/RegenmonDisplay';
import HatchingAnimation from './components/HatchingAnimation';
import WorldBackground from './components/WorldBackground';
import Dashboard from './components/Dashboard';
import AgentDashboard from './components/AgentDashboard';
import SpaceTravel from './components/SpaceTravel';
import { ConfirmResetDialog } from './components/ConfirmResetDialog';
import type { RegenmonType, RegenmonSpecies } from './types';
import './App.css';

function App() {
  const { regenmon, create, reset, feed, play } = useRegenmon();
  const { isPlaying, toggle: musicToggle } = useChiptuneMusic();
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showAgents, setShowAgents] = useState(false);
  const [hatching, setHatching] = useState(false);
  const [hatchSpecies, setHatchSpecies] = useState<RegenmonSpecies | null>(null);

  const handleCreate = (name: string, type: RegenmonType) => {
    const species = create(name, type);
    setHatchSpecies(species);
    setHatching(true);
  };

  const handleHatchComplete = useCallback(() => {
    setHatching(false);
    setHatchSpecies(null);
  }, []);

  const handleResetRequest = () => setShowResetConfirm(true);
  const handleResetCancel = () => setShowResetConfirm(false);
  const handleResetConfirm = () => {
    reset();
    setShowResetConfirm(false);
  };

  // Floating agent button (visible on all screens except agent dashboard itself)
  const agentButton = !showAgents && (
    <button
      type="button"
      onClick={() => setShowAgents(true)}
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 999,
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: '2px solid #FFC10766',
        backgroundColor: '#1a1a2e',
        color: '#FFC107',
        fontSize: '18px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 12px rgba(255,193,7,0.3)',
        fontFamily: '"Press Start 2P", cursive',
      }}
      title="Ver agentes trabajando"
    >
      {'⚙'}
    </button>
  );

  if (showAgents) {
    return <AgentDashboard onClose={() => setShowAgents(false)} />;
  }

  if (showDashboard) {
    return (
      <>
        {agentButton}
        <Dashboard
          onClose={() => setShowDashboard(false)}
          musicToggle={musicToggle}
          isMusicPlaying={isPlaying}
        />
      </>
    );
  }

  if (hatching && hatchSpecies) {
    return (
      <>
        {agentButton}
        <HatchingAnimation species={hatchSpecies} onComplete={handleHatchComplete} />
      </>
    );
  }

  if (regenmon === null) {
    return (
      <>
        <SpaceTravel />
        <div className="app-container">
          <CreateScreen onCreate={handleCreate} onDashboard={() => setShowDashboard(true)} />
        </div>
        {agentButton}
      </>
    );
  }

  return (
    <>
      <WorldBackground type={regenmon.type} />
      <div className="app-container">
        <RegenmonDisplay
          regenmon={regenmon}
          onReset={handleResetRequest}
          onDashboard={() => setShowDashboard(true)}
          onFeed={feed}
          onPlay={play}
          musicToggle={musicToggle}
          isMusicPlaying={isPlaying}
        />
        <ConfirmResetDialog
          open={showResetConfirm}
          onCancel={handleResetCancel}
          onConfirm={handleResetConfirm}
        />
      </div>
      {agentButton}
    </>
  );
}

export default App;
