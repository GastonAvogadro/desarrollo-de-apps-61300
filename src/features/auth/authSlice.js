import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: {
            user: null,
            token: null,
        },
    },
    reducers: {
        setUser: (state, action) => {
            state.value = {
                user: action.payload.data.email,
                token: action.payload.data.idToken,
            };
        },
        clearUser: (state) => (state.value = { user: null, token: null }),
    },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;