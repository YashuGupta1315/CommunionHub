import { Link } from "react-router-dom";
import { useState } from "react";
import "./Headerstyle.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="main">
        <div className="logo-container">
          <img src="/assets/images/logoo.png" alt="CommunionHub Logo" />
          <h1 className="header-title">CommunionHub</h1>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <nav className={menuOpen ? "menu-active" : ""}>
          <ul>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/events" className="nav-link">Events</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
