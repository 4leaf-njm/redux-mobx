const { produce } = require("immer");

const initialState = {
  isLogin: false,
  data: null,
};

const userReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "LOGIN_REQUEST":
        draft.data = null;
        draft.isLogin = false;
        break;
      case "LOGIN_SUCCESS":
        draft.data = action.data;
        draft.isLogin = true;
        break;
      case "LOGIN_FAILURE":
        draft.data = null;
        draft.isLogin = false;
        break;
      case "LOGOUT":
        draft.data = null;
        draft.isLogin = false;
        break;
      default:
        break;
    }
  });
};

module.exports = userReducer;
