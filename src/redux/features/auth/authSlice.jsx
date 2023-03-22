import { createSlice } from "@reduxjs/toolkit";

const name = JSON.parse(localStorage.getItem("name")) ?? "";
let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

if (isLoggedIn === undefined || isLoggedIn === null) {
  isLoggedIn = false;
  localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
}

const initialState = {
  isLoggedIn,
  name,
  user: {
    name: "",
    email: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      console.log("Action payload:", action.payload);
      state.isLoggedIn = action.payload;
      localStorage.setItem("isLoggedIn", JSON.stringify(action.payload));

      if (action.payload) {
        if (isLoggedIn === undefined || isLoggedIn === null) {
          isLoggedIn = false;
          localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
        }
      }
    },
    SET_NAME(state, action) {
      localStorage.setItem("name", JSON.stringify(action.payload));
      state.name = action.payload;
    },
    SET_USER(state, action) {
      const profile = action.payload;
      state.user.name = profile.name;
      state.user.email = profile.email;
    },
  },
});

export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
