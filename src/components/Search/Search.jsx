import { useState } from 'react';
import '../../styles/bertui-components.css';

export function Search({
  placeholder = 'Search...',
  onSearch,
  onChange,
  debounce: debounceMs = 0,
}) {
  const [value, setValue] = useState('');
  const [timer, setTimer] = useState(null);

  function handleChange(e) {
    const val = e.target.value;
    setValue(val);
    if (onChange) onChange(val);

    if (debounceMs > 0) {
      clearTimeout(timer);
      setTimer(setTimeout(() => onSearch && onSearch(val), debounceMs));
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && onSearch) onSearch(value);
  }

  return (
    <div className="bertui-search">
      <span className="bertui-search-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>
      <input
        type="text"
        className="bertui-search-input"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {value && (
        <button
          className="bertui-search-clear"
          onClick={() => { setValue(''); onChange && onChange(''); }}
          aria-label="Clear"
        >
          ×
        </button>
      )}
    </div>
  );
}
