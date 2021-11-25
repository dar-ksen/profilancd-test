import React, { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import AuthModal from "./components/AuthModal/AuthModal";
import useActions from "./hooks/useActions";

const App = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") });
      setIsAuth(true);
    }
  }, [setUser, setIsAuth]);

  const [showAuthModal, setShowAuthModal] = useState(true);
  const openAuthModal = () => setShowAuthModal(true);
  return (
    <BrowserRouter>
      <Header openAuthModal={openAuthModal} />
      <main className="main">
        <AppRouter />
      </main>
      <AuthModal showModal={showAuthModal} setShowModal={setShowAuthModal} />
    </BrowserRouter>
  );
};

export default App;
