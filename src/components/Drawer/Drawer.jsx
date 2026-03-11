import { useEffect } from 'react';
import '../../styles/bertui-components.css';

export function Drawer({ open, onClose, title, children, side = 'right', size = '320px' }) {
  useEffect(() => {
    function handler(e) { if (e.key === 'Escape') onClose?.(); }
    if (open) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  return (
    <>
      {open && <div className="bertui-drawer-overlay" onClick={onClose} />}
      <div
        className={`bertui-drawer bertui-drawer--${side} ${open ? 'bertui-drawer--open' : ''}`}
        style={side === 'left' || side === 'right' ? { width: size } : { height: size }}
      >
        <div className="bertui-drawer-header">
          {title && <h2 className="bertui-drawer-title">{title}</h2>}
          <button className="bertui-modal-close" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="bertui-drawer-body">{children}</div>
      </div>
    </>
  );
}
