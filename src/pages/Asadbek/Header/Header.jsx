import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">The Christmas Boutique</div>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Shop All</li>
          <li>Christmas Trees</li>
          <li>Unique Ornaments</li>
          <li>Holiday Lights</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
