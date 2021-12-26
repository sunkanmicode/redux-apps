import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const themeSlice = createSlice({
  name: "color",
  initialState: { value: initialState },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
    
  },
});

export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;
