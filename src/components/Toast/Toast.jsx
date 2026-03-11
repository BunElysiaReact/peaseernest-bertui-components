import { useState, useCallback, useEffect, createContext, useContext } from 'react';
import '../../styles/bertui-components.css';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback(({ message, type = 'info', duration = 3000 }) => {
    const id = Date.now();
    setToasts(t => [...t, { id, message, type }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), duration);
  }, []);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="bertui-toast-container">
        {toasts.map(t => (
          <div key={t.id} className={`bertui-toast bertui-toast--${t.type}`}>
            <span>{t.message}</span>
            <button className="bertui-toast-close" onClick={() => setToasts(ts => ts.filter(x => x.id !== t.id))}>×</button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
  return ctx;
}
