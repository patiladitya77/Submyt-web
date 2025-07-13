import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import formReducer from "./formSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
  },
});

export default appStore;
