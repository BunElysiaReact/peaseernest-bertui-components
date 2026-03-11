import { useState } from 'react';
import '../../styles/bertui-components.css';

export function Tooltip({ children, text, position = 'top' }) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="bertui-tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className={`bertui-tooltip bertui-tooltip--${position}`}>
          {text}
        </span>
      )}
    </span>
  );
}
