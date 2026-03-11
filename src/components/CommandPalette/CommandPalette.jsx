import { useState, useEffect, useRef } from 'react';
import '../../styles/bertui-components.css';

export function CommandPalette({ items = [], hotkey = 'k', onSelect }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const filtered = query
    ? items.filter(i => i.label.toLowerCase().includes(query.toLowerCase()))
    : items;

  useEffect(() => {
    function handler(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === hotkey) {
        e.preventDefault();
        setOpen(o => !o);
        setQuery('');
      }
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [hotkey]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 10);
  }, [open]);

  if (!open) return null;

  return (
    <div className="bertui-cmdpalette-overlay" onClick={() => setOpen(false)}>
      <div className="bertui-cmdpalette" onClick={e => e.stopPropagation()}>
        <div className="bertui-cmdpalette-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            className="bertui-cmdpalette-input"
            placeholder="Type a command..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <kbd className="bertui-cmdpalette-esc">esc</kbd>
        </div>
        <div className="bertui-cmdpalette-results">
          {filtered.length === 0 && (
            <div className="bertui-cmdpalette-empty">No results for "{query}"</div>
          )}
          {filtered.map((item, i) => (
            <button
              key={i}
              className="bertui-cmdpalette-item"
              onClick={() => { onSelect?.(item); setOpen(false); item.onClick?.(); }}
            >
              {item.icon && <span className="bertui-cmdpalette-item-icon">{item.icon}</span>}
              <span>{item.label}</span>
              {item.shortcut && <kbd className="bertui-cmdpalette-shortcut">{item.shortcut}</kbd>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
