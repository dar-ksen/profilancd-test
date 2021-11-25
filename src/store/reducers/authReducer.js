import * as types from "../action-creators/types";

const initialState = {
  isAuth: false,
  error: "",
  user: {},
  isModalOpen: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case types.SET_USER:
      return { ...state, user: action.payload };
    case types.SET_ERROR:
      return { ...state, error: action.payload };
    case types.SET_MODAL:
      return { ...state, isModalOpen: action.payload };
    default:
      return state;
  }
};

export default authReducer;
