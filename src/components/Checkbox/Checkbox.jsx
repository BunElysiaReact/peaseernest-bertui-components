import '../../styles/bertui-components.css';

export function Checkbox({ checked, onChange, label, disabled, indeterminate }) {
  return (
    <label className={`bertui-checkbox ${disabled ? 'bertui-checkbox--disabled' : ''}`}>
      <input
        type="checkbox"
        className="bertui-checkbox-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        ref={el => el && (el.indeterminate = !!indeterminate)}
      />
      <span className="bertui-checkbox-box">
        {checked && !indeterminate && (
          <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="1,5 4,9 11,1" />
          </svg>
        )}
        {indeterminate && <span className="bertui-checkbox-dash" />}
      </span>
      {label && <span className="bertui-checkbox-label">{label}</span>}
    </label>
  );
}
