import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <ul className="header__nav nav">
      <li>
        <Link className="nav__link" to="/news">
          Новости
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
