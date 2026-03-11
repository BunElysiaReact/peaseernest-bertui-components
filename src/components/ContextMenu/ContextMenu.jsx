import { useState, useEffect, useRef } from 'react';
import '../../styles/bertui-components.css';

export function ContextMenu({ children, items }) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  function handleContextMenu(e) {
    e.preventDefault();
    setPos({ x: e.clientX, y: e.clientY });
    setVisible(true);
  }

  useEffect(() => {
    function close() { setVisible(false); }
    document.addEventListener('click', close);
    document.addEventListener('keydown', e => e.key === 'Escape' && close());
    return () => { document.removeEventListener('click', close); };
  }, []);

  return (
    <div onContextMenu={handleContextMenu} style={{ display: 'contents' }}>
      {children}
      {visible && (
        <div
          ref={menuRef}
          className="bertui-contextmenu"
          style={{ top: pos.y, left: pos.x }}
        >
          {items.map((item, i) =>
            item.divider
              ? <div key={i} className="bertui-dropdown-divider" />
              : (
                <button
                  key={i}
                  className="bertui-dropdown-item"
                  onClick={() => { item.onClick?.(); setVisible(false); }}
                >
                  {item.icon && <span className="bertui-dropdown-item-icon">{item.icon}</span>}
                  {item.label}
                </button>
              )
          )}
        </div>
      )}
    </div>
  );
}
