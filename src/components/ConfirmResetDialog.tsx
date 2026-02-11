interface ConfirmResetDialogProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function ConfirmResetDialog({ open, onCancel, onConfirm }: ConfirmResetDialogProps) {
  if (!open) {
    return null;
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
        }}
        onClick={onCancel}
      />
      <div
        className="nes-dialog"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
          background: 'white',
          padding: '2rem',
          maxWidth: '90vw',
          width: 400,
        }}
      >
        <p className="title nes-text is-error">¿Reiniciar?</p>
        <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
          Se perderá tu Regenmon actual y volverás a la pantalla de creación.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <button type="button" className="nes-btn" onClick={onCancel}>
            Cancelar
          </button>
          <button type="button" className="nes-btn is-error" onClick={onConfirm}>
            Sí, reiniciar
          </button>
        </div>
      </div>
    </>
  );
}
