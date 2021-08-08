const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.data, ...state];
    default:
      return [...state];
  }
};

module.exports = postReducer;
