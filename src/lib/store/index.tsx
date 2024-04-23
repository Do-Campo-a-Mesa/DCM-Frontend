import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';
import notification from './reducers/notification';

export const store = configureStore({
  reducer: {
    user,
    notification,
  },
});

export type RootState = ReturnType<typeof store.getState>;
