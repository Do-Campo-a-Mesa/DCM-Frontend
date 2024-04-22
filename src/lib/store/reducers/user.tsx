import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';

interface UserObj {
  id: string;
  first_name?: string;
  last_name?: string;
  email: string;
  token: string;
}

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
