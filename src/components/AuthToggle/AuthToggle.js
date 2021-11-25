import React from "react";
import { useSelector } from "react-redux";
import useActions from "../../hooks/useActions";
import Button from "../UI/Button";

const AuthToggle = () => {
  const { modalShow, logout } = useActions();
  const { isAuth } = useSelector((state) => state.auth);

  if (isAuth) {
    return <Button onClick={() => logout()}>Выход</Button>;
  }
  return <Button onClick={() => modalShow(true)}>Вход</Button>;
};

export default AuthToggle;
