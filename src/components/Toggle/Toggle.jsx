import '../../styles/bertui-components.css';

export function Toggle({ checked, onChange, label, disabled }) {
  return (
    <label className={`bertui-toggle ${disabled ? 'bertui-toggle--disabled' : ''}`}>
      <input
        type="checkbox"
        className="bertui-toggle-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="bertui-toggle-track">
        <span className="bertui-toggle-thumb" />
      </span>
      {label && <span className="bertui-toggle-label">{label}</span>}
    </label>
  );
}
