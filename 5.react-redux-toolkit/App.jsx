import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit"; // reselect
/* 비동기 요청은 actions로 불러옴 */
import { login } from "./actions/user";
import { addPost } from "./actions/post";

/* 동기 요청은 reducer로 불러옴 */
const userSlice = require("./reducers/userSlice");

const priceSelector = (state) => state.user.prices;
const sumPriceSelector = createSelector(priceSelector, (prices) =>
  prices.reduce((a, c) => a + c, 0)
);

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const prices = useSelector(sumPriceSelector);

  const [text, setText] = useState("");

  const loginHandler = useCallback(() => {
    dispatch(
      login({
        id: "4leaf.njm",
        password: "4leaf0309!!",
      })
    );
  }, []);

  const logoutHandler = useCallback(() => {
    dispatch(userSlice.actions.logout());
  }, []);

  const addPostHandler = useCallback(() => {
    dispatch(addPost());
  }, []);

  const changeTextHandler = useCallback((e) => {
    setText(e.target.value);
  }, []);

  // const totalPrice = useMemo(() => {
  //   console.log("memo");
  //   return prices.reduce((a, c) => a + c, 0);
  // }, [prices]);

  return (
    <div>
      {user.isLogin ? (
        <div>
          {user.data.name}님<button onClick={logoutHandler}>로그아웃</button>
          <button onClick={addPostHandler}>게시글 작성</button>
          <div>{prices}원</div>
          <input type="text" value={text} onChange={changeTextHandler} />
        </div>
      ) : (
        <>
          로그인해주세요.<button onClick={loginHandler}>로그인</button>
        </>
      )}
    </div>
  );
};

export default App;
