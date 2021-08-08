const { createStore } = require("redux");

// reducer
const reducer = (state, action) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...state,
        compA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...state,
        compB: action.data,
      };
    case "CHANGE_COMP_C":
      return {
        ...state,
        compC: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

// store
const store = createStore(reducer, initialState);

console.log(store.getState());

// actionCreator
const changeCompA = (data) => {
  // action
  return {
    type: "CHANGE_COMP_A",
    data: "b",
  };
};

store.dispatch(changeCompA("b"));

console.log(store.getState());
