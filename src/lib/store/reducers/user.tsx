import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { UserObj } from '../../interfaces/User';

const USER_OBJ: UserObj = {
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  token: '',
};

export const userState = createAction<UserObj>('USER_OBJ');

const userReducer = createReducer(USER_OBJ, (builder) => {
  builder.addCase(userState, (_state, action: PayloadAction<UserObj>) => {
    return action.payload;
  });
});

export default userReducer;
