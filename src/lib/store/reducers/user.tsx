import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';

interface UserObj {
  id: string;
  name: string;
  profile: string;
}

const USER_OBJ: UserObj = {
  id: '',
  name: '',
  profile: '',
};

export const userState = createAction<UserObj>('USER_OBJ');

const userReducer = createReducer(USER_OBJ, (builder) => {
  builder.addCase(userState, (_state, action: PayloadAction<UserObj>) => {
    return action.payload;
  });
});

export default userReducer;
