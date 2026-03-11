import '../../styles/bertui-components.css';

export function Select({ label, options = [], value, onChange, placeholder, error, disabled }) {
  return (
    <div className="bertui-input-wrapper">
      {label && <label className="bertui-input-label">{label}</label>}
      <div className={`bertui-select-wrapper ${error ? 'bertui-input-field--error' : ''}`}>
        <select
          className="bertui-select"
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt, i) => (
            <option key={i} value={opt.value ?? opt}>{opt.label ?? opt}</option>
          ))}
        </select>
        <span className="bertui-select-arrow">▾</span>
      </div>
      {error && <span className="bertui-input-error">{error}</span>}
    </div>
  );
}
