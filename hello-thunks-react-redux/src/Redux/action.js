import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
} from "./actionTypes";

export const regReqloading = () => {
  return {
    type: REGISTER_USER_LOADING,
  };
};
export const regReqSuccess = (message) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: message,
  };
};
export const regReqError = (message) => {
  return {
    type: REGISTER_USER_ERROR,
    payload: message,
  };
};
export const userRegistrationProcess = (userdata) => (dispatch) => {
  dispatch(regReqloading());
  fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
    method: "POST",
    body: JSON.stringify(userdata),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch(regReqSuccess(res));
    })
    .catch((err) => {
      console.log(err);
      dispatch(regReqError(err));
    });
};
export const loginReqloading = () => {
  return {
    type: LOGIN_USER_LOADING,
  };
};
export const loginReqSuccess = (message) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: message,
  };
};
export const loginReqError = (message) => {
  return {
    type: LOGIN_USER_ERROR,
    payload: message,
  };
};