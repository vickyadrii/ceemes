import { configureStore } from "@reduxjs/toolkit";
import menuGroupReducer from "@/store/menuGroupSlice";
import userReducer from '@/store/userSlice';

export const store = configureStore({
  reducer: {
    menuGroup: menuGroupReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;