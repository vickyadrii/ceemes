import type { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  username: localStorage.getItem("user-data") || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      localStorage.setItem("user-data", action.payload.username);
    },
    logoutUser: (state) => {
      state.username = "";
      localStorage.removeItem("user-data");
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
