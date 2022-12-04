import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

export const commentSlice = createSlice({
  name: "comment",
  initialState: { value: data.comments },
  reducers: {
    addComment: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addComment } = commentSlice.actions;
export const selectComment = (state) => state.comment.value;
export default commentSlice.reducer;
