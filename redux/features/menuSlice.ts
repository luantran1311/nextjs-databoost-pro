import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  isOpened: boolean;
};

const initialState : MenuState = {
    isOpened: false,
}

export const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    open: (state) => {
        state.isOpened = true;
    },
    close: (state) => {
        state.isOpened = false;
    }
  },
});

export const {
    open, close
} = menu.actions;
export default menu.reducer;
