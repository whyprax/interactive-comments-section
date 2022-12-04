import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

export const currentuserSlice = createSlice({
  name: "currentUser",
  initialState: {
    value: data.currentUser,
  },
  reducers: {
    getCurrentUser: (state) => {
      return state.value.username;
    },
  },
});

export const { getCurrentUser } = currentuserSlice.actions;
export const selectCurrentUser = (state) => state.currentUser.value;
export default currentuserSlice.reducer;
