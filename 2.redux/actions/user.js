const login = (data) => {
  // async action creator
  return (dispatch, getState) => {
    // async action

    // request
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
  // sync action creator
  return {
    type: "LOGIN_REQUEST",
    data,
  };
};

const loginSuccess = (data) => {
  // sync action creator
  return {
    type: "LOGIN_SUCCESS",
    data,
  };
};

const loginFailure = (error) => {
  // sync action creator
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
