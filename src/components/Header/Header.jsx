import React from "react";
import { Link } from "react-router-dom";
import AuthToggle from "../AuthToggle";
import Nav from "../Nav";
import Container from "../UI/Container";
import "./Header.scss";
import logo from "./logo.svg";

const Header = () => {
  return (
    <div className="header">
      <Container className="header__container">
        <Link to="/">
          <img src={logo} alt="лого" width="257" height="48" />
        </Link>
        <Nav />
        <AuthToggle />
      </Container>
    </div>
  );
};

export default Header;
