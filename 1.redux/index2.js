const { createStore } = require("redux");

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.data,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [action.data, ...state.posts],
      };
    default:
      return {
        ...state,
      };
  }
};

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);

console.log(store.getState());

const login = (data) => {
  return {
    type: "LOGIN",
    data,
  };
};

const logout = () => {
  return {
    type: "LOGOUT",
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

store.dispatch(
  login({
    id: 1,
    name: "4leaf.njm",
    admin: true,
  })
);

console.log(store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요.",
  })
);

console.log(store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "안녕하세요2.",
  })
);

console.log(store.getState());

store.dispatch(logout());

console.log(store.getState());
