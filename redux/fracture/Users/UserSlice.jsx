import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addNewUser } = userSlice.actions;

export default userSlice.reducer;
