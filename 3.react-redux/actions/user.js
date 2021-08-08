const login = (data) => {
  return (dispatch, getState) => {
    dispatch(loginRequest(data));

    try {
      setTimeout(() => {
        dispatch(
          loginSuccess({
            id: 1,
            name: "4leaf.njm",
            admin: false,
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(loginFailure(e));
    }
  };
};

const loginRequest = (data) => {
  return {
    type: "LOGIN_REQUEST",
    data,
  };
};

const loginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    data,
  };
};

const loginFailure = (error) => {
  return {
    type: "LOGIN_FAILURE",
    error,
  };
};

const logout = () => {
  return {
    type: "LOGOUT",
  };
};

module.exports = {
  login,
  logout,
};
