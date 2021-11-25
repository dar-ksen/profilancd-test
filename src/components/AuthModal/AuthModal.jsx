import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal";
import Button from "../UI/Button";
import Input from "../UI/Input";
import useActions from "../../hooks/useActions";

const AuthModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { modalShow, login } = useActions();
  const { isModalOpen, error, isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    setUsername("");
    setPassword("");
  }, [isAuth]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const renderContent = () => (
    <>
      <Input
        type="text"
        label="Имя пользователя"
        id="name"
        value={username}
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        label="Пароль"
        id="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div className="error-message">{error}</div>}
    </>
  );

  const renderActions = () => (
    <>
      <Button type="submit">Авторизоваться</Button>
      <Button type="button" onClick={() => modalShow(false)}>
        Закрыть
      </Button>
    </>
  );

  if (!isModalOpen) {
    return null;
  }
  return (
    <Modal
      Tag="form"
      title="Окно авторизации"
      content={renderContent()}
      actions={renderActions()}
      onClose={() => modalShow(false)}
      onSubmit={onFormSubmit}
    />
  );
};

export default AuthModal;
