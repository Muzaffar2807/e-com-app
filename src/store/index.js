import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user";
import { combineReducers } from "redux";
import configSlice from "./slices/Config";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  config: configSlice.reducer,
});

const store = () =>
  configureStore({
    reducer: rootReducer,
  });

export default store;
