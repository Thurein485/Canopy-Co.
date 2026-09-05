import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { navigationItems } from "../data/siteData";

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { currentUser, isAuthenticated } = useAuth();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container">
        <nav className="site-nav">
          <NavLink className="brand" to="/">
            <span className="brand-mark">
              <img src="/brand-mark.svg" alt="Canopy Co. brand mark" />
            </span>
            <span className="brand-copy">
              <strong>Canopy Co.</strong>
              <small>Park Learning Hub</small>
            </span>
          </NavLink>

          <button className="nav-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links-wrap ${menuOpen ? "is-open" : ""}`}>
            <ul className="nav-links">
              {navigationItems.map((item) => (
                <li key={item.to}>
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to={item.to} end={item.to === "/"}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="nav-account">
              {isAuthenticated ? (
                <NavLink className="nav-profile-chip nav-profile-chip-minimal" to="/dashboard" aria-label="Open profile dashboard">
                  <span>{currentUser.name.slice(0, 1).toUpperCase()}</span>
                </NavLink>
              ) : (
                <>
                  <NavLink className="btn btn-outline-canopy nav-cta" to="/login">
                    Login
                  </NavLink>
                  <NavLink className="btn btn-canopy nav-cta" to="/signup">
                    Sign up
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
