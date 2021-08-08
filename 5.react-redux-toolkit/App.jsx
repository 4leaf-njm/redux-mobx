import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
/* 비동기 요청은 actions로 불러옴 */
import { login } from "./actions/user";
import { addPost } from "./actions/post";

/* 동기 요청은 reducer로 불러옴 */
const userSlice = require("./reducers/userSlice");

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

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

  return (
    <div>
      {user.isLogin ? (
        <div>
          {user.data.name}님<button onClick={logoutHandler}>로그아웃</button>
          <button onClick={addPostHandler}>게시글 작성</button>
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
