import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = ({ open, onClose, title, children }) => {
  // Gestion focus + fermeture clavier (ESC)
  useEffect(() => {
    if (!open) return;
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#212134] rounded-xl shadow-2xl p-8 min-w-[320px] max-w-full"
        style={{ minWidth: 320, maxWidth: 400 }}
        onClick={e => e.stopPropagation()}
        tabIndex={0}
        aria-labelledby="modal-title"
      >
        {title && <h2 id="modal-title" className="text-lg font-bold mb-3">{title}</h2>}
        <div>{children}</div>
        <div className="flex gap-4 mt-7">
          <button className="btn btn-secondary" onClick={onClose}>Annuler</button>
          <button className="btn btn-primary" onClick={() => { onClose(); /* Action personnalisable */ }}>Confirmer</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalPortal;

