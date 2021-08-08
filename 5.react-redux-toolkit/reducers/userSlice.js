const { createSlice } = require("@reduxjs/toolkit");
const { login } = require("../actions/user");

const initialState = {
  isLogin: false,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // toolkit이 logout Action을 자동으로 생성해줌.
    // actions 폴더에서는 비동기 Action만 넣으면 됨.
    logout(state, action) {
      state.data = null;
    },
  }, // user 안에서 쓰일 동기적인 action
  extraReducers: {
    [login.pending](state, action) {
      state.data = null;
      state.isLogin = false;
    },
    [login.fulfilled](state, action) {
      state.data = action.payload;
      state.isLogin = true;
    },
    [login.rejected](state, action) {
      state.data = null;
      state.isLogin = false;
    },
  }, // user 밖에서 쓰일 action 이나 비동기적인 action
});

module.exports = userSlice;
