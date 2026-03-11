import { useState, createContext, useContext } from 'react';
import '../../styles/bertui-components.css';

const SidebarContext = createContext({ collapsed: false });

export function SidebarItem({ label, to, icon, children }) {
  const { collapsed } = useContext(SidebarContext);
  return (
    <a href={to} className="bertui-sidebar-item">
      {icon && <span className="bertui-sidebar-item-icon">{icon}</span>}
      {!collapsed && (
        <span className="bertui-sidebar-item-label">
          {label || children}
        </span>
      )}
    </a>
  );
}

export function Sidebar({ children, items, defaultCollapsed = false, position = 'left' }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <SidebarContext.Provider value={{ collapsed }}>
      <aside
        className={[
          'bertui-sidebar',
          collapsed ? 'bertui-sidebar--collapsed' : '',
          `bertui-sidebar--${position}`,
        ].join(' ')}
      >
        <button
          className="bertui-sidebar-hamburger"
          onClick={() => setCollapsed(c => !c)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="bertui-sidebar-nav">
          {/* items prop support */}
          {items && items.map((item, i) => (
            <SidebarItem key={i} label={item.label} to={item.to} icon={item.icon} />
          ))}

          {/* children support */}
          {children}
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
}
