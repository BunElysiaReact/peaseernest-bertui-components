import { useState, useRef, useEffect } from 'react';
import '../../styles/bertui-components.css';

export function DropdownItem({ label, onClick, icon, divider }) {
  if (divider) return <div className="bertui-dropdown-divider" />;
  return (
    <button className="bertui-dropdown-item" onClick={onClick}>
      {icon && <span className="bertui-dropdown-item-icon">{icon}</span>}
      {label}
    </button>
  );
}

export function Dropdown({ trigger, children, items, align = 'left' }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="bertui-dropdown" ref={ref}>
      <div className="bertui-dropdown-trigger" onClick={() => setOpen(o => !o)}>
        {trigger}
      </div>
      {open && (
        <div className={`bertui-dropdown-menu bertui-dropdown-menu--${align}`}>
          {items
            ? items.map((item, i) =>
                item.divider
                  ? <div key={i} className="bertui-dropdown-divider" />
                  : <DropdownItem key={i} {...item} onClick={() => { item.onClick?.(); setOpen(false); }} />
              )
            : children}
        </div>
      )}
    </div>
  );
}
