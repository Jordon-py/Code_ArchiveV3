// Sidebar.jsx
import React from 'react';
import './Sidebar.css';

/**
 * Sidebar
 * A fixed left‑side navigation bar with always‑visible links.
 *
 * Props:
 *  - logo: React node or image URL
 *  - links: array of { label: string, href: string }
 */
const Sidebar = ({ logo, links }) => (
  <nav className="sidebar">
    <div className="sidebar__logo">
      {typeof logo === 'string' ? <img src={logo} alt="Logo" /> : logo}
    </div>

    <ul className="sidebar__links">
      {links.map((link, idx) => (
        <li key={idx} className="sidebar__item">
          <a href={link.href} className="sidebar__link">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Sidebar;
