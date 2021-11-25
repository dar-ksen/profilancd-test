import React from "react";
import { useSelector } from "react-redux";
import Container from "../components/UI/Container";

const About = () => {
  const { isAuth, user } = useSelector((state) => state.auth);

  const userName = isAuth ? user?.username : "Гость";
  return (
    <Container>
      <h1 className="title">Привет {userName}</h1>
    </Container>
  );
};

export default About;
