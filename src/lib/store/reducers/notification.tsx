import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';

interface NotificationObj {
  variant: string;
  severity: string;
  message: string;
  visibility: boolean;
}

const NOTIFICATION_OBJ: NotificationObj = {
  variant: 'outlined',
  severity: 'success',
  message: '',
  visibility: false,
};

export const notificationState =
  createAction<NotificationObj>('NOTIFICATION_OBJ');

const notificationReducer = createReducer(NOTIFICATION_OBJ, (builder) => {
  builder.addCase(
    notificationState,
    (_state, action: PayloadAction<NotificationObj>) => {
      return action.payload;
    }
  );
});

export default notificationReducer;
