import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      user: null,
      token: null,
      imageCamera: null,
      localId: "Pepitoasdasdazz1414wfgsfsf",
      profileImage: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value = {
        user: action.payload.email,
        token: action.payload.idToken,
      };
    },
    clearUser: (state) => (state.value = { user: null, token: null }),
    setCameraImage: (state, action) => {
      state.value = {
        ...state.value,
        imageCamera: action.payload,
      };
    },
    setProfileImage: (state, action) => {
      state.value = {
        ...state.value,
        profileImage: action.payload,
      };
    },
  },
});

export const { setUser, clearUser, setCameraImage, setProfileImage } = authSlice.actions;

export default authSlice.reducer;
