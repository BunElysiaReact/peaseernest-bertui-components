import '../../styles/bertui-components.css';

export function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  hint,
  disabled,
  icon,
  ...rest
}) {
  return (
    <div className="bertui-input-wrapper">
      {label && <label className="bertui-input-label">{label}</label>}
      <div className={`bertui-input-field ${error ? 'bertui-input-field--error' : ''} ${disabled ? 'bertui-input-field--disabled' : ''}`}>
        {icon && <span className="bertui-input-icon">{icon}</span>}
        <input
          type={type}
          className="bertui-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
      </div>
      {error && <span className="bertui-input-error">{error}</span>}
      {hint && !error && <span className="bertui-input-hint">{hint}</span>}
    </div>
  );
}
