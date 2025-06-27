import { configureStore } from "@reduxjs/toolkit";
import menuGroupReducer from "@/store/menuGroupSlice";

export const store = configureStore({
  reducer: {
    menuGroup: menuGroupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;