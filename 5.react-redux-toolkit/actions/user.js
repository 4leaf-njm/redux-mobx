const { createAsyncThunk } = require("@reduxjs/toolkit");

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  /*
    pending, fulfilled, rejected (thunk 용어)
    (loading), (success), (failure) 
  */

  /*
    try catch를 쓰면 에러가 나도 thunk가 fulfilled(success) 상태를 return하기 때문에 try catch를 안쓰는게 좋다.
  */

  // data에는 login 요청 오는 data가 넘어온다.
  // 서버에 요청을 보내는 과정은 생략한 상태이고, result는 서버에서 응답해온 데이터이다.
  const result = await delay(500, {
    id: 1,
    name: "4leaf.njm",
  });
  return result;
});

module.exports = {
  login,
};
