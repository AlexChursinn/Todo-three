import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">Note App</div>

      <ul className="navbar-nav">
        <li className="nav-item">
          {/* exact чтобы ссылка подсвечивалась активной */}
          <NavLink className="nav-link" to="/" exact="true">
            Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            Информация
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
