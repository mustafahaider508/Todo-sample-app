import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import todoSlice from "./reducer/todoSlice";

export const store = configureStore({
  reducer: {
    todoSlice,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
