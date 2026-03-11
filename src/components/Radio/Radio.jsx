import '../../styles/bertui-components.css';

export function Radio({ value, checked, onChange, label, disabled }) {
  return (
    <label className={`bertui-radio ${disabled ? 'bertui-radio--disabled' : ''}`}>
      <input
        type="radio"
        className="bertui-radio-input"
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="bertui-radio-circle">
        {checked && <span className="bertui-radio-dot" />}
      </span>
      {label && <span className="bertui-checkbox-label">{label}</span>}
    </label>
  );
}

export function RadioGroup({ options = [], value, onChange, name }) {
  return (
    <div className="bertui-radio-group">
      {options.map((opt, i) => (
        <Radio
          key={i}
          value={opt.value ?? opt}
          label={opt.label ?? opt}
          checked={value === (opt.value ?? opt)}
          onChange={() => onChange(opt.value ?? opt)}
          disabled={opt.disabled}
        />
      ))}
    </div>
  );
}
