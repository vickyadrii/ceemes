import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { SidebarItemType } from "@/types";
import { sidebarItems, MENU_GROUPS_KEY } from "@/constants";

const initialState: SidebarItemType[] = (() => {
  const stored = localStorage.getItem(MENU_GROUPS_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return sidebarItems;
    }
  }
  return sidebarItems;
})();

const menuGroupSlice = createSlice({
  name: "menuGroup",
  initialState,
  reducers: {
    setMenuGroups(_state, action: PayloadAction<SidebarItemType[]>) {
      localStorage.setItem(MENU_GROUPS_KEY, JSON.stringify(action.payload));
      return action.payload;
    },
    addMenuGroup(state, action: PayloadAction<SidebarItemType>) {
      const updated = [...state, action.payload];
      localStorage.setItem(MENU_GROUPS_KEY, JSON.stringify(updated));
      return updated;
    },
    updateMenuGroup(state, action: PayloadAction<{ index: number; data: SidebarItemType }>) {
      const updated = state.map((item, i) => (i === action.payload.index ? { ...item, ...action.payload.data } : item));
      localStorage.setItem(MENU_GROUPS_KEY, JSON.stringify(updated));
      return updated;
    },
    deleteMenuGroup(state, action: PayloadAction<number>) {
      const updated = state.filter((_, i) => i !== action.payload);
      localStorage.setItem(MENU_GROUPS_KEY, JSON.stringify(updated));
      return updated;
    },
  },
});

export const { setMenuGroups, addMenuGroup, updateMenuGroup, deleteMenuGroup } = menuGroupSlice.actions;

export default menuGroupSlice.reducer;
