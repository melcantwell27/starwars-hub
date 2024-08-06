// /redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './slices/characterSlice'; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
