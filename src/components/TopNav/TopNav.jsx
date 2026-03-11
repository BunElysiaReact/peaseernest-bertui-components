import '../../styles/bertui-components.css';

export function TopNavItem({ label, to, children }) {
  return (
    <a href={to} className="bertui-topnav-item">
      {label || children}
    </a>
  );
}

export function TopNav({ children, items, logo, logoTo = '/', sticky = true }) {
  return (
    <header className={['bertui-topnav', sticky ? 'bertui-topnav--sticky' : ''].join(' ')}>
      {logo && (
        <a href={logoTo} className="bertui-topnav-logo">
          {logo}
        </a>
      )}

      <nav className="bertui-topnav-nav">
        {/* items prop support */}
        {items && items.map((item, i) => (
          <TopNavItem key={i} label={item.label} to={item.to} />
        ))}

        {/* children support */}
        {children}
      </nav>
    </header>
  );
}
