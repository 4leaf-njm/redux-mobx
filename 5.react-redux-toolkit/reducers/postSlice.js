const { createSlice } = require("@reduxjs/toolkit");
const { addPost } = require("../actions/post");

const initialState = {
  data: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  // extraReducer는 builder로 작성하는게 더 나음.
  extraReducers: (builder) =>
    builder
      .addCase(addPost.pending, (state, action) => {})
      .addCase(addPost.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {})
      .addMatcher(
        (action) => {
          return action.type.includes("/pending");
        },
        (state, action) => {
          // addCase 여러개 중 pending 상태일 때에 실행 됨. 공통된 상태일 때 어떤 기능을 실행시키고자 할 때 사용
        }
      )
      .addDefaultCase((state, action) => {
        // default 인 경우
      }),
});

module.exports = postSlice;
