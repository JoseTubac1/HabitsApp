import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "../features/habitSlice";
import userReducer from "../features/habitSlice";


export const makeStore = () => {
  return configureStore({
    reducer: {
        habit: habitReducer,
        user: userReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
