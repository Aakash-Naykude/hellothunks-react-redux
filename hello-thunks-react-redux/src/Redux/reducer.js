import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
} from "./actionTypes";

const init = {
  isLoading: false,
  message: "",
  isError: false,
  isRegisterd: false,
};

export const registerReducer = (state = init, { type, paylaod }) => {
  switch (type) {
    case REGISTER_USER_LOADING:
      return {
        isLoading: true,
        isError: false,
      };
    case REGISTER_USER_SUCCESS:
      return {
        isLoading: false,
        message: paylaod,
        isError: false,
        isRegisterd: true,
      };
    case REGISTER_USER_ERROR:
      return {
        isLoading: false,
        message: paylaod,
        isError: true,
      };
    default:
      return state;
  }
};

const newinit = {
  isLoading: false,
  token: "token" || "",
  message: "",
  isError: false,
};
export const loginReducer = (state = newinit, { type, paylaod }) => {
  switch (type) {
    case LOGIN_USER_LOADING:
      return {
        isLoading: true,
        token: "",
        message: "",
        isError: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        isLoading: false,
        token: paylaod,
        message: "",
        isError: false,
      };
    case LOGIN_USER_ERROR:
      return {
        isLoading: false,
        token: paylaod,
        message: paylaod,
        isError: true,
      };
    default:
      return state;
  }
};
