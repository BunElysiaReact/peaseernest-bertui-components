import { useEffect } from 'react';
import '../../styles/bertui-components.css';

export function Modal({ open, onClose, title, children, size = 'md' }) {
  useEffect(() => {
    function handler(e) { if (e.key === 'Escape') onClose?.(); }
    if (open) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="bertui-modal-overlay" onClick={onClose}>
      <div
        className={`bertui-modal bertui-modal--${size}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="bertui-modal-header">
          {title && <h2 className="bertui-modal-title">{title}</h2>}
          <button className="bertui-modal-close" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="bertui-modal-body">{children}</div>
      </div>
    </div>
  );
}
