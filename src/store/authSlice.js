import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isLoggedIn: false,
  userData: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeLogin: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    storeLogout: (state, action) => {
      state.isLoggedIn = false;
      state.userData = null;
    },
    storeUser: (state, action) => {
      state.userData = action.payload;
    },

  }
})

export const {storeLogin, storeLogout, storeUser} = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;