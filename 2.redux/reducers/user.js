const initialState = {
  isLogin: false,
  data: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
        data: action.data,
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
