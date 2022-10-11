import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayUser: true,
  displayLogoutBtn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleMiniSearchBtnClickEffectOnUser: (state) => {
      // check middleHeaderSlice.js (line 25)
      if (window.innerWidth <= 585) {
        state.displayUser = false;
      }
    },
    handleMiddleHeaderArrowBtnsClickEffectOnUser: (state) => {
      state.displayUser = true;
    },
    handleDisplayLogoutBtn: (state) => {
      state.displayLogoutBtn = !state.displayLogoutBtn;
    },
  },
});

export const {
  handleMiniSearchBtnClickEffectOnUser,
  handleMiddleHeaderArrowBtnsClickEffectOnUser,
  handleDisplayLogoutBtn,
} = userSlice.actions;

export const DisplayUser = (state) => state.user.displayUser;
export const DisplayLogoutBtn = (state) => state.user.displayLogoutBtn;

export default userSlice.reducer;
