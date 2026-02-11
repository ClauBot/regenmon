interface StatBarProps {
  label: string;
  emoji: string;
  value: number;
  color: string;
}

function getProgressClass(color: string): string {
  switch (color) {
    case '#4CAF50':
      return 'is-success';
    case '#FFC107':
      return 'is-warning';
    case '#F44336':
      return 'is-error';
    default:
      return 'is-success';
  }
}

export default function StatBar({ label, emoji, value, color }: StatBarProps) {
  const progressClass = getProgressClass(color);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.25rem',
          fontSize: '0.7rem',
        }}
      >
        <span>
          {emoji} {label}
        </span>
        <span>{value}</span>
      </div>
      <progress
        className={`nes-progress ${progressClass}`}
        value={value}
        max={100}
      />
    </div>
  );
}
