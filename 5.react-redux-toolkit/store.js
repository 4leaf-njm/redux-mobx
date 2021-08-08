const reducer = require("./reducers");
const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");

const firstMiddleware = (store) => (next) => (action) => {
  console.log("액션 로깅", action);

  next(action);

  console.log("액션 종료");
};

const store = configureStore({
  reducer,
  middleware: [firstMiddleware, ...getDefaultMiddleware()], // middleware를 추가할 경우 thunk같은 내장된 middleware가 사라지기 때문에 getDefaultMiddleware를 넣어줌.
  devTools: process.env.NODE_ENV !== "production",
});

module.exports = store;
