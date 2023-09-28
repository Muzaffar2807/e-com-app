import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "profileSlice",
  initialState: {
    name: "",
    email: "",
    userId: "",
    token: "",
    role: "",
    phone: "",
    seq_no: "",
  },
  reducers: {
    fetchUserProfile(state, action) {
      return {
        ...state,
        name: action.payload.email,
        email: action.payload.email,
        userId: action.payload.userId,
        phone: action.payload.phone,
        token: action.payload.token,
        role: action.payload.role,
        seq_no: action.payload.seq_no,
      };
    },
    updateUserProfile(state, action) {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        token: action.payload.token,
        role: action.payload.role,
        userId: action.payload.userId,
        seq_no: action.payload.seq_no,
      };
    },
  },
});

export const { updateUserProfile, fetchUserProfile } = userSlice.actions;

export default userSlice;
