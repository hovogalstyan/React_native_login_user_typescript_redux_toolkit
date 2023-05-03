import { combineReducers, configureStore } from "@reduxjs/toolkit";

const Root = combineReducers({});

export const store = configureStore({ reducer: Root });
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
