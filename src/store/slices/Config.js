import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "configSlice",
  initialState: {},
  reducers: {
    updateConfig(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateConfig } = configSlice.actions;

export default configSlice;
