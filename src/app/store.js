import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "../features/commentSlice";
import currentUserReducer from "../features/currentuserSlice";

export default configureStore({
  reducer: {
    comment: commentReducer,
    currentUser: currentUserReducer,
  },
});
