const { createStore, compose, applyMiddleware } = require("redux");
const reducer = require("./reducers");
const { login, logout } = require("./actions/user");
const { addPost } = require("./actions/post");

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

// middleware는 3단 함수 구조이다.
/* 
    function(store) {
        return function(dispatch) {
            return function(action) {

            }
        }
    }
*/
const firstMiddleware = (store) => (next) => (action) => {
  // dispatch 전 기능 추가

  console.log("액션 로깅", action);

  next(action); // next는 dispatch이다
  // dispatch 후 기능 추가

  console.log("액션 종료");
};

// redux-thunk middleware
const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    // 비동기인 경우 action을 함수로 만듬
    // 함수로 온 action을 thunk가 실행
    return action(store.dispatch, store.getState);
  }
  return next(action); // 동기인 경우 action 은 객체,
};

// compose는 함수를 합성 시켜줌, applyMiddleware 하나만 써도 되지만, middleware 외에 DevTools 같은 것을 연결할 때 사용
// const enhancer = compose(applyMiddleware());
const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);

// middleware는 dispatch와 reducer 사이에서 실행되는 함수
const store = createStore(reducer, initialState, enhancer);

console.log(store.getState());

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
