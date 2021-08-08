const initialState = {
  isLogin: false,
  data: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogin: true,
        data: action.data,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isLogin: false,
        data: null,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
        data: null,
      };
    default:
      return {
        ...state,
      };
  }
};

module.exports = userReducer;
