const { createStore, compose, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const reducer = require("./reducers");

const initialState = {
  user: {
    isLogin: false,
    data: null,
  },
  isLogin: true,
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

const firstMiddleware = (store) => (next) => (action) => {
  console.log("액션 로깅", action);

  next(action);

  console.log("액션 종료");
};

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
    : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
