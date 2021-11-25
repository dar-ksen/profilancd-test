import * as types from "./types";
import users from "../../mock/users";

export const setUser = (user) => ({ type: types.SET_USER, payload: user });
export const setIsAuth = (auth) => ({ type: types.SET_AUTH, payload: auth });
export const setError = (payload) => ({ type: types.SET_ERROR, payload });
export const modalShow = (payload) => ({ type: types.SET_MODAL, payload });

export const login = (username, password) => (dispatch) => {
  dispatch(setError(""));
  const mockUser = users.find(
    (user) => user.username === username && user.password === password
  );
  if (mockUser) {
    localStorage.setItem("auth", "true");
    localStorage.setItem("username", mockUser.username);
    dispatch(setUser(mockUser));
    dispatch(setIsAuth(true));
    dispatch(modalShow(false));
  } else {
    dispatch(setError("Некорректный логин или пароль"));
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("auth");
  localStorage.removeItem("username");
  dispatch(setUser({}));
  dispatch(setIsAuth(false));
};
