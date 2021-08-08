import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./actions/user";

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
    dispatch(logout());
  }, []);

  return (
    <div>
      {user.isLogin ? (
        <div>
          {user.data.name}님<button onClick={logoutHandler}>로그아웃</button>
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
